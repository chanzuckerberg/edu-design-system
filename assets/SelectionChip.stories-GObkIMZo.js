import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r}from"./iframe-CxYcUItw.js";import{n as i,t as a}from"./clsx-CU3OJm-u.js";import{a as o,o as s,t as c}from"./Icon-DJYKhM6X.js";import{n as l}from"./Text-s7d_e173.js";import{t as u}from"./Text-4jUaZiwM.js";import{n as d,t as f}from"./FpoBlock-D0PLXBg0.js";var p,m=t((()=>{p={"selection-chip":`_selection-chip_tmfcj_8`,"selection-chip__label":`_selection-chip__label_tmfcj_23`,"selection-chip__body":`_selection-chip__body_tmfcj_29`,"selection-chip__input":`_selection-chip__input_tmfcj_38`,"selection-chip--disabled":`_selection-chip--disabled_tmfcj_64`,"selection-chip--has-leading-content":`_selection-chip--has-leading-content_tmfcj_72`}})),h,g,_,v=t((()=>{i(),h=e(r()),c(),u(),m(),g=n(),_=(0,h.forwardRef)(({checked:e,className:t,defaultChecked:n,id:r,isDisabled:i,label:c,leadingContent:u,name:d,onChange:f,type:m=`checkbox`,..._},v)=>{let y=a(p[`selection-chip`],s(u)&&p[`selection-chip--has-leading-content`],i&&p[`selection-chip--disabled`],t),b=h.useId(),x=r||b;return(0,g.jsxs)(`label`,{className:y,htmlFor:x,inert:i,..._,children:[(0,g.jsx)(`input`,{checked:e,className:p[`selection-chip__input`],defaultChecked:n,disabled:i,id:x,name:d,onChange:f,ref:v,type:m}),(0,g.jsxs)(`div`,{className:p[`selection-chip__body`],children:[s(u)&&(0,g.jsx)(o,{content:u}),(0,g.jsx)(l,{as:`span`,className:p[`selection-chip__label`],preset:`label-lg`,children:c})]})]})});try{_.displayName=`SelectionChip`,_.__docgenInfo={description:`## Usage

A selection chip is an interactive chip that can be selected, deselected, or toggled. Use it to represent user controls or selections outside the context of a form, in place of a checkbox group, radio button group, or toggle. Common uses include filtering content and selecting multiple items.

### Best Practices

* **Enable quick selection**: When you want users to choose from a limited set of related, easily digestible options, such as selecting filters or tags in search and content filtering.
* **Show multi-select options**: When users need the option to select multiple items at once, especially when toggling on/off multiple states or filters.
* **Enhance readability in tight spaces**: Selection chips help maintain readability while maximizing available screen space, especially on mobile.
* **Improve visual clarity**: When you need to show clear boundaries around items. Chips with subtle visual indicators like icons or colors can also convey context.
* **Replace dropdowns or radio buttons**: When dropdowns or radio buttons are too clunky or take up too much space.

## Interaction

Unless used as a toggle, chips should always be presented as a group.

Selection chips don't have built-in error handling. To show that something went wrong with a selection, pair the chips with an \`InlineNotification\` or \`FieldNote\` component to display the error message.

## Content & Accessibility

### Do's

* Keep labels to 1-2 words.
* Represent one piece of info per chip. This could be a discrete thing, a grouping, category, etc.`,displayName:`SelectionChip`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/SelectionChip/SelectionChip.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/SelectionChip/SelectionChip.tsx`,name:`TypeLiteral`}],description:"CSS properties defined for the HTML element. Includes the component's CSS Custom Properties:\n\n- `--selection-chip__bg`\n- `--selection-chip__border`\n- `--selection-chip__fg`",name:`style`,required:!1,tags:{},type:{name:`SelectionChipCSSProperties`}},isDisabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/SelectionChip/SelectionChip.tsx`,name:`TypeLiteral`}],description:`Whether the chip is disabled or not`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/SelectionChip/SelectionChip.tsx`,name:`TypeLiteral`}],description:`Text used in the chip to give it a description`,name:`label`,required:!0,tags:{},type:{name:`string`}},leadingContent:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/SelectionChip/SelectionChip.tsx`,name:`TypeLiteral`}],description:`Content that precedes the label. Pass an EDS icon name to render a decorative
icon, or a node to render it as-is.`,name:`leadingContent`,required:!1,tags:{},type:{name:`IconOrContent`}},type:{defaultValue:{value:`checkbox`},declarations:[{fileName:`edu-design-system/src/components/SelectionChip/SelectionChip.tsx`,name:`TypeLiteral`}],description:`Chip types (correspond to the equivalent input types)`,name:`type`,required:!1,tags:{},type:{name:`enum`,raw:`"checkbox" | "radio"`,value:[{value:`"checkbox"`},{value:`"radio"`}]}}},tags:{}}}catch{}})),y,b,x,S,C,w,T,E,D,O,k;t((()=>{r(),v(),d(),y=n(),b={title:`Components/SelectionChip`,component:_,parameters:{docs:{subtitle:`Compact, interactive UI element used to make selections.`},layout:`centered`},tags:[`autodocs`,`version:2.0.0`]},x={args:{label:`Label`}},S={args:{label:`Label`,defaultChecked:!0}},C={args:{...x.args,leadingContent:`add`}},w={args:{...x.args,isDisabled:!0}},T={args:{...x.args,isDisabled:!0,defaultChecked:!0}},E={args:{...C.args,checked:!0,onChange:()=>{}}},D={args:{...C.args,defaultChecked:!0}},O={args:{...x.args,leadingContent:(0,y.jsx)(f,{size:14})}},k=[`Default`,`Selected`,`WithIcon`,`Disabled`,`DisabledSelected`,`ControlledChecked`,`UncontrolledChecked`,`WithLeadingContent`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    defaultChecked: true
  }
}`,...S.parameters?.docs?.source},description:{story:`We can indicate selected state like a checkbox.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leadingContent: 'add'
  }
}`,...C.parameters?.docs?.source},description:{story:"Icons can be used with `SelectionChip`.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDisabled: true
  }
}`,...w.parameters?.docs?.source},description:{story:`Selection chips can be marked as disabled.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDisabled: true,
    defaultChecked: true
  }
}`,...T.parameters?.docs?.source},description:{story:`Selection chips can be marked as disabled while selected.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args,
    checked: true,
    onChange: () => {}
  }
}`,...E.parameters?.docs?.source},description:{story:"when using a concrolled version of `SelectionChip`, we let React control the state. In this situation, it will not behave as a native component upon click/interaction.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args,
    defaultChecked: true
  }
}`,...D.parameters?.docs?.source},description:{story:`This will mimic the behavior of the native checkbox control, allowing clicks at will.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leadingContent: <FpoBlock size={14} />
  }
}`,...O.parameters?.docs?.source},description:{story:`The leading slot also takes arbitrary content, for cases an EDS icon does not cover.
The block below stands in for whatever you supply, so the slot itself is the subject
rather than the component that happened to be picked.`,...O.parameters?.docs?.description}}}}))();export{E as ControlledChecked,x as Default,w as Disabled,T as DisabledSelected,S as Selected,D as UncontrolledChecked,C as WithIcon,O as WithLeadingContent,k as __namedExportsOrder,b as default};