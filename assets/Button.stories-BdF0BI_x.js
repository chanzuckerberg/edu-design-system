import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./FpoBlock-DB6Mv5jR.js";import{n as a,t as o}from"./Button-Byx35aD3.js";function s(e){return(0,c.jsx)(o,{...e,onClick:()=>alert(`handle to value: ${e.to}`)})}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{t(),a(),r(),c=n(),{userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Button`,component:o,args:{children:`Button`,isFullWidth:!1,size:`lg`,isLoading:!1},argTypes:{isFullWidth:{control:`boolean`},isLoading:{control:`boolean`}},parameters:{docs:{subtitle:`Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it. Also known as action, call to action or CTA.`},layout:`centered`},tags:[`autodocs`,`version:3.0.0`],decorators:[e=>(0,c.jsx)(`div`,{className:`p-1`,children:e()})]},d={args:{children:`Button`}},f={args:{...d.args},render:e=>(0,c.jsxs)(`div`,{className:`flex gap-1`,children:[(0,c.jsx)(o,{...e,className:`btn-primary`,rank:`primary`,children:`Primary`}),(0,c.jsx)(o,{...e,className:`btn-secondary`,rank:`secondary`,children:`Secondary`}),(0,c.jsx)(o,{...e,className:`btn-tertiary`,rank:`tertiary`,children:`Tertiary`})]})},p={args:{icon:`menu`,iconLayout:`left`,rank:`tertiary`,size:`sm`},play:async()=>{await l.tab()}},m={args:{...f.args,isDisabled:!0},render:f.render},h={args:{...f.args,disabled:!0},render:f.render},g={args:{rank:`tertiary`,context:`standalone`}},_={args:{...f.args,variant:`critical`},render:f.render},v={args:{...f.args,variant:`neutral`},render:f.render},y={args:{...f.args,variant:`inverse`},render:f.render,globals:{backgrounds:{value:`background-utility-default-high-emphasis`}}},b={args:{...f.args,variant:`inverse`,isDisabled:!0},render:f.render,globals:{backgrounds:{value:`background-utility-default-high-emphasis`}}},x={args:{...d.args},render:e=>(0,c.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,c.jsx)(o,{...e,"aria-label":`Large button`,size:`lg`,children:`Large`}),(0,c.jsx)(o,{...e,"aria-label":`Medium button`,size:`md`,children:`Medium`}),(0,c.jsx)(o,{...e,"aria-label":`Small button`,size:`sm`,children:`Small`})]})},S={args:{...x.args,icon:`menu`,iconLayout:`left`},render:x.render},C={args:{...x.args,icon:`menu`,iconLayout:`right`},render:x.render},w={args:{...x.args,icon:`menu`,iconLayout:`icon-only`},render:x.render},T={args:{...x.args,isFullWidth:!0},parameters:{layout:`padded`},render:x.render},E={args:{...x.args,isFullWidth:!0,isDisabled:!0},parameters:{layout:`padded`},render:x.render},D={args:{...x.args,isLoading:!0},render:x.render},O={args:{...d.args,children:void 0,icon:`open-in-new`},render:e=>(0,c.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,c.jsx)(o,{...e,iconLayout:`left`,children:`Left`}),(0,c.jsx)(o,{...e,iconLayout:`right`,children:`Right`}),(0,c.jsx)(o,{...e,"aria-label":`Label must be applied with icon-only layout`,iconLayout:`icon-only`})]})},k={render:e=>(0,c.jsxs)(`div`,{children:[`Lorem ipsum dolor sit amet, . Morbi porta at ante quis molestie. Nam scelerisque id diam at iaculis. Nullam sit amet iaculis erat. Nulla id tellus ante.`,` `,(0,c.jsx)(s,{...e,to:`test`,children:`consectetur adipiscing elit`})]})},A={args:{...x.args,iconLayout:`left`},render:e=>(0,c.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,c.jsx)(o,{...e,"aria-label":`Large button`,icon:(0,c.jsx)(i,{size:24}),size:`lg`,children:`Large`}),(0,c.jsx)(o,{...e,"aria-label":`Medium button`,icon:(0,c.jsx)(i,{size:16}),size:`md`,children:`Medium`}),(0,c.jsx)(o,{...e,"aria-label":`Small button`,icon:(0,c.jsx)(i,{size:16}),size:`sm`,children:`Small`})]})},j={args:{...A.args,iconLayout:`icon-only`},render:A.render},M=[`Default`,`DefaultRanks`,`Tertiary`,`Disabled`,`JustDisabledProp`,`TertiaryStandalone`,`CriticalRanks`,`NeutralRanks`,`InverseRanks`,`InverseDisabledRanks`,`Sizes`,`LeftIconSizes`,`RightIconSizes`,`IconOnlySizes`,`FullWidths`,`DisabledFullWidths`,`LoadingStates`,`IconLayouts`,`UsingExtendedLink`,`WithFpoIconContent`,`WithFpoIconOnlyContent`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div className="flex gap-1">
        <Button {...args} className="btn-primary" rank="primary">
          Primary
        </Button>
        <Button {...args} className="btn-secondary" rank="secondary">
          Secondary
        </Button>
        <Button {...args} className="btn-tertiary" rank="tertiary">
          Tertiary
        </Button>
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`Each button can come in a set of ranks, denoting the importance of the button to the surrounding UI.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'menu',
    iconLayout: 'left',
    rank: 'tertiary',
    size: 'sm'
  },
  play: async () => {
    await userEvent.tab();
  }
}`,...p.parameters?.docs?.source},description:{story:`Tertiary buttons have no border, but will on hover/focus`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultRanks.args,
    isDisabled: true
  },
  render: DefaultRanks.render
}`,...m.parameters?.docs?.source},description:{story:"Buttons can be disabled for each rank using `isDisabled`",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultRanks.args,
    disabled: true
  },
  render: DefaultRanks.render
}`,...h.parameters?.docs?.source},description:{story:"Since `isDisabled` will set the form's proper disabled state, don't use just `disabled`. This will show a visual error.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    rank: 'tertiary',
    context: 'standalone'
  }
}`,...g.parameters?.docs?.source},description:{story:`Tertiary buttons can have an additional level of emphasis when stood by themselves. Use this case sparingly.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultRanks.args,
    variant: 'critical'
  },
  render: DefaultRanks.render
}`,..._.parameters?.docs?.source},description:{story:`Each button has variants denoting criticality, like for changes that are permanent, deletions, etc.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultRanks.args,
    variant: 'neutral'
  },
  render: DefaultRanks.render
}`,...v.parameters?.docs?.source},description:{story:`There is also a neutral variant, to combine into other components, or provide a muted appearance.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultRanks.args,
    variant: 'inverse'
  },
  render: DefaultRanks.render,
  globals: {
    backgrounds: {
      value: 'background-utility-default-high-emphasis'
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`Each rank also includes an inverse variant, for use on dark backgrounds.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultRanks.args,
    variant: 'inverse',
    isDisabled: true
  },
  render: DefaultRanks.render,
  globals: {
    backgrounds: {
      value: 'background-utility-default-high-emphasis'
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`Inverse buttons can be disabled as well`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div className="flex items-center gap-1">
        <Button {...args} aria-label="Large button" size="lg">
          Large
        </Button>
        <Button {...args} aria-label="Medium button" size="md">
          Medium
        </Button>
        <Button {...args} aria-label="Small button" size="sm">
          Small
        </Button>
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:`Buttons come in three sizes`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Sizes.args,
    icon: 'menu',
    iconLayout: 'left'
  },
  render: Sizes.render
}`,...S.parameters?.docs?.source},description:{story:`Each si can have icons on the left ...`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Sizes.args,
    icon: 'menu',
    iconLayout: 'right'
  },
  render: Sizes.render
}`,...C.parameters?.docs?.source},description:{story:`... or right ...`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Sizes.args,
    icon: 'menu',
    iconLayout: 'icon-only'
  },
  render: Sizes.render
}`,...w.parameters?.docs?.source},description:{story:`... or an icon all by itself.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Sizes.args,
    isFullWidth: true
  },
  parameters: {
    layout: 'padded'
  },
  render: Sizes.render
}`,...T.parameters?.docs?.source},description:{story:`Buttons can come with full width set, which will expand the button to its maximum width (diferent for each size)`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Sizes.args,
    isFullWidth: true,
    isDisabled: true
  },
  parameters: {
    layout: 'padded'
  },
  render: Sizes.render
}`,...E.parameters?.docs?.source},description:{story:`Buttons can come with full width set, which will expand the button to its maximum width (diferent for each size). Respects Disabled`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Sizes.args,
    isLoading: true
  },
  render: Sizes.render
}`,...D.parameters?.docs?.source},description:{story:`When in the loading state, a button will show a loading indicator in place of the normal button text, maintaining the initial size.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined,
    icon: 'open-in-new'
  },
  render: args => {
    return <div className="flex items-center gap-1">
        <Button {...args} iconLayout="left">
          Left
        </Button>
        <Button {...args} iconLayout="right">
          Right
        </Button>
        <Button {...args} aria-label="Label must be applied with icon-only layout" iconLayout="icon-only" />
      </div>;
  }
}`,...O.parameters?.docs?.source},description:{story:'`iconLayout` lets you place the icons adjacent to button text, or as the only visible element.\nWhen using `"icon-only"`, you **must** include a label (e.g., via `aria-label`).',...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      Lorem ipsum dolor sit amet, . Morbi porta at ante quis molestie. Nam
      scelerisque id diam at iaculis. Nullam sit amet iaculis erat. Nulla id
      tellus ante.{' '}
      <ExtendedButton {...args} to="test">
        consectetur adipiscing elit
      </ExtendedButton>
    </div>
}`,...k.parameters?.docs?.source},description:{story:`You can extend a component's props for use with libraries that aid navigation, e.g., react-dom-router, et al.

Steps to use:

* import \`ButtonProps\`
* use the type param. to augment the types for \`Button\` with the library's type
* Now export a new function component that uses the new prop type and returns a composed function

When using this pattern, you likely want to also specify the library's Button component using \`as\`

\`\`\`tsx
type CustomLinkProps = React.ComponentProps<typeof CustomLink>;
type ExtendedProps = LinkProps<CustomLinkProps>;

export default function Button({children, ...other}: ExtendedProps) {
  return (
   <Button as={CustomButton} {...other}>
     {children}
   </Button>
  );
}
\`\`\``,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Sizes.args,
    iconLayout: 'left'
  },
  render: args => <div className="flex items-center gap-1">
      <Button {...args} aria-label="Large button" icon={<FpoBlock size={24} />} size="lg">
        Large
      </Button>
      <Button {...args} aria-label="Medium button" icon={<FpoBlock size={16} />} size="md">
        Medium
      </Button>
      <Button {...args} aria-label="Small button" icon={<FpoBlock size={16} />} size="sm">
        Small
      </Button>
    </div>
}`,...A.parameters?.docs?.source},description:{story:`The icon slot takes arbitrary content, not only an EDS icon name. The blocks below stand
in for whatever you supply, so the slot itself is the subject rather than the icon that
happened to be picked.

\`Button\` renders a 24px icon at \`size="lg"\` and 16px below it, so each block matches its
own button.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithFpoIconContent.args,
    iconLayout: 'icon-only'
  },
  render: WithFpoIconContent.render
}`,...j.parameters?.docs?.source},description:{story:'`iconLayout="icon-only"` takes content the same way. The button still gets its accessible\nname from `aria-label`, since the slot is decorative either way.',...j.parameters?.docs?.description}}}})))()}N();export{_ as CriticalRanks,d as Default,f as DefaultRanks,m as Disabled,E as DisabledFullWidths,T as FullWidths,O as IconLayouts,w as IconOnlySizes,b as InverseDisabledRanks,y as InverseRanks,h as JustDisabledProp,S as LeftIconSizes,D as LoadingStates,v as NeutralRanks,C as RightIconSizes,x as Sizes,p as Tertiary,g as TertiaryStandalone,k as UsingExtendedLink,A as WithFpoIconContent,j as WithFpoIconOnlyContent,M as __namedExportsOrder,u as default};