import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r}from"./iframe-CxYcUItw.js";import{n as i,t as a}from"./clsx-CU3OJm-u.js";import{i as o,n as s}from"./logging-rNM_k4ml.js";import{a as c,i as ee,n as l,o as te,t as u}from"./Icon-DJYKhM6X.js";import{n as d,r as f,t as ne}from"./Text-s7d_e173.js";import{t as p}from"./Text-4jUaZiwM.js";import{M as re,_ as ie,g as ae,h as oe,t as se,v as ce}from"./headlessui.esm-lK-9xKHu.js";import{t as le}from"./PopoverContainer-DuAQqAdM.js";import{t as ue}from"./PopoverContainer-k-Ekgsta.js";import{t as de}from"./PopoverListItem-1jWLpWtF.js";import{t as fe}from"./PopoverListItem-DL-m8aEL.js";import{t as pe}from"./Checkbox-D0WLzxnw.js";import{t as me}from"./Checkbox-BJsrBMyB.js";import{t as he}from"./FieldLabel-1T7cTiJm.js";import{t as ge}from"./FieldLabel-BpIbOLvB.js";import{t as _e}from"./FieldNote-Cinj9o5n.js";import{t as ve}from"./FieldNote-C9tJIPBV.js";import{t as ye}from"./Radio-BOvwx7UQ.js";import{t as be}from"./Radio-n27FJ9Sp.js";import{n as xe,t as Se}from"./semanticIconOverrides-CAkf2_aJ.js";var Ce,we,Te,Ee,De,Oe,ke,m,Ae=t((()=>{Ce=`_select_1uy1q_10`,we=`_select__overline_1uy1q_17`,Te=`_select__options_1uy1q_32`,Ee=`_select__footer_1uy1q_99`,De=`_select__label_1uy1q_112`,Oe=`_select__subLabel_1uy1q_116`,ke=`_select__option_1uy1q_32`,m={select:Ce,select__overline:we,"select__overline--no-label":`_select__overline--no-label_1uy1q_25`,select__options:Te,"select--label-layout-vertical":`_select--label-layout-vertical_1uy1q_37`,"select--label-layout-horizontal":`_select--label-layout-horizontal_1uy1q_41`,"select-button":`_select-button_1uy1q_52`,"select-button__icon":`_select-button__icon_1uy1q_78`,"select-button__text--truncated":`_select-button__text--truncated_1uy1q_89`,"select-button__icon--reversed":`_select-button__icon--reversed_1uy1q_95`,select__footer:Ee,"select--has-fieldNote":`_select--has-fieldNote_1uy1q_104`,select__label:De,select__subLabel:Oe,"select__label--disabled":`_select__label--disabled_1uy1q_121`,select__option:ke,"select__option-text":`_select__option-text_1uy1q_129`,"select__required-text":`_select__required-text_1uy1q_133`,"select-button--error":`_select-button--error_1uy1q_154`,"select-button--warning":`_select-button--warning_1uy1q_167`,"select__required-text--disabled":`_select__required-text--disabled_1uy1q_180`}}));function h({"aria-label":e,children:t,className:n,disabled:r,fieldNote:i,id:o,label:s,labelLayout:c=`vertical`,name:ee,optionsClassName:l,required:te,showHint:u,status:d,onChange:f,subLabel:ne,...p}){let[re,ae]=(0,g.useState)(p.value===void 0?p.defaultValue:p.value),oe={className:a(m.select,i&&m[`select--has-fieldNote`],c&&m[`select--label-layout-${c}`],n),as:`div`,disabled:r,name:ee,...p},se={optionsClassName:l,status:d,multiple:p.multiple};return typeof t==`function`?(0,_.jsx)(v.Provider,{value:se,children:(0,_.jsx)(ie,{...oe,"aria-label":e,children:t})}):(0,_.jsxs)(v.Provider,{value:se,children:[(0,_.jsxs)(ie,{...oe,onChange:e=>{re!==e&&(ae(e),f&&f(e))},children:[(s||te)&&(0,_.jsx)(h.Label,{disabled:r,required:te,showHint:u,subLabel:ne,children:s}),t]}),i&&(0,_.jsx)(`div`,{className:m.select__footer,children:(0,_.jsx)(_e,{disabled:r,status:d,children:i})})]})}var g,_,v,je,Me,Ne,Pe,y,Fe=t((()=>{se(),i(),g=e(r()),o(),me(),ge(),ve(),u(),ue(),fe(),be(),p(),f(),Ae(),_=n(),v=g.createContext({}),je=({children:e,required:t,className:n,disabled:r,showHint:i,subLabel:o})=>{let s=a(m.select__label,r&&a(m[`select__label--disabled`]),n),c=a(m[`select__required-text`],r&&m[`select__required-text--disabled`]),ee=a(m.select__overline,!e&&m[`select__overline--no-label`]),l=a(m.select__subLabel,r&&m[`select__label--disabled`]);return(0,_.jsxs)(`div`,{className:ee,children:[(0,_.jsx)(re,{as:he,className:s,disabled:r,size:`md`,children:e}),t&&i&&(0,_.jsx)(d,{"aria-disabled":r??void 0,as:`span`,className:c,preset:`body-sm`,children:`(Required)`}),!t&&i&&(0,_.jsx)(d,{"aria-disabled":r??void 0,as:`span`,className:c,preset:`body-sm`,children:`(Optional)`}),e&&o&&(0,_.jsx)(`div`,{className:l,children:(0,_.jsx)(d,{as:`span`,preset:`body-sm`,children:o})})]})},Me=function(e){let{children:t,className:n,onClick:r,icon:i,...a}=e;s(`Select.Button`,`icon`,`expand`,i);let{status:o}=(0,g.useContext)(v);return(0,_.jsx)(ce,{as:g.Fragment,...a,children:e=>typeof t==`function`?t(e):(0,_.jsx)(y,{className:n,isOpen:e.open,onClick:e=>{r&&r(e)},status:o,children:t})})},Ne=function(e){let{anchor:t={to:`bottom start`,gap:12},className:n,...r}=e,{optionsClassName:i}=(0,g.useContext)(v);return(0,_.jsx)(oe,{anchor:t,as:le,className:a(m.select__options,n,i),modal:!1,...r})},Pe=function(e){let{children:t,className:n,optionClassName:r,subLabel:i,...o}=e,s=a(r,m.select__option),{multiple:c}=(0,g.useContext)(v);return(0,_.jsx)(ae,{as:g.Fragment,...o,children:typeof t==`function`?t:({focus:e,disabled:n,selected:r})=>(0,_.jsx)(de,{__type:`selectitem`,className:s,isDisabled:n,isFocused:e,leadingContent:c?(0,_.jsx)(pe,{"aria-hidden":`true`,"aria-label":`checkbox`,checked:r,inert:!0,readOnly:!0}):(0,_.jsx)(ye,{"aria-hidden":`true`,"aria-label":`radio`,checked:r,inert:!0,readOnly:!0}),subLabel:i,children:(0,_.jsx)(`span`,{className:m[`select__option-text`],children:t})})})},y=g.forwardRef((e,t)=>{let{children:n,className:r,isOpen:i,onClick:o,shouldTruncate:l=!1,icon:u,...d}=e;s(`Select.ButtonWrapper`,`icon`,`expand`,u);let{status:f}=(0,g.useContext)(v),p=ee(`expand`),re=a(m[`select-button`],f===`warning`&&m[`select-button--warning`],f===`critical`&&m[`select-button--error`],r),ie=a(m[`select-button__icon`],i&&m[`select-button__icon--reversed`]),ae=a(l&&m[`select-button__text--truncated`]);return(0,_.jsxs)(`button`,{className:re,onClick:e=>{o&&o(e)},ref:t,type:`button`,...d,children:[(0,_.jsx)(ne,{as:`span`,className:ae,preset:`input`,children:n}),te(p)&&(0,_.jsx)(c,{className:ie,content:p,purpose:`decorative`,size:`24px`})]})}),h.displayName=`Select`,Me.displayName=`Select.Button`,y.displayName=`Select.ButtonWrapper`,je.displayName=`Select.Label`,Pe.displayName=`Select.Option`,Ne.displayName=`Select.Options`,h.Button=Me,h.ButtonWrapper=y,h.Label=je,h.Option=Pe,h.Options=Ne;try{h.displayName=`Select`,h.__docgenInfo={description:`## Usage

Supports controlled and uncontrolled behavior, using a render prop in the latter case.

| Type/Use | Description | Example |
|----------|-------------|---------|
| Standard | A dropdown list that reveals a set of options; one can be selected. | Country selector. Sort order. Single-choice forms. |
| Searchable | Includes a text input for filtering options in real time. | Long lists (e.g., cities, tags). Large datasets. |
| Multi-select | Allows multiple options to be selected from the list. | Filter panels. Role or permission assignments. |
| Disabled | Non-interactive; used to show unavailable or inactive states. | Feature-gated selections. Incomplete forms. |
| Preselected | Default selection appears before user interacts. | Recommended settings. "Most common" default. |
| Inline | Embedded within table rows or compact UIs. | Editable data tables. Quick action cells. |

### Best Practices

* Select can be used in forms and is meant to pick a value from a list of values, whereas Menus can be used for things like commands.
* Order the menu options logically to make it easier for users to find the option they want. Default to alphabetical order.
* Use a Select input for longer lists of options. A Select should never have only 2 options; 3 selections can be acceptable, but consider a Checkbox group or Radio button group instead so users can see all options at once.
* Keep the select menu the same width as the select field that triggered it.

## Interaction

In single-select mode, only one selection can be made. In multi-select mode, one or more selections can be made from the list.

## Content & Accessibility

### Do's

* Use short, precise labels whenever possible.
* Avoid truncated items.
* In short lists, order from most common to least common choices.
* In longer lists use alphabetical order, but if there are 2 or 3 very common selections, consider repeating them at the top of the list.
* Use sentence case.
* Place the most common choices at the top of the list to assist visually impaired users.

### Don'ts

* Use periods at the end of labels.
* Place placeholder text within the field; it can cause accessibility issues with color contrast, inconsistent screen-reader behavior, and text disappearing as users type.

## Resources

* https://headlessui.com/react/menu`,displayName:`Select`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Optional className for additional styling.`,name:`className`,required:!1,tags:{},type:{name:`any`}},value:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | { [k: string]: unknown; }`}},defaultValue:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`defaultValue`,required:!1,tags:{},type:{name:`string | { [k: string]: unknown; }`}},onChange:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((value: string | { [k: string]: unknown; }) => void)`}},by:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`by`,required:!1,tags:{},type:{name:`ByComparator<{ [k: string]: unknown; }>`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},invalid:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`invalid`,required:!1,tags:{},type:{name:`boolean`}},horizontal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`horizontal`,required:!1,tags:{},type:{name:`boolean`}},form:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`form`,required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Name of the form element, which triggers the generation of hidden key/value form fields (e.g. \`name=$name[$key]\`).

See: https://headlessui.com/react/listbox#using-with-html-forms`,name:`name`,required:!1,tags:{},type:{name:`string`}},multiple:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`multiple`,required:!1,tags:{},type:{name:`boolean`}},__demoMode:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`__demoMode`,required:!1,tags:{},type:{name:`boolean`}},optionsClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Optional className for additional options menu styling.

When not using the compact variant, if optionsClassName is provided please
include the width property to define the options menu width.`,name:`optionsClassName`,required:!1,tags:{},type:{name:`string`}},required:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Indicates that field is required for form to be successfully submitted`,name:`required`,required:!1,tags:{},type:{name:`boolean`}},fieldNote:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Text under the textarea used to provide validation hints or error message to describe the input error.`,name:`fieldNote`,required:!1,tags:{},type:{name:`ReactNode`}},label:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Visible text label for the component.`,name:`label`,required:!1,tags:{},type:{name:`string`}},labelLayout:{defaultValue:{value:`vertical`},declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Whether the label is adjacent to the field (horizontal) or above the field (vertical)

**Default is \`"vertical"\`**.`,name:`labelLayout`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},showHint:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Whether it should show the field hint or not

**Default is \`"false"\`**.`,name:`showHint`,required:!1,tags:{},type:{name:`boolean`}},status:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Status for the field state

**Default is \`"default"\`**.`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "critical" | "warning"`,value:[{value:`"default"`},{value:`"critical"`},{value:`"warning"`}]}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Add additional descriptive text for the field name`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{h.Button.displayName=`Select.Button`,h.Button.__docgenInfo={description:"The trigger for the select component, which is usually a form of `Button` or some targetable/clickable component",displayName:`Select.Button`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},autoFocus:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`autoFocus`,required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLButtonElement>`}},isOpen:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Indicates state of the select, used to style the button.`,name:`isOpen`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{h.Label.displayName=`Select.Label`,h.Label.__docgenInfo={description:``,displayName:`Select.Label`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},passive:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/label/label.d.ts`,name:`TypeLiteral`}],description:``,name:`passive`,required:!1,tags:{},type:{name:`boolean`}},htmlFor:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/label/label.d.ts`,name:`TypeLiteral`}],description:``,name:`htmlFor`,required:!1,tags:{},type:{name:`string`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLLabelElement>`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean`}},showHint:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`showHint`,required:!1,tags:{},type:{name:`boolean`}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Add additional descriptive text for the field name`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{h.Option.displayName=`Select.Option`,h.Option.__docgenInfo={description:`Represents one of the available options for selection`,displayName:`Select.Option`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},value:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`unknown`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLElement>`}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PopoverListItem/PopoverListItem.tsx`,name:`TypeLiteral`}],description:`Text below the main menu item call-to-action, briefly describing the menu item's function`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}},optionClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`optionClassName`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{h.Options.displayName=`Select.Options`,h.Options.__docgenInfo={description:`The content container showing the available options when the trigger is activated`,displayName:`Select.Options`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},anchor:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`anchor`,required:!1,tags:{},type:{name:`AnchorPropsWithSelection`}},portal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`portal`,required:!1,tags:{},type:{name:`boolean`}},modal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`modal`,required:!1,tags:{},type:{name:`boolean`}},transition:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`transition`,required:!1,tags:{},type:{name:`boolean`}},static:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`static`,required:!1,tags:{},type:{name:`boolean`}},unmount:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`unmount`,required:!1,tags:{},type:{name:`boolean`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLElement>`}}},tags:{}}}catch{}})),b,Ie,x,S,Le,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Re;t((()=>{r(),Fe(),xe(),u(),b=n(),{expect:Ie,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,Le={title:`Components/Select`,component:h,parameters:{docs:{subtitle:`A popover that reveals or hides a list of options. Depending on the component's configuration, the user may select one or more options.`},layout:`centered`,chromatic:{delay:500,prefersReducedMotion:`reduce`}},argTypes:{multiple:{description:`Whether multiple values are allowed in this instance`},value:{table:{description:`The value of the select field (when controlled)`}},defaultValue:{description:`The default value of the select field (when uncontrolled)`},__demoMode:{table:{disable:!0}},onClick:{description:"Optional click handler. Fires after `onChange`, when a value in the dropdown popover is picked",table:{type:{summary:`SyntheticEvent`,detail:`See: https://react.dev/reference/react-dom/components/common#react-event-object`},default:`void`}},children:{control:!1},onChange:{description:`Optional change handler. Fires when a value is selected (and passes in list of selected values)`}},tags:[`autodocs`,`version:4.0.0`]},C=[{key:`1`,label:`Dogs`,subLabel:`Who's a good boy?`},{key:`2`,label:`Cats`,subLabel:`Super independent.`},{key:`3`,label:`Birds`,subLabel:`Living relics!`},{key:`4`,label:`Rabbits`,subLabel:`Langomorphs are rad.`}],w=async e=>{let{canvasElement:t}=e,n=await S(t).findByRole(`button`);await x.click(n)},T=async e=>{let{canvasElement:t}=e,n=await S(t).findByRole(`button`);await w(e);let r=await S(document.body).findByText(`Cats`);await x.click(r),await x.click(n)},E={args:{label:`Favorite Animal`,"data-testid":`dropdown`,defaultValue:C[0],name:`select`,className:`w-60`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{children:({value:e,open:t})=>(0,b.jsx)(h.ButtonWrapper,{isOpen:t,children:e.label})}),(0,b.jsx)(h.Options,{children:C.map(e=>(0,b.jsx)(h.Option,{value:e,children:e.label},e.key))})]})}},D={args:{...E.args,className:`w-60`,labelLayout:`horizontal`,label:`Animal?`},parameters:{...E.parameters}},O={args:{label:`Favorite Animal`,"data-testid":`dropdown`,defaultValue:C[0],name:`standard-button`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{children:`- Select Option -`}),(0,b.jsx)(h.Options,{children:C.map(e=>(0,b.jsx)(h.Option,{value:e,children:e.label},e.key))})]})}},k={args:{...E.args,onChange:e=>console.log(`changed to`,e),children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{children:({value:e,open:t})=>(0,b.jsx)(h.ButtonWrapper,{isOpen:t,onClick:e=>console.log(`custom click`),children:e.label})}),(0,b.jsx)(h.Options,{children:C.map(e=>(0,b.jsx)(h.Option,{value:e,children:e.label},e.key))})]})}},A={args:{...E.args,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{onClick:e=>console.log(`external click`),children:`- Select Option -`}),(0,b.jsx)(h.Options,{children:C.map(e=>(0,b.jsx)(h.Option,{value:e,children:e.label},e.key))})]}),onChange:e=>console.log(`external change`,e)}},j={args:{...E.args,"aria-label":`Favorite Animal`,defaultValue:C[1]}},M={args:{...j.args,defaultValue:{...C[1]},by:`key`}},N={args:{...E.args,subLabel:`Additional descriptive text`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{children:({value:e,open:t,disabled:n})=>(0,b.jsx)(h.ButtonWrapper,{isOpen:t,children:e.label})}),(0,b.jsx)(h.Options,{children:C.map(e=>(0,b.jsx)(h.Option,{value:e,children:e.label},e.key))})]})},parameters:{docs:{source:{code:`
<Select onChange={...}>
  <Select.Button>
    {({ value, open, disabled }) => (
      <Select.ButtonWrapper isOpen={open}>
        {value.label}
      </Select.ButtonWrapper>
    )}
  </Select.Button>
  <Select.Options>
  {exampleOptions.map((option) => (
    <Select.Option key={option.key} value={option}>
      {option.label}
    </Select.Option>
  ))}
  </Select.Options>
</Select>`}}}},P={args:{...E.args,fieldNote:`Choose your beast`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{children:({value:e,open:t,disabled:n})=>(0,b.jsx)(h.ButtonWrapper,{isOpen:t,children:e.label})}),(0,b.jsx)(h.Options,{children:C.map(e=>(0,b.jsx)(h.Option,{value:e,children:e.label},e.key))})]})},parameters:{...E.parameters}},F={args:{...E.args,fieldNote:`Choose your beast`,optionsClassName:`w-[384px]`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{children:({value:e,open:t,disabled:n})=>(0,b.jsx)(h.ButtonWrapper,{isOpen:t,children:e.label})}),(0,b.jsx)(h.Options,{anchor:{to:`bottom end`,gap:12},children:C.map(e=>(0,b.jsx)(h.Option,{subLabel:e.subLabel,value:e,children:e.label},e.key))})]})},parameters:{...E.parameters,snapshot:{skip:!0}},play:w},I={args:{"aria-label":`some label`,"data-testid":`dropdown`,defaultValue:C[0],name:`select`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{children:({value:e,open:t,disabled:n})=>(0,b.jsx)(`button`,{className:`fpo`,children:{Birds:`🐦🦆🦜`,Dogs:`🐶🐕🐩`,Cats:`🐈🐱🐈‍⬛`,Rabbits:`🐇🐰`}[e.label]})}),(0,b.jsx)(h.Options,{children:C.map(e=>(0,b.jsx)(h.Option,{value:e,children:e.label},e.key))})]})}},L={args:{"aria-label":`some label`,"data-testid":`dropdown`,defaultValue:C[0],name:`select`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{children:({value:e,open:t,disabled:n})=>(0,b.jsx)(h.ButtonWrapper,{isOpen:t,children:e.label})}),(0,b.jsx)(h.Options,{children:C.map(e=>(0,b.jsx)(h.Option,{value:e,children:e.label},e.key))})]})}},R={args:{...E.args,label:`Favorite Animal(s)`,multiple:!0,"data-testid":`select-field`,defaultValue:[C[0]],className:`w-[240px]`,name:`standard-button`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{children:({value:e,open:t,disabled:n})=>(0,b.jsxs)(h.ButtonWrapper,{isOpen:t,children:[e.length>0?e.length:`none`,` selected`,` `]})}),(0,b.jsx)(h.Options,{children:C.map(e=>(0,b.jsx)(h.Option,{value:e,children:e.label},e.key))})]})},parameters:{snapshot:{skip:!0}},play:w},z={args:{...E.args,label:`Favorite Animal(s)`,multiple:!0,"data-testid":`dropdown`,defaultValue:[C[0]],className:`w-[240px]`,name:`standard-button`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{children:({value:e,open:t,disabled:n})=>(0,b.jsxs)(h.ButtonWrapper,{isOpen:t,shouldTruncate:!0,children:[e.length>0?e.length:`none`,` long selected description`]})}),(0,b.jsx)(h.Options,{children:C.map(e=>(0,b.jsx)(h.Option,{value:e,children:e.label},e.key))})]})}},B={args:{...E.args,className:`w-[240px]`}},V={args:{...E.args,defaultValue:`test3`,className:`w-[240px]`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{children:({value:e,open:t,disabled:n})=>(0,b.jsx)(h.ButtonWrapper,{isOpen:t,shouldTruncate:!0,children:e})}),(0,b.jsx)(h.Options,{children:Array(30).fill(`test`).map((e,t)=>(0,b.jsxs)(h.Option,{value:e+t,children:[e,t]},`${e}-${t}`))})]})},play:async e=>{let t=await S(e.canvasElement).findByRole(`button`);await w(e),await x.keyboard(`{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}`),await Ie(t.getAttribute(`aria-expanded`)).toEqual(`true`)},parameters:{layout:`centered`,chromatic:{delay:450},snapshot:{skip:!0}},decorators:[e=>(0,b.jsx)(`div`,{className:`p-spacing-size-4 pb-spacing-size-8`,children:e()})]},H={args:{...E.args,className:`w-[160px]`,optionsClassName:`w-[384px]`},play:T,parameters:{chromatic:{diffIncludeAntiAliasing:!1,diffThreshold:.75},docs:{...E.parameters?.docs},snapshot:{skip:!0}},decorators:[e=>(0,b.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})]},U={args:{...E.args,subLabel:`Some descriptive text`,disabled:!0},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}},docs:{...E.parameters?.docs},snapshot:{skip:!0}}},W={args:{...E.args,required:!0,showHint:!0,className:`w-[384px]`,subLabel:`Some descriptive text`},parameters:{...E.parameters}},G={args:{...E.args,required:!1,showHint:!0,subLabel:`Some descriptive text`,className:`w-[384px]`},parameters:{...E.parameters}},K={args:{...W.args,status:`critical`,fieldNote:`Some text describing error`},parameters:{...W.parameters}},q={args:{...G.args,status:`warning`,fieldNote:`Some text describing warning`},parameters:{...G.parameters}},J={args:{...E.args,label:void 0,"aria-label":`hidden label`},parameters:{...E.parameters}},Y={args:{...E.args,label:void 0,"aria-label":`hidden label`,required:!0,className:`w-[384px]`},parameters:{...E.parameters}},X={args:{...E.args,disabled:!0,required:!0,showHint:!0,className:`w-[384px]`},parameters:{docs:{...E.parameters?.docs},snapshot:{skip:!0}}},Z={args:{...E.args,optionsClassName:`w-[384px]`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Button,{children:({value:e,open:t,disabled:n})=>(0,b.jsx)(h.ButtonWrapper,{isOpen:t,children:e.label})}),(0,b.jsx)(h.Options,{anchor:{to:`bottom end`,gap:12},children:C.map(e=>(0,b.jsx)(h.Option,{value:e,children:e.label},e.key))})]})},play:T,decorators:[e=>(0,b.jsx)(`div`,{className:`p-spacing-size-4 pb-spacing-size-8`,children:e()})],parameters:{snapshot:{skip:!0}}},Q={...E,parameters:{layout:`centered`,chromatic:{delay:300,disableSnapshot:!0},docs:{...E.parameters?.docs},snapshot:{skip:!0}},play:T},$={...E,decorators:[e=>(0,b.jsx)(l,{icons:Se,children:e()})]},Re=`Default.HorizontalLabel.WithStandardButton.EventHandlingOnRenderProp.EventHandlingOnStandardButton.WithSelectedOption.WithSelectedBy.WithFieldName.WithFieldNote.WithSubLabels.UncontrolledHeadless.StyledUncontrolled.Multiple.MultipleWithTruncation.AdjustedWidth.LongOptionList.SeparateButtonAndMenuWidth.Disabled.Required.Optional.Error.Warning.NoVisibleLabel.NoVisibleLabelButRequired.DisabledRequired.OptionsRightAligned.OpenByDefault.WithProvidedIcons`.split(`.`),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Animal',
    'data-testid': 'dropdown',
    defaultValue: exampleOptions[0],
    name: 'select',
    className: 'w-60',
    children: <>
        <Select.Button>
          {({
          value,
          open
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  }
}`,...E.parameters?.docs?.source},description:{story:`The simplest and default case, using the options, button, and button wrapper in the render prop.
This shows how to reflect the value in the button upon selection, and how to generate
a set of options from a list.

**NOTE**: for select value data types, \`{label: string}\` is required, but any other key/value pairs are allowed.

For detailed code examples, refer to the [stories code in GitHub](https://github.com/chanzuckerberg/edu-design-system/blob/main/src/components/Select/Select.stories.tsx).`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'w-60',
    labelLayout: 'horizontal',
    label: 'Animal?'
  },
  parameters: {
    ...Default.parameters
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Animal',
    'data-testid': 'dropdown',
    defaultValue: exampleOptions[0],
    name: 'standard-button',
    children: <>
        <Select.Button>- Select Option -</Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  }
}`,...O.parameters?.docs?.source},description:{story:"Instead of a render prop for `Select.Button`, you can forego the render prop for the button and use static text instead.\nThis mode is also useful if you want to use a controlled component and manage state yourself.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onChange: (args: SelectOption) => console.log('changed to', args),
    children: <>
        <Select.Button>
          {({
          value,
          open
        }) => <Select.ButtonWrapper isOpen={open} onClick={args => console.log('custom click')}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  }
}`,...k.parameters?.docs?.source},description:{story:"`Select` allows for event handlers to be added to the component.\n\n* `onChange` fires when a value is selected (with value of type `SelectOption`)\n\nYou can also add an `onClick` handler to `.ButtonWrapper` if using a render prop\n\n* `onClick` fires when the trigger (`.ButtonWrapper`) is clicked",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <>
        <Select.Button onClick={(ev: MouseEvent) => console.log('external click')}>
          - Select Option -
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>,
    onChange: (args: SelectOption) => console.log('external change', args)
  }
}`,...A.parameters?.docs?.source},description:{story:"`Select` allows for event handlers to be added to the component.\n\n* `onChange` fires when a value is selected (with value of type `SelectOption`)\n\nIf not using a render prop, you can also add an `onClick` handler to `Select.Button` directly\n\n* `onClick` fires when the trigger (`.ButtonWrapper`) is clicked\n\n**NOTE**: `onClick` has no function when using a render prop",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    'aria-label': 'Favorite Animal',
    defaultValue: exampleOptions[1]
  }
}`,...j.parameters?.docs?.source},description:{story:`You can select a different option to show when rendered.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithSelectedOption.args,
    defaultValue: {
      ...exampleOptions[1]
    },
    by: 'key'
  }
}`,...M.parameters?.docs?.source},description:{story:"Use the `by` option to determine the selection (when using objects for the value list). This helps when you want to compare by value, not reference.\n- The type comparison can be by a named key in the object `by={'id'}` or using a comparison function\n\nSee: https://headlessui.com/v1/react/listbox#listbox",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    subLabel: 'Additional descriptive text',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Select onChange={...}>
  <Select.Button>
    {({ value, open, disabled }) => (
      <Select.ButtonWrapper isOpen={open}>
        {value.label}
      </Select.ButtonWrapper>
    )}
  </Select.Button>
  <Select.Options>
  {exampleOptions.map((option) => (
    <Select.Option key={option.key} value={option}>
      {option.label}
    </Select.Option>
  ))}
  </Select.Options>
</Select>\`
      }
    }
  }
}`,...N.parameters?.docs?.source},description:{story:'You can add a `name` prop to generate form fields for the value object.\n\nIn this example, the field name is `"interactive-select"`, and the value is an object storing `{label: string, key: string}`.\n\nThis will generate hidden fields with names:\n* `interactive-select[label]`\n* `interactive-select[key]`',...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fieldNote: 'Choose your beast',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  },
  parameters: {
    ...Default.parameters
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fieldNote: 'Choose your beast',
    optionsClassName: 'w-[384px]',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options anchor={{
        to: 'bottom end',
        gap: 12
      }}>
          {exampleOptions.map(option => <Select.Option key={option.key} subLabel={option.subLabel} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  },
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true
    }
  },
  play: openMenu
}`,...F.parameters?.docs?.source},description:{story:`This demonstrates how select items can also have an optional subLabel attached to give more details about the option.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'some label',
    'data-testid': 'dropdown',
    defaultValue: exampleOptions[0],
    name: 'select',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <button className="fpo">
              {{
            Birds: '🐦🦆🦜',
            Dogs: '🐶🐕🐩',
            Cats: '🐈🐱🐈‍⬛',
            Rabbits: '🐇🐰'
          }[value.label as string]}
            </button>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  }
}`,...I.parameters?.docs?.source},description:{story:`You can implement a \`Select.Button\` with a render prop. This exposes several useful values to
control the appearance of the rendered button. The render prop case is "Headless", in that it has
no styling by default.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'some label',
    'data-testid': 'dropdown',
    defaultValue: exampleOptions[0],
    name: 'select',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  }
}`,...L.parameters?.docs?.source},description:{story:"You can use `Select.ButtonWrapper` to borrow the existing style used for controlled `Select` components.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Favorite Animal(s)',
    multiple: true,
    'data-testid': 'select-field',
    defaultValue: [exampleOptions[0]],
    className: 'w-[240px]',
    name: 'standard-button',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.length > 0 ? value.length : 'none'} selected{' '}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  },
  parameters: {
    snapshot: {
      skip: true
    }
  },
  play: openMenu
}`,...R.parameters?.docs?.source},description:{story:"You can select multiple values by passing `multiple` to the parent element. When doing this,\nmake sure all props that use the value (e.g., `value` and `defaultValue`) should use an array instead\nof an object or value for the individual `Select.Option` entries.\n\nWhen handling the button text, `value` represents the data for all options selected. This allows for a flexible\nlayout to fit the needs of the design.\n\nHidden form inputs are generated for each option selected and take the following form:\n- `name[arrayIndex][key]`\n- `name[arrayIndex][value]`\n\nYou can add arbitrary content to `.ButtonWrapper`, to render selection for each option. `value` is an array and represents all selected values.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Favorite Animal(s)',
    multiple: true,
    'data-testid': 'dropdown',
    defaultValue: [exampleOptions[0]],
    className: 'w-[240px]',
    name: 'standard-button',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open} shouldTruncate>
              {value.length > 0 ? value.length : 'none'} long selected
              description
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  }
}`,...z.parameters?.docs?.source},description:{story:"The component provides some basic styles to handle long text in the provided field. Use\n`shouldTruncate` on `.ButtonWrapper` to truncate the text with an ellipsis.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'w-[240px]'
  }
}`,...B.parameters?.docs?.source},description:{story:`The field trigger width can be set with utility classes. By default, dropdown popover will exppand to match the width.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultValue: 'test3',
    className: 'w-[240px]',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open} shouldTruncate>
              {value}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {Array(30).fill('test').map((option, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <Select.Option key={\`\${option}-\${index}\`} value={option + index}>
                {option}
                {index}
              </Select.Option>)}
        </Select.Options>
      </>
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    const selectButton = await canvas.findByRole('button');
    await openMenu(playOptions);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}');
    await expect(selectButton.getAttribute('aria-expanded')).toEqual('true');
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
}`,...V.parameters?.docs?.source},description:{story:`We lock the maximum height of the option list to 1/4 of the available screen height. Scrolling is allowed in the list, and
keyboard navigation (showing the items off the edge of the screen) is handled when used.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'w-[160px]',
    optionsClassName: 'w-[384px]'
  },
  play: selectCat,
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
}`,...H.parameters?.docs?.source},description:{story:`If you want a different width for the trigger and the dropdown popover, you can control them separately.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Each Select can be marked as disabled. This will update the visual treatment to indicate the field cannot be changed (but by default
will show the selected value).`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    required: true,
    showHint: true,
    className: 'w-[384px]',
    subLabel: 'Some descriptive text'
  },
  parameters: {
    ...Default.parameters
  }
}`,...W.parameters?.docs?.source},description:{story:"Select fields can be marked as required by using the `required` prop.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    required: false,
    showHint: true,
    subLabel: 'Some descriptive text',
    className: 'w-[384px]'
  },
  parameters: {
    ...Default.parameters
  }
}`,...G.parameters?.docs?.source},description:{story:"Fields can be marked as optional by using `required` as false, but `showHint` as true.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Required.args,
    status: 'critical',
    fieldNote: 'Some text describing error'
  },
  parameters: {
    ...Required.parameters
  }
}`,...K.parameters?.docs?.source},description:{story:`You can supply a warning field note by specifing the status of "error".`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Optional.args,
    status: 'warning',
    fieldNote: 'Some text describing warning'
  },
  parameters: {
    ...Optional.parameters
  }
}`,...q.parameters?.docs?.source},description:{story:`You can supply a warning field note by specifing the status of "warning".`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label'
  },
  parameters: {
    ...Default.parameters
  }
}`,...J.parameters?.docs?.source},description:{story:"Having a visible label is not necessary. In those cases, use `aria-label` to set a accessible label for the field",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label',
    required: true,
    className: 'w-[384px]'
  },
  parameters: {
    ...Default.parameters
  }
}`,...Y.parameters?.docs?.source},description:{story:"No visible label is required. In such cases, you must use an equivalent label for accessibility, like `aria-label`.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"`Select` can be both disabled and required.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    optionsClassName: 'w-[384px]',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options anchor={{
        to: 'bottom end',
        gap: 12
      }}>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  },
  play: selectCat,
  decorators: [Story => <div className="p-spacing-size-4 pb-spacing-size-8">{Story()}</div>],
  parameters: {
    snapshot: {
      skip: true
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Options for each \`Select\` can be aligned on different sides of the target button.

More information: https://headlessui.com/react/popover`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:"This shows the contents of `Select` upon render. Mostly to demonstrate it is possible, to capture a snapshot of the appearance.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...Default,
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...$.parameters?.docs?.source},description:{story:"The indicator marks the button as the thing that opens the options, which is the same\n`expand` role a `Menu.Button` or an `Accordion` row carries, so it comes from\n`IconProvider`. The CSS still flips it when the listbox opens.",...$.parameters?.docs?.description}}}}))();export{B as AdjustedWidth,E as Default,U as Disabled,X as DisabledRequired,K as Error,k as EventHandlingOnRenderProp,A as EventHandlingOnStandardButton,D as HorizontalLabel,V as LongOptionList,R as Multiple,z as MultipleWithTruncation,J as NoVisibleLabel,Y as NoVisibleLabelButRequired,Q as OpenByDefault,G as Optional,Z as OptionsRightAligned,W as Required,H as SeparateButtonAndMenuWidth,L as StyledUncontrolled,I as UncontrolledHeadless,q as Warning,N as WithFieldName,P as WithFieldNote,$ as WithProvidedIcons,M as WithSelectedBy,j as WithSelectedOption,O as WithStandardButton,F as WithSubLabels,Re as __namedExportsOrder,Le as default};