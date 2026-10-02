import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./Tag-ojat0zX5.js";import{n as a,t as o}from"./FpoBlock-D0PLXBg0.js";var s,c,l,u,d,f,p;e((()=>{n(),r(),a(),s=t(),c={title:`Components/Tag`,component:i,parameters:{docs:{subtitle:`Status UI elements that visually represent metadata, attributes, or categorical information about an item. Tags usually represent system-generated information.`},layout:`centered`},args:{label:`Tag text`},argTypes:{hasOutline:{table:{disable:!0}},text:{table:{disable:!0}},variant:{table:{disable:!0}}},tags:[`autodocs`,`version:2.2.0`]},l={render:e=>(0,s.jsxs)(`div`,{className:`gap-spacing-size-2 flex`,children:[(0,s.jsx)(i,{...e,status:`informational`}),(0,s.jsx)(i,{...e,status:`favorable`}),(0,s.jsx)(i,{...e,status:`warning`}),(0,s.jsx)(i,{...e,status:`critical`})]})},u={...l,args:{icon:`star-filled`}},d={args:{icon:`document`,label:`API Docs`,emphasis:`low`,status:`informational`}},f={...l,args:{icon:(0,s.jsx)(o,{size:16})}},p=[`Default`,`WithIcon`,`LowEmphasisInformational`,`WithFpoIconContent`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="gap-spacing-size-2 flex">
      <Tag {...args} status="informational" />
      <Tag {...args} status="favorable" />
      <Tag {...args} status="warning" />
      <Tag {...args} status="critical" />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    icon: 'star-filled'
  }
}`,...u.parameters?.docs?.source},description:{story:`Icons can be added to the left side of the text in the tag.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'document',
    label: 'API Docs',
    emphasis: 'low',
    status: 'informational'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    icon: <FpoBlock size={16} />
  }
}`,...f.parameters?.docs?.source},description:{story:`The leading slot takes arbitrary content, not only an EDS icon name. The block below
stands in for whatever you supply, so the slot itself is the subject rather than the icon
that happened to be picked.`,...f.parameters?.docs?.description}}}}))();export{l as Default,d as LowEmphasisInformational,f as WithFpoIconContent,u as WithIcon,p as __namedExportsOrder,c as default};