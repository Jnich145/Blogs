import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jnich145.github.io',
  base: '/Blogs',
  integrations: [tailwind()],
});
