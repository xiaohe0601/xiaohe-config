<div align="center">
  <h1>Xiaohe TSConfig</h1>
  <span>🤞 Xiaohe's TSConfig preset</span>
</div>

<br>

[![github stars][github-stars-src]][github-stars-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

### 🚁 Installation

```shell
# pnpm
pnpm add -D @xiaohe01/tsconfig

# yarn
yarn add --dev @xiaohe01/tsconfig

# npm
npm install -D @xiaohe01/tsconfig
```

### 🛹 Usage

#### Basic

```json5
// tsconfig.json

{
  "extends": "@xiaohe01/tsconfig/tsconfig.basic.json",
  "compilerOptions": {
    // ...
  }
}
```

#### Vue

```json5
// tsconfig.json

{
  "extends": [
    "@xiaohe01/tsconfig/tsconfig.basic.json",
    "@xiaohe01/tsconfig/tsconfig.vue.json"
  ],
  "compilerOptions": {
    // ...
  }
}
```

### 📋 List

- [@xiaohe01/tsconfig/tsconfig.basic.json](./tsconfig.basic.json)
- [@xiaohe01/tsconfig/tsconfig.dom.json](./tsconfig.dom.json)
- [@xiaohe01/tsconfig/tsconfig.vue.json](./tsconfig.vue.json)
- [@xiaohe01/tsconfig/tsconfig.lib.json](./tsconfig.lib.json)

### 🏆 License

MIT [LICENSE](../../LICENSE)

[github-stars-src]: https://img.shields.io/github/stars/xiaohe0601/xiaohe-config?style=flat&color=1fa669&labelColor=18181b&logo=github
[github-stars-href]: https://github.com/xiaohe0601/xiaohe-config
[npm-version-src]: https://img.shields.io/npm/v/@xiaohe01/tsconfig?style=flat&color=1fa669&labelColor=18181b&logo=npm
[npm-version-href]: https://npmjs.com/package/@xiaohe01/tsconfig
[npm-downloads-src]: https://img.shields.io/npm/dm/@xiaohe01/tsconfig?style=flat&color=1fa669&labelColor=18181b
[npm-downloads-href]: https://npmjs.com/package/@xiaohe01/tsconfig
[license-src]: https://img.shields.io/github/license/xiaohe0601/xiaohe-config.svg?style=flat&color=1fa669&labelColor=18181b
[license-href]: https://github.com/xiaohe0601/xiaohe-config/blob/main/LICENSE