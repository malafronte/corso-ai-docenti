// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "AI per Docenti 2025",
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Corso AI",
          collapsed: false,
          items: [{ label: "Panoramica del corso", slug: "corso" }],
        },
        {
          label: "Guide",
          collapsed: true,
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Guide per AI", slug: "guides/example" },
          ],
        },
        {
          label: "Riferimenti",
          collapsed: true,
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
  site: "https://malafronte.github.io",
  base: "/corso-ai-docenti/",
});
