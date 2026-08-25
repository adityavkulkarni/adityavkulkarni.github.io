/**
 * reveal.js — scroll choreography.
 *
 * `observeReveals` fades elements in once. `trackProgress` reports 0→1 as an
 * element crosses the viewport, which the trajectory rail uses to draw itself.
 * `spyNav` keeps the nav in sync with the section in view.
 */

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function observeReveals(root = document) {
  const targets = root.querySelectorAll('[data-reveal]:not([data-revealed])');
  if (reduced()) {
    targets.forEach((el) => el.setAttribute('data-revealed', ''));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = Number(el.dataset.revealDelay || 0);
        window.setTimeout(() => el.setAttribute('data-revealed', ''), delay);
        io.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
  );

  targets.forEach((el) => io.observe(el));
  return io;
}

export function trackProgress(el, fn) {
  let raf = 0;
  let active = false;

  const measure = () => {
    raf = 0;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    /* 0 when the top reaches 78% of the viewport, 1 when the bottom passes 55%. */
    const start = vh * 0.78;
    const end = -rect.height + vh * 0.55;
    const p = (start - rect.top) / (start - end);
    fn(Math.min(1, Math.max(0, p)));
  };

  const onScroll = () => {
    if (!active || raf) return;
    raf = requestAnimationFrame(measure);
  };

  const io = new IntersectionObserver(([entry]) => {
    active = entry.isIntersecting;
    if (active) measure();
  });

  io.observe(el);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  measure();

  return () => {
    io.disconnect();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}

export function spyNav(sectionIds, onChange) {
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  if (!sections.length) return;

  let current = '';
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id !== current) {
          current = entry.target.id;
          onChange(current);
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((s) => io.observe(s));
  return io;
}
