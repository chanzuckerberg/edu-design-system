import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r}from"./iframe-CxYcUItw.js";import{n as i,t as a}from"./clsx-CU3OJm-u.js";var o,s=t((()=>{o={"popover-container":`_popover-container_6lqye_10`,"fade-in":`_fade-in_6lqye_1`}})),c,l,u,d=t((()=>{i(),c=e(r()),s(),l=n(),u=c.forwardRef(({className:e,children:t,...n},r)=>(0,l.jsx)(`div`,{className:a(o[`popover-container`],e),...n,ref:r,children:t})),u.displayName=`PopoverContainer`;try{u.displayName=`PopoverContainer`,u.__docgenInfo={description:`## Usage

Show a standardized wrapper for content shown by popover components, like \`Popover\`, \`Menu\`, and
\`Select\`. Define the container's appearance separate from the items within.

| Type/Use | Description | Example |
|----------|-------------|---------|
| Render target | Passed as \`as\` to a HeadlessUI panel, so the panel itself renders as the container. | \`Menu.Items\`, \`Select\` options, \`Combobox\` options, \`AppHeader\` navigation. |
| Direct wrapper | Rendered directly around the content of another component's panel. | \`Popover.Content\`. |

Adjacent children with \`role="group"\` are separated by a divider automatically, so grouped menu
content does not need its own separators.

## Interaction

On render, this will use a subtle animation to highlight and draw the user's attention. The
animation is skipped for anyone who has asked for reduced motion.

The container suppresses its own focus outline. Focus treatment belongs to the items inside it,
such as \`PopoverListItem\`.

## Content & Accessibility

### Do's

* Use \`PopoverContainer\` when creating any component that contains brief content similar in size to a Menu popover, or Select field popover. This could be ancillary content on a page where the trigger (e.g., a button) makes it clear what will be revealed.

### Don'ts

* Avoid using \`PopoverContainer\` for large amounts of content. Consider \`Modal\` instead.
* Avoid using \`PopoverContainer\` for on-page experiences that do not have a trigger to reveal the content. Consider \`Card\` (with \`elevation\`) instead.

## Resources

* https://headlessui.com/react/popover#popover`,displayName:`PopoverContainer`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/PopoverContainer/PopoverContainer.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PopoverContainer/PopoverContainer.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PopoverContainer/PopoverContainer.tsx`,name:`TypeLiteral`}],description:`Child node(s) that can be nested inside component.`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PopoverContainer/PopoverContainer.tsx`,name:`TypeLiteral`}],description:`CSS properties defined for the HTML element. Includes the component's CSS Custom Properties:

- \`--popover-container__bg\``,name:`style`,required:!1,tags:{},type:{name:`PopoverContainerCSSProperties`}}},tags:{}}}catch{}}));export{d as n,u as t};