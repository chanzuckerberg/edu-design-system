import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-BnFW0aKX.js";import{M as n,f as r,g as i}from"./iframe-CxYcUItw.js";import{t as a}from"./mdx-react-shim-BXtN3sNq.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Documentation/Contributor Guidelines/Adding Components`}),`
`,(0,c.jsx)(n.h1,{id:`working-with-eds-components`,children:`Working with EDS Components`}),`
`,(0,c.jsx)(n.p,{children:`This codebase contains all the tokens and components to successfully build the presentation
view of product screens. These components are built to exactly match those seen in design mockups.`}),`
`,(0,c.jsx)(n.h2,{id:`working-with-components`,children:`Working with components`}),`
`,(0,c.jsx)(n.h3,{id:`using-components`,children:`Using components`}),`
`,(0,c.jsx)(n.p,{children:`Using EDS components in your React application involves first installing the EDS package as a dependency:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm install @chanzuckerberg/eds
# or
yarn add @chanzuckerberg/eds
`})}),`
`,(0,c.jsx)(n.p,{children:`Next, import any needed components from the EDS component library into your application like so:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-js`,children:`import { Button } from '@chanzuckerberg/eds';
`})}),`
`,(0,c.jsx)(n.p,{children:`From there, call EDS components in your React application and pass in the desired values into each component's API:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-jsx`,children:`<Button
  rank="primary"
  onClick={...}
>
  Submit
  <Icon name="arrow-right" purpose="decorative" />
</Button>
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Each EDS component is documented in Storybook, which surfaces each component's API and provides copy-and-paste code snippets. We're using the `,(0,c.jsx)(n.a,{href:`https://atomicdesign.bradfrost.com/chapter-2/#the-atomic-design-methodology`,rel:`nofollow`,children:`atomic design methodology`}),` to categorize our components, but grouping them under a single "Components" category in Storybook. Information about the component category will appear in its documentation, or as annotations.`]}),`
`,(0,c.jsx)(n.p,{children:`If you have questions or are experiencing any issues when working with EDS's components, please reach out for support via slack and the team will be happy to help.`}),`
`,(0,c.jsx)(n.h3,{id:`creating-a-component`,children:`Creating a component`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`To create a component, run `,(0,c.jsx)(n.code,{children:`yarn plop`}),` in the command line.`]}),`
`,(0,c.jsxs)(n.li,{children:[`The command will ask, "What is your component name?" Add your component name (you can either type `,(0,c.jsx)(n.code,{children:`ComponentName`}),` or `,(0,c.jsx)(n.code,{children:`Component name`}),` and it will automatically generate the proper casing).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Edit component source code in accordance with `,(0,c.jsx)(n.a,{href:`./?path=/story/documentation-guidelines-code-guidelines--page`,children:`EDS's code guidelines`})]}),`
`,(0,c.jsx)(n.li,{children:`Create relevant stories for all component variants`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`component-beta-status`,children:`Component Beta status`}),`
`,(0,c.jsxs)(n.p,{children:[`When components are first created using the `,(0,c.jsx)(n.code,{children:`plop`}),` feature, they're given a beta tag in the `,(0,c.jsx)(n.code,{children:`.stories`}),` file and a line is added to the component docstring stating that the component is in beta. When the component is first officially released/announced internally, the component will be in beta, but it will leave beta in the following release.`]}),`
`,(0,c.jsx)(n.p,{children:`Exceptions can be made for components that are still fluctuating and experiencing a lot of changes when the second release comes around.`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsxs)(n.h2,{id:`directory-structure-`,children:[`Directory structure `,(0,c.jsx)(`a`,{name:`directory`})]}),`
`,(0,c.jsx)(n.p,{children:`The component stucture is as follows:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`Components
--Component Name
----Component Stories & Files
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};