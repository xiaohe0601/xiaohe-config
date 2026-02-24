<div align="center">
  <h1>Xiaohe Catalog Rules</h1>
  <span>👌 Xiaohe's catalog rules preset</span>
</div>

<br>

[![github stars][github-stars-src]][github-stars-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

### 🚁 Installation

```shell
# pnpm
pnpm add -D @xiaohe01/catalog-rules

# yarn
yarn add --dev @xiaohe01/catalog-rules
```

### 🛹 Usage

Create `pncat.config.ts` in your project root:

```js
import { catalogRules } from "@xiaohe01/catalog-rules";
import { defineConfig } from "pncat";

export default defineConfig({
  catalogRules
});
```

Customize:

```js
import { catalogRules } from "@xiaohe01/catalog-rules";
import { defineConfig, mergeCatalogRules } from "pncat";

export default defineConfig({
  catalogRules: mergeCatalogRules(
    {
      mergeDefaults: false
    },
    catalogRules,
    [
      // ...
    ]
  )
});
```

For more information, please refer to [pncat](https://github.com/jinghaihan/pncat).

### 🏆 License

MIT [LICENSE](../../LICENSE)

[github-stars-src]: https://img.shields.io/github/stars/xiaohe0601/xiaohe-config?style=flat&color=1fa669&labelColor=18181b&logo=github
[github-stars-href]: https://github.com/xiaohe0601/xiaohe-config
[npm-version-src]: https://img.shields.io/npm/v/@xiaohe01/catalog-rules?style=flat&color=1fa669&labelColor=18181b&logo=npm
[npm-version-href]: https://npmjs.com/package/@xiaohe01/catalog-rules
[npm-downloads-src]: https://img.shields.io/npm/dm/@xiaohe01/catalog-rules?style=flat&color=1fa669&labelColor=18181b
[npm-downloads-href]: https://npmjs.com/package/@xiaohe01/catalog-rules
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-1fa669?style=flat&labelColor=18181b
[jsdocs-href]: https://www.jsdocs.io/package/@xiaohe01/catalog-rules
[license-src]: https://img.shields.io/github/license/xiaohe0601/xiaohe-config.svg?style=flat&color=1fa669&labelColor=18181b
[license-href]: https://github.com/xiaohe0601/xiaohe-config/blob/main/LICENSE