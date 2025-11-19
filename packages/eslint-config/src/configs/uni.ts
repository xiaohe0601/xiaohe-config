import type { TypedFlatConfigItem } from "../types";

export async function uni(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      name: "xiaohe/uni/setup",
      languageOptions: {
        globals: {
          dd: "readonly",
          jd: "readonly",
          ks: "readonly",
          my: "readonly",
          plus: "readonly",
          qa: "readonly",
          qh: "readonly",
          qq: "readonly",
          swan: "readonly",
          tt: "readonly",
          uni: "readonly",
          uniCloud: "readonly",
          weex: "readonly",
          wx: "readonly",
          xhs: "readonly"
        }
      }
    }
  ];
}