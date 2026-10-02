import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./Icon-DJYKhM6X.js";import{t as a}from"./Link-CsSjfkrQ.js";import{t as o}from"./Link-CigzUnLI.js";import{n as s}from"./Text-s7d_e173.js";import{t as c}from"./Text-4jUaZiwM.js";import{n as l,t as u}from"./FieldNote-Cinj9o5n.js";import{n as d,t as f}from"./semanticIconOverrides-CAkf2_aJ.js";var p,m,h,g,_,v,y,b,x;e((()=>{n(),l(),d(),i(),o(),c(),p=t(),m={title:`Components/FieldNote`,component:u,parameters:{docs:{subtitle:`Fieldnote component wraps text to describe other components.`},layout:`centered`},tags:[`autodocs`,`version:2.0`]},h={args:{children:`This is a fieldnote.`,id:`field-1`}},g={args:{children:`This is a fieldnote.`,id:`field-1`,status:`critical`}},_={args:{...g.args,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet, massa ultricies iaculis. Quam lacus maecenas nibh malesuada. Attristique et ullamcorper rhoncus amet pharetra aliquet tortor. Suscipit dui, nunc sit dui tellus massa laoreet tellus.`}},v={args:{children:`This is a fieldnote.`,id:`field-1`,status:`warning`}},y={args:{children:(0,p.jsxs)(`div`,{className:`max-w-xl`,children:[(0,p.jsx)(s,{className:`mb-6`,children:`Here is a field note that involves:`}),(0,p.jsxs)(`ul`,{className:`ml-4 list-disc`,children:[(0,p.jsx)(`li`,{children:`Multiple lines`}),(0,p.jsx)(`li`,{children:`Arbitrary HTML text`}),(0,p.jsxs)(`li`,{children:[`Even `,(0,p.jsx)(a,{href:`#`,children:`text links`})]})]})]}),id:`field-1`}},b={args:{...g.args},decorators:[e=>(0,p.jsx)(r,{icons:f,children:e()})]},x=[`Default`,`WithErrorIcon`,`WithLongText`,`WithWarningIcon`,`WithText`,`WithProvidedIcons`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a fieldnote.',
    id: 'field-1'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a fieldnote.',
    id: 'field-1',
    status: 'critical'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithErrorIcon.args,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet, massa ultricies iaculis. Quam lacus maecenas nibh malesuada. Attristique et ullamcorper rhoncus amet pharetra aliquet tortor. Suscipit dui, nunc sit dui tellus massa laoreet tellus.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a fieldnote.',
    id: 'field-1',
    status: 'warning'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="max-w-xl">
        <Text className="mb-6">Here is a field note that involves:</Text>
        <ul className="ml-4 list-disc">
          <li>Multiple lines</li>
          <li>Arbitrary HTML text</li>
          <li>
            Even <Link href="#">text links</Link>
          </li>
        </ul>
      </div>,
    id: 'field-1'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithErrorIcon.args
  },
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...b.parameters?.docs?.source},description:{story:"A note's icon reports its status, so which glyph each status draws comes from\n`IconProvider` and matches what the notification components show for the same status.\n\nHere `critical` becomes the outline version of the icon.",...b.parameters?.docs?.description}}}}))();export{h as Default,g as WithErrorIcon,_ as WithLongText,b as WithProvidedIcons,y as WithText,v as WithWarningIcon,x as __namedExportsOrder,m as default};