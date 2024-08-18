import cloudflare from '@astrojs/cloudflare';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })],
  site: process.env.SITE_URL ?? process.env.CF_PAGES_URL ?? 'http://localhost:4321/',
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },
  }),
  vite: {
    build: {
      sourcemap: true
    }
  }
});
