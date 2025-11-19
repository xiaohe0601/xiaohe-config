import type {
  OptionsConfig as AntfuOptionsConfig,
  OptionsOverrides,
  StylisticConfig,
  TypedFlatConfigItem
} from "@antfu/eslint-config";
import type { Linter } from "eslint";
import type { FlatConfigComposer } from "eslint-flat-config-utils";

export type { OptionsVue, TypedFlatConfigItem } from "@antfu/eslint-config";

export type OptionsJavascript = OptionsOverrides;
export type OptionsStylistic = StylisticConfig & OptionsOverrides;

export interface XiaoheOptionsConfig {
  /**
   * Enable uni-app rules.
   *
   * @default auto-detect based on the dependencies
   */
  uni?: boolean;
}

export type OptionsConfig = AntfuOptionsConfig & XiaoheOptionsConfig;

export type Options = OptionsConfig & Omit<TypedFlatConfigItem, "files">;
export type AntfuOptions = AntfuOptionsConfig & Omit<TypedFlatConfigItem, "files">;

export type UserConfigItem =
  | TypedFlatConfigItem
  | TypedFlatConfigItem[]
  | FlatConfigComposer<any, any>
  | Linter.Config[];

export interface OverridesOptionsVue {
  uni: boolean;
}