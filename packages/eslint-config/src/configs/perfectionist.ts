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
            ["type-builtin", "value-builtin"],
            ["type-external", "value-external"],
            ["type-parent", "value-parent"],
            ["type-sibling", "value-sibling"],
            ["type-index", "value-index"],
            ["type-internal", "value-internal"],
            "side-effect",
            "ts-equals-import",
            "unknown"
          ],
          internalPattern: [
            "^~/.+",
            "^~~/.+",
            "^@/.+",
            "^@@/.+"
          ],
          newlinesBetween: 0,
          order: "asc",
          type: "natural"
        }]
      }
    }
  ];
}