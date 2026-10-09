import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./clsx-CTwy9ux-.js";import{r as o,t as s}from"./transition-B3Lfbtyn.js";import{i as c,t as l}from"./logging-DIGRaM8w.js";import{n as u,r as d,t as f}from"./IconSlot-Chsa5gUx.js";import{n as p,r as m,t as h}from"./IconProvider-CLE0eA_m.js";import{n as g,r as _}from"./Text-DJbcQrwW.js";import{n as v,t as y}from"./semanticIconOverrides-8zHpyBoo.js";import{n as b,t as x}from"./Button-Byx35aD3.js";var S,C,w,T;function E(){return(E=t((()=>{S=`_toast_114xq_7`,C=`_toast__icon_114xq_21`,w=`_toast__body_114xq_54`,T={toast:S,toast__icon:C,"toast--status-critical":`_toast--status-critical_114xq_31`,"toast--status-warning":`_toast--status-warning_114xq_35`,"toast--status-favorable":`_toast--status-favorable_114xq_39`,"toast--status-informational":`_toast--status-informational_114xq_43`,toast__body:w,"toast__dismiss-button":`_toast__dismiss-button_114xq_58`}})))()}var D,O,k;function A(){return(A=t((()=>{i(),D=e(n()),c(),b(),d(),p(),_(),E(),O=r(),k=({className:e,dismissType:t=`manual`,onDismiss:n,status:r=`favorable`,timeout:i=8e3,title:o,...s})=>{let c=a(T.toast,r&&T[`toast--status-${r}`],e);l([!!i&&n===void 0&&t===`auto`],`When using dismissType=auto, an onDismiss method must be defined`,`error`);let d=m(r),p=m(`close`);return(0,D.useEffect)(()=>{let e=t===`auto`?setTimeout(()=>{n&&n()},i):void 0;return()=>clearTimeout(e)},[n,t,i]),(0,O.jsxs)(`div`,{className:c,...s,children:[u(d)&&(0,O.jsx)(f,{className:T.toast__icon,content:d,purpose:`decorative`,size:`24px`}),(0,O.jsx)(`div`,{className:T.toast__body,children:(0,O.jsx)(g,{as:`span`,preset:`body-md`,children:o})}),n&&(0,O.jsx)(x,{"aria-label":`close`,className:T[`toast__dismiss-button`],context:`default`,icon:p,iconLayout:`icon-only`,onClick:n,rank:`tertiary`,size:`md`,variant:`inverse`})]})},k.displayName=`ToastNotification`;try{k.displayName=`ToastNotification`,k.__docgenInfo={description:`## Usage

| Type/Use | Description | Example |
|----------|-------------|---------|
| Success | Confirms a successful action. | Form submitted, settings saved, message sent. |
| Error | Alerts the user to a failure or problem. | Failed save, API error, input validation failure. |
| Warning | Warns about potential issues without blocking progress. | Unsaved changes, feature deprecation, connectivity issues. |
| Info | Shares neutral or contextual information. | Tip or hint, background updates, non-critical status. |

## Interaction

Toast notifications can be manually dismissed or auto-dismissed using the \`dismissType\` prop; auto toasts are automatically dismissed after 8 seconds. When building with \`ToastNotification\`, each should slide in and out from the top right of the screen, placed 16px from the bottom and right side of the viewport, fading in with the \`eds-anim-fade-long\` token and out with the \`eds-anim-fade-quick\` token.

## Content & Accessibility

### Do's

* Keep the toast to a single, simple message such as a confirmation.
* Use simple phrases or sentence fragments, in sentence case.
* Aim for 1 line of text or less.

### Don'ts

* Don't use more than 2 lines of text; if more is required, find another way to provide the information.
* Don't include any information in a toast that may be needed again.
* Don't punctuate incomplete sentences, and don't rely on color to convey meaning.`,displayName:`ToastNotification`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:`Additional class names that can be appended to the component, passed in for styling.`,name:`className`,required:!1,tags:{},type:{name:`string`}},onDismiss:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:`Callback when notification is dismissed. When passed in, renders banner with a close icon in the top right.`,name:`onDismiss`,required:!1,tags:{},type:{name:`(() => void)`}},style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:`CSS properties defined for the HTML element.`,name:`style`,required:!1,tags:{},type:{name:`ToastNotificationCSSProperties`}},timeout:{defaultValue:{value:`8000`},declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:"Length of time to wait until `onDismiss` is called",name:`timeout`,required:!1,tags:{},type:{name:`number`}},dismissType:{defaultValue:{value:`manual`},declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:'Determines whether the toast notification will dismiss on its own, or due to user action. When set to `"auto"`,\nit will dismiss after 8 seconds.\n\n**Default is `"manual"`**.',name:`dismissType`,required:!1,tags:{},type:{name:`enum`,raw:`"auto" | "manual"`,value:[{value:`"auto"`},{value:`"manual"`}]}},status:{defaultValue:{value:`favorable`},declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:`Keyword to characterize the state of the notification`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`Status`,value:[{value:`"critical"`},{value:`"informational"`},{value:`"warning"`},{value:`"favorable"`}]}},title:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:`The title/heading of the notification`,name:`title`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{o(),j=e(n()),A(),v(),b(),p(),M=r(),N={title:`Components/ToastNotification`,component:k,parameters:{docs:{subtitle:`A brief, temporary notification. They're meant to be noticed without disrupting a user's experience or requiring an action to be taken.`},layout:`centered`},argTypes:{onDismiss:{action:`trigger dismiss`},timeout:{table:{disable:!0}}},args:{title:`A toast should not exceed two lines of text.`},tags:[`autodocs`,`version:2.2.0`]},P={},F={args:{status:`informational`}},I={args:{status:`favorable`}},L={args:{status:`warning`}},R={args:{status:`critical`}},z={args:{...P.args,onDismiss:void 0}},B={args:{...P.args,dismissType:`auto`,timeout:500,onDismiss:()=>console.log(`trigger onDismiss`)}},V=0,H=e=>{let[t,n]=j.useState([]);return(0,M.jsxs)(`div`,{className:`flex h-[90vh] w-[90vw] items-center justify-center`,children:[(0,M.jsx)(x,{onClick:()=>{n([...t,{id:V++,text:`New Toast`,show:!0}])},children:`Trigger A Toast Notification`}),(0,M.jsx)(`div`,{className:`m-spacing-size-1 gap-spacing-size-2 absolute bottom-0 right-0 flex max-h-full flex-col overflow-scroll`,id:`toast-container`,children:t.map(r=>(0,M.jsx)(s,{appear:!0,as:`div`,enter:`transition-all duration-long`,enterFrom:`opacity-0 transform-gpu translate-x-[100%] h-0`,enterTo:`opacity-100 transform-gpu translate-x-[0px] h-spacing-size-9`,leave:`ease-in-out transition-all duration-quick`,leaveFrom:`opacity-100 transform-gpu translate-x-[0px] h-spacing-size-9`,leaveTo:`opacity-0 transform-gpu translate-x-[100%] h-0`,show:r.show,children:(0,M.jsx)(k,{...e,onDismiss:()=>{n(t.map(e=>e.id===r.id?{...e,show:!1}:e))},title:`You got a new toast: `+r.text+r.id})},r.id))})]})},U={args:{dismissType:`auto`},render:e=>(0,M.jsx)(H,{...e}),parameters:{chromatic:{disableSnapshot:!0},snapshot:{skip:!0}}},W={args:{...R.args,onDismiss:()=>{}},decorators:[e=>(0,M.jsx)(h,{icons:y,children:e()})]},G=[`Default`,`Informational`,`Favorable`,`Warning`,`Critical`,`NotDismissable`,`AutoDismiss`,`ExampleDismissingToasts`,`WithProvidedIcons`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'informational'
  }
}`,...F.parameters?.docs?.source},description:{story:`Informational toasts indicate additional information for the user, and may be related to generic notifications or reminders.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'favorable'
  }
}`,...I.parameters?.docs?.source},description:{story:`Favorable toasts indicate a successful completion of an action.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning'
  }
}`,...L.parameters?.docs?.source},description:{story:`Warning toasts indicate an action that may have undesirable consequences.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'critical'
  }
}`,...R.parameters?.docs?.source},description:{story:`Critical toasts signal failuser to the user, where an action may not have completed fully/successfully.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onDismiss: undefined
  }
}`,...z.parameters?.docs?.source},description:{story:"We can restrict the ability to dismiss the notification by not specifying the `onDismiss` method.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dismissType: 'auto',
    timeout: 500,
    onDismiss: () => console.log('trigger onDismiss')
  }
}`,...B.parameters?.docs?.source},description:{story:"Tooltips can be instructed to auto-close after a certain period. After the timeout, the component will call the defined\n`onDismiss` method. The behavior of the dissmisal is left up to the user, which allows for complete control.",...B.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    dismissType: 'auto'
  },
  render: args => <ToastNotificationManager {...args} />,
  parameters: {
    // For interactive use, low value in snap testing again since already covered in other stories.
    chromatic: {
      disableSnapshot: true
    },
    snapshot: {
      skip: true
    }
  }
}`,...U.parameters?.docs?.source},description:{story:`This implementation example shows how you can use toasts with state to handle multiple, stacking notifications.

For a full, production-ready implementation, clean up any toasts with show=false after the animation has completed.
- Consider using lodash.debounce to time the re-render, and useEffect that watches the list of toasts
- Any debouncing should map to whatever duration is used in \`Transition\`

Here, we use \`<Transition>\` provided by [HeadlessUI](https://github.com/chanzuckerberg/edu-design-system/blob/main/package.json#L91-L93).`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...Critical.args,
    // Set here rather than left to the \`onDismiss\` action, which is applied in the browser
    // but not when the stories are rendered for snapshots, so the dismiss button this story
    // is partly about would be missing there.
    onDismiss: () => {}
  },
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...W.parameters?.docs?.source},description:{story:"Both icons here come from `IconProvider`: the status icon carrying the toast's severity,\nand the dismiss button, which is the same close affordance used everywhere else.\n\nHere `critical` becomes the outline version of the icon, and the close button a minus.",...W.parameters?.docs?.description}}}})))()}K();export{B as AutoDismiss,R as Critical,P as Default,U as ExampleDismissingToasts,I as Favorable,F as Informational,z as NotDismissable,L as Warning,W as WithProvidedIcons,G as __namedExportsOrder,N as default};