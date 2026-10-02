import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r}from"./iframe-CxYcUItw.js";import{n as i,t as a}from"./clsx-CU3OJm-u.js";import{i as o,n as s}from"./logging-rNM_k4ml.js";import{a as c,i as l,n as u,o as d,t as f}from"./Icon-DJYKhM6X.js";import{n as p}from"./Text-s7d_e173.js";import{t as m}from"./Text-4jUaZiwM.js";import{A as ee,D as h,M as te,O as g,j as ne,k as re,t as ie}from"./headlessui.esm-lK-9xKHu.js";import{t as ae}from"./PopoverContainer-DuAQqAdM.js";import{t as _}from"./PopoverContainer-k-Ekgsta.js";import{t as oe}from"./PopoverListItem-1jWLpWtF.js";import{t as se}from"./PopoverListItem-DL-m8aEL.js";import{t as ce}from"./Checkbox-D0WLzxnw.js";import{t as le}from"./Checkbox-BJsrBMyB.js";import{_ as ue,g as de,h as fe,n as pe,o as me,t as he,u as ge,v as _e}from"./floating-ui.react-t1FeOT8r.js";import{t as ve}from"./FieldLabel-1T7cTiJm.js";import{t as ye}from"./FieldLabel-BpIbOLvB.js";import{t as be}from"./FieldNote-Cinj9o5n.js";import{t as xe}from"./FieldNote-C9tJIPBV.js";import{t as Se}from"./InputChip-DqXpmquI.js";import{t as Ce}from"./InputChip-LDaZPPg2.js";import{t as we}from"./Radio-BOvwx7UQ.js";import{t as Te}from"./Radio-n27FJ9Sp.js";import{n as Ee,t as De}from"./FpoBlock-D0PLXBg0.js";import{n as Oe,t as ke}from"./semanticIconOverrides-CAkf2_aJ.js";var Ae,je,Me,Ne,Pe,Fe,Ie,v,Le=t((()=>{Ae=`_combobox_1ye4e_10`,je=`_combobox__overline_1ye4e_17`,Me=`_combobox__options_1ye4e_33`,Ne=`_combobox__footer_1ye4e_231`,Pe=`_combobox__label_1ye4e_243`,Fe=`_combobox__subLabel_1ye4e_247`,Ie=`_combobox__option_1ye4e_33`,v={combobox:Ae,combobox__overline:je,"combobox__overline--no-label":`_combobox__overline--no-label_1ye4e_25`,combobox__options:Me,"combobox__no-matches":`_combobox__no-matches_1ye4e_43`,"combobox--label-layout-vertical":`_combobox--label-layout-vertical_1ye4e_54`,"combobox--label-layout-horizontal":`_combobox--label-layout-horizontal_1ye4e_58`,"combobox-input":`_combobox-input_1ye4e_71`,"combobox-input__field":`_combobox-input__field_1ye4e_93`,"combobox-input--has-chips":`_combobox-input--has-chips_1ye4e_115`,"combobox-input__button":`_combobox-input__button_1ye4e_129`,"combobox-input__chips":`_combobox-input__chips_1ye4e_137`,"combobox-input__field--truncated":`_combobox-input__field--truncated_1ye4e_184`,"combobox-input__icon":`_combobox-input__icon_1ye4e_216`,"combobox-input__icon--reversed":`_combobox-input__icon--reversed_1ye4e_227`,combobox__footer:Ne,"combobox--has-fieldNote":`_combobox--has-fieldNote_1ye4e_236`,combobox__label:Pe,combobox__subLabel:Fe,"combobox__label--disabled":`_combobox__label--disabled_1ye4e_252`,combobox__option:Ie,"combobox__option-text":`_combobox__option-text_1ye4e_260`,"combobox__required-text":`_combobox__required-text_1ye4e_264`,"combobox__required-text--disabled":`_combobox__required-text--disabled_1ye4e_268`,"combobox-input--error":`_combobox-input--error_1ye4e_272`,"combobox-input--warning":`_combobox-input--warning_1ye4e_285`}}));function y({"aria-label":e,by:t,children:n,className:r,disabled:i,fieldNote:o,label:s,labelLayout:c=`vertical`,name:l,optionsClassName:u,required:d,showHint:f,status:p,onChange:m,subLabel:ee,...h}){let[te,g]=(0,b.useState)(h.value===void 0?h.defaultValue:h.value),[ne,re]=(0,b.useState)(null),ie=a(v.combobox,o&&v[`combobox--has-fieldNote`],c&&v[`combobox--label-layout-${c}`],r),{defaultValue:ae,..._}=h,oe=h.virtual?.options.length===0,se=!!h.multiple&&h.value===void 0,ce=e=>{te!==e&&(g(e),m&&m(e))},le={className:ie,as:`div`,by:t,disabled:i,invalid:h.invalid??p===`critical`,name:l,..._,...oe&&{virtual:null},...se?{value:te??[]}:{defaultValue:ae},onChange:ce},ue=h.value===void 0?te:h.value,de=h.multiple&&Array.isArray(ue)?ue:[],fe=(e,n)=>typeof t==`function`?t(e,n):typeof t==`string`&&typeof e==`object`&&typeof n==`object`?e[t]===n[t]:e===n,pe={ariaLabel:e,disabled:i,fieldElement:ne,hasNoVirtualOptions:oe,optionsClassName:u,removeValue:e=>{let t=de.filter(t=>!fe(t,e));g(t),m&&m(t)},required:d,selectedValues:de,setFieldElement:re,status:p,multiple:h.multiple};return typeof n==`function`?(0,x.jsx)(S.Provider,{value:pe,children:(0,x.jsx)(Be,{...le,children:n})}):(0,x.jsxs)(S.Provider,{value:pe,children:[(0,x.jsxs)(Be,{...le,children:[(s||d)&&(0,x.jsx)(y.Label,{disabled:i,required:d,showHint:f,subLabel:ee,children:s}),n]}),o&&(0,x.jsx)(`div`,{className:v.combobox__footer,children:(0,x.jsx)(be,{disabled:i,status:p,children:o})})]})}var b,x,Re,S,ze,Be,Ve,He,Ue,We,Ge,Ke,qe=t((()=>{pe(),ie(),i(),b=e(r()),o(),le(),ye(),xe(),f(),Ce(),_(),se(),Te(),m(),Le(),x=n(),Re=e=>typeof e==`string`?e:String(e.label??``),S=b.createContext({}),ze=10,Be=re,Ve=({children:e,required:t,className:n,disabled:r,showHint:i,subLabel:o})=>{let s=a(v.combobox__label,r&&a(v[`combobox__label--disabled`]),n),c=a(v[`combobox__required-text`],r&&v[`combobox__required-text--disabled`]),l=a(v.combobox__overline,!e&&v[`combobox__overline--no-label`]),u=a(v.combobox__subLabel,r&&v[`combobox__label--disabled`]);return(0,x.jsxs)(`div`,{className:l,children:[(0,x.jsx)(te,{as:ve,className:s,disabled:r,size:`md`,children:e}),t&&i&&(0,x.jsx)(p,{"aria-disabled":r??void 0,as:`span`,className:c,preset:`body-sm`,children:`(Required)`}),!t&&i&&(0,x.jsx)(p,{"aria-disabled":r??void 0,as:`span`,className:c,preset:`body-sm`,children:`(Optional)`}),e&&o&&(0,x.jsx)(`div`,{className:u,children:(0,x.jsx)(p,{as:`span`,preset:`body-sm`,children:o})})]})},He=function(e){let{"aria-label":t=`Show options`,children:n,className:r,icon:i,...o}=e;s(`Combobox.Button`,`icon`,`expand`,i);let u=a(v[`combobox-input__button`],r),f=l(`expand`);return(0,x.jsx)(h,{"aria-label":t,className:u,...o,children:e=>typeof n==`function`?n(e):n?(0,x.jsx)(x.Fragment,{children:n}):(0,x.jsx)(x.Fragment,{children:d(f)&&(0,x.jsx)(c,{className:a(v[`combobox-input__icon`],e.open&&v[`combobox-input__icon--reversed`]),content:f,purpose:`decorative`,size:`24px`})})})},Ue=function(e){let{"aria-label":t,chipLabel:n=Re,chipLeadingComponent:r,className:i,inputClassName:o,onKeyDown:c,shouldTruncate:l=!1,showChips:u=!0,icon:d,...f}=e;s(`Combobox.Input`,`icon`,`expand`,d);let{ariaLabel:p,disabled:m,multiple:ee,removeValue:h,required:te,selectedValues:g=[],status:re}=(0,b.useContext)(S),ie=a(v[`combobox-input__field`],l&&v[`combobox-input__field--truncated`],o),ae=(0,b.useRef)(null),_=!!(u&&ee&&g.length>0),oe=(0,b.useRef)(g.length);return(0,b.useEffect)(()=>{let e=oe.current;if(oe.current=g.length,!u||!ee||g.length<=e)return;let t=ae.current;!t||t.ownerDocument.activeElement!==t||t.select()},[ee,g.length,u]),(0,x.jsxs)(Ke,{className:i,hasChips:_,status:re,children:[_&&(0,x.jsx)(`ul`,{className:v[`combobox-input__chips`],children:g.map((e,t)=>(0,x.jsx)(`li`,{children:(0,x.jsx)(Se,{isDisabled:m,label:n(e),leadingComponent:r?.(e),onClick:t=>{t.preventDefault(),t.stopPropagation(),h?.(e)}})},`${t}-${n(e)}`))}),(0,x.jsx)(ne,{"aria-label":t??p,className:ie,onKeyDown:e=>{c&&c(e),!(!_||e.key!==`Backspace`||e.defaultPrevented||e.currentTarget.value!==``)&&(e.preventDefault(),h&&h(g[g.length-1]))},ref:ae,required:te,style:{"--combobox__input-width":`calc(${ae.current?.value.length||0} * 1ch)`},...f})]})},We=function(e){let{anchor:t,children:n,className:r,noMatchesText:i=`No matches found`,ref:o,style:s,...c}=e,{fieldElement:l,hasNoVirtualOptions:u,optionsClassName:f}=(0,b.useContext)(S),m=t===void 0&&!!l,{floatingStyles:h,refs:te}=me({elements:{reference:m?l:null},placement:`bottom-start`,transform:!1,whileElementsMounted:_e,middleware:[de(ze),fe(),ue({apply({elements:{floating:e},rects:t}){e.style.minWidth=`${t.reference.width}px`}})]}),g=ge([te.setFloating,o]),ne=a(v.combobox__options,r,f),re=(0,x.jsx)(`div`,{"aria-disabled":`true`,"aria-selected":`false`,className:v[`combobox__no-matches`],role:`option`,children:(0,x.jsx)(p,{as:`div`,preset:`body-sm`,children:i})}),ie=u?re:typeof n==`function`?e=>{let t=n(e);return e.option!==void 0||d(t)?t:re}:d(n)?n:re,_=(0,x.jsx)(ee,{anchor:m?void 0:t??{to:`bottom start`,gap:24,offset:-12},as:ae,className:ne,modal:!1,ref:m?g:o,style:m?{...h,...s}:s,...c,children:ie});return m?(0,x.jsx)(he,{children:_}):_},Ge=function(e){let{children:t,className:n,optionClassName:r,subLabel:i,...o}=e,s=a(n,r,v.combobox__option),{multiple:c}=(0,b.useContext)(S);return(0,x.jsx)(g,{as:b.Fragment,...o,children:typeof t==`function`?t:({focus:e,disabled:n,selected:r})=>(0,x.jsx)(oe,{__type:`selectitem`,className:s,isDisabled:n,isFocused:e,leadingContent:c?(0,x.jsx)(ce,{"aria-hidden":`true`,"aria-label":`checkbox`,checked:r,inert:!0,readOnly:!0}):(0,x.jsx)(we,{"aria-hidden":`true`,"aria-label":`radio`,checked:r,inert:!0,readOnly:!0}),subLabel:i,children:(0,x.jsx)(`span`,{className:v[`combobox__option-text`],children:t})})})},Ke=b.forwardRef((e,t)=>{let{children:n,className:r,hasChips:i,status:o,icon:c,...l}=e;s(`Combobox.InputWrapper`,`icon`,`expand`,c);let{setFieldElement:u,status:d}=(0,b.useContext)(S),f=o??d,p=ge([t,u]);return(0,x.jsxs)(`div`,{className:a(v[`combobox-input`],i&&v[`combobox-input--has-chips`],f===`warning`&&v[`combobox-input--warning`],f===`critical`&&v[`combobox-input--error`],r),ref:p,...l,children:[n,(0,x.jsx)(He,{})]})}),y.displayName=`Combobox`,He.displayName=`Combobox.Button`,Ue.displayName=`Combobox.Input`,Ke.displayName=`Combobox.InputWrapper`,Ve.displayName=`Combobox.Label`,Ge.displayName=`Combobox.Option`,We.displayName=`Combobox.Options`,y.Button=He,y.Input=Ue,y.InputWrapper=Ke,y.Label=Ve,y.Option=Ge,y.Options=We;try{y.displayName=`Combobox`,y.__docgenInfo={description:`## Usage

A text field paired with a list of options. Typing filters the list, so use it where a
\`Select\` would be unwieldy. Supports controlled and uncontrolled behavior.

| Type/Use | Description | Example |
|----------|-------------|---------|
| Standard | Type to filter a list of options; one can be selected. | Country selector. Assignee picker. |
| Multi-select | Type to filter, and select more than one option from the list. | Filter panels. Role or permission assignments. |
| Disabled | Non-interactive; used to show unavailable or inactive states. | Feature-gated selections. Incomplete forms. |
| Preselected | Default selection appears in the field before user interacts. | Recommended settings. "Most common" default. |

Filtering is left to the consumer, since only the consumer knows how the option data is
shaped and where it comes from. Use \`onChange\` on \`Combobox.Input\` to capture the query,
then pass the filtered list to \`Combobox.Options\`.

### Best Practices

* Use \`Combobox\` for long lists where typing is faster than scrolling. For 3-10 options, use \`Select\`.
* Order the menu options logically to make it easier for users to find the option they want. Default to alphabetical order.
* Keep the option list the same width as the field that triggered it. This is the default.
* When the filtered list is empty, \`Combobox.Options\` says "No matches found" so the field doesn't look broken. Use \`noMatchesText\` to change the wording.
* When only so many values may be selected, say so in the \`subLabel\` (e.g., "Choose up to 3"). If the user selects more than that, set \`status\` to \`"critical"\` and explain in the \`fieldNote\`. Don't disable the remaining options: it hides the choices without telling the user why.

## Interaction

The field is always editable, so users can either type to narrow the list or open the full
list with the toggle button. In single-select mode, only one selection can be made. In
multi-select mode, one or more selections can be made from the list, and each one shows in
the field as a chip. Adding a chip selects the query text that found it, so the next keystroke
begins a new search. A chip goes away either through its own close button or by pressing
backspace in an empty field.

## Content & Accessibility

### Do's

* Use short, precise labels whenever possible.
* Avoid truncated items.
* In short lists, order from most common to least common choices.
* In longer lists use alphabetical order, but if there are 2 or 3 very common selections, consider repeating them at the top of the list.
* Use sentence case.

### Don'ts

* Use periods at the end of labels.
* Place placeholder text within the field; it can cause accessibility issues with color contrast, inconsistent screen-reader behavior, and text disappearing as users type.

## Resources

* https://headlessui.com/react/combobox`,displayName:`Combobox`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Combobox/Combobox.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Optional className for additional styling.`,name:`className`,required:!1,tags:{},type:{name:`any`}},form:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`form`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},multiple:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`multiple`,required:!1,tags:{},type:{name:`boolean`}},name:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Name of the form element, which triggers the generation of hidden key/value form fields (e.g. \`name=$name[$key]\`).

See: https://headlessui.com/react/combobox#using-with-html-forms`,name:`name`,required:!1,tags:{},type:{name:`string`}},as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},onClose:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`onClose`,required:!1,tags:{},type:{name:`(() => void)`}},nullable:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`nullable`,required:!1,tags:{deprecated:"The `<Combobox />` is now nullable default"},type:{name:`boolean`}},invalid:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`invalid`,required:!1,tags:{},type:{name:`boolean`}},immediate:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`immediate`,required:!1,tags:{},type:{name:`boolean`}},virtual:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`virtual`,required:!1,tags:{},type:{name:`{ options: NoInfer<ComboboxValue>[] | { toString: (() => string) | (() => string); charAt: unknown; charCodeAt: unknown; concat: unknown; indexOf: unknown; lastIndexOf: unknown; localeCompare: unknown; match: unknown; replace: unknown; ... 41 more ...; toWellFormed: unknown; }[]; disabled?: ((value: NoInfer<Combobox...`}},__demoMode:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`__demoMode`,required:!1,tags:{},type:{name:`boolean`}},by:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Compare option values by a named key, or by a comparison function, instead of by reference.
Useful when the selected value and the option come from different places.

See: https://headlessui.com/react/combobox#binding-objects-as-values`,name:`by`,required:!1,tags:{},type:{name:`string | ((a: ComboboxValue, z: ComboboxValue) => boolean)`}},defaultValue:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`The default value of the combobox field (when uncontrolled)`,name:`defaultValue`,required:!1,tags:{},type:{name:`ComboboxSelection`}},onChange:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:"Fires when a value is selected. Passes the selected value, or the list of selected values\nwhen `multiple` is set.",name:`onChange`,required:!1,tags:{},type:{name:`((value: ComboboxSelection | null) => void)`}},value:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`The value of the combobox field (when controlled)`,name:`value`,required:!1,tags:{},type:{name:`ComboboxSelection`}},optionsClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Optional className for additional options menu styling.

If optionsClassName is provided please include the width property to define
the options menu width.`,name:`optionsClassName`,required:!1,tags:{},type:{name:`string`}},required:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Indicates that field is required for form to be successfully submitted`,name:`required`,required:!1,tags:{},type:{name:`boolean`}},fieldNote:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Text under the field used to provide validation hints or error message to describe the input error.`,name:`fieldNote`,required:!1,tags:{},type:{name:`ReactNode`}},label:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Visible text label for the component.`,name:`label`,required:!1,tags:{},type:{name:`string`}},labelLayout:{defaultValue:{value:`vertical`},declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Whether the label is adjacent to the field (horizontal) or above the field (vertical)

**Default is \`"vertical"\`**.`,name:`labelLayout`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},showHint:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Whether it should show the field hint or not

**Default is \`"false"\`**.`,name:`showHint`,required:!1,tags:{},type:{name:`boolean`}},status:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Status for the field state

**Default is \`"default"\`**.`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "critical" | "warning"`,value:[{value:`"default"`},{value:`"critical"`},{value:`"warning"`}]}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Add additional descriptive text for the field name`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{y.Button.displayName=`Combobox.Button`,y.Button.__docgenInfo={description:`The toggle for the option list. Unlike \`Select\`, this is not the primary way into the
component: the text field is. It sits at the end of the field and reveals the full,
unfiltered list.`,displayName:`Combobox.Button`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Combobox/Combobox.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`"button"`,value:[{value:`"button"`}]}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | ((bag: ButtonRenderPropArg) => string)`}},autoFocus:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`autoFocus`,required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{y.Input.displayName=`Combobox.Input`,y.Input.__docgenInfo={description:`The editable text field for the component, wrapped in the bordered field styling along
with the toggle button for the option list.

When \`multiple\` is set, the values picked so far appear ahead of the text field as chips,
each one removable. The text field then holds only the query, which is why \`displayValue\`
has no effect in that mode.`,displayName:`Combobox.Input`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Combobox/Combobox.tsx`,methods:[],props:{defaultValue:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`defaultValue`,required:!1,tags:{},type:{name:`ComboboxValue`}},autoFocus:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`autoFocus`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Optional className for additional styling of the field wrapper.`,name:`className`,required:!1,tags:{},type:{name:`string | (((bag: InputRenderPropArg) => string) & string)`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`"input"`,value:[{value:`"input"`}]}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},displayValue:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Maps the currently selected value to the text shown in the text field. Receives \`null\`
when nothing is selected.

See: https://headlessui.com/react/combobox#binding-objects-as-values`,name:`displayValue`,required:!1,tags:{},type:{name:`((item: ComboboxValue | null) => string)`}},inputClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:"Optional className for additional styling of the inner `<input>` element.",name:`inputClassName`,required:!1,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:"Fires on every keystroke in the text field. Use it to filter the options passed\nto `Combobox.Options`.",name:`onChange`,required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLInputElement>`}},chipLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:"Maps a selected value to the text shown on its chip, when `multiple` is set.\n\n**Defaults to the value's `label`**, or the value itself when it's a string.",name:`chipLabel`,required:!1,tags:{},type:{name:`((item: ComboboxValue) => string)`}},chipLeadingComponent:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:"Leading glyph (icon) or content for a selected value's chip, when `multiple` is set.",name:`chipLeadingComponent`,required:!1,tags:{},type:{name:`((item: ComboboxValue) => IconOrContent)`}},shouldTruncate:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Whether we should truncate the text displayed in the combobox field`,name:`shouldTruncate`,required:!1,tags:{},type:{name:`boolean`}},showChips:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Whether selected values appear as removable chips inside the field, when \`multiple\` is set.
Turn it off to surface the selection yourself. Also governs whether backspace on an empty
field removes the last chip, and whether adding a chip selects the query text.

**Default is \`"true"\`**.`,name:`showChips`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{y.Label.displayName=`Combobox.Label`,y.Label.__docgenInfo={description:``,displayName:`Combobox.Label`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Combobox/Combobox.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},passive:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/label/label.d.ts`,name:`TypeLiteral`}],description:``,name:`passive`,required:!1,tags:{},type:{name:`boolean`}},htmlFor:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/label/label.d.ts`,name:`TypeLiteral`}],description:``,name:`htmlFor`,required:!1,tags:{},type:{name:`string`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLLabelElement>`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean`}},showHint:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:``,name:`showHint`,required:!1,tags:{},type:{name:`boolean`}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Add additional descriptive text for the field name`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{y.Option.displayName=`Combobox.Option`,y.Option.__docgenInfo={description:`Represents one of the available options for selection`,displayName:`Combobox.Option`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Combobox/Combobox.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`"div"`,value:[{value:`"div"`}]}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | ((bag: OptionRenderPropArg) => string)`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},value:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`ComboboxValue`}},order:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`order`,required:!1,tags:{},type:{name:`number`}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PopoverListItem/PopoverListItem.tsx`,name:`TypeLiteral`}],description:`Text below the main menu item call-to-action, briefly describing the menu item's function`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}},optionClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:``,name:`optionClassName`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{y.Options.displayName=`Combobox.Options`,y.Options.__docgenInfo={description:`The content container showing the available options. Pass in the options that match the
current query; \`Combobox\` does no filtering of its own. With none passed in, it shows
\`noMatchesText\` instead.

The list lines up with the field, not the text field inside it. HeadlessUI can only anchor to
the text field, which moves and narrows as chips fill the field, so we position the list with
Floating UI instead.`,displayName:`Combobox.Options`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Combobox/Combobox.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`"div"`,value:[{value:`"div"`}]}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | ((bag: OptionsRenderPropArg) => string)`}},static:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`static`,required:!1,tags:{},type:{name:`boolean`}},unmount:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`unmount`,required:!1,tags:{},type:{name:`boolean`}},hold:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`hold`,required:!1,tags:{},type:{name:`boolean`}},anchor:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Where the option list sits relative to the field. When left unset, the list lines up with
the field's bottom left edge and is at least as wide as the field, however many chips it
holds. A width class on the list can make it wider.

Setting it hands positioning back to HeadlessUI, which measures from the text field itself
rather than the field's border.

See: https://headlessui.com/react/combobox#positioning-the-options`,name:`anchor`,required:!1,tags:{},type:{name:`AnchorProps`}},portal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`portal`,required:!1,tags:{},type:{name:`boolean`}},modal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`modal`,required:!1,tags:{},type:{name:`boolean`}},transition:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`transition`,required:!1,tags:{},type:{name:`boolean`}},noMatchesText:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Text shown in place of the options when none are passed in, such as when a query matches
nothing.

**Default is \`"No matches found"\`**.`,name:`noMatchesText`,required:!1,tags:{},type:{name:`ReactNode`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`The list element. Merged with the ref used to position the list against the field.`,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement>`}}},tags:{}}}catch{}})),Je,C,w,T,E,Ye,D,Xe,Ze,O,Qe,$e,k,A,et,j,M,N,P,F,tt,I,L,R,z,B,V,H,U,W,nt,rt,it,G,K,at,ot,st,ct,q,J,Y,X,Z,Q,$,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt;t((()=>{Je=e(r()),qe(),Ee(),Oe(),f(),C=n(),{expect:w,userEvent:T,within:E}=__STORYBOOK_MODULE_TEST__,Ye={title:`Components/Combobox`,component:y,parameters:{docs:{subtitle:`A text field paired with a list of options. Typing filters the list, and the user may select one or more of the matches.`},layout:`centered`,chromatic:{delay:500,prefersReducedMotion:`reduce`}},argTypes:{multiple:{description:`Whether multiple values are allowed in this instance`},value:{table:{description:`The value of the combobox field (when controlled)`}},defaultValue:{description:`The default value of the combobox field (when uncontrolled)`},immediate:{description:`Whether the option list opens as soon as the field receives focus, instead of waiting for a keystroke`},__demoMode:{table:{disable:!0}},children:{control:!1},onChange:{description:"Optional change handler. Fires when a value is selected (and passes in the selected value, or list of values when `multiple`)"},onClose:{description:`Optional handler that fires when the option list closes, useful for resetting the query`}},tags:[`autodocs`,`version:1.0.0`]},D=[{key:`1`,label:`Dogs`,subLabel:`Who's a good boy?`},{key:`2`,label:`Cats`,subLabel:`Super independent.`},{key:`3`,label:`Birds`,subLabel:`Living relics!`},{key:`4`,label:`Rabbits`,subLabel:`Langomorphs are rad.`}],Xe=Array(30).fill(`test`).map((e,t)=>({key:`${e}-${t}`,label:`${e}${t}`})),Ze=({options:e=D,inputProps:t,optionsAnchor:n,showSubLabels:r,...i})=>{let[a,o]=(0,Je.useState)(``),s=a?e.filter(e=>e.label.toLowerCase().includes(a.toLowerCase())):e;return(0,C.jsxs)(y,{onClose:()=>o(``),...i,children:[(0,C.jsx)(y.Input,{"data-testid":`input-button`,displayValue:e=>e?.label??``,onChange:e=>o(e.target.value),...t}),(0,C.jsx)(y.Options,{anchor:n,className:`w-60`,children:s.map(e=>(0,C.jsx)(y.Option,{subLabel:r?e.subLabel:void 0,value:e,children:e.label},e.key))})]})},O=async e=>{let{canvasElement:t}=e,n=await E(t).findByTestId(`input-button`);await T.click(n),await T.keyboard(`{ArrowDown}`)},Qe=e=>async t=>{let{canvasElement:n}=t,r=await E(n).findByRole(`combobox`);await T.clear(r),await T.type(r,e)},$e=async e=>{let{canvasElement:t}=e,n=await E(t).findByTestId(`input-button`);await O(e);let r=await E(document.body).findByText(`Cats`);await T.click(r),await T.click(n)},k={render:e=>(0,C.jsx)(Ze,{...e}),args:{label:`Favorite Animal`,"data-testid":`combobox`,defaultValue:D[0],name:`combobox`,className:`w-60`}},A={render:e=>(0,C.jsx)(Ze,{...e}),args:{label:`Favorite Animal`,"data-testid":`combobox`,defaultValue:D[0],name:`combobox`,className:`w-60`,immediate:!0}},et={...k,args:{...k.args,labelLayout:`horizontal`,label:`Animal?`}},j={...k,play:Qe(`Ca`),parameters:{...k.parameters,snapshot:{skip:!0}}},M={...k,play:async e=>{await Qe(`zzz`)?.(e),await w(await E(document.body).findByText(`No matches found`)).toBeVisible()},parameters:{...k.parameters,snapshot:{skip:!0}}},N={...k,args:{...k.args,defaultValue:D[1]}},P={...k,args:{...N.args,defaultValue:{...D[1]},by:`key`}},F={...k,args:{...k.args,name:`interactive-combobox`,subLabel:`Additional descriptive text`},parameters:{docs:{source:{code:`
const [query, setQuery] = useState('');
const filtered = options.filter((option) => option.label.includes(query));

<Combobox label="Favorite Animal" name="interactive-combobox" onChange={...}>
  <Combobox.Input
    displayValue={(option) => option?.label ?? ''}
    onChange={(event) => setQuery(event.target.value)}
  />
  <Combobox.Options>
    {filtered.map((option) => (
      <Combobox.Option key={option.key} value={option}>
        {option.label}
      </Combobox.Option>
    ))}
  </Combobox.Options>
</Combobox>`}}}},tt={...k,args:{...k.args,fieldNote:`Choose your beast`}},I={...k,args:{...k.args,fieldNote:`Choose your beast`,showSubLabels:!0},parameters:{...k.parameters,snapshot:{skip:!0}},play:O},L={...k,args:{...k.args,immediate:!0},play:async e=>{let t=await E(e.canvasElement).findByRole(`combobox`);await T.click(t),await w(t.getAttribute(`aria-expanded`)).toEqual(`true`)},parameters:{...k.parameters,snapshot:{skip:!0}}},R={...k,args:{...k.args,defaultValue:void 0,inputProps:{placeholder:`Search animals`}}},z=({options:e=D,inputProps:t,...n})=>{let[r,i]=(0,Je.useState)(``),a=r?e.filter(e=>e.label.toLowerCase().includes(r.toLowerCase())):e;return(0,C.jsxs)(y,{onClose:()=>i(``),...n,children:[(0,C.jsx)(y.Input,{onChange:e=>i(e.target.value),...t,"data-testid":`input-button`}),(0,C.jsx)(y.Options,{className:`w-[240px]`,children:a.map(e=>(0,C.jsx)(y.Option,{value:e,children:e.label},e.key))})]})},B={render:e=>(0,C.jsx)(z,{...e}),args:{label:`Favorite Animal(s)`,multiple:!0,"data-testid":`combobox`,defaultValue:[D[0]],className:`w-[240px]`,name:`multiple-combobox`},parameters:{snapshot:{skip:!0}},play:O},V={render:e=>(0,C.jsx)(z,{...e}),args:{...B.args,defaultValue:[],className:`w-[320px]`},play:async e=>{let t=E(e.canvasElement),n=E(e.canvasElement.ownerDocument.body),r=await t.findByRole(`combobox`);await T.type(r,`Cats`),await T.click(await n.findByRole(`option`,{name:/Cats/})),await w(r).toHaveValue(`Cats`),await w(r.selectionStart).toBe(0),await w(r.selectionEnd).toBe(4)},parameters:{snapshot:{skip:!0}}},H={render:e=>(0,C.jsx)(z,{...e}),args:{...B.args,defaultValue:[D[0],D[1]],className:`w-[320px]`},play:async e=>{let t=E(e.canvasElement),n=await t.findByRole(`combobox`);await T.click(n),await T.keyboard(`{Backspace}`),await w(t.queryByText(`Cats`)).not.toBeInTheDocument(),await w(t.getByText(`Dogs`)).toBeVisible()},parameters:{snapshot:{skip:!0}}},U={render:e=>(0,C.jsx)(z,{...e}),args:{...B.args,defaultValue:D,className:`w-[240px]`}},W={render:e=>(0,C.jsx)(z,{...e}),args:{...U.args},play:async e=>{let t=await E(e.canvasElement).findByRole(`combobox`);await T.click(t),await T.keyboard(`{ArrowDown}`),await w(t.getAttribute(`aria-expanded`)).toEqual(`true`)},decorators:[e=>(0,C.jsx)(`div`,{className:`p-spacing-size-4 pb-spacing-size-8`,children:e()})],parameters:{snapshot:{skip:!0}}},nt=2,rt=e=>{let[t,n]=(0,Je.useState)(Array.isArray(e.defaultValue)?e.defaultValue.length:0),r=t>nt;return(0,C.jsx)(z,{...e,fieldNote:r?`You've chosen ${t}. Remove ${t-nt} to continue.`:void 0,onChange:e=>n(Array.isArray(e)?e.length:0),status:r?`critical`:`default`,subLabel:`Choose up to ${nt}`})},it={render:e=>(0,C.jsx)(rt,{...e}),args:{...B.args,defaultValue:[D[0],D[1],D[2]],className:`w-[320px]`}},G={render:e=>(0,C.jsx)(z,{...e}),args:{...B.args,defaultValue:[D[0],D[1]],className:`w-[320px]`,inputProps:{chipLeadingComponent:()=>`person-encircled`}}},K={render:e=>(0,C.jsx)(at,{...e}),args:{...B.args,className:`w-[384px]`}},at=({options:e=D,...t})=>{let[n,r]=(0,Je.useState)(t.defaultValue??[]);return(0,C.jsx)(z,{...t,fieldNote:`Selected: `+(n.length<1?`None`:n.map(e=>e.label).join(`, `)),inputProps:{showChips:!1,placeholder:`${n.length>0?n.length:`none`} selected`},onChange:e=>r(e),options:e})},ot=({options:e=D,...t})=>{let[n,r]=(0,Je.useState)(``),i=n?e.filter(e=>e.label.toLowerCase().includes(n.toLowerCase())):e;return(0,C.jsx)(y,{onClose:()=>r(``),...t,children:({open:e,value:t})=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y.Label,{children:`Favorite Animal`}),(0,C.jsx)(y.Input,{displayValue:e=>e?.label??``,onChange:e=>r(e.target.value)}),(0,C.jsx)(y.Options,{children:i.map(e=>(0,C.jsx)(y.Option,{value:e,children:e.label},e.key))}),(0,C.jsxs)(`p`,{className:`mt-spacing-size-1`,children:[e?`Picking`:`Picked`,`: `,t?.label]})]})})},st={render:e=>(0,C.jsx)(ot,{...e}),args:{"data-testid":`combobox`,defaultValue:D[0],name:`render-prop-combobox`,className:`w-60`}},ct={key:`long`,label:`A very long option label that will not fit`},q={...k,args:{...k.args,className:`w-[160px]`,defaultValue:ct,options:[ct,...D],inputProps:{shouldTruncate:!0}}},J={...k,args:{...k.args,className:`w-[240px]`}},Y={...k,args:{...k.args,className:`w-[240px]`,defaultValue:Xe[3],options:Xe},play:async e=>{let t=await E(e.canvasElement).findByRole(`combobox`);await O(e),await T.keyboard(`{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}`),await w(t.getAttribute(`aria-expanded`)).toEqual(`true`)},parameters:{layout:`centered`,chromatic:{delay:450},snapshot:{skip:!0}},decorators:[e=>(0,C.jsx)(`div`,{className:`p-spacing-size-4 pb-spacing-size-8`,children:e()})]},X={...k,args:{...k.args,className:`w-[160px]`,optionsClassName:`w-[384px]`},play:async e=>{let t=await E(e.canvasElement).findByRole(`combobox`);await O(e),await T.keyboard(`{ArrowDown}{ArrowDown}`),await w(t.getAttribute(`aria-expanded`)).toEqual(`true`)},parameters:{chromatic:{diffIncludeAntiAliasing:!1,diffThreshold:.75},docs:{...k.parameters?.docs},snapshot:{skip:!0}},decorators:[e=>(0,C.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})]},Z={...k,args:{...k.args,subLabel:`Some descriptive text`,disabled:!0},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}},docs:{...k.parameters?.docs},snapshot:{skip:!0}}},Q={...k,args:{...k.args,required:!0,showHint:!0,className:`w-[384px]`,subLabel:`Some descriptive text`}},$={...k,args:{...k.args,required:!1,showHint:!0,subLabel:`Some descriptive text`,className:`w-[384px]`}},lt={...k,args:{...Q.args,status:`critical`,fieldNote:`Some text describing error`}},ut={...k,args:{...$.args,status:`warning`,fieldNote:`Some text describing warning`}},dt={...k,args:{...k.args,label:void 0,"aria-label":`hidden label`}},ft={...k,args:{...k.args,label:void 0,"aria-label":`hidden label`,required:!0,className:`w-[384px]`}},pt={...k,args:{...k.args,disabled:!0,required:!0,showHint:!0,className:`w-[384px]`},parameters:{docs:{...k.parameters?.docs},snapshot:{skip:!0}}},mt={...k,args:{...k.args,optionsAnchor:{to:`bottom end`,gap:20,offset:44}},play:O,decorators:[e=>(0,C.jsx)(`div`,{className:`p-spacing-size-4 pb-spacing-size-8`,children:e()})],parameters:{snapshot:{skip:!0}}},ht={...k,parameters:{layout:`centered`,chromatic:{delay:300,disableSnapshot:!0},docs:{...k.parameters?.docs},snapshot:{skip:!0}},play:$e},gt={render:e=>(0,C.jsx)(z,{...e}),args:{...G.args,inputProps:{chipLeadingComponent:()=>(0,C.jsx)(De,{size:14})}}},_t={...k,decorators:[e=>(0,C.jsx)(u,{icons:ke,children:e()})]},vt=`Default.Immediate.HorizontalLabel.FilteredByQuery.NoMatches.WithSelectedOption.WithSelectedBy.WithFieldName.WithFieldNote.WithSubLabels.ImmediatelyOpen.WithPlaceholder.Multiple.MultipleSelectsQueryOnAdd.MultipleRemoveWithBackspace.MultipleWithManySelected.MultipleWithManySelectedOpen.MultipleWithSelectionLimit.MultipleWithChipIcons.MultipleWithoutChips.WithRenderProp.WithTruncation.AdjustedWidth.LongOptionList.SeparateFieldAndMenuWidth.Disabled.Required.Optional.Error.Warning.NoVisibleLabel.NoVisibleLabelButRequired.DisabledRequired.OptionsEndAligned.OpenByDefault.MultipleWithFpoChipContent.WithProvidedIcons`.split(`.`),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <ComboboxDemo {...args} />,
  args: {
    label: 'Favorite Animal',
    'data-testid': 'combobox',
    defaultValue: exampleOptions[0],
    name: 'combobox',
    className: 'w-60'
  }
}`,...k.parameters?.docs?.source},description:{story:"The simplest and default case. The field shows the current selection via `displayValue`, and\nevery keystroke fires `onChange` on `Combobox.Input` so the consumer can filter the options.\n\n**NOTE**: for combobox value data types, `{label: string}` is required, but any other key/value pairs are allowed.\n\nFor detailed code examples, refer to the [stories code in GitHub](https://github.com/chanzuckerberg/edu-design-system/blob/main/src/components/Combobox/Combobox.stories.tsx).",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <ComboboxDemo {...args} />,
  args: {
    label: 'Favorite Animal',
    'data-testid': 'combobox',
    defaultValue: exampleOptions[0],
    name: 'combobox',
    className: 'w-60',
    immediate: true
  }
}`,...A.parameters?.docs?.source},description:{story:"Use the `immediate` prop to make it so that the options are shown to the user once the cursor\nenters the input.",...A.parameters?.docs?.description}}},et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    labelLayout: 'horizontal',
    label: 'Animal?'
  }
}`,...et.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: typeQuery('Ca'),
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true
    }
  }
}`,...j.parameters?.docs?.source},description:{story:`Typing in the field narrows the option list. This story types "Ca" to leave only one match.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: async playOptions => {
    await typeQuery('zzz')?.(playOptions);
    const popoverCanvas = within(document.body);
    await expect(await popoverCanvas.findByText('No matches found')).toBeVisible();
  },
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true
    }
  }
}`,...M.parameters?.docs?.source},description:{story:"When `Combobox.Options` gets no options, such as when a query matches nothing, it says\n\"No matches found\" so the field doesn't look broken. The entry carries no control and can't be\nselected. Pass `noMatchesText` to `Combobox.Options` to change the wording.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    defaultValue: exampleOptions[1]
  }
}`,...N.parameters?.docs?.source},description:{story:`You can select a different option to show when rendered.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...WithSelectedOption.args,
    defaultValue: {
      ...exampleOptions[1]
    },
    by: 'key'
  }
}`,...P.parameters?.docs?.source},description:{story:"Use the `by` option to determine the selection (when using objects for the value list). This helps when you want to compare by value, not reference.\n- The type comparison can be by a named key in the object `by={'key'}` or using a comparison function\n\nSee: https://headlessui.com/react/combobox#binding-objects-as-values",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    name: 'interactive-combobox',
    subLabel: 'Additional descriptive text'
  },
  parameters: {
    docs: {
      source: {
        code: \`
const [query, setQuery] = useState('');
const filtered = options.filter((option) => option.label.includes(query));

<Combobox label="Favorite Animal" name="interactive-combobox" onChange={...}>
  <Combobox.Input
    displayValue={(option) => option?.label ?? ''}
    onChange={(event) => setQuery(event.target.value)}
  />
  <Combobox.Options>
    {filtered.map((option) => (
      <Combobox.Option key={option.key} value={option}>
        {option.label}
      </Combobox.Option>
    ))}
  </Combobox.Options>
</Combobox>\`
      }
    }
  }
}`,...F.parameters?.docs?.source},description:{story:'You can add a `name` prop to generate form fields for the value object.\n\nIn this example, the field name is `"interactive-combobox"`, and the value is an object storing `{label: string, key: string}`.\n\nThis will generate hidden fields with names:\n* `interactive-combobox[label]`\n* `interactive-combobox[key]`',...F.parameters?.docs?.description}}},tt.parameters={...tt.parameters,docs:{...tt.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    fieldNote: 'Choose your beast'
  }
}`,...tt.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    fieldNote: 'Choose your beast',
    showSubLabels: true
  },
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true
    }
  },
  play: openMenu
}`,...I.parameters?.docs?.source},description:{story:`This demonstrates how combobox items can also have an optional subLabel attached to give more details about the option.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    immediate: true
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');
    await userEvent.click(input);
    await expect(input.getAttribute('aria-expanded')).toEqual('true');
  },
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true
    }
  }
}`,...L.parameters?.docs?.source},description:{story:`By default the option list waits for a keystroke before opening. Pass \`immediate\` to open the
full list as soon as the field receives focus.

See: https://headlessui.com/react/combobox#opening-the-combobox-immediately`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    defaultValue: undefined,
    inputProps: {
      placeholder: 'Search animals'
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`A placeholder tells the user the field is searchable before they've typed anything. Use it
sparingly, and never as a replacement for the label.`,...R.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    label: 'Favorite Animal(s)',
    multiple: true,
    'data-testid': 'combobox',
    defaultValue: [exampleOptions[0]],
    className: 'w-[240px]',
    name: 'multiple-combobox'
  },
  parameters: {
    snapshot: {
      skip: true
    }
  },
  play: openMenu
}`,...B.parameters?.docs?.source},description:{story:"You can select multiple values by passing `multiple` to the parent element. When doing this,\nmake sure all props that use the value (e.g., `value` and `defaultValue`) should use an array instead\nof an object or value for the individual `Combobox.Option` entries.\n\nEach selected value shows up in the field as a removable chip. Chip text comes from the value's\n`label` by default; pass `chipLabel` to `Combobox.Input` when your values are shaped differently.\nChips come off via their close button or via backspace in an empty field (see\n`MultipleRemoveWithBackspace`). Picking an option selects the query that found it, so the next\nkeystroke starts a new search (see `MultipleSelectsQueryOnAdd`).\n\nHidden form inputs are generated for each option selected and take the following form:\n- `name[arrayIndex][key]`\n- `name[arrayIndex][value]`",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: [],
    className: 'w-[320px]'
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    // The option list is portaled out of the story canvas, so look for options in the document
    const body = within(playOptions.canvasElement.ownerDocument.body);
    const input: HTMLInputElement = await canvas.findByRole('combobox');
    await userEvent.type(input, 'Cats');
    await userEvent.click(await body.findByRole('option', {
      name: /Cats/
    }));

    // The query is still in the field, but selected, so the next keystroke takes its place
    await expect(input).toHaveValue('Cats');
    await expect(input.selectionStart).toBe(0);
    await expect(input.selectionEnd).toBe('Cats'.length);
  },
  parameters: {
    snapshot: {
      skip: true
    }
  }
}`,...V.parameters?.docs?.source},description:{story:`The query that found an option stays in the field once that option is picked, so we select it.
Typing again starts a new search in place of the one already spent, and a single backspace
clears it. Anyone who'd rather keep building on the query can press the right arrow first.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: [exampleOptions[0], exampleOptions[1]],
    className: 'w-[320px]'
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');
    await userEvent.click(input);
    await userEvent.keyboard('{Backspace}');

    // The last chip is gone; the first one stays put
    await expect(canvas.queryByText('Cats')).not.toBeInTheDocument();
    await expect(canvas.getByText('Dogs')).toBeVisible();
  },
  parameters: {
    snapshot: {
      skip: true
    }
  }
}`,...H.parameters?.docs?.source},description:{story:`Pressing backspace in an empty field removes the last chip, so a selection can be undone
without reaching for the mouse. Backspace edits the query first; only once the field is empty
does it start removing chips.

**NOTE**: this behavior is ours, not HeadlessUI's. HeadlessUI does not bind backspace on the
combobox input as of v2.2, so there is nothing to conflict with today, but a future HeadlessUI
release could claim that key. We mark the event as handled to reduce the chance of both firing.
If you see a chip and something else both react to one backspace, this is the first place to
look. Pass your own \`onKeyDown\` to \`Combobox.Input\` and call \`preventDefault()\` to opt out.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: exampleOptions,
    className: 'w-[240px]'
  }
}`,...U.parameters?.docs?.source},description:{story:`The field wraps onto more than one line as chips accumulate, so a long selection stays fully
visible instead of scrolling out of view.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    ...MultipleWithManySelected.args
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowDown}');
    await expect(input.getAttribute('aria-expanded')).toEqual('true');
  },
  decorators: [Story => <div className="p-spacing-size-4 pb-spacing-size-8">{Story()}</div>],
  parameters: {
    snapshot: {
      skip: true
    }
  }
}`,...W.parameters?.docs?.source},description:{story:`The option list lines up with the field's left edge and matches its width, however many rows
of chips the field holds and wherever the cursor sits.`,...W.parameters?.docs?.description}}},it.parameters={...it.parameters,docs:{...it.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleWithSelectionLimitDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: [exampleOptions[0], exampleOptions[1], exampleOptions[2]],
    className: 'w-[320px]'
  }
}`,...it.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: [exampleOptions[0], exampleOptions[1]],
    className: 'w-[320px]',
    inputProps: {
      chipLeadingComponent: () => 'person-encircled'
    }
  }
}`,...G.parameters?.docs?.source},description:{story:"Chips can carry a leading icon by way of `chipLeadingComponent` on `Combobox.Input`.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleWithoutChipsDemo {...args} />,
  args: {
    ...Multiple.args,
    className: 'w-[384px]'
  }
}`,...K.parameters?.docs?.source},description:{story:"Set `showChips` to false on `Combobox.Input` when you'd rather surface the selection yourself,\nwhich is the behavior a plain HeadlessUI combobox gives you. This can be used to display a summary\nor other text instead of selectable chips.",...K.parameters?.docs?.description}}},st.parameters={...st.parameters,docs:{...st.parameters?.docs,source:{originalSource:`{
  render: args => <RenderPropComboboxDemo {...args} />,
  args: {
    'data-testid': 'combobox',
    defaultValue: exampleOptions[0],
    name: 'render-prop-combobox',
    className: 'w-60'
  }
}`,...st.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    className: 'w-[160px]',
    defaultValue: longLabelOption,
    options: [longLabelOption, ...exampleOptions],
    inputProps: {
      shouldTruncate: true
    }
  }
}`,...q.parameters?.docs?.source},description:{story:"The component provides some basic styles to handle long text in the provided field. Use\n`shouldTruncate` on `.Input` to truncate the text with an ellipsis.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    className: 'w-[240px]'
  }
}`,...J.parameters?.docs?.source},description:{story:`The field trigger width can be set with utility classes. By default, the option list will expand to match the width.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    className: 'w-[240px]',
    defaultValue: longOptionList[3],
    options: longOptionList
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');
    await openMenu(playOptions);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}');
    await expect(input.getAttribute('aria-expanded')).toEqual('true');
  },
  parameters: {
    layout: 'centered',
    chromatic: {
      delay: 450
    },
    snapshot: {
      skip: true
    }
  },
  decorators: [Story => <div className="p-spacing-size-4 pb-spacing-size-8">{Story()}</div>]
}`,...Y.parameters?.docs?.source},description:{story:`We lock the maximum height of the option list to 1/4 of the available screen height. Scrolling is allowed in the list, and
keyboard navigation (showing the items off the edge of the screen) is handled when used.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    className: 'w-[160px]',
    optionsClassName: 'w-[384px]'
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');
    await openMenu(playOptions);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await expect(input.getAttribute('aria-expanded')).toEqual('true');
  },
  parameters: {
    chromatic: {
      diffIncludeAntiAliasing: false,
      diffThreshold: 0.75
    },
    docs: {
      ...Default.parameters?.docs
    },
    snapshot: {
      skip: true
    }
  },
  decorators: [Story => <div className="p-spacing-size-4">{Story()}</div>]
}`,...X.parameters?.docs?.source},description:{story:`If you want a different width for the field and the option list, you can control them separately.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    subLabel: 'Some descriptive text',
    disabled: true
  },
  parameters: {
    a11y: {
      config: {
        rules: [
        // Disabled input does not need to meet color contrast
        {
          id: 'color-contrast',
          enabled: false
        }]
      }
    },
    docs: {
      ...Default.parameters?.docs
    },
    snapshot: {
      skip: true
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Each Combobox can be marked as disabled. This will update the visual treatment to indicate the field cannot be changed (but by default
will show the selected value).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: true,
    showHint: true,
    className: 'w-[384px]',
    subLabel: 'Some descriptive text'
  }
}`,...Q.parameters?.docs?.source},description:{story:"Combobox fields can be marked as required by using the `required` prop.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: false,
    showHint: true,
    subLabel: 'Some descriptive text',
    className: 'w-[384px]'
  }
}`,...$.parameters?.docs?.source},description:{story:"Fields can be marked as optional by using `required` as false, but `showHint` as true.",...$.parameters?.docs?.description}}},lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Required.args,
    status: 'critical',
    fieldNote: 'Some text describing error'
  }
}`,...lt.parameters?.docs?.source},description:{story:`You can supply an error field note by specifying the status of "critical".`,...lt.parameters?.docs?.description}}},ut.parameters={...ut.parameters,docs:{...ut.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Optional.args,
    status: 'warning',
    fieldNote: 'Some text describing warning'
  }
}`,...ut.parameters?.docs?.source},description:{story:`You can supply a warning field note by specifying the status of "warning".`,...ut.parameters?.docs?.description}}},dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label'
  }
}`,...dt.parameters?.docs?.source},description:{story:"Having a visible label is not necessary. In those cases, use `aria-label` to set an accessible label for the field",...dt.parameters?.docs?.description}}},ft.parameters={...ft.parameters,docs:{...ft.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label',
    required: true,
    className: 'w-[384px]'
  }
}`,...ft.parameters?.docs?.source},description:{story:"No visible label is required. In such cases, you must use an equivalent label for accessibility, like `aria-label`.",...ft.parameters?.docs?.description}}},pt.parameters={...pt.parameters,docs:{...pt.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
    required: true,
    showHint: true,
    className: 'w-[384px]'
  },
  parameters: {
    docs: {
      ...Default.parameters?.docs
    },
    snapshot: {
      skip: true
    }
  }
}`,...pt.parameters?.docs?.source},description:{story:"`Combobox` can be both disabled and required.",...pt.parameters?.docs?.description}}},mt.parameters={...mt.parameters,docs:{...mt.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    optionsAnchor: {
      to: 'bottom end',
      gap: 20,
      offset: 44
    }
  },
  play: openMenu,
  decorators: [Story => <div className="p-spacing-size-4 pb-spacing-size-8">{Story()}</div>],
  parameters: {
    snapshot: {
      skip: true
    }
  }
}`,...mt.parameters?.docs?.source},description:{story:`Options for each \`Combobox\` can be aligned on different sides of the field.

More information: https://headlessui.com/react/combobox#positioning-the-options`,...mt.parameters?.docs?.description}}},ht.parameters={...ht.parameters,docs:{...ht.parameters?.docs,source:{originalSource:`{
  ...Default,
  parameters: {
    layout: 'centered',
    chromatic: {
      delay: 300,
      disableSnapshot: true
    },
    docs: {
      ...Default.parameters?.docs
    },
    snapshot: {
      skip: true
    }
  },
  play: selectCat
}`,...ht.parameters?.docs?.source},description:{story:"This shows the contents of `Combobox` upon render. Mostly to demonstrate it is possible, to capture a snapshot of the appearance.",...ht.parameters?.docs?.description}}},gt.parameters={...gt.parameters,docs:{...gt.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    ...MultipleWithChipIcons.args,
    inputProps: {
      chipLeadingComponent: () => <FpoBlock size={14} />
    }
  }
}`,...gt.parameters?.docs?.source},description:{story:`\`chipLeadingComponent\` passes straight through to the chip's own leading slot, so it takes
arbitrary content and not only an EDS icon name. The block below stands in for whatever
you supply.

The chip's slot carries no explicit icon size, so it resolves to 14px against the chip's
own type, and the block matches that.`,...gt.parameters?.docs?.description}}},_t.parameters={..._t.parameters,docs:{..._t.parameters?.docs,source:{originalSource:`{
  ...Default,
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,..._t.parameters?.docs?.source},description:{story:"The indicator resolves the same `expand` role as `Select` and `Menu.Button`, so all three\nchange together from one `IconProvider`. The chip's leading slot is the consumer's to\nfill, and is left alone.",..._t.parameters?.docs?.description}}}}))();export{J as AdjustedWidth,k as Default,Z as Disabled,pt as DisabledRequired,lt as Error,j as FilteredByQuery,et as HorizontalLabel,A as Immediate,L as ImmediatelyOpen,Y as LongOptionList,B as Multiple,H as MultipleRemoveWithBackspace,V as MultipleSelectsQueryOnAdd,G as MultipleWithChipIcons,gt as MultipleWithFpoChipContent,U as MultipleWithManySelected,W as MultipleWithManySelectedOpen,it as MultipleWithSelectionLimit,K as MultipleWithoutChips,M as NoMatches,dt as NoVisibleLabel,ft as NoVisibleLabelButRequired,ht as OpenByDefault,$ as Optional,mt as OptionsEndAligned,Q as Required,X as SeparateFieldAndMenuWidth,ut as Warning,F as WithFieldName,tt as WithFieldNote,R as WithPlaceholder,_t as WithProvidedIcons,st as WithRenderProp,P as WithSelectedBy,N as WithSelectedOption,I as WithSubLabels,q as WithTruncation,vt as __namedExportsOrder,Ye as default};