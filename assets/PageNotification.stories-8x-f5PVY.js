import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./clsx-CU3OJm-u.js";import{a,i as o,n as s,o as c,t as l}from"./Icon-DJYKhM6X.js";import{n as u}from"./Text-s7d_e173.js";import{t as d}from"./Text-4jUaZiwM.js";import{t as f}from"./Button-B9L7vEj2.js";import{t as p}from"./Button-Czofd_Br.js";import{t as m}from"./Heading-Cx0nZAi1.js";import{t as h}from"./Heading-BmGY1R4y.js";import{n as g,t as _}from"./semanticIconOverrides-CAkf2_aJ.js";var v,y=e((()=>{v={"page-notification":`_page-notification_1313e_10`,"page-notification--status-informational":`_page-notification--status-informational_1313e_21`,"page-notification--status-critical":`_page-notification--status-critical_1313e_25`,"page-notification--status-favorable":`_page-notification--status-favorable_1313e_29`,"page-notification--status-warning":`_page-notification--status-warning_1313e_33`,"page-notification__icon":`_page-notification__icon_1313e_38`,"page-notification__body":`_page-notification__body_1313e_54`,"page-notification--has-vertical-cta":`_page-notification--has-vertical-cta_1313e_58`,"page-notification--has-horizontal-cta":`_page-notification--has-horizontal-cta_1313e_62`,"page-notification__call-to-action":`_page-notification__call-to-action_1313e_68`,"page-notification--with-subTitle":`_page-notification--with-subTitle_1313e_74`,"page-notification__text":`_page-notification__text_1313e_78`,"page-notification__close-button":`_page-notification__close-button_1313e_87`}})),b,x,S=e((()=>{r(),n(),p(),h(),l(),d(),y(),b=t(),x=({buttonLayout:e=`vertical`,callToAction:t,className:n,subTitle:r,onDismiss:s,status:l=`informational`,title:d,...p})=>{let h=i(v[`page-notification`],l&&v[`page-notification--status-${l}`],s&&v[`page-notification--dismissable`],n),g=o(l),_=o(`close`);return(0,b.jsxs)(`aside`,{className:h,...p,children:[c(g)&&(0,b.jsx)(a,{className:v[`page-notification__icon`],content:g,purpose:`decorative`,size:`24px`}),(0,b.jsxs)(`div`,{className:i(v[`page-notification__body`],e&&v[`page-notification--has-${e}-cta`]),children:[(0,b.jsxs)(`div`,{className:i(v[`page-notification__text`],r&&v[`page-notification--with-subTitle`]),children:[d&&(0,b.jsx)(m,{as:`h3`,preset:`title-md`,children:d}),r&&(0,b.jsx)(u,{as:`p`,className:v[`page-notification__sub-title`],preset:`body-sm`,children:r})]}),t&&(0,b.jsx)(`div`,{className:v[`page-notification__call-to-action`],children:t})]}),s&&(0,b.jsx)(f,{"aria-label":`Dismiss the notification`,className:v[`page-notification__close-button`],icon:_,iconLayout:`icon-only`,onClick:s,rank:`tertiary`,size:`lg`,variant:`neutral`})]})},x.displayName=`PageNotification`;try{x.displayName=`PageNotification`,x.__docgenInfo={description:`## Usage

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

**Default is \`"informational"\`**.`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`Status`,value:[{value:`"critical"`},{value:`"informational"`},{value:`"warning"`},{value:`"favorable"`}]}},subTitle:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PageNotification/PageNotification.tsx`,name:`TypeLiteral`}],description:`Secondary text used to describe the content in more detail`,name:`subTitle`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})),C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{n(),S(),g(),p(),l(),C=t(),w={title:`Components/PageNotification`,component:x,parameters:{docs:{subtitle:`A page notification communicates a message about the page it appears on.`},layout:`centered`},args:{title:`Alert title which communicates info to the user`,callToAction:(0,C.jsx)(f,{rank:`secondary`,size:`sm`,variant:`neutral`,children:`Call to Action`}),className:`w-[627px]`,onDismiss:()=>{}},argTypes:{subTitle:{control:{type:`text`}},callToAction:{control:!1}},tags:[`autodocs`,`version:2.2.0`]},T={args:{subTitle:`Body text which provides additional detail`,"aria-label":`Default alert title`,onDismiss:void 0}},E={args:{"aria-label":`Default alert title`,status:`informational`}},D={args:{status:`critical`,"aria-label":`Critical title which communicates info to the user`}},O={args:{status:`warning`,"aria-label":`Warning title which communicates info to the user`}},k={args:{status:`favorable`,"aria-label":`Favorable title which communicates info to the user`}},A={args:{"aria-label":`Default alert title`,title:`Alert title which communicates info to the user that is kind of long and wraps to multiple lines`,subTitle:`Body text which provides additional detail`}},j={args:{"aria-label":`Default alert title`,title:`Alert title which communicates info to the user that is kind of long and wraps to multiple lines`}},M={args:{"aria-label":`Default alert title`,title:`Shorter alert title`,subTitle:`Body text which provides additional detail`,buttonLayout:`horizontal`}},N={render:e=>(0,C.jsxs)(`div`,{className:`gap-spacing-size-1 flex flex-col`,children:[(0,C.jsx)(x,{...e,"aria-label":`Notification 1 of 2`,status:`critical`,subTitle:`Subtitle which provides additional detail`,title:`Test Critical Title`}),(0,C.jsx)(x,{...e,"aria-label":`Notification 2 of 2`,status:`favorable`,subTitle:`Subtitle which provides additional detail`,title:`Test Favorable Title`})]})},P={args:{...D.args},decorators:[e=>(0,C.jsx)(s,{icons:_,children:e()})]},F=[`Default`,`Informational`,`Critical`,`Warning`,`Favorable`,`WithTitleWrapping`,`WithTitleWrappingAndNoSubTitle`,`WithHorizontalLayout`,`MultipleNotifications`,`WithProvidedIcons`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    subTitle: 'Body text which provides additional detail',
    'aria-label': 'Default alert title',
    onDismiss: undefined
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default alert title',
    status: 'informational'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'critical',
    'aria-label': 'Critical title which communicates info to the user'
  }
}`,...D.parameters?.docs?.source},description:{story:"When using critical, make sure `Button` has a matching variant specified.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    'aria-label': 'Warning title which communicates info to the user'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'favorable',
    'aria-label': 'Favorable title which communicates info to the user'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default alert title',
    title: 'Alert title which communicates info to the user that is kind of long and wraps to multiple lines',
    subTitle: 'Body text which provides additional detail'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default alert title',
    title: 'Alert title which communicates info to the user that is kind of long and wraps to multiple lines'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default alert title',
    title: 'Shorter alert title',
    subTitle: 'Body text which provides additional detail',
    buttonLayout: 'horizontal'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <div className="gap-spacing-size-1 flex flex-col">
      <PageNotification {...args} aria-label="Notification 1 of 2" status="critical" subTitle="Subtitle which provides additional detail" title="Test Critical Title" />
      <PageNotification {...args} aria-label="Notification 2 of 2" status="favorable" subTitle="Subtitle which provides additional detail" title="Test Favorable Title" />
    </div>
}`,...N.parameters?.docs?.source},description:{story:`When having multiple notifications on screen at once, make sure they are labeled uniquely, so that assistive technologies can tell them apart.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...Critical.args
  },
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...P.parameters?.docs?.source},description:{story:"Both icons here come from `IconProvider`: the status icon carrying the notification's\nseverity, and the dismiss button, which is the same close affordance used everywhere else.\n\nHere `critical` becomes the outline version of the icon, and the close button a minus.",...P.parameters?.docs?.description}}}}))();export{D as Critical,T as Default,k as Favorable,E as Informational,N as MultipleNotifications,O as Warning,M as WithHorizontalLayout,P as WithProvidedIcons,A as WithTitleWrapping,j as WithTitleWrappingAndNoSubTitle,F as __namedExportsOrder,w as default};