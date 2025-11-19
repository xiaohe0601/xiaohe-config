import pluginPerfectionist from "eslint-plugin-perfectionist";
import type { TypedFlatConfigItem } from "../types";

export async function perfectionist(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      name: "xiaohe/perfectionist/setup",
      plugins: {
        perfectionist: pluginPerfectionist
      }
    },
    {
      name: "xiaohe/perfectionist/rules",
      rules: {
        "perfectionist/sort-imports": ["error", {
          groups: [
            ["builtin-type", "builtin"],
            ["external-type", "external"],
            ["parent-type", "parent"],
            ["sibling-type", "sibling"],
            ["index-type", "index"],
            ["internal-type", "internal"],
            "style",
            ["side-effect", "side-effect-style"],
            "object",
            "unknown"
          ],
          internalPattern: [
            "^~~/.*",
            "^~/.*",
            "^@@/.*",
            "^@/.*"
          ],
          newlinesBetween: "never",
          order: "asc",
          type: "natural"
        }]
      }
    }
  ];
}