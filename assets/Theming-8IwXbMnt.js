import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,p as n}from"./blocks-BjY7-UTM.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,r as a}from"./react-BJryJUio.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Documentation/Theming/Using EDS Theming`}),`
`,(0,c.jsx)(n.h1,{id:`using-eds-theming`,children:`Using EDS Theming`}),`
`,(0,c.jsx)(n.p,{children:`Below are instructions on how to use the tooling, configs, and tokens to define custom theme values for a project.`}),`
`,(0,c.jsx)(n.h2,{id:`using-tailwind-with-the-default-theme`,children:`Using Tailwind with the Default Theme`}),`
`,(0,c.jsxs)(n.p,{children:[`Out of the box, EDS provides a comprehensive `,(0,c.jsx)(n.a,{href:`https://v3.tailwindcss.com/`,rel:`nofollow`,children:`tailwind 3.x`}),` configuration to use in any project. The provided EDS tailwind config hooks up EDS tokens to useful utility classes and some screen sizes. To import the tailwind config into the app's tailwind config, supply the `,(0,c.jsx)(n.a,{href:`https://v3.tailwindcss.com/docs/theme`,rel:`nofollow`,children:`theme`}),` property for use:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`// in your tailwind.config.ts
import edsConfig from '@chanzuckerberg/eds/tailwind.config';

module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: edsConfig.theme,
  darkMode: edsConfig.darkMode, // see "Tailwind dark mode" below
  // ... any other tailwind config
};
`})}),`
`,(0,c.jsxs)(n.p,{children:[`If you need to preserve any existing theme values, you can use `,(0,c.jsx)(n.code,{children:`extend`}),` and pull contents from the imported theme file.`]}),`
`,(0,c.jsxs)(n.p,{children:[`You can review the `,(0,c.jsx)(n.a,{href:`https://v3.tailwindcss.com/docs/theme`,rel:`nofollow`,children:`Tailwind Theme Customization`}),` documentation, and the contents of the `,(0,c.jsx)(n.a,{href:`https://github.com/chanzuckerberg/edu-design-system/blob/main/tailwind.config.mts`,rel:`nofollow`,children:`provided config`}),`, and apply the parts you want to use.`]}),`
`,(0,c.jsx)(n.h3,{id:`tailwind-color-options-and-guidance`,children:`Tailwind color options and guidance`}),`
`,(0,c.jsx)(n.p,{children:`With the proper tailwind setup, there are several options one can use to access the EDS tokens. Here are guidelines
for which utility classes to use when you need color tokens (in order of preference):`}),`
`,(0,c.jsx)(n.h4,{id:`-using-eds-token-utility-classes`,children:`✅ Using EDS token utility classes`}),`
`,(0,c.jsx)(n.p,{children:`These map to the higher-tier token names, and are semantic- (or component-) based.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`<div className="text-utility-interactive-primary-visited">Option 1</div>
`})}),`
`,(0,c.jsx)(n.h4,{id:`-token-name-references-using-css-variables`,children:`✅ Token name references using CSS variables`}),`
`,(0,c.jsx)(n.p,{children:`If there is no existing utility class for the use case, you can reference the token directly in a class. While less preferable to the above, this still plugs into EDS.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`<div className="bg-[var(--eds-theme-color-text-utility-interactive-primary-visited)]">
  Option 2
</div>
`})}),`
`,(0,c.jsx)(n.p,{children:`Cons:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`less useful IntelliSense (no color chip)`}),`
`,(0,c.jsx)(n.li,{children:`longer class names that may cause wrapping, and are harder to scan visually`}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`-token-name-references-pointing-to-tier-1-primitive-tokens`,children:`❌ Token name references pointing to tier-1 (primitive) tokens`}),`
`,(0,c.jsx)(n.p,{children:`This is similar to the above, but instead of using semantically-named tokens, uses the raw token primitives. This is equivalent to hard-coding magic numbers and has the same consequences.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`<div className="bg-[var(--eds-color-purple-550)]">Option 3</div>
`})}),`
`,(0,c.jsx)(n.p,{children:`Cons (same as above, plus):`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`would require delicate refactoring if any usages change (which references should remain and which should change?)`}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`-using-inline-hex-values`,children:`❌ Using inline hex values`}),`
`,(0,c.jsx)(n.p,{children:`This is the worst option, which fully detaches from EDS. ONLY appropriate if there is no intent to be consistent with the rest of the app theme. Use at your own risk!`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`<div className="bg-[#8A50A7]">Option 4</div>
`})}),`
`,(0,c.jsx)(n.h4,{id:`-using-tailwind-default-values`,children:`❌ Using tailwind default values`}),`
`,(0,c.jsx)(n.p,{children:`This is the next worst option, which fully detaches from EDS. ONLY appropriate if there is no intent to be consistent with the rest of the app theme. Use at your own risk!`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`<div className="bg-gray-100">Option 4</div>
`})}),`
`,(0,c.jsx)(n.p,{children:`Cons (same as above, plus):`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`fully detached from EDS, and harder to control or maintain.`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`tailwind-dark-mode`,children:`Tailwind dark mode`}),`
`,(0,c.jsxs)(n.p,{children:[`The EDS tailwind config includes the dark theme (tier 2) color tokens, under a `,(0,c.jsx)(n.code,{children:`dark-`}),` prefix. These map to the `,(0,c.jsx)(n.code,{children:`--eds-dark-theme-*`}),` CSS variables, so `,(0,c.jsx)(n.code,{children:`--eds-dark-theme-color-background-utility-base-1`}),` becomes `,(0,c.jsx)(n.code,{children:`bg-dark-utility-base-1`}),`. Pair each with its light counterpart, using the `,(0,c.jsxs)(n.a,{href:`https://v3.tailwindcss.com/docs/dark-mode`,rel:`nofollow`,children:[(0,c.jsx)(n.code,{children:`dark:`}),` variant`]}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`<div className="bg-utility-base-1 text-utility-default-primary dark:bg-dark-utility-base-1 dark:text-dark-utility-default-primary">
  Light and dark
</div>
`})}),`
`,(0,c.jsxs)(n.p,{children:[`To make the `,(0,c.jsx)(n.code,{children:`dark:`}),` variant match how EDS applies dark mode, use the `,(0,c.jsx)(n.code,{children:`darkMode`}),` value from the EDS config (as shown above). It follows the system color scheme preference, unless overridden by setting `,(0,c.jsx)(n.code,{children:`data-theme="light"`}),` or `,(0,c.jsx)(n.code,{children:`data-theme="dark"`}),` on the `,(0,c.jsx)(n.code,{children:`html`}),` element (e.g., `,(0,c.jsx)(n.code,{children:`<html data-theme="dark">`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`NOTE`}),`: this `,(0,c.jsx)(n.code,{children:`darkMode`}),` setting requires tailwind 3.4.1 or newer.`]}),`
`,(0,c.jsx)(`hr`,{}),`
`,(0,c.jsx)(n.h2,{id:`setting-up-and-using-the-theming-tooling`,children:`Setting up and using the theming tooling`}),`
`,(0,c.jsx)(n.p,{children:`EDS comes with some optional tooling to allow easy transfer of theme data from Figma (or some style-dictionary compatible format) into code.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`eds-init-theme`}),` - This command creates the initial file(s) for theming your application`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`eds-apply-theme`}),` - This command parses the local config file to generate the tokens used by EDS components and tools`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`eds-import-from-figma-api`}),` - This command reads from figma, and applies token values to the theme in the app`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Each of these tools reads config to figure out where to read/write files.`}),`
`,(0,c.jsxs)(n.p,{children:[`First, create a configuration file to determine the source and destination directories. This can be defined in a new file `,(0,c.jsx)(n.code,{children:`.edsrc.json`}),` in your project root. Example:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`// in a new file .edsrc.json
{
  "src": "src/components/",
  "dest": "src/components/"
}
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`src`}),` determines where the core theme file will be copied to (upon running `,(0,c.jsx)(n.code,{children:`eds-init-theme`}),`) OR read from (upon running `,(0,c.jsx)(n.code,{children:`eds-apply-theme`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dest`}),` determines where the generated CSS variable files will be written to (upon using `,(0,c.jsx)(n.code,{children:`eds-apply-theme`}),`). Once creating the config file, you can use the commands below.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`eds-init-theme`,children:`eds-init-theme`}),`
`,(0,c.jsxs)(n.p,{children:[`Command to run: `,(0,c.jsx)(n.code,{children:`npx eds-init-theme`})]}),`
`,(0,c.jsxs)(n.p,{children:[`This will create two new JSON files in the configured `,(0,c.jsx)(n.code,{children:`src`}),` path in your project, which define ALL the available tokens for EDS that you can edit:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app-theme.json`}),` (the theme tokens, plus the tier 1 tokens they use)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app-theme-dark.json`}),` (the dark theme (tier 2) tokens, under `,(0,c.jsx)(n.code,{children:`eds.dark.theme`}),`)`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`These files are a baseline config to be used later in the process.`}),`
`,(0,c.jsxs)(n.p,{children:[`If a theme file already exists, it is left alone. For projects themed before EDS supported dark mode, run `,(0,c.jsx)(n.code,{children:`npx eds-init-theme`}),` again to add `,(0,c.jsx)(n.code,{children:`app-theme-dark.json`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`eds-apply-theme`,children:`eds-apply-theme`}),`
`,(0,c.jsxs)(n.p,{children:[`Command to run: `,(0,c.jsx)(n.code,{children:`npx eds-apply-theme`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Using `,(0,c.jsx)(n.code,{children:`eds-apply-theme`}),` will read in the newly-created `,(0,c.jsx)(n.code,{children:`app-theme.json`}),` and `,(0,c.jsx)(n.code,{children:`app-theme-dark.json`}),` files, and create the tokens to use in your project.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Once run, you will have a set of theme files written to the configured `,(0,c.jsx)(n.code,{children:`dest`}),` path:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app-theme.css`}),` (CSS file containing custom CSS variables with the theme values for the application)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app-tailwind-theme.config.json`}),` (Configuration file for configuring tailwind in the application)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app-theme-dark.css`}),` (CSS file containing the `,(0,c.jsx)(n.code,{children:`--eds-dark-theme-*`}),` CSS variables with the dark theme values)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app-tailwind-dark-theme.config.json`}),` (Configuration file for the dark theme tailwind colors)`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`The dark theme files are only generated when `,(0,c.jsx)(n.code,{children:`app-theme-dark.json`}),` exists.`]}),`
`,(0,c.jsxs)(n.p,{children:[`To use, add the CSS files to your core app root file `,(0,c.jsx)(n.strong,{children:`after`}),` where the imported EDS's `,(0,c.jsx)(n.code,{children:`@chanzuckerberg/eds/index.css`}),` file is inserted.`]}),`
`,(0,c.jsxs)(n.p,{children:[`For setting up Storybook, refer to `,(0,c.jsx)(n.a,{href:`?path=/docs/documentation-theming-using-eds-theming-with-storybook--docs`,children:`storybook documentation`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`eds-import-from-figma-api`,children:`eds-import-from-figma-api`}),`
`,(0,c.jsxs)(n.p,{children:[`Command to run: `,(0,c.jsx)(n.code,{children:`npx eds-import-from-figma-api`})]}),`
`,(0,c.jsxs)(n.p,{children:[`When using a `,(0,c.jsx)(n.a,{href:`https://www.figma.com/enterprise/`,rel:`nofollow`,children:`Figma Enterprise account`}),`, core design system files can be accessed to extract the token values, `,(0,c.jsx)(n.a,{href:`https://www.figma.com/developers/api`,rel:`nofollow`,children:`using the API`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Example:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`npx eds-import-from-figma-api file <file_id> --token <personal_access_token>
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`NOTE`}),`: when using this method, it requires both the figma file ID (e.g., `,(0,c.jsx)(n.code,{children:`figma.com/design/<file_id>/`}),`), and an API token. Instructions from Figma `,(0,c.jsx)(n.a,{href:`https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens`,rel:`nofollow`,children:`are here`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`NOTE`}),`: the figma file ID should refer to the Foundations file which defines the core tokens used by EDS.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`NOTE`}),`: the tooling currently does not pull in any typography tokens from figma. Work with your design partner(s) to add the appropriate values from figma into code.`]}),`
`,(0,c.jsx)(n.h4,{id:`importing-dark-mode-values`,children:`Importing dark mode values`}),`
`,(0,c.jsxs)(n.p,{children:[`After selecting the theme, the command asks for the mode containing that theme's dark values. It suggests a mode with "dark" in its name (e.g., "Brand Dark" for the "Brand" theme). Select `,(0,c.jsx)(n.strong,{children:`Skip`}),` if the theme has no dark mode.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Theme values are written to `,(0,c.jsx)(n.code,{children:`app-theme.json`}),`, and dark values to `,(0,c.jsx)(n.code,{children:`app-theme-dark.json`}),`. If `,(0,c.jsx)(n.code,{children:`app-theme-dark.json`}),` does not exist, the dark values are skipped with a warning; run `,(0,c.jsx)(n.code,{children:`npx eds-init-theme`}),` to create it. Then, run `,(0,c.jsx)(n.code,{children:`npx eds-apply-theme`}),` to regenerate the theme files.`]}),`
`,(0,c.jsxs)(n.p,{children:[`When working in EDS itself (using `,(0,c.jsx)(n.code,{children:`--local`}),`), the values are written to `,(0,c.jsx)(n.code,{children:`src/design-tokens/core-tokens.json`}),` and `,(0,c.jsx)(n.code,{children:`src/design-tokens/core-dark-tokens.json`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`custom-theming-and-tailwind`,children:`Custom Theming and Tailwind`}),`
`,(0,c.jsxs)(n.p,{children:[`When you have your own custom theme, you can use the tokens provided in `,(0,c.jsx)(n.code,{children:`app-tailwind-theme.config.json`}),` to do advanced tailwind configuration. This file contains all the tokens in JSON format, mapped to the literal values in your local theme.`]}),`
`,(0,c.jsx)(n.p,{children:`EDS provides a utility method to pull in the theme config and generate the proper tailwind 3.x config object.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`NOTE`}),`: Tailwind 4.x support to come in a future release of EDS.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`// in your tailwind.config.ts file
import type { Config } from 'tailwindcss';
import edsConfig, {applyTailwindConfig} from '@chanzuckerberg/eds/tailwind.config';
import {eds as customTokens} from "./<edsrc.json:dest>/app-tailwind-theme.config.json"; // where <edsrc.json:dest> is the path configured in .edsrc.json
import {eds as customDarkTokens} from "./<edsrc.json:dest>/app-tailwind-dark-theme.config.json"; // optional, adds the dark- colors (see "Tailwind dark mode")

// export the following
export default {
  // your project's \`content\` array
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  darkMode: edsConfig.darkMode,
  theme: {
    ...applyTailwindConfig(customTokens, customDarkTokens)
    // ...any local theme overrides and additions...
  },
} satisfies Config

`})}),`
`,(0,c.jsx)(n.h2,{id:`manually-setting-up-a-theme`,children:`Manually setting up a theme`}),`
`,(0,c.jsxs)(n.p,{children:[`Without access to the Figma API, you can edit the theme files by hand. Each token is a JSON object with a `,(0,c.jsx)(n.code,{children:`value`}),`, and its path matches the CSS variable name. For example, this sets `,(0,c.jsx)(n.code,{children:`--eds-theme-color-background-utility-base-1`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`// in app-theme.json
{
  "eds": {
    "theme": {
      "color": {
        "background": {
          "utility": {
            "base": {
              "1": {
                "value": "#FFFFFF"
              }
            }
          }
        }
      }
    }
  }
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`The dark theme uses the same structure, under `,(0,c.jsx)(n.code,{children:`eds.dark.theme`}),`, and sets the matching `,(0,c.jsx)(n.code,{children:`--eds-dark-theme-*`}),` CSS variable:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`// in app-theme-dark.json
{
  "eds": {
    "dark": {
      "theme": {
        "color": {
          "background": {
            "utility": {
              "base": {
                "1": {
                  "value": "#1A1A1A"
                }
              }
            }
          }
        }
      }
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:`A few rules apply:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Only edit tokens that already exist in the files from `,(0,c.jsx)(n.code,{children:`eds-init-theme`}),`. Tokens EDS doesn't define have no effect on components.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Use theme (tier 2) tokens for color changes. Tier 1 tokens (e.g., `,(0,c.jsx)(n.code,{children:`eds.color.*`}),`) are shared across all themes.`]}),`
`,(0,c.jsx)(n.li,{children:`Keep light and dark values in sync: EDS components use the theme value in light mode, and the dark theme value in dark mode, so a token changed in one file usually needs a matching change in the other.`}),`
`,(0,c.jsxs)(n.li,{children:[`Values can be literals (e.g., `,(0,c.jsx)(n.code,{children:`"#FFFFFF"`}),`), or references to other tokens in the same file (e.g., `,(0,c.jsx)(n.code,{children:`"{eds.color.white}"`}),` in `,(0,c.jsx)(n.code,{children:`app-theme.json`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Once done, run `,(0,c.jsx)(n.code,{children:`npx eds-apply-theme`}),` to regenerate the CSS and tailwind files.`]}),`
`,(0,c.jsx)(`hr`,{}),`
`,(0,c.jsxs)(n.p,{children:[`If there are any future updates to the theme, edit the contents of `,(0,c.jsx)(n.code,{children:`app-theme.json`}),` and `,(0,c.jsx)(n.code,{children:`app-theme-dark.json`}),`, then re-run `,(0,c.jsx)(n.code,{children:`npx eds-apply-theme`}),`. Then commit the changes, and that's it!`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),n()})))()}l();export{s as default};