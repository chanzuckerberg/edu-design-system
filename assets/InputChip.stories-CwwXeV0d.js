import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./Icon-DJYKhM6X.js";import{n as a,t as o}from"./InputChip-DqXpmquI.js";import{n as s,t as c}from"./FpoBlock-D0PLXBg0.js";import{n as l,t as u}from"./semanticIconOverrides-CAkf2_aJ.js";var d,f,p,m,h,g,_,v;e((()=>{n(),a(),s(),l(),i(),d=t(),f={title:`Components/InputChip`,component:o,parameters:{docs:{subtitle:`Compact, interactive UI element used to display user-generated information.`}},argTypes:{onClick:{control:!1},leadingComponent:{control:!1}},tags:[`autodocs`,`version:1.1`]},p={args:{label:`Chip Label`,onClick:()=>{}}},m={args:{...p.args,leadingComponent:`person-encircled`}},h={args:{...p.args,isDisabled:!0}},g={args:{...p.args,leadingComponent:(0,d.jsx)(c,{size:14})}},_={args:{...m.args},decorators:[e=>(0,d.jsx)(r,{icons:u,children:e()})]},v=[`Default`,`WithLeadingIcon`,`Disabled`,`WithFpoLeadingContent`,`WithProvidedIcons`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Chip Label',
    onClick: () => {}
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leadingComponent: 'person-encircled'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDisabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leadingComponent: <FpoBlock size={14} />
  }
}`,...g.parameters?.docs?.source},description:{story:`The leading slot takes arbitrary content, not only an EDS icon name. The block below
stands in for whatever you supply, so the slot itself is the subject rather than the icon
that happened to be picked.

The slot's icon carries no explicit size, so it falls back to \`1em\` and resolves to 14px
against the chip's own type. The block matches that.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLeadingIcon.args
  },
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,..._.parameters?.docs?.source},description:{story:`The chip's action button comes from \`IconProvider\`, so it carries the same mark as the
close button on a \`Modal\` or a notification.

The leading slot is not part of that. It is the consumer's to fill, per chip, and the
provider says nothing about it.`,..._.parameters?.docs?.description}}}}))();export{p as Default,h as Disabled,g as WithFpoLeadingContent,m as WithLeadingIcon,_ as WithProvidedIcons,v as __namedExportsOrder,f as default};