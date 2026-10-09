import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,p as n}from"./blocks-BQK8zFQR.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{i,r as a}from"./react-Bl2r1tuC.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Documentation/Theming/Using EDS Theming with Storybook`}),`
`,(0,c.jsx)(n.h1,{id:`using-eds-theming-with-storybook`,children:`Using EDS Theming with Storybook`}),`
`,(0,c.jsxs)(n.p,{children:[`When using a custom EDS theme, your application will reflect the theme chosen, but you still must configure `,(0,c.jsx)(n.a,{href:`https://storybook.js.org/docs`,rel:`nofollow`,children:`Storybook`}),` to use the theme as well.`]}),`
`,(0,c.jsx)(n.h2,{id:`telling-storybook-about-the-theme-files`,children:`Telling storybook about the theme file(s)`}),`
`,(0,c.jsx)(n.p,{children:`Storybook allows for customizations that affect how stories are rendered. One of the most important things to do when using EDS is to tell storybook about the same setup
used when constructing an application.`}),`
`,(0,c.jsx)(n.h3,{id:`updating-previewtsjs`,children:`Updating preview.(ts|js)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Make sure to add in the relevant base CSS files, placing them after any app CSS files`}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`import type {Preview} from '@storybook/react-vite';

// Style import order matters. See app/root.tsx for reference.
import '~/app.css';
// Load the Tailwind base first so that EDS styles take precedence.
import '~/tailwind-base.css';
import '@chanzuckerberg/eds/index.css';
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`When using theming, reference the initialized theme files AFTER any utility CSS files`}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`// Load the Tailwind utility classes last so they can be used to override EDS styles.
import '~/tailwind.css';
import '~/components/app-theme.css';
`})}),`
`,(0,c.jsx)(n.h3,{id:`updating-preview-headhtml`,children:`Updating preview-head.html`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Load any custom font files / links here, so that they get added to the HTML template`}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<!-- Performance optimization -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

<!-- Load fonts -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=..."
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=..."
/>
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`NOTE`}),`: This should use the exact link HREF specified by Google Fonts, Adobe fonts, etc.`]}),`
`,(0,c.jsx)(n.h2,{id:`using-storybook-modes`,children:`Using Storybook Modes`}),`
`,(0,c.jsxs)(n.p,{children:[`Storybook supports `,(0,c.jsx)(n.a,{href:`https://www.chromatic.com/docs/modes/`,rel:`nofollow`,children:`modes`}),`. Details on how to use this and EDS in your storybook documentation to come soon.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),n()})))()}l();export{s as default};