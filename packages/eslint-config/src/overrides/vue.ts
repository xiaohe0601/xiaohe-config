import { merge } from "@xiaohe-config/shared";
import { banImportExtension } from "../helpers";
import type { OptionsVue, OverridesOptionsVue } from "../types";

export function vue(options: OverridesOptionsVue): OptionsVue {
  const opts = {
    overrides: {
      "vue/block-order": ["error", {
        order: [
          "template",
          "script:not([setup])",
          "script[setup]",
          "style:not([scoped])",
          "style[scoped]"
        ]
      }],
      "vue/first-attribute-linebreak": ["error", {
        multiline: "below",
        singleline: "beside"
      }],
      "vue/html-closing-bracket-newline": ["error", {
        multiline: "always",
        singleline: "never"
      }],
      "vue/html-self-closing": ["error", {
        html: {
          component: "never",
          normal: "never",
          void: "any"
        },
        math: "never",
        svg: "never"
      }],
      "vue/max-attributes-per-line": ["error", {
        multiline: 1,
        singleline: {
          max: 3
        }
      }],
      "vue/no-restricted-syntax": [
        "error",
        "DebuggerStatement",
        "LabeledStatement",
        "WithStatement",
        ...banImportExtension("js"),
        ...banImportExtension("mjs"),
        ...banImportExtension("cjs"),
        ...banImportExtension("jsx"),
        ...banImportExtension("ts"),
        ...banImportExtension("mts"),
        ...banImportExtension("cts"),
        ...banImportExtension("tsx")
      ],
      "vue/comma-dangle": ["error", "never"],
      "vue/quote-props": "off"
    }
  } satisfies OptionsVue;

  if (options.uni) {
    merge(opts.overrides, {
      "vue/component-name-in-template-casing": ["error", "kebab-case"],
      "vue/custom-event-name-casing": "off",
      "vue/define-macros-order": ["error", {
        order: [
          "definePage",
          "defineOptions",
          "defineProps",
          "defineEmits",
          "defineSlots"
        ]
      }]
    });
  }

  return opts;
}