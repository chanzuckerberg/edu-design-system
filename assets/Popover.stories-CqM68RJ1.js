import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./clsx-CU3OJm-u.js";import{a,i as o,o as s,r as c,s as l,t as u}from"./headlessui.esm-lK-9xKHu.js";import{t as d}from"./Button-B9L7vEj2.js";import{t as f}from"./Button-Czofd_Br.js";import{t as p}from"./PopoverContainer-DuAQqAdM.js";import{t as m}from"./PopoverContainer-k-Ekgsta.js";import{n as h,t as g}from"./isChromatic-m-T4_eoU.js";var _,v,y=e((()=>{_=`_popover__panel_jv1xm_7`,v={popover__panel:_}})),b,x,S,C,w,T,E=e((()=>{u(),r(),n(),m(),y(),b=t(),x=({...e})=>(0,b.jsx)(s,{...e}),S=e=>(0,b.jsx)(l,{...e}),C=e=>(0,b.jsx)(a,{...e}),w=e=>(0,b.jsx)(c,{...e}),T=({anchor:e={to:`bottom end`,gap:12},arrowClassName:t,bodyClassName:n,children:r,className:a,...s})=>(0,b.jsx)(o,{anchor:e,as:`article`,className:i(a,v.popover__panel),...s,children:(0,b.jsx)(p,{className:n,children:r})}),x.displayName=`Popover`,w.displayName=`Popover.Group`,T.displayName=`Popover.Content`,S.displayName=`Popover.Overlay`,C.displayName=`Popover.Group`,x.Button=w,x.Content=T,x.Overlay=S,x.Group=C;try{x.displayName=`Popover`,x.__docgenInfo={description:`## Usage

* Keeps information close to a button, etc., that triggers it.
* Typically used for showing contextual information or quick actions without taking focus away from the main page.
* Doesn't block interaction with the rest of the page.

| Type/Use | Description | Example |
|----------|-------------|---------|
| Show additional info | Displays extra details or hints related to a UI element. | Showing help text when hovering over an info icon. |
| Form fields / Input | Embeds lightweight form elements in a contextual way. | A popover with a color picker or emoji selector. |

### Best Practices

* Don't use popovers for popup menus. Use a Menu instead.

## Interaction

Popovers open in response to user interaction—click, tap, or hover. They close when clicking outside the popover, pressing \`Esc\`, selecting an item within the popover, or interacting with the trigger again (for toggling popovers).

## Resources

* https://headlessui.com/react/popover`,displayName:`Popover`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Popover/Popover.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Popover/Popover.tsx`,name:`TypeLiteral`}],description:`Custom classname for additional styles`,name:`className`,required:!1,tags:{},type:{name:`any`}},__demoMode:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/popover/popover.d.ts`,name:`TypeLiteral`}],description:``,name:`__demoMode`,required:!1,tags:{},type:{name:`boolean`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLElement>`}}},tags:{}}}catch{}try{x.Button.displayName=`Popover.Button`,x.Button.__docgenInfo={description:`Trigger component for the Popover component. Usually a button of some style`,displayName:`Popover.Button`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Popover/Popover.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Popover/Popover.tsx`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Popover/Popover.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{see:`https://headlessui.com/react/popover#popover-button`}}}catch{}try{x.Content.displayName=`Popover.Content`,x.Content.__docgenInfo={description:`A floating container that can be resized to fit content inside`,displayName:`Popover.Content`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Popover/Popover.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Popover/Popover.tsx`,name:`TypeLiteral`}],description:`Custom classname for additional styles for the entire popover content.`,name:`className`,required:!1,tags:{},type:{name:`any`}},focus:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/popover/popover.d.ts`,name:`TypeLiteral`}],description:``,name:`focus`,required:!1,tags:{},type:{name:`boolean`}},anchor:{defaultValue:{value:`{ to: 'bottom end', gap: 12 }`},declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/popover/popover.d.ts`,name:`TypeLiteral`}],description:``,name:`anchor`,required:!1,tags:{},type:{name:`AnchorProps`}},portal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/popover/popover.d.ts`,name:`TypeLiteral`}],description:``,name:`portal`,required:!1,tags:{},type:{name:`boolean`}},modal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/popover/popover.d.ts`,name:`TypeLiteral`}],description:``,name:`modal`,required:!1,tags:{},type:{name:`boolean`}},transition:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/popover/popover.d.ts`,name:`TypeLiteral`}],description:``,name:`transition`,required:!1,tags:{},type:{name:`boolean`}},static:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/popover/popover.d.ts`,name:`TypeLiteral`}],description:``,name:`static`,required:!1,tags:{},type:{name:`boolean`}},unmount:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/popover/popover.d.ts`,name:`TypeLiteral`}],description:``,name:`unmount`,required:!1,tags:{},type:{name:`boolean`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLElement>`}},arrowClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Popover/Popover.tsx`,name:`TypeLiteral`}],description:`Custom classname for additional styles for the arrow.`,name:`arrowClassName`,required:!1,tags:{},type:{name:`string`}},bodyClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Popover/Popover.tsx`,name:`TypeLiteral`}],description:`Custom classname for additional styles on the generic popover container.`,name:`bodyClassName`,required:!1,tags:{},type:{name:`string`}}},tags:{see:`https://headlessui.com/react/popover#popover-panel`}}}catch{}try{x.Overlay.displayName=`Popover.Overlay`,x.Overlay.__docgenInfo={description:`Prevents TypeScript erroring of using private Headless Popover attributes.`,displayName:`Popover.Overlay`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Popover/Popover.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},transition:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/popover/popover.d.ts`,name:`TypeLiteral`}],description:``,name:`transition`,required:!1,tags:{},type:{name:`boolean`}},static:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`static`,required:!1,tags:{},type:{name:`boolean`}},unmount:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`unmount`,required:!1,tags:{},type:{name:`boolean`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLElement>`}}},tags:{see:`https://headlessui.com/react/popover#popover-overlay`}}}catch{}try{x.Group.displayName=`Popover.Group`,x.Group.__docgenInfo={description:`Allows for the construction of connected popovers (so that you can open each popover by tabbing between them).`,displayName:`Popover.Group`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Popover/Popover.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLElement>`}}},tags:{see:`https://headlessui.com/react/popover#popover-group`}}}catch{}})),D,O,k,A,j,M,N,P;e((()=>{g(),n(),E(),f(),D=t(),{userEvent:O,within:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/Popover`,component:x,parameters:{docs:{subtitle:`A small, lightweight overlay or floating container that appears over other content to provide additional information, options, or actions without navigating away from the current screen.`},layout:`centered`,chromatic:{disableSnapshot:!0}},args:{children:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(x.Button,{as:d,"data-testid":`popover-trigger-button`,children:`Open Popover`}),(0,D.jsx)(x.Content,{"data-testid":`popover-content`,children:(0,D.jsx)(`div`,{className:`fpo m-2 p-6`,children:`Popover Content goes here`})})]})},argTypes:{as:{description:"Element to use for the `Popover.Button` instance"},__demoMode:{table:{disable:!0}},className:{type:`string`,table:{type:{detail:`some custom classes or combination of utility classes`,summary:`string`}}},refName:{table:{disable:!0}},ref:{table:{disable:!0}},children:{control:!1}},decorators:[e=>(0,D.jsx)(`div`,{className:`m-spacing-size-5 p-spacing-size-4`,children:e()})],tags:[`autodocs`,`version:3.0`]},j={parameters:{docs:{source:{code:`
<Popover>
  <Popover.Button as={Button} data-testid="popover-trigger-button">
    Open Popover
  </Popover.Button>
  <Popover.Content data-testid="popover-content">
    <div className="fpo m-2 p-6">Popover Content goes here</div>
  </Popover.Content>
</Popover>
        `}}},play:async({canvasElement:e})=>{if(h()){let t=await k(e).findByRole(`button`);await O.click(t)}}},M={parameters:{docs:{source:{code:`
<Popover>
  <Popover.Button as={Button} data-testid="popover-trigger-button">
    Open Popover
  </Popover.Button>
  <Popover.Content anchor={{ to: 'top': gap: 12 }} data-testid="popover-content">
    <div className="fpo m-2 p-6">Popover Content goes here</div>
  </Popover.Content>
</Popover>
        `}}},render:e=>(0,D.jsxs)(x,{...e,children:[(0,D.jsx)(x.Button,{as:d,"data-testid":`popover-trigger-button`,children:`Open Popover`}),(0,D.jsx)(x.Content,{anchor:{to:`top`,gap:12},"data-testid":`popover-content`,focus:!0,children:(0,D.jsx)(`div`,{className:`fpo m-2 p-6`,children:`Popover Content goes here`})})]}),play:async({canvasElement:e})=>{if(h()){let t=await k(e).findByRole(`button`);await O.click(t)}}},N={play:async({canvasElement:e})=>{if(h()){let t=await k(e).findByRole(`button`);await O.click(t)}},render:e=>(0,D.jsxs)(x,{...e,children:[(0,D.jsx)(x.Button,{as:d,"data-testid":`popover-trigger-button`,children:`Open Popover`}),(0,D.jsx)(x.Content,{"data-testid":`popover-content`,focus:!0,children:(0,D.jsxs)(`div`,{className:`fpo m-2 p-6`,children:[`Popover Content goes here`,(0,D.jsx)(d,{children:`Focus on me upon open`})]})})]})},P=[`Default`,`Top`,`FocusClickableElement`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<Popover>
  <Popover.Button as={Button} data-testid="popover-trigger-button">
    Open Popover
  </Popover.Button>
  <Popover.Content data-testid="popover-content">
    <div className="fpo m-2 p-6">Popover Content goes here</div>
  </Popover.Content>
</Popover>
        \`
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    // We want to test visual regression for the Popover.Content as well as the button,
    // but don't want the drawer open initally outside Chromatic.
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const filtersTrigger = await canvas.findByRole('button');
      await userEvent.click(filtersTrigger);
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<Popover>
  <Popover.Button as={Button} data-testid="popover-trigger-button">
    Open Popover
  </Popover.Button>
  <Popover.Content anchor={{ to: 'top': gap: 12 }} data-testid="popover-content">
    <div className="fpo m-2 p-6">Popover Content goes here</div>
  </Popover.Content>
</Popover>
        \`
      }
    }
  },
  render: args => {
    return <Popover {...args}>
        <Popover.Button as={Button} data-testid="popover-trigger-button">
          Open Popover
        </Popover.Button>
        <Popover.Content anchor={{
        to: 'top',
        gap: 12
      }} data-testid="popover-content" focus>
          <div className="fpo m-2 p-6">Popover Content goes here</div>
        </Popover.Content>
      </Popover>;
  },
  play: async ({
    canvasElement
  }) => {
    // We want to test visual regression for the Popover.Content as well as the button,
    // but don't want the drawer open initally outside Chromatic.
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const filtersTrigger = await canvas.findByRole('button');
      await userEvent.click(filtersTrigger);
    }
  }
}`,...M.parameters?.docs?.source},description:{story:"You can control where the popover appears by `anchor` on `Popover.Content`. By default, `Popover` will use\n`{to: 'bottom end', gap: 12}`, but you can specify other combinations of `'top'` and `'start'`.\n\nMore information about the options are available here: https://headlessui.com/react/popover",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    // We want to test visual regression for the Popover.Content as well as the button,
    // but don't want the drawer open initally outside Chromatic.
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const filtersTrigger = await canvas.findByRole('button');
      await userEvent.click(filtersTrigger);
    }
  },
  render: args => {
    return <Popover {...args}>
        <Popover.Button as={Button} data-testid="popover-trigger-button">
          Open Popover
        </Popover.Button>
        <Popover.Content data-testid="popover-content" focus>
          <div className="fpo m-2 p-6">
            Popover Content goes here
            <Button>Focus on me upon open</Button>
          </div>
        </Popover.Content>
      </Popover>;
  }
}`,...N.parameters?.docs?.source},description:{story:"The trigger for `Popover` can receive focus, by convention.",...N.parameters?.docs?.description}}}}))();export{j as Default,N as FocusClickableElement,M as Top,P as __namedExportsOrder,A as default};