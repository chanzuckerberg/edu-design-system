import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./Radio-BOvwx7UQ.js";var a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{n(),r(),a=t(),o={title:`Components/Radio`,component:i,parameters:{docs:{subtitle:`A radio button is a round control that allows users to choose one option from a set. Also known as Radio.`},layout:`centered`},decorators:[e=>(0,a.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})],tags:[`autodocs`,`version:2.1`]},s={args:{name:`option-1`,label:`Option 1`,checked:!1,readOnly:!0}},c={args:{...s.args,name:`option-checked`,checked:!0,readOnly:!0}},l={args:{...s.args,name:`option-disabled`,disabled:!0}},u={args:{...l.args,checked:!0,readOnly:!0}},d={args:{...s.args,name:`option-error`,isError:!0}},f={args:{...d.args,name:`option-error`,checked:!0,readOnly:!0}},p={args:{...s.args,subLabel:`Some additional label text`}},m={args:{...s.args,label:void 0,"aria-label":`unchecked radio button`}},h={render:()=>(0,a.jsx)(`div`,{style:{display:`grid`,width:`320px`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`,gap:`16px`},children:(0,a.jsx)(i,{checked:!0,label:`Lorem ipsum dolor sit amet, consectetur adipiscing elit`,name:`option-long-label`,readOnly:!0})})},g=[`Default`,`Checked`,`Disabled`,`DisabledAndChecked`,`Error`,`ErrorAndChecked`,`WithSublabel`,`WithoutVisibleLabel`,`LongLabels`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'option-1',
    label: 'Option 1',
    checked: false,
    readOnly: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    name: 'option-checked',
    checked: true,
    readOnly: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    name: 'option-disabled',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Disabled.args,
    checked: true,
    readOnly: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    name: 'option-error',
    isError: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Error.args,
    name: 'option-error',
    checked: true,
    readOnly: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    subLabel: 'Some additional label text'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'unchecked radio button'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    return <div style={{
      display: 'grid',
      width: '320px',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '16px'
    }}>
        <Radio checked label={label} name="option-long-label" readOnly />
      </div>;
  }
}`,...h.parameters?.docs?.source}}}}))();export{c as Checked,s as Default,l as Disabled,u as DisabledAndChecked,d as Error,f as ErrorAndChecked,h as LongLabels,p as WithSublabel,m as WithoutVisibleLabel,g as __namedExportsOrder,o as default};