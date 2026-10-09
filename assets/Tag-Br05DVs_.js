import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";import{i as a,t as o}from"./logging-DIGRaM8w.js";import{n as s,r as c,t as l}from"./IconSlot-Chsa5gUx.js";import{r as u,t as d}from"./Text-DJbcQrwW.js";var f,p,m;function h(){return(h=e((()=>{f=`_tag_1acee_10`,p=`_tag__body_1acee_38`,m={tag:f,tag__body:p,"tag--status-critical":`_tag--status-critical_1acee_49`,"tag--status-favorable":`_tag--status-favorable_1acee_53`,"tag--status-warning":`_tag--status-warning_1acee_57`,"tag--status-informational":`_tag--status-informational_1acee_61`,"tag--emphasis-low":`_tag--emphasis-low_1acee_64`}})))()}var g,_;function v(){return(v=e((()=>{r(),t(),a(),c(),u(),h(),g=n(),_=({className:e,emphasis:t=`high`,icon:n,label:r,status:a=`informational`,style:c})=>{let u=i(m.tag,t&&m[`tag--emphasis-${t}`],a&&m[`tag--status-${a}`],e);return o([a!==`informational`&&t===`low`],`Emphasis can only be set to low when status is "informational"`),(0,g.jsxs)(d,{as:`span`,className:u,preset:`tag`,style:c,children:[s(n)&&(0,g.jsx)(l,{content:n,purpose:`decorative`,size:`16px`}),r&&(0,g.jsx)(`span`,{className:m.tag__body,children:r})]})},_.displayName=`Tag`;try{_.displayName=`Tag`,_.__docgenInfo={description:`## Usage

| Type/Use | Description | Example |
|----------|-------------|---------|
| State indicators | Shows the current status of an item or process. | A green "Active" tag for a user profile. |
| Availability | Indicates if something is available or not. | "Available" or "Unavailable" tag for a product. |
| Progress / Workflow | Marks the stage in a workflow or pipeline. | "In Review," "Draft," or "Completed" tags for a document. |
| Urgency / Priority | Highlights critical items needing attention. | "High Priority" or "Urgent" tag in a task list. |
| Validation status | Shows whether an item passed or failed validation. | "Valid" or "Error" status tags for form inputs. |
| New or updated content | Marks new or recently changed items. | A "New" or "Updated" tag for an article or notification. |

### Best Practices

* Use short labels, keeping them to 1-2 words since tags represent discrete pieces of information.
* When using multiple tags together, separate them with 16px of space.
* Use tag status variants that are appropriate for the tag's content.
* Don't use tags solely for their colors or in a semantically incorrect way. If you need color-coded tags that are not tied to a particular status, reach out to EDS.

## Content & Accessibility

### Do's

* Keep labels to 1-2 words.
* Remember that tags represent discrete pieces of information.

### Don'ts

* Don't overload users with excessive content, which increases cognitive load.
* Don't rely on just color to communicate status—add text or icons.`,displayName:`Tag`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Tag/Tag.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Tag/Tag.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component for styling.`,name:`className`,required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Tag/Tag.tsx`,name:`TypeLiteral`}],description:"CSS properties defined for the HTML element. Includes the component's CSS Custom Properties:\n\n- `--tag__bg`\n- `--tag__border`\n- `--tag__fg`",name:`style`,required:!1,tags:{},type:{name:`TagCSSProperties`}},emphasis:{defaultValue:{value:`high`},declarations:[{fileName:`edu-design-system/src/components/Tag/Tag.tsx`,name:`TypeLiteral`}],description:`Controls how much the tag stands out. **NOTE**: emphasis can only be set to "low" when status is "informational".

**Default is \`"high"\`**.`,name:`emphasis`,required:!1,tags:{},type:{name:`enum`,raw:`Emphasis`,value:[{value:`"low"`},{value:`"high"`}]}},icon:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Tag/Tag.tsx`,name:`TypeLiteral`}],description:`Leading slot for the tag. Takes an EDS icon name, or any content to render in its
place at 16px.`,name:`icon`,required:!1,tags:{},type:{name:`IconOrContent`}},label:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Tag/Tag.tsx`,name:`TypeLiteral`}],description:`The text contents of the tag, nested inside the component.`,name:`label`,required:!1,tags:{},type:{name:`string`}},status:{defaultValue:{value:`informational`},declarations:[{fileName:`edu-design-system/src/components/Tag/Tag.tsx`,name:`TypeLiteral`}],description:`Status for the component state`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`Status`,value:[{value:`"critical"`},{value:`"informational"`},{value:`"warning"`},{value:`"favorable"`}]}}},tags:{}}}catch{}})))()}export{v as n,_ as t};