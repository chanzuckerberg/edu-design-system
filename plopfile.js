module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/components/src/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "packages/components/src/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/Component/Component.module.css.hbs",
      },
      {
        type: "add",
        path: "packages/components/src/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/Component/Component.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "packages/components/src/{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
        templateFile: "plop-templates/Component/Component.spec.tsx.hbs",
      },
      {
        type: "add",
        path: "packages/components/src/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/Component/index.ts.hbs",
      },
      {
        type: "append",
        pattern: /;\n$/,
        separator: "",
        path: "packages/components/src/index.ts",
        template:
          'export { default as {{pascalCase name}} } from "./{{pascalCase name}}"',
      },
      // From https://github.com/bradfrost/czi-vanilla-storybook
      function sortIndex() {
        process.chdir(plop.getPlopfilePath());

        const fs = require("fs");
        const indexFile = `${plop.getDestBasePath()}/packages/components/src/index.ts`;

        if (fs.existsSync(indexFile)) {
          const lines = fs.readFileSync(indexFile, "utf8").split(";\n");
          const sorted = lines
            .sort((a, b) => {
              const aName = getNameFromExport(a);
              const bName = getNameFromExport(b);
              return aName.localeCompare(bName);
            })
            .join(";\n");
          fs.writeFileSync(indexFile, sorted + ";\n");
          return `index.ts lines sorted`;
        }
      },
    ],
  });
};

/**
 * Extract an exported name from an export statement.
 *
 * @example
 * getNameFromExport('export { default as FooBear } from "./FooBear";');
 * // => 'FooBear'
 *
 * @example
 * getNameFromExport('export type { FooBat } from "./FooBat";');
 * // => 'FooBat'
 */
function getNameFromExport(exportLine) {
  // Get the exported name. We have to handle cases like `export { default as Foo }` and
  // `export type { Foo }`. To match these cases, this is currently looking for:
  //
  // 1. Opening curly bracket, for either `export {` or `export type {`.
  // 2. Any characters immediately after the opening bracket. Mostly to match `default as`.
  // 3. Capture the name of the thing that's exported.
  // 4. Closing curly bracket.
  //
  //                            1 2   3    4
  //                            ┃ ┃ ┏━┻━┓  ┃
  const exportedNamePattern = /\{ .*(\w+) \}/;
  const matches = exportLine.match(exportedNamePattern);

  if (!matches) {
    throw new Error(
      `Oh dear, I couldn't recognize an exported name in '${exportLine}' 😑`,
    );
  }

  return matches[0];
}
