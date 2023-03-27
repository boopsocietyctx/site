/* eslint-disable import/order */
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image()],
  adapter: vercel()
});
