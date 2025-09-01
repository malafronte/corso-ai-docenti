// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";
import plantuml from "astro-plantuml";

// https://astro.build/config
export default defineConfig({
  
  integrations: [
    plantuml(),
    mermaid({
      theme: 'forest',
      autoTheme: true
    }), 
    starlight({
      title: {
        it: "AI per Docenti 2025",
        en: "AI for Teachers 2025",
      },
      // Enable multilingual docs: Italian as root (no /it/ prefix) and English under /en/
      defaultLocale: "root",
      locales: {
        root: { label: "Italiano", lang: "it" },
        en: { label: "English", lang: "en" },
      },
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
          translations: { en: "AI Course" },
          collapsed: false,
          items: [
            {
              label: "Panoramica del corso",
              translations: { en: "Course overview" },
              slug: "corso",
            },
            {
              label: "Cos'è l'IA generativa e come funziona?",
              translations: {
                en: "What is Generative AI and How Does It Work?",
              },
              slug: "corso/what-is-gen-ai",
            },
          ],
        },
        {
          label: "Guide",
          translations: { en: "Guides" },
          collapsed: true,
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Guide per AI",
              translations: { en: "AI Guides" },
              slug: "guides/example",
            },
          ],
        },
        {
          label: "Riferimenti",
          translations: { en: "Reference" },
          collapsed: true,
          autogenerate: { directory: "reference" },
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
    }),
  ],
  site: "https://malafronte.github.io",
  base: "/corso-ai-docenti/",
});
