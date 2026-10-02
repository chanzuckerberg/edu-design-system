import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./clsx-CU3OJm-u.js";import{a,i as o,o as s,t as c}from"./Icon-DJYKhM6X.js";import{n as l}from"./Text-s7d_e173.js";import{t as u}from"./Text-4jUaZiwM.js";var d,f=e((()=>{d={"input-chip":`_input-chip_ur9gh_9`,"input-chip__label":`_input-chip__label_ur9gh_13`,"input-chip__action-button":`_input-chip__action-button_ur9gh_32`,"input-chip--disabled":`_input-chip--disabled_ur9gh_47`}})),p,m,h=e((()=>{r(),n(),c(),u(),f(),p=t(),m=({className:e,isDisabled:t,label:n,leadingComponent:r,onClick:c,size:u=`md`,...f})=>{let m=i(d[`input-chip`],t&&d[`input-chip--disabled`],e),h=o(`close`);return(0,p.jsxs)(`div`,{className:m,...f,children:[(0,p.jsxs)(`div`,{className:d[`input-chip__label`],children:[s(r)&&(0,p.jsx)(a,{className:d[`input-chip__leading-component`],content:r,purpose:`decorative`}),(0,p.jsx)(l,{as:`span`,preset:`body-xs`,children:n})]}),(0,p.jsx)(`button`,{"aria-label":`remove ${n}`,className:d[`input-chip__action-button`],disabled:t,onClick:c,children:s(h)&&(0,p.jsx)(a,{content:h,purpose:`decorative`})})]})};try{m.displayName=`InputChip`,m.__docgenInfo={description:`## Usage

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
place at the chip's own type size.`,name:`leadingComponent`,required:!1,tags:{},type:{name:`IconOrContent`}},onClick:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/InputChip/InputChip.tsx`,name:`TypeLiteral`}],description:`click handler for the action button on the chip (ex: to dismiss or remove the chip from the screen)`,name:`onClick`,required:!1,tags:{},type:{name:`MouseEventHandler`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`edu-design-system/src/components/InputChip/InputChip.tsx`,name:`TypeLiteral`}],description:`The display size of the chip`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "md"`,value:[{value:`"sm"`},{value:`"md"`}]}}},tags:{}}}catch{}}));export{h as n,m as t};