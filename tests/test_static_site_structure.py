import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "assets" / "js" / "site-data.js"
CSS_FILE = ROOT / "assets" / "css" / "site.css"
JS_FILE = ROOT / "assets" / "js" / "site.js"
THEORY_PAGE = ROOT / "teoria" / "index.html"
EXERCISES_PAGE = ROOT / "exercicios" / "index.html"


def load_site_data() -> dict:
    text = DATA_FILE.read_text(encoding="utf-8")
    match = re.search(r"window\.GRAPH_SITE_DATA\s*=\s*(\{.*\});\s*$", text, re.S)
    assert match, "site-data.js must assign JSON to window.GRAPH_SITE_DATA"
    return json.loads(match.group(1))


def test_multipage_site_shell_exists():
    required_files = [
        "index.html",
        "teoria/index.html",
        "exercicios/index.html",
        "assets/css/site.css",
        "assets/js/site-data.js",
        "assets/js/site.js",
    ]

    for relative_path in required_files:
        assert (ROOT / relative_path).exists(), f"Missing {relative_path}"


def test_theory_topics_cover_all_uploaded_pdfs():
    data = load_site_data()
    topics = data["theoryTopics"]
    slugs = {topic["slug"] for topic in topics}

    expected_slugs = {
        "conceitos-basicos-conectividade",
        "grafos-planares-k-partidos",
        "percursos-eulerianos-hamiltonianos",
        "arvore-geradora-fundamentos",
        "kruskal-prim",
        "coloracao-vertices",
        "coloracao-arestas",
        "emparelhamentos-1",
        "emparelhamentos-2",
        "coberturas",
        "fluxos-1",
        "fluxos-2",
        "fluxos-3",
        "fluxo-custo-minimo",
    }

    assert expected_slugs <= slugs
    assert len(topics) >= len(expected_slugs)

    for topic in topics:
        assert topic["sourcePdf"].endswith(".pdf")
        assert topic["summary"]
        assert len(topic["sections"]) >= 3
        assert topic["animations"], f"{topic['slug']} needs at least one visual animation"


def test_exercises_include_full_prompt_and_solution():
    data = load_site_data()
    exercises = data["exercises"]

    assert len(exercises) >= 16
    for exercise in exercises:
        assert exercise["title"]
        assert exercise["sourcePdf"].endswith(".pdf")
        assert len(exercise["prompt"]) >= 80, f"{exercise['id']} has an incomplete prompt"
        assert exercise["questions"], f"{exercise['id']} must list the requested items"
        assert len(exercise["solution"]) >= 120, f"{exercise['id']} has a shallow solution"
        assert exercise.get("graph"), f"{exercise['id']} must include a graph/visual model"


def test_final_image_exercises_include_complete_statements_and_matrices():
    data = load_site_data()
    exercises = {exercise["id"]: exercise for exercise in data["exercises"]}

    expected = {
        "final-q1-centros-treinamento": (8, "Copa do Mundo de 2026", "menor número de turnos"),
        "final-q2-barracas-iluminacao": (10, "Festa Junina", "Barraca 1 à Barraca 3"),
        "final-q3-rede-som": (6, "Rede Central de Distribuição de Som", "comprimento total mínimo"),
        "final-q4-supercopa-jogos": (6, "Supercopa das Nações", "Classe 1"),
    }

    for exercise_id, (size, phrase_a, phrase_b) in expected.items():
        exercise = exercises[exercise_id]
        matrix = exercise.get("matrix")

        assert phrase_a in exercise["prompt"]
        exercise_text = " ".join([exercise["prompt"], " ".join(exercise["questions"]), exercise["solution"]])
        assert phrase_b in exercise_text
        assert matrix, f"{exercise_id} must include the original matrix"
        assert len(matrix["headers"]) == size
        assert len(matrix["rows"]) == size
        assert all(len(row) == size for row in matrix["rows"])


def test_theory_topics_are_deep_enough_for_study():
    data = load_site_data()
    topics = {topic["slug"]: topic for topic in data["theoryTopics"]}

    required_terms = {
        "conceitos-basicos-conectividade": [
            "dual direcional",
            "grafo complementar",
            "k-regular",
            "subconjunto de articulação",
            "SCAM",
            "h-conexo",
            "percursos internamente disjuntos",
        ],
        "grafos-planares-k-partidos": [
            "região externa",
            "n - m + r = 2",
            "k-partido",
            "bipartido",
            "conjunto independente",
            "ciclo ímpar",
        ],
        "percursos-eulerianos-hamiltonianos": [
            "trilha",
            "circuito euleriano",
            "grafo euleriano",
            "semi-euleriano",
            "caminho hamiltoniano",
            "ciclo hamiltoniano",
            "Ore",
            "Dirac",
            "PCV",
        ],
        "arvore-geradora-fundamentos": [
            "subgrafo gerador",
            "n-1",
            "árvore parcial",
            "propriedade do corte",
            "custo total",
        ],
        "kruskal-prim": [
            "ordenação",
            "componentes",
            "rejeita",
            "T",
            "V-T",
            "fronteira",
        ],
        "coloracao-vertices": [
            "k-coloração",
            "número cromático",
            "partição cromática",
            "clique",
            "Teorema das 4 cores",
            "coloração sequencial",
            "coloração por classe",
        ],
        "coloracao-arestas": [
            "índice cromático",
            "Δ(G)",
            "Teorema de Vizing",
            "classe 1",
            "classe 2",
            "emparelhamento",
            "bipartido",
        ],
        "emparelhamentos-1": [
            "maximal",
            "máximo",
            "perfeito",
            "satura",
            "vértice livre",
            "α'",
        ],
        "emparelhamentos-2": [
            "caminho alternante",
            "caminho aumentante",
            "diferença simétrica",
            "Teorema de Berge",
            "Teorema de Hall",
            "N(S)",
        ],
        "coberturas": [
            "cobertura mínima",
            "|M| ≤ |K|",
            "|M| = |K|",
            "König",
            "emparelhamento máximo",
        ],
        "fluxos-1": [
            "fonte",
            "sumidouro",
            "conservação",
            "capacidade",
            "corte",
            "capacidade do corte",
        ],
        "fluxos-2": [
            "Ford-Fulkerson",
            "grafo de folgas",
            "residual",
            "folga",
            "caminho aumentante",
            "fluxo máximo-corte mínimo",
        ],
        "fluxos-3": [
            "custo unitário",
            "custo total",
            "arco reverso",
            "custo negativo",
            "menor custo",
            "Bellman-Ford",
        ],
        "fluxo-custo-minimo": [
            "capacidade",
            "custo",
            "gargalo",
            "residual",
            "arco reverso",
            "custo negativo",
        ],
    }

    for slug, terms in required_terms.items():
        topic = topics[slug]
        theory_text = " ".join(
            [topic["title"], topic["summary"]]
            + [f"{section['heading']} {section['body']}" for section in topic["sections"]]
        )
        assert len(topic["sections"]) >= 6, f"{slug} needs more sections"
        assert sum(len(section["body"]) for section in topic["sections"]) >= 1200, f"{slug} is too shallow"
        for term in terms:
            assert term.lower() in theory_text.lower(), f"{slug} missing term: {term}"


def test_sidebar_is_collapsible_on_theory_and_exercises_pages():
    for page in (THEORY_PAGE, EXERCISES_PAGE):
        text = page.read_text(encoding="utf-8")
        assert "data-sidebar-toggle" in text
        assert "aria-expanded" in text
        assert "aria-controls" in text

    css = CSS_FILE.read_text(encoding="utf-8")
    js = JS_FILE.read_text(encoding="utf-8")

    assert ".rail-toggle" in css
    assert ".app-layout.rail-collapsed" in css
    assert ".rail.is-collapsed" in css
    assert "initRailToggle" in js
    assert "rail-collapsed" in js


def test_graphs_fit_available_width_without_horizontal_drag():
    css = CSS_FILE.read_text(encoding="utf-8")
    js = JS_FILE.read_text(encoding="utf-8")

    assert "min-width:680px" not in css.replace(" ", "")
    graph_box_rule = re.search(r"\.graph-box\s*\{(?P<body>[^}]*)\}", css, re.S)
    graph_svg_rule = re.search(r"\.graph-box svg\s*\{(?P<body>[^}]*)\}", css, re.S)

    assert graph_box_rule, "graph-box rule is required"
    assert graph_svg_rule, "graph-box svg rule is required"
    assert "overflow:hidden" in graph_box_rule.group("body").replace(" ", "")
    assert "max-width:100%" in graph_svg_rule.group("body").replace(" ", "")
    assert "height:auto" in graph_svg_rule.group("body").replace(" ", "")
    assert "fitGraphViewBox" in js
    assert "preserveAspectRatio" in js


def test_exercise_graphs_are_rendered_in_prompt_when_no_matrix_and_in_solution_area():
    js = JS_FILE.read_text(encoding="utf-8")
    data = load_site_data()
    graph_only_exercises = [
        exercise for exercise in data["exercises"]
        if exercise.get("graph") and not exercise.get("matrix")
    ]

    assert "solution-graph" in js
    assert graph_only_exercises, "At least one exercise must rely on a provided graph instead of a matrix"
    assert "renderStaticExerciseGraph(exercise.graph, 'Grafo fornecido')" in js
    assert "if(!exercise.matrix && exercise.graph)" in js
    assert "solution.append(renderExerciseGraph" in js


def test_kruskal_exercise_keeps_matrix_in_prompt_and_graph_steps_in_solution():
    data = load_site_data()
    exercise = next(item for item in data["exercises"] if item["id"] == "final-q3-rede-som")

    assert exercise["matrix"]["headers"] == ["1", "2", "3", "4", "5", "6"]
    assert exercise["graph"]["edges"], "Kruskal exercise needs a graph for the solution"
    steps = exercise.get("solutionSteps", [])
    assert len(steps) >= 6
    assert any("rejeita" in step["text"].lower() for step in steps)
    assert any(step.get("highlightEdges") for step in steps)


def test_kruskal_prim_exercises_have_matrices_and_visual_solution_steps():
    data = load_site_data()
    exercises = {exercise["id"]: exercise for exercise in data["exercises"]}

    for exercise_id in ["mst-prim-kruskal-visual", "mst-predios", "final-q3-rede-som"]:
        exercise = exercises[exercise_id]
        assert exercise.get("matrix"), f"{exercise_id} must show its weighted matrix in the prompt"
        assert exercise["matrix"]["headers"], f"{exercise_id} matrix needs labels"
        assert len(exercise["matrix"]["rows"]) == len(exercise["matrix"]["headers"])
        assert all(len(row) == len(exercise["matrix"]["headers"]) for row in exercise["matrix"]["rows"])

        steps = exercise.get("solutionSteps", [])
        assert len(steps) >= 5, f"{exercise_id} needs a visual algorithm walkthrough"
        assert any("rejeit" in step["text"].lower() for step in steps), f"{exercise_id} must explain rejected cycle edges"
        assert any(step.get("highlightEdges") for step in steps), f"{exercise_id} needs highlighted edges"


def test_matching_theory_has_alternating_and_augmenting_path_animations():
    data = load_site_data()
    matching_topic = next(topic for topic in data["theoryTopics"] if topic["slug"] == "emparelhamentos-2")

    assert "alternatingPath" in matching_topic["animations"]
    assert "augmentingPath" in matching_topic["animations"]

    for animation_id, phrase in [
        ("alternatingPath", "caminho alternante"),
        ("augmentingPath", "caminho aumentante"),
    ]:
        animation = data["animations"][animation_id]
        full_text = " ".join([animation["title"]] + [step["title"] + " " + step["text"] for step in animation["steps"]])
        assert phrase in full_text.lower()
        assert len(animation["steps"]) >= 5
        assert animation.get("matching"), f"{animation_id} must show the current matching"
        assert animation.get("path"), f"{animation_id} must declare the path order"


def test_cover_topic_has_edge_by_edge_walkthrough():
    data = load_site_data()
    cover_topic = next(topic for topic in data["theoryTopics"] if topic["slug"] == "coberturas")
    cover_exercise = next(exercise for exercise in data["exercises"] if exercise["id"] == "cobertura-basica")

    assert "vertexCoverWalkthrough" in cover_topic["animations"]

    animation = data["animations"]["vertexCoverWalkthrough"]
    steps = animation["steps"]
    graph_edges = {edge["id"] for edge in animation["graph"]["edges"]}

    assert len(steps) >= 6
    assert animation["cover"] == ["2", "5", "4"]
    assert cover_exercise["solutionSteps"] == steps
    assert any("K={2,5,4}" in step["text"] for step in steps)
    assert any("M={{1,5},{2,3},{4,7}}" in step["text"] for step in steps)
    assert any("|M|=|K|=3" in step["text"] or "|K|=3" in step["text"] for step in steps)

    highlighted_edges = set()
    previous_count = 0
    for step in steps:
        current = set(step.get("highlightEdges", []))
        if current:
            assert current >= highlighted_edges, "Covered edges should remain highlighted cumulatively"
            highlighted_edges = current
            assert len(highlighted_edges) >= previous_count
            previous_count = len(highlighted_edges)

    assert highlighted_edges == graph_edges


def test_edge_coloring_keeps_original_matching_colors_while_highlighting_steps():
    data = load_site_data()
    js = JS_FILE.read_text(encoding="utf-8")
    animation = data["animations"]["edgeColoring"]

    assert animation["colors"], "Edge coloring animation must declare the color of each matching"
    assert all(step.get("highlightEdges") for step in animation["steps"][1:5])
    assert "const stroke = chosen ? '#f5a524'" not in js
    assert "edge-highlight-halo" in js
    assert "solutionColors || {}" in js
    assert "vertexColors: colorOptions.vertices || {}" in js
    assert "edgeColors: colorOptions.edges || {}" in js


def test_flow_animations_show_bottlenecks_and_updated_residual_capacities():
    data = load_site_data()

    for animation_id in ["flowResidual", "minCostResidual"]:
        animation = data["animations"][animation_id]
        iterative_steps = [
            step for step in animation["steps"]
            if "gargalo" in step["text"].lower() or "iteração" in step["text"].lower()
        ]

        assert len(iterative_steps) >= 3, f"{animation_id} needs detailed flow iterations"
        for step in iterative_steps:
            assert step.get("highlightEdges"), f"{animation_id} step {step['title']} must highlight the path"
            assert step.get("edgeLabels"), f"{animation_id} step {step['title']} must update capacities visually"
            assert "gargalo" in step["text"].lower()
            assert any(
                marker in " ".join(str(value).lower() for value in step["edgeLabels"].values())
                for marker in ["r=", "f=", "residual"]
            )


def test_exercise_filters_support_direct_hash_and_mobile_auto_collapse():
    js = JS_FILE.read_text(encoding="utf-8")
    exercises_html = EXERCISES_PAGE.read_text(encoding="utf-8")

    assert "selectExerciseFromHash" in js
    assert "data-exercise-id" in js
    assert "scrollIntoView" in js
    assert "collapseRailOnMobile" in js
    assert "matchMedia('(max-width: 920px)')" in js
    assert "exerciseQuickLinks" not in exercises_html
    assert "data-exercise-link" not in js


def test_exercise_solutions_are_hidden_until_user_requests_them():
    js = JS_FILE.read_text(encoding="utf-8")

    assert "Mostrar resolução" in js
    assert "Ocultar resolução" in js
    assert "data-solution-toggle" in js
    assert "aria-expanded" in js
    assert "solution.hidden = true" in js


def test_animations_have_detailed_step_by_step_explanations():
    data = load_site_data()

    for animation_id, animation in data["animations"].items():
        steps = animation.get("steps", [])
        assert len(steps) >= 5, f"{animation_id} needs more visual steps"
        for step in steps:
            assert len(step.get("text", "")) >= 70, f"{animation_id} has a shallow step"
        assert any(
            step.get("highlightEdges") or step.get("highlightVertices") or step.get("mutedVertices")
            for step in steps
        ), f"{animation_id} needs at least one highlighted visual state"
