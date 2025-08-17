import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "static",
  site: "https://yuvraj-dev.me",
  integrations: [react()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
