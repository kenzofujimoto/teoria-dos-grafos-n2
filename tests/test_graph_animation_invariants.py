import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "assets" / "js" / "site-data.js"


def load_site_data() -> dict:
    text = DATA_FILE.read_text(encoding="utf-8")
    match = re.search(r"window\.GRAPH_SITE_DATA\s*=\s*(\{.*\});\s*$", text, re.S)
    assert match, "site-data.js must assign JSON to window.GRAPH_SITE_DATA"
    return json.loads(match.group(1))


def edge_key(edge: dict) -> tuple[str, str]:
    return tuple(sorted((str(edge["u"]), str(edge["v"]))))


def graph_edges(graph: dict) -> list[dict]:
    normalized = []
    for index, edge in enumerate(graph["edges"]):
        if isinstance(edge, list):
            normalized.append({"id": f"e{index}", "u": str(edge[0]), "v": str(edge[1])})
        else:
            normalized.append({"id": str(edge["id"]), "u": str(edge["u"]), "v": str(edge["v"])})
    return normalized


def graph_vertices(graph: dict) -> list[str]:
    return [str(vertex["id"] if isinstance(vertex, dict) else vertex) for vertex in graph["vertices"]]


def assert_path_is_connected(edges: dict, path: list[str]) -> tuple[str, str]:
    assert path, "Path must be explicitly defined"
    current = str(edges[path[0]]["u"])
    start = current
    for edge_id in path:
        edge = edges[edge_id]
        endpoints = {str(edge["u"]), str(edge["v"])}
        assert current in endpoints, f"Path is disconnected at edge {edge_id}"
        current = str(edge["v"] if current == str(edge["u"]) else edge["u"])
    return start, current


def assert_valid_matching(edges: dict, matching: set[str]):
    seen = set()
    for edge_id in matching:
        edge = edges[edge_id]
        endpoints = {str(edge["u"]), str(edge["v"])}
        assert not (seen & endpoints), f"Matching edge {edge_id} shares an endpoint"
        seen |= endpoints
    return seen


def assert_edges_alternate_by_matching(path: list[str], matching: set[str]):
    states = [edge_id in matching for edge_id in path]
    for left, right in zip(states, states[1:]):
        assert left != right, "Path edges must alternate between matching and non-matching edges"


def matching_vertices(edges: dict, matching: set[str]) -> set[str]:
    vertices = set()
    for edge_id in matching:
        edge = edges[edge_id]
        vertices |= {str(edge["u"]), str(edge["v"])}
    return vertices


def test_eulerian_animation_uses_each_edge_once():
    data = load_site_data()
    animation = data["animations"]["eulerianTrail"]
    edges = {edge["id"]: edge for edge in animation["graph"]["edges"]}
    trail = animation["trail"]

    assert trail, "Eulerian trail must be explicitly defined"
    assert len(trail) == len(set(trail)), "Eulerian trail repeats an edge id"
    assert set(trail) == set(edges), "Eulerian trail must use every edge exactly once"

    undirected_pairs_seen = set()
    for edge_id in trail:
        pair = edge_key(edges[edge_id])
        assert pair not in undirected_pairs_seen, f"Repeated undirected edge {pair}"
        undirected_pairs_seen.add(pair)

    current = str(edges[trail[0]]["u"])
    for edge_id in trail:
        edge = edges[edge_id]
        endpoints = {str(edge["u"]), str(edge["v"])}
        assert current in endpoints, f"Trail is disconnected at edge {edge_id}"
        current = str(edge["v"] if current == str(edge["u"]) else edge["u"])


def test_hamiltonian_animation_visits_vertices_once_before_returning():
    data = load_site_data()
    animation = data["animations"]["hamiltonianCycle"]
    vertices = {str(vertex["id"]) for vertex in animation["graph"]["vertices"]}
    cycle = [str(vertex) for vertex in animation["cycle"]]

    assert cycle[0] == cycle[-1], "Hamiltonian cycle must return to start"
    assert set(cycle[:-1]) == vertices
    assert len(cycle[:-1]) == len(set(cycle[:-1])), "Hamiltonian cycle repeats a vertex"


def test_mst_animation_is_tree_with_expected_cost():
    data = load_site_data()
    animation = data["animations"]["kruskalMst"]
    graph_edges = {edge["id"]: edge for edge in animation["graph"]["edges"]}
    chosen = animation["chosenEdges"]
    vertices = animation["graph"]["vertices"]

    assert len(chosen) == len(vertices) - 1
    assert sum(graph_edges[edge_id]["weight"] for edge_id in chosen) == animation["expectedCost"]

    parent = {str(vertex["id"]): str(vertex["id"]) for vertex in vertices}

    def find(vertex: str) -> str:
        while parent[vertex] != vertex:
            parent[vertex] = parent[parent[vertex]]
            vertex = parent[vertex]
        return vertex

    for edge_id in chosen:
        edge = graph_edges[edge_id]
        left = find(str(edge["u"]))
        right = find(str(edge["v"]))
        assert left != right, f"MST chosen edge {edge_id} creates a cycle"
        parent[left] = right


def test_colorings_match_graph_constraints():
    data = load_site_data()

    vertex_coloring = data["animations"]["vertexColoring"]
    vertex_colors = vertex_coloring["colors"]
    for edge in vertex_coloring["graph"]["edges"]:
        assert vertex_colors[str(edge["u"])] != vertex_colors[str(edge["v"])]

    edge_coloring = data["animations"]["edgeColoring"]
    edge_colors = edge_coloring["colors"]
    incident_colors: dict[str, set[str]] = {}
    for edge in edge_coloring["graph"]["edges"]:
        color = edge_colors[edge["id"]]
        for endpoint in (str(edge["u"]), str(edge["v"])):
            incident_colors.setdefault(endpoint, set())
            assert color not in incident_colors[endpoint]
            incident_colors[endpoint].add(color)


def test_coloring_exercise_solution_colors_are_valid():
    data = load_site_data()
    exercises = {exercise["id"]: exercise for exercise in data["exercises"]}

    vertex_coloring_ids = [
        "coloracao-hospital",
        "coloracao-produtos-quimicos",
        "final-q1-centros-treinamento",
    ]
    edge_coloring_ids = [
        "coloracao-arestas-vizing",
        "final-q4-supercopa-jogos",
    ]

    for exercise_id in vertex_coloring_ids:
        exercise = exercises[exercise_id]
        colors = exercise.get("solutionColors", {}).get("vertices", {})
        assert set(colors) == set(graph_vertices(exercise["graph"])), f"{exercise_id} must color every vertex"
        for edge in graph_edges(exercise["graph"]):
            assert colors[str(edge["u"])] != colors[str(edge["v"])], f"{exercise_id} repeats a vertex color on {edge['id']}"

    for exercise_id in edge_coloring_ids:
        exercise = exercises[exercise_id]
        edges = graph_edges(exercise["graph"])
        colors = exercise.get("solutionColors", {}).get("edges", {})
        assert set(colors) == {edge["id"] for edge in edges}, f"{exercise_id} must color every edge"
        incident_colors: dict[str, set[str]] = {}
        for edge in edges:
            color = colors[edge["id"]]
            for endpoint in (edge["u"], edge["v"]):
                incident_colors.setdefault(endpoint, set())
                assert color not in incident_colors[endpoint], f"{exercise_id} repeats an edge color at {endpoint}"
                incident_colors[endpoint].add(color)


def test_matching_and_cover_are_valid():
    data = load_site_data()
    animation = data["animations"]["matchingAndCover"]
    edges = {edge["id"]: edge for edge in animation["graph"]["edges"]}

    matched_vertices = set()
    for edge_id in animation["matching"]:
        edge = edges[edge_id]
        endpoints = {str(edge["u"]), str(edge["v"])}
        assert not (matched_vertices & endpoints)
        matched_vertices |= endpoints

    cover = {str(vertex) for vertex in animation["cover"]}
    for edge in edges.values():
        assert str(edge["u"]) in cover or str(edge["v"]) in cover


def test_alternating_path_animation_alternates_matching_status():
    data = load_site_data()
    animation = data["animations"]["alternatingPath"]
    edges = {edge["id"]: edge for edge in animation["graph"]["edges"]}
    matching = set(animation["matching"])
    path = animation["path"]

    assert set(path) <= set(edges)
    assert_valid_matching(edges, matching)
    assert_path_is_connected(edges, path)
    assert_edges_alternate_by_matching(path, matching)


def test_augmenting_path_animation_starts_and_ends_free_and_increases_matching():
    data = load_site_data()
    animation = data["animations"]["augmentingPath"]
    edges = {edge["id"]: edge for edge in animation["graph"]["edges"]}
    matching = set(animation["matching"])
    new_matching = set(animation["newMatching"])
    path = animation["path"]

    matched_vertices = assert_valid_matching(edges, matching)
    new_matched_vertices = assert_valid_matching(edges, new_matching)
    start, end = assert_path_is_connected(edges, path)
    assert_edges_alternate_by_matching(path, matching)

    assert start not in matched_vertices
    assert end not in matched_vertices
    assert len(new_matching) == len(matching) + 1
    assert len(new_matched_vertices) == len(matched_vertices) + 2


def test_matching_exercise_augmenting_paths_increase_the_matching():
    data = load_site_data()
    exercise = next(item for item in data["exercises"] if item["id"] == "berge-test-drive")
    edges = {edge["id"]: edge for edge in graph_edges(exercise["graph"])}

    prompt_matching = set(exercise["promptMatching"])
    final_matching = set(exercise["solutionMatching"])
    assert_valid_matching(edges, prompt_matching)
    assert_valid_matching(edges, final_matching)
    assert len(final_matching) > len(prompt_matching)

    augmenting_steps = [step for step in exercise["solutionSteps"] if step.get("augmentingPath")]
    assert len(augmenting_steps) >= 2

    for step in augmenting_steps:
        before = set(step["matchingBefore"])
        path = [str(edge_id) for edge_id in step["augmentingPath"]]
        after = set(step["matchingAfter"])
        start, end = assert_path_is_connected(edges, path)
        saturated_before = matching_vertices(edges, before)

        assert_valid_matching(edges, before)
        assert_valid_matching(edges, after)
        assert_edges_alternate_by_matching(path, before)
        assert start not in saturated_before
        assert end not in saturated_before
        assert after == (before - (set(path) & before)) | (set(path) - before)
        assert len(after) == len(before) + 1


def test_vertex_cover_walkthrough_covers_edges_cumulatively():
    data = load_site_data()
    animation = data["animations"]["vertexCoverWalkthrough"]
    edges = {edge["id"]: edge for edge in animation["graph"]["edges"]}
    cover = {str(vertex) for vertex in animation["cover"]}

    assert animation["cover"] == ["2", "5", "4"]
    assert "e67" not in edges

    for edge_id, edge in edges.items():
        assert str(edge["u"]) in cover or str(edge["v"]) in cover, f"{edge_id} is not covered"

    covered_edges = set()
    for step in animation["steps"]:
        highlighted = set(step.get("highlightEdges", []))
        if highlighted:
            assert highlighted >= covered_edges
            covered_edges = highlighted

    assert covered_edges == set(edges)


def test_flow_iteration_edge_labels_match_highlighted_paths():
    data = load_site_data()

    for animation_id in ["flowResidual", "minCostResidual"]:
        animation = data["animations"][animation_id]
        edges = {edge["id"]: edge for edge in animation["graph"]["edges"]}
        running_flow = 0

        for step in animation["steps"]:
            highlighted = set(step.get("highlightEdges", []))
            labels = step.get("edgeLabels", {})

            assert highlighted <= set(edges), f"{animation_id} highlights an unknown edge"
            assert set(labels) <= set(edges), f"{animation_id} labels an unknown edge"

            if step.get("bottleneck") is None:
                continue

            assert highlighted, f"{animation_id} bottleneck steps must highlight the path"
            assert highlighted <= set(labels), f"{animation_id} bottleneck path must show updated residual labels"
            assert step["bottleneck"] > 0
            running_flow += step["bottleneck"]
            assert f"gargalo={step['bottleneck']}" in step["text"].lower()
            assert f"fluxo acumulado={running_flow}" in step["text"].lower()
