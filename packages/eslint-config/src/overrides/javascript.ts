import { banImportExtension } from "../helpers";
import type { OptionsJavascript } from "../types";

export function javascript(): OptionsJavascript {
  return {
    overrides: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-extra-boolean-cast": "off",
      "no-restricted-syntax": [
        "error",
        "TSEnumDeclaration[const=true]",
        "TSExportAssignment",
        ...banImportExtension("js"),
        ...banImportExtension("mjs"),
        ...banImportExtension("cjs"),
        ...banImportExtension("jsx"),
        ...banImportExtension("ts"),
        ...banImportExtension("mts"),
        ...banImportExtension("cts"),
        ...banImportExtension("tsx")
      ],
      "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }]
    }
  };
}