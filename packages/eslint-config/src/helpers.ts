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