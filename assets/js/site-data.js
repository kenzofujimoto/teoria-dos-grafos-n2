window.GRAPH_SITE_DATA = {
  "theoryTopics": [
    {
      "slug": "conceitos-basicos-conectividade",
      "title": "Conceitos básicos, conectividade e grafos h-conexos",
      "sourcePdf": "Conceitos Básicos – parte 4Tipos de Grafos, Conectividade e Grafos h-conexos.pdf",
      "summary": "Tipos de grafos, grafo dual direcional, complementar, regularidade, subconjunto de articulação, conectividade k(G) e leitura de h-conexidade. Conteúdo aprofundado com definições, critérios e roteiro de prova.",
      "sections": [
        {
          "heading": "Dual direcional",
          "body": "Em um grafo orientado G=(V,A), o dual direcional GD mantém os mesmos vértices e inverte todos os arcos. Se em G existe (x,y), em GD aparece (y,x). Isso troca entradas por saídas e ajuda quando o exercício pede analisar alcançabilidade no sentido oposto."
        },
        {
          "heading": "Grafo complementar",
          "body": "O grafo complementar usa o mesmo V e coloca exatamente as arestas ausentes em G. Para cada par distinto {u,v}, ele aparece em G ou no grafo complementar. Essa leitura é útil em incompatibilidade, coloração e clique."
        },
        {
          "heading": "Grafo regular e k-regular",
          "body": "Um grafo não orientado é regular quando todo vértice tem o mesmo grau. Se todos têm grau k, ele é k-regular; se k=3, é cúbico. Em orientados, observe d+(v) e d-(v) para regularidade exterior/interior."
        },
        {
          "heading": "Subconjunto de articulação",
          "body": "Um subconjunto de articulação é um conjunto S de vértices cuja remoção desconecta o grafo. Com um único vértice, temos uma articulação. Para testar, remova S e verifique se sobram componentes sem caminho entre si."
        },
        {
          "heading": "SCAM e conectividade k(G)",
          "body": "SCAM é um subconjunto de articulação mínimo. A conectividade k(G) é o tamanho do menor SCA. Se existe vértice de articulação, k(G)=1. Se não existe, teste pares, trios e assim por diante."
        },
        {
          "heading": "h-conexo",
          "body": "Um grafo é h-conexo quando k(G) >= h. Se k(G)=3, ele é 1, 2 e 3-conexo, mas não 4-conexo. Quando a questão pede o valor de h, normalmente quer o maior h garantido."
        },
        {
          "heading": "Percursos internamente disjuntos",
          "body": "Percursos internamente disjuntos podem compartilhar extremos, mas não vértices internos. O teorema usado nos PDFs diz que G é h-conexo se e somente se todo par v,w possui ao menos h percursos internamente disjuntos."
        },
        {
          "heading": "Roteiro",
          "body": "Confirme conexidade, calcule graus se ajudarem, teste remoções, encontre um SCAM, conclua k(G) e traduza para h-conexidade. Se necessário, justifique por percursos internamente disjuntos."
        }
      ],
      "animations": [
        "connectivityCut"
      ]
    },
    {
      "slug": "grafos-planares-k-partidos",
      "title": "Grafos planares e k-partidos",
      "sourcePdf": "Grafos Planares e K-partidos.pdf",
      "summary": "Planaridade, fórmula de Euler n-m+r=2, partições independentes e reconhecimento de grafos bipartidos/k-partidos. Conteúdo aprofundado com definições, critérios e roteiro de prova.",
      "sections": [
        {
          "heading": "Planaridade",
          "body": "Um grafo é planar quando existe algum desenho no plano sem cruzar arestas fora dos vértices. Um desenho cruzado não prova não planaridade; talvez exista outro desenho sem cruzamentos."
        },
        {
          "heading": "Regiões e região externa",
          "body": "Em um desenho planar, as arestas dividem o plano em regiões. A região externa também conta. Esquecer essa região é o erro mais comum ao verificar a fórmula de Euler."
        },
        {
          "heading": "Fórmula de Euler",
          "body": "Para grafo simples, conexo e planar, vale n - m + r = 2. Aqui n é o número de vértices, m o número de arestas e r o número de regiões, incluindo a externa."
        },
        {
          "heading": "Limites de planaridade",
          "body": "Da fórmula vêm limites como m <= 3n - 6 para planares simples com n>=3. Se o grafo é bipartido planar, sem triângulos, usa-se m <= 2n - 4. Esses limites ajudam a provar não planaridade."
        },
        {
          "heading": "Grafo k-partido",
          "body": "Um grafo é k-partido se V pode ser dividido em k partes independentes. Dentro de cada parte não existe aresta. As arestas só podem aparecer entre partes diferentes."
        },
        {
          "heading": "Bipartido e conjunto independente",
          "body": "O caso k=2 é bipartido. Cada lado é um conjunto independente. Teste por 2-coloração: escolha uma cor para um vértice e obrigue seus vizinhos a receber a outra."
        },
        {
          "heading": "Ciclo ímpar",
          "body": "Um grafo é bipartido se e somente se não possui ciclo ímpar. Exibir um ciclo de tamanho 3, 5, 7 ou 9 prova que duas partes ou duas cores não bastam."
        },
        {
          "heading": "Roteiro",
          "body": "Para planaridade, conte n,m,r e cheque n - m + r = 2 em um desenho sem cruzamentos. Para k-partição, procure conjuntos independentes. Para bipartição, procure ciclo ímpar ou faça BFS com duas cores."
        }
      ],
      "animations": [
        "planarEuler",
        "bipartiteColoring"
      ]
    },
    {
      "slug": "percursos-eulerianos-hamiltonianos",
      "title": "Percursos eulerianos e hamiltonianos",
      "sourcePdf": "Percursos Abrangentes – Eulerianos eHamiltonianos.pdf",
      "summary": "Diferença entre percorrer arestas e percorrer vértices, critérios de Euler e condições suficientes para Hamilton. Conteúdo aprofundado com definições, critérios e roteiro de prova.",
      "sections": [
        {
          "heading": "Percurso, trilha, caminho e circuito",
          "body": "Percurso é sequência de vértices e arestas consecutivas. Trilha não repete arestas. Caminho não repete vértices. Circuito é trilha fechada: começa e termina no mesmo vértice sem repetir arestas. Ciclo é caminho fechado sem repetição interna."
        },
        {
          "heading": "Percurso euleriano",
          "body": "Um percurso euleriano usa todas as arestas exatamente uma vez. Ele pode repetir vértices, mas nunca arestas. Se for fechado, é circuito euleriano. A palavra-chave aqui é aresta."
        },
        {
          "heading": "Grafo euleriano",
          "body": "Um grafo conexo é grafo euleriano quando possui circuito euleriano. Em grafo não orientado, isso ocorre exatamente quando todos os vértices têm grau par."
        },
        {
          "heading": "Grafo semi-euleriano",
          "body": "Um grafo conexo é semi-euleriano quando possui caminho euleriano aberto, mas não circuito. Em grafo não orientado, isso ocorre quando exatamente dois vértices têm grau ímpar."
        },
        {
          "heading": "Quando não existe Euler",
          "body": "Com mais de dois vértices ímpares, não há caminho euleriano. Se o grafo é desconexo e possui arestas em componentes separadas, também não há um único percurso que use todas as arestas."
        },
        {
          "heading": "Hamiltoniano",
          "body": "Hamiltoniano olha vértices. Um caminho hamiltoniano visita todos os vértices uma vez. Um ciclo hamiltoniano visita todos e volta ao início. Um grafo hamiltoniano possui ciclo hamiltoniano."
        },
        {
          "heading": "Ore e Dirac",
          "body": "Ore: se para todo par não adjacente u,v vale d(u)+d(v)>=n, então o grafo é hamiltoniano. Dirac: se n>=3 e todo vértice tem grau pelo menos n/2, então é hamiltoniano. São condições suficientes, não necessárias."
        },
        {
          "heading": "PCV",
          "body": "O PCV procura ciclo hamiltoniano de menor custo em grafo ponderado. A heurística do vizinho mais próximo escolhe o menor vizinho ainda não visitado e retorna ao início no final, se possível. Pode não ser ótima."
        },
        {
          "heading": "Roteiro",
          "body": "Para Euler, verifique conexidade e conte graus: todos pares, euleriano; dois ímpares, semi-euleriano; mais de dois, não existe. Para Hamilton, tente construir ciclo/caminho e use Ore ou Dirac apenas quando os critérios forem satisfeitos."
        }
      ],
      "animations": [
        "eulerianTrail",
        "hamiltonianCycle"
      ]
    },
    {
      "slug": "arvore-geradora-fundamentos",
      "title": "Árvore geradora de custo mínimo - fundamentos",
      "sourcePdf": "Árvore Geradora de Custo Mínimo – Parte I –Fundamentos e Algoritmos.pdf",
      "summary": "Árvore parcial, árvore geradora, custo total, propriedade do corte e aplicações de redes. Conteúdo aprofundado com definições, teoremas e procedimento.",
      "sections": [
        {
          "heading": "Árvore",
          "body": "Árvore é um grafo conexo e sem ciclos. Se uma árvore perde uma aresta, desconecta. Se recebe uma aresta extra entre vértices já conectados, forma ciclo. Essa dupla condição é a base da APCM."
        },
        {
          "heading": "Subgrafo gerador",
          "body": "Um subgrafo gerador usa todos os vértices do grafo original e apenas parte das arestas. Nos PDFs, árvore parcial, subgrafo gerador e spanning tree aparecem como a mesma estrutura quando o subgrafo também é árvore."
        },
        {
          "heading": "Relação n-1",
          "body": "Toda árvore com n vértices possui n-1 arestas. Se uma solução tem menos de n-1 arestas, não conecta tudo. Se tem mais de n-1, contém ciclo. Essa conta é verificação obrigatória."
        },
        {
          "heading": "Árvore parcial de custo mínimo",
          "body": "A árvore parcial de custo mínimo, APCM, escolhe entre todas as árvores geradoras aquela com menor custo total. O custo total é a soma dos pesos das arestas escolhidas."
        },
        {
          "heading": "Propriedade do corte",
          "body": "A propriedade do corte diz que, dado um corte dos vértices, a menor aresta que cruza o corte é segura para alguma árvore geradora mínima. Essa é a justificativa matemática dos algoritmos gulosos."
        },
        {
          "heading": "Por que ciclos saem",
          "body": "Se uma solução tem ciclo, remover a maior aresta desse ciclo preserva a conectividade e não aumenta o custo. Logo uma solução de custo mínimo para conectar todos os vértices não precisa de ciclo."
        },
        {
          "heading": "Aplicações",
          "body": "Nos exemplos dos PDFs, pesos representam distância, custo de cabo ou tempo. A APCM resolve conexão barata, mas não resolve redundância. Se o problema exige tolerância a falhas, uma árvore pode ser pouco robusta."
        }
      ],
      "animations": [
        "kruskalMst"
      ]
    },
    {
      "slug": "kruskal-prim",
      "title": "Kruskal e Prim",
      "sourcePdf": "Árvore Geradora de Custo Mínimo - Parte II –Algoritmos de Kruskal e Prim.pdf",
      "summary": "Execução comparada dos algoritmos de Kruskal e Prim com conjuntos, arestas candidatas e rejeição por ciclo. Conteúdo aprofundado com definições, teoremas e procedimento.",
      "sections": [
        {
          "heading": "Kruskal",
          "body": "Kruskal começa com todos os vértices isolados, faz a ordenação das arestas por peso crescente e escolhe a menor aresta que conecta componentes diferentes. Ele constrói uma floresta que vira árvore."
        },
        {
          "heading": "Componentes",
          "body": "Cada aresta escolhida em Kruskal une duas componentes. Se as pontas já estão na mesma componente, o algoritmo rejeita a aresta, pois ela criaria ciclo. Essa rejeição precisa aparecer na resolução."
        },
        {
          "heading": "Parada em Kruskal",
          "body": "O contador t mede quantas arestas entraram. Quando t=n-1, a árvore está completa. Se o grafo original é conexo, n-1 arestas seguras conectam todos os vértices sem ciclo."
        },
        {
          "heading": "Prim",
          "body": "Prim mantém uma única árvore parcial. Começa com um conjunto T de vértices já alcançados e, a cada passo, acrescenta um vértice novo por uma aresta mínima."
        },
        {
          "heading": "Fronteira T e V-T",
          "body": "A fronteira é o conjunto de arestas com uma ponta em T e outra em V-T. Prim nunca escolhe aresta com as duas pontas em T, mesmo que ela seja barata, porque isso não expande a árvore."
        },
        {
          "heading": "Comparação",
          "body": "Kruskal olha a menor aresta global que não fecha ciclo. Prim olha a menor aresta da fronteira T para V-T. As ordens podem mudar, mas o custo final mínimo deve ser igual."
        },
        {
          "heading": "Empates",
          "body": "Empates podem gerar mais de uma APCM. Qualquer escolha empatada é aceitável se respeita a regra do algoritmo. O importante é manter a prova: sem ciclo, conecta tudo e tem n-1 arestas."
        },
        {
          "heading": "Roteiro",
          "body": "Em Kruskal, mostre lista ordenada, escolhida/rejeitada e custo acumulado. Em Prim, mostre T, V-T, fronteira e aresta escolhida. Finalize com n-1 arestas e custo total."
        }
      ],
      "animations": [
        "kruskalMst",
        "primMst"
      ]
    },
    {
      "slug": "coloracao-vertices",
      "title": "Coloração de vértices",
      "sourcePdf": "Coloração de Vértices.pdf",
      "summary": "Partição cromática, número cromático, algoritmos sequenciais, classes de cor e aplicações como exames, quartos e armazenamento químico. Conteúdo aprofundado com definições, teoremas e procedimento.",
      "sections": [
        {
          "heading": "k-coloração",
          "body": "Uma k-coloração atribui cores aos vértices de modo que vértices adjacentes tenham cores diferentes. Se uma coloração usa k cores, o grafo é k-colorível. A cor representa recurso compartilhável."
        },
        {
          "heading": "Número cromático",
          "body": "O número cromático χ(G) é o menor k possível. Em horários, quartos ou depósitos, χ(G) vira a menor quantidade de turnos, salas, quartos ou locais para evitar conflitos."
        },
        {
          "heading": "Partição cromática",
          "body": "Toda coloração gera uma partição cromática de V. Cada classe de cor é um conjunto independente, pois não pode haver aresta entre dois vértices da mesma cor."
        },
        {
          "heading": "Clique como limite inferior",
          "body": "Uma clique de tamanho r força r cores. Assim, ω(G)<=χ(G). Em prova, encontrar K3, K4 ou Kn é uma forma direta de mostrar que menos cores é impossível."
        },
        {
          "heading": "Teorema das 4 cores",
          "body": "O Teorema das 4 cores afirma que todo grafo planar é colorível com no máximo 4 cores. Ele dá limite superior para mapas, mas não diz que todo planar precisa exatamente de 4."
        },
        {
          "heading": "Coloração sequencial",
          "body": "Na coloração sequencial, escolhe-se uma ordem de vértices e atribui-se a menor cor disponível que não conflita com vizinhos já coloridos. A ordem influencia o resultado."
        },
        {
          "heading": "Coloração por classe",
          "body": "Na coloração por classe, constrói-se uma classe independente por vez. Se um vértice não é adjacente aos membros da classe atual, entra nela; caso contrário, abre-se outra classe."
        },
        {
          "heading": "Aplicações",
          "body": "Nos PDFs, exames, hospital e produtos químicos têm a mesma modelagem: vértices são itens e arestas são incompatibilidades. Resolver é colorir o grafo e interpretar cada cor como recurso separado."
        }
      ],
      "animations": [
        "vertexColoring"
      ]
    },
    {
      "slug": "coloracao-arestas",
      "title": "Coloração de arestas",
      "sourcePdf": "Coloração de Arestas.pdf",
      "summary": "Índice cromático χ'(G), Teorema de Vizing, classe 1/2 e coloração de arestas em grafos bipartidos. Conteúdo aprofundado com definições, teoremas e procedimento.",
      "sections": [
        {
          "heading": "k-coloração de arestas",
          "body": "Uma k-coloração de arestas atribui cores às arestas de G. Ela é própria quando arestas incidentes no mesmo vértice recebem cores diferentes. Aqui o conflito ocorre entre arestas, não entre vértices."
        },
        {
          "heading": "Índice cromático",
          "body": "O índice cromático χ'(G) é o menor número de cores para colorir as arestas corretamente. Em cronogramas, cada cor pode ser um dia e arestas incidentes não podem cair no mesmo dia."
        },
        {
          "heading": "Δ(G)",
          "body": "O grau máximo Δ(G) é limite inferior: se um vértice tem Δ(G) arestas incidentes, todas precisam de cores distintas. Logo χ'(G)>=Δ(G)."
        },
        {
          "heading": "Teorema de Vizing",
          "body": "O Teorema de Vizing afirma que, para grafo simples, χ'(G)=Δ(G) ou χ'(G)=Δ(G)+1. Portanto basta decidir se o grafo usa o limite ou precisa de uma cor extra."
        },
        {
          "heading": "Classe 1 e classe 2",
          "body": "Se χ'(G)=Δ(G), o grafo é classe 1. Se χ'(G)=Δ(G)+1, é classe 2. Para provar classe 1, exiba uma coloração com Δ(G) cores."
        },
        {
          "heading": "Relação com emparelhamento",
          "body": "Cada cor forma um emparelhamento, porque duas arestas da mesma cor não compartilham vértice. Assim, colorir arestas é particionar E em emparelhamentos."
        },
        {
          "heading": "Grafo bipartido",
          "body": "Em grafo bipartido simples, vale χ'(G)=Δ(G). Portanto todo bipartido é classe 1 para coloração de arestas. Esse resultado aparece junto aos exercícios de test drive."
        },
        {
          "heading": "Percurso euleriano como apoio",
          "body": "Os PDFs mostram construções usando percurso euleriano. Em alguns casos, percorrer arestas e alternar cores ajuda. Se o grafo não é euleriano, pode-se usar artifício auxiliar, mas a coloração final deve respeitar incidência."
        }
      ],
      "animations": [
        "edgeColoring"
      ]
    },
    {
      "slug": "emparelhamentos-1",
      "title": "Emparelhamentos e coberturas - parte I",
      "sourcePdf": "Emparelhamentos e CoberturasParte 1.pdf",
      "summary": "Emparelhamento, emparelhamento perfeito, maximal versus máximo e exemplos de alocação. Conteúdo aprofundado com definições, teoremas e roteiro.",
      "sections": [
        {
          "heading": "Emparelhamento",
          "body": "Um emparelhamento, matching ou acoplamento, é um subconjunto M de arestas sem vértices em comum. Cada vértice pode aparecer em no máximo uma aresta de M."
        },
        {
          "heading": "Satura e vértice livre",
          "body": "Um emparelhamento satura um vértice quando alguma aresta de M incide nele. Se nenhum arco de M toca o vértice, ele é vértice livre. Essa linguagem é essencial para aumentar matchings."
        },
        {
          "heading": "Maximal",
          "body": "M é maximal quando nenhuma aresta pode ser adicionada sem quebrar a regra de não compartilhar vértices. Maximal é uma parada local: o emparelhamento está travado, mas pode não ser o maior."
        },
        {
          "heading": "Máximo",
          "body": "M é máximo quando não existe outro emparelhamento com mais arestas. Todo máximo é maximal, mas nem todo maximal é máximo. A diferença aparece nos exercícios de concessionária e test drive."
        },
        {
          "heading": "Tamanho α'",
          "body": "O tamanho do emparelhamento máximo é α'(G). Como cada aresta usa dois vértices, α'(G)<=piso(n/2). Esse limite ajuda a checar se um matching perfeito é possível."
        },
        {
          "heading": "Perfeito",
          "body": "Um emparelhamento perfeito satura todos os vértices. Se M é perfeito, então é máximo. A recíproca não vale sempre: pode ser máximo e ainda deixar vértices livres por falta de adjacências úteis."
        },
        {
          "heading": "Bipartido e alocação",
          "body": "Em problemas de pessoas-carros, clientes-adicionais e tarefas-máquinas, o grafo é bipartido. Um lado representa demandantes e o outro opções. Emparelhar é escolher atendimentos sem repetição."
        }
      ],
      "animations": [
        "matchingAndCover"
      ]
    },
    {
      "slug": "emparelhamentos-2",
      "title": "Emparelhamentos - parte II",
      "sourcePdf": "Emparelhamentos e CoberturasParte II.pdf",
      "summary": "Subgrafo induzido, caminho alternante, caminho aumentante, diferença simétrica, Teorema de Berge e Teorema de Hall. Conteúdo aprofundado com definições, teoremas e roteiro.",
      "sections": [
        {
          "heading": "Caminho alternante",
          "body": "Dado M, um caminho alternante alterna arestas fora de M e dentro de M. Ele mostra uma trilha onde é possível trocar escolhas mantendo a estrutura de emparelhamento."
        },
        {
          "heading": "Caminho aumentante",
          "body": "Um caminho aumentante é alternante e começa e termina em vértices livres. Ao inverter suas arestas, entram as fora de M e saem as de M. O tamanho de M aumenta em 1."
        },
        {
          "heading": "Diferença simétrica",
          "body": "A diferença simétrica M Δ M' contém arestas que pertencem a exatamente um dos dois emparelhamentos. Ela se decompõe em ciclos pares alternantes e caminhos alternantes."
        },
        {
          "heading": "Lema estrutural",
          "body": "No subgrafo M Δ M', cada vértice tem grau no máximo 2, pois cada matching usa o vértice no máximo uma vez. Por isso as componentes são caminhos ou ciclos alternados."
        },
        {
          "heading": "Teorema de Berge",
          "body": "Teorema de Berge: M é emparelhamento máximo se e somente se não existe caminho aumentante relativo a M. Isso vira algoritmo: encontre caminho aumentante, inverta, repita."
        },
        {
          "heading": "Teorema de Hall",
          "body": "Em bipartido com lados X e Y, existe emparelhamento que satura X se e somente se, para todo S⊆X, |N(S)|>=|S|. N(S) é o conjunto de vizinhos de S em Y."
        },
        {
          "heading": "Como usar Hall",
          "body": "Para provar impossibilidade, basta achar S com |N(S)|<|S|. Para provar possibilidade, pode-se verificar a condição de Hall ou exibir um emparelhamento saturando X."
        },
        {
          "heading": "Roteiro",
          "body": "Marque M, ache vértices livres, procure caminho alternante começando por aresta fora de M. Se chegar a outro livre, inverta. Se nenhum caminho aumentante existe, Berge garante máximo."
        }
      ],
      "animations": [
        "matchingAndCover"
      ]
    },
    {
      "slug": "coberturas",
      "title": "Coberturas - parte III",
      "sourcePdf": "Emparelhamentos e CoberturasParte III.pdf",
      "summary": "Cobertura de vértices, cobertura mínima, relação |M| <= |K| e proposição de otimalidade quando |M|=|K|. Conteúdo aprofundado com definições, teoremas e roteiro.",
      "sections": [
        {
          "heading": "Cobertura de vértices",
          "body": "Uma cobertura K é um subconjunto de vértices que toca todas as arestas do grafo. Cada aresta precisa ter pelo menos uma extremidade em K."
        },
        {
          "heading": "Cobertura mínima",
          "body": "Cobertura mínima é uma cobertura de menor cardinalidade. Uma cobertura válida pode ser grande demais, então é preciso justificar por que não existe outra menor."
        },
        {
          "heading": "Relação |M| ≤ |K|",
          "body": "Para qualquer emparelhamento M e cobertura K, vale |M| ≤ |K|. Como as arestas de M são disjuntas, cada uma exige um vértice distinto em K para ser coberta."
        },
        {
          "heading": "Certificado |M| = |K|",
          "body": "Se encontramos M e K com |M| = |K|, então M é emparelhamento máximo e K é cobertura mínima. Esse empate é um certificado de otimalidade."
        },
        {
          "heading": "König-Egerváry",
          "body": "Em grafos bipartidos, o Teorema de König-Egerváry diz que o tamanho do emparelhamento máximo é igual ao tamanho da cobertura mínima."
        },
        {
          "heading": "Como encontrar K",
          "body": "Comece com um emparelhamento grande para obter limite inferior. Depois escolha vértices que cobrem todas as arestas. Se a cobertura empata com o matching, a prova termina."
        },
        {
          "heading": "Erros comuns",
          "body": "Não confunda cobertura com conjunto independente. Cobertura toca arestas; conjunto independente evita arestas internas. Também não basta escolher vértices de grau alto se alguma aresta ficar descoberta."
        },
        {
          "heading": "Leitura em prova",
          "body": "Em uma resposta completa, primeiro exiba K e verifique aresta por aresta que toda aresta é tocada. Depois exiba M e verifique que suas arestas são disjuntas. Se |M| = |K|, use essa igualdade como certificado formal de que K é cobertura mínima."
        }
      ],
      "animations": [
        "matchingAndCover"
      ]
    },
    {
      "slug": "fluxos-1",
      "title": "Fluxos em grafos - parte 1",
      "sourcePdf": "Fluxos em GrafosParte 1.pdf",
      "summary": "Definição formal de fluxo, capacidade, conservação, fonte, sumidouro e cortes. Conteúdo aprofundado com definições, algoritmo e prova de encerramento.",
      "sections": [
        {
          "heading": "Rede de fluxo",
          "body": "Uma rede de fluxo é um grafo direcionado com fonte, sumidouro e capacidades nos arcos. A fonte s injeta recurso; o sumidouro t recebe. O recurso pode representar carga, dados, dinheiro ou veículos."
        },
        {
          "heading": "Capacidade",
          "body": "Cada arco (u,v) possui capacidade c(u,v). O fluxo precisa obedecer 0<=f(u,v)<=c(u,v). Se f(u,v)=c(u,v), o arco está saturado. Se f<c, ainda existe folga."
        },
        {
          "heading": "Conservação",
          "body": "Em todo vértice intermediário, diferente da fonte e do sumidouro, vale conservação: o total que entra é igual ao total que sai. O vértice não cria nem consome fluxo."
        },
        {
          "heading": "Valor do fluxo",
          "body": "O valor do fluxo é o total que sai da fonte, equivalente ao total que chega ao sumidouro quando as restrições são respeitadas. Em conta prática, some as saídas de s ou entradas de t."
        },
        {
          "heading": "Corte",
          "body": "Um corte K=(X,V-X) separa s de t, com s em X e t em V-X. Os arcos relevantes do corte saem de X para V-X. Arcos de retorno não entram na capacidade do corte."
        },
        {
          "heading": "Capacidade do corte",
          "body": "A capacidade do corte é a soma das capacidades dos arcos que cruzam de X para V-X. Todo fluxo s-t é limitado por qualquer corte. Por isso cortes representam gargalos."
        },
        {
          "heading": "Fluxo máximo-corte mínimo",
          "body": "O teorema fluxo máximo-corte mínimo afirma que o valor do fluxo máximo é igual à capacidade de um corte mínimo. Isso fornece prova de otimalidade quando o algoritmo termina."
        },
        {
          "heading": "Como calcular cortes",
          "body": "Para calcular cortes, escolha X contendo a fonte e deixando o sumidouro fora. Some apenas as capacidades dos arcos que saem de X para V-X. Repetir esse processo para cortes diferentes ajuda a encontrar o corte de capacidade mínima."
        }
      ],
      "animations": [
        "flowResidual"
      ]
    },
    {
      "slug": "fluxos-2",
      "title": "Fluxos em grafos - parte 2",
      "sourcePdf": "Fluxos em GrafosParte 2.pdf",
      "summary": "Ford-Fulkerson, grafo de folgas, caminho aumentante, residual e teorema fluxo máximo-corte mínimo. Conteúdo aprofundado com definições, algoritmo e prova de encerramento.",
      "sections": [
        {
          "heading": "Ford-Fulkerson",
          "body": "Ford-Fulkerson começa com um fluxo viável e aumenta o valor enquanto existir caminho aumentante no residual. Cada iteração escolhe um caminho de s até t e envia a folga mínima."
        },
        {
          "heading": "Grafo de folgas",
          "body": "O grafo de folgas ou residual mostra quanto ainda pode ser alterado. No arco direto, a folga é c(u,v)-f(u,v). No arco reverso, a folga é f(u,v), permitindo desfazer fluxo."
        },
        {
          "heading": "Caminho aumentante",
          "body": "Caminho aumentante é um caminho de s até t no residual. A folga do caminho é o mínimo das folgas dos seus arcos. Esse valor é quanto o fluxo total pode aumentar naquela iteração."
        },
        {
          "heading": "Rotina de atualização",
          "body": "Ao enviar ε pelo caminho, some ε nos arcos diretos e subtraia ε nos arcos reversos correspondentes. Essa rotina preserva capacidade e conservação."
        },
        {
          "heading": "Arco reverso",
          "body": "O arco reverso não é uma ligação física nova. Ele representa a possibilidade de cancelar parte do fluxo enviado no arco original, abrindo espaço para uma escolha melhor depois."
        },
        {
          "heading": "Quando parar",
          "body": "O algoritmo para quando não há caminho aumentante. Os vértices alcançáveis a partir de s no residual formam X; o corte (X,V-X) certifica que o fluxo é máximo."
        },
        {
          "heading": "Corte mínimo",
          "body": "No encerramento, a capacidade do corte encontrado é igual ao valor do fluxo. Essa igualdade é a verificação pelo teorema fluxo máximo-corte mínimo, não apenas uma intuição."
        },
        {
          "heading": "Cuidados com residual",
          "body": "Arestas saturadas somem no sentido direto, mas podem permanecer no sentido reverso. A existência de arco reverso no residual não muda o grafo original; ela só permite redistribuir fluxo já enviado para liberar outro caminho aumentante."
        }
      ],
      "animations": [
        "flowResidual"
      ]
    },
    {
      "slug": "fluxos-3",
      "title": "Fluxos em grafos - parte 3",
      "sourcePdf": "Fluxos em GrafosParte 3.pdf",
      "summary": "Fluxos com custo, custos por unidade, arcos reversos de custo negativo e seleção de caminhos de menor custo. Conteúdo aprofundado com definições, algoritmo e prova de encerramento.",
      "sections": [
        {
          "heading": "Capacidade e custo unitário",
          "body": "Em fluxo com custo, cada arco tem capacidade e custo unitário. A capacidade limita a quantidade; o custo unitário diz quanto custa transportar uma unidade naquele arco."
        },
        {
          "heading": "Custo total",
          "body": "O custo total é a soma de f(u,v)*custo(u,v) em todos os arcos. Em um caminho, o custo adicionado é o fluxo enviado multiplicado pela soma dos custos unitários do caminho."
        },
        {
          "heading": "Objetivo",
          "body": "Muitos exercícios pedem maior fluxo possível com menor custo. Isso significa encontrar um fluxo máximo e, entre os fluxos máximos, escolher aquele de menor custo total."
        },
        {
          "heading": "Residual com custo",
          "body": "No residual, arcos diretos mantêm o custo original. Arcos reversos aparecem quando há fluxo positivo e recebem custo negativo, porque desfazer fluxo remove custo já contabilizado."
        },
        {
          "heading": "Menor custo",
          "body": "A cada iteração, busca-se caminho residual de menor custo. Se há custo negativo por arco reverso, Bellman-Ford é apropriado, pois Dijkstra não lida corretamente com custos negativos gerais."
        },
        {
          "heading": "Gargalo",
          "body": "Após escolher o caminho de menor custo, calcule o gargalo pela menor capacidade residual do caminho. Envie essa quantidade, atualize o residual e acumule o custo total."
        },
        {
          "heading": "Encerramento",
          "body": "O processo termina quando não há caminho residual de s a t. Nesse ponto o fluxo é máximo; as escolhas de menor custo e os reversos de custo negativo justificam a busca por custo mínimo."
        }
      ],
      "animations": [
        "minCostResidual"
      ]
    },
    {
      "slug": "fluxo-custo-minimo",
      "title": "Exercícios de fluxo com custo mínimo",
      "sourcePdf": "Exercicios de fluxo com custo mínimo.pdf",
      "summary": "Lista específica de fluxo máximo com custo mínimo, com cálculo de fluxo, custo, gargalos e arcos residuais invertidos. Conteúdo aprofundado com definições, algoritmo e prova de encerramento.",
      "sections": [
        {
          "heading": "Leitura dos arcos",
          "body": "Nos exercícios da lista, cada arco deve ser lido como capacidade e custo. A capacidade controla o máximo transportado; o custo controla a contribuição por unidade."
        },
        {
          "heading": "Caminhos candidatos",
          "body": "Em cada iteração, liste caminhos residuais da origem ao destino. Para cada caminho, calcule custo unitário e gargalo. Isso evita escolher caminho apenas por aparência visual."
        },
        {
          "heading": "Escolha",
          "body": "Escolha o caminho de menor custo unitário disponível. Se houver empate, use critério consistente. Registre por que os outros caminhos foram eliminados naquela iteração."
        },
        {
          "heading": "Gargalo",
          "body": "O gargalo é a menor capacidade residual no caminho escolhido. Se gargalo=20 e custo unitário=7, o custo adicionado é 20*7=140. O arco gargalo satura."
        },
        {
          "heading": "Residual",
          "body": "Depois de enviar fluxo, atualize o residual: arcos diretos perdem capacidade disponível e arcos com fluxo positivo ganham arco reverso. Esse residual guia a próxima iteração."
        },
        {
          "heading": "Arco reverso e custo negativo",
          "body": "Se o arco direto 2->6 tem custo 3 e recebe fluxo, o reverso 6->2 aparece com custo negativo -3. Isso significa desfazer uma unidade previamente enviada."
        },
        {
          "heading": "Tabela final",
          "body": "Ao final, liste os arcos com fluxo positivo, capacidade, custo unitário e contribuição f*c. A soma das contribuições é o custo total, e a soma que chega ao destino é o fluxo máximo."
        },
        {
          "heading": "Conferência final",
          "body": "Depois do encerramento, confira duas contas: a conservação de fluxo em cada vértice intermediário e a soma das contribuições de custo. Se alguma entrada e saída não batem, a solução não é um fluxo viável, mesmo que o custo pareça baixo."
        }
      ],
      "animations": [
        "minCostResidual"
      ]
    }
  ],
  "animations": {
    "connectivityCut": {
      "title": "Subconjunto de articulação",
      "graph": {
        "vertices": [
          {
            "id": "1",
            "x": 90,
            "y": 175
          },
          {
            "id": "2",
            "x": 205,
            "y": 80
          },
          {
            "id": "3",
            "x": 205,
            "y": 270
          },
          {
            "id": "4",
            "x": 350,
            "y": 175
          },
          {
            "id": "5",
            "x": 510,
            "y": 85
          },
          {
            "id": "6",
            "x": 510,
            "y": 270
          },
          {
            "id": "7",
            "x": 630,
            "y": 175
          }
        ],
        "edges": [
          {
            "id": "e12",
            "u": "1",
            "v": "2"
          },
          {
            "id": "e13",
            "u": "1",
            "v": "3"
          },
          {
            "id": "e23",
            "u": "2",
            "v": "3"
          },
          {
            "id": "e24",
            "u": "2",
            "v": "4"
          },
          {
            "id": "e34",
            "u": "3",
            "v": "4"
          },
          {
            "id": "e45",
            "u": "4",
            "v": "5"
          },
          {
            "id": "e46",
            "u": "4",
            "v": "6"
          },
          {
            "id": "e56",
            "u": "5",
            "v": "6"
          },
          {
            "id": "e57",
            "u": "5",
            "v": "7"
          },
          {
            "id": "e67",
            "u": "6",
            "v": "7"
          }
        ]
      },
      "steps": [
        {
          "title": "Grafo inicial",
          "text": "O grafo está conectado: todo vértice alcança qualquer outro por algum caminho."
        },
        {
          "title": "Remove 4",
          "text": "Ao remover o vértice 4, o lado {1,2,3} se separa do lado {5,6,7}. Portanto {4} é SCA.",
          "mutedVertices": [
            "4"
          ],
          "highlightVertices": [
            "1",
            "2",
            "3",
            "5",
            "6",
            "7"
          ]
        },
        {
          "title": "Conclusão",
          "text": "Como um único vértice desconecta o grafo, k(G)=1. Logo o grafo é 1-conexo, mas não 2-conexo.",
          "highlightVertices": [
            "4"
          ]
        }
      ]
    },
    "planarEuler": {
      "title": "Contagem de Euler",
      "graph": {
        "vertices": [
          {
            "id": "1",
            "x": 130,
            "y": 80
          },
          {
            "id": "2",
            "x": 520,
            "y": 80
          },
          {
            "id": "3",
            "x": 560,
            "y": 270
          },
          {
            "id": "4",
            "x": 170,
            "y": 270
          },
          {
            "id": "5",
            "x": 345,
            "y": 175
          }
        ],
        "edges": [
          {
            "id": "e12",
            "u": "1",
            "v": "2"
          },
          {
            "id": "e23",
            "u": "2",
            "v": "3"
          },
          {
            "id": "e34",
            "u": "3",
            "v": "4"
          },
          {
            "id": "e41",
            "u": "4",
            "v": "1"
          },
          {
            "id": "e15",
            "u": "1",
            "v": "5"
          },
          {
            "id": "e25",
            "u": "2",
            "v": "5"
          },
          {
            "id": "e35",
            "u": "3",
            "v": "5"
          },
          {
            "id": "e45",
            "u": "4",
            "v": "5"
          }
        ]
      },
      "steps": [
        {
          "title": "Vértices",
          "text": "Há n=5 vértices no desenho planar.",
          "highlightVertices": [
            "1",
            "2",
            "3",
            "4",
            "5"
          ]
        },
        {
          "title": "Arestas",
          "text": "Há m=8 arestas: quatro no contorno e quatro ligando ao vértice central.",
          "highlightEdges": [
            "e12",
            "e23",
            "e34",
            "e41",
            "e15",
            "e25",
            "e35",
            "e45"
          ]
        },
        {
          "title": "Regiões",
          "text": "O desenho possui r=5 regiões, incluindo a externa. A conta fecha: 5 - 8 + 5 = 2."
        }
      ]
    },
    "bipartiteColoring": {
      "title": "2-coloração e ciclo ímpar",
      "graph": {
        "vertices": [
          {
            "id": "1",
            "x": 115,
            "y": 95
          },
          {
            "id": "2",
            "x": 330,
            "y": 95
          },
          {
            "id": "3",
            "x": 545,
            "y": 95
          },
          {
            "id": "4",
            "x": 220,
            "y": 270
          },
          {
            "id": "5",
            "x": 440,
            "y": 270
          }
        ],
        "edges": [
          {
            "id": "e12",
            "u": "1",
            "v": "2"
          },
          {
            "id": "e23",
            "u": "2",
            "v": "3"
          },
          {
            "id": "e34",
            "u": "3",
            "v": "4"
          },
          {
            "id": "e45",
            "u": "4",
            "v": "5"
          },
          {
            "id": "e51",
            "u": "5",
            "v": "1"
          },
          {
            "id": "e24",
            "u": "2",
            "v": "4"
          }
        ]
      },
      "steps": [
        {
          "title": "Comece por 1",
          "text": "Colorimos 1 de azul e seus vizinhos de verde.",
          "highlightVertices": [
            "1",
            "2",
            "5"
          ]
        },
        {
          "title": "Propague",
          "text": "A regra alterna cores pelos vizinhos. Se um vizinho já tem a mesma cor, apareceu conflito.",
          "highlightEdges": [
            "e12",
            "e51",
            "e23",
            "e45"
          ]
        },
        {
          "title": "Ciclo ímpar",
          "text": "O ciclo 1-2-3-4-5-1 tem tamanho 5. Ciclo ímpar impede bipartição.",
          "highlightEdges": [
            "e12",
            "e23",
            "e34",
            "e45",
            "e51"
          ]
        }
      ]
    },
    "eulerianTrail": {
      "title": "Percurso euleriano sem repetir aresta",
      "graph": {
        "vertices": [
          {
            "id": "A",
            "x": 110,
            "y": 185
          },
          {
            "id": "B",
            "x": 255,
            "y": 80
          },
          {
            "id": "C",
            "x": 255,
            "y": 290
          },
          {
            "id": "D",
            "x": 455,
            "y": 80
          },
          {
            "id": "E",
            "x": 455,
            "y": 290
          }
        ],
        "edges": [
          {
            "id": "ab",
            "u": "A",
            "v": "B"
          },
          {
            "id": "bc",
            "u": "B",
            "v": "C"
          },
          {
            "id": "ca",
            "u": "C",
            "v": "A"
          },
          {
            "id": "ad",
            "u": "A",
            "v": "D"
          },
          {
            "id": "de",
            "u": "D",
            "v": "E"
          },
          {
            "id": "ea",
            "u": "E",
            "v": "A"
          }
        ]
      },
      "trail": [
        "ab",
        "bc",
        "ca",
        "ad",
        "de",
        "ea"
      ],
      "steps": [
        {
          "title": "Graus pares",
          "text": "A tem grau 4; B, C, D e E têm grau 2. Todos os graus são pares, então existe circuito euleriano."
        },
        {
          "title": "Triângulo esquerdo",
          "text": "Usamos A-B, B-C e C-A uma única vez.",
          "highlightEdges": [
            "ab",
            "bc",
            "ca"
          ]
        },
        {
          "title": "Triângulo direito",
          "text": "Seguimos por A-D, D-E e E-A. Nenhuma aresta foi repetida.",
          "highlightEdges": [
            "ad",
            "de",
            "ea"
          ]
        },
        {
          "title": "Circuito completo",
          "text": "Circuito: A-B-C-A-D-E-A. O teste automatizado garante que cada edge id aparece uma vez.",
          "highlightEdges": [
            "ab",
            "bc",
            "ca",
            "ad",
            "de",
            "ea"
          ]
        }
      ]
    },
    "hamiltonianCycle": {
      "title": "Ciclo hamiltoniano",
      "graph": {
        "vertices": [
          {
            "id": "1",
            "x": 350,
            "y": 60
          },
          {
            "id": "2",
            "x": 560,
            "y": 145
          },
          {
            "id": "3",
            "x": 520,
            "y": 290
          },
          {
            "id": "4",
            "x": 350,
            "y": 330
          },
          {
            "id": "5",
            "x": 180,
            "y": 290
          },
          {
            "id": "6",
            "x": 140,
            "y": 145
          }
        ],
        "edges": [
          {
            "id": "e12",
            "u": "1",
            "v": "2"
          },
          {
            "id": "e23",
            "u": "2",
            "v": "3"
          },
          {
            "id": "e34",
            "u": "3",
            "v": "4"
          },
          {
            "id": "e45",
            "u": "4",
            "v": "5"
          },
          {
            "id": "e56",
            "u": "5",
            "v": "6"
          },
          {
            "id": "e61",
            "u": "6",
            "v": "1"
          },
          {
            "id": "e14",
            "u": "1",
            "v": "4"
          },
          {
            "id": "e25",
            "u": "2",
            "v": "5"
          }
        ]
      },
      "cycle": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "1"
      ],
      "steps": [
        {
          "title": "Percurso de vértices",
          "text": "Hamiltoniano olha vértices, não arestas. O ciclo precisa visitar cada vértice uma vez antes de retornar."
        },
        {
          "title": "Ciclo válido",
          "text": "1-2-3-4-5-6-1 visita todos os 6 vértices e retorna ao início.",
          "highlightEdges": [
            "e12",
            "e23",
            "e34",
            "e45",
            "e56",
            "e61"
          ]
        },
        {
          "title": "Sem repetição interna",
          "text": "O vértice 1 aparece no começo e no fim; os demais aparecem uma única vez.",
          "highlightVertices": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
          ]
        }
      ]
    },
    "kruskalMst": {
      "title": "Kruskal com arestas seguras",
      "graph": {
        "vertices": [
          {
            "id": "1",
            "x": 80,
            "y": 185
          },
          {
            "id": "2",
            "x": 250,
            "y": 80
          },
          {
            "id": "3",
            "x": 250,
            "y": 290
          },
          {
            "id": "4",
            "x": 480,
            "y": 95
          },
          {
            "id": "5",
            "x": 635,
            "y": 185
          },
          {
            "id": "6",
            "x": 480,
            "y": 290
          }
        ],
        "edges": [
          {
            "id": "e12",
            "u": "1",
            "v": "2",
            "weight": 6
          },
          {
            "id": "e13",
            "u": "1",
            "v": "3",
            "weight": 1
          },
          {
            "id": "e14",
            "u": "1",
            "v": "4",
            "weight": 5
          },
          {
            "id": "e23",
            "u": "2",
            "v": "3",
            "weight": 5
          },
          {
            "id": "e25",
            "u": "2",
            "v": "5",
            "weight": 3
          },
          {
            "id": "e26",
            "u": "2",
            "v": "6",
            "weight": 2
          },
          {
            "id": "e34",
            "u": "3",
            "v": "4",
            "weight": 7
          },
          {
            "id": "e46",
            "u": "4",
            "v": "6",
            "weight": 4
          },
          {
            "id": "e56",
            "u": "5",
            "v": "6",
            "weight": 6
          }
        ]
      },
      "chosenEdges": [
        "e13",
        "e26",
        "e25",
        "e46",
        "e14"
      ],
      "expectedCost": 15,
      "steps": [
        {
          "title": "Ordenação",
          "text": "Ordene por peso: 1, 2, 3, 4, 5, ..."
        },
        {
          "title": "Escolhas",
          "text": "Entram 1-3, 2-6, 2-5 e 4-6 porque conectam componentes diferentes.",
          "highlightEdges": [
            "e13",
            "e26",
            "e25",
            "e46"
          ]
        },
        {
          "title": "Fecha a árvore",
          "text": "A aresta 1-4 une os dois componentes restantes. Temos n-1=5 arestas e custo 15.",
          "highlightEdges": [
            "e13",
            "e26",
            "e25",
            "e46",
            "e14"
          ]
        }
      ]
    },
    "primMst": {
      "title": "Prim com fronteira T",
      "graph": {
        "vertices": [
          {
            "id": "1",
            "x": 80,
            "y": 185
          },
          {
            "id": "2",
            "x": 250,
            "y": 80
          },
          {
            "id": "3",
            "x": 250,
            "y": 290
          },
          {
            "id": "4",
            "x": 480,
            "y": 95
          },
          {
            "id": "5",
            "x": 635,
            "y": 185
          },
          {
            "id": "6",
            "x": 480,
            "y": 290
          }
        ],
        "edges": [
          {
            "id": "e12",
            "u": "1",
            "v": "2",
            "weight": 6
          },
          {
            "id": "e13",
            "u": "1",
            "v": "3",
            "weight": 1
          },
          {
            "id": "e14",
            "u": "1",
            "v": "4",
            "weight": 5
          },
          {
            "id": "e23",
            "u": "2",
            "v": "3",
            "weight": 5
          },
          {
            "id": "e25",
            "u": "2",
            "v": "5",
            "weight": 3
          },
          {
            "id": "e26",
            "u": "2",
            "v": "6",
            "weight": 2
          },
          {
            "id": "e34",
            "u": "3",
            "v": "4",
            "weight": 7
          },
          {
            "id": "e46",
            "u": "4",
            "v": "6",
            "weight": 4
          },
          {
            "id": "e56",
            "u": "5",
            "v": "6",
            "weight": 6
          }
        ]
      },
      "steps": [
        {
          "title": "T={1}",
          "text": "Começando em 1, a menor aresta que sai de T é 1-3.",
          "highlightEdges": [
            "e13"
          ],
          "highlightVertices": [
            "1",
            "3"
          ]
        },
        {
          "title": "T={1,3}",
          "text": "A menor aresta da fronteira agora pode ser 1-4 com peso 5.",
          "highlightEdges": [
            "e13",
            "e14"
          ],
          "highlightVertices": [
            "1",
            "3",
            "4"
          ]
        },
        {
          "title": "Continua até n-1",
          "text": "Prim sempre escolhe a menor aresta entre T e V-T, nunca a menor global que já está dentro de T.",
          "highlightEdges": [
            "e13",
            "e14",
            "e46",
            "e26",
            "e25"
          ]
        }
      ]
    },
    "vertexColoring": {
      "title": "Coloração de vértices",
      "graph": {
        "vertices": [
          {
            "id": "1",
            "x": 110,
            "y": 90
          },
          {
            "id": "2",
            "x": 260,
            "y": 90
          },
          {
            "id": "3",
            "x": 110,
            "y": 260
          },
          {
            "id": "4",
            "x": 260,
            "y": 260
          },
          {
            "id": "5",
            "x": 500,
            "y": 90
          },
          {
            "id": "6",
            "x": 650,
            "y": 90
          },
          {
            "id": "7",
            "x": 500,
            "y": 260
          },
          {
            "id": "8",
            "x": 650,
            "y": 260
          }
        ],
        "edges": [
          {
            "id": "e12",
            "u": "1",
            "v": "2"
          },
          {
            "id": "e13",
            "u": "1",
            "v": "3"
          },
          {
            "id": "e14",
            "u": "1",
            "v": "4"
          },
          {
            "id": "e23",
            "u": "2",
            "v": "3"
          },
          {
            "id": "e24",
            "u": "2",
            "v": "4"
          },
          {
            "id": "e34",
            "u": "3",
            "v": "4"
          },
          {
            "id": "e56",
            "u": "5",
            "v": "6"
          },
          {
            "id": "e57",
            "u": "5",
            "v": "7"
          },
          {
            "id": "e58",
            "u": "5",
            "v": "8"
          },
          {
            "id": "e67",
            "u": "6",
            "v": "7"
          },
          {
            "id": "e68",
            "u": "6",
            "v": "8"
          },
          {
            "id": "e78",
            "u": "7",
            "v": "8"
          },
          {
            "id": "e18",
            "u": "1",
            "v": "8"
          },
          {
            "id": "e35",
            "u": "3",
            "v": "5"
          }
        ]
      },
      "colors": {
        "1": "azul",
        "2": "verde",
        "3": "laranja",
        "4": "roxo",
        "5": "azul",
        "6": "verde",
        "7": "laranja",
        "8": "roxo"
      },
      "steps": [
        {
          "title": "Clique K4",
          "text": "Os vértices 1,2,3,4 formam K4. Isso força pelo menos 4 cores.",
          "highlightVertices": [
            "1",
            "2",
            "3",
            "4"
          ]
        },
        {
          "title": "Reuso seguro",
          "text": "Vértices não adjacentes podem repetir cor. Assim 1 e 5 ficam azuis, 2 e 6 verdes, 3 e 7 laranja, 4 e 8 roxos.",
          "highlightVertices": [
            "1",
            "5",
            "2",
            "6",
            "3",
            "7",
            "4",
            "8"
          ]
        },
        {
          "title": "Conclusão",
          "text": "Como há limite inferior 4 e uma coloração com 4, χ(G)=4."
        }
      ]
    },
    "edgeColoring": {
      "title": "Coloração de arestas",
      "graph": {
        "vertices": [
          {
            "id": "1",
            "x": 350,
            "y": 55
          },
          {
            "id": "2",
            "x": 560,
            "y": 120
          },
          {
            "id": "3",
            "x": 560,
            "y": 260
          },
          {
            "id": "4",
            "x": 350,
            "y": 325
          },
          {
            "id": "5",
            "x": 145,
            "y": 260
          },
          {
            "id": "6",
            "x": 145,
            "y": 120
          }
        ],
        "edges": [
          {
            "id": "e14",
            "u": "1",
            "v": "4"
          },
          {
            "id": "e23",
            "u": "2",
            "v": "3"
          },
          {
            "id": "e56",
            "u": "5",
            "v": "6"
          },
          {
            "id": "e25",
            "u": "2",
            "v": "5"
          },
          {
            "id": "e34",
            "u": "3",
            "v": "4"
          },
          {
            "id": "e12",
            "u": "1",
            "v": "2"
          },
          {
            "id": "e35",
            "u": "3",
            "v": "5"
          },
          {
            "id": "e46",
            "u": "4",
            "v": "6"
          },
          {
            "id": "e13",
            "u": "1",
            "v": "3"
          },
          {
            "id": "e26",
            "u": "2",
            "v": "6"
          },
          {
            "id": "e45",
            "u": "4",
            "v": "5"
          }
        ]
      },
      "colors": {
        "e14": "dia1",
        "e23": "dia1",
        "e56": "dia1",
        "e25": "dia2",
        "e34": "dia2",
        "e12": "dia3",
        "e35": "dia3",
        "e46": "dia3",
        "e13": "dia4",
        "e26": "dia4",
        "e45": "dia4"
      },
      "steps": [
        {
          "title": "Grau máximo",
          "text": "O maior grau é 4. Logo são necessários pelo menos 4 dias/cores."
        },
        {
          "title": "Cores como emparelhamentos",
          "text": "Cada cor contém arestas sem vértice comum.",
          "highlightEdges": [
            "e14",
            "e23",
            "e56"
          ]
        },
        {
          "title": "Classe 1",
          "text": "A coloração usa exatamente Δ(G)=4 cores, então o grafo é classe 1.",
          "highlightEdges": [
            "e14",
            "e23",
            "e56",
            "e25",
            "e34",
            "e12",
            "e35",
            "e46",
            "e13",
            "e26",
            "e45"
          ]
        }
      ]
    },
    "matchingAndCover": {
      "title": "Matching e cobertura",
      "graph": {
        "vertices": [
          {
            "id": "A",
            "x": 125,
            "y": 100
          },
          {
            "id": "B",
            "x": 320,
            "y": 85
          },
          {
            "id": "C",
            "x": 125,
            "y": 285
          },
          {
            "id": "D",
            "x": 320,
            "y": 300
          },
          {
            "id": "E",
            "x": 545,
            "y": 105
          },
          {
            "id": "F",
            "x": 545,
            "y": 285
          }
        ],
        "edges": [
          {
            "id": "eAB",
            "u": "A",
            "v": "B"
          },
          {
            "id": "eAC",
            "u": "A",
            "v": "C"
          },
          {
            "id": "eBD",
            "u": "B",
            "v": "D"
          },
          {
            "id": "eCD",
            "u": "C",
            "v": "D"
          },
          {
            "id": "eBE",
            "u": "B",
            "v": "E"
          },
          {
            "id": "eDF",
            "u": "D",
            "v": "F"
          },
          {
            "id": "eEF",
            "u": "E",
            "v": "F"
          }
        ]
      },
      "matching": [
        "eAC",
        "eBD",
        "eEF"
      ],
      "cover": [
        "A",
        "D",
        "E"
      ],
      "steps": [
        {
          "title": "Emparelhamento",
          "text": "M={AC,BD,EF} tem 3 arestas disjuntas.",
          "highlightEdges": [
            "eAC",
            "eBD",
            "eEF"
          ]
        },
        {
          "title": "Cobertura",
          "text": "K={A,D,E} toca todas as arestas do grafo.",
          "highlightVertices": [
            "A",
            "D",
            "E"
          ]
        },
        {
          "title": "Certificado",
          "text": "Como |M|=|K|=3, M é máximo e K é mínima."
        }
      ]
    },
    "flowResidual": {
      "title": "Fluxo e residual",
      "graph": {
        "directed": true,
        "vertices": [
          {
            "id": "s",
            "x": 70,
            "y": 190
          },
          {
            "id": "a",
            "x": 235,
            "y": 90
          },
          {
            "id": "b",
            "x": 235,
            "y": 290
          },
          {
            "id": "c",
            "x": 430,
            "y": 90
          },
          {
            "id": "d",
            "x": 430,
            "y": 290
          },
          {
            "id": "t",
            "x": 610,
            "y": 190
          }
        ],
        "edges": [
          {
            "id": "sa",
            "u": "s",
            "v": "a",
            "capacity": 12
          },
          {
            "id": "sb",
            "u": "s",
            "v": "b",
            "capacity": 8
          },
          {
            "id": "ab",
            "u": "a",
            "v": "b",
            "capacity": 3
          },
          {
            "id": "ac",
            "u": "a",
            "v": "c",
            "capacity": 12
          },
          {
            "id": "bd",
            "u": "b",
            "v": "d",
            "capacity": 6
          },
          {
            "id": "cd",
            "u": "c",
            "v": "d",
            "capacity": 3
          },
          {
            "id": "ct",
            "u": "c",
            "v": "t",
            "capacity": 8
          },
          {
            "id": "dt",
            "u": "d",
            "v": "t",
            "capacity": 7
          }
        ]
      },
      "steps": [
        {
          "title": "Capacidades",
          "text": "Cada arco limita quanto recurso pode passar. O gargalo de um caminho é a menor capacidade residual nele."
        },
        {
          "title": "Caminho aumentante",
          "text": "Escolhendo s-a-c-t, o gargalo é min(12,12,8)=8.",
          "highlightEdges": [
            "sa",
            "ac",
            "ct"
          ]
        },
        {
          "title": "Residual",
          "text": "Depois de enviar fluxo, surgem arcos reversos para permitir desfazer parte da escolha em iterações futuras.",
          "highlightEdges": [
            "sa",
            "ac",
            "ct"
          ]
        }
      ]
    },
    "minCostResidual": {
      "title": "Fluxo com custo mínimo",
      "graph": {
        "directed": true,
        "vertices": [
          {
            "id": "1",
            "x": 80,
            "y": 190
          },
          {
            "id": "2",
            "x": 260,
            "y": 90
          },
          {
            "id": "3",
            "x": 260,
            "y": 290
          },
          {
            "id": "4",
            "x": 500,
            "y": 90
          },
          {
            "id": "5",
            "x": 500,
            "y": 290
          },
          {
            "id": "6",
            "x": 650,
            "y": 190
          }
        ],
        "edges": [
          {
            "id": "e12",
            "u": "1",
            "v": "2",
            "capacity": 80,
            "cost": 2
          },
          {
            "id": "e13",
            "u": "1",
            "v": "3",
            "capacity": 70,
            "cost": 3
          },
          {
            "id": "e24",
            "u": "2",
            "v": "4",
            "capacity": 40,
            "cost": 1
          },
          {
            "id": "e25",
            "u": "2",
            "v": "5",
            "capacity": 35,
            "cost": 4
          },
          {
            "id": "e36",
            "u": "3",
            "v": "6",
            "capacity": 40,
            "cost": 3
          },
          {
            "id": "e45",
            "u": "4",
            "v": "5",
            "capacity": 30,
            "cost": 3
          },
          {
            "id": "e46",
            "u": "4",
            "v": "6",
            "capacity": 70,
            "cost": 2
          },
          {
            "id": "e56",
            "u": "5",
            "v": "6",
            "capacity": 80,
            "cost": 3
          }
        ]
      },
      "steps": [
        {
          "title": "Custo unitário",
          "text": "O caminho 1-2-4-6 tem custo 2+1+2=5. O custo adicionado é fluxo enviado vezes 5.",
          "highlightEdges": [
            "e12",
            "e24",
            "e46"
          ]
        },
        {
          "title": "Gargalo",
          "text": "O gargalo do caminho é a menor capacidade residual dos arcos escolhidos.",
          "highlightEdges": [
            "e12",
            "e24",
            "e46"
          ]
        },
        {
          "title": "Arco reverso",
          "text": "Se 2->6 tivesse fluxo e custo 3, o residual poderia conter 6->2 com custo -3 para desfazer fluxo anterior."
        }
      ]
    }
  },
  "exercises": [
    {
      "id": "conectividade-gf",
      "topicSlug": "conceitos-basicos-conectividade",
      "title": "SCA, k(G) e h-conexidade no grafo Gf",
      "sourcePdf": "Conceitos Básicos – parte 4Tipos de Grafos, Conectividade e Grafos h-conexos.pdf",
      "page": 25,
      "prompt": "1) Forneça pelo menos dois SCAs, determine o k(G) e o valor do h (h-conexo) para o grafo Gf. O exercício apresenta um grafo não orientado Gf com vértices rotulados de 1 a 7 e pede a análise de conectividade por remoção de vértices.",
      "questions": [
        "Fornecer pelo menos dois subconjuntos de articulação.",
        "Determinar k(G).",
        "Informar para qual h o grafo é h-conexo."
      ],
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "edges": [
          [
            "1",
            "2"
          ],
          [
            "1",
            "3"
          ],
          [
            "2",
            "3"
          ],
          [
            "2",
            "4"
          ],
          [
            "3",
            "4"
          ],
          [
            "4",
            "5"
          ],
          [
            "4",
            "6"
          ],
          [
            "5",
            "6"
          ],
          [
            "5",
            "7"
          ],
          [
            "6",
            "7"
          ]
        ]
      },
      "solution": "Um SCA é {4}, pois remover o vértice 4 separa {1,2,3} de {5,6,7}. Outro SCA possível é {5,6}, pois remover os dois isola o vértice 7. Como existe SCA de tamanho 1, k(G)=1. Portanto o grafo é 1-conexo, mas não é 2-conexo. A justificativa estrutural é que a conectividade é o menor número de vértices cuja remoção desconecta o grafo."
    },
    {
      "id": "planaridade-euler",
      "topicSlug": "grafos-planares-k-partidos",
      "title": "Planaridade e fórmula de Euler",
      "sourcePdf": "Grafos Planares e K-partidos.pdf",
      "page": 9,
      "prompt": "Sejam os grafos abaixo: quais deles são um grafo planar? Para aqueles que são um grafo planar, verifique a fórmula de Euler (n – m + r = 2). A página mostra quatro grafos rotulados I, II, III e IV, incluindo uma matriz de adjacência para um deles.",
      "questions": [
        "Identificar quais grafos admitem desenho planar.",
        "Para os planares, contar n, m e r.",
        "Verificar n-m+r=2."
      ],
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "edges": [
          [
            "1",
            "2"
          ],
          [
            "2",
            "3"
          ],
          [
            "3",
            "4"
          ],
          [
            "4",
            "1"
          ],
          [
            "1",
            "5"
          ],
          [
            "2",
            "5"
          ],
          [
            "3",
            "5"
          ],
          [
            "4",
            "5"
          ]
        ]
      },
      "solution": "Para cada grafo, o procedimento correto é tentar uma representação sem cruzamentos e só depois aplicar Euler. No modelo visual usado aqui, n=5, m=8 e r=5, contando a região externa. Logo 5-8+5=2, então a contagem é compatível com planaridade. Se um dos grafos da página não puder ser redesenhado sem cruzamentos ou violar os limites de planaridade, ele deve ser classificado como não planar."
    },
    {
      "id": "bipartido-amigos-jogos",
      "topicSlug": "grafos-planares-k-partidos",
      "title": "Amigos, jogos e grafo bipartido",
      "sourcePdf": "Grafos Planares e K-partidos.pdf",
      "page": 19,
      "prompt": "Os amigos João (J), Pedro (P), Antônio (A), Marcelo (M) e Francisco (F) sempre se encontram para conversar e jogar dama (Da), xadrez (X) e dominó (Do). Preferências: João só joga xadrez; Pedro não joga dominó; Antônio joga tudo; Marcelo não joga xadrez e dominó; Francisco não joga nada. Pede-se representar por grafo bipartido G=(V,E), apresentar um grafo parcial em que todos menos Francisco joguem ao mesmo tempo, construir o grafo rotulado entre amigos e dizer se o grafo do item a é planar.",
      "questions": [
        "Definir V e E do grafo bipartido.",
        "Montar um grafo parcial que atende todos menos Francisco.",
        "Criar grafo entre amigos com rótulos de jogos.",
        "Decidir planaridade do grafo bipartido."
      ],
      "graph": {
        "vertices": [
          "J",
          "P",
          "A",
          "M",
          "F",
          "X",
          "Da",
          "Do"
        ],
        "edges": [
          [
            "J",
            "X"
          ],
          [
            "P",
            "X"
          ],
          [
            "P",
            "Da"
          ],
          [
            "A",
            "X"
          ],
          [
            "A",
            "Da"
          ],
          [
            "A",
            "Do"
          ],
          [
            "M",
            "Da"
          ]
        ]
      },
      "solution": "Use bipartição Amigos={J,P,A,M,F} e Jogos={X,Da,Do}. As arestas são as preferências: J-X; P-X e P-Da; A-X, A-Da e A-Do; M-Da; F não tem arestas. Um grafo parcial para todos menos Francisco pode escolher J-X, P-Da e A-Do; Marcelo ficaria sem jogo se houver apenas um tabuleiro de dama, então para incluir Marcelo simultaneamente seria necessário outro jogo/mesa ou ajustar o pareamento. O grafo bipartido desenhado com duas colunas é planar, pois não contém K3,3 nem subdivisão obrigatória nessa instância pequena."
    },
    {
      "id": "percursos-pcv",
      "topicSlug": "percursos-eulerianos-hamiltonianos",
      "title": "Hamilton, Euler e PCV",
      "sourcePdf": "Percursos Abrangentes – Eulerianos eHamiltonianos.pdf",
      "page": 39,
      "prompt": "Seja o grafo abaixo. Pede-se: 1) Há caminho hamiltoniano no grafo? Forneça um exemplo. 2) O grafo é hamiltoniano? Por quê? 3) Há um caminho euleriano no grafo? Forneça um exemplo. 4) O grafo é Euleriano? Por quê? 5) Considerando o PCV, a heurística apresentada e iniciando no vértice 1, determine um caminho e o seu comprimento, se possível.",
      "questions": [
        "Verificar caminho hamiltoniano.",
        "Verificar ciclo hamiltoniano.",
        "Verificar caminho euleriano.",
        "Verificar circuito euleriano.",
        "Aplicar heurística do caixeiro viajante a partir do vértice 1."
      ],
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9"
        ],
        "edges": [
          [
            "1",
            "2"
          ],
          [
            "2",
            "3"
          ],
          [
            "3",
            "4"
          ],
          [
            "4",
            "5"
          ],
          [
            "5",
            "6"
          ],
          [
            "6",
            "7"
          ],
          [
            "7",
            "8"
          ],
          [
            "8",
            "9"
          ],
          [
            "9",
            "1"
          ],
          [
            "2",
            "6"
          ],
          [
            "3",
            "7"
          ],
          [
            "4",
            "8"
          ]
        ]
      },
      "solution": "Para Hamilton, procure uma sequência que visite todos os vértices uma vez; por exemplo, 1-2-3-4-5-6-7-8-9 é caminho hamiltoniano se todas essas arestas existem no grafo desenhado. Para ser hamiltoniano, precisa também haver retorno 9-1, formando ciclo. Para Euler, conte graus: circuito euleriano exige todos os graus pares; caminho euleriano aberto exige exatamente dois ímpares. A heurística do PCV deve escolher o vizinho mais barato ainda não visitado e somar os pesos até retornar ao início se a aresta de retorno existir."
    },
    {
      "id": "caminho-euleriano-lista",
      "topicSlug": "percursos-eulerianos-hamiltonianos",
      "title": "Quais grafos possuem caminho euleriano?",
      "sourcePdf": "Percursos Abrangentes – Eulerianos eHamiltonianos.pdf",
      "page": 43,
      "prompt": "Quais grafos a seguir possuem caminho Euleriano? Por quê? A página lista os grafos Ga, Gb, Gc, Gd, Ge, Gf, Gg, Gh, Gi e Gj com vértices numerados e pede a decisão por estrutura de graus.",
      "questions": [
        "Calcular os graus dos vértices em cada grafo.",
        "Classificar existência de caminho euleriano.",
        "Explicar usando quantidade de vértices ímpares."
      ],
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4"
        ],
        "edges": [
          [
            "1",
            "2"
          ],
          [
            "2",
            "3"
          ],
          [
            "3",
            "4"
          ],
          [
            "4",
            "1"
          ],
          [
            "1",
            "3"
          ]
        ]
      },
      "solution": "O critério é objetivo: em grafo conexo, há circuito euleriano se todos os vértices têm grau par; há caminho euleriano aberto se exatamente dois vértices têm grau ímpar; com quatro ou mais ímpares não existe caminho euleriano. Para cada grafo da lista, monte uma tabela de graus. No modelo visual acima, os graus são d(1)=3, d(2)=2, d(3)=3, d(4)=2; existem exatamente dois ímpares, então há caminho euleriano aberto, mas não circuito."
    },
    {
      "id": "mst-prim-kruskal-visual",
      "topicSlug": "kruskal-prim",
      "title": "APCM por Prim e Kruskal",
      "sourcePdf": "Árvore Geradora de Custo Mínimo – Parte I –Fundamentos e Algoritmos.pdf",
      "page": 65,
      "prompt": "Dado o grafo abaixo, determine a APCM utilizando o Algoritmo de Prim e Kruskal (Modelo Visual). O grafo possui vértices a, b, c, d, e, f e arestas ponderadas, incluindo pesos 5, 6, 7, 8, 8, 9, 10, 15 e 20.",
      "questions": [
        "Resolver por Kruskal.",
        "Resolver por Prim.",
        "Comparar a árvore e o custo final."
      ],
      "graph": {
        "vertices": [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f"
        ],
        "edges": [
          [
            "a",
            "b",
            6
          ],
          [
            "a",
            "d",
            15
          ],
          [
            "b",
            "c",
            20
          ],
          [
            "b",
            "d",
            9
          ],
          [
            "c",
            "d",
            10
          ],
          [
            "c",
            "e",
            5
          ],
          [
            "d",
            "e",
            8
          ],
          [
            "d",
            "f",
            7
          ],
          [
            "e",
            "f",
            8
          ]
        ]
      },
      "solution": "Por Kruskal, ordene as arestas: 5,6,7,8,8,9,10,15,20. Inclua sempre que não formar ciclo: c-e(5), a-b(6), d-f(7), d-e(8), b-d(9). Isso conecta todos os 6 vértices com 5 arestas e custo 35. Por Prim, partindo de a, uma sequência possível é a-b(6), b-d(9), d-f(7), d-e(8), e-c(5), também com custo 35."
    },
    {
      "id": "mst-predios",
      "topicSlug": "kruskal-prim",
      "title": "Cabeamento entre prédios",
      "sourcePdf": "Árvore Geradora de Custo Mínimo - Parte II –Algoritmos de Kruskal e Prim.pdf",
      "page": 124,
      "prompt": "Uma empresa multinacional possui a configuração de prédios em uma área próxima e deseja conectá-los por cabeamento para que cada prédio se comunique com outro por uma ou mais estruturas de rede. O custo é proporcional ao comprimento. As distâncias entre pares de prédios são dadas no grafo. Determine a APCM usando Kruskal e Prim.",
      "questions": [
        "Modelar prédios como vértices e distâncias como pesos.",
        "Aplicar Kruskal.",
        "Aplicar Prim."
      ],
      "graph": {
        "vertices": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I"
        ],
        "edges": [
          [
            "A",
            "B",
            12
          ],
          [
            "A",
            "D",
            35
          ],
          [
            "B",
            "C",
            27
          ],
          [
            "B",
            "E",
            42
          ],
          [
            "C",
            "F",
            20
          ],
          [
            "D",
            "E",
            6
          ],
          [
            "E",
            "F",
            51
          ],
          [
            "D",
            "G",
            15
          ],
          [
            "E",
            "H",
            44
          ],
          [
            "F",
            "I",
            39
          ],
          [
            "G",
            "H",
            11
          ],
          [
            "H",
            "I",
            18
          ]
        ]
      },
      "solution": "Ordenando os pesos, Kruskal escolhe D-E(6), G-H(11), A-B(12), D-G(15), H-I(18), C-F(20), B-C(27) e A-D(35), evitando ciclos e conectando todos os prédios. A árvore tem 8 arestas para 9 vértices. O custo total é 144. Prim chega ao mesmo custo, embora a ordem dependa do vértice inicial."
    },
    {
      "id": "coloracao-hospital",
      "topicSlug": "coloracao-vertices",
      "title": "Hospital e quartos seguros",
      "sourcePdf": "Coloração de Vértices.pdf",
      "page": 106,
      "prompt": "Um hospital está separando pacientes em quartos de tal maneira que pacientes com determinadas enfermidades não podem ficar no mesmo quarto. A tabela indica com X quais pares de enfermidades são incompatíveis. Pede-se modelar o problema como grafo, indicar a teoria aplicável e encontrar o menor número de quartos com algoritmo passo a passo.",
      "questions": [
        "Modelar enfermidades como vértices.",
        "Transformar incompatibilidade em aresta.",
        "Aplicar coloração de vértices para minimizar quartos."
      ],
      "graph": {
        "vertices": [
          "E1",
          "E2",
          "E3",
          "E4",
          "E5"
        ],
        "edges": [
          [
            "E1",
            "E2"
          ],
          [
            "E1",
            "E3"
          ],
          [
            "E2",
            "E3"
          ],
          [
            "E2",
            "E4"
          ],
          [
            "E3",
            "E5"
          ],
          [
            "E4",
            "E5"
          ]
        ]
      },
      "solution": "Cada enfermidade vira um vértice; cada X da tabela vira uma aresta de conflito. O problema é de coloração de vértices: cada cor representa um quarto. No grafo modelo, E1,E2,E3 formam K3, então pelo menos 3 quartos são necessários. Uma coloração válida é quarto 1: E1,E4; quarto 2: E2,E5; quarto 3: E3. Logo o mínimo é 3 nesse modelo."
    },
    {
      "id": "coloracao-produtos-quimicos",
      "topicSlug": "coloracao-vertices",
      "title": "Produtos químicos incompatíveis",
      "sourcePdf": "Coloração de Vértices.pdf",
      "page": 107,
      "prompt": "Uma firma deseja armazenar sete produtos químicos Q1, Q2, Q3, Q4, Q5, Q6 e Q7. Alguns pares não podem ser armazenados juntos por segurança; a tabela marca com asterisco os pares incompatíveis. Pede-se modelar como grafo, montar matriz de adjacência, indicar a quantidade mínima de locais e listar quais produtos podem ficar juntos.",
      "questions": [
        "Construir grafo de incompatibilidade.",
        "Montar matriz de adjacência.",
        "Colorir o grafo e interpretar cores como locais."
      ],
      "graph": {
        "vertices": [
          "Q1",
          "Q2",
          "Q3",
          "Q4",
          "Q5",
          "Q6",
          "Q7"
        ],
        "edges": [
          [
            "Q1",
            "Q2"
          ],
          [
            "Q1",
            "Q4"
          ],
          [
            "Q1",
            "Q7"
          ],
          [
            "Q2",
            "Q3"
          ],
          [
            "Q2",
            "Q5"
          ],
          [
            "Q3",
            "Q4"
          ],
          [
            "Q3",
            "Q6"
          ],
          [
            "Q4",
            "Q5"
          ],
          [
            "Q4",
            "Q6"
          ],
          [
            "Q5",
            "Q7"
          ],
          [
            "Q6",
            "Q7"
          ]
        ]
      },
      "solution": "Monte a matriz com 1 para cada par marcado por asterisco e 0 caso contrário. Em seguida, aplique coloração de vértices. Uma coloração possível é local 1: Q1,Q3,Q5; local 2: Q2,Q4,Q7; local 3: Q6. Como há triângulos de incompatibilidade em subestruturas do grafo, menos de 3 locais não basta. Portanto o mínimo do modelo é 3 locais."
    },
    {
      "id": "coloracao-arestas-vizing",
      "topicSlug": "coloracao-arestas",
      "title": "Teorema de Vizing e classe do grafo",
      "sourcePdf": "Coloração de Arestas.pdf",
      "page": 35,
      "prompt": "Verifique o Teorema de Vizig para o grafo G. A qual classe pertence o grafo, 1 ou 2? Além disso, verifique o teorema estudado anteriormente fornecendo uma possível coloração para as arestas do grafo bipartido G.",
      "questions": [
        "Calcular Δ(G).",
        "Colorir arestas sem repetir cor em arestas incidentes.",
        "Classificar em classe 1 ou classe 2."
      ],
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "edges": [
          [
            "1",
            "2"
          ],
          [
            "1",
            "3"
          ],
          [
            "2",
            "4"
          ],
          [
            "2",
            "5"
          ],
          [
            "3",
            "5"
          ],
          [
            "4",
            "6"
          ],
          [
            "5",
            "6"
          ]
        ]
      },
      "solution": "Como o grafo é bipartido, vale o teorema de König para coloração de arestas: χ'(G)=Δ(G). O maior grau é 3, então bastam 3 cores. Uma coloração válida distribui as arestas em três emparelhamentos, sem duas arestas da mesma cor incidirem no mesmo vértice. Pelo Teorema de Vizing, χ'(G) estaria entre Δ e Δ+1; aqui é exatamente Δ, logo o grafo é classe 1."
    },
    {
      "id": "matching-diferenca-simetrica",
      "topicSlug": "emparelhamentos-2",
      "title": "Diferença simétrica de emparelhamentos",
      "sourcePdf": "Emparelhamentos e CoberturasParte II.pdf",
      "page": 8,
      "prompt": "Considere o grafo G, encontre um emparelhamento M e outro M', faça a diferença simétrica e verifique o lema descrito anteriormente. O grafo G tem vértices numerados de 1 a 7 e o exercício trabalha com dois emparelhamentos distintos.",
      "questions": [
        "Escolher dois emparelhamentos M e M'.",
        "Calcular M Δ M'.",
        "Verificar a estrutura em caminhos/ciclos alternantes."
      ],
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "edges": [
          [
            "1",
            "2"
          ],
          [
            "2",
            "3"
          ],
          [
            "2",
            "4"
          ],
          [
            "4",
            "5"
          ],
          [
            "5",
            "6"
          ],
          [
            "6",
            "7"
          ],
          [
            "4",
            "7"
          ]
        ]
      },
      "solution": "Escolha M={{1,2},{4,5},{6,7}} e M'={{2,3},{4,7},{5,6}}. A diferença simétrica contém as arestas que pertencem a exatamente um dos emparelhamentos. O subgrafo resultante se decompõe em caminhos ou ciclos cujas arestas alternam entre M e M'. Essa decomposição verifica o lema: componentes da diferença simétrica de emparelhamentos têm grau máximo 2 e alternância entre os conjuntos."
    },
    {
      "id": "berge-test-drive",
      "topicSlug": "emparelhamentos-2",
      "title": "Teorema de Berge no test drive",
      "sourcePdf": "Emparelhamentos e CoberturasParte II.pdf",
      "page": 29,
      "prompt": "O grafo G à esquerda mostra preferências entre pessoas X={1,2,3,4,5} e carros Y={Uno, Bravo, Punto, Idea, Siena}; à direita há um emparelhamento M fornecido pelo vendedor, que não é máximo: M={{1,Idea},{2,Punto},{5,Siena}}. Pede-se analisar o emparelhamento pelo Teorema de Berge.",
      "questions": [
        "Identificar vértices livres.",
        "Encontrar caminho aumentante.",
        "Inverter o caminho para obter emparelhamento maior."
      ],
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "Uno",
          "Bravo",
          "Punto",
          "Idea",
          "Siena"
        ],
        "edges": [
          [
            "1",
            "Idea"
          ],
          [
            "1",
            "Uno"
          ],
          [
            "2",
            "Punto"
          ],
          [
            "2",
            "Bravo"
          ],
          [
            "3",
            "Uno"
          ],
          [
            "3",
            "Bravo"
          ],
          [
            "4",
            "Idea"
          ],
          [
            "4",
            "Siena"
          ],
          [
            "5",
            "Siena"
          ],
          [
            "5",
            "Punto"
          ]
        ]
      },
      "solution": "No emparelhamento dado, as pessoas 3 e 4 ficam livres, e alguns carros também podem estar livres. Pelo Teorema de Berge, M não é máximo se existe caminho aumentante. Um caminho possível alterna entre arestas fora e dentro de M ligando uma pessoa livre a um carro livre. Ao inverter esse caminho, as arestas fora entram e as de M saem, aumentando |M| de 3 para 4. Assim o vendedor não entregou emparelhamento máximo."
    },
    {
      "id": "hall-concessionaria",
      "topicSlug": "emparelhamentos-2",
      "title": "Teorema de Hall na concessionária",
      "sourcePdf": "Emparelhamentos e CoberturasParte II.pdf",
      "page": 39,
      "prompt": "A concessionária oferece adicionais de cortesia: Ar Condicionado (AC), Roda Liga Leve (RL), Direção Hidráulica (DH) e Vidros Elétricos (VE). Há apenas uma unidade de cada adicional, compatível com qualquer modelo, e as preferências dos clientes aparecem em um grafo bipartido. Pergunta: seria possível agregar a compra de exatamente quatro modelos de carro, um adicional conforme a preferência de cada cliente?",
      "questions": [
        "Modelar clientes e adicionais como bipartição.",
        "Aplicar condição de Hall.",
        "Decidir se quatro compras podem ser atendidas simultaneamente."
      ],
      "graph": {
        "vertices": [
          "A",
          "B",
          "C",
          "D",
          "AC",
          "RL",
          "DH",
          "VE"
        ],
        "edges": [
          [
            "A",
            "AC"
          ],
          [
            "A",
            "DH"
          ],
          [
            "B",
            "AC"
          ],
          [
            "B",
            "VE"
          ],
          [
            "C",
            "DH"
          ],
          [
            "D",
            "RL"
          ],
          [
            "D",
            "VE"
          ]
        ]
      },
      "solution": "Use X=clientes e Y=adicionais. Para atender quatro compras, é preciso um emparelhamento que sature X. Verifique Hall: para todo S⊆X, deve valer |N(S)|≥|S|. Se dois adicionais, como RL e VE, aparecem disponíveis apenas para o mesmo cliente D em certa configuração, então algum subconjunto viola Hall e uma venda será perdida. No modelo acima, há emparelhamento A-AC, B-VE, C-DH, D-RL; logo Hall é satisfeito."
    },
    {
      "id": "cobertura-basica",
      "topicSlug": "coberturas",
      "title": "Cobertura K e emparelhamento M",
      "sourcePdf": "Emparelhamentos e CoberturasParte III.pdf",
      "page": 7,
      "prompt": "Encontre uma cobertura K e um emparelhamento M de G, onde |M| ≤ |K|. O grafo G possui vértices numerados de 1 a 7 e o exercício pede uma cobertura de vértices junto com um emparelhamento para comparar as cardinalidades.",
      "questions": [
        "Encontrar uma cobertura K.",
        "Encontrar um emparelhamento M.",
        "Verificar |M|≤|K|."
      ],
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "edges": [
          [
            "1",
            "2"
          ],
          [
            "1",
            "5"
          ],
          [
            "2",
            "3"
          ],
          [
            "2",
            "6"
          ],
          [
            "3",
            "4"
          ],
          [
            "4",
            "7"
          ],
          [
            "5",
            "6"
          ],
          [
            "6",
            "7"
          ]
        ]
      },
      "solution": "Um emparelhamento possível é M={{1,5},{2,3},{4,7}}, com 3 arestas disjuntas. Uma cobertura compatível é K={1,2,4,6}, que toca todas as arestas listadas. Assim |M|=3 e |K|=4, verificando |M|≤|K|. A desigualdade faz sentido porque cada aresta do emparelhamento precisa ser coberta por pelo menos um vértice distinto."
    },
    {
      "id": "corte-minimo",
      "topicSlug": "fluxos-1",
      "title": "Três cortes e corte mínimo",
      "sourcePdf": "Fluxos em GrafosParte 1.pdf",
      "page": 61,
      "prompt": "Considerando o grafo abaixo, determine ao menos 3 cortes e o(s) corte(s) de capacidade mínima. Os arcos possuem a informação de capacidade máxima. A figura apresenta uma rede direcionada com capacidades como 20, 50, 30, 40, 30, 50 e 40.",
      "questions": [
        "Listar três cortes K=(X,V-X).",
        "Calcular a capacidade de cada corte.",
        "Identificar o corte de menor capacidade."
      ],
      "graph": {
        "vertices": [
          "s",
          "a",
          "b",
          "c",
          "t"
        ],
        "edges": [
          [
            "s",
            "a",
            20
          ],
          [
            "s",
            "b",
            50
          ],
          [
            "a",
            "c",
            30
          ],
          [
            "b",
            "c",
            40
          ],
          [
            "a",
            "t",
            30
          ],
          [
            "c",
            "t",
            50
          ],
          [
            "b",
            "t",
            40
          ]
        ]
      },
      "solution": "Um corte é definido por X contendo s e V-X contendo t. Exemplo 1: X={s}; capacidade 20+50=70. Exemplo 2: X={s,a}; cruzam s-b(50), a-c(30), a-t(30), total 110. Exemplo 3: X={s,a,b,c}; cruzam a-t(30), c-t(50), b-t(40), total 120. Entre esses três, o menor é 70; para provar mínimo global, deve-se testar os demais subconjuntos admissíveis."
    },
    {
      "id": "fluxo-maximo-a",
      "topicSlug": "fluxos-2",
      "title": "Fluxo máximo em rede com s e t",
      "sourcePdf": "Fluxos em GrafosParte 2.pdf",
      "page": 49,
      "prompt": "Encontrar o fluxo máximo dos grafos abaixo. No item a, a rede possui fonte s, sumidouro t e vértices intermediários a, b, c, d, e, com capacidades indicadas entre parênteses: 12, 3, 12, 8, 3, 6, 3, 4, 7 e 8.",
      "questions": [
        "Executar Ford-Fulkerson.",
        "Mostrar caminhos aumentantes e gargalos.",
        "Informar fluxo máximo."
      ],
      "graph": {
        "vertices": [
          "s",
          "a",
          "b",
          "c",
          "d",
          "e",
          "t"
        ],
        "edges": [
          [
            "s",
            "a",
            12
          ],
          [
            "s",
            "b",
            3
          ],
          [
            "a",
            "c",
            12
          ],
          [
            "a",
            "d",
            8
          ],
          [
            "b",
            "d",
            3
          ],
          [
            "c",
            "t",
            6
          ],
          [
            "d",
            "c",
            3
          ],
          [
            "d",
            "e",
            4
          ],
          [
            "e",
            "t",
            7
          ],
          [
            "d",
            "t",
            8
          ]
        ]
      },
      "solution": "Um roteiro possível é enviar 6 por s-a-c-t, depois 6 por s-a-d-t, depois 3 por s-b-d-e-t, respeitando as capacidades. O fluxo acumulado chega a 15 nesse conjunto de caminhos. Para confirmar otimalidade, encontra-se no residual um corte com capacidade 15 ou verifica-se que não resta caminho aumentante de s a t."
    },
    {
      "id": "fluxo-custo-cafe",
      "topicSlug": "fluxos-3",
      "title": "Distribuidora de café com capacidade e custo",
      "sourcePdf": "Fluxos em GrafosParte 3.pdf",
      "page": 44,
      "prompt": "Uma empresa distribuidora de café, localizada em Marília, precisa entregar sua safra a uma indústria de Jaú. As possibilidades estão descritas em um grafo direcionado. Considere: i) só é possível percorrer rodovias no sentido apresentado; ii) os valores nos parênteses representam capacidade máxima em mil sacas por período e custo do transporte.",
      "questions": [
        "Modelar a rede direcionada.",
        "Usar Ford-Fulkerson com custo.",
        "Encontrar fluxo máximo e analisar custo."
      ],
      "graph": {
        "vertices": [
          "Marilia",
          "A",
          "B",
          "C",
          "Jau"
        ],
        "edges": [
          [
            "Marilia",
            "A",
            20,
            3
          ],
          [
            "Marilia",
            "B",
            15,
            4
          ],
          [
            "A",
            "C",
            10,
            2
          ],
          [
            "B",
            "C",
            15,
            1
          ],
          [
            "A",
            "Jau",
            8,
            6
          ],
          [
            "C",
            "Jau",
            25,
            2
          ]
        ]
      },
      "solution": "Cada rodovia vira arco direcionado com capacidade e custo. Primeiro busque caminhos de menor custo no residual, como Marilia-B-C-Jau, cujo custo unitário é 7, e envie o gargalo. Depois atualize capacidades residuais e prossiga com Marilia-A-C-Jau ou Marilia-A-Jau conforme o custo. O custo total é a soma fluxo do caminho vezes custo unitário. Arcos reversos aparecem com custo negativo quando há fluxo positivo."
    },
    {
      "id": "final-q1-centros-treinamento",
      "topicSlug": "coloracao-vertices",
      "title": "Questão 1 - Centros de treinamento e turnos",
      "sourcePdf": "Exercícios finais enviados por imagem.pdf",
      "page": 1,
      "prompt": "Questão 1\nContexto: Copa do Mundo de 2026 - Gerenciamento de Segurança dos Centros de Treinamento.\n\nEnunciado:\nPara a fase de grupos da Copa do Mundo de 2026, a FIFA estabeleceu 8 centros de treinamento principais na região metropolitana de uma das cidades-sede. Devido a protocolos rígidos de segurança e escolta das delegações, certas seleções consideradas de alto risco não podem realizar seus treinos abertos ao público no mesmo bloco de horário (turno), caso seus centros de treinamento compartilhem rotas de acesso comuns ou vias expressas adjacentes.\n\nA matriz de adjacência M1 abaixo apresenta as restrições diretas de tráfego entre os 8 centros de treinamento: o valor 1 indica que os centros correspondentes compartilham rotas e não podem funcionar no mesmo turno; o valor 0 indica ausência de restrição. O objetivo do comitê é determinar o menor número de turnos diários necessários para organizar todas as sessões de treino sem gerar conflitos de tráfego.\n\nCom base na matriz fornecida, responda:",
      "questions": [
        "(a) Indique uma subestrutura do grafo correspondente, um subgrafo induzido específico através dos rótulos dos seus vértices, que determine e prove matematicamente o limite inferior, a quantidade mínima de turnos necessária, para acomodar todos os centros, e informe esse valor mínimo.",
        "(b) Forneça uma distribuição válida de todos os 8 centros de treinamento entre os turnos, respeitando a restrição do problema e utilizando o valor mínimo encontrado no item anterior."
      ],
      "matrix": {
        "headers": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "rows": [
          [
            0,
            1,
            1,
            1,
            0,
            0,
            0,
            1
          ],
          [
            1,
            0,
            1,
            1,
            0,
            0,
            0,
            0
          ],
          [
            1,
            1,
            0,
            1,
            1,
            0,
            0,
            0
          ],
          [
            1,
            1,
            1,
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            0,
            1,
            0,
            0,
            1,
            1,
            1
          ],
          [
            0,
            0,
            0,
            0,
            1,
            0,
            1,
            1
          ],
          [
            0,
            0,
            0,
            0,
            1,
            1,
            0,
            1
          ],
          [
            1,
            0,
            0,
            0,
            1,
            1,
            1,
            0
          ]
        ]
      },
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "edges": [
          [
            "1",
            "2"
          ],
          [
            "1",
            "3"
          ],
          [
            "1",
            "4"
          ],
          [
            "1",
            "8"
          ],
          [
            "2",
            "3"
          ],
          [
            "2",
            "4"
          ],
          [
            "3",
            "4"
          ],
          [
            "3",
            "5"
          ],
          [
            "5",
            "6"
          ],
          [
            "5",
            "7"
          ],
          [
            "5",
            "8"
          ],
          [
            "6",
            "7"
          ],
          [
            "6",
            "8"
          ],
          [
            "7",
            "8"
          ]
        ]
      },
      "solution": "O problema é de coloração de vértices: centros adjacentes não podem ficar no mesmo turno. O subgrafo induzido por {1,2,3,4} é K4, pois todos os pares entre esses vértices são adjacentes. Assim, χ(G)≥4. Uma 4-coloração válida é Turno 1: {1,5}; Turno 2: {2,6}; Turno 3: {3,7}; Turno 4: {4,8}. Como existe uma distribuição com 4 turnos e há limite inferior 4 pela clique K4, o mínimo é 4."
    },
    {
      "id": "final-q2-barracas-iluminacao",
      "topicSlug": "grafos-planares-k-partidos",
      "title": "Questão 2 - Barracas e duas modalidades de iluminação",
      "sourcePdf": "Exercícios finais enviados por imagem.pdf",
      "page": 2,
      "prompt": "Questão 2\nContexto: Festa Junina - Iluminação Temática das Barracas do Arraial.\n\nEnunciado:\nPara a grande noite de São João, a comissão organizadora de um tradicional arraial instalou cabos elétricos aéreos que interligam diretamente diversos pares de barracas principais. Por motivos estéticos e de identidade visual das marcas parceiras, barracas diretamente ligadas por cabos não podem receber o mesmo tipo de iluminação decorativa, por exemplo, misturar os patrocinadores Luzes de Quentão e Luzes de Pipoca na mesma linha, pois isso violaria contratos comerciais de exclusividade visual.\n\nAssim, a prefeitura recebeu exatamente duas modalidades de lâmpadas enfeitadas e precisa saber se é possível decorar todas as 10 barracas mapeadas sem causar disputas contratuais. A matriz de adjacência M2 abaixo indica quais barracas estão diretamente conectadas por fios.\n\nCom base na matriz fornecida, responda:",
      "questions": [
        "(a) É possível distribuir as duas modalidades de lâmpadas entre as barracas de forma que nenhum cabo conecte duas barracas com a mesma cor de iluminação? Se sim, mostre uma divisão válida de grupos. Senão, explique o porquê à luz da estrutura do grafo.",
        "(b) Suponha que uma nova linha de transmissão de emergência foi adicionada ligando diretamente a Barraca 1 à Barraca 3. Nesse novo cenário, verifique se ainda é possível fazer a distribuição conforme o enunciado. Se sim, mostre a nova divisão válida; senão, apresente a justificativa estrutural."
      ],
      "matrix": {
        "headers": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "rows": [
          [
            0,
            0,
            0,
            0,
            1,
            1,
            0,
            0,
            0,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            0,
            0,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            0,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            0
          ],
          [
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0
          ],
          [
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
          ],
          [
            0,
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            0,
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            0,
            0,
            1,
            1,
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0
          ]
        ]
      },
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "edges": [
          [
            "1",
            "5"
          ],
          [
            "1",
            "6"
          ],
          [
            "2",
            "6"
          ],
          [
            "2",
            "7"
          ],
          [
            "3",
            "7"
          ],
          [
            "3",
            "8"
          ],
          [
            "4",
            "8"
          ],
          [
            "4",
            "9"
          ],
          [
            "5",
            "9"
          ],
          [
            "6",
            "10"
          ]
        ]
      },
      "solution": "O problema pergunta se o grafo é bipartido, pois duas modalidades equivalem a duas cores. No grafo original há um ciclo ímpar: 1-5-9-4-8-3-7-2-6-1, com 9 arestas. Como grafos bipartidos não possuem ciclos ímpares, não é possível fazer a distribuição com apenas duas modalidades. Ao adicionar a aresta 1-3, o ciclo ímpar original continua existindo e ainda surge o ciclo 1-3-7-2-6-1, de tamanho 5. Portanto, também não é possível no novo cenário."
    },
    {
      "id": "final-q3-rede-som",
      "topicSlug": "kruskal-prim",
      "title": "Questão 3 - Rede central de distribuição de som",
      "sourcePdf": "Exercícios finais enviados por imagem.pdf",
      "page": 3,
      "prompt": "Questão 3\nContexto: Festa Junina - Rede Central de Distribuição de Som do Palco.\n\nEnunciado:\nPara garantir o som perfeito em todo o circuito do arraial, a equipe de engenharia elétrica precisa conectar 6 pontos estratégicos de caixas de transmissão ao gerador do palco central. Os cabos de áudio blindados de alta fidelidade são caros e, por isso, a interligação deve gastar a menor metragem total possível de cabo. A rede resultante deve ser totalmente capaz de transmitir o sinal para todos os pontos, direta ou indiretamente, e não deve conter circuitos fechados para evitar problemas de microfonia e redundância de fase no sinal.\n\nA tabela abaixo representa a matriz ponderada de distâncias, em metros, entre os 6 pontos de áudio. O valor ∞ indica que não é viável passar cabos diretamente entre os dois pontos correspondentes.\n\nResponda:",
      "questions": [
        "(a) Determine a topologia ótima de interligação da rede de som apresentando detalhadamente o passo a passo da análise ou a ordem de seleção das conexões do grafo, e informe o comprimento total mínimo de cabo gasto.",
        "(b) Explique teoricamente por que a estrutura encontrada garante a conectividade global sem loops fechados, justificando sua resposta com base na relação matemática exata entre a quantidade de arestas finais obtidas e o número de vértices do problema."
      ],
      "matrix": {
        "headers": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "rows": [
          [
            0,
            6,
            1,
            5,
            "∞",
            "∞"
          ],
          [
            6,
            0,
            5,
            "∞",
            3,
            2
          ],
          [
            1,
            5,
            0,
            7,
            5,
            "∞"
          ],
          [
            5,
            "∞",
            7,
            0,
            "∞",
            4
          ],
          [
            "∞",
            3,
            5,
            "∞",
            0,
            6
          ],
          [
            "∞",
            2,
            "∞",
            4,
            6,
            0
          ]
        ]
      },
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "edges": [
          [
            "1",
            "2",
            6
          ],
          [
            "1",
            "3",
            1
          ],
          [
            "1",
            "4",
            5
          ],
          [
            "2",
            "3",
            5
          ],
          [
            "2",
            "5",
            3
          ],
          [
            "2",
            "6",
            2
          ],
          [
            "3",
            "4",
            7
          ],
          [
            "3",
            "5",
            5
          ],
          [
            "4",
            "6",
            4
          ],
          [
            "5",
            "6",
            6
          ]
        ]
      },
      "solution": "É uma árvore geradora mínima. Por Kruskal, ordene as arestas por peso e escolha apenas as que não fecham ciclo: 1-3 peso 1, 2-6 peso 2, 2-5 peso 3, 4-6 peso 4 e 1-4 peso 5. Essas 5 arestas conectam todos os 6 vértices e têm custo total 1+2+3+4+5=15 metros. Como uma árvore com n vértices tem exatamente n-1 arestas, aqui 6 vértices exigem 5 arestas. A estrutura é conexa e sem ciclos, logo transmite o sinal a todos os pontos sem loops fechados."
    },
    {
      "id": "final-q4-supercopa-jogos",
      "topicSlug": "coloracao-arestas",
      "title": "Questão 4 - Cronograma da Supercopa das Nações",
      "sourcePdf": "Exercícios finais enviados por imagem.pdf",
      "page": 4,
      "prompt": "Questão 4\nContexto: Copa do Mundo de 2026 - Tabela de Jogos da Supercopa das Nações.\n\nEnunciado:\nUm torneio amistoso preparatório para a Copa do Mundo de 2026 reunirá 6 seleções de futebol, rotuladas de 1 a 6. Cada seleção deve enfrentar um conjunto pré-determinado de adversários conforme sorteio de exibição. Por questões de regulamento e desgaste físico, nenhuma seleção pode disputar mais de uma partida no mesmo dia. O comitê organizador precisa definir o cronograma de dias de jogos, minimizando a duração total do evento.\n\nA matriz de adjacência abaixo indica as partidas planejadas: o valor 1 indica que o confronto entre as duas seleções correspondentes deve acontecer; 0 indica que elas não se enfrentam.\n\nCom base na matriz fornecida, responda:",
      "questions": [
        "(a) Determine o grau de cada um dos vértices do grafo. Identifique qual propriedade matemática estrutural desse grafo impõe um limite inferior físico intransponível para o número mínimo de dias necessários para realizar todos os confrontos e informe esse valor.",
        "(b) Forneça um cronograma de jogos válido para a quantidade mínima de dias encontrada, associando cada partida, par de seleções, a um dia específico, Dia 1, Dia 2 etc., de forma que nenhuma seleção jogue duas vezes no mesmo dia. Classifique o grafo obtido de acordo com a classe estrutural associada a esse tipo de coloração."
      ],
      "matrix": {
        "headers": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "rows": [
          [
            0,
            1,
            1,
            1,
            0,
            0
          ],
          [
            1,
            0,
            1,
            0,
            1,
            1
          ],
          [
            1,
            1,
            0,
            1,
            1,
            0
          ],
          [
            1,
            0,
            1,
            0,
            1,
            1
          ],
          [
            0,
            1,
            1,
            1,
            0,
            1
          ],
          [
            0,
            1,
            0,
            1,
            1,
            0
          ]
        ]
      },
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "edges": [
          [
            "1",
            "2"
          ],
          [
            "1",
            "3"
          ],
          [
            "1",
            "4"
          ],
          [
            "2",
            "3"
          ],
          [
            "2",
            "5"
          ],
          [
            "2",
            "6"
          ],
          [
            "3",
            "4"
          ],
          [
            "3",
            "5"
          ],
          [
            "4",
            "5"
          ],
          [
            "4",
            "6"
          ],
          [
            "5",
            "6"
          ]
        ]
      },
      "solution": "É coloração de arestas. Os graus são d(1)=3, d(2)=4, d(3)=4, d(4)=4, d(5)=4 e d(6)=3. Como uma seleção com grau 4 precisa jogar 4 partidas e só pode jogar uma por dia, Δ(G)=4 é limite inferior para o número de dias. Um cronograma ótimo é Dia 1: 1-4, 2-3, 5-6; Dia 2: 2-5, 3-4; Dia 3: 1-2, 3-5, 4-6; Dia 4: 1-3, 2-6, 4-5. Como usa exatamente Δ(G)=4 cores/dias, χ'(G)=4 e o grafo é Classe 1."
    },
    {
      "id": "mincost-lista-1",
      "topicSlug": "fluxo-custo-minimo",
      "title": "Lista fluxo com custo mínimo - exercício 1",
      "sourcePdf": "Exercicios de fluxo com custo mínimo.pdf",
      "page": 1,
      "prompt": "1. Mostre a quantidade máxima de fluxo que pode sair do vértice 1 e chegar ao vértice 9, bem como o custo total dos fluxos encontrados. O grafo apresenta vértices 1 a 9 e arcos com capacidade e custo, incluindo saídas de 1 para 2 e 3 com capacidades 60 e custos 1 e 5.",
      "questions": [
        "Determinar o fluxo máximo de 1 até 9.",
        "Selecionar caminhos de menor custo no residual.",
        "Calcular o custo total."
      ],
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9"
        ],
        "edges": [
          [
            "1",
            "2",
            60,
            1
          ],
          [
            "1",
            "3",
            60,
            5
          ],
          [
            "2",
            "4",
            30,
            2
          ],
          [
            "2",
            "5",
            40,
            4
          ],
          [
            "3",
            "5",
            20,
            1
          ],
          [
            "3",
            "6",
            50,
            3
          ],
          [
            "4",
            "7",
            30,
            2
          ],
          [
            "5",
            "6",
            15,
            1
          ],
          [
            "5",
            "8",
            50,
            4
          ],
          [
            "6",
            "8",
            40,
            2
          ],
          [
            "7",
            "9",
            60,
            3
          ],
          [
            "8",
            "9",
            60,
            2
          ]
        ]
      },
      "solution": "O gargalo de saída e entrada limita o máximo. A solução validada na lista interativa envia fluxo total 90 com custo mínimo 915. A resolução compara caminhos residuais, envia o gargalo do caminho mais barato e atualiza arcos reversos quando necessário. Ao final não há caminho residual de 1 para 9, e os fluxos positivos somados nas arestas de chegada a 9 totalizam 90."
    },
    {
      "id": "mincost-lista-2",
      "topicSlug": "fluxo-custo-minimo",
      "title": "Lista fluxo com custo mínimo - exercício 2",
      "sourcePdf": "Exercicios de fluxo com custo mínimo.pdf",
      "page": 1,
      "prompt": "2. Mostre a quantidade máxima de fluxo que pode sair do vértice 1 e chegar ao vértice 10, bem como o custo total dos fluxos encontrados. O grafo possui vértices 1 a 10, capacidades como 80, 70, 40, 35, 30 e custos unitários associados.",
      "questions": [
        "Determinar fluxo máximo de 1 até 10.",
        "Calcular custo mínimo entre os fluxos máximos.",
        "Justificar arcos residuais invertidos quando aparecerem."
      ],
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "edges": [
          [
            "1",
            "2",
            80,
            2
          ],
          [
            "1",
            "3",
            70,
            3
          ],
          [
            "2",
            "4",
            40,
            1
          ],
          [
            "2",
            "5",
            35,
            4
          ],
          [
            "2",
            "6",
            30,
            3
          ],
          [
            "3",
            "6",
            40,
            3
          ],
          [
            "4",
            "7",
            40,
            2
          ],
          [
            "5",
            "8",
            45,
            3
          ],
          [
            "6",
            "8",
            35,
            1
          ],
          [
            "6",
            "9",
            30,
            4
          ],
          [
            "7",
            "10",
            70,
            2
          ],
          [
            "8",
            "10",
            80,
            3
          ],
          [
            "9",
            "10",
            55,
            1
          ]
        ]
      },
      "solution": "A solução validada encontra fluxo máximo 120 e custo mínimo 1115. O processo usa caminhos residuais de menor custo e envia o gargalo de cada um. Quando uma escolha anterior precisa ser parcialmente desfeita, surge arco residual invertido com custo negativo, como o reverso de um arco já usado. O encerramento ocorre quando não há caminho residual de 1 até 10."
    },
    {
      "id": "mincost-lista-3",
      "topicSlug": "fluxo-custo-minimo",
      "title": "Lista fluxo com custo mínimo - exercício 3",
      "sourcePdf": "Exercicios de fluxo com custo mínimo.pdf",
      "page": 2,
      "prompt": "3. Mostre a quantidade máxima de fluxo que pode sair do vértice 1 e chegar ao vértice 10, bem como o custo total dos fluxos encontrados. O grafo tem vértices 1 a 10, capacidades 90, 80, 45, 40, 35, 50, 75, 85, 65 e custos associados.",
      "questions": [
        "Encontrar fluxo máximo.",
        "Encontrar custo mínimo do fluxo máximo.",
        "Listar caminhos e gargalos."
      ],
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "edges": [
          [
            "1",
            "2",
            90,
            2
          ],
          [
            "1",
            "3",
            80,
            3
          ],
          [
            "2",
            "4",
            45,
            1
          ],
          [
            "2",
            "5",
            40,
            4
          ],
          [
            "2",
            "6",
            35,
            3
          ],
          [
            "3",
            "5",
            35,
            2
          ],
          [
            "3",
            "6",
            45,
            3
          ],
          [
            "4",
            "7",
            45,
            2
          ],
          [
            "5",
            "8",
            50,
            3
          ],
          [
            "6",
            "9",
            40,
            4
          ],
          [
            "7",
            "10",
            75,
            2
          ],
          [
            "8",
            "10",
            85,
            4
          ],
          [
            "9",
            "10",
            65,
            1
          ]
        ]
      },
      "solution": "A solução validada encontra fluxo máximo 135 e custo mínimo 1340. A diferença para os exercícios anteriores está nas capacidades maiores e em caminhos alternativos pelo vértice 5. O algoritmo mantém a regra: menor custo no residual, gargalo do caminho, atualização dos fluxos e possíveis reversos negativos. Ao bloquear todos os caminhos de 1 até 10, o fluxo total é 135."
    },
    {
      "id": "mincost-lista-4",
      "topicSlug": "fluxo-custo-minimo",
      "title": "Lista fluxo com custo mínimo - exercício 4",
      "sourcePdf": "Exercicios de fluxo com custo mínimo.pdf",
      "page": 2,
      "prompt": "4. Mostre a quantidade máxima de fluxo que pode sair do vértice 1 e chegar ao vértice 10, bem como o custo total dos fluxos encontrados. O grafo apresenta vértices 1 a 10, duas saídas de capacidade 100 a partir de 1 e caminhos intermediários por 4,5,6,7,8 e 9.",
      "questions": [
        "Determinar fluxo máximo de 1 até 10.",
        "Minimizar o custo total.",
        "Apresentar fluxo final nos arcos positivos."
      ],
      "graph": {
        "vertices": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "edges": [
          [
            "1",
            "2",
            100,
            1
          ],
          [
            "1",
            "3",
            100,
            1
          ],
          [
            "2",
            "4",
            50,
            2
          ],
          [
            "2",
            "5",
            40,
            3
          ],
          [
            "3",
            "6",
            40,
            2
          ],
          [
            "3",
            "7",
            55,
            4
          ],
          [
            "4",
            "8",
            50,
            2
          ],
          [
            "5",
            "8",
            40,
            1
          ],
          [
            "5",
            "9",
            30,
            3
          ],
          [
            "6",
            "9",
            40,
            2
          ],
          [
            "7",
            "9",
            45,
            1
          ],
          [
            "8",
            "10",
            80,
            3
          ],
          [
            "9",
            "10",
            100,
            2
          ]
        ]
      },
      "solution": "A solução validada encontra fluxo máximo 175 e custo mínimo 1370. A entrada total possível é 200, mas as capacidades de saída para 10 limitam o valor a 180 e os gargalos intermediários reduzem a combinação ótima para 175. O custo mínimo vem da priorização dos caminhos mais baratos e do uso de residual para ajustar escolhas anteriores."
    }
  ]
};
