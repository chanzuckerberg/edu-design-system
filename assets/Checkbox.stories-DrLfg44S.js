import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Checkbox-D-DWxAGV.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),r(),a=n(),o={title:`Components/Checkbox`,component:i,args:{label:`Checkbox`},parameters:{docs:{subtitle:`Checkboxes indicate if something is selected or unselected and allow users to choose one or more options.`},layout:`centered`},argTypes:{disabled:{control:`boolean`}},decorators:[e=>(0,a.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})],tags:[`autodocs`,`version:2.2`]},s={},c={args:{subLabel:`Additional descriptive text`}},l={args:{isError:!0,label:`In error state`}},u={...s,args:{defaultChecked:!0}},d={...s,args:{defaultChecked:!0},decorators:[e=>(0,a.jsx)(`div`,{style:{fontSize:`10px`},children:e()})]},f={args:{indeterminate:!0}},p={render:e=>(0,a.jsxs)(`div`,{className:`p-0`,children:[(0,a.jsx)(i,{...e,checked:!1,disabled:!0,label:`Disabled`}),(0,a.jsx)(i,{...e,checked:!0,disabled:!0,label:`Disabled`}),(0,a.jsx)(i,{...e,disabled:!0,indeterminate:!0,label:`Disabled`})]}),parameters:{snapshot:{skip:!0}}},m={args:{"aria-label":`a checkbox has no name`,label:void 0}},h={args:{label:`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}},g=[`Default`,`WithSublabel`,`Error`,`Checked`,`GlyphIsConsistent`,`Indeterminate`,`Disabled`,`WithoutVisibleLabel`,`LongLabels`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    subLabel: 'Additional descriptive text'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isError: true,
    label: 'In error state'
  }
}`,...l.parameters?.docs?.source},description:{story:`Checkboxes can have an error state`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultChecked: true
  }
}`,...u.parameters?.docs?.source},description:{story:`Checkboxes can, of course, can be checked`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultChecked: true
  },
  decorators: [Story => <div style={{
    fontSize: '10px'
  }}>{Story()}</div>]
}`,...d.parameters?.docs?.source},description:{story:`The checkbox glyph is not affected by any wrapping of font resizing`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...f.parameters?.docs?.source},description:{story:`Checkboxes can be in an indeterminate state, marking a partially checked state`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="p-0">
      <Checkbox {...args} checked={false} disabled label="Disabled" />
      <Checkbox {...args} checked disabled label="Disabled" />
      <Checkbox {...args} disabled indeterminate label="Disabled" />
    </div>,
  parameters: {
    snapshot: {
      skip: true
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"`Checkbox` can be disabled in each available state.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'a checkbox has no name',
    label: undefined
  }
}`,...m.parameters?.docs?.source},description:{story:"`Checkbox` doesn't require a visible label if `aria-label` is provided.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }
}`,...h.parameters?.docs?.source},description:{story:`Long labels will sit adjacent to the text box, and allow clicking to change the state of the checkbox. When constrained,
the text will wrap, fixing the checkbox to the top edge.`,...h.parameters?.docs?.description}}}})))()}_();export{u as Checked,s as Default,p as Disabled,l as Error,d as GlyphIsConsistent,f as Indeterminate,h as LongLabels,c as WithSublabel,m as WithoutVisibleLabel,g as __namedExportsOrder,o as default};