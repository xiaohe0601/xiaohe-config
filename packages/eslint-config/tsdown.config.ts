import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "./src/index.ts",
  platform: "neutral",
  external: [
    "eslint-plugin-perfectionist"
  ],
  format: [
    "esm",
    "cjs"
  ],
  dts: {
    build: true
  }
});