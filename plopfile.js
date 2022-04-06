module.exports = (plop) => {
  plop.setHelper('upperCase', (txt) => txt.toUpperCase());

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
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Component/Component.test.tsx.hbs',
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
          'export { default as {{pascalCase name}} } from "./components/{{pascalCase name}}";',
      },
      // From https://github.com/bradfrost/czi-vanilla-storybook
      function sortIndex() {
        process.chdir(plop.getPlopfilePath());

        const fs = require('fs');
        const indexFile = `${plop.getDestBasePath()}/src/index.ts`;

        if (fs.existsSync(indexFile)) {
          // Split the index file into lines.
          const lines = fs.readFileSync(indexFile, 'utf8').split('\n');

          // Sort the lines.
          const sorted = lines.sort((a, b) => a.localeCompare(b)).join('\n');

          // Write the sorted lines back to the file.
          fs.writeFileSync(indexFile, sorted + '\n');

          return `index.ts lines sorted`;
        }
      },
    ],
  });
  plop.setGenerator('recipe', {
    description: 'Create a recipe',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your recipe name (e.g. GlobalHeader)?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '.storybook/recipes/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Recipe/Recipe.tsx.hbs',
      },
      {
        type: 'add',
        path: '.storybook/recipes/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/Recipe/Recipe.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '.storybook/recipes/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'plop-templates/Recipe/Recipe.module.css.hbs',
      },
      {
        type: 'add',
        path: '.storybook/recipes/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Recipe/index.ts.hbs',
      },
    ],
  });
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name (e.g. Homepage)?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '.storybook/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Page/Page.tsx.hbs',
      },
      {
        type: 'add',
        path: '.storybook/pages/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/Page/Page.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '.storybook/pages/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Page/index.ts.hbs',
      },
    ],
  });
};
