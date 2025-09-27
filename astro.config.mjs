// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkEmoji from "remark-emoji";
import mermaid from "astro-mermaid";
import plantuml from "astro-plantuml";

// https://astro.build/config
export default defineConfig({
  integrations: [
    plantuml(),
    mermaid({
      theme: "forest",
      autoTheme: true,
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
          href: "https://github.com/malafronte/corso-ai-docenti",
        },
      ],
      sidebar: [
        {
          label: "✨ Corso AI",
          translations: { en: "✨ AI Course" },
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
            {
              label: "Principi di Prompt Engineering per la Didattica",
              translations: {
                en: "Principles of Prompt Engineering for Education",
              },
              slug: "corso/prompt-engineering-basics",
            },
            {
              label: "Prompt Avanzati e Progettazione Didattica",
              translations: {
                en: "Advanced Prompts and Educational Design",
              },
              slug: "corso/prompt-engineering-advanced",
            },
            {
              label:
                "Esperienze Didattiche Personalizzate con NotebookLM, Chatbot RAG e Strumenti per l'Inclusione",
              translations: {
                en: "Personalized Learning Experiences with NotebookLM, RAG Chatbots, and Inclusion Tools",
              },
              slug: "corso/personalized-learning-experiences",
            },
          ],
        },

        {
          label: " 🧭 Bussola dell'AI",
          translations: { en: " 🧭 AI compass" },
          collapsed: true,
          autogenerate: { directory: "ai-compass" },
        },
        {
          label: " 📚 Esempi Didattici",
          translations: { en: " 📚 teaching examples" },
          collapsed: true,
          autogenerate: { directory: "lesson-examples" },
        },
        {
          label: "📖 Guide",
          translations: { en: "📖 Guides" },
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
          label: "🏛️ Normativa AI",
          translations: { en: "🏛️ AI Regulations" },
          collapsed: true,
          autogenerate: { directory: "ai-regulations" },
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
    }),
  ],
  // Enable remark plugin to convert emoji shortcodes like :tent: into unicode
  markdown: {
    remarkPlugins: [remarkEmoji],
  },
  site: "https://malafronte.github.io",
  base: "/corso-ai-docenti/",
});
