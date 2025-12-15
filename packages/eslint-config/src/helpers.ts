import fs from "node:fs/promises";
import { findUp } from "find-up-simple";

export async function detectCatalogUsage(): Promise<boolean> {
  const workspaceFile = await findUp("pnpm-workspace.yaml");

  if (!workspaceFile) {
    return false;
  }

  const yaml = await fs.readFile(workspaceFile, "utf-8");

  return yaml.includes("catalog:") || yaml.includes("catalogs:");
}

// eslint-disable-next-line ts/explicit-function-return-type
export function banImportExtension(extension: string) {
  const message = `Unexpected use of file extension (.${extension}) in import`;
  const literalAttributeMatcher = `Literal[value=/\\.${extension}$/]`;

  return [
    {
      message,
      // import foo from 'bar.js';
      selector: `ImportDeclaration > ${literalAttributeMatcher}.source`
    },
    {
      message,
      // const foo = import('bar.js');
      selector: `ImportExpression > ${literalAttributeMatcher}.source`
    },
    {
      message,
      // type Foo = typeof import('bar.js');
      selector: `TSImportType > TSLiteralType > ${literalAttributeMatcher}`
    },
    {
      message,
      // const foo = require('foo.js');
      selector: `CallExpression[callee.name = "require"] > ${literalAttributeMatcher}.arguments`
    }
  ];
}