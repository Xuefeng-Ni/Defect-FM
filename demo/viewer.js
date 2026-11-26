(() => {
  "use strict";
  const samples = window.DEFECT_SAMPLES;
  const el = id => document.getElementById(id);
  if (!samples?.length) {
    el("loading").textContent = "Sample data could not be loaded. Check that samples.js is beside this page.";
    return;
  }
  const canvases = [el("left"), el("right")];
  const camera = {zoom: 1, x: .5, y: .5};
  const maxZoom = 16;
  let current, photograph, activeDrag, frame, showGT = false;
  const clamp = (x, min, max) => Math.min(max, Math.max(min, x));
  const names = value => Array.isArray(value) ? value.join(" · ") : String(value);
  const component = sample => names(sample.record.image.component);
  const displayName = value => value.replaceAll("_", " ");
  const catalog = el("catalog");
  const cards = samples.map((sample, index) => {
    const card = document.createElement("button");
    card.className = "card";
    card.type = "button";
    const thumb = new Image();
    thumb.src = sample.thumb;
    thumb.alt = "";
    const info = document.createElement("span");
    info.className = "card-info";
    const title = document.createElement("strong");
    title.textContent = "Image" + index;
    const source = document.createElement("small");
    source.textContent = "from " + sample.record.dataset;
    info.append(title, source);
    card.append(thumb, info);
    card.addEventListener("click", () => {
      if (location.hash !== "#" + sample.id) history.pushState(null, "", "#" + sample.id);
      select(sample);
    });
    catalog.append(card);
    return card;
  });
  el("collection-count").textContent = `${samples.length} samples · ${new Set(samples.map(s => s.record.dataset)).size} datasets`;

  function showGraph(sample) {
    const graph = window.DEFECT_GRAPHS?.[sample.id];
    const figure = el("graph-body");
    figure.scrollTop = 0;
    el("graph-expand").disabled = !graph;
    figure.hidden = !graph;
    if (!graph) return;
    const picture = el("graph-image");
    picture.src = graph.image;
    picture.alt = graph.paths.map(path => path.map(edge =>
      `${edge.head} to ${edge.tail} via ${edge.relation}`
    ).join(". ")).join(". ");
    el("graph-caption").textContent = sample.record.dataset + " · Causal Knowledge Graph";
    const {component, surface} = sample.record.image;
    const notes = graph.note ? [graph.note] : [];
    if (graph.productMatch) notes.push(`Matched by product and defect. Image annotations: ${names(component)} / ${names(surface)}.`);
    el("graph-note").textContent = notes.join(" ");
  }

  el("graph-expand").addEventListener("click", () => {
    const image = el("graph-image");
    el("graph-heading").textContent = displayName(current.record.image.product_category || component(current)) + " · Causal Knowledge Graph";
    el("graph-detail").src = image.src;
    el("graph-detail").alt = image.alt;
    el("native-graph").href = image.src;
    const caption = el("graph-body").querySelector("figcaption");
    const copy = caption.cloneNode(true);
    copy.querySelectorAll("[id]").forEach(node => node.removeAttribute("id"));
    el("detail-caption").replaceChildren(...copy.childNodes);
    el("graph-dialog").showModal();
  });
  el("close-graph").addEventListener("click", () => el("graph-dialog").close());

  function prettyJSON(record) {
    const code = el("json");
    code.replaceChildren();
    const value = JSON.stringify(record, (key, value) =>
      key === "threshold" || key === "nms_iou" ? undefined : value, 2)
      .replace(/"bbox": \[\s*([-+.\deE]+),\s*([-+.\deE]+),\s*([-+.\deE]+),\s*([-+.\deE]+)\s*\]/g,
        '"bbox": [$1, $2, $3, $4]');
    const syntax = /"(?:\\.|[^"\\])*"(?=\s*:)|"(?:\\.|[^"\\])*"|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
    let offset = 0;
    for (const match of value.matchAll(syntax)) {
      code.append(value.slice(offset, match.index));
      const token = document.createElement("span");
      token.textContent = match[0];
      offset = match.index + match[0].length;
      token.className = match[0][0] !== '"' ? "number" : value[offset] === ":" ? "key" : "string";
      code.append(token);
    }
    code.append(value.slice(offset));
    code.parentElement.scrollTop = 0;
  }

  function select(sample) {
    if (current === sample) return;
    current = sample;
    activeDrag = null;
    photograph = null;
    cards.forEach((card, i) => card.setAttribute("aria-pressed", String(samples[i] === current)));
    const {dataset, split, image, predictions} = sample.record;
    el("sample-title").textContent = displayName(image.product_category || component(sample));
    el("sample-meta").textContent = [dataset, ({train: "Training set", val: "Validation set", test: "Test set"})[split] || split, image.file_name.split("/").pop()].join("  /  ");
    el("size").textContent = image.width + " × " + image.height;
    el("detection-count").textContent = predictions.length + (predictions.length === 1 ? " detection" : " detections");
    showGraph(sample);
    prettyJSON(sample.record);
    updateMode();
    resetView();
    el("loading").textContent = "Loading image…";
    const photo = new Image();
    photo.onload = () => {
      if (current !== sample) return;
      photograph = photo;
      el("loading").textContent = "";
      scheduleDraw();
    };
    photo.onerror = () => {
      if (current === sample) el("loading").textContent = "Could not load image: " + sample.src;
    };
    photo.src = sample.src;
  }

  function updateMode() {
    el("raw").setAttribute("aria-pressed", String(!showGT));
    el("gt").setAttribute("aria-pressed", String(showGT));
    const legend = el("left-legend");
    legend.textContent = showGT ? "Ground truth · " + current.record.annotations.length : "Original image";
    legend.className = showGT ? "legend gt" : "";
    el("left").setAttribute("aria-label", component(current) + (showGT ? " with ground truth" : " input image"));
    el("right").setAttribute("aria-label", component(current) + " predictions: " + current.record.predictions.length + " boxes");
    scheduleDraw();
  }
  function fit(canvas) {
    const {width, height} = current.record.image;
    const scale = Math.min(canvas.clientWidth / width, canvas.clientHeight / height) * camera.zoom;
    const w = width * scale, h = height * scale;
    return {w, h, scale, left: canvas.clientWidth / 2 - camera.x * w, top: canvas.clientHeight / 2 - camera.y * h};
  }
  function constrain(canvas) {
    const {w, h} = fit(canvas);
    const hx = Math.min(.5, canvas.clientWidth / (2*w)), hy = Math.min(.5, canvas.clientHeight / (2*h));
    camera.x = clamp(camera.x, hx, 1-hx);
    camera.y = clamp(camera.y, hy, 1-hy);
  }
  function zoomTo(canvas, value, px = canvas.clientWidth / 2, py = canvas.clientHeight / 2) {
    const before = fit(canvas);
    const x = (px - before.left) / before.w, y = (py - before.top) / before.h;
    camera.zoom = clamp(value, 1, maxZoom);
    const after = fit(canvas);
    camera.x = x - (px - canvas.clientWidth / 2) / after.w;
    camera.y = y - (py - canvas.clientHeight / 2) / after.h;
    constrain(canvas);
    scheduleDraw();
  }
  function resetView() {
    Object.assign(camera, {zoom: 1, x: .5, y: .5});
    scheduleDraw();
  }
  function scheduleDraw() {
    if (!frame) frame = requestAnimationFrame(() => {
      frame = null;
      if (!current) return;
      canvases.forEach((canvas, side) => draw(canvas, side === 1));
      el("scale").textContent = Math.round(camera.zoom * 100) + "%";
      el("minus").disabled = camera.zoom <= 1;
      el("plus").disabled = camera.zoom >= maxZoom;
    });
  }
  function draw(canvas, predictions) {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    const ratio = window.devicePixelRatio || 1;
    const pw = Math.round(w*ratio), ph = Math.round(h*ratio);
    if (canvas.width !== pw || canvas.height !== ph) {
      canvas.width = pw;
      canvas.height = ph;
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(pw / w, 0, 0, ph / h, 0, 0);
    ctx.clearRect(0,0,w,h);
    if (!photograph) return;
    const view = fit(canvas);
    ctx.drawImage(photograph, view.left, view.top, view.w, view.h);
    if (!predictions && !showGT) return;
    const boxes = predictions ? current.record.predictions : current.record.annotations;
    const color = getComputedStyle(canvas).getPropertyValue(predictions ? "--pred" : "--gt").trim();
    ctx.font = "600 12px system-ui, sans-serif";
    boxes.forEach(box => {
      const [bx, by, bw, bh] = box.bbox;
      const x = view.left + bx * view.scale, y = view.top + by * view.scale;
      const width = bw * view.scale, height = bh * view.scale;
      if (x > w || y > h || x + width < 0 || y + height < 0) return;
      ctx.lineWidth = 3.2;
      ctx.strokeStyle = "rgba(0,0,0,.65)";
      ctx.strokeRect(x,y,width,height);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.8;
      ctx.strokeRect(x,y,width,height);
      const label = box.label;
      const labelWidth = ctx.measureText(label).width + 10;
      const lx = clamp(x, 0, Math.max(0, w - labelWidth)), ly = clamp(y >= 20 ? y-20 : y+2, 0, h-20);
      ctx.fillStyle = color;
      ctx.fillRect(lx,ly,labelWidth,19);
      ctx.fillStyle = "#122520";
      ctx.fillText(label,lx+5,ly+14);
    });
  }
  canvases.forEach(canvas => {
    canvas.addEventListener("wheel", event => {
      event.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const pixels = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? canvas.clientHeight : 1);
      zoomTo(canvas, camera.zoom * Math.exp(-clamp(pixels, -480, 480) * .002), event.clientX - rect.left, event.clientY - rect.top);
    }, {passive: false});
    canvas.addEventListener("pointerdown", event => {
      if (event.button !== 0 || activeDrag) return;
      canvas.setPointerCapture(event.pointerId);
      activeDrag = {id: event.pointerId, x: event.clientX, y: event.clientY, cx: camera.x, cy: camera.y};
    });
    canvas.addEventListener("pointermove", event => {
      if (event.pointerId !== activeDrag?.id) return;
      const view = fit(canvas);
      camera.x = activeDrag.cx - (event.clientX - activeDrag.x)/view.w;
      camera.y = activeDrag.cy - (event.clientY - activeDrag.y)/view.h;
      constrain(canvas);
      scheduleDraw();
    });
    canvas.addEventListener("lostpointercapture", () => { activeDrag = null; });
    canvas.addEventListener("dblclick", resetView);
    canvas.addEventListener("keydown", event => {
      const delta = {ArrowLeft: [-1,0], ArrowRight: [1,0], ArrowUp: [0,-1], ArrowDown: [0,1]}[event.key];
      if (!delta) return;
      event.preventDefault();
      const view = fit(canvas);
      camera.x += delta[0]*32/view.w;
      camera.y += delta[1]*32/view.h;
      constrain(canvas);
      scheduleDraw();
    });
  });
  el("minus").onclick = () => zoomTo(canvases[0], camera.zoom / 1.5);
  el("plus").onclick = () => zoomTo(canvases[0], camera.zoom * 1.5);
  el("reset").onclick = resetView;
  el("raw").onclick = () => { showGT = false; updateMode(); };
  el("gt").onclick = () => { showGT = true; updateMode(); };
  const resize = new ResizeObserver(() => { if (current) constrain(canvases[0]); scheduleDraw(); });
  canvases.forEach(canvas => resize.observe(canvas));
  function fromHash() {
    const hash = location.hash.slice(1);
    const sample = samples.find(s => s.id === hash)
      || samples.find(s => s.previousId === hash || s.previousIds?.includes(hash));
    if (sample || !current) select(sample || samples[0]);
  }
  window.addEventListener("hashchange", fromHash);
  fromHash();
})();
