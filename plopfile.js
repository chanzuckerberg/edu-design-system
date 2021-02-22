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
        path:
          "packages/components/src/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component/Component.tsx.hbs",
      },
      {
        type: "add",
        path:
          "packages/components/src/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/Component/Component.stories.tsx.hbs",
      },
      {
        type: "add",
        path:
          "packages/components/src/{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
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
          const nameRegex = /default as ([^\s]*)/;
          const sorted = fs
            .readFileSync(indexFile, "utf8")
            .split(";\n")
            .sort((a, b) => {
              const aName = a.match(nameRegex)[1];
              const bName = b.match(nameRegex)[1];
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
