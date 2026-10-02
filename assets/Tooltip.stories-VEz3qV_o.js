import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r}from"./Text-s7d_e173.js";import{t as i}from"./Text-4jUaZiwM.js";import{t as a}from"./Hr-Bx6YzIjh.js";import{t as o}from"./Hr-BchyLD5g.js";import{n as s,t as c}from"./Tooltip-1LLi0lRt.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{n(),s(),o(),i(),l=t(),u=.75,d={content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a erat eu augue consequat eleifend non vel sem. Praesent efficitur mauris ac leo semper accumsan.`,children:(0,l.jsx)(`div`,{className:`fpo p-1`,children:`Target Component`}),placement:`right`,duration:0,visible:!0},f={title:`Components/Tooltip`,component:c,args:d,argTypes:{content:{control:{type:`text`}},visible:{table:{disable:!0}},delay:{control:{type:`number`}},children:{control:!1}},parameters:{docs:{subtitle:`A tooltip is a floating, non-actionable label used to explain a user interface element or feature. It can be triggered by hovering over an element.`},layout:`centered`,chromatic:{delay:750,diffThreshold:u,diffIncludeAntiAliasing:!1}},decorators:[e=>(0,l.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})],tags:[`autodocs`,`version:3.0`]},p={args:{placement:`left`,children:(0,l.jsx)(`div`,{className:`fpo p-1`,children:`Target Component`})},parameters:{chromatic:{disableSnapshot:!0}}},m={args:{placement:`top`,children:(0,l.jsx)(`div`,{className:`fpo p-1`,children:`Target Component`})}},h={args:{placement:`bottom`,children:(0,l.jsx)(`div`,{className:`fpo p-1`,children:`Target Component`})}},g={args:{content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a erat eu augue consequat eleifend non vel sem. Praesent efficitur mauris ac leo semper accumsan. Donec posuere semper fermentum. Vivamus venenatis laoreet venenatis. Sed consectetur, dolor sed tristique vehicula, sapien nulla convallis odio, et tempus urna mi eu leo. Phasellus a venenatis sapien. Cras massa lectus, sollicitudin id nulla id, laoreet facilisis est.`}},_={args:{children:(0,l.jsx)(`div`,{className:`fpo p-1`,children:`Longer text to test placement`})},parameters:{chromatic:{delay:300}}},v={args:{...p.args,variant:`inverse`},globals:{backgrounds:{value:`background-utility-default-high-emphasis`}}},y={args:{duration:void 0,visible:void 0,children:(0,l.jsx)(`button`,{className:`fpo p-1`,children:`Target Component`})}},b={args:{duration:void 0},render:e=>(0,l.jsx)(c,{childNotInteractive:!0,content:d.content,duration:e.duration,placement:`top`,children:(0,l.jsx)(`div`,{className:`fpo p-1`,children:`Target Component`})})},x={args:{content:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{as:`p`,preset:`headline-md`,children:`Formatted Tooltip`}),(0,l.jsx)(a,{}),(0,l.jsxs)(r,{children:[`Here is a tooltip with `,(0,l.jsx)(`em`,{children:`complex`}),` formatting and`,` `,(0,l.jsx)(`strong`,{children:`content`})]})]})}},S=[`LeftPlacement`,`TopPlacement`,`BottomPlacement`,`LongText`,`LongTriggerText`,`InverseVariant`,`Interactive`,`InteractiveDisabled`,`FormattedContent`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    children: <div className="fpo p-1">Target Component</div>
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"The following stories demonstrate how `Tooltip` can be made to appear on different sides of the trigger.\nEach story name denotes a value pased to `placement`.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    children: <div className="fpo p-1">Target Component</div>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    children: <div className="fpo p-1">Target Component</div>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a erat eu augue consequat eleifend non vel sem. Praesent efficitur mauris ac leo semper accumsan. Donec posuere semper fermentum. Vivamus venenatis laoreet venenatis. Sed consectetur, dolor sed tristique vehicula, sapien nulla convallis odio, et tempus urna mi eu leo. Phasellus a venenatis sapien. Cras massa lectus, sollicitudin id nulla id, laoreet facilisis est.'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="fpo p-1">Longer text to test placement</div>
  },
  parameters: {
    // Sets the delay (in milliseconds) for a specific story.
    chromatic: {
      delay: 300
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...LeftPlacement.args,
    variant: 'inverse'
  },
  globals: {
    backgrounds: {
      value: 'background-utility-default-high-emphasis'
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    // reset prop values defined in defaultArgs
    duration: undefined,
    visible: undefined,
    children: <button className="fpo p-1">Target Component</button>
  }
}`,...y.parameters?.docs?.source},description:{story:`Hover over the button to make the tooltip appear.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    duration: undefined
  },
  render: args => <Tooltip childNotInteractive content={defaultArgs.content} duration={args.duration} placement="top">
      <div className="fpo p-1">Target Component</div>
    </Tooltip>
}`,...b.parameters?.docs?.source},description:{story:`Hover over the button to make the tooltip appear.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    content: <>
        <Text as="p" preset="headline-md">
          Formatted Tooltip
        </Text>
        <Hr />
        <Text>
          Here is a tooltip with <em>complex</em> formatting and{' '}
          <strong>content</strong>
        </Text>
      </>
  }
}`,...x.parameters?.docs?.source},description:{story:`Tooltips can have formmatted content within the popover. Usage of standard HTML tags or EDS components allowed.`,...x.parameters?.docs?.description}}}}))();export{h as BottomPlacement,x as FormattedContent,y as Interactive,b as InteractiveDisabled,v as InverseVariant,p as LeftPlacement,g as LongText,_ as LongTriggerText,m as TopPlacement,S as __namedExportsOrder,f as default};