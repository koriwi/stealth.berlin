import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import dynamicImport from "vite-plugin-dynamic-import";

// https://astro.build/config
export default defineConfig({
  site: "https://stealth.berlin",

  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
  ],
});
