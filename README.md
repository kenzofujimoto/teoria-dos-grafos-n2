# Teoria dos Grafos - Guia Interativo

Site estatico multipagina para estudar os principais topicos de Teoria dos Grafos com explicacoes, exercicios resolvidos e animacoes SVG.

## Como visualizar

Este projeto nao precisa de build nem instalacao de dependencias.

Para abrir direto no navegador, use o arquivo:

```text
index.html
```

Para testar com um servidor local:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Depois acesse:

```text
http://127.0.0.1:8080/index.html
```

O guia antigo continua disponivel em `teoria_grafos_n_2_guia_interativo.html`.

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
- Area de teoria separada por materia/PDF
- Area de exercicios com enunciado, grafo e resolucao

## Animacoes

As animacoes sao feitas com SVG e JavaScript puro. Elas permitem avancar e voltar passo a passo para acompanhar algoritmos e conceitos visualmente.

## Deploy na Vercel

O projeto esta configurado para deploy estatico na Vercel.

O arquivo `vercel.json` faz a rota raiz `/` apontar para o HTML principal:

```json
{
  "rewrites": [
    {
      "source": "/",
      "destination": "/index.html"
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
+-- index.html
+-- teoria/
+-- exercicios/
+-- assets/
+-- teoria_grafos_n_2_guia_interativo.html
+-- vercel.json
```
