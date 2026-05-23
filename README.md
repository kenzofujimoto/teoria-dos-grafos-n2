# Teoria dos Grafos - Guia Interativo

Guia interativo em HTML para estudar os principais topicos de Teoria dos Grafos com explicacoes, exemplos e animacoes SVG.

## Como visualizar

Este projeto nao precisa de build nem instalacao de dependencias.

Para abrir direto no navegador, use o arquivo:

```text
teoria_grafos_n_2_guia_interativo.html
```

Para testar com um servidor local:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Depois acesse:

```text
http://127.0.0.1:8080/teoria_grafos_n_2_guia_interativo.html
```

## Conteudo

- Conceitos basicos e conectividade
- Grafos planares e k-partidos
- Percursos eulerianos e hamiltonianos
- Arvore geradora minima com Kruskal e Prim
- Coloracao de vertices
- Coloracao de arestas
- Emparelhamentos e caminhos aumentantes
- Coberturas de vertices
- Fluxo maximo com Ford-Fulkerson
- Fluxo com custo minimo

## Animacoes

As animacoes sao feitas com SVG e JavaScript puro dentro do proprio HTML. Elas permitem avancar e voltar passo a passo para acompanhar os algoritmos e conceitos visualmente.

## Deploy na Vercel

O projeto esta configurado para deploy estatico na Vercel.

O arquivo `vercel.json` faz a rota raiz `/` apontar para o HTML principal:

```json
{
  "rewrites": [
    {
      "source": "/",
      "destination": "/teoria_grafos_n_2_guia_interativo.html"
    }
  ]
}
```

Na Vercel, use as configuracoes padrao para um projeto estatico:

- Framework Preset: `Other`
- Build Command: vazio
- Output Directory: vazio ou raiz do projeto

## Estrutura

```text
.
+-- README.md
+-- teoria_grafos_n_2_guia_interativo.html
+-- vercel.json
```
