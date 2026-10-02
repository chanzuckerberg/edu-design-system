import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./clsx-CU3OJm-u.js";import{i as a,n as o,t as s}from"./Icon-DJYKhM6X.js";import{t as c}from"./Link-CsSjfkrQ.js";import{t as l}from"./Link-CigzUnLI.js";import{n as u}from"./Text-s7d_e173.js";import{t as d}from"./Text-4jUaZiwM.js";import{t as f}from"./Button-B9L7vEj2.js";import{t as p}from"./Button-Czofd_Br.js";import{t as m}from"./ButtonGroup-CHAixHud.js";import{t as h}from"./ButtonGroup-VlQiDc46.js";import{n as g,t as _}from"./semanticIconOverrides-CAkf2_aJ.js";var v,y=e((()=>{v={"app-notification":`_app-notification_18q8y_8`,"app-notification--variant-default":`_app-notification--variant-default_18q8y_11`,"app-notification--variant-inverse":`_app-notification--variant-inverse_18q8y_16`,"app-notification__content":`_app-notification__content_18q8y_27`,"app-notification__title":`_app-notification__title_18q8y_33`,"app-notification__actions":`_app-notification__actions_18q8y_37`,"app-notification__close-btn":`_app-notification__close-btn_18q8y_51`}})),b,x,S=e((()=>{r(),n(),p(),s(),d(),y(),b=t(),x=({className:e,children:t,onDismiss:n,subTitle:r,title:o,variant:s=`default`,...c})=>{let l=i(v[`app-notification`],s&&v[`app-notification--variant-${s}`],e),d=a(`close`);return(0,b.jsx)(`div`,{className:l,role:`status`,...c,children:(0,b.jsxs)(`div`,{className:v[`app-notification__content`],children:[(0,b.jsxs)(`section`,{children:[(0,b.jsx)(u,{as:`div`,className:v[`app-notification__title`],preset:`headline-sm`,children:o}),(0,b.jsx)(u,{as:`span`,className:v[`app-notification__sub-title`],preset:`body-md`,children:r}),t&&(0,b.jsx)(`div`,{className:v[`app-notification__actions`],children:t})]}),n&&(0,b.jsx)(f,{"aria-label":`close`,className:v[`app-notification__close-btn`],context:`default`,icon:d,iconLayout:`icon-only`,onClick:n,rank:`tertiary`,variant:s===`inverse`?`neutral`:`inverse`})]})})};try{x.displayName=`AppNotification`,x.__docgenInfo={description:`## Usage

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
* Don't truncate content; if more information is needed, link to it or consider a different component.`,displayName:`AppNotification`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/AppNotification/AppNotification.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppNotification/AppNotification.tsx`,name:`TypeLiteral`}],description:`The title/heading of the notification`,name:`title`,required:!0,tags:{},type:{name:`string`}},subTitle:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppNotification/AppNotification.tsx`,name:`TypeLiteral`}],description:`Secondary text used to describe the notification in more detail`,name:`subTitle`,required:!0,tags:{},type:{name:`ReactNode`}},variant:{defaultValue:{value:`default`},declarations:[{fileName:`edu-design-system/src/components/AppNotification/AppNotification.tsx`,name:`TypeLiteral`}],description:`Treatment for component (whether it is dark on light text, or light on dark text)`,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "inverse"`,value:[{value:`"default"`},{value:`"inverse"`}]}},children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppNotification/AppNotification.tsx`,name:`TypeLiteral`}],description:"Contents of the component below the title and sub-title (used mainly for `ButtonGroup` containing ranked `Buttons`)",name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppNotification/AppNotification.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},onDismiss:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppNotification/AppNotification.tsx`,name:`TypeLiteral`}],description:`Callback when banner is dismissed. When passed in, renders banner with a close icon in the top right.`,name:`onDismiss`,required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})),C,w,T,E,D,O,k,A,j,M;e((()=>{n(),S(),g(),p(),h(),s(),l(),d(),C=t(),w={title:`Components/AppNotification`,component:x,parameters:{docs:{subtitle:`A global alert that persists across pages.`},layout:`centered`},args:{title:`This is an AppNotification title`,subTitle:`Lorem ipsum dolor sit amet consectetur. At et vitae quis amet felis mollis in vitae. Eget in neque et molestie. Luctus sed id commodo volutpat. In a eu in id molestie consectetur pellentesque.`},argTypes:{children:{control:!1},subTitle:{control:`text`}},tags:[`autodocs`,`version:3.0.1`]},T={args:{}},E={render:e=>(0,C.jsx)(x,{...e,children:(0,C.jsxs)(m,{buttonLayout:`horizontal`,className:`!flex-row`,children:[(0,C.jsx)(f,{rank:`secondary`,variant:e.variant===`inverse`?void 0:`inverse`,children:`Call To Action`}),(0,C.jsx)(f,{rank:`tertiary`,variant:e.variant===`inverse`?void 0:`inverse`,children:`Other action`})]})})},D={args:{subTitle:(0,C.jsxs)(u,{as:`span`,children:[`Some text with a`,` `,(0,C.jsx)(c,{href:`https://example.com/`,variant:`inverse`,children:`link`}),` `,`in.`]})}},O={args:{variant:`inverse`},render:e=>(0,C.jsx)(x,{...e,children:(0,C.jsxs)(m,{buttonLayout:`horizontal`,className:`!flex-row`,children:[(0,C.jsx)(f,{rank:`secondary`,variant:e.variant===`inverse`?void 0:`inverse`,children:`Call To Action`}),(0,C.jsx)(f,{rank:`tertiary`,variant:e.variant===`inverse`?void 0:`inverse`,children:`Other action`})]})})},k={args:{...E.args,subTitle:`Limited subTitle text`,onDismiss:()=>{console.log(`dismissing!`)}},render:E.render},A={args:{...O.args,onDismiss:()=>{console.log(`dismissing!`)}},render:O.render},j={args:{...T.args,onDismiss:()=>{}},decorators:[e=>(0,C.jsx)(o,{icons:_,children:e()})]},M=[`Default`,`WithControls`,`WithLinkInSubtitle`,`InverseVariant`,`WithDismissAndControls`,`InverseWithDismissAndControls`,`WithProvidedIcons`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <AppNotification {...args}>
      <ButtonGroup buttonLayout="horizontal" className="!flex-row">
        <Button rank="secondary" variant={args.variant === 'inverse' ? undefined : 'inverse'}>
          Call To Action
        </Button>
        <Button rank="tertiary" variant={args.variant === 'inverse' ? undefined : 'inverse'}>
          Other action
        </Button>
      </ButtonGroup>
    </AppNotification>
}`,...E.parameters?.docs?.source},description:{story:"`AppNotification`s can contain children that represent actions related to the notification.\nThese should be composed in a `ButtonGroup` component, and put the primary `Button` / CTA on the left-hand side.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    subTitle: <Text as="span">
        Some text with a{' '}
        <Link href="https://example.com/" variant="inverse">
          link
        </Link>{' '}
        in.
      </Text>
  }
}`,...D.parameters?.docs?.source},description:{story:"Subtitles in `AppNotification` can be formatted and also contain links. While light formatting is allowed, contents of subTitle should remain as prose.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inverse'
  },
  render: args => <AppNotification {...args}>
      <ButtonGroup buttonLayout="horizontal" className="!flex-row">
        <Button rank="secondary" variant={args.variant === 'inverse' ? undefined : 'inverse'}>
          Call To Action
        </Button>
        <Button rank="tertiary" variant={args.variant === 'inverse' ? undefined : 'inverse'}>
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
}`,...j.parameters?.docs?.source},description:{story:"The dismiss button comes from `IconProvider`, so it carries the same mark as the close\nbutton on a `Modal`, an `InputChip`, or any other notification.",...j.parameters?.docs?.description}}}}))();export{T as Default,O as InverseVariant,A as InverseWithDismissAndControls,E as WithControls,k as WithDismissAndControls,D as WithLinkInSubtitle,j as WithProvidedIcons,M as __namedExportsOrder,w as default};