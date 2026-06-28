import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://peijli.github.io',
  redirects: {
    '/resume': '/cv/',
  },
});
