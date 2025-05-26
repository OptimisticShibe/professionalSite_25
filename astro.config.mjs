// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), mdx()],
  redirects: {
    "/resume": "/Rafiq_Ramadan.pdf",
    "/resume-ats": "/rafiqramadan.pdf",
    "/aws-cloud-practitioner-cert": "/Aws_Certified_Cloud_Practitioner_Certificate.pdf",
    "/ic-agile-cert": "/ICAgile_Fundamentals_Certificate.pdf",
  },
});
