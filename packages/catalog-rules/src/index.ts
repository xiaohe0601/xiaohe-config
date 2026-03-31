import type { CatalogRule } from "pncat";

export const catalogRules: CatalogRule[] = [
  {
    name: "xiaohe",
    priority: 1,
    match: [
      /^@xiaohe01\//
    ]
  },
  {
    name: "dcloudio",
    priority: 1,
    match: [
      /^@dcloudio\//
    ]
  },

  {
    name: "types",
    priority: 10,
    match: [
      /^@types\//,
      /\btypes\b/,
      /\btypings\b/
    ]
  },

  {
    name: "build",
    priority: 20,
    match: [
      "@uni-helper/plugin-uni",
      "terser",
      /rolldown/,
      /rollup/,
      /tsdown/,
      /tsup/,
      /unbuild/,
      /unplugin/,
      /\bvite\b/,
      /vitejs/
    ]
  },
  {
    name: "docs",
    priority: 20,
    match: [
      /vitepress/
    ]
  },
  {
    name: "lint",
    priority: 20,
    match: [
      "husky",
      "lint-staged",
      /eslint/,
      /git-hooks/,
      /stylelint/
    ]
  },
  {
    name: "test",
    priority: 20,
    match: [
      /jest/,
      /test/,
      /vitest/
    ]
  },

  {
    name: "cli",
    priority: 30,
    match: [
      "@antfu/ni",
      "@uni-helper/unh",
      "bumpp",
      "minimist",
      "pncat"
    ]
  },
  {
    name: "i18n",
    priority: 30,
    match: [
      /i18n/,
      /intl/
    ]
  },
  {
    name: "icons",
    priority: 30,
    match: [
      /iconify/,
      /icons/,
      /lucide/
    ]
  },
  {
    name: "parser",
    priority: 30,
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
    name: "script",
    priority: 30,
    match: [
      "esno",
      "jiti",
      "tsx",
      "unrun"
    ]
  },
  {
    name: "syntax",
    priority: 30,
    match: [
      /highlight/,
      /katex/,
      /mermaid/,
      /prismjs/,
      /shiki/
    ]
  },

  {
    name: "ai",
    priority: 40,
    match: [
      "ai",
      /ai-sdk/,
      /agent-sdk/
    ]
  },
  {
    name: "node",
    priority: 40,
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
      /find-/,
      /fs(?=-)|(?<=-)fs/,
      /pkg(?=-)|(?<=-)pkg/
    ]
  },
  {
    name: "network",
    priority: 40,
    match: [
      "picoquery",
      /alova/,
      /axios/
    ]
  },
  {
    name: "style",
    priority: 40,
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
    name: "tsc",
    priority: 40,
    match: [
      /tsc/,
      /tsconfig/,
      /typescript/
    ]
  },
  {
    name: "utils",
    priority: 40,
    match: [
      "es-toolkit",
      /^@vueuse\//,
      /dayjs/,
      /lodash/,
      /magic-string/,
      /nanoid/,
      /utils/,
      /zod/
    ]
  },

  {
    name: "backend",
    priority: 50,
    match: [
      /drizzle/,
      /express/,
      /fastify/,
      /hono/,
      /koa/,
      /kysely/,
      /mongodb/,
      /mysql/,
      /nestjs/,
      /nitro/,
      /pg/,
      /postgres/,
      /prisma/,
      /redis/,
      /sqlite/,
      /typeorm/
    ]
  },
  {
    name: "frontend",
    priority: 50,
    match: [
      /color/,
      /angular/,
      /antd/,
      /d3/,
      /design/,
      /echarts/,
      /element/,
      /monaco/,
      /motion/,
      /pinia/,
      /react/,
      /redux/,
      /solid/,
      /svelte/,
      /swiper/,
      /three/,
      /vant/,
      /zustand/,
      /vue/,
      /-ui|\/ui/
    ]
  }
];