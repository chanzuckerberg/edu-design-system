import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r}from"./iframe-CxYcUItw.js";import{n as i,t as a}from"./clsx-CU3OJm-u.js";import{n as o}from"./Text-s7d_e173.js";import{t as s}from"./Text-4jUaZiwM.js";import{t as c}from"./Label-BIdJ4V16.js";import{t as l}from"./Label-dnaXOpxC.js";var u,d,f,p,m,h=t((()=>{u=`_checkbox_1y022_3`,d=`_checkbox__input_1y022_8`,f=`_checkbox__labels_1y022_69`,p=`_checkbox__label_1y022_69`,m={checkbox:u,checkbox__input:d,checkbox__labels:f,checkbox__label:p,"checkbox__sub-label":`_checkbox__sub-label_1y022_78`,"checkbox--is-disabled":`_checkbox--is-disabled_1y022_86`,"checkbox--error":`_checkbox--error_1y022_108`}}));function g(e){let t=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(e)typeof e==`function`?e(t.current):e.current=t.current;else return},[e]),t}var _,v,y,b,x=t((()=>{i(),_=e(r()),l(),s(),h(),v=n(),y=_.forwardRef(({checked:e,className:t,disabled:n,indeterminate:r,...i},o)=>{let s=g(o);return(0,_.useEffect)(()=>{s.current&&(s.current.indeterminate=!!r)},[s,r]),(0,v.jsx)(`input`,{checked:e,className:a(t,m.checkbox__input),disabled:n,ref:s,type:`checkbox`,...i})}),b=Object.assign((0,_.forwardRef)((e,t)=>{let{className:n,id:r,isError:i,label:s,disabled:l,subLabel:u,...d}=e,f=_.useId(),p=r||f;return(0,v.jsxs)(`div`,{className:a(n,m.checkbox,i&&m[`checkbox--error`]),children:[(0,v.jsx)(y,{disabled:l,id:p,ref:t,...d}),(s||u)&&(0,v.jsxs)(`div`,{className:m.checkbox__labels,children:[s&&(0,v.jsx)(c,{className:m.checkbox__label,disabled:l,htmlFor:p,text:s}),u&&(0,v.jsx)(o,{as:`span`,className:a(m[`checkbox__sub-label`],l&&m[`checkbox--is-disabled`]),preset:`body-sm`,children:u})]})]})}),{Input:y,Label:c}),b.displayName=`Checkbox`,y.displayName=`CheckboxInput`;try{b.displayName=`Checkbox`,b.__docgenInfo={description:`## Usage

| Type/Use | Description | Example |
|----------|-------------|---------|
| Standard | Basic binary control (checked/unchecked). | Accept terms and conditions. Enable/disable a setting. |
| Multi-select | Used in a group to select multiple items independently. | Filter lists. Select options in forms. |
| Tri-state | Supports three states: checked, unchecked, and indeterminate. | Parent checkbox for nested options. |
| Nested | A parent checkbox controls its children; the parent reflects checked, unchecked, or indeterminate. | Selections within categories. |
| Inline | Placed within text or small UI elements. | Inline acknowledgement text. Compact forms. |
| Disabled | Non-interactive checkbox indicating a fixed or unavailable state. | Unavailable options. Permissions indicator. |
| Table | Selects lines or entries in a table. | Rows to perform an action on. |

### Best Practices

* By default, checkboxes should have labels.
* Checkboxes may have no visible label if they are part of another component, such as a table row.
* Checkbox group labels can include an "optional" or "required" hint.

## Interaction

Both the checkbox and its label(s) can trigger the interaction; do not limit the touch target to
the checkbox alone. Checks work independently of one another—selecting one does not deselect the
others unless they have a parent-child relationship. Consider using a radio button if checking one
option should deselect all others.

## Content & Accessibility

### Do's

* Use group labels to describe the action taken within a group of checkboxes.
* Keep labels to a few words (ideally 3 or fewer) and use sentence case.
* Use the first person when a checkbox indicates the user accepting something, e.g. "I agree to...".
* Only use helper text when necessary to explain the action or its results.
* In error messages, describe the issue and what to do about it.

### Don'ts

* Use helper text by default; consider better group labels first.
* Use end punctuation on group labels.
* Truncate labels.`,displayName:`Checkbox`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Checkbox/Checkbox.tsx`,methods:[],props:{checked:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Checkbox/Checkbox.tsx`,name:`TypeLiteral`}],description:`Whether checkbox is checked.`,name:`checked`,required:!1,tags:{},type:{name:`boolean`}},indeterminate:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Checkbox/Checkbox.tsx`,name:`TypeLiteral`}],description:`Whether the checkbox is "indeterminate". Neither checked nor unchecked. The most common use
case for this is when a checkbox has sub-checkboxes, to represent a "partially checked" state.`,name:`indeterminate`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Checkbox/Checkbox.tsx`,name:`TypeLiteral`}],description:`Whether the radio button is in an error state`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Checkbox/Checkbox.tsx`,name:`TypeLiteral`}],description:`Additional descriptive text below the primary label, adding additional detail`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}},id:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Checkbox/Checkbox.tsx`,name:`TypeLiteral`}],description:`HTML id attribute. If not passed, this component
will generate an id to use for accessibility.`,name:`id`,required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Checkbox/Checkbox.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Checkbox/Checkbox.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Checkbox/Checkbox.tsx`,name:`TypeLiteral`}],description:`Visible text label for the component.`,name:`label`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}}));export{x as n,b as t};