import { antfu } from "@antfu/eslint-config";
import type { Awaitable } from "@xiaohe-config/shared";
import { uni } from "./configs";
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

  if (xiaoheOptions.uni) {
    configs.push(uni());
  }

  userConfigs.unshift(...configs);

  return antfu(antfuOptions, ...userConfigs);
}