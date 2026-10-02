import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{t as r}from"./Button-B9L7vEj2.js";import{t as i}from"./Button-Czofd_Br.js";import{n as a,t as o}from"./ButtonGroup-CHAixHud.js";var s,c,l,u,d,f,p,m;e((()=>{n(),a(),i(),s=t(),c={title:`Components/ButtonGroup`,component:o,args:{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{rank:`primary`,children:`Button 1`}),(0,s.jsx)(r,{rank:`secondary`,children:`Button 2`})]})},argTypes:{buttonLayout:{options:[`horizontal`,`vertical`,`horizontal-progressive`]},children:{control:!1}},decorators:[e=>(0,s.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})],tags:[`autodocs`,`version:2.0.1`]},l={},u={args:{buttonLayout:`vertical`}},d={args:{buttonLayout:`horizontal-progressive`},parameters:{layout:`centered`},render:e=>(0,s.jsxs)(o,{...e,className:`flex w-[400px]`,children:[(0,s.jsx)(r,{className:`flex-1`,rank:`primary`,children:`Confirm`}),(0,s.jsx)(r,{className:`flex-1`,rank:`secondary`,children:`Cancel`})]})},f={args:{buttonLayout:`horizontal-progressive`},parameters:{layout:`centered`},render:e=>(0,s.jsxs)(o,{...e,className:`flex w-[400px]`,children:[(0,s.jsx)(r,{className:`flex-1`,isDisabled:!0,rank:`primary`,children:`Confirm`}),(0,s.jsx)(r,{className:`flex-1`,isDisabled:!0,rank:`secondary`,children:`Cancel`})]})},p={args:{buttonLayout:`horizontal-progressive`,children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{rank:`primary`,children:`Primary Button`}),(0,s.jsx)(r,{className:`-ml-spacing-size-2`,rank:`tertiary`,children:`Tertiary Button`})]})}},m=[`Default`,`Vertical`,`HorizontalProgressive`,`HorizontalProgressiveDisabled`,`HorizontalProgressiveTertiary`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    buttonLayout: 'vertical'
  }
}`,...u.parameters?.docs?.source},description:{story:`Buttons can have a vertical layout.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    buttonLayout: 'horizontal-progressive'
  },
  parameters: {
    layout: 'centered'
  },
  render: args => <ButtonGroup {...args} className="flex w-[400px]">
      <Button className="flex-1" rank="primary">
        Confirm
      </Button>
      <Button className="flex-1" rank="secondary">
        Cancel
      </Button>
    </ButtonGroup>
}`,...d.parameters?.docs?.source},description:{story:"Primary and secondary buttons can be put along the edges of the tertiary `Button` no matter the width.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    buttonLayout: 'horizontal-progressive'
  },
  parameters: {
    layout: 'centered'
  },
  render: args => <ButtonGroup {...args} className="flex w-[400px]">
      <Button className="flex-1" isDisabled rank="primary">
        Confirm
      </Button>
      <Button className="flex-1" isDisabled rank="secondary">
        Cancel
      </Button>
    </ButtonGroup>
}`,...f.parameters?.docs?.source},description:{story:"Buttons can also be disabled in `ButtonGroup`.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    buttonLayout: 'horizontal-progressive',
    children: <>
        <Button rank="primary">Primary Button</Button>
        <Button className="-ml-spacing-size-2" rank="tertiary">
          Tertiary Button
        </Button>
      </>
  }
}`,...p.parameters?.docs?.source},description:{story:"When using a tertiary button, you may adjust the layout to nudge the button's alignment to better flow\nwith adjacent content. Use `-ml-X` to set a negative margin within the `ButtonGroup`.",...p.parameters?.docs?.description}}}}))();export{l as Default,d as HorizontalProgressive,f as HorizontalProgressiveDisabled,p as HorizontalProgressiveTertiary,u as Vertical,m as __namedExportsOrder,c as default};