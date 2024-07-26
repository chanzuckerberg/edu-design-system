const { snakeCase } = require('lodash');

module.exports = (plop) => {
  plop.setHelper('spacedUpperCase', (txt) =>
    snakeCase(txt).split('_').join(' ').toUpperCase(),
  );

  // This helper allows us to place a variable inside curly braces without spaces
  // between the text and the braces.
  plop.setHelper('inBraces', (txt) => `{${txt}}`);

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
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.ts',
        templateFile: 'plop-templates/Component/Component.stories.ts.hbs',
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
      // Removed sort to avoid removing per-version component ordering and documentation (see diff for old code)
    ],
  });
};
