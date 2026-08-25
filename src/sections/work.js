import { projects } from '../content/projects.js';
import { skillGroups } from '../content/skills.js';
import { esc } from '../lib/dom.js';

function projectMarkup(p, i) {
  const links = p.links
    .map(
      (l) =>
        `<a class="proj-link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(
          l.label
        )}<svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`
    )
    .join('');

  return `
  <article class="proj" data-axis="${p.axis}" data-reveal data-reveal-delay="${(i % 2) * 90}">
    <div class="proj-media">
      <img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" decoding="async">
      <span class="proj-year">${esc(p.year)}</span>
    </div>
    <div class="proj-text">
      <p class="proj-subtitle">${esc(p.subtitle)}</p>
      <h3 class="proj-title">${esc(p.title)}</h3>
      <p class="proj-claim">${esc(p.claim)}</p>
      <p class="proj-body">${esc(p.body)}</p>
      <ul class="stack stack-sm">${p.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
      <div class="proj-links">${links}</div>
    </div>
  </article>`;
}

function skillsMarkup() {
  return skillGroups
    .map(
      (g) => `
    <div class="skill-group" data-axis="${g.axis}" data-reveal>
      <h3 class="skill-title">${esc(g.title)}</h3>
      <ul class="skill-lead">${g.lead.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
      <ul class="skill-rest">${g.rest.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
    </div>`
    )
    .join('');
}

export function renderWork() {
  return `
  <section class="section work" id="work">
    <div class="wrap">
      <header class="section-head">
        <span class="eyebrow">02 &mdash; Work</span>
        <h2 class="section-title">Selected projects</h2>
        <p class="section-lede">
          Six projects across agentic retrieval, streaming machine learning,
          robotics and natural language processing.
        </p>
      </header>

      <div class="projects">
        ${projects.map(projectMarkup).join('')}
      </div>
    </div>
  </section>

  <section class="section skills" id="skills">
    <div class="wrap">
      <header class="section-head">
        <span class="eyebrow">03 &mdash; Skills</span>
        <h2 class="section-title">Tools and technologies</h2>
        <p class="section-lede">
          Highlighted items are in regular use. The remainder are technologies
          used in production work.
        </p>
      </header>
      <div class="skill-grid">
        ${skillsMarkup()}
      </div>
    </div>
  </section>`;
}
