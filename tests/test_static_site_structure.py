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
        "final-q2-barracas-iluminacao": (10, "Festa Junina", "Barraça 1 à Barraca 3"),
        "final-q3-rede-som": (6, "Rede Central de Distribuição de Som", "comprimento total mínimo"),
        "final-q4-supercopa-jogos": (6, "Supercopa das Nações", "Classe 1"),
    }

    for exercise_id, (size, phrase_a, phrase_b) in expected.items():
        exercise = exercises[exercise_id]
        matrix = exercise.get("matrix")

        assert phrase_a in exercise["prompt"]
        assert phrase_b in exercise["prompt"] or phrase_b in " ".join(exercise["questions"])
        assert matrix, f"{exercise_id} must include the original matrix"
        assert len(matrix["headers"]) == size
        assert len(matrix["rows"]) == size
        assert all(len(row) == size for row in matrix["rows"])
