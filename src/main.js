import './styles/tokens.css';
import './styles/base.css';
import './styles/chrome.css';
import './styles/hero.css';
import './styles/experience.css';
import './styles/work.css';
import './styles/resume.css';
import './styles/print.css';

import { profile } from './content/profile.js';
import { initTheme, onSystemThemeChange } from './lib/theme.js';
import { createTractField } from './lib/tracts.js';
import { observeReveals, spyNav } from './lib/reveal.js';
import { renderNav, renderFooter, bindChrome } from './sections/chrome.js';
import { renderHero } from './sections/hero.js';
import { renderExperience, bindExperience } from './sections/experience.js';
import { renderWork } from './sections/work.js';
import { renderResume, bindResume } from './sections/resume.js';

initTheme();

const app = document.getElementById('app');
const SECTIONS = ['home', 'experience', 'work', 'skills'];

let field = null;

function teardownField() {
  if (field) {
    field.destroy();
    field = null;
  }
}

function renderHome() {
  return `
    <main id="main">
      ${renderHero()}
      ${renderExperience()}
      ${renderWork()}
    </main>
    ${renderFooter()}
  `;
}

function renderResumeView() {
  return `
    <main id="main">
      ${renderResume()}
    </main>
    ${renderFooter()}
  `;
}

function currentRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#/resume')) return 'resume';
  return 'home';
}

function markActiveNav(id) {
  document.querySelectorAll('[data-nav]').forEach((a) => {
    a.classList.toggle('is-active', a.dataset.nav === id);
  });
}

function mount(route, { restoreScroll = true } = {}) {
  teardownField();

  app.innerHTML = renderNav() + (route === 'resume' ? renderResumeView() : renderHome());
  document.documentElement.dataset.route = route;

  bindChrome(() => field && field.refreshPalette());
  observeReveals(app);

  if (route === 'home') {
    const canvas = document.getElementById('tract-canvas');
    if (canvas) field = createTractField(canvas);
    bindExperience(app);
    spyNav(SECTIONS, markActiveNav);
    document.title = `${profile.name} — ${profile.role}`;
  } else {
    bindResume(app);
    markActiveNav('resume');
    document.title = `${profile.name} — Resume`;
  }

  if (restoreScroll) window.scrollTo(0, 0);
}

/* ---- routing -------------------------------------------------------- */

let route = currentRoute();
mount(route, { restoreScroll: false });

window.addEventListener('hashchange', () => {
  const next = currentRoute();
  const hash = window.location.hash;

  if (next !== route) {
    route = next;
    mount(route);
    return;
  }

  /* Same view — treat the hash as an in-page anchor. */
  if (hash && !hash.startsWith('#/')) {
    const target = document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
        block: 'start',
      });
    }
  }
});

/* Anchor clicks inside the home view scroll rather than navigate. */
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (href.startsWith('#/')) return;
  if (href === window.location.hash) {
    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

onSystemThemeChange(() => field && field.refreshPalette());
window.addEventListener('themechange', () => field && field.refreshPalette());
