import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-BnFW0aKX.js";import{M as n,f as r,g as i}from"./iframe-CxYcUItw.js";import{t as a}from"./mdx-react-shim-BXtN3sNq.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Getting Started`}),`
`,(0,c.jsx)(n.h1,{id:`welcome-to-eds`,children:`Welcome to EDS`}),`
`,(0,c.jsx)(n.p,{children:`EDS is a design system that provides foundations to create a consistent, accessible web experience across products.`}),`
`,(0,c.jsx)(n.h2,{id:`storybook`,children:`Storybook`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:`https://storybook.js.org/`,rel:`nofollow`,children:`Storybook`}),` is a tool that provides a place for developers to build, document, and ship components as well as prototype ideas and pages.`]}),`
`,(0,c.jsx)(n.h3,{id:`storybook-structure-and-contents`,children:`Storybook Structure and Contents`}),`
`,(0,c.jsxs)(n.p,{children:[`EDS' components follow the `,(0,c.jsx)(n.a,{href:`https://bradfrost.com/blog/post/atomic-web-design/`,rel:`nofollow`,children:`Atomic Design`}),` methodology where smaller components work together to create larger components to create templates and pages. In the storybook navigation, we group the contents into a few broad categories, to help with navigation and scannability.`]}),`
`,(0,c.jsx)(n.p,{children:`The navigation consists of:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Documentation`}),` are a collection of guidelines and explanations for all the written content on this site.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Design Tokens`}),` are the reusable CSS variables that can be themed in your application. They are grouped into tiers which describe the specificity of the tokens (with tier one values corresponding to basic definitions, and tier two corresponing to use cases referencing the tier one values, etc.)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Components`}),` are all the exported offerings of EDS, combined in one list. They consist of various atoms, molecules, and organisms that can be used in a product, along with relevant documentation, implementation examples controls, and `,(0,c.jsx)(`kbd`,{children:`tags`}),` (describing the component type and status)`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`storybook-features`,children:`Storybook Features`}),`
`,(0,c.jsx)(n.p,{children:`Storybook offers several facilities to demonstrate how components behave. Some common ones to know about include:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Canvas`}),` shows the component, and a panel where controls and other behaviors can be tested. Controls, in particular, correspond to the props provided by the components, and demonstrate the possible values when using the props. Use controls to see what the component can do.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Docs`}),` show a more read-only variant of the component, along with in-code documentation for the component. By clicking on the different stories, it will scroll to the appropriate one instead of reloading the canvas.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Storybook View Options`}),` allow for controlling the viewport, background color, and other details to help understand the component layout. Visually test how the component responds to different layouts`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Storybook provides a lot of functionality, including `,(0,c.jsx)(n.a,{href:`https://storybook.js.org/docs/react/get-started/browse-stories#sidebar-and-canvas`,rel:`nofollow`,children:`keyboard navigation`}),`. Explore `,(0,c.jsx)(n.a,{href:`https://storybook.js.org/docs/react/get-started/introduction`,rel:`nofollow`,children:`the docs`}),` to learn more.`]}),`
`,(0,c.jsx)(n.h3,{id:`ide-integrations`,children:`IDE Integrations`}),`
`,(0,c.jsx)(n.p,{children:`Since EDS provides many color tokens, it may prove useful to add some integrations to the IDE to show visual references for the colors in use.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Install the `,(0,c.jsx)(n.a,{href:`https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar`,rel:`nofollow`,children:`CSS Var Complete - VS Code Plugin`}),` which provides better Intellisense while writing CSS and referencing CSS variables.`]}),`
`,(0,c.jsx)(n.li,{children:`Add the following settings in your workspace settings file:`}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  // ...rest of the settings here
  "cssvar.files": [
    "node_modules/@chanzuckerberg/eds/lib/index.css"
  ]
}
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Restart VSCode`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`using-the-mcp-addon`,children:`Using the MCP addon`}),`
`,(0,c.jsxs)(n.p,{children:[`EDS comes with integration of the `,(0,c.jsx)(n.a,{href:`https://storybook.js.org/docs/ai/mcp/overview/`,rel:`nofollow`,children:`Storybook MCP addon`}),`, allowing integration with an LLM of choice. See "Usage" instructions for more help.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Use the following content in your LLM's helper readme (`,(0,c.jsx)(n.code,{children:`CLAUDE.md`}),` or `,(0,c.jsx)(n.code,{children:`AGENTS.md`}),`) as a start. If you find some other instructions helpful, `,(0,c.jsx)(n.a,{href:`https://github.com/chanzuckerberg/edu-design-system/issues/new?template=feature_request.md`,rel:`nofollow`,children:`let us know`}),`!`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"When working on UI components, always use the `your-project-sb-mcp` MCP tools to access Storybook's component and documentation knowledge before answering or taking any action.\n \n- **CRITICAL: Never hallucinate component properties!** Before using ANY property on a component from a design system (including common-sounding ones like `shadow`, etc.), you MUST use the MCP tools to check if the property is actually documented for that component.\n- Query `list-all-documentation` to get a list of all components\n- Query `get-documentation` for that component to see all available properties and examples\n- Only use properties that are explicitly documented or shown in example stories\n- If a property isn't documented, do not assume properties based on naming conventions or common patterns from other libraries. Check back with the user in these cases.\n- Use the `get-storybook-story-instructions` tool to fetch the latest instructions for creating or updating stories. This will ensure you follow current conventions and recommendations.\n- Check your work by running `run-story-tests`.\n \nRemember: A story name might not reflect the property name correctly, so always verify properties through documentation or example stories before using them.\n"})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};