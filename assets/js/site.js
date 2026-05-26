(function(){
  const data = window.GRAPH_SITE_DATA;
  if(!data) return;

  const colorMap = {
    azul:'#4f8cff', verde:'#1db77f', laranja:'#f5a524', roxo:'#a77cff',
    dia1:'#4f8cff', dia2:'#1db77f', dia3:'#f5a524', dia4:'#a77cff'
  };

  const $ = (selector, root=document) => root.querySelector(selector);
  const el = (tag, attrs={}, children=[]) => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([key,value]) => {
      if(key === 'class') node.className = value;
      else if(key === 'html') node.innerHTML = value;
      else node.setAttribute(key, value);
    });
    children.forEach(child => node.append(child));
    return node;
  };

  function basePrefix(){
    const path = location.pathname.replace(/\\/g,'/');
    return path.includes('/teoria/') || path.includes('/exercicios/') ? '../' : '';
  }

  function slugLabel(slug){
    const topic = data.theoryTopics.find(item => item.slug === slug);
    return topic ? topic.title : slug;
  }

  function graphVertices(graph){
    const raw = graph.vertices || [];
    if(raw.length && typeof raw[0] === 'object') return raw.map(v => ({...v, id:String(v.id)}));
    const radius = 138;
    return raw.map((id,index) => {
      const angle = -Math.PI/2 + index * 2 * Math.PI / raw.length;
      return {id:String(id), x:360 + radius * Math.cos(angle), y:190 + radius * Math.sin(angle)};
    });
  }

  function graphEdges(graph){
    return (graph.edges || []).map((edge,index) => {
      if(Array.isArray(edge)){
        return {id:`e${index}`, u:String(edge[0]), v:String(edge[1]), weight:edge[2], cost:edge[3], capacity:edge[2]};
      }
      return {...edge, id:String(edge.id), u:String(edge.u), v:String(edge.v)};
    });
  }

  function makeSvg(tag, attrs){
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.entries(attrs).forEach(([key,value]) => node.setAttribute(key, value));
    return node;
  }

  function edgeLabel(edge){
    if(edge.weight !== undefined && edge.cost !== undefined) return `${edge.weight}, c${edge.cost}`;
    if(edge.capacity !== undefined && edge.cost !== undefined) return `${edge.capacity}, c${edge.cost}`;
    if(edge.capacity !== undefined && edge.weight === undefined) return edge.capacity;
    if(edge.weight !== undefined) return edge.weight;
    return '';
  }

  function renderGraph(container, graph, options={}){
    container.innerHTML = '';
    const vertices = graphVertices(graph);
    const edges = graphEdges(graph);
    const byId = Object.fromEntries(vertices.map(v => [String(v.id), v]));
    const highlightEdges = new Set((options.highlightEdges || []).map(String));
    const highlightVertices = new Set((options.highlightVertices || []).map(String));
    const mutedVertices = new Set((options.mutedVertices || []).map(String));
    const vertexColors = options.vertexColors || {};
    const edgeColors = options.edgeColors || {};
    const svg = makeSvg('svg', {viewBox:'0 0 720 380', role:'img'});
    const defs = makeSvg('defs', {});
    const marker = makeSvg('marker', {id:`arrow-${Math.random().toString(16).slice(2)}`, viewBox:'0 0 10 10', refX:'8', refY:'5', markerWidth:'6', markerHeight:'6', orient:'auto-start-reverse'});
    marker.append(makeSvg('path', {d:'M 0 0 L 10 5 L 0 10 z', fill:'#91a4bf'}));
    defs.append(marker);
    svg.append(defs);

    edges.forEach(edge => {
      const p1 = byId[String(edge.u)], p2 = byId[String(edge.v)];
      if(!p1 || !p2) return;
      const chosen = highlightEdges.has(String(edge.id));
      const semanticColor = edgeColors[String(edge.id)];
      const stroke = chosen ? '#f5a524' : semanticColor ? colorMap[semanticColor] || semanticColor : '#40516a';
      const line = makeSvg('line', {
        x1:p1.x, y1:p1.y, x2:p2.x, y2:p2.y,
        stroke,
        'stroke-width': chosen || semanticColor ? '4.8' : '2.4',
        'stroke-linecap':'round',
        opacity: options.dimUnhighlighted && !chosen ? '.32' : '.92'
      });
      if(graph.directed) line.setAttribute('marker-end', `url(#${marker.id})`);
      svg.append(line);
      const label = edgeLabel(edge);
      if(label !== ''){
        const x = (p1.x+p2.x)/2;
        const y = (p1.y+p2.y)/2;
        const rect = makeSvg('rect', {x:x-26, y:y-13, width:'52', height:'24', rx:'7', fill:'#0a1020', opacity:'.9'});
        const text = makeSvg('text', {x, y:y+4, 'text-anchor':'middle', class:'svg-label'});
        text.textContent = label;
        svg.append(rect, text);
      }
    });

    vertices.forEach(vertex => {
      const semantic = vertexColors[String(vertex.id)];
      const fill = mutedVertices.has(String(vertex.id)) ? '#374151' : semantic ? colorMap[semantic] || semantic : highlightVertices.has(String(vertex.id)) ? '#f5a524' : '#1d2838';
      const circle = makeSvg('circle', {cx:vertex.x, cy:vertex.y, r:'21', fill, stroke:highlightVertices.has(String(vertex.id)) ? '#fff' : 'rgba(255,255,255,.22)', 'stroke-width':highlightVertices.has(String(vertex.id)) ? '3' : '1.5'});
      const text = makeSvg('text', {x:vertex.x, y:vertex.y+4, 'text-anchor':'middle', class:'svg-label'});
      text.textContent = vertex.id;
      svg.append(circle, text);
    });
    container.append(svg);
  }

  function renderAnimation(animationId){
    const animation = data.animations[animationId];
    const card = el('article', {class:'visual-card'});
    card.append(el('h3', {html:animation.title}));
    const box = el('div', {class:'graph-box'});
    const text = el('div', {class:'step-text'});
    const controls = el('div', {class:'step-controls'});
    const prev = el('button', {type:'button'}, ['Anterior']);
    const count = el('span');
    const next = el('button', {type:'button'}, ['Próximo']);
    controls.append(prev, count, next);
    card.append(box, text, controls);
    const steps = animation.steps && animation.steps.length ? animation.steps : [{title:animation.title, text:animation.summary || ''}];
    let index = 0;
    const draw = () => {
      const step = steps[index];
      renderGraph(box, animation.graph, {
        highlightEdges: step.highlightEdges || [],
        highlightVertices: step.highlightVertices || [],
        mutedVertices: step.mutedVertices || [],
        vertexColors: animation.colors && animationId === 'vertexColoring' ? animation.colors : {},
        edgeColors: animation.colors && animationId === 'edgeColoring' ? animation.colors : {},
        dimUnhighlighted: Boolean(step.highlightEdges && step.highlightEdges.length)
      });
      text.innerHTML = `<strong>${step.title}</strong><br>${step.text}`;
      count.textContent = `${index + 1} / ${steps.length}`;
      prev.disabled = index === 0;
      next.disabled = index === steps.length - 1;
    };
    prev.addEventListener('click', () => { index = Math.max(0, index - 1); draw(); });
    next.addEventListener('click', () => { index = Math.min(steps.length - 1, index + 1); draw(); });
    draw();
    return card;
  }

  function renderHome(){
    $('#homeStats').innerHTML = [
      `<div class="stat"><strong>${data.theoryTopics.length}</strong><span>matérias/PDFs</span></div>`,
      `<div class="stat"><strong>${data.exercises.length}</strong><span>exercícios</span></div>`,
      `<div class="stat"><strong>${Object.keys(data.animations).length}</strong><span>animações</span></div>`
    ].join('');
    const prefix = basePrefix();
    $('#homeTopicGrid').innerHTML = data.theoryTopics.map(topic => `
      <a class="topic-card" href="${prefix}teoria/index.html#${topic.slug}">
        <small>${topic.sourcePdf}</small>
        <h3>${topic.title}</h3>
        <p>${topic.summary}</p>
      </a>
    `).join('');
    $('#homeAnimationGrid').innerHTML = Object.entries(data.animations).slice(0,6).map(([id,animation]) => `
      <a class="animation-card" href="${prefix}teoria/index.html#${data.theoryTopics.find(topic => topic.animations.includes(id))?.slug || data.theoryTopics[0].slug}">
        <span class="tag">animação</span>
        <h3>${animation.title}</h3>
        <p>${animation.steps?.[0]?.text || 'Visualização interativa do conceito.'}</p>
      </a>
    `).join('');
  }

  function renderTheory(){
    const tabs = $('#theoryTabs');
    const content = $('#theoryContent');
    const select = slug => {
      const topic = data.theoryTopics.find(item => item.slug === slug) || data.theoryTopics[0];
      location.hash = topic.slug;
      [...tabs.children].forEach(button => button.classList.toggle('active', button.dataset.slug === topic.slug));
      content.innerHTML = '';
      const header = el('article', {class:'content-card'});
      header.append(el('span', {class:'source'}, [`Fonte: ${topic.sourcePdf}`]));
      header.append(el('h2', {html:topic.title}));
      header.append(el('p', {html:topic.summary}));
      topic.sections.forEach(section => {
        header.append(el('h3', {html:section.heading}));
        header.append(el('p', {html:section.body}));
      });
      content.append(header);
      const visualWrap = el('div', {class:'visual-grid'});
      topic.animations.forEach(id => visualWrap.append(renderAnimation(id)));
      content.append(visualWrap);
    };
    tabs.innerHTML = '';
    data.theoryTopics.forEach(topic => {
      const button = el('button', {type:'button', 'data-slug':topic.slug}, [topic.title]);
      button.addEventListener('click', () => select(topic.slug));
      tabs.append(button);
    });
    select((location.hash || '').replace('#','') || data.theoryTopics[0].slug);
    window.addEventListener('hashchange', () => select((location.hash || '').replace('#','')));
  }

  function renderExerciseGraph(graph){
    const box = el('div', {class:'graph-box'});
    renderGraph(box, graph || {vertices:[], edges:[]});
    return box;
  }

  function renderExercises(){
    const filters = $('#exerciseFilters');
    const list = $('#exerciseList');
    const topicsWithExercises = data.theoryTopics.filter(topic => data.exercises.some(exercise => exercise.topicSlug === topic.slug));
    const render = slug => {
      [...filters.children].forEach(button => button.classList.toggle('active', button.dataset.slug === slug));
      const exercises = slug === 'todos' ? data.exercises : data.exercises.filter(exercise => exercise.topicSlug === slug);
      list.innerHTML = '';
      exercises.forEach(exercise => {
        const card = el('article', {class:'exercise-card'});
        const head = el('div', {class:'exercise-head'});
        head.append(el('div', {html:`<span class="source">${exercise.sourcePdf}${exercise.page ? `, p. ${exercise.page}` : ''}</span><h3>${exercise.title}</h3><p>${slugLabel(exercise.topicSlug)}</p>`}));
        head.append(el('span', {class:'tag'}, [exercise.id]));
        const body = el('div', {class:'exercise-body'});
        const prompt = el('div');
        prompt.append(el('h3', {}, ['Enunciado']));
        prompt.append(el('p', {class:'prompt'}, [exercise.prompt]));
        const questions = el('ol', {class:'question-list'});
        exercise.questions.forEach(question => questions.append(el('li', {}, [question])));
        prompt.append(questions);
        body.append(prompt, renderExerciseGraph(exercise.graph));
        const solution = el('div', {class:'solution'});
        solution.append(el('h3', {}, ['Resolução']));
        solution.append(el('p', {html:exercise.solution}));
        card.append(head, body, solution);
        list.append(card);
      });
    };
    filters.innerHTML = '';
    const all = el('button', {type:'button', 'data-slug':'todos'}, ['Todos']);
    all.addEventListener('click', () => render('todos'));
    filters.append(all);
    topicsWithExercises.forEach(topic => {
      const button = el('button', {type:'button', 'data-slug':topic.slug}, [topic.title]);
      button.addEventListener('click', () => render(topic.slug));
      filters.append(button);
    });
    render('todos');
  }

  const view = document.body.dataset.view;
  if(view === 'home') renderHome();
  if(view === 'theory') renderTheory();
  if(view === 'exercises') renderExercises();
})();
