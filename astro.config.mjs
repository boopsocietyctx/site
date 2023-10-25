/* eslint-disable import/order */
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/officers': '/#officers',
    '/membership': 'http://eepurl.com/h7kkMf',
    '/donations': 'https://www.paypal.com/donate/?hosted_button_id=CDKCWWZCGR5NE',
    '/resources': 'https://drive.google.com/drive/folders/1Ap4VY_FqEy0ybCUKZi8L-jZC0WuLnQl9',
    '/calendar': 'https://buytickets.at/boopsocietyctx'
  },
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  })],
  output: 'server',
  adapter: cloudflare()
});
