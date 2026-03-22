import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://www.fisioarenal.com',
  integrations: [
    tailwind(),
  ],
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
});
