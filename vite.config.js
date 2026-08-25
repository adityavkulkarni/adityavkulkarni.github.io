import { defineConfig } from 'vite';

// Deployed as a GitHub Pages *user* site (adityavkulkarni.github.io),
// so the app is served from the domain root.
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2020',
  },
  server: {
    port: 5173,
    open: true,
  },
});
