import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,p as n}from"./blocks-BQK8zFQR.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{i,r as a}from"./react-Bl2r1tuC.js";function o(e){let n={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Documentation/Contributor Guidelines/Adding Icons`}),`
`,(0,c.jsx)(n.h1,{id:`icons`,children:`Icons`}),`
`,(0,c.jsx)(n.p,{children:`EDS provides utilitarian UI icons (e.g. magnifying glass, menu, triangles, carets, and so on). "Branded" or content-specific icons are not provided by EDS.`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`working-with-icons`,children:`Working with Icons`}),`
`,(0,c.jsxs)(n.p,{children:[`Icons are provided thru the `,(0,c.jsx)(n.code,{children:`<Icon />`}),` component, and use names that map to what the icon is (and not what it may be used for). Icons also have a naming
structure to avoid unnecessary differences in the naming, separated by hyphens. See the icon component in storybook for examples.`]}),`
`,(0,c.jsx)(n.h3,{id:`semantic-icons`,children:`Semantic icons`}),`
`,(0,c.jsxs)(n.p,{children:[`Some icons are not the consumer's to choose. A close button, an expand chevron, a copy affordance, a status icon: each marks one well-defined role, and a role only reads as itself if it looks the same everywhere it appears. Those come from `,(0,c.jsx)(n.code,{children:`IconProvider`}),`, which holds a map of semantic name to icon name or node for the tree below it, and falls back to the set EDS ships when an app does not wrap anything.`]}),`
`,(0,c.jsxs)(n.p,{children:[`The rest of this section is for contributors working inside EDS. If you are building an app `,(0,c.jsx)(n.em,{children:`with`}),` EDS, `,(0,c.jsx)(n.code,{children:`IconProvider`}),` is the whole API: wrap your tree in one and set the roles you want to change. See its page in Storybook.`]}),`
`,(0,c.jsxs)(n.p,{children:[`When you add or change an EDS component that draws one of these icons, read it with `,(0,c.jsx)(n.code,{children:`useSemanticIcon`}),` and hand the result to `,(0,c.jsx)(n.code,{children:`IconSlot`}),`, rather than giving the component a prop for it:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`const closeIcon = useSemanticIcon('close');

return (
  <button aria-label="close" onClick={onClose}>
    <IconSlot content={closeIcon} purpose="decorative" />
  </button>
);
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Note where the accessible name sits. A provider can set any role to a node, and `,(0,c.jsx)(n.code,{children:`IconSlot`}),` leaves custom content's accessible treatment to whoever passed it, so a name carried by the icon disappears the moment an app overrides that role. Put the name on the control and render the icon decoratively.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useSemanticIcon`}),` is deliberately not exported from the package root. It is how EDS components resolve a role internally, and giving consumers a second way to read the map would invite reading it in one place and setting it in another.`]}),`
`,(0,c.jsx)(n.p,{children:`Add a new semantic name only when a role genuinely recurs across components. A one-off icon belongs in a content slot on the component that draws it.`}),`
`,(0,c.jsx)(n.h3,{id:`adding-a-new-icon`,children:`Adding a new icon`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Retrieve the icons from a design partner (e.g., from Figma, or from file sharing service like Google drive)`}),`
`,(0,c.jsxs)(n.li,{children:[`If necessary, remove the `,(0,c.jsx)(n.code,{children:`fill`}),` attribute on the `,(0,c.jsx)(n.code,{children:`<path>`}),` in the exported SVG file(s). In the very rare case that an icon needs colors defined in the icon (like the `,(0,c.jsx)(n.code,{children:`status-`}),` icons), only use tier 2 or tier 3 CSS variables for the color.`]}),`
`,(0,c.jsxs)(n.li,{children:[`In a new feature branch, locate `,(0,c.jsx)(n.code,{children:`src/icons/spritemap`}),` and add new icon contents (everything but the `,(0,c.jsx)(n.code,{children:`<svg>`}),` element) to the object.`]}),`
`,(0,c.jsx)(n.li,{children:`In Storybook, view the "Icon Grid" component to see the new component added to the available list of icons, which is now ready to use in EDS components.`}),`
`,(0,c.jsxs)(n.li,{children:[`Submit PR to `,(0,c.jsx)(n.a,{href:`https://github.com/chanzuckerberg/edu-design-system`,rel:`nofollow`,children:`edu-design-system`})]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`For more information on contributing to EDS, please review our `,(0,c.jsx)(n.a,{href:`https://github.com/chanzuckerberg/edu-design-system/blob/main/docs/CONTRIBUTING.md`,rel:`nofollow`,children:`contribution guidelines`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`modifiying-icons`,children:`Modifiying icons`}),`
`,(0,c.jsxs)(n.p,{children:[`Modifying icons involves the same steps as adding an icon, only overriding an existing SVG icon definition with the new one. However, releasing modified icons needs to be handled with care as certain icon changes aren't particularly noticeable while others may constitute a breaking change to the library. Refer to the `,(0,c.jsx)(n.a,{href:`https://github.com/chanzuckerberg/edu-design-system/blob/main/docs/CONTRIBUTING.md`,rel:`nofollow`,children:`EDS contributing guidelines`}),` to determine how best to roll out icon updates.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),n()})))()}l();export{s as default};