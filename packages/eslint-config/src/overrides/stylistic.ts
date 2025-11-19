import type { OptionsStylistic } from "../types";

export function stylistic(): OptionsStylistic {
  return {
    quotes: "double",
    semi: true,
    overrides: {
      "antfu/curly": "off",
      "antfu/if-newline": "error",
      "antfu/top-level-function": "error",

      "curly": ["error", "all"],

      "style/arrow-parens": ["error", "always"],
      "style/brace-style": ["error", "1tbs"],
      "style/comma-dangle": ["error", "never"],
      "style/eol-last": ["error", "never"],
      "style/member-delimiter-style": ["error", {
        multiline: {
          delimiter: "semi",
          requireLast: true
        },
        multilineDetection: "brackets",
        singleline: {
          delimiter: "semi",
          requireLast: false
        }
      }],
      "style/no-multiple-empty-lines": ["error", {
        max: 2,
        maxBOF: 0,
        maxEOF: 0
      }],
      "style/operator-linebreak": ["error", "before", {
        overrides: {
          "=": "after"
        }
      }],
      "style/padded-blocks": ["error", {
        blocks: "never",
        classes: "always",
        switches: "never"
      }],
      "style/quote-props": "off"
    }
  };
}