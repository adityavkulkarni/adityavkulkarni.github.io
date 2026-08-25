/**
 * tracts.js — the ambient fibre-tract field.
 *
 * COLOUR
 * Straight from the DTI directional convention: red is left↔right, blue is
 * superior↔inferior, green is anterior↔posterior. The first two come from a
 * segment's direction on screen. The third can't — it points into the screen —
 * so each fibre carries its own out-of-plane fraction, which is exactly what
 * makes a real DTI slice a mix of in-plane fibres shifting red→purple→blue as
 * they curve, with green ones threading through where the tract runs away from
 * the viewer.
 *
 * PERFORMANCE
 * The fibres are geometry, not animation. They are rasterised ONCE into an
 * offscreen atlas — each fibre a single stroked path with a cached gradient —
 * so the per-frame cost is one drawImage plus a couple of dozen short strokes,
 * regardless of how dense the field is.
 *
 * MOTION
 * The fibres never move. Pulses run along them, following the real path at
 * sub-segment resolution so the head glides rather than stepping point to
 * point. On load the atlas is drawn twice, offset in opposite directions, and
 * the two copies converge — a registration settling.
 */

/* Deterministic PRNG so the atlas is identical on every visit. */
function mulberry32(seed) {
  return function rand() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * The field is modelled on a coronal DTI slice, which is why it reads as
 * anatomy rather than noise. Two coherent bundles, not random streamlines:
 *
 *   FAN         a corona-radiata-like sheet radiating from a focus below the
 *               frame — vertical (blue) up the middle, splaying to diagonal
 *               and horizontal (red) toward the edges.
 *   TRANSVERSE  a corpus-callosum-like band sweeping left to right across the
 *               upper half (red), crossing the fan the way it actually does.
 *
 * Neighbouring fibres in a bundle see almost the same angle, so they travel
 * together. Only a small low-frequency wobble is added — enough to stop the
 * fan looking like a starburst, not enough to break the bundle apart.
 */

/**
 * The field is a composed mass, not a full-bleed texture.
 *
 * It occupies an ellipse offset to the right on wide screens, leaving the
 * headline column clear, and drops below the copy on narrow ones. Everything —
 * seeding, integration bounds, and the final alpha mask — is expressed relative
 * to this region, so the composition holds at any viewport.
 */
export function fieldRegion(w, h) {
  /* The narrow region is deliberately not flatter than the wide one: the fan
     needs vertical room to develop, and a short region starves it — leaving
     only the transverse bundle, and a field with no blue in it. */
  return w < 700
    ? { cx: 0.5, cy: 0.66, rx: 0.5, ry: 0.42 }
    : { cx: 0.68, cy: 0.44, rx: 0.4, ry: 0.5 };
}

/**
 * Drift depends on POSITION ONLY — never on the fibre.
 *
 * This is what makes bundles hold together. Giving each fibre its own noise
 * phase means two fibres side by side bend different ways and the bundle
 * frays; sampling the same field means they bend together, which is what a
 * tract actually does.
 */
function drift(x, y) {
  return Math.sin(x * 2.3 + y * 1.1) * 0.6 + Math.cos(y * 1.9 - x * 0.7) * 0.4;
}

function fanAngle(x, y, focusX, focusY) {
  /* Direction pointing away from the focus: outward and upward. */
  return Math.atan2(y - focusY, x - focusX) + drift(x, y) * 0.155;
}

function transverseAngle(x, y, cx) {
  /* A shallow arc: rising through the middle, dipping away at both edges. */
  return Math.sin((x - cx) * 2.0) * 0.42 + drift(x, y) * 0.09;
}

/**
 * Generates the fibre geometry. Pure — no canvas, no DOM — so the field can be
 * inspected and regression-tested outside a browser.
 */
export function buildFibres(w, h, density = 1) {
  const rand = mulberry32(20260125);
  const narrow = w < 700;
  const R = fieldRegion(w, h);

  /* Scaled to the region's area, not the canvas — the field is concentrated
     now, so the old count would read as a solid mat. */
  const area = w * h * Math.PI * R.rx * R.ry;
  const count = Math.round(Math.min(150, Math.max(narrow ? 74 : 46, area / 7600)) * density);

  /* Dense polylines: short enough that straight segments show no faceting, and
     fine enough that a pulse index maps to smooth motion. Paid once. */
  const steps = narrow ? 76 : 118;
  const stepLen = Math.max(w, h) / (steps * 0.78);
  const MIN_POINTS = narrow ? 13 : 24;

  /* Focus sits below the region, so the sheet rises through it. */
  const focusX = R.cx;
  const focusY = R.cy + R.ry * 1.45;

  /* Integration stops once a fibre has clearly left the composition. */
  const bx0 = (R.cx - R.rx * 1.3) * w;
  const bx1 = (R.cx + R.rx * 1.3) * w;
  const by0 = (R.cy - R.ry * 1.3) * h;
  const by1 = (R.cy + R.ry * 1.3) * h;

  const fibres = [];

  for (let i = 0; i < count; i += 1) {
    /* Fan fibres are shorter on a narrow region and get filtered more often, so
       they are seeded more heavily there to keep the two bundles balanced. */
    const isFan = rand() < (narrow ? 0.84 : 0.73);

    let px;
    let py;
    if (isFan) {
      /* Seeded across the lower edge of the region, so the sheet rises as one
         and splays on the way up rather than starting scattered. */
      px = (R.cx + (rand() * 2 - 1) * R.rx * 0.88) * w;
      py = (R.cy + R.ry * (0.62 + rand() * 0.42)) * h;
    } else {
      /* Transverse bundle enters at the region's left edge, in a band across
         its upper half — kept tight so it reads as one tract, not a blanket. */
      px = (R.cx - R.rx * (0.86 + rand() * 0.3)) * w;
      py = (R.cy + R.ry * (-0.5 + rand() * 0.5)) * h;
    }

    const alpha = 0.34 + rand() * 0.62;
    const width = 0.6 + rand() * 1.5;

    /* Out-of-plane fraction. Most fibres sit in-plane so direction alone drives
       the colour. Green needs depth above ~0.71 to actually beat a pure in-plane
       direction, so the green set starts well clear of that. */
    const isGreen = rand() < 0.18;
    const depth = isGreen ? 0.8 + rand() * 0.16 : rand() ** 3 * 0.3;

    const pts = [];
    for (let s = 0; s < steps; s += 1) {
      pts.push(px, py);
      const ang = isFan
        ? fanAngle(px / w, py / h, focusX, focusY)
        : transverseAngle(px / w, py / h, R.cx);
      px += Math.cos(ang) * stepLen;
      py += Math.sin(ang) * stepLen;
      if (px < bx0 || px > bx1 || py < by0 || py > by1) break;
    }

    /* No stubs — a fragment reads as debris, not anatomy. */
    if (pts.length / 2 < MIN_POINTS) continue;

    fibres.push({ pts, n: pts.length / 2, depth, alpha, width, isFan });
  }

  return fibres;
}

/**
 * DTI colour for one segment.
 * @param dx,dy  segment direction in screen space
 * @param depth  the fibre's out-of-plane (A–P) fraction, 0–1
 */
function axisColor(dx, dy, depth, palette) {
  const m = Math.hypot(dx, dy) || 1;
  const inPlane = Math.sqrt(Math.max(0, 1 - depth * depth));

  /* Squared components, exactly as a diffusion tensor's principal direction
     is mapped to RGB. */
  const wr = (Math.abs(dx / m) * inPlane) ** 2;
  const wb = (Math.abs(dy / m) * inPlane) ** 2;
  const wg = depth * depth;
  const sum = wr + wg + wb || 1;

  let r = (palette.lr[0] * wr + palette.ap[0] * wg + palette.si[0] * wb) / sum;
  let g = (palette.lr[1] * wr + palette.ap[1] * wg + palette.si[1] * wb) / sum;
  let b = (palette.lr[2] * wr + palette.ap[2] * wg + palette.si[2] * wb) / sum;

  /* Push away from the mean so mixed directions stay chromatic rather than
     collapsing toward grey. */
  const avg = (r + g + b) / 3;
  const S = 1.28;
  r = Math.max(0, Math.min(255, avg + (r - avg) * S));
  g = Math.max(0, Math.min(255, avg + (g - avg) * S));
  b = Math.max(0, Math.min(255, avg + (b - avg) * S));

  return [r | 0, g | 0, b | 0];
}

function readPalette() {
  const cs = getComputedStyle(document.documentElement);
  const hex = (name, fallback) => {
    const v = cs.getPropertyValue(name).trim() || fallback;
    const m = v.replace('#', '');
    return [
      parseInt(m.slice(0, 2), 16),
      parseInt(m.slice(2, 4), 16),
      parseInt(m.slice(4, 6), 16),
    ];
  };
  return {
    lr: hex('--lr', '#FF3B6B'),
    ap: hex('--ap', '#3DDC97'),
    si: hex('--si', '#4C7DFF'),
    composite: cs.getPropertyValue('--tract-composite').trim() || 'lighter',
    alpha: parseFloat(cs.getPropertyValue('--tract-alpha')) || 0.72,
    width: parseFloat(cs.getPropertyValue('--tract-width')) || 1.05,
  };
}

export function createTractField(canvas, opts = {}) {
  const ctx = canvas.getContext('2d', { alpha: true });
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const density = opts.density ?? 1;

  const atlas = document.createElement('canvas');
  const actx = atlas.getContext('2d', { alpha: true });
  const scratch = document.createElement('canvas');
  const sctx = scratch.getContext('2d', { alpha: true });

  let palette = readPalette();
  let w = 0;
  let h = 0;
  let dpr = 1;
  let raf = 0;
  let running = false;

  /* Registration pass: 0 → two offset copies, 1 → one aligned field. */
  let converge = reduced ? 1 : 0;
  let started = 0;

  const probe = { x: -9999, y: -9999, tx: -9999, ty: -9999, strength: 0 };

  /* A subset of fibres keeps its geometry after the atlas is baked, so a pulse
     can travel along the actual path rather than across it. */
  let pulses = [];

  /* ---------------------------------------------------------------- atlas */

  function buildAtlas() {
    const fibres = buildFibres(w, h, density);
    const pulseEvery = Math.max(1, Math.floor(fibres.length / (w < 700 ? 12 : 22)));

    pulses = [];

    actx.setTransform(1, 0, 0, 1, 0, 0);
    actx.clearRect(0, 0, atlas.width, atlas.height);
    actx.setTransform(dpr, 0, 0, dpr, 0, 0);
    actx.lineCap = 'round';
    actx.lineJoin = 'round';
    /* Crossing fibres accumulate on a dark ground; on a light one they must not. */
    actx.globalCompositeOperation = palette.composite === 'multiply' ? 'source-over' : 'lighter';

    for (let i = 0; i < fibres.length; i += 1) {
      const { pts, n, depth, alpha, width } = fibres[i];

      if (i % pulseEvery === 0) {
        pulses.push({
          pts,
          n,
          depth,
          /* Spread so they never march in step. Derived from the index rather
             than a PRNG, so the atlas stays reproducible. */
          t: ((i * 0.6180339887) % 1),
          speed: 0.03 + ((i * 0.3819660113) % 1) * 0.04,
          /* Tail measured in points; the polyline is dense, so this is short. */
          tail: 14 + ((i * 7) % 12),
          gain: 0.6 + ((i * 0.2360679775) % 1) * 0.5,
        });
      }

      /* One gradient per fibre, sampled along its length. Twelve stops is
         enough to show the red-to-purple-to-blue shift as a fibre curves. */
      const grad = actx.createLinearGradient(
        pts[0],
        pts[1],
        pts[(n - 1) * 2],
        pts[(n - 1) * 2 + 1]
      );

      const SAMPLES = 12;
      for (let k = 0; k < SAMPLES; k += 1) {
        const u = k / (SAMPLES - 1);
        const idx = Math.min(n - 2, Math.floor(u * (n - 2)));
        const [r, g, b] = axisColor(
          pts[(idx + 1) * 2] - pts[idx * 2],
          pts[(idx + 1) * 2 + 1] - pts[idx * 2 + 1],
          depth,
          palette
        );
        /* Taper both ends so fibres fade in rather than starting abruptly. */
        const taper = Math.sin(u * Math.PI) ** 0.5;
        grad.addColorStop(u, `rgba(${r},${g},${b},${(palette.alpha * alpha * taper).toFixed(3)})`);
      }

      actx.strokeStyle = grad;
      actx.lineWidth = palette.width * width;
      actx.beginPath();
      actx.moveTo(pts[0], pts[1]);
      for (let s = 1; s < n; s += 1) actx.lineTo(pts[s * 2], pts[s * 2 + 1]);
      actx.stroke();
    }

    /* Feather the whole field into its ellipse. Without this the fibres end on
       hard bounding-box edges, which is what made it read as a texture that had
       been cropped rather than a shape that was composed. */
    const R = fieldRegion(w, h);
    actx.globalCompositeOperation = 'destination-in';
    actx.save();
    actx.translate(R.cx * w, R.cy * h);
    actx.scale(1, (R.ry * h) / (R.rx * w));
    const mask = actx.createRadialGradient(0, 0, 0, 0, 0, R.rx * w);
    mask.addColorStop(0, 'rgba(0,0,0,1)');
    mask.addColorStop(0.5, 'rgba(0,0,0,1)');
    mask.addColorStop(0.78, 'rgba(0,0,0,0.5)');
    mask.addColorStop(1, 'rgba(0,0,0,0)');
    actx.fillStyle = mask;
    actx.fillRect(-w * 2, -h * 2, w * 4, h * 4);
    actx.restore();

    actx.globalCompositeOperation = 'source-over';
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = Math.max(1, rect.width);
    h = Math.max(1, rect.height);

    for (const c of [canvas, atlas, scratch]) {
      c.width = Math.round(w * dpr);
      c.height = Math.round(h * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    sctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    buildAtlas();
    if (!running) render(performance.now());
  }

  /* ---------------------------------------------------------------- frame */

  /** Masks a copy of the atlas with `fillMask`, then composites it back. */
  function overlay(fillMask, alpha) {
    sctx.setTransform(1, 0, 0, 1, 0, 0);
    sctx.globalCompositeOperation = 'source-over';
    sctx.clearRect(0, 0, scratch.width, scratch.height);
    sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    sctx.drawImage(atlas, 0, 0, w, h);

    sctx.globalCompositeOperation = 'destination-in';
    fillMask(sctx);
    sctx.globalCompositeOperation = 'source-over';

    ctx.globalCompositeOperation = palette.composite;
    ctx.globalAlpha = alpha;
    ctx.drawImage(scratch, 0, 0, w, h);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }

  let lastT = 0;

  function render(now) {
    const t = now / 1000;
    const dt = lastT ? Math.min(0.1, t - lastT) : 0.016;
    lastT = t;

    if (!started) started = now;
    if (!reduced && converge < 1) {
      const p = Math.min(1, (now - started) / 2200);
      converge = 1 - Math.pow(1 - p, 5);
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (converge < 0.999) {
      /* Two misaligned captures resolving into one. */
      const d = (1 - converge) * 30;
      ctx.globalAlpha = 0.55;
      ctx.drawImage(atlas, d, d * 0.42, w, h);
      ctx.drawImage(atlas, -d, -d * 0.42, w, h);
      ctx.globalAlpha = 1;
    } else {
      ctx.drawImage(atlas, 0, 0, w, h);
    }

    if (reduced) return;

    /* ---- pulses ---- */
    const gate = Math.max(0, (converge - 0.7) / 0.3);
    if (gate > 0.01) {
      ctx.globalCompositeOperation = palette.composite;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let i = 0; i < pulses.length; i += 1) {
        const p = pulses[i];
        p.t += p.speed * dt;
        if (p.t > 1) p.t -= 1;

        const pts = p.pts;
        /* Fractional positions: the head and tail sit *between* points, which
           is what stops the pulse stepping from vertex to vertex. */
        const headPos = p.t * (p.n - 1);
        const tailPos = Math.max(0, headPos - p.tail);
        const hi = Math.min(p.n - 2, Math.floor(headPos));
        const ti = Math.floor(tailPos);
        if (hi - ti < 1) continue;

        const hf = headPos - hi;
        const hx = pts[hi * 2] + (pts[(hi + 1) * 2] - pts[hi * 2]) * hf;
        const hy = pts[hi * 2 + 1] + (pts[(hi + 1) * 2 + 1] - pts[hi * 2 + 1]) * hf;

        const tf = tailPos - ti;
        const tx = pts[ti * 2] + (pts[(ti + 1) * 2] - pts[ti * 2]) * tf;
        const ty = pts[ti * 2 + 1] + (pts[(ti + 1) * 2 + 1] - pts[ti * 2 + 1]) * tf;

        const [r, g, b] = axisColor(
          pts[(hi + 1) * 2] - pts[hi * 2],
          pts[(hi + 1) * 2 + 1] - pts[hi * 2 + 1],
          p.depth,
          palette
        );

        /* Fade in and out at the ends of the run so nothing pops. */
        const life = Math.sin(p.t * Math.PI) ** 0.5;
        const a = 0.95 * life * p.gain * gate * palette.alpha;
        if (a < 0.01) continue;

        const grad = ctx.createLinearGradient(tx, ty, hx, hy);
        grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
        grad.addColorStop(0.7, `rgba(${r},${g},${b},${(a * 0.4).toFixed(3)})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},${a.toFixed(3)})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = palette.width * 2.3;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        for (let s = ti + 1; s <= hi; s += 1) ctx.lineTo(pts[s * 2], pts[s * 2 + 1]);
        ctx.lineTo(hx, hy);
        ctx.stroke();
      }

      ctx.globalCompositeOperation = 'source-over';
    }

    /* ---- cursor glow ---- */
    probe.x += (probe.tx - probe.x) * 0.06;
    probe.y += (probe.ty - probe.y) * 0.06;
    probe.strength += ((probe.tx < -1000 ? 0 : 1) - probe.strength) * 0.05;

    if (probe.strength > 0.01) {
      overlay((c) => {
        const g = c.createRadialGradient(probe.x, probe.y, 0, probe.x, probe.y, 260);
        g.addColorStop(0, 'rgba(0,0,0,1)');
        g.addColorStop(0.55, 'rgba(0,0,0,0.35)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        c.fillStyle = g;
        c.fillRect(0, 0, w, h);
      }, 0.6 * probe.strength * converge);
    }
  }

  function loop(now) {
    if (!running) return;
    raf = requestAnimationFrame(loop);
    render(now);
  }

  function start() {
    if (running || reduced) return;
    running = true;
    lastT = 0;
    raf = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  function onPointer(e) {
    const rect = canvas.getBoundingClientRect();
    probe.tx = e.clientX - rect.left;
    probe.ty = e.clientY - rect.top;
  }

  function onLeave() {
    probe.tx = -9999;
    probe.ty = -9999;
  }

  const ro = new ResizeObserver(resize);
  /* Only burn frames while the field is actually on screen. */
  const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()), {
    threshold: 0,
  });

  function onVisibility() {
    if (document.hidden) stop();
    else if (canvas.isConnected) start();
  }

  resize();
  ro.observe(canvas);
  io.observe(canvas);

  if (!reduced) {
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('pointerleave', onLeave, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    start();
  }

  return {
    /* Called by the theme toggle — the lightbox needs different colours. */
    refreshPalette() {
      palette = readPalette();
      buildAtlas();
      if (!running) render(performance.now());
    },
    destroy() {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    },
  };
}
