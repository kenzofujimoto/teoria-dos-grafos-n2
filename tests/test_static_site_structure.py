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
