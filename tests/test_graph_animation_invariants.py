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


def test_vertex_cover_walkthrough_covers_edges_cumulatively():
    data = load_site_data()
    animation = data["animations"]["vertexCoverWalkthrough"]
    edges = {edge["id"]: edge for edge in animation["graph"]["edges"]}
    cover = {str(vertex) for vertex in animation["cover"]}

    for edge_id, edge in edges.items():
        assert str(edge["u"]) in cover or str(edge["v"]) in cover, f"{edge_id} is not covered"

    covered_edges = set()
    for step in animation["steps"]:
        highlighted = set(step.get("highlightEdges", []))
        if highlighted:
            assert highlighted >= covered_edges
            covered_edges = highlighted

    assert covered_edges == set(edges)
