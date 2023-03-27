/* eslint-disable import/order */
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/edge";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown({}), tailwind({ config: { applyBaseStyles: false } })],
  output: "server",
  adapter: vercel(),
  experimental: {
    assets: true
  }
});
