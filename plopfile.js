const pascalCase = require('pascal-case');
const { snakeCase } = require('snake-case');

module.exports = (plop) => {
  plop.setHelper('spacedUpperCase', (txt) =>
    snakeCase(txt).split('_').join(' ').toUpperCase(),
  );

  // This helper allows us to place a variable inside curly braces without spaces
  // between the text and the braces.
  plop.setHelper('inBraces', (txt) => `{${pascalCase.pascalCase(txt)}}`);

  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/Component/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'plop-templates/Component/Component.module.css.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.ts',
        templateFile: 'plop-templates/Component/Component.test.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Component/index.ts.hbs',
      },
      {
        type: 'append',
        pattern: /;\n$/,
        separator: '',
        path: 'src/index.ts',
        template:
          "export { default as {{pascalCase name}} } from './components/{{pascalCase name}}';",
      },
      // From https://github.com/bradfrost/czi-vanilla-storybook
      function sortIndex() {
        process.chdir(plop.getPlopfilePath());

        const fs = require('fs');
        const indexFile = `${plop.getDestBasePath()}/src/index.ts`;

        if (fs.existsSync(indexFile)) {
          // Split the index file into lines.
          const lines = fs.readFileSync(indexFile, 'utf8').split('\n');
          // Only sort lines that begin with "export {" in order to ignore
          // comments and exported types.
          const sortableLines = lines.filter((line) =>
            /^export {.*/g.test(line),
          );
          // Ignore all other lines and turn them back into a string.
          const ignoreLines = lines
            .filter((line) => !/^export {.*/g.test(line))
            .join('\n');

          // Sort the sortable lines.
          const sortedLines = sortableLines
            .sort((a, b) => a.localeCompare(b))
            .join('\n');

          // Write all of the lines back to the file.
          fs.writeFileSync(indexFile, `${sortedLines}\n${ignoreLines}\n`);

          return `index.ts lines sorted`;
        }
      },
    ],
  });
};
