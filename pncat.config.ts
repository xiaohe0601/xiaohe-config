import { defineConfig, mergeCatalogRules } from "pncat";

export default defineConfig({
  catalogRules: mergeCatalogRules([
    {
      name: "dev",
      match: [
        "@vue/runtime-core"
      ],
      priority: 1
    },
    {
      name: "types",
      match: [
        /\btypes\b/,
        /\btypings\b/
      ],
      priority: 10
    },
    {
      name: "cli",
      match: [
        "@antfu/ni"
      ],
      priority: 20
    },
    {
      name: "frontend",
      match: [
        "ress"
      ],
      priority: 60
    },
    {
      name: "utils",
      match: [
        "es-toolkit"
      ],
      priority: 60
    }
  ])
});