import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";import{n as a,r as o,t as s}from"./IconSlot-Chsa5gUx.js";import{n as c,r as l}from"./IconProvider-CLE0eA_m.js";import{n as u,r as d}from"./Text-DJbcQrwW.js";var f;function p(){return(p=e((()=>{f={"input-chip":`_input-chip_ur9gh_9`,"input-chip__label":`_input-chip__label_ur9gh_13`,"input-chip__action-button":`_input-chip__action-button_ur9gh_32`,"input-chip--disabled":`_input-chip--disabled_ur9gh_47`}})))()}var m,h;function g(){return(g=e((()=>{r(),t(),o(),c(),d(),p(),m=n(),h=({className:e,isDisabled:t,label:n,leadingComponent:r,onClick:o,size:c=`md`,...d})=>{let p=i(f[`input-chip`],t&&f[`input-chip--disabled`],e),h=l(`close`);return(0,m.jsxs)(`div`,{className:p,...d,children:[(0,m.jsxs)(`div`,{className:f[`input-chip__label`],children:[a(r)&&(0,m.jsx)(s,{content:r,purpose:`decorative`}),(0,m.jsx)(u,{as:`span`,preset:`body-xs`,children:n})]}),(0,m.jsx)(`button`,{"aria-label":`remove ${n}`,className:f[`input-chip__action-button`],disabled:t,onClick:o,children:a(h)&&(0,m.jsx)(s,{content:h,purpose:`decorative`})})]})},h.displayName=`InputChip`;try{h.displayName=`InputChip`,h.__docgenInfo={description:`## Usage

| Type/Use | Description | Example |
|----------|-------------|---------|
| Input | A chip that represents user-generated input and can be edited or removed. | Displaying selected tags, keywords, or values in a form or input field, or combining multiple pieces of data such as a name and avatar. |

### Best Practices

* **Displaying multi-selection from a large list**: show selections already made without reopening a long select dropdown. Input chips are most helpful when the list of options exceeds 15 items.
* **Representing search filters or criteria**: show active filters or search parameters to make complex filtering feel organized and easily editable.
* **Handling user-generated or free-form data**: transform user-entered text (e.g., email addresses) into a discrete component that confirms the UI recognizes the input.

## Interaction

Unless used as a toggle, chips should always be presented as a group. Depending on the use, groups can either wrap to multiple lines or scroll horizontally.

## Content & Accessibility

### Do's

* Keep labels to 1-2 words.
* Represent one piece of information per chip (a discrete thing, grouping, or category).`,displayName:`InputChip`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/InputChip/InputChip.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/InputChip/InputChip.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},isDisabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/InputChip/InputChip.tsx`,name:`TypeLiteral`}],description:`Whether the chip is in a non-interactive, disabled state`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/InputChip/InputChip.tsx`,name:`TypeLiteral`}],description:`Text used in the chip to give it a description`,name:`label`,required:!0,tags:{},type:{name:`string`}},leadingComponent:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/InputChip/InputChip.tsx`,name:`TypeLiteral`}],description:`Leading slot for the chip. Takes an EDS icon name, or any content to render in its
place at the chip's own type size.`,name:`leadingComponent`,required:!1,tags:{},type:{name:`IconOrContent`}},onClick:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/InputChip/InputChip.tsx`,name:`TypeLiteral`}],description:`click handler for the action button on the chip (ex: to dismiss or remove the chip from the screen)`,name:`onClick`,required:!1,tags:{},type:{name:`MouseEventHandler`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`edu-design-system/src/components/InputChip/InputChip.tsx`,name:`TypeLiteral`}],description:`The display size of the chip`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "md"`,value:[{value:`"sm"`},{value:`"md"`}]}}},tags:{}}}catch{}})))()}export{g as n,h as t};