import { profile } from '../content/profile.js';
import { esc } from '../lib/dom.js';
import { toggleTheme, resolvedTheme } from '../lib/theme.js';

/** Nav, footer, and the theme control. */

export function renderNav() {
  return `
  <a class="skip" href="#main">Skip to content</a>
  <header class="nav" id="nav">
    <div class="nav-inner">
      <a class="nav-mark" href="#/" aria-label="Aditya Kulkarni — home">
        <svg viewBox="0 0 34 20" width="34" height="20" aria-hidden="true">
          <path d="M1 18C7 18 9 3 16 3s9 8 17 8" fill="none" stroke="var(--lr)" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M1 13C8 13 8 7 17 7s10 6 16 6" fill="none" stroke="var(--ap)" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M1 8c8 0 6 9 15 9s10-9 17-9" fill="none" stroke="var(--si)" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span class="nav-name">Aditya&nbsp;Kulkarni</span>
      </a>

      <nav class="nav-links" aria-label="Sections">
        <a href="#experience" data-nav="experience">Experience</a>
        <a href="#work" data-nav="work">Projects</a>
        <a href="#skills" data-nav="skills">Toolkit</a>
        <a href="#/resume" data-nav="resume">Resume</a>
      </nav>

      <button class="nav-theme" type="button" id="theme-toggle" aria-label="Switch colour theme">
        <span class="nav-theme-label" id="theme-label">Dark</span>
        <span class="nav-theme-dot" aria-hidden="true"></span>
      </button>
    </div>
  </header>`;
}

export function renderFooter() {
  return `
  <footer class="footer" id="contact">
    <div class="wrap">
      <div class="footer-top">
        <p class="footer-line">${esc(profile.available)}</p>
        <a class="footer-mail" href="mailto:${esc(profile.email)}">
          ${esc(profile.email)}
          <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
      <div class="footer-bottom">
        <span>${esc(profile.location)}</span>
        <nav class="footer-links" aria-label="Elsewhere">
          <a href="${esc(profile.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
          <a href="${esc(profile.github)}" target="_blank" rel="noopener">GitHub</a>
          <a href="#/resume">Resume</a>
        </nav>
        <span class="footer-colophon">Built with Vite &middot; set in Sora, Instrument Sans &amp; JetBrains Mono</span>
      </div>
    </div>
  </footer>`;
}

export function bindChrome(onThemeChange) {
  const btn = document.getElementById('theme-toggle');
  const label = document.getElementById('theme-label');
  const sync = () => {
    if (label) label.textContent = resolvedTheme() === 'dark' ? 'Dark' : 'Lightbox';
  };
  sync();

  if (btn) {
    btn.addEventListener('click', () => {
      toggleTheme();
      sync();
      if (onThemeChange) onThemeChange();
    });
  }

  /* Nav condenses once you leave the hero. Throttled to one check per frame —
     the raw scroll event fires far more often than the class can change. */
  const nav = document.getElementById('nav');
  let ticking = false;
  let stuck = null;

  const apply = () => {
    ticking = false;
    if (!nav) return;
    const next = window.scrollY > 40;
    if (next === stuck) return;
    stuck = next;
    nav.classList.toggle('is-stuck', next);
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(apply);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  apply();

  return { sync };
}
