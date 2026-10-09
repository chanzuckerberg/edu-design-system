import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";import{n as a,r as o,t as s}from"./IconProvider-CLE0eA_m.js";import{n as c,r as l}from"./Text-DJbcQrwW.js";import{n as u,t as d}from"./semanticIconOverrides-8zHpyBoo.js";import{n as f,t as p}from"./Link-B3y35rrp.js";import{n as m,t as h}from"./Button-Byx35aD3.js";import{n as g,t as _}from"./ButtonGroup-yUc3ozKr.js";var v;function y(){return(y=e((()=>{v={"app-notification":`_app-notification_h8lyp_8`,"app-notification--variant-default":`_app-notification--variant-default_h8lyp_11`,"app-notification--variant-inverse":`_app-notification--variant-inverse_h8lyp_16`,"app-notification__content":`_app-notification__content_h8lyp_27`,"app-notification__title":`_app-notification__title_h8lyp_33`,"app-notification__actions":`_app-notification__actions_h8lyp_37`,"app-notification__close-btn":`_app-notification__close-btn_h8lyp_51`}})))()}var b,x;function S(){return(S=e((()=>{r(),t(),m(),a(),l(),y(),b=n(),x=({className:e,children:t,onDismiss:n,subTitle:r,title:a,variant:s=`default`,...l})=>{let u=i(v[`app-notification`],s&&v[`app-notification--variant-${s}`],e),d=o(`close`);return(0,b.jsx)(`div`,{className:u,role:`status`,...l,children:(0,b.jsxs)(`div`,{className:v[`app-notification__content`],children:[(0,b.jsxs)(`section`,{children:[(0,b.jsx)(c,{as:`div`,className:v[`app-notification__title`],preset:`title-md`,children:a}),(0,b.jsx)(c,{as:`span`,preset:`body-sm`,children:r}),t&&(0,b.jsx)(`div`,{className:v[`app-notification__actions`],children:t})]}),n&&(0,b.jsx)(h,{"aria-label":`close`,className:v[`app-notification__close-btn`],context:`default`,icon:d,iconLayout:`icon-only`,onClick:n,rank:`tertiary`,variant:s===`inverse`?`neutral`:`inverse`})]})})},x.displayName=`AppNotification`;try{x.displayName=`AppNotification`,x.__docgenInfo={description:`## Usage

* Use app notifications sparingly for global messages that affect an entire system.
* Don't use them for engagement messaging, upselling a new feature, or feedback messaging. Use an inline notification or a toast notification instead.
* Don't use for quick confirmation messages. Use a toast component instead because they appear and disappear with little disruption.

### Best Practices

* Do use for a global condition required for the website or app to function, for example, maintenance updates.
* Don't use for quick confirmation messages.

## Interaction

App notifications follow users from screen to screen and remain until dismissed or until the state that caused the notification is resolved. Designers can specify whether the notification is dismissable or persistent. When dismissable, an "X" appears in the top right corner.

## Content & Accessibility

App notification titles should be concise, ideally no more than two lines long.

### Do's

* Focus on a single message or piece of information.
* Ensure users can get the basic message and take action by scanning just the heading and CTA(s).
* Keep the title short and descriptive, communicating the main message in sentence case.
* Keep the body to 1-2 sentences, using sentence case.

### Don'ts

* Don't rely on color to convey meaning.
* Don't punctuate the end of the title.
* Don't repeat or paraphrase information in the heading.
* Don't truncate content; if more information is needed, link to it or consider a different component.`,displayName:`AppNotification`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/AppNotification/AppNotification.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppNotification/AppNotification.tsx`,name:`TypeLiteral`}],description:`The title/heading of the notification`,name:`title`,required:!0,tags:{},type:{name:`string`}},subTitle:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppNotification/AppNotification.tsx`,name:`TypeLiteral`}],description:`Secondary text used to describe the notification in more detail`,name:`subTitle`,required:!0,tags:{},type:{name:`ReactNode`}},variant:{defaultValue:{value:`default`},declarations:[{fileName:`edu-design-system/src/components/AppNotification/AppNotification.tsx`,name:`TypeLiteral`}],description:`Treatment for component (whether it is dark on light text, or light on dark text)`,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "inverse"`,value:[{value:`"default"`},{value:`"inverse"`}]}},children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppNotification/AppNotification.tsx`,name:`TypeLiteral`}],description:'Contents of the component below the title and sub-title (used mainly for `ButtonGroup` containing ranked, `size="sm"` `Buttons`)',name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppNotification/AppNotification.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},onDismiss:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppNotification/AppNotification.tsx`,name:`TypeLiteral`}],description:`Callback when banner is dismissed. When passed in, renders banner with a close icon in the top right.`,name:`onDismiss`,required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{t(),S(),u(),m(),g(),a(),f(),C=n(),w={title:`Components/AppNotification`,component:x,parameters:{docs:{subtitle:`A global alert that persists across pages.`},layout:`centered`},args:{title:`This is an AppNotification title`,subTitle:`Lorem ipsum dolor sit amet consectetur. At et vitae quis amet felis mollis in vitae. Eget in neque et molestie. Luctus sed id commodo volutpat. In a eu in id molestie consectetur pellentesque.`},argTypes:{children:{control:!1},subTitle:{control:`text`}},tags:[`autodocs`,`version:3.0.2`]},T={args:{}},E={render:e=>(0,C.jsx)(x,{...e,children:(0,C.jsxs)(_,{buttonLayout:`horizontal`,className:`!flex-row`,children:[(0,C.jsx)(h,{rank:`secondary`,size:`sm`,variant:e.variant===`inverse`?void 0:`inverse`,children:`Call To Action`}),(0,C.jsx)(h,{rank:`tertiary`,size:`sm`,variant:e.variant===`inverse`?void 0:`inverse`,children:`Other action`})]})})},D={args:{subTitle:(0,C.jsxs)(C.Fragment,{children:[`Some text with a`,` `,(0,C.jsx)(p,{href:`https://example.com/`,variant:`inverse`,children:`link`}),` `,`in.`]})}},O={args:{variant:`inverse`},render:e=>(0,C.jsx)(x,{...e,children:(0,C.jsxs)(_,{buttonLayout:`horizontal`,className:`!flex-row`,children:[(0,C.jsx)(h,{rank:`secondary`,size:`sm`,variant:e.variant===`inverse`?void 0:`inverse`,children:`Call To Action`}),(0,C.jsx)(h,{rank:`tertiary`,size:`sm`,variant:e.variant===`inverse`?void 0:`inverse`,children:`Other action`})]})})},k={args:{...E.args,subTitle:`Limited subTitle text`,onDismiss:()=>{console.log(`dismissing!`)}},render:E.render},A={args:{...O.args,onDismiss:()=>{console.log(`dismissing!`)}},render:O.render},j={args:{...T.args,onDismiss:()=>{}},decorators:[e=>(0,C.jsx)(s,{icons:d,children:e()})]},M=[`Default`,`WithControls`,`WithLinkInSubtitle`,`InverseVariant`,`WithDismissAndControls`,`InverseWithDismissAndControls`,`WithProvidedIcons`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <AppNotification {...args}>
      <ButtonGroup buttonLayout="horizontal" className="!flex-row">
        <Button rank="secondary" size="sm" variant={args.variant === 'inverse' ? undefined : 'inverse'}>
          Call To Action
        </Button>
        <Button rank="tertiary" size="sm" variant={args.variant === 'inverse' ? undefined : 'inverse'}>
          Other action
        </Button>
      </ButtonGroup>
    </AppNotification>
}`,...E.parameters?.docs?.source},description:{story:'`AppNotification`s can contain children that represent actions related to the notification.\nThese should be composed in a `ButtonGroup` component using `size="sm"` `Button`s, and put the primary `Button` / CTA on the left-hand side.',...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    subTitle: <>
        Some text with a{' '}
        <Link href="https://example.com/" variant="inverse">
          link
        </Link>{' '}
        in.
      </>
  }
}`,...D.parameters?.docs?.source},description:{story:"Subtitles in `AppNotification` can be formatted and also contain links. While light formatting is allowed, contents of subTitle should remain as prose.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inverse'
  },
  render: args => <AppNotification {...args}>
      <ButtonGroup buttonLayout="horizontal" className="!flex-row">
        <Button rank="secondary" size="sm" variant={args.variant === 'inverse' ? undefined : 'inverse'}>
          Call To Action
        </Button>
        <Button rank="tertiary" size="sm" variant={args.variant === 'inverse' ? undefined : 'inverse'}>
          Other action
        </Button>
      </ButtonGroup>
    </AppNotification>
}`,...O.parameters?.docs?.source},description:{story:"`AppNotification` components can have an inverse variant",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithControls.args,
    subTitle: 'Limited subTitle text',
    onDismiss: () => {
      console.log('dismissing!');
    }
  },
  render: WithControls.render
}`,...k.parameters?.docs?.source},description:{story:"When dismissed, `AppNotification` can trigger an action on dismissal.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...InverseVariant.args,
    onDismiss: () => {
      console.log('dismissing!');
    }
  },
  render: InverseVariant.render
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onDismiss: () => {}
  },
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...j.parameters?.docs?.source},description:{story:"The dismiss button comes from `IconProvider`, so it carries the same mark as the close\nbutton on a `Modal`, an `InputChip`, or any other notification.",...j.parameters?.docs?.description}}}})))()}N();export{T as Default,O as InverseVariant,A as InverseWithDismissAndControls,E as WithControls,k as WithDismissAndControls,D as WithLinkInSubtitle,j as WithProvidedIcons,M as __namedExportsOrder,w as default};