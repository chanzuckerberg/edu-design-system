import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./clsx-CU3OJm-u.js";import{a,i as o,o as s,t as c}from"./Icon-DJYKhM6X.js";import{n as l}from"./Text-s7d_e173.js";import{t as u}from"./Text-4jUaZiwM.js";var d,f=e((()=>{d={"inline-notification":`_inline-notification_1j6zw_10`,"inline-notification--status-informational":`_inline-notification--status-informational_1j6zw_20`,"inline-notification--status-critical":`_inline-notification--status-critical_1j6zw_24`,"inline-notification--status-favorable":`_inline-notification--status-favorable_1j6zw_28`,"inline-notification--status-warning":`_inline-notification--status-warning_1j6zw_32`,"inline-notification__icon":`_inline-notification__icon_1j6zw_37`,"inline-notification__body":`_inline-notification__body_1j6zw_55`}})),p,m,h=e((()=>{r(),n(),c(),u(),f(),p=t(),m=({className:e,status:t=`informational`,subTitle:n,title:r,...c})=>{let u=i(d[`inline-notification`],t&&d[`inline-notification--status-${t}`],e),f=o(t);return(0,p.jsxs)(`div`,{className:u,...c,children:[s(f)&&(0,p.jsx)(a,{className:d[`inline-notification__icon`],content:f,purpose:`decorative`,size:`16px`}),(0,p.jsxs)(`div`,{className:d[`inline-notication__body`],children:[(0,p.jsx)(l,{as:`div`,className:d[`inline-notification__title`],preset:`title-sm`,children:r}),n&&(0,p.jsx)(l,{as:`div`,preset:`body-xs`,children:n})]})]})},m.displayName=`InlineNotification`;try{m.displayName=`InlineNotification`,m.__docgenInfo={description:`## Usage

* To provide feedback to users about their actions, such as summarizing form-level errors after server-side validation.
* To give significant status updates about a task.

| Type/Use | Description | Example |
|----------|-------------|---------|
| Error | Indicates an error next to a specific form field or UI element. | Invalid form input. Required field left empty. |
| Warning | Non-blocking alert about a potential issue. | Weak password. Deprecated selection. |
| Success | Confirms a successful user action related to a specific element. | Successfully saved value. |
| Hint | Provides guidance or clarification without requiring an action. | Input format guidance. Optional field context. |
| Info | Offers neutral, supportive information near the related element. | Explain why a field is disabled. |
| Validation feedback | Real-time response to user input as they type or select. | Password strength meters. |

## Interaction

Inline notifications appear directly above the content they relate to and disappear once the
state that caused the alert has been resolved.

## Content & Accessibility

### Do's

* Keep titles short and descriptive—ideally one line—and communicate the main message in sentence case.
* In the body, explain how to resolve the issue in 1-2 sentences (no more than 2 lines) and include links to more info when necessary.
* Place the notification close to the relevant screen elements so it is understood in context.

### Don'ts

* Punctuate the end of the title.
* Repeat or summarize the title in the body.
* Use without an icon indicating the notification type and severity.`,displayName:`InlineNotification`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/InlineNotification/InlineNotification.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/InlineNotification/InlineNotification.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component for styling.`,name:`className`,required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/InlineNotification/InlineNotification.tsx`,name:`TypeLiteral`}],description:"CSS properties defined for the HTML element. Includes the component's CSS Custom Properties:\n\n- `--inline-notification__bg`\n- `--inline-notification__fg`",name:`style`,required:!1,tags:{},type:{name:`InlineNotificationCSSProperties`}},status:{defaultValue:{value:`informational`},declarations:[{fileName:`edu-design-system/src/components/InlineNotification/InlineNotification.tsx`,name:`TypeLiteral`}],description:`Keyword to characterize the state of the notification

**Default is \`"informational"\`**.`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`Status`,value:[{value:`"critical"`},{value:`"informational"`},{value:`"warning"`},{value:`"favorable"`}]}},subTitle:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/InlineNotification/InlineNotification.tsx`,name:`TypeLiteral`}],description:`Secondary text used to describe the content in more detail`,name:`subTitle`,required:!1,tags:{},type:{name:`ReactNode`}},title:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/InlineNotification/InlineNotification.tsx`,name:`TypeLiteral`}],description:`The title/heading of the component`,name:`title`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}}));export{h as n,m as t};