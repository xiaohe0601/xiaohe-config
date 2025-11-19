<div align="center">
  <h1>Xiaohe Stylelint Config</h1>
  <span>🤚 Xiaohe's Stylelint config preset (inspired by antfu/eslint-config)</span>
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
pnpm add -D stylelint @xiaohe01/stylelint-config

# yarn
yarn add --dev stylelint @xiaohe01/stylelint-config

# npm
npm install -D stylelint @xiaohe01/stylelint-config
```

> [!WARNING]
> Require Stylelint >= 16.13.0.

### 🛹 Usage

Create `stylelint.config.mjs` in your project root:

```js
import { defineConfig } from "@xiaohe01/stylelint-config";

export default defineConfig();
```

Add script for `package.json`, for example:

```json
{
  "scripts": {
    "stylelint": "stylelint **/*.{css,scss,html,vue}",
    "stylelint:fix": "stylelint **/*.{css,scss,html,vue} --fix"
  }
}
```

For more information, please refer to [stylelint](https://stylelint.io).

### 🏆 License

MIT [LICENSE](../../LICENSE)

[github-stars-src]: https://img.shields.io/github/stars/xiaohe0601/xiaohe-config?style=flat&color=1fa669&labelColor=18181b&logo=github
[github-stars-href]: https://github.com/xiaohe0601/xiaohe-config
[npm-version-src]: https://img.shields.io/npm/v/@xiaohe01/stylelint-config?style=flat&color=1fa669&labelColor=18181b&logo=npm
[npm-version-href]: https://npmjs.com/package/@xiaohe01/stylelint-config
[npm-downloads-src]: https://img.shields.io/npm/dm/@xiaohe01/stylelint-config?style=flat&color=1fa669&labelColor=18181b
[npm-downloads-href]: https://npmjs.com/package/@xiaohe01/stylelint-config
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-1fa669?style=flat&labelColor=18181b
[jsdocs-href]: https://www.jsdocs.io/package/@xiaohe01/stylelint-config
[license-src]: https://img.shields.io/github/license/xiaohe0601/xiaohe-config.svg?style=flat&color=1fa669&labelColor=18181b
[license-href]: https://github.com/xiaohe0601/xiaohe-config/blob/main/LICENSE