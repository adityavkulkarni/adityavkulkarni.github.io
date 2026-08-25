import { profile } from '../content/profile.js';
import { esc } from '../lib/dom.js';

/**
 * The hero is a thesis, not a greeting.
 * Name, one sentence about what the work is for, four numbers, three doors out.
 */
export function renderHero() {
  const stats = profile.stats
    .map(
      (s, i) => `
      <div class="stat" data-axis="${s.axis}" data-reveal data-reveal-delay="${560 + i * 70}">
        <span class="stat-value">${esc(s.value)}${
        s.unit ? `<em>${esc(s.unit)}</em>` : ''
      }</span>
        <span class="stat-label">${esc(s.label)}</span>
      </div>`
    )
    .join('');

  return `
  <section class="hero" id="home">
    <canvas class="hero-tracts" id="tract-canvas" aria-hidden="true"></canvas>
    <div class="hero-bloom" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>

    <div class="hero-inner">
      <p class="hero-status" data-reveal data-reveal-delay="120">
        <span class="pulse" aria-hidden="true"></span>
        ${esc(profile.role)} &middot; ${esc(profile.company)}
        <span class="hero-status-note">${esc(profile.companyNote)}</span>
      </p>

      <h1 class="hero-name">
        <span class="hero-name-line" data-reveal data-reveal-delay="180">${esc(profile.first)}</span>
        <span class="hero-name-line hero-name-strong" data-reveal data-reveal-delay="260">${esc(
          profile.last
        )}</span>
      </h1>

      <p class="hero-thesis" data-reveal data-reveal-delay="380">${esc(profile.thesis)}</p>
      <p class="hero-lede" data-reveal data-reveal-delay="460">${esc(profile.lede)}</p>

      <div class="hero-actions" data-reveal data-reveal-delay="520">
        <a class="btn btn-primary" href="#/resume">
          View resume
          <svg viewBox="0 0 16 16" aria-hidden="true" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a class="btn" href="#experience">Experience</a>
        <a class="btn btn-ghost" href="mailto:${esc(profile.email)}">Contact</a>
      </div>

      <div class="hero-stats">${stats}</div>
    </div>

    <a class="hero-scroll" href="#experience" aria-label="Scroll to experience">
      <span>Scroll</span>
      <i aria-hidden="true"></i>
    </a>
  </section>`;
}
