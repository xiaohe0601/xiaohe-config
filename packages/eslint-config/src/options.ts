import { isPkgExists, merge, omit, pick, UNI_PACKAGES, VUE_PACKAGES } from "@xiaohe-config/shared";
import { findUpSync } from "find-up-simple";
import { javascript, stylistic, vue } from "./overrides";
import type { AntfuOptions, Options, XiaoheOptionsConfig } from "./types";

const xiaoheOptionsKeys = [
  "uni"
] satisfies Array<keyof XiaoheOptionsConfig>;

const customOptionsKeys = [
  "javascript",
  "stylistic",
  "vue"
] satisfies Array<keyof AntfuOptions>;

export function resolveOptions(options: Options): {
  xiaoheOptions: Required<XiaoheOptionsConfig>;
  antfuOptions: AntfuOptions;
} {
  const xiaoheOptions = merge(
    {
      uni: isPkgExists(UNI_PACKAGES)
    } satisfies XiaoheOptionsConfig,
    pick(options, xiaoheOptionsKeys)
  );

  const antfuOptions = merge(
    {
      javascript: {},
      markdown: false,
      pnpm: !!findUpSync("pnpm-workspace.yaml"),
      stylistic: true,
      vue: isPkgExists(VUE_PACKAGES)
    } satisfies AntfuOptions,
    omit(options, xiaoheOptionsKeys)
  );

  const customOptions: Pick<AntfuOptions, typeof customOptionsKeys[number]> = {
    javascript: getOverridesOptions(antfuOptions.javascript, javascript()),
    stylistic: getOverridesOptions(antfuOptions.stylistic, stylistic()),
    vue: getOverridesOptions(antfuOptions.vue, vue({
      uni: xiaoheOptions.uni
    }))
  };

  return {
    xiaoheOptions,
    antfuOptions: {
      ...customOptions,
      ...omit(antfuOptions, customOptionsKeys)
    }
  };
}

function getOverridesOptions<T extends object>(options: false, overrides: T): false;
function getOverridesOptions<T extends object>(options: true, overrides: T): T;
function getOverridesOptions<T extends object>(options: T, overrides: T): T;
function getOverridesOptions<T extends object>(options: boolean | T, overrides: T): false | T;
function getOverridesOptions<T extends object>(options: boolean | T, overrides: T): false | T {
  if (options === false) {
    return false;
  }

  if (options === true) {
    return overrides;
  }

  return merge(overrides, options);
}