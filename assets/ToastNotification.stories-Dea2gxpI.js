import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r}from"./iframe-CxYcUItw.js";import{n as i,t as a}from"./clsx-CU3OJm-u.js";import{i as o,t as s}from"./logging-rNM_k4ml.js";import{a as c,i as l,n as u,o as d,t as f}from"./Icon-DJYKhM6X.js";import{n as p}from"./Text-s7d_e173.js";import{t as m}from"./Text-4jUaZiwM.js";import{E as h,t as g}from"./headlessui.esm-lK-9xKHu.js";import{t as _}from"./Button-B9L7vEj2.js";import{t as v}from"./Button-Czofd_Br.js";import{n as y,t as b}from"./semanticIconOverrides-CAkf2_aJ.js";var x,S,C,w,T=t((()=>{x=`_toast_114xq_7`,S=`_toast__icon_114xq_21`,C=`_toast__body_114xq_54`,w={toast:x,toast__icon:S,"toast--status-critical":`_toast--status-critical_114xq_31`,"toast--status-warning":`_toast--status-warning_114xq_35`,"toast--status-favorable":`_toast--status-favorable_114xq_39`,"toast--status-informational":`_toast--status-informational_114xq_43`,toast__body:C,"toast__dismiss-button":`_toast__dismiss-button_114xq_58`}})),E,D,O,k=t((()=>{i(),E=e(r()),o(),v(),f(),m(),T(),D=n(),O=({className:e,dismissType:t=`manual`,onDismiss:n,status:r=`favorable`,timeout:i=8e3,title:o,...u})=>{let f=a(w.toast,r&&w[`toast--status-${r}`],e);s([!!i&&n===void 0&&t===`auto`],`When using dismissType=auto, an onDismiss method must be defined`,`error`);let m=l(r),h=l(`close`);return(0,E.useEffect)(()=>{let e=t===`auto`?setTimeout(()=>{n&&n()},i):void 0;return()=>clearTimeout(e)},[n,t,i]),(0,D.jsxs)(`div`,{className:f,...u,children:[d(m)&&(0,D.jsx)(c,{className:w.toast__icon,content:m,purpose:`decorative`,size:`24px`}),(0,D.jsx)(`div`,{className:w.toast__body,children:(0,D.jsx)(p,{as:`span`,className:w.toast__text,preset:`body-md`,children:o})}),n&&(0,D.jsx)(_,{"aria-label":`close`,className:w[`toast__dismiss-button`],context:`default`,icon:h,iconLayout:`icon-only`,onClick:n,rank:`tertiary`,size:`md`,variant:`inverse`})]})};try{O.displayName=`ToastNotification`,O.__docgenInfo={description:`## Usage

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
* Don't punctuate incomplete sentences, and don't rely on color to convey meaning.`,displayName:`ToastNotification`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:`Additional class names that can be appended to the component, passed in for styling.`,name:`className`,required:!1,tags:{},type:{name:`string`}},onDismiss:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:`Callback when notification is dismissed. When passed in, renders banner with a close icon in the top right.`,name:`onDismiss`,required:!1,tags:{},type:{name:`(() => void)`}},style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:`CSS properties defined for the HTML element.`,name:`style`,required:!1,tags:{},type:{name:`ToastNotificationCSSProperties`}},timeout:{defaultValue:{value:`8000`},declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:"Length of time to wait until `onDismiss` is called",name:`timeout`,required:!1,tags:{},type:{name:`number`}},dismissType:{defaultValue:{value:`manual`},declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:'Determines whether the toast notification will dismiss on its own, or due to user action. When set to `"auto"`,\nit will dismiss after 8 seconds.\n\n**Default is `"manual"`**.',name:`dismissType`,required:!1,tags:{},type:{name:`enum`,raw:`"auto" | "manual"`,value:[{value:`"auto"`},{value:`"manual"`}]}},status:{defaultValue:{value:`favorable`},declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:`Keyword to characterize the state of the notification`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`Status`,value:[{value:`"critical"`},{value:`"informational"`},{value:`"warning"`},{value:`"favorable"`}]}},title:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ToastNotification/ToastNotification.tsx`,name:`TypeLiteral`}],description:`The title/heading of the notification`,name:`title`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;t((()=>{g(),A=e(r()),k(),y(),v(),f(),j=n(),M={title:`Components/ToastNotification`,component:O,parameters:{docs:{subtitle:`A brief, temporary notification. They're meant to be noticed without disrupting a user's experience or requiring an action to be taken.`},layout:`centered`},argTypes:{onDismiss:{action:`trigger dismiss`},timeout:{table:{disable:!0}}},args:{title:`A toast should not exceed two lines of text.`},tags:[`autodocs`,`version:2.2.0`]},N={},P={args:{status:`informational`}},F={args:{status:`favorable`}},I={args:{status:`warning`}},L={args:{status:`critical`}},R={args:{...N.args,onDismiss:void 0}},z={args:{...N.args,dismissType:`auto`,timeout:500,onDismiss:()=>console.log(`trigger onDismiss`)}},B=0,V=e=>{let[t,n]=A.useState([]);return(0,j.jsxs)(`div`,{className:`flex h-[90vh] w-[90vw] items-center justify-center`,children:[(0,j.jsx)(_,{onClick:()=>{n([...t,{id:B++,text:`New Toast`,show:!0}])},children:`Trigger A Toast Notification`}),(0,j.jsx)(`div`,{className:`m-spacing-size-1 gap-spacing-size-2 absolute bottom-0 right-0 flex max-h-full flex-col overflow-scroll`,id:`toast-container`,children:t.map(r=>(0,j.jsx)(h,{appear:!0,as:`div`,enter:`transition-all duration-long`,enterFrom:`opacity-0 transform-gpu translate-x-[100%] h-0`,enterTo:`opacity-100 transform-gpu translate-x-[0px] h-spacing-size-9`,leave:`ease-in-out transition-all duration-quick`,leaveFrom:`opacity-100 transform-gpu translate-x-[0px] h-spacing-size-9`,leaveTo:`opacity-0 transform-gpu translate-x-[100%] h-0`,show:r.show,children:(0,j.jsx)(O,{...e,onDismiss:()=>{n(t.map(e=>e.id===r.id?{...e,show:!1}:e))},title:`You got a new toast: `+r.text+r.id})},r.id))})]})},H={args:{dismissType:`auto`},render:e=>(0,j.jsx)(V,{...e}),parameters:{chromatic:{disableSnapshot:!0},snapshot:{skip:!0}}},U={args:{...L.args,onDismiss:()=>{}},decorators:[e=>(0,j.jsx)(u,{icons:b,children:e()})]},W=[`Default`,`Informational`,`Favorable`,`Warning`,`Critical`,`NotDismissable`,`AutoDismiss`,`ExampleDismissingToasts`,`WithProvidedIcons`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'informational'
  }
}`,...P.parameters?.docs?.source},description:{story:`Informational toasts indicate additional information for the user, and may be related to generic notifications or reminders.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'favorable'
  }
}`,...F.parameters?.docs?.source},description:{story:`Favorable toasts indicate a successful completion of an action.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning'
  }
}`,...I.parameters?.docs?.source},description:{story:`Warning toasts indicate an action that may have undesirable consequences.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'critical'
  }
}`,...L.parameters?.docs?.source},description:{story:`Critical toasts signal failuser to the user, where an action may not have completed fully/successfully.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onDismiss: undefined
  }
}`,...R.parameters?.docs?.source},description:{story:"We can restrict the ability to dismiss the notification by not specifying the `onDismiss` method.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dismissType: 'auto',
    timeout: 500,
    onDismiss: () => console.log('trigger onDismiss')
  }
}`,...z.parameters?.docs?.source},description:{story:"Tooltips can be instructed to auto-close after a certain period. After the timeout, the component will call the defined\n`onDismiss` method. The behavior of the dissmisal is left up to the user, which allows for complete control.",...z.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`This implementation example shows how you can use toasts with state to handle multiple, stacking notifications.

For a full, production-ready implementation, clean up any toasts with show=false after the animation has completed.
- Consider using lodash.debounce to time the re-render, and useEffect that watches the list of toasts
- Any debouncing should map to whatever duration is used in \`Transition\`

Here, we use \`<Transition>\` provided by [HeadlessUI](https://github.com/chanzuckerberg/edu-design-system/blob/main/package.json#L91-L93).`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Critical.args,
    // Set here rather than left to the \`onDismiss\` action, which is applied in the browser
    // but not when the stories are rendered for snapshots, so the dismiss button this story
    // is partly about would be missing there.
    onDismiss: () => {}
  },
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...U.parameters?.docs?.source},description:{story:"Both icons here come from `IconProvider`: the status icon carrying the toast's severity,\nand the dismiss button, which is the same close affordance used everywhere else.\n\nHere `critical` becomes the outline version of the icon, and the close button a minus.",...U.parameters?.docs?.description}}}}))();export{z as AutoDismiss,L as Critical,N as Default,H as ExampleDismissingToasts,F as Favorable,P as Informational,R as NotDismissable,I as Warning,U as WithProvidedIcons,W as __namedExportsOrder,M as default};