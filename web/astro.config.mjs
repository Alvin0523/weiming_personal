// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// CI passes the GitHub Pages origin and base path (e.g. /weiming_personal); locally both are unset.
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
