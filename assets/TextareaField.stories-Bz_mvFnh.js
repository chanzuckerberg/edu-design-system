import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./clsx-CTwy9ux-.js";import{n as o,r as s}from"./Text-DJbcQrwW.js";import{n as c,t as l}from"./FieldLabel-DKMDZyjd.js";import{n as u,t as d}from"./FieldNote-DZYRcpLM.js";import{n as f,t as p}from"./Counter-D7Kkr9ZR.js";import{t as m}from"./getMinValue-DDY9-qCl.js";var h,g,_,v;function y(){return(y=t((()=>{h=`_textarea_exmlq_10`,g=`_error_exmlq_1`,_=`_warning_exmlq_1`,v={textarea:h,error:g,warning:_,"textarea-field__overline":`_textarea-field__overline_exmlq_22`,"textarea-field__overline--no-label":`_textarea-field__overline--no-label_exmlq_30`,"textarea-field__hint":`_textarea-field__hint_exmlq_34`,"textarea-field__hint--disabled":`_textarea-field__hint--disabled_exmlq_38`,"textarea-field__footer":`_textarea-field__footer_exmlq_42`,"textarea-field__field-note":`_textarea-field__field-note_exmlq_47`,"textarea-field__character-counter":`_textarea-field__character-counter_exmlq_54`,"textarea-field__subLabel":`_textarea-field__subLabel_exmlq_59`,"textarea-field__label--disabled":`_textarea-field__label--disabled_exmlq_64`}})))()}var b,x,S,C;function w(){return(w=t((()=>{i(),b=e(n()),f(),c(),u(),s(),y(),x=r(),S=(0,b.forwardRef)(({className:e,disabled:t,status:n=`default`,...r},i)=>{let o=a(v.textarea,n===`critical`&&v.error,n===`warning`&&v.warning,e);return(0,x.jsx)(`textarea`,{className:o,disabled:t,ref:i,...r})}),C=(0,b.forwardRef)(({"aria-describedby":e,children:t,className:n,defaultValue:r,disabled:i,fieldNote:s,id:c,label:u,maxLength:f,onChange:h,readOnly:g,recommendedMaxLength:_,required:y,showHint:C,status:w=`default`,subLabel:T,value:E,...D},O)=>{let[k,A]=(0,b.useState)(r),j=!!(u||y),M=k?.toString().length??0,N=w===`critical`||f!==void 0&&M>f||_!==void 0&&M>_,P=a(v[`textarea-field__overline`],!u&&v[`textarea-field__overline--no-label`]),F=a(i&&v[`textarea-field__label--disabled`]),I=a(v[`textarea-field__subLabel`],i&&v[`textarea-field__label--disabled`]),L=a(v[`textarea-field__hint`],i&&v[`textarea-field__hint--disabled`]),R=b.useId(),z=c||R,B=b.useId(),V=b.useId(),H=e||`${T?V:``}${s?` `+B:``}`,U=m(f,_);return(0,x.jsxs)(`div`,{className:n,children:[j&&(0,x.jsxs)(`div`,{className:P,children:[u&&(0,x.jsx)(l,{className:F,htmlFor:z,size:`md`,children:u}),y&&C&&(0,x.jsx)(o,{as:`span`,className:L,preset:`body-sm`,children:`(Required)`}),!y&&C&&(0,x.jsx)(o,{as:`span`,className:L,preset:`body-sm`,children:`(Optional)`}),U&&(0,x.jsx)(p,{className:v[`textarea-field__character-counter`],count:M,total:U}),u&&T&&(0,x.jsx)(`div`,{className:I,children:(0,x.jsx)(o,{as:`span`,id:V,preset:`body-sm`,children:T})})]}),(0,x.jsx)(S,{"aria-describedby":H??void 0,"aria-disabled":i,defaultValue:r,disabled:i,id:z,maxLength:f,onChange:e=>{A(e.target.value),h&&h(e)},readOnly:g,ref:O,required:y,status:N?`critical`:w,value:E,...D,children:t}),(s||U)&&(0,x.jsx)(`div`,{className:v[`textarea-field__footer`],children:s&&(0,x.jsx)(d,{className:v[`textarea-field__field-note`],disabled:i,id:B,status:N?`critical`:w,children:s})})]})}),C.displayName=`TextareaField`,S.displayName=`TextareaField.TextArea`,C.TextArea=S,C.Label=l;try{C.displayName=`TextareaField`,C.__docgenInfo={description:`## Usage

| Type/Use | Description | Example |
|----------|-------------|---------|
| Standard | Multi-line input field for entering extended text. | Comments, descriptions, notes fields. |
| Auto-resizing | Expands vertically as the user types. | Messaging apps, forms with flexible input length. |
| Fixed-size | Has a set number of rows and does not resize. | Forms with a consistent layout, limited-screen environments. |
| Read-only | Displays pre-filled content that cannot be edited. | Code blocks, audit logs, view-only mode. |
| Disabled | Grayed out and non-editable; indicates inaccessibility. | Conditional logic states, feature restrictions. |
| Monospaced | Uses a monospaced font, often for structured text or code. | Code snippets, JSON input, command editors. |

**NOTE**: This component requires a \`label\` or \`aria-label\` prop to support accessibility.

## Interaction

When the amount of text exceeds the available space, the text scrolls to show the end of the string.

## Content & Accessibility

### Do's

* Always have a visible label when adding a hint.
* Use short, instructional labels when necessary and use sentence case.
* Use \`fieldNote\` helper text when necessary, and use examples rather than instructions whenever possible (e.g., \`yourname@emaildomain.com\`).
* For errors, provide instructions for fixing the issue and explain what is happening.
* Set \`maxLength\` on every textarea so there's a hard cap on what can be entered. Use \`recommendedMaxLength\` alongside it to show a lower, soft limit. Enforce the same limit on the server, since \`maxLength\` only constrains the browser.

### Don'ts

* Don't use colons or periods at the end of labels, and don't omit labels.
* Don't have a hint without a visible label.
* Don't force the use of helper text—there is frequently no need for it.
* Don't place placeholder text within the field, as it can cause accessibility issues.`,displayName:`TextareaField`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/TextareaField/TextareaField.tsx`,methods:[],props:{fieldNote:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`}],description:`Text under the textarea used to provide validation hints or error message to describe the input error.`,name:`fieldNote`,required:!1,tags:{},type:{name:`ReactNode`}},recommendedMaxLength:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`}],description:"Behaves similar to `maxLength` but allows the user to continue typing more text.\nShould not be larger than `maxLength`, if present.",name:`recommendedMaxLength`,required:!1,tags:{},type:{name:`number`}},showHint:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`}],description:`Whether it should show the field hint or not

**Default is \`"false"\`**.`,name:`showHint`,required:!1,tags:{},type:{name:`boolean`}},status:{defaultValue:{value:`default`},declarations:[{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`}],description:`Status for the field state

**Default is \`"default"\`**.`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "critical" | "warning"`,value:[{value:`"default"`},{value:`"critical"`},{value:`"warning"`}]}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`}],description:`Add additional descriptive text for the field name.`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}},label:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`}],description:`Visible text label for the component.`,name:`label`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=t((()=>{n(),w(),T=r(),E={title:`Components/TextareaField`,component:C,args:{className:`w-[384px]`,placeholder:`Enter long-form text here`,defaultValue:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo
dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo
praesentium, commodi eligendi asperiores quis dolorum porro.`,label:`Textarea Field`,subLabel:`Additional descriptive text for the field.`,rows:5,fieldNote:`Validation information or error details about the input.`,spellCheck:!1},parameters:{docs:{subtitle:`A text area lets a user input more text than a standard text field.`},layout:`centered`},decorators:[e=>(0,T.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})],tags:[`autodocs`,`version:2.1.4`]},D={args:{subLabel:``,fieldNote:``}},O={args:{defaultValue:void 0,fieldNote:void 0}},k={args:{defaultValue:void 0,value:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo
dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo
praesentium, commodi eligendi asperiores quis dolorum porro.`,fieldNote:void 0}},A={args:{disabled:!0,showHint:!0,rows:2},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},j={args:{readOnly:!0,rows:2},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},M={args:{status:`default`,fieldNote:`Text should be at least 100 characters`}},N={args:{status:`critical`,fieldNote:`Text should be at least 100 characters`}},P={args:{status:`warning`,fieldNote:`Text should be at least 100 characters`}},F={args:{required:!0,showHint:!0}},I={args:{required:!1,showHint:!0}},L={args:{rows:10}},R={args:{rows:10,maxLength:144,required:!0},render:e=>(0,T.jsx)(C,{...e})},z={args:{rows:10,recommendedMaxLength:144,required:!0},render:e=>(0,T.jsx)(C,{...e})},B={args:{rows:10,maxLength:256,recommendedMaxLength:144,required:!0},render:e=>(0,T.jsx)(C,{...e})},V=[`Default`,`WhenNoDefaultValue`,`WhenUsingValue`,`WhenDisabled`,`WhenReadOnly`,`WhenDefaultStatus`,`WhenError`,`WhenWarning`,`WhenRequired`,`WhenOptional`,`WithADifferentSize`,`WithAMaxLength`,`WithARecommendedLength`,`WithBothRecommendedAndMaxLengths`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    subLabel: '',
    fieldNote: ''
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: undefined,
    fieldNote: undefined
  }
}`,...O.parameters?.docs?.source},description:{story:"`TextareaField` does not require any initial content. It will display the placeholder text if specified via `placeholder`.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: undefined,
    value: \`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo
dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo
praesentium, commodi eligendi asperiores quis dolorum porro.\`,
    fieldNote: undefined
  }
}`,...k.parameters?.docs?.source},description:{story:"`TextareaField` can use `defaultValue` or `value` for the field contents.\n\nSee https://react.dev/reference/react-dom/components/textarea#providing-an-initial-value-for-a-text-area for more information.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    showHint: true,
    rows: 2
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
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    rows: 2
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
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'default',
    fieldNote: 'Text should be at least 100 characters'
  }
}`,...M.parameters?.docs?.source},description:{story:`The default status isn't really anything, but exists to allow a value to be set if needed. This applies
the neutral styles.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'critical',
    fieldNote: 'Text should be at least 100 characters'
  }
}`,...N.parameters?.docs?.source},description:{story:`When in an error state, this is the status to use. It matches other components which have a critical status.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    fieldNote: 'Text should be at least 100 characters'
  }
}`,...P.parameters?.docs?.source},description:{story:`You can also apply a warning status.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    showHint: true
  }
}`,...F.parameters?.docs?.source},description:{story:`Textarea components can be set as required.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    required: false,
    showHint: true
  }
}`,...I.parameters?.docs?.source},description:{story:`... or optional.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 10
  }
}`,...L.parameters?.docs?.source},description:{story:"You can size `TextareaField` by specifying `row` attribute, inherited from\n[textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 10,
    maxLength: 144,
    required: true
  },
  render: args => <TextareaField {...args} />
}`,...R.parameters?.docs?.source},description:{story:"You can lock the maximum length of the text content of `TextareaField`. When setting `maxLength`,\nthe field will reuse the browser's [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)\nbehavior (e.g., prevent further text from being typed, prevent keydown events, etc.).",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 10,
    recommendedMaxLength: 144,
    required: true
  },
  render: args => <TextareaField {...args} />
}`,...z.parameters?.docs?.source},description:{story:"If you want to signal that a field has reached a maximum length but want to allow more text to be typed, you can use\n`recommendedMaxLength`. This will show a similar UI to using `maxLength` but will allow more text to be typed, and\nemit any appropriate events.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 10,
    maxLength: 256,
    recommendedMaxLength: 144,
    required: true
  },
  render: args => <TextareaField {...args} />
}`,...B.parameters?.docs?.source},description:{story:"Both `maxLength` and `recommendedMaxLength` can be specified at the same time. Text length between `recommendedMaxLength`\nand `maxLength` will show the treatment warning the user about the text length being violated.",...B.parameters?.docs?.description}}}})))()}H();export{D as Default,M as WhenDefaultStatus,A as WhenDisabled,N as WhenError,O as WhenNoDefaultValue,I as WhenOptional,j as WhenReadOnly,F as WhenRequired,k as WhenUsingValue,P as WhenWarning,L as WithADifferentSize,R as WithAMaxLength,z as WithARecommendedLength,B as WithBothRecommendedAndMaxLengths,V as __namedExportsOrder,E as default};