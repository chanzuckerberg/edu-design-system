import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./Icon-DJYKhM6X.js";import{n as a,t as o}from"./InlineNotification-B6dvzwso.js";import{n as s,t as c}from"./semanticIconOverrides-CAkf2_aJ.js";var l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),a(),s(),i(),l=t(),u={title:`Components/InlineNotification`,component:o,parameters:{docs:{subtitle:`An alert is placed within a page section to provide a contextual notification. For example, an error that applies to multiple fields within a form.`},layout:`centered`},args:{title:`Inline notifications lorem ipsum text`,className:`w-[384px]`},tags:[`autodocs`,`version:2.2.0`]},d={},f={args:{...d.args,subTitle:`Additional text which provides additional detail`}},p={args:{...d.args,subTitle:(0,l.jsxs)(`span`,{children:[(0,l.jsx)(`em`,{children:`Additional text`}),` which provides additional detail`]})}},m={args:{...f.args,status:`favorable`}},h={args:{...f.args,status:`warning`}},g={args:{...f.args,status:`critical`}},_={args:{title:`Long text inline notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}},v={args:{...g.args},decorators:[e=>(0,l.jsx)(r,{icons:c,children:e()})]},y=[`Default`,`WithSubTitle`,`WithFormattedSubTitle`,`Favorable`,`Warning`,`Critical`,`LongText`,`WithProvidedIcons`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    subTitle: 'Additional text which provides additional detail'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    subTitle: <span>
        <em>Additional text</em> which provides additional detail
      </span>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithSubTitle.args,
    status: 'favorable'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithSubTitle.args,
    status: 'warning'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithSubTitle.args,
    status: 'critical'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Long text inline notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Critical.args
  },
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...v.parameters?.docs?.source},description:{story:"The status icon is the notification's whole signal of severity, so which glyph each status\ndraws comes from `IconProvider` and is the same here, on a `FieldNote`, and on a toast.\n\nHere `critical` becomes the outline version of the icon.",...v.parameters?.docs?.description}}}}))();export{g as Critical,d as Default,m as Favorable,_ as LongText,h as Warning,p as WithFormattedSubTitle,v as WithProvidedIcons,f as WithSubTitle,y as __namedExportsOrder,u as default};