import { antfu } from "@antfu/eslint-config";
import type { Awaitable } from "@xiaohe-config/shared";
import { perfectionist, uni } from "./configs";
import { resolveOptions } from "./options";
import type {
  ConfigNames,
  FlatConfigComposer,
  Options,
  TypedFlatConfigItem,
  UserConfigItem
} from "./types";

export async function defineConfig(
  options: Options = {},
  ...userConfigs: Awaitable<UserConfigItem>[]
): Promise<FlatConfigComposer<TypedFlatConfigItem, ConfigNames>> {
  const { xiaoheOptions, antfuOptions } = resolveOptions(options);

  const configs: Awaitable<UserConfigItem>[] = [];

  if (antfuOptions.pnpm) {
    configs.push({
      files: ["pnpm-workspace.yaml"],
      rules: {
        "pnpm/yaml-enforce-settings": ["error", {
          settings: {
            shellEmulator: true
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