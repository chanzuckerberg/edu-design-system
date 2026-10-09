import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./clsx-CTwy9ux-.js";import{i as o,t as s}from"./logging-DIGRaM8w.js";import{n as c,r as l}from"./Text-DJbcQrwW.js";import{n as u,t as d}from"./Checkbox-D-DWxAGV.js";import{n as f,t as p}from"./FieldLabel-DKMDZyjd.js";import{n as m,t as h}from"./FieldNote-DZYRcpLM.js";import{n as g,t as _}from"./Radio-DAO4raSV.js";var v,y;function b(){return(b=t((()=>{v=`_fieldset__footer_7qp52_1`,y={fieldset__footer:v,"fieldset-items":`_fieldset-items_7qp52_11`,"fieldset-legend":`_fieldset-legend_7qp52_20`,"fieldset-legend__overline":`_fieldset-legend__overline_7qp52_24`,"fieldset-legend__hint":`_fieldset-legend__hint_7qp52_30`,"fieldset-legend--disabled":`_fieldset-legend--disabled_7qp52_34`}})))()}function x({children:e,className:t,fieldNote:n,isDisabled:r,status:i,...a}){return(0,C.jsxs)(w.Provider,{value:{isDisabled:r,status:i},children:[(0,C.jsx)(`fieldset`,{className:t,...a,children:e}),n&&(0,C.jsx)(`div`,{className:y.fieldset__footer,children:(0,C.jsx)(h,{disabled:r,status:i,children:n})})]})}var S,C,w,T,E;function D(){return(D=t((()=>{i(),S=e(n()),o(),f(),m(),l(),b(),C=r(),w=(0,S.createContext)({}),T=({children:e,as:t=`div`,className:n,...r})=>{let i=(0,S.useContext)(w),o=a(y[`fieldset-items`],n);return(0,C.jsx)(t,{className:o,...r,children:typeof e==`function`?e(i):(0,C.jsx)(C.Fragment,{children:e})})},E=({className:e,isDisabled:t,required:n,showHint:r,subTitle:i,title:o,...l})=>{let{isDisabled:u}=(0,S.useContext)(w),d=a(y[`fieldset-legend`],u&&y[`fieldset-legend--disabled`],e);return s([!o&&!!i],`When using "subTitle" you must also use "title"`),(0,C.jsxs)(`legend`,{"aria-disabled":u??void 0,className:d,...l,children:[o&&(0,C.jsxs)(`div`,{className:y[`fieldset-legend__overline`],children:[o&&(0,C.jsx)(p,{disabled:u,size:`md`,children:o}),n&&r&&(0,C.jsx)(c,{"aria-disabled":u??void 0,as:`span`,className:y[`fieldset-legend__hint`],preset:`body-sm`,children:`(Required)`}),!n&&r&&(0,C.jsx)(c,{"aria-disabled":u??void 0,as:`span`,className:y[`fieldset-legend__hint`],preset:`body-sm`,children:`(Optional)`})]}),i&&(0,C.jsx)(h,{disabled:u,children:i})]})},x.displayName=`Fieldset`,T.displayName=`Fieldset.Items`,E.displayName=`Fieldset.Legend`,x.Items=T,x.Legend=E;try{x.displayName=`Fieldset`,x.__docgenInfo={description:`## Usage

Label and contain a set of fields, to clearly indicate the fields have a close relationship.
Especially useful when showing \`Checkbox\` and \`Radio\` controls in a set. Can show its own label
and field note.

| Type/Use | Description | Example |
|----------|-------------|---------|
| Radio set | Groups mutually exclusive options under a single legend. | Picking one plan, one delivery method, one answer. |
| Checkbox set | Groups related checkboxes that answer one question. | "Select all that apply" questions. |
| With a field note | \`fieldNote\` adds a description or error below the group, and inherits the group's \`status\`. | Validation that applies to the set rather than one control. |

Compose it as a \`Fieldset.Legend\` to label the group, followed by the controls wrapped in
\`Fieldset.Items\`. \`isDisabled\` and \`status\` set on \`Fieldset\` flow down to both.

## Content & Accessibility

### Do's

* Use \`Fieldset\` when you wish to label a set of \`Radio\` fields, and want to avoid lengthy text in an adjacent element.

### Don'ts

* Avoid using \`Fieldset\` with non-control content, like blocks of text or other components. Instead, use \`Card\`.
* Don't use \`Fieldset\` with \`Checkbox\` unless the checkboxes are part of an overlapping set (e.g., "Select all that apply" in the label for the \`Fieldset\`).

## Resources

* https://www.w3.org/WAI/WCAG22/Techniques/html/H71`,displayName:`Fieldset`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Fieldset/Fieldset.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`}],description:`The contents of the fieldset. We suggest a Fieldset.Legend followed by
interactive elements within Fieldset.Items.`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:`Additional classnames passed in for styling.`,name:`className`,required:!1,tags:{},type:{name:`string`}},fieldNote:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Text under the component used to provide a description or error message to describe the state.`,name:`fieldNote`,required:!1,tags:{},type:{name:`ReactNode`}},isDisabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Indicates disabled state of the input.`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},status:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Status for the field state

**Default is \`"default"\`**.`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "critical" | "warning"`,value:[{value:`"default"`},{value:`"critical"`},{value:`"warning"`}]}}},tags:{}}}catch{}try{x.Items.displayName=`Fieldset.Items`,x.Items.__docgenInfo={description:`Helper sub-component for styling the control elements in the component.`,displayName:`Fieldset.Items`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Fieldset/Fieldset.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Type of element the immediate wrapper around the contents should be.

**Default is \`"div"\`**.`,name:`as`,required:!1,tags:{},type:{name:`string | ComponentClass<any, any> | FunctionComponent<any>`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Additional classnames passed in for styling.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{x.Legend.displayName=`Fieldset.Legend`,x.Legend.__docgenInfo={description:`Helper sub-component for styling the legend in a fieldset.`,displayName:`Fieldset.Legend`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Fieldset/Fieldset.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},required:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Indicates that field is required for form to be successfully submitted`,name:`required`,required:!1,tags:{},type:{name:`boolean`}},showHint:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Whether it should show the field hint or not

**Default is \`"false"\`**.`,name:`showHint`,required:!1,tags:{},type:{name:`boolean`}},subTitle:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Secondary text used to describe the content in more detail`,name:`subTitle`,required:!1,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`The title/heading of the component`,name:`title`,required:!1,tags:{},type:{name:`string`}},isDisabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Indicates disabled state of the input.`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},status:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Status for the field state

**Default is \`"default"\`**.`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "critical" | "warning"`,value:[{value:`"default"`},{value:`"critical"`},{value:`"warning"`}]}}},tags:{}}}catch{}})))()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=t((()=>{n(),D(),u(),g(),O=r(),k={title:`Components/Fieldset`,component:x,parameters:{docs:{subtitle:`A reusable container for a fieldset that includes a legend and one or more form inputs, like radio buttons or checkboxes.`},layout:`centered`},argTypes:{children:{control:!1}},tags:[`autodocs`,`version:3.0.1`]},A={args:{children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(x.Legend,{title:`Legend`}),(0,O.jsx)(x.Items,{className:`fpo`,children:(0,O.jsx)(`div`,{children:`Fieldset Content (Radio Buttons or Checkboxes)`})})]})}},j={args:{fieldNote:`Attached field note to field set`,status:`critical`,children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(x.Legend,{subTitle:`Some extra descriptive text`,title:`Critical Fieldset`}),(0,O.jsxs)(x.Items,{className:`fpo flex-col`,children:[(0,O.jsx)(`div`,{children:`Fieldset Content (Radio Button or Checkbox)`}),(0,O.jsx)(`div`,{children:`Fieldset Content (Radio Button or Checkbox)`}),(0,O.jsx)(`div`,{children:`Fieldset Content (Radio Button or Checkbox)`})]})]})}},M={args:{title:`Legend`},render:e=>(0,O.jsx)(x.Legend,{...e})},N={args:{title:`Legend`,showHint:!0},render:M.render},P={args:{title:`Legend`,showHint:!0,required:!0},render:M.render},F={args:{title:`Legend`,subTitle:`With additional Subtitle`},render:M.render},I={args:{title:`Legend`,subTitle:`With additional Subtitle`,showHint:!0},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},render:e=>(0,O.jsx)(x,{isDisabled:!0,children:(0,O.jsx)(x.Legend,{...e})})},L={tags:[`code-only`],args:{fieldNote:`Attached field note to field set`,children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(x.Legend,{subTitle:`Some extra descriptive text`,title:`Critical Fieldset`}),(0,O.jsx)(x.Items,{children:({isDisabled:e,status:t})=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{disabled:e,isError:t===`critical`,label:`Checkbox`,name:`test-checkbox`,subLabel:`Supplementary text`}),(0,O.jsx)(d,{disabled:e,isError:t===`critical`,label:`Checkbox`,name:`test-checkbox`})]})})]})}},R={tags:[`code-only`],parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},args:{fieldNote:`Attached field note to field set`,isDisabled:!0,children:L.args?.children}},z={tags:[`code-only`],args:{fieldNote:`Attached field note to field set`,status:`critical`,children:L.args?.children}},B={tags:[`code-only`],args:{fieldNote:`Attached field note to field set`,children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(x.Legend,{subTitle:`Some extra descriptive text`,title:`Critical Fieldset`}),(0,O.jsx)(x.Items,{children:({isDisabled:e,status:t})=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(_,{disabled:e,isError:t===`critical`,label:`Radio Button`,name:`test-radio`,subLabel:`Supplementary text`}),(0,O.jsx)(_,{disabled:e,isError:t===`critical`,label:`Radio Button`,name:`test-radio`})]})})]})}},V={parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},tags:[`code-only`],args:{fieldNote:`Attached field note to field set`,isDisabled:!0,children:B.args?.children}},H={tags:[`code-only`],args:{fieldNote:`Attached field note to field set`,status:`critical`,children:B.args?.children}},U=[`Default`,`WithCriticalFootNote`,`FieldsetLegend`,`FieldsetLegendOptional`,`FieldsetLegendRequired`,`FieldsetLegendWithSubtitle`,`FieldsetLegendDisabled`,`WithCheckboxes`,`WithDisabledCheckboxes`,`WithErrorCheckboxes`,`WithRadioButton`,`WithDisabledRadioButton`,`WithErrorRadioButton`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Fieldset.Legend title="Legend" />
        <Fieldset.Items className="fpo">
          <div>Fieldset Content (Radio Buttons or Checkboxes)</div>
        </Fieldset.Items>
      </>
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    fieldNote: 'Attached field note to field set',
    status: 'critical',
    children: <>
        <Fieldset.Legend subTitle="Some extra descriptive text" title="Critical Fieldset" />
        <Fieldset.Items className="fpo flex-col">
          <div>Fieldset Content (Radio Button or Checkbox)</div>
          <div>Fieldset Content (Radio Button or Checkbox)</div>
          <div>Fieldset Content (Radio Button or Checkbox)</div>
        </Fieldset.Items>
      </>
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Legend'
  },
  render: args => <Fieldset.Legend {...args} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Legend',
    showHint: true
  },
  render: FieldsetLegend.render
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Legend',
    showHint: true,
    required: true
  },
  render: FieldsetLegend.render
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Legend',
    subTitle: 'With additional Subtitle'
  },
  render: FieldsetLegend.render
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Legend',
    subTitle: 'With additional Subtitle',
    showHint: true
  },
  parameters: {
    a11y: {
      config: {
        rules: [
        // Disabled text does not need to meet color contrast
        {
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  },
  render: args => <Fieldset isDisabled>
      <Fieldset.Legend {...args} />
    </Fieldset>
}`,...I.parameters?.docs?.source},description:{story:"The legend reads its disabled state from the surrounding `Fieldset`.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  args: {
    fieldNote: 'Attached field note to field set',
    children: <>
        <Fieldset.Legend subTitle="Some extra descriptive text" title="Critical Fieldset" />
        <Fieldset.Items>
          {({
          isDisabled,
          status
        }) => {
          return <>
                <Checkbox disabled={isDisabled} isError={status === 'critical'} label="Checkbox" name="test-checkbox" subLabel="Supplementary text" />
                <Checkbox disabled={isDisabled} isError={status === 'critical'} label="Checkbox" name="test-checkbox" />
              </>;
        }}
        </Fieldset.Items>
      </>
  }
}`,...L.parameters?.docs?.source},description:{story:`In this implementation example, we show how to compose checkboxes into the \`Fieldset.Items\` using the render prop.
This allows for controlling the state of the contents at the top level \`Fieldset\` component.

**NOTE**: storybook won't show the contents of the render prope in the code inspector, but it looks like the following:
\`\`\`
<Fieldset.Items>
 {({ isDisabled, status }) => {
   return (
     <>
       <Checkbox
         disabled={isDisabled}
         id="1"
         isError={status === 'critical'}
         label="Checbox"
         name="test-1"
       />
       <Checkbox
         disabled={isDisabled}
         id="2"
         isError={status === 'critical'}
         label="Checbox"
         name="test-2"
       />
     </>
   );
 }}
</Fieldset.Items>
\`\`\``,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  },
  args: {
    fieldNote: 'Attached field note to field set',
    isDisabled: true,
    children: WithCheckboxes.args?.children
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  args: {
    fieldNote: 'Attached field note to field set',
    status: 'critical',
    children: WithCheckboxes.args?.children
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  args: {
    fieldNote: 'Attached field note to field set',
    children: <>
        <Fieldset.Legend subTitle="Some extra descriptive text" title="Critical Fieldset" />
        <Fieldset.Items>
          {({
          isDisabled,
          status
        }) => {
          return <>
                <Radio disabled={isDisabled} isError={status === 'critical'} label="Radio Button" name="test-radio" subLabel="Supplementary text" />
                <Radio disabled={isDisabled} isError={status === 'critical'} label="Radio Button" name="test-radio" />
              </>;
        }}
        </Fieldset.Items>
      </>
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  },
  tags: ['code-only'],
  args: {
    fieldNote: 'Attached field note to field set',
    isDisabled: true,
    children: WithRadioButton.args?.children
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  args: {
    fieldNote: 'Attached field note to field set',
    status: 'critical',
    children: WithRadioButton.args?.children
  }
}`,...H.parameters?.docs?.source}}}})))()}W();export{A as Default,M as FieldsetLegend,I as FieldsetLegendDisabled,N as FieldsetLegendOptional,P as FieldsetLegendRequired,F as FieldsetLegendWithSubtitle,L as WithCheckboxes,j as WithCriticalFootNote,R as WithDisabledCheckboxes,V as WithDisabledRadioButton,z as WithErrorCheckboxes,H as WithErrorRadioButton,B as WithRadioButton,U as __namedExportsOrder,k as default};