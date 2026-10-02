import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r}from"./iframe-CxYcUItw.js";import{n as i,t as a}from"./clsx-CU3OJm-u.js";import{n as o}from"./Text-s7d_e173.js";import{t as s}from"./Text-4jUaZiwM.js";import{t as c}from"./FieldLabel-1T7cTiJm.js";import{t as l}from"./FieldLabel-BpIbOLvB.js";import{t as u}from"./FieldNote-Cinj9o5n.js";import{t as d}from"./FieldNote-C9tJIPBV.js";import{n as f,t as p}from"./getMinValue-C5565oq3.js";import{t as m}from"./Counter-JueOuRrx.js";import{t as h}from"./Counter-DZ-wDF-1.js";var g,_,v,y,b=t((()=>{g=`_textarea_1j08e_10`,_=`_error_1j08e_1`,v=`_warning_1j08e_1`,y={textarea:g,error:_,warning:v,"textarea-field__overline":`_textarea-field__overline_1j08e_22`,"textarea-field__overline--no-label":`_textarea-field__overline--no-label_1j08e_30`,"textarea-field__hint":`_textarea-field__hint_1j08e_34`,"textarea-field__footer":`_textarea-field__footer_1j08e_38`,"textarea-field__field-note":`_textarea-field__field-note_1j08e_43`,"textarea-field__character-counter":`_textarea-field__character-counter_1j08e_50`,"textarea-field__subLabel":`_textarea-field__subLabel_1j08e_55`,"textarea-field__label--disabled":`_textarea-field__label--disabled_1j08e_60`}})),x,S,C,w,T=t((()=>{i(),x=e(r()),f(),h(),l(),d(),s(),b(),S=n(),C=(0,x.forwardRef)(({className:e,disabled:t,status:n=`default`,...r},i)=>(0,S.jsx)(`textarea`,{className:a(y.textarea,n===`critical`&&y.error,n===`warning`&&y.warning,t&&y[`textarea--disabled`],e),disabled:t,ref:i,...r})),w=(0,x.forwardRef)(({"aria-describedby":e,children:t,className:n,defaultValue:r,disabled:i,fieldNote:s,id:l,label:d,maxLength:f,onChange:h,readOnly:g,recommendedMaxLength:_,required:v,showHint:b,status:w=`default`,subLabel:T,value:E,...D},O)=>{let[k,A]=(0,x.useState)(r),j=!!(d||v),M=k?.toString().length??0,N=w===`critical`||(f===void 0?!1:M>f)||(_===void 0?!1:M>_),P=a(y[`textarea-field`],n),F=a(y[`textarea-field__overline`],!d&&y[`textarea-field__overline--no-label`],i&&y[`textarea-field__overline--disabled`]),I=a(i&&y[`textarea-field__label--disabled`]),L=a(y[`textarea-field__subLabel`],i&&y[`textarea-field__label--disabled`]),R=a(y[`textarea-field__hint`],i&&y[`textarea-field__required-text--disabled`]),z=a(g&&y[`textarea-field__textarea--read-only`]),B=x.useId(),V=l||B,H=x.useId(),U=x.useId(),W=e||`${T?U:``}${s?` `+H:``}`,G=p(f,_);return(0,S.jsxs)(`div`,{className:P,children:[j&&(0,S.jsxs)(`div`,{className:F,children:[d&&(0,S.jsx)(c,{className:I,htmlFor:V,size:`md`,children:d}),v&&b&&(0,S.jsx)(o,{as:`span`,className:R,preset:`body-sm`,children:`(Required)`}),!v&&b&&(0,S.jsx)(o,{as:`span`,className:R,preset:`body-sm`,children:`(Optional)`}),G&&(0,S.jsx)(m,{className:y[`textarea-field__character-counter`],count:M,total:G}),d&&T&&(0,S.jsx)(`div`,{className:L,children:(0,S.jsx)(o,{as:`span`,id:U,preset:`body-sm`,children:T})})]}),(0,S.jsx)(C,{"aria-describedby":W??void 0,"aria-disabled":i,className:z,defaultValue:r,disabled:i,id:V,maxLength:f,onChange:e=>{A(e.target.value),h&&h(e)},readOnly:g,ref:O,required:v,status:N?`critical`:w,value:E,...D,children:t}),(s||G)&&(0,S.jsx)(`div`,{className:y[`textarea-field__footer`],children:s&&(0,S.jsx)(u,{className:y[`textarea-field__field-note`],disabled:i,id:H,status:N?`critical`:w,children:s})})]})}),w.displayName=`TextareaField`,C.displayName=`TextareaField.Textarea`,w.TextArea=C,w.Label=c;try{w.displayName=`TextareaField`,w.__docgenInfo={description:`## Usage

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

### Don'ts

* Don't use colons or periods at the end of labels, and don't omit labels.
* Don't have a hint without a visible label.
* Don't force the use of helper text—there is frequently no need for it.
* Don't place placeholder text within the field, as it can cause accessibility issues.`,displayName:`TextareaField`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/TextareaField/TextareaField.tsx`,methods:[],props:{fieldNote:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`}],description:`Text under the textarea used to provide validation hints or error message to describe the input error.`,name:`fieldNote`,required:!1,tags:{},type:{name:`ReactNode`}},recommendedMaxLength:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`}],description:"Behaves similar to `maxLength` but allows the user to continue typing more text.\nShould not be larger than `maxLength`, if present.",name:`recommendedMaxLength`,required:!1,tags:{},type:{name:`number`}},showHint:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`}],description:`Whether it should show the field hint or not

**Default is \`"false"\`**.`,name:`showHint`,required:!1,tags:{},type:{name:`boolean`}},status:{defaultValue:{value:`default`},declarations:[{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`}],description:`Status for the field state

**Default is \`"default"\`**.`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "critical" | "warning"`,value:[{value:`"default"`},{value:`"critical"`},{value:`"warning"`}]}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`}],description:`Add additional descriptive text for the field name.`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}},label:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/TextareaField/TextareaField.tsx`,name:`TypeLiteral`}],description:`Visible text label for the component.`,name:`label`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;t((()=>{r(),T(),E=n(),D={title:`Components/TextareaField`,component:w,args:{className:`w-[384px]`,placeholder:`Enter long-form text here`,defaultValue:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo
dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo
praesentium, commodi eligendi asperiores quis dolorum porro.`,label:`Textarea Field`,subLabel:`Additional descriptive text for the field.`,rows:5,fieldNote:`Validation information or error details about the input.`,spellCheck:!1},parameters:{docs:{subtitle:`A text area lets a user input more text than a standard text field.`},layout:`centered`},decorators:[e=>(0,E.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})],tags:[`autodocs`,`version:2.1.3`]},O={args:{subLabel:``,fieldNote:``}},k={args:{defaultValue:void 0,fieldNote:void 0}},A={args:{defaultValue:void 0,value:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo
dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo
praesentium, commodi eligendi asperiores quis dolorum porro.`,fieldNote:void 0}},j={args:{disabled:!0,rows:2},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},M={args:{readOnly:!0,rows:2},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},N={args:{status:`default`,fieldNote:`Text should be at least 100 characters`}},P={args:{status:`critical`,fieldNote:`Text should be at least 100 characters`}},F={args:{status:`warning`,fieldNote:`Text should be at least 100 characters`}},I={args:{required:!0,showHint:!0}},L={args:{required:!1,showHint:!0}},R={args:{rows:10}},z={args:{rows:10,maxLength:144,required:!0},render:e=>(0,E.jsx)(w,{...e})},B={args:{rows:10,recommendedMaxLength:144,required:!0},render:e=>(0,E.jsx)(w,{...e})},V={args:{rows:10,maxLength:256,recommendedMaxLength:144,required:!0},render:e=>(0,E.jsx)(w,{...e})},H=[`Default`,`WhenNoDefaultValue`,`WhenUsingValue`,`WhenDisabled`,`WhenReadOnly`,`WhenDefaultStatus`,`WhenError`,`WhenWarning`,`WhenRequired`,`WhenOptional`,`WithADifferentSize`,`WithAMaxLength`,`WithARecommendedLength`,`WithBothRecommendedAndMaxLengths`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    subLabel: '',
    fieldNote: ''
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: undefined,
    fieldNote: undefined
  }
}`,...k.parameters?.docs?.source},description:{story:"`TextareaField` does not require any initial content. It will display the placeholder text if specified via `placeholder`.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: undefined,
    value: \`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo
dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo
praesentium, commodi eligendi asperiores quis dolorum porro.\`,
    fieldNote: undefined
  }
}`,...A.parameters?.docs?.source},description:{story:"`TextareaField` can use `defaultValue` or `value` for the field contents.\n\nSee https://react.dev/reference/react-dom/components/textarea#providing-an-initial-value-for-a-text-area for more information.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'default',
    fieldNote: 'Text should be at least 100 characters'
  }
}`,...N.parameters?.docs?.source},description:{story:`The default status isn't really anything, but exists to allow a value to be set if needed. This applies
the neutral styles.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'critical',
    fieldNote: 'Text should be at least 100 characters'
  }
}`,...P.parameters?.docs?.source},description:{story:`When in an error state, this is the status to use. It matches other components which have a critical status.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    fieldNote: 'Text should be at least 100 characters'
  }
}`,...F.parameters?.docs?.source},description:{story:`You can also apply a warning status.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    showHint: true
  }
}`,...I.parameters?.docs?.source},description:{story:`Textarea components can be set as required.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    required: false,
    showHint: true
  }
}`,...L.parameters?.docs?.source},description:{story:`... or optional.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 10
  }
}`,...R.parameters?.docs?.source},description:{story:"You can size `TextareaField` by specifying `row` attribute, inherited from\n[textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 10,
    maxLength: 144,
    required: true
  },
  render: args => <TextareaField {...args} />
}`,...z.parameters?.docs?.source},description:{story:"You can lock the maximum length of the text content of `TextareaField`. When setting `maxLength`,\nthe field will reuse the browser's [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)\nbehavior (e.g., prevent further text from being typed, prevent keydown events, etc.).",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 10,
    recommendedMaxLength: 144,
    required: true
  },
  render: args => <TextareaField {...args} />
}`,...B.parameters?.docs?.source},description:{story:"If you want to signal that a field has reached a maximum length but want to allow more text to be typed, you can use\n`recommendedMaxLength`. This will show a similar UI to using `maxLength` but will allow more text to be typed, and\nemit any appropriate events.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 10,
    maxLength: 256,
    recommendedMaxLength: 144,
    required: true
  },
  render: args => <TextareaField {...args} />
}`,...V.parameters?.docs?.source},description:{story:"Both `maxLength` and `recommendedMaxLength` can be specified at the same time. Text length between `recommendedMaxLength`\nand `maxLength` will show the treatment warning the user about the text length being violated.",...V.parameters?.docs?.description}}}}))();export{O as Default,N as WhenDefaultStatus,j as WhenDisabled,P as WhenError,k as WhenNoDefaultValue,L as WhenOptional,M as WhenReadOnly,I as WhenRequired,A as WhenUsingValue,F as WhenWarning,R as WithADifferentSize,z as WithAMaxLength,B as WithARecommendedLength,V as WithBothRecommendedAndMaxLengths,H as __namedExportsOrder,D as default};