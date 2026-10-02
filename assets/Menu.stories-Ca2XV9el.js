import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r}from"./iframe-CxYcUItw.js";import{i,n as a,r as o,t as s}from"./Icon-BK9TF5-o.js";import{n as c,t as l}from"./Icon-DJYKhM6X.js";import{n as u,t as d}from"./Avatar-hC3bJcIQ.js";import{t as f}from"./Button-B9L7vEj2.js";import{t as p}from"./Button-Czofd_Br.js";import{n as m,t as h}from"./Menu-JUw5tcxL.js";import{n as g,t as _}from"./semanticIconOverrides-CAkf2_aJ.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;t((()=>{v=e(r()),m(),i(),g(),u(),p(),l(),a(),y=n(),{userEvent:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/Menu`,component:h,parameters:{docs:{subtitle:`A dropdown that reveals or hides a list of actions.`},layout:`centered`,chromatic:{delay:500,prefersReducedMotion:`reduce`}},argTypes:{children:{control:!1},__demoMode:{table:{disable:!0}},__type:{table:{disable:!0}}},decorators:[e=>(0,y.jsx)(`div`,{className:`p-spacing-size-4`,children:(0,y.jsx)(e,{})})],tags:[`autodocs`,`version:4.0.0`]},S=(0,y.jsxs)(h.Items,{"data-testid":`menu-content`,children:[(0,y.jsxs)(h.Section,{children:[(0,y.jsx)(h.Item,{leadingContent:(0,y.jsx)(s,{name:`heart-filled`,purpose:`decorative`,size:`24px`}),trailingContent:`5`,children:`Favorite`}),(0,y.jsx)(h.Item,{leadingContent:(0,y.jsx)(s,{name:`ballot`,purpose:`decorative`,size:`24px`}),subLabel:`Everyone can see comments`,children:`Add comment`}),(0,y.jsx)(h.Item,{leadingContent:(0,y.jsx)(s,{name:`lock`,purpose:`decorative`,size:`24px`}),children:`Protect with password`})]}),(0,y.jsx)(h.Separator,{}),(0,y.jsxs)(h.Section,{children:[(0,y.jsx)(h.Item,{leadingContent:(0,y.jsx)(s,{name:`print`,purpose:`decorative`,size:`24px`}),children:`Print`}),(0,y.jsx)(h.Item,{isDestructiveAction:!0,leadingContent:(0,y.jsx)(s,{name:`trash`,purpose:`decorative`,size:`24px`}),children:`Destructive`})]}),(0,y.jsx)(h.Separator,{}),(0,y.jsxs)(h.Section,{children:[(0,y.jsx)(h.Heading,{children:`Account`}),(0,y.jsx)(h.Item,{leadingContent:(0,y.jsx)(d,{size:`sm`}),children:`Switch account`}),(0,y.jsx)(h.Item,{leadingContent:(0,y.jsx)(s,{name:`settings`,purpose:`decorative`,size:`24px`}),children:`Settings`})]}),(0,y.jsx)(h.Item,{__type:`caption`,children:`© 2026 Your Company Here, Inc.`})]}),C={args:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h.Button,{children:`Actions`}),S]})}},w={args:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h.Button,{children:`Long Trigger Button Text to Demonstrate Popover Matching`}),(0,y.jsxs)(h.Items,{"data-testid":`menu-content`,children:[(0,y.jsx)(h.Item,{href:`https://headlessui.com/react/menu#menu-button`,children:`Headless UI Docs`}),(0,y.jsx)(h.Item,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu`,children:`MDN: Menu`}),(0,y.jsx)(h.Item,{onClick:()=>console.log(`item clicked`),children:`Trigger Action`}),(0,y.jsx)(h.Item,{disabled:!0,href:`https://example.org/`,children:`Not Possible (disabled)`})]})]})}},T={args:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h.Button,{children:`Menu`}),(0,y.jsxs)(h.Items,{"data-testid":`menu-content`,children:[(0,y.jsx)(h.Item,{href:`https://headlessui.com/react/menu#menu-button`,leadingContent:`link`,children:`Headless UI Docs`}),(0,y.jsx)(h.Item,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu`,leadingContent:`link`,children:`MDN: Menu`}),(0,y.jsx)(h.Item,{disabled:!0,href:`https://example.org/`,leadingContent:`warning-filled`,children:`Not Possible (disabled)`})]})]})}},E={args:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h.PlainButton,{children:(0,y.jsx)(`div`,{className:`fpo`,children:`Menu Button`})}),S]})}},D={args:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h.PlainButton,{as:v.Fragment,children:(0,y.jsx)(f,{rank:`secondary`,children:`Secondary Button`})}),S]})}},O={tags:[`code-only`],args:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h.PlainButton,{children:(0,y.jsx)(d,{isInteractive:!0,user:{fullName:`Josie Sandberg`}})}),S]})}},k={...C,parameters:{...C.parameters,chromatic:{delay:300},snapshot:{skip:!0}},play:async()=>{await b.tab(),await b.keyboard(` `,{delay:300})}},A={...w,parameters:{...w.parameters,chromatic:{delay:300},snapshot:{skip:!0}},play:async()=>{await b.tab(),await b.keyboard(` `,{delay:300})}},j={argTypes:{iconName:{control:`radio`,options:Object.keys(o)}},args:{iconName:`dots-vertical`},tags:[`code-only`],render:({iconName:e})=>(0,y.jsxs)(h,{children:[(0,y.jsx)(h.PlainButton,{children:(0,y.jsx)(s,{name:e,purpose:`informative`,size:`32px`,title:`show more`})}),S]})},M={args:{...C.args},decorators:[e=>(0,y.jsx)(c,{icons:_,children:e()})]},N=[`Default`,`WithLongButtonText`,`WithShortButtonText`,`WithCustomButton`,`WithCustomSecondaryButton`,`MenuWithAvatarButton`,`Opened`,`IconlessOpened`,`MenuWithIconButton`,`WithProvidedIcons`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Menu.Button>Actions</Menu.Button>
        {menuItems}
      </>
  }
}`,...C.parameters?.docs?.source},description:{story:'The Default `Menu` allows for clickable menu items, and provides a default trigger\nbutton that applies `Button` with `rank` as `"primary"`, `iconLayout` as `"right"`, the\n`expand` semantic icon, and a configurable text label.',...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Menu.Button>
          Long Trigger Button Text to Demonstrate Popover Matching
        </Menu.Button>
        <Menu.Items data-testid="menu-content">
          <Menu.Item href="https://headlessui.com/react/menu#menu-button">
            Headless UI Docs
          </Menu.Item>
          <Menu.Item href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu">
            MDN: Menu
          </Menu.Item>
          {}
          <Menu.Item onClick={() => console.log('item clicked')}>
            Trigger Action
          </Menu.Item>
          <Menu.Item disabled href="https://example.org/">
            Not Possible (disabled)
          </Menu.Item>
        </Menu.Items>
      </>
  }
}`,...w.parameters?.docs?.source},description:{story:`Be careful when using a lot of text for a menu trigger. The UI will force the text out of the button container. Use brief text for menu triggers.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Items data-testid="menu-content">
          <Menu.Item href="https://headlessui.com/react/menu#menu-button" leadingContent="link">
            Headless UI Docs
          </Menu.Item>
          <Menu.Item href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" leadingContent="link">
            MDN: Menu
          </Menu.Item>
          <Menu.Item disabled href="https://example.org/" leadingContent="warning-filled">
            Not Possible (disabled)
          </Menu.Item>
        </Menu.Items>
      </>
  }
}`,...T.parameters?.docs?.source},description:{story:"`Menu.Button` instances can, of course, use shorter text for the trigger, which is preferred.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Menu.PlainButton>
          <div className="fpo">Menu Button</div>
        </Menu.PlainButton>
        {menuItems}
      </>
  }
}`,...E.parameters?.docs?.source},description:{story:"`Menu` allows for using various contents in a `PlainButton` wrapper. This lets you specify\nthe component to use as the clickable target, which includes other non-interactive components,\nor a separate `Button` component.\n\nUse `Button` if the UI requires using other treatments than what is provided by `Menu.Button`.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Menu.PlainButton as={React.Fragment}>
          <Button rank="secondary">Secondary Button</Button>
        </Menu.PlainButton>
        {menuItems}
      </>
  }
}`,...D.parameters?.docs?.source},description:{story:"When using `.PlainButton`, you can also use a `Button` instance within it to specify any other\nbutton details, including alternative icon/text combinations, ranks, etc.\n\n**Note**: here we use `React.Fragment` to avoid nesting `<button>` tags within a `<button>` tag.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  args: {
    children: <>
        <Menu.PlainButton>
          <Avatar isInteractive user={{
          fullName: 'Josie Sandberg'
        }} />
        </Menu.PlainButton>
        {menuItems}
      </>
  }
}`,...O.parameters?.docs?.source},description:{story:"Use an interactive `Avatar` component within `.PlainButton` to achieve a clickable avatar with menu attached.\n\nThis will dynamically add the focus ring to the wrapper component since it is needed to make the `Avatar`-based trigger accessible",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...Default,
  parameters: {
    ...Default.parameters,
    // Sets the delay (in milliseconds) for a specific story.
    chromatic: {
      delay: 300
    },
    snapshot: {
      skip: true
    }
  },
  play: async () => {
    await userEvent.tab();
    await userEvent.keyboard(' ', {
      delay: 300
    });
  }
}`,...k.parameters?.docs?.source},description:{story:`For testing purposes: This triggers an open menu.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...WithLongButtonText,
  parameters: {
    ...WithLongButtonText.parameters,
    // Sets the delay (in milliseconds) for a specific story.
    chromatic: {
      delay: 300
    },
    snapshot: {
      skip: true
    }
  },
  play: async () => {
    await userEvent.tab();
    await userEvent.keyboard(' ', {
      delay: 300
    });
  }
}`,...A.parameters?.docs?.source},description:{story:`For testing purposes: This triggers an open menu with the leading slot left empty.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  argTypes: {
    iconName: {
      control: 'radio',
      options: Object.keys(icons)
    }
  },
  args: {
    iconName: 'dots-vertical'
  },
  tags: ['code-only'],
  render: ({
    iconName
  }) => <Menu>
        <Menu.PlainButton>
          <Icon name={iconName} purpose="informative" size="32px" title="show more" />
        </Menu.PlainButton>
        {menuItems}
      </Menu>
}`,...j.parameters?.docs?.source},description:{story:"This Implementation Example shows how to use a menu using an `Icon` for the clickable target.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...M.parameters?.docs?.source},description:{story:"The chevron on `Menu.Button` marks it as the thing that opens the menu, which is a role\nrather than a decoration, so it comes from `IconProvider` and not from a prop on the\nbutton. An `Accordion` row expanding carries the same mark.\n\nA trigger built with `Menu.PlainButton` renders whatever you put in it, so it is yours to\nset and the provider leaves it alone.",...M.parameters?.docs?.description}}}}))();export{C as Default,A as IconlessOpened,O as MenuWithAvatarButton,j as MenuWithIconButton,k as Opened,E as WithCustomButton,D as WithCustomSecondaryButton,w as WithLongButtonText,M as WithProvidedIcons,T as WithShortButtonText,N as __namedExportsOrder,x as default};