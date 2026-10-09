import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./clsx-CTwy9ux-.js";import{i as o,t as s}from"./logging-DIGRaM8w.js";import{n as c,r as l}from"./Text-DJbcQrwW.js";import{n as u,t as d}from"./Card-DsvxV1zQ.js";import{n as f,t as p}from"./FieldLabel-DKMDZyjd.js";import{n as m,t as h}from"./Counter-D7Kkr9ZR.js";var g;function _(){return(_=t((()=>{g={"progress-bar":`_progress-bar_1gs4f_9`,"progress-bar--labelLayout-horizontal":`_progress-bar--labelLayout-horizontal_1gs4f_14`,"progress-bar__labels":`_progress-bar__labels_1gs4f_18`,"progress-bar__track":`_progress-bar__track_1gs4f_24`,"progress-bar--labelLayout-vertical":`_progress-bar--labelLayout-vertical_1gs4f_29`,"progress-bar__valueLabel":`_progress-bar__valueLabel_1gs4f_38`,"progress-bar__track--context-embedded":`_progress-bar__track--context-embedded_1gs4f_52`,"progress-bar__track--context-standalone":`_progress-bar__track--context-standalone_1gs4f_56`,"progress-bar__content":`_progress-bar__content_1gs4f_60`}})))()}var v,y,b,x;function S(){return(S=t((()=>{i(),v=e(n()),o(),m(),f(),l(),_(),y=r(),b=0,x=({className:e,context:t=`standalone`,descriptionLabel:n,labelLayout:r=`vertical`,max:i=1,style:o,value:l,valueLabel:u,...d})=>{let f=a(g[`progress-bar`],r&&g[`progress-bar--labelLayout-${r}`],e),m=v.useId(),_=Math.max(Math.min(l,i),b),x=u==null,S=!!(n||x||u),C=a(g[`progress-bar__track`],t&&g[`progress-bar__track--context-${t}`]),w={...o,"--progress-bar__progress":_/i};return s([t===`embedded`&&!!n,t===`embedded`&&!!u],`Labels are not allowed when context is embedded`),s([l>i,l<b],`Value ${l} outside allowed range between ${b} and ${i}`),(0,y.jsxs)(`div`,{className:f,children:[t===`standalone`&&S&&(0,y.jsxs)(`div`,{className:g[`progress-bar__labels`],children:[n&&(0,y.jsx)(p,{id:m,size:`md`,children:n}),x&&(0,y.jsx)(h,{className:g[`progress-bar__valueLabel`],count:_,total:i,variant:`percentage`}),u&&(0,y.jsx)(c,{as:`span`,className:g[`progress-bar__valueLabel`],preset:`body-sm`,children:u})]}),(0,y.jsx)(`div`,{"aria-labelledby":n&&t===`standalone`?m:void 0,className:C,role:`progressbar`,style:w,...d,children:(0,y.jsx)(`div`,{className:g[`progress-bar__content`]})})]})},x.displayName=`ProgressBar`;try{x.displayName=`ProgressBar`,x.__docgenInfo={description:'BETA: This component is still a work in progress and is subject to change.\n\n## Usage\n\nShow the level of completeness for a given task or process. Indicate the percentage of\ncompletion for a discrete number of steps. Not to be confused with the `LoadingIndicator`, which\ncovers waiting rather than measured progress.\n\n| Type/Use | Description | Example |\n|----------|-------------|---------|\n| Standalone | The default. Shows the bar with its labels above or beside it, set by `labelLayout`. | Page-level progress after a user action. |\n| Embedded | `context="embedded"` drops the labels and lets the bar sit flush with its container\'s edges. | A bar along the edge of a `Modal` or `Card`. |\n\n`ProgressBar` can be the child of a container like `Modal` or `Card`. When used in such a\ncontainer, `context`=`embedded` should be used to ensure the left and right edges of the\nprogressBar sit flush within the edges of the container.\n\n`value` is read against `max` (default `1`) and clamped to that range, so the bar cannot report\nbelow zero or above 100%. Supply `valueLabel` to replace the computed percentage with your own\ntext, or pass an empty string to suppress it.\n\n## Content & Accessibility\n\n### Do\'s\n\n* Use `ProgressBar` when content can be progressively completed and is triggered by user action (e.g., a click of a button) at the page level.\n* Use `ProgressBar` to show a measure within a form or other display, where the bar is static and reflects useful details.\n* Give every bar a name. The type requires either a visible `descriptionLabel` or an `aria-label`, which matters most for `context="embedded"`, where no visible label renders.\n\n### Don\'ts\n\n* Avoid using `ProgressBar` when you have a wizard-like, paginated experience. Use `VisualPageIndicator` instead.\n* Avoid `ProgressBar` without labels for user feedback.',displayName:`ProgressBar`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`}],description:"CSS properties defined for the progress bar track. Includes the component's CSS Custom Properties:\n\n- `--progress-bar__bg`\n- `--progress-bar__fg`",name:`style`,required:!1,tags:{},type:{name:`ProgressBarCSSProperties`}},context:{defaultValue:{value:`standalone`},declarations:[{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`}],description:'Determines the usage context of the progress bar.\n* Labels and value strings are only valid for `context`=`standalone`.\n* Never use `context`=`embedded` unless as a child of a container.\n\n**Default is `"standalone"`**.',name:`context`,required:!1,tags:{},type:{name:`enum`,raw:`"standalone" | "embedded"`,value:[{value:`"standalone"`},{value:`"embedded"`}]}},labelLayout:{defaultValue:{value:`vertical`},declarations:[{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`}],description:`Determine whether the labels sit above or to the left of the progress bar

**Default is \`"vertical"\`**.`,name:`labelLayout`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},max:{defaultValue:{value:`1`},declarations:[{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`}],description:`The maximum numeric value allowed for the progress bar.

** Default is \`1\`**.`,name:`max`,required:!1,tags:{},type:{name:`number`}},value:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`}],description:`The “filled” portion of the progressBar is determined by the relationship between the minValue, maxValue, and Value. The var fills to a percentage = (value)/(maxValue–minValue).

Value used by component is a number between 0 and 1.`,name:`value`,required:!0,tags:{},type:{name:`number`}},valueLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`}],description:`Human-readable representation of the progress shown in the bar.`,name:`valueLabel`,required:!1,tags:{},type:{name:`string`}},descriptionLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`}],description:`Visible text label for the component.`,name:`descriptionLabel`,required:!1,tags:{},type:{name:`string`}},"aria-label":{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/ProgressBar/ProgressBar.tsx`,name:`TypeLiteral`}],description:`Aria-label to provide an accesible name for the text input if no visible label is provided.`,name:`aria-label`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{n(),S(),u(),l(),C=r(),w={title:`Components/ProgressBar`,component:x,parameters:{docs:{subtitle:`Component used to visually represent user progress through a series of discrete portions, or a percentage.`},layout:`centered`},tags:[`beta`,`version:1.1.0`]},T={args:{"aria-label":`33 percent`,value:.33,className:`w-[200px]`}},E={args:{"aria-label":`Lesson progress, 33 percent`,context:`embedded`,value:.33},render:e=>(0,C.jsxs)(d,{className:`w-[366px]`,children:[(0,C.jsx)(d.Header,{subTitle:`Lesson 3 of 9`,title:`Text complexity`}),(0,C.jsx)(d.Body,{className:`pb-spacing-size-3 pt-spacing-size-2`,children:(0,C.jsx)(c,{preset:`body-md`,children:`Pick up where you left off. Your progress is saved as you go.`})}),(0,C.jsx)(x,{...e,className:`-mx-spacing-size-3 -mb-spacing-size-3`})]})},D={args:{"aria-label":`33 percent`,value:.33,valueLabel:``,className:`w-[200px]`}},O={args:{...T.args,descriptionLabel:`Label`}},k={args:{...T.args,value:.5,descriptionLabel:`We should prevent labels from being this long, but if they do, they wrap`}},A={args:{...O.args,labelLayout:`horizontal`,valueLabel:``}},j={args:{...T.args,labelLayout:`horizontal`,value:.5,valueLabel:`Value`}},M={args:{...T.args,descriptionLabel:`Label`,valueLabel:`Value`}},N={args:{...T.args,descriptionLabel:`If both labels are long, it looks really wack`,valueLabel:`Fifty units of one hundred`}},P={args:{className:`w-[366px]`,value:.2,descriptionLabel:`We should prevent labels from being this long, but if they do, they wrap`,valueLabel:`50% of 100%`}},F={args:{...P.args,labelLayout:`horizontal`}},I=[`Default`,`Embedded`,`WithNoLabels`,`WithDescriptionLabel`,`WithLongDescriptionLabel`,`WithHorizontalDescriptionLabel`,`WithCustomHorizontalValueLabel`,`WithDescriptionLabelAndValueLabel`,`WithLongDescriptionLabelAndValueLabel`,`DescriptionLabelAndValueStringResizingBehavior`,`HorizontalLabelAndValueStringResizingBehavior`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': '33 percent',
    value: 0.33,
    className: 'w-[200px]'
  }
}`,...T.parameters?.docs?.source},description:{story:"By default, `ProgressBar` uses vertical label layout, standalone context.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Lesson progress, 33 percent',
    context: 'embedded',
    value: 0.33
  },
  render: (args: Args) => <Card className="w-[366px]">
      <Card.Header subTitle="Lesson 3 of 9" title="Text complexity" />
      <Card.Body className="pb-spacing-size-3 pt-spacing-size-2">
        <Text preset="body-md">
          Pick up where you left off. Your progress is saved as you go.
        </Text>
      </Card.Body>
      <ProgressBar {...args} className="-mx-spacing-size-3 -mb-spacing-size-3" />
    </Card>
}`,...E.parameters?.docs?.source},description:{story:`\`context="embedded"\` is for a bar that belongs to the container around it rather than to the
page. The corners square off so the bar can sit flush against the container's edges, and the
labels drop out. Give it an \`aria-label\`, since nothing visible is left to name it.

The bar does not break out of its container's padding on its own. Here the negative margins
cancel the \`Card\`'s padding to take it to the edges, and the \`Card\` clips the square corners
back to its own radius.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': '33 percent',
    value: 0.33,
    valueLabel: '',
    className: 'w-[200px]'
  }
}`,...D.parameters?.docs?.source},description:{story:"All labels can be hidden by providing an empty `valueLabel`. You must specify an `aria-label` value in this case.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    descriptionLabel: 'Label'
  }
}`,...O.parameters?.docs?.source},description:{story:`You can add a solitary label`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 0.5,
    descriptionLabel: 'We should prevent labels from being this long, but if they do, they wrap'
  }
}`,...k.parameters?.docs?.source},description:{story:`You can add both a label and sub-label. We should prevent labels from being this long, but if they do, they wrap.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithDescriptionLabel.args,
    labelLayout: 'horizontal',
    valueLabel: ''
  }
}`,...A.parameters?.docs?.source},description:{story:`Description labels can be rendered horizontally.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    labelLayout: 'horizontal',
    value: 0.5,
    valueLabel: 'Value'
  }
}`,...j.parameters?.docs?.source},description:{story:`You can have a valueLabel only. This can be used when in a horizontal view.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    descriptionLabel: 'Label',
    valueLabel: 'Value'
  }
}`,...M.parameters?.docs?.source},description:{story:`You can add both a label and sub-label.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    descriptionLabel: 'If both labels are long, it looks really wack',
    valueLabel: 'Fifty units of one hundred'
  }
}`,...N.parameters?.docs?.source},description:{story:`Labels will wrap if the text strings are long. Labels should be brief, and sub-labels should be briefer (1-2 words).`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'w-[366px]',
    value: 0.2,
    descriptionLabel: 'We should prevent labels from being this long, but if they do, they wrap',
    valueLabel: '50% of 100%'
  }
}`,...P.parameters?.docs?.source},description:{story:`All labels can contain freeform text, but not components.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...DescriptionLabelAndValueStringResizingBehavior.args,
    labelLayout: 'horizontal'
  }
}`,...F.parameters?.docs?.source},description:{story:`Horizontal labels can position next to a progress bar. These have a maximum width of 160px (spacing-size-20).`,...F.parameters?.docs?.description}}}})))()}L();export{T as Default,P as DescriptionLabelAndValueStringResizingBehavior,E as Embedded,F as HorizontalLabelAndValueStringResizingBehavior,j as WithCustomHorizontalValueLabel,O as WithDescriptionLabel,M as WithDescriptionLabelAndValueLabel,A as WithHorizontalDescriptionLabel,k as WithLongDescriptionLabel,N as WithLongDescriptionLabelAndValueLabel,D as WithNoLabels,I as __namedExportsOrder,w as default};