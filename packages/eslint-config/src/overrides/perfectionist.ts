import type { OptionsPerfectionist } from "../types";

export function perfectionist(): OptionsPerfectionist {
  return {
    overrides: {
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
  };
}