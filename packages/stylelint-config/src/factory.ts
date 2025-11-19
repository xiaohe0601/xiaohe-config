import { isPkgExists, SCSS_PACKAGES, UNI_PACKAGES, VUE_PACKAGES } from "@xiaohe-config/shared";
import type { Config } from "stylelint";
import { core, css, html, scss, setup, vue } from "./configs";
import type { ConfigOverride, ConfigRules, Options, OptionsOverrides } from "./types";

export function defineConfig(
  options: Options = {},
  ...userOverrides: ConfigOverride[]
): Config {
  const {
    scss: enableScss = isPkgExists(SCSS_PACKAGES),
    html: enableHtml = true,
    vue: enableVue = isPkgExists(VUE_PACKAGES),
    uni: enableUni = isPkgExists(UNI_PACKAGES)
  } = options;

  const overrides = [
    ...setup({
      scss: !!enableScss,
      html: !!enableHtml,
      vue: !!enableVue
    }),
    ...core({
      overrides: getOverrides(options.core),
      vue: !!enableVue
    }),
    ...css({
      overrides: getOverrides(options.css)
    })
  ];

  if (enableScss) {
    overrides.push(
      ...scss({
        overrides: getOverrides(options.scss),
        vue: !!enableVue,
        uni: enableUni
      })
    );
  }

  if (enableHtml) {
    overrides.push(
      ...html({
        overrides: getOverrides(options.html)
      })
    );
  }

  if (enableVue) {
    overrides.push(
      ...vue({
        overrides: getOverrides(options.vue)
      })
    );
  }

  overrides.push(...userOverrides);

  return {
    defaultSeverity: "error",
    allowEmptyInput: true,
    overrides,
    rules: {},
    ...options
  };
}

function getOverrides(options?: boolean | OptionsOverrides): ConfigRules {
  if (options == null || typeof options === "boolean") {
    return {};
  }

  return options.overrides || {};
}