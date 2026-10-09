import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";import{n as a,t as o}from"./Heading-CI3mrpQ7.js";import{n as s,r as c,t as l}from"./IconSlot-Chsa5gUx.js";import{n as u,r as d,t as f}from"./IconProvider-CLE0eA_m.js";import{n as p,r as m}from"./Text-DJbcQrwW.js";import{n as h,t as g}from"./semanticIconOverrides-8zHpyBoo.js";import{n as _,t as v}from"./Button-Byx35aD3.js";var y;function b(){return(b=e((()=>{y={"page-notification":`_page-notification_1313e_10`,"page-notification--status-informational":`_page-notification--status-informational_1313e_21`,"page-notification--status-critical":`_page-notification--status-critical_1313e_25`,"page-notification--status-favorable":`_page-notification--status-favorable_1313e_29`,"page-notification--status-warning":`_page-notification--status-warning_1313e_33`,"page-notification__icon":`_page-notification__icon_1313e_38`,"page-notification__body":`_page-notification__body_1313e_54`,"page-notification--has-vertical-cta":`_page-notification--has-vertical-cta_1313e_58`,"page-notification--has-horizontal-cta":`_page-notification--has-horizontal-cta_1313e_62`,"page-notification__call-to-action":`_page-notification__call-to-action_1313e_68`,"page-notification--with-subTitle":`_page-notification--with-subTitle_1313e_74`,"page-notification__text":`_page-notification__text_1313e_78`,"page-notification__close-button":`_page-notification__close-button_1313e_87`}})))()}var x,S;function C(){return(C=e((()=>{r(),t(),_(),a(),c(),u(),m(),b(),x=n(),S=({buttonLayout:e=`vertical`,callToAction:t,className:n,subTitle:r,onDismiss:a,status:c=`informational`,title:u,...f})=>{let m=i(y[`page-notification`],c&&y[`page-notification--status-${c}`],n),h=d(c),g=d(`close`);return(0,x.jsxs)(`aside`,{className:m,...f,children:[s(h)&&(0,x.jsx)(l,{className:y[`page-notification__icon`],content:h,purpose:`decorative`,size:`24px`}),(0,x.jsxs)(`div`,{className:i(y[`page-notification__body`],e&&y[`page-notification--has-${e}-cta`]),children:[(0,x.jsxs)(`div`,{className:i(y[`page-notification__text`],r&&y[`page-notification--with-subTitle`]),children:[u&&(0,x.jsx)(o,{as:`h3`,preset:`title-md`,children:u}),r&&(0,x.jsx)(p,{as:`p`,preset:`body-sm`,children:r})]}),t&&(0,x.jsx)(`div`,{className:y[`page-notification__call-to-action`],children:t})]}),a&&(0,x.jsx)(v,{"aria-label":`Dismiss the notification`,className:y[`page-notification__close-button`],icon:g,iconLayout:`icon-only`,onClick:a,rank:`tertiary`,size:`lg`,variant:`neutral`})]})},S.displayName=`PageNotification`;try{S.displayName=`PageNotification`,S.__docgenInfo={description:`## Usage

* Notifications related to a section of a page (like a card, popover, or modal) should use an Inline Notification.
* Page Notifications are intended to display short messages. Ideally, a max of 3 lines.

## Interaction

Designers can specify whether the notification is dismissible or not. A dismissible notification renders with a close icon in the top right.

## Content & Accessibility

### Do's

* Focus on a single message or piece of information.
* Ensure users can get the basic message and take action by scanning just the heading and CTA(s).
* Title: be short and descriptive, communicate the main message, and use sentence case.
* Body: keep to 1-2 sentences and use sentence case.

### Don'ts

* Don't rely on color to convey meaning.
* Don't punctuate the end of the title.
* Don't repeat or paraphrase information from the heading in the body.
* Don't truncate content; if more information is needed, link to it or consider a different component.`,displayName:`PageNotification`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/PageNotification/PageNotification.tsx`,methods:[],props:{onDismiss:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PageNotification/PageNotification.tsx`,name:`TypeLiteral`}],description:`Callback when notification is dismissed. When passed in, renders banner with a close icon in the top right.`,name:`onDismiss`,required:!1,tags:{},type:{name:`(() => void)`}},style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PageNotification/PageNotification.tsx`,name:`TypeLiteral`}],description:"CSS properties defined for the HTML element. Includes the component's CSS Custom Properties:\n\n- `--page-notification__bg`\n- `--page-notification__fg`",name:`style`,required:!1,tags:{},type:{name:`PageNotificationCSSProperties`}},buttonLayout:{defaultValue:{value:`vertical`},declarations:[{fileName:`edu-design-system/src/components/PageNotification/PageNotification.tsx`,name:`TypeLiteral`}],description:`Whether the button layout for the call to action is vertical or horizontal.`,name:`buttonLayout`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},callToAction:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PageNotification/PageNotification.tsx`,name:`TypeLiteral`}],description:`Slot for a button or other interactive element to direct a user to a follow-up action`,name:`callToAction`,required:!1,tags:{},type:{name:`ReactNode`}},status:{defaultValue:{value:`informational`},declarations:[{fileName:`edu-design-system/src/components/PageNotification/PageNotification.tsx`,name:`TypeLiteral`}],description:`Keyword to characterize the state of the notification

**Default is \`"informational"\`**.`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`Status`,value:[{value:`"critical"`},{value:`"informational"`},{value:`"warning"`},{value:`"favorable"`}]}},subTitle:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PageNotification/PageNotification.tsx`,name:`TypeLiteral`}],description:`Secondary text used to describe the content in more detail`,name:`subTitle`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{t(),C(),h(),_(),u(),w=n(),T={title:`Components/PageNotification`,component:S,parameters:{docs:{subtitle:`A page notification communicates a message about the page it appears on.`},layout:`centered`},args:{title:`Alert title which communicates info to the user`,callToAction:(0,w.jsx)(v,{rank:`secondary`,size:`sm`,variant:`neutral`,children:`Call to Action`}),className:`w-[627px]`,onDismiss:()=>{}},argTypes:{subTitle:{control:{type:`text`}},callToAction:{control:!1}},tags:[`autodocs`,`version:2.2.0`]},E={args:{subTitle:`Body text which provides additional detail`,"aria-label":`Default alert title`,onDismiss:void 0}},D={args:{"aria-label":`Default alert title`,status:`informational`}},O={args:{status:`critical`,"aria-label":`Critical title which communicates info to the user`}},k={args:{status:`warning`,"aria-label":`Warning title which communicates info to the user`}},A={args:{status:`favorable`,"aria-label":`Favorable title which communicates info to the user`}},j={args:{"aria-label":`Default alert title`,title:`Alert title which communicates info to the user that is kind of long and wraps to multiple lines`,subTitle:`Body text which provides additional detail`}},M={args:{"aria-label":`Default alert title`,title:`Alert title which communicates info to the user that is kind of long and wraps to multiple lines`}},N={args:{"aria-label":`Default alert title`,title:`Shorter alert title`,subTitle:`Body text which provides additional detail`,buttonLayout:`horizontal`}},P={render:e=>(0,w.jsxs)(`div`,{className:`gap-spacing-size-1 flex flex-col`,children:[(0,w.jsx)(S,{...e,"aria-label":`Notification 1 of 2`,status:`critical`,subTitle:`Subtitle which provides additional detail`,title:`Test Critical Title`}),(0,w.jsx)(S,{...e,"aria-label":`Notification 2 of 2`,status:`favorable`,subTitle:`Subtitle which provides additional detail`,title:`Test Favorable Title`})]})},F={args:{...O.args},decorators:[e=>(0,w.jsx)(f,{icons:g,children:e()})]},I=[`Default`,`Informational`,`Critical`,`Warning`,`Favorable`,`WithTitleWrapping`,`WithTitleWrappingAndNoSubTitle`,`WithHorizontalLayout`,`MultipleNotifications`,`WithProvidedIcons`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    subTitle: 'Body text which provides additional detail',
    'aria-label': 'Default alert title',
    onDismiss: undefined
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default alert title',
    status: 'informational'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'critical',
    'aria-label': 'Critical title which communicates info to the user'
  }
}`,...O.parameters?.docs?.source},description:{story:"When using critical, make sure `Button` has a matching variant specified.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    'aria-label': 'Warning title which communicates info to the user'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'favorable',
    'aria-label': 'Favorable title which communicates info to the user'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default alert title',
    title: 'Alert title which communicates info to the user that is kind of long and wraps to multiple lines',
    subTitle: 'Body text which provides additional detail'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default alert title',
    title: 'Alert title which communicates info to the user that is kind of long and wraps to multiple lines'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default alert title',
    title: 'Shorter alert title',
    subTitle: 'Body text which provides additional detail',
    buttonLayout: 'horizontal'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <div className="gap-spacing-size-1 flex flex-col">
      <PageNotification {...args} aria-label="Notification 1 of 2" status="critical" subTitle="Subtitle which provides additional detail" title="Test Critical Title" />
      <PageNotification {...args} aria-label="Notification 2 of 2" status="favorable" subTitle="Subtitle which provides additional detail" title="Test Favorable Title" />
    </div>
}`,...P.parameters?.docs?.source},description:{story:`When having multiple notifications on screen at once, make sure they are labeled uniquely, so that assistive technologies can tell them apart.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...Critical.args
  },
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...F.parameters?.docs?.source},description:{story:"Both icons here come from `IconProvider`: the status icon carrying the notification's\nseverity, and the dismiss button, which is the same close affordance used everywhere else.\n\nHere `critical` becomes the outline version of the icon, and the close button a minus.",...F.parameters?.docs?.description}}}})))()}L();export{O as Critical,E as Default,A as Favorable,D as Informational,P as MultipleNotifications,k as Warning,N as WithHorizontalLayout,F as WithProvidedIcons,j as WithTitleWrapping,M as WithTitleWrappingAndNoSubTitle,I as __namedExportsOrder,T as default};