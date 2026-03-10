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
    onlyAllowBundle: [
      "es-toolkit"
    ],
    neverBundle: [
      "eslint-flat-config-utils",
      "eslint-plugin-perfectionist",
      "find-up-simple"
    ]
  }
});