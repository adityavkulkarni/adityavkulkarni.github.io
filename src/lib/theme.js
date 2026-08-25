/**
 * theme.js — three states, not two.
 * No stored preference means "follow the system", which is the default.
 */

const KEY = 'ak-theme';

function stored() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function persist(value) {
  try {
    if (value) localStorage.setItem(KEY, value);
    else localStorage.removeItem(KEY);
  } catch {
    /* Private mode, blocked storage — the page still works. */
  }
}

export function resolvedTheme() {
  const explicit = document.documentElement.getAttribute('data-theme');
  if (explicit) return explicit;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function initTheme() {
  const saved = stored();
  if (saved === 'light' || saved === 'dark') {
    document.documentElement.setAttribute('data-theme', saved);
  }
}

export function toggleTheme() {
  const next = resolvedTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  persist(next);
  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: next } }));
  return next;
}

export function onSystemThemeChange(fn) {
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
    if (!document.documentElement.getAttribute('data-theme')) fn(resolvedTheme());
  });
}
