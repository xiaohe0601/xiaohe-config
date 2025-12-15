import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "./src/index.ts",
  platform: "node",
  external: [
    "eslint-plugin-perfectionist",
    "find-up-simple"
  ],
  format: [
    "esm",
    "cjs"
  ],
  dts: {
    build: true
  }
});