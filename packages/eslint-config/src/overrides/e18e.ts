import type { OptionsE18e } from "../types";

export function e18e(): OptionsE18e {
  return {
    overrides: {
      "e18e/prefer-static-regex": "off"
    }
  };
}