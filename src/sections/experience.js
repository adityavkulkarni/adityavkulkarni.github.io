import { timeline } from '../content/timeline.js';
import { axes } from '../content/profile.js';
import { esc } from '../lib/dom.js';
import { trackProgress } from '../lib/reveal.js';

/**
 * Experience and education on one rail, newest first.
 *
 * Roles render as solid nodes coloured by the kind of commitment they were
 * (full-time, internship, research); degrees render as open nodes.
 */

function chapterMarkup(entry) {
  return entry.chapters
    .map(
      (c) => `
      <div class="chapter">
        <h4 class="chapter-title">${esc(c.title)}</h4>
        <p class="chapter-body">${esc(c.body)}</p>
      </div>`
    )
    .join('');
}

function stackMarkup(stack) {
  if (!stack || !stack.length) return '';
  return `<ul class="stack">${stack
    .map((s) => `<li>${esc(s)}</li>`)
    .join('')}</ul>`;
}

function entryMarkup(entry, index) {
  const isEdu = entry.kind === 'edu';
  const open = index === 0;

  return `
  <article class="node ${isEdu ? 'node-edu' : ''}" data-axis="${entry.axis}" data-node="${esc(
    entry.id
  )}" data-reveal>
    <div class="node-mark" aria-hidden="true">
      <span class="node-dot"></span>
      ${entry.to === 'Present' ? '<span class="node-halo"></span>' : ''}
    </div>

    <header class="node-head">
      <div class="node-when">
        <span class="node-years">${esc(entry.from)}${
    entry.to !== entry.from ? `<i>&rarr;</i>${esc(entry.to)}` : ''
  }</span>
        <span class="node-kind">${esc(axes[entry.axis].label)}</span>
      </div>

      <div class="node-title">
        <h3>
          ${esc(entry.role)}
          ${entry.roleAlt ? `<span class="node-role-alt">&amp; ${esc(entry.roleAlt)}</span>` : ''}
        </h3>
        <p class="node-org">
          ${entry.logo ? `<img src="${esc(entry.logo)}" alt="" loading="lazy" decoding="async">` : ''}
          <span>${esc(entry.org)}${
    entry.orgNote ? `<em>, ${esc(entry.orgNote)}</em>` : ''
  }</span>
        </p>
        <p class="node-meta">
          <span>${esc(entry.range)}</span>
          <span>${esc(entry.place)}</span>
          ${entry.detail ? `<span class="node-detail">${esc(entry.detail)}</span>` : ''}
        </p>
      </div>
    </header>

    <p class="node-lede">${esc(entry.lede)}</p>

    <div class="node-body" ${open ? '' : 'hidden'}>
      ${chapterMarkup(entry)}
      ${stackMarkup(entry.stack)}
    </div>

    ${
      entry.chapters.length
        ? `<button class="node-toggle" type="button" aria-expanded="${open}" data-toggle="${esc(
            entry.id
          )}">
             <span class="node-toggle-label">${open ? 'Collapse' : 'Read the detail'}</span>
             <span class="node-toggle-icon" aria-hidden="true"></span>
           </button>`
        : ''
    }
  </article>`;
}

export function renderExperience() {
  return `
  <section class="section experience" id="experience">
    <div class="wrap">
      <header class="section-head">
        <span class="eyebrow">01 &mdash; Experience</span>
        <h2 class="section-title">Experience and education</h2>
      </header>

      <div class="rail" id="rail">
        <div class="rail-line" aria-hidden="true">
          <span class="rail-track"></span>
          <span class="rail-fill" id="rail-fill"></span>
        </div>
        <div class="nodes">
          ${timeline.map(entryMarkup).join('')}
        </div>
      </div>
    </div>
  </section>`;
}

export function bindExperience(root = document) {
  const fill = root.querySelector('#rail-fill');
  const rail = root.querySelector('#rail');

  if (fill && rail) {
    trackProgress(rail, (p) => {
      fill.style.transform = `scaleY(${p.toFixed(4)})`;
    });
  }

  root.querySelectorAll('[data-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const node = btn.closest('.node');
      const body = node.querySelector('.node-body');
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', String(!isOpen));
      btn.querySelector('.node-toggle-label').textContent = isOpen
        ? 'Read the detail'
        : 'Collapse';

      if (isOpen) {
        body.hidden = true;
      } else {
        body.hidden = false;
      }
    });
  });
}
