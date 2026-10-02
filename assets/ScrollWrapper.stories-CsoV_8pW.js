import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./ScrollWrapper-BZO5PxEf.js";var a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),r(),a=t(),{userEvent:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/ScrollWrapper`,component:i,parameters:{docs:{subtitle:`A wrapper that shows and hides shadows along the edges of scrollable content.`}},decorators:[e=>(0,a.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})],tags:[`version:1.1`]},l={args:{},render:e=>(0,a.jsx)(`div`,{className:`bg-utility-default-noEmphasis-hover h-[200px] w-[200px]`,children:(0,a.jsx)(i,{...e,children:(0,a.jsx)(`div`,{className:`p-spacing-size-3 h-[300px] w-[300px]`,"data-testid":`scrollContent`})})})},u={args:{...l.args},parameters:{snapshot:{skip:!0}},render:l.render,play:async({canvasElement:e})=>{await o.tab(),s(e).getByTestId(`scrollContent`).parentElement?.scrollBy({top:50,left:0}),await o.tab()}},d={args:{...l.args,orientation:`horizontal`},parameters:{snapshot:{skip:!0}},render:l.render,play:async({canvasElement:e})=>{await o.tab(),s(e).getByTestId(`scrollContent`).parentElement?.scrollBy({top:0,left:50}),await o.tab()}},f={args:{shadowType:`contain`},render:e=>(0,a.jsx)(`div`,{className:`bg-utility-default-noEmphasis-hover h-[200px] w-[200px]`,children:(0,a.jsx)(i,{...e,children:(0,a.jsx)(`div`,{className:`h-[300px] w-[300px]`,"data-testid":`scrollContent`})})})},p={args:{...f.args},parameters:{snapshot:{skip:!0}},render:f.render,play:async({canvasElement:e})=>{await o.tab(),s(e).getByTestId(`scrollContent`).parentElement?.scrollBy({top:50,left:0}),await o.tab()}},m={args:{...f.args,orientation:`horizontal`},parameters:{snapshot:{skip:!0}},render:f.render,play:async({canvasElement:e})=>{await o.tab(),s(e).getByTestId(`scrollContent`).parentElement?.scrollBy({top:0,left:50}),await o.tab()}},h=[`Default`,`DefaultVerticalScrolled`,`DefaultHorizontalScrolled`,`ContainVertical`,`ContainVerticalScrolled`,`ContainHorizontalScrolled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="bg-utility-default-noEmphasis-hover h-[200px] w-[200px]">
      <ScrollWrapper {...args}>
        <div className="p-spacing-size-3 h-[300px] w-[300px]" data-testid="scrollContent"></div>
      </ScrollWrapper>
    </div>
}`,...l.parameters?.docs?.source},description:{story:`Using the scroll wrapper relies on a few fixed height containers above and below the component.
This shows how, if you have an outer container of a small height, and the content within can be
taller, the scroll wrapper can be inserted in between, and allow for the content to be revealed as needed.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    snapshot: {
      skip: true
    }
  },
  render: Default.render,
  play: async ({
    canvasElement
  }) => {
    await userEvent.tab();
    const canvas = within(canvasElement);
    const scrollable = canvas.getByTestId('scrollContent').parentElement;
    scrollable?.scrollBy({
      top: 50,
      left: 0
    });
    await userEvent.tab();
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: 'horizontal'
  },
  parameters: {
    snapshot: {
      skip: true
    }
  },
  render: Default.render,
  play: async ({
    canvasElement
  }) => {
    await userEvent.tab();
    const canvas = within(canvasElement);
    const scrollable = canvas.getByTestId('scrollContent').parentElement;
    scrollable?.scrollBy({
      top: 0,
      left: 50
    });
    await userEvent.tab();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    shadowType: 'contain'
  },
  render: args => <div className="bg-utility-default-noEmphasis-hover h-[200px] w-[200px]">
      <ScrollWrapper {...args}>
        <div className="h-[300px] w-[300px]" data-testid="scrollContent"></div>
      </ScrollWrapper>
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Shadows can be kept within the edge of the container, taking on a concave appearance`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...ContainVertical.args
  },
  parameters: {
    snapshot: {
      skip: true
    }
  },
  render: ContainVertical.render,
  play: async ({
    canvasElement
  }) => {
    await userEvent.tab();
    const canvas = within(canvasElement);
    const scrollable = canvas.getByTestId('scrollContent').parentElement;
    scrollable?.scrollBy({
      top: 50,
      left: 0
    });
    await userEvent.tab();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...ContainVertical.args,
    orientation: 'horizontal'
  },
  parameters: {
    snapshot: {
      skip: true
    }
  },
  render: ContainVertical.render,
  play: async ({
    canvasElement
  }) => {
    await userEvent.tab();
    const canvas = within(canvasElement);
    const scrollable = canvas.getByTestId('scrollContent').parentElement;
    scrollable?.scrollBy({
      top: 0,
      left: 50
    });
    await userEvent.tab();
  }
}`,...m.parameters?.docs?.source}}}}))();export{m as ContainHorizontalScrolled,f as ContainVertical,p as ContainVerticalScrolled,l as Default,d as DefaultHorizontalScrolled,u as DefaultVerticalScrolled,h as __namedExportsOrder,c as default};