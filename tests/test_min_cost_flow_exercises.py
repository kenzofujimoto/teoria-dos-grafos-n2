from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "teoria_grafos_n_2_guia_interativo.html"


def read_html() -> str:
    return HTML.read_text(encoding="utf-8")


def test_min_cost_exercise_section_exists_with_expected_totals():
    html = read_html()

    assert 'id="custo-exercicios"' in html
    assert "Exercícios resolvidos - fluxo com custo mínimo" in html

    expected_totals = {
        "Exercício 1": ("90", "915"),
        "Exercício 2": ("120", "1115"),
        "Exercício 3": ("135", "1340"),
        "Exercício 4": ("175", "1370"),
    }

    for exercise, (flow, cost) in expected_totals.items():
        assert exercise in html
        assert f"Fluxo máximo: {flow}" in html
        assert f"Custo mínimo: {cost}" in html


def test_candidate_paths_are_eliminated_with_bottlenecks_and_blocking_arcs():
    html = read_html()

    required_fragments = [
        "Caminhos candidatos no residual",
        "Eliminação dos caminhos possíveis",
        "gargalo",
        "arco de bloqueio",
        "Satura",
        "Sem capacidade residual",
    ]

    for fragment in required_fragments:
        assert fragment in html


def test_reverse_residual_arcs_are_drawn_with_negative_costs():
    html = read_html()

    assert "arco residual invertido" in html
    assert "6 -> 2" in html
    assert "custo -3" in html
    assert "2 -> 6" in html
    assert "drawMinCostExercise" in html
