/* eslint-disable import/order */
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown({}), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image()],
  adapter: vercel()
});
