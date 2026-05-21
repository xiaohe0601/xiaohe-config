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
  deps: {
    onlyBundle: [
      "es-toolkit"
    ],
    neverBundle: [
      "eslint-flat-config-utils",
      "find-up-simple"
    ]
  }
});