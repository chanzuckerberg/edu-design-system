import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n,c as r,g as i,h as a,m as o,p as s}from"./iframe-CxYcUItw.js";import{i as c,n as l,r as u,t as d}from"./TokenList-0qXVm1TI.js";var f,p,m,h,g,_,v;e((()=>{i(),n(),c(),f=t(),p={title:`Design Tokens/(2) Semantic`,component:d,args:{caption:`Tokens`,size:`md`},parameters:{chromatic:{diffThreshold:.75,delay:100},controls:{disable:!0},docs:{description:{component:`This page documents all of the semantic token values, mapped to primitive tokens. These tokens are meant to be used both inside internal EDS components, and within custom components.`},page:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{}),(0,f.jsx)(o,{}),(0,f.jsx)(r,{}),(0,f.jsx)(s,{})]})},a11y:{test:`off`}}},m={args:{caption:`Text Utility Tokens`,listItems:u(`eds-theme-color-text-utility`,`color`,(e,t,n)=>t===`figma`?`→ text/utility/`+l(e,n):`text-utility-`+l(e,n))}},h={args:{caption:`Background Utility Tokens`,listItems:u(`eds-theme-color-background-utility`,`color`,(e,t,n)=>t===`figma`?`→ background/utility/`+l(e,n):`bg-utility-`+l(e,n))}},g={args:{caption:`Border Utility Tokens`,listItems:u(`eds-theme-color-border-utility`,`color`,(e,t,n)=>t===`figma`?`→ border/utility/`+l(e,n):`border-utility-`+l(e,n))}},_={args:{caption:`Border Radius Tokens`,subCaption:`Border radii can be used internally in components, and with custom components, except for -tab- and -notification- tokens.`,listItems:u(`eds-theme-border-radius`,`size`,(e,t,n)=>t===`figma`?`→ border-radius/`+l(e,n):`rounded-`+l(e,n))}},v=[`TextUtility`,`BackgroundUtility`,`BorderUtility`,`BorderRadii`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Text Utility Tokens',
    listItems: getTokenListItems('eds-theme-color-text-utility', 'color', (name, column, filterTerm) => {
      if (column === 'figma') {
        return '→ text/utility/' + getSpecifier(name, filterTerm);
      } else {
        return 'text-utility-' + getSpecifier(name, filterTerm);
      }
    })
  }
}`,...m.parameters?.docs?.source},description:{story:`Text utility tokens can be used to add color to individual custom elements.

- Do not use state tokens (e.g., ending with \`-(hover|active|visited)\`) for non-interactive elements`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Background Utility Tokens',
    listItems: getTokenListItems('eds-theme-color-background-utility', 'color', (name, column, filterTerm) => {
      if (column === 'figma') {
        return '→ background/utility/' + getSpecifier(name, filterTerm);
      } else {
        return 'bg-utility-' + getSpecifier(name, filterTerm);
      }
    })
  }
}`,...h.parameters?.docs?.source},description:{story:`Background utility tokens can be used to add color to individual custom elements.

- Do not use state tokens (e.g., ending with \`-(hover|active|visited)\`) for non-interactive elements`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Border Utility Tokens',
    listItems: getTokenListItems('eds-theme-color-border-utility', 'color', (name, column, filterTerm) => {
      if (column === 'figma') {
        return '→ border/utility/' + getSpecifier(name, filterTerm);
      } else {
        return 'border-utility-' + getSpecifier(name, filterTerm);
      }
    })
  }
}`,...g.parameters?.docs?.source},description:{story:`Border utility tokens can be used to add color to individual custom elements.

- Do not use state tokens (e.g., ending with \`-(hover|active|visited)\`) for non-interactive elements`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Border Radius Tokens',
    subCaption: 'Border radii can be used internally in components, and with custom components, except for -tab- and -notification- tokens.',
    listItems: getTokenListItems('eds-theme-border-radius', 'size', (name, column, filterTerm) => {
      if (column === 'figma') {
        return '→ border-radius/' + getSpecifier(name, filterTerm);
      } else {
        return 'rounded-' + getSpecifier(name, filterTerm);
      }
    })
  }
}`,..._.parameters?.docs?.source},description:{story:`Border radii can be used internally in components, and with custom components.

Do **not** use any of the component radii in custom components.`,..._.parameters?.docs?.description}}}}))();export{h as BackgroundUtility,_ as BorderRadii,g as BorderUtility,m as TextUtility,v as __namedExportsOrder,p as default};