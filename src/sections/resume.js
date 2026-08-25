import { profile, publications, certifications, axes } from '../content/profile.js';
import { timeline } from '../content/timeline.js';
import { skillGroups } from '../content/skills.js';
import { projects } from '../content/projects.js';
import { esc } from '../lib/dom.js';

/**
 * The resume is generated from the same content modules as the rest of the site,
 * so the two can never drift. Screen and print share the markup; print.css
 * handles the rest.
 */

function roleLine(entry) {
  return entry.roleAlt ? `${entry.role} & ${entry.roleAlt}` : entry.role;
}

function resumeEntry(entry) {
  const points = entry.chapters
    .map((c) => `<li><strong>${esc(c.title)}.</strong> ${esc(c.body)}</li>`)
    .join('');

  return `
  <article class="cv-entry" data-axis="${entry.axis}">
    <div class="cv-entry-head">
      <div>
        <h4 class="cv-role">${esc(roleLine(entry))}</h4>
        <p class="cv-org">${esc(entry.org)}${
    entry.orgNote ? `<em>, ${esc(entry.orgNote)}</em>` : ''
  }${entry.detail ? ` &middot; ${esc(entry.detail)}` : ''}</p>
      </div>
      <div class="cv-when">
        <span>${esc(entry.range)}</span>
        <span>${esc(entry.place)}</span>
      </div>
    </div>
    ${points ? `<ul class="cv-points">${points}</ul>` : ''}
    ${
      entry.stack && entry.stack.length
        ? `<p class="cv-stack"><span>Stack</span>${esc(entry.stack.join(' · '))}</p>`
        : ''
    }
  </article>`;
}

export function renderResume() {
  const work = timeline.filter((t) => t.kind === 'work');
  const edu = timeline.filter((t) => t.kind === 'edu');

  return `
  <div class="cv-view" id="resume">
    <div class="wrap wrap-cv">

      <div class="cv-toolbar" data-noprint>
        <a class="btn btn-ghost btn-sm" href="#/">
          <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M13 8H3M7 4L3 8l4 4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Back
        </a>
        <div class="cv-toolbar-actions">
          <button class="btn btn-sm" type="button" id="cv-print">Print / Save as PDF</button>
          <a class="btn btn-primary btn-sm" href="${esc(
            profile.resumePdf
          )}" target="_blank" rel="noopener">Download the PDF</a>
        </div>
      </div>

      <article class="cv">
        <header class="cv-head">
          <div class="cv-id">
            <h1 class="cv-name">${esc(profile.name)}</h1>
            <p class="cv-headline">${esc(profile.role)} &amp; ${esc(profile.roleAlt)} &middot; ${esc(
    profile.company
  )}</p>
          </div>
          <ul class="cv-contact">
            <li><a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a></li>
            <li>${esc(profile.phone)}</li>
            <li>${esc(profile.location)}</li>
            <li><a href="${esc(profile.linkedin)}" target="_blank" rel="noopener">linkedin.com/in/adityavkulkarni</a></li>
            <li><a href="${esc(profile.github)}" target="_blank" rel="noopener">github.com/adityavkulkarni</a></li>
          </ul>
        </header>

        <section class="cv-section">
          <h3 class="cv-section-title">Summary</h3>
          <p class="cv-summary">${esc(profile.bio)}</p>
        </section>

        <section class="cv-section">
          <h3 class="cv-section-title">Experience</h3>
          ${work.map(resumeEntry).join('')}
        </section>

        <section class="cv-section">
          <h3 class="cv-section-title">Education</h3>
          ${edu.map(resumeEntry).join('')}
        </section>

        <section class="cv-section">
          <h3 class="cv-section-title">Selected projects</h3>
          <ul class="cv-projects">
            ${projects
              .map(
                (p) => `
              <li data-axis="${p.axis}">
                <strong>${esc(p.title)}</strong> &mdash; ${esc(p.claim)}
                <span class="cv-project-stack">${esc(p.stack.slice(0, 6).join(' · '))}</span>
              </li>`
              )
              .join('')}
          </ul>
        </section>

        <section class="cv-section">
          <h3 class="cv-section-title">Skills</h3>
          <dl class="cv-skills">
            ${skillGroups
              .map(
                (g) => `
              <div data-axis="${g.axis}">
                <dt>${esc(g.title)}</dt>
                <dd>${esc([...g.lead, ...g.rest].join(' · '))}</dd>
              </div>`
              )
              .join('')}
          </dl>
        </section>

        <section class="cv-section cv-section-split">
          <div>
            <h3 class="cv-section-title">Publications</h3>
            <ul class="cv-list">
              ${publications.map((p) => `<li>${esc(p.title)}</li>`).join('')}
            </ul>
          </div>
          <div>
            <h3 class="cv-section-title">Certifications</h3>
            <ul class="cv-list">
              ${certifications
                .map(
                  (c) =>
                    `<li>${
                      c.url
                        ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(
                            c.name
                          )}</a>`
                        : esc(c.name)
                    } <span>${esc(c.issuer)}, ${esc(c.year)}</span></li>`
                )
                .join('')}
            </ul>
          </div>
        </section>
      </article>
    </div>
  </div>`;
}

export function bindResume(root = document) {
  const btn = root.querySelector('#cv-print');
  if (btn) btn.addEventListener('click', () => window.print());
}

/* Keeps the axes import honest — the legend colours come from the same source. */
export const resumeAxes = axes;
