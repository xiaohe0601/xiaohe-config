import { antfu } from "@antfu/eslint-config";
import type { Awaitable } from "@xiaohe-config/shared";
import { perfectionist, uni } from "./configs";
import { detectCatalogUsage } from "./helpers";
import { resolveOptions } from "./options";
import type { Options, UserConfigItem } from "./types";

// eslint-disable-next-line ts/explicit-function-return-type
export async function defineConfig(
  options: Options = {},
  ...userConfigs: Awaitable<UserConfigItem>[]
) {
  const { xiaoheOptions, antfuOptions } = resolveOptions(options);

  const configs: Awaitable<UserConfigItem>[] = [];

  if (antfuOptions.pnpm) {
    const catalogs = await detectCatalogUsage();

    configs.push({
      files: ["pnpm-workspace.yaml"],
      rules: {
        "pnpm/yaml-enforce-settings": ["error", {
          settings: {
            shellEmulator: true,
            ...(catalogs ? { catalogMode: "prefer" } : {})
          }
        }]
      }
    });
  }

  configs.push(perfectionist());

  if (xiaoheOptions.uni) {
    configs.push(uni());
  }

  userConfigs.unshift(...configs);

  return antfu(antfuOptions, ...userConfigs);
}