import type { CatalogRule } from "pncat";

export const catalogRules: CatalogRule[] = [
  {
    name: "xiaohe",
    priority: 1,
    match: [
      /^@xiaohe01/
    ]
  },
  {
    name: "dcloudio",
    priority: 5,
    match: [
      /^@dcloudio/
    ]
  },
  {
    name: "types",
    priority: 10,
    match: [
      /types\b/,
      /@types/,
      /typings/
    ]
  },
  {
    name: "cli",
    priority: 20,
    match: [
      "@antfu/ni",
      "@uni-helper/unh",
      "commitizen",
      "cz-git",
      "minimist",
      "pncat",
      "taze",
      /bump/
    ]
  },
  {
    name: "lint",
    priority: 20,
    match: [
      "husky",
      /biome/,
      /git-hooks/,
      /lint/,
      /prettier/
    ]
  },
  {
    name: "monorepo",
    priority: 20,
    match: [
      /lerna/,
      /turbo/
    ]
  },
  {
    name: "e2e",
    priority: 30,
    match: [
      /chromium/,
      /cypress/,
      /nightwatch/,
      /playwright/,
      /puppeteer/,
      /webdriverio/
    ]
  },
  {
    name: "test",
    priority: 30,
    match: [
      /jest/,
      /test/,
      /vitest/
    ]
  },
  {
    name: "build",
    priority: 40,
    match: [
      "@uni-helper/plugin-uni",
      /build/,
      /napi/,
      /rolldown/,
      /rollup/,
      /rspack/,
      /terser/,
      /tsdown/,
      /tsup/,
      /unplugin/,
      /vite/,
      /webpack/
    ]
  },
  {
    name: "docs",
    priority: 40,
    match: [
      /vitepress/,
      /vuepress/
    ]
  },
  {
    name: "i18n",
    priority: 40,
    match: [
      "next-intl",
      /i18n/
    ]
  },
  {
    name: "script",
    priority: 40,
    match: [
      "esno",
      "unrun",
      /jiti/,
      /tsx/
    ]
  },
  {
    name: "icons",
    priority: 50,
    match: [
      /icon/,
      /iconify/,
      /lucide/
    ]
  },
  {
    name: "markdown",
    priority: 50,
    match: [
      /markdown/,
      /streamdown/,
      /turndown/
    ]
  },
  {
    name: "network",
    priority: 50,
    match: [
      "picoquery",
      "qs",
      "ws",
      /alova/,
      /axios/,
      /fetch/,
      /websocket/
    ]
  },
  {
    name: "parser",
    priority: 50,
    match: [
      /acorn/,
      /babel/,
      /buble/,
      /esprima/,
      /marked/,
      /mdast/,
      /micromark/,
      /oxc/,
      /swc/,
      /([/-]|^)ast([/-]|$)/
    ]
  },
  {
    name: "server",
    priority: 50,
    match: [
      "nitropack",
      /express/,
      /fastify/,
      /koa/
    ]
  },
  {
    name: "style",
    priority: 50,
    match: [
      "clsx",
      "ress",
      /autoprefixer/,
      /css/,
      /less/,
      /sass/,
      /tailwind/
    ]
  },
  {
    name: "syntax",
    priority: 50,
    match: [
      /highlight/,
      /katex/,
      /mermaid/,
      /prismjs/,
      /shiki/
    ]
  },
  {
    name: "tsc",
    priority: 50,
    match: [
      /tsc/,
      /tsconfig/,
      /typescript/
    ]
  },
  {
    name: "vscode",
    priority: 50,
    match: [
      /vscode/
    ]
  },
  {
    name: "ai",
    priority: 60,
    match: [
      "ai",
      /@ai-sdk/,
      /agent-sdk/
    ]
  },
  {
    name: "database",
    priority: 60,
    match: [
      "pg",
      /database/,
      /datastore/,
      /mongo/,
      /orm/,
      /postgres/,
      /prisma/,
      /sql/,
      /supabase/
    ]
  },
  {
    name: "frontend",
    priority: 60,
    match: [
      "color",
      /angular/,
      /antd/,
      /component/,
      /d3/,
      /design/,
      /dnd/,
      /element/,
      /monaco/,
      /motion/,
      /pinia/,
      /react/,
      /redux/,
      /svelte/,
      /swiper/,
      /three/,
      /vant/,
      /vue/,
      /zustand/,
      /-ui|\/ui/
    ]
  },
  {
    name: "node",
    priority: 60,
    match: [
      "cac",
      "consola",
      "unconfig",
      /ansi/,
      /chalk/,
      /chokidar/,
      /env/,
      /exec/,
      /glob/,
      /kill/,
      /prompts/,
      /resolve/,
      /rimraf/,
      /shadcn/,
      /tar/,
      /zip/,
      /cli-/,
      /find-/,
      /fs(?=-)|(?<=-)fs/,
      /pkg(?=-)|(?<=-)pkg/
    ]
  },
  {
    name: "utils",
    priority: 60,
    match: [
      "es-toolkit",
      /@vueuse\//,
      /dayjs/,
      /lodash/,
      /magic-string/,
      /nanoid/,
      /utils/,
      /zod/
    ]
  }
];