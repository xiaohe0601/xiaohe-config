import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "./src/index.ts",
  platform: "node",
  format: [
    "esm",
    "cjs"
  ],
  dts: {
    build: true
  },
  inlineOnly: [
    "es-toolkit"
  ],
  external: [
    "eslint-flat-config-utils",
    "eslint-plugin-perfectionist",
    "find-up-simple"
  ]
});