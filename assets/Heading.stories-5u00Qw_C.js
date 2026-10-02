import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./Heading-Cx0nZAi1.js";var a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{n(),r(),a=t(),o={title:`Components/Heading`,component:i,parameters:{docs:{subtitle:"A component for styling heading text (`<h1>`-`<h6>`)."},layout:`centered`},tags:[`autodocs`,`version:3.0`]},s={args:{children:`Default Heading`}},c={args:{as:`h1`,children:`Heading 1`}},l={args:{as:`h2`,children:`Heading 2`}},u={args:{as:`h3`,children:`Heading 3`}},d={args:{as:`h4`,children:`Heading 4`}},f={args:{as:`h5`,children:`Heading 5`}},p={args:{as:`h6`,children:`Heading 6`}},m={render:e=>(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(i,{...e,as:`h1`,children:[`Page title, default `,(0,a.jsx)(`code`,{children:`headline-lg`})]}),(0,a.jsxs)(i,{...e,as:`h2`,children:[`Section, default `,(0,a.jsx)(`code`,{children:`headline-md`})]}),(0,a.jsxs)(i,{...e,as:`h2`,preset:`title-md`,children:[`Section, still an `,(0,a.jsx)(`code`,{children:`h2`}),`, drawn as `,(0,a.jsx)(`code`,{children:`title-md`})]})]})},h={render:e=>(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(i,{...e,className:`text-utility-warning`,preset:`title-md`,children:[`using `,(0,a.jsx)(`code`,{children:`text-utility-warning`}),` utility class`]}),(0,a.jsxs)(i,{...e,as:`h2`,className:`text-utility-favorable`,preset:`title-md`,children:[`using `,(0,a.jsx)(`code`,{children:`text-utility-favorable`}),` utility class and preset override`]}),(0,a.jsxs)(i,{...e,className:`text-utility-critical`,preset:`title-md`,children:[`using `,(0,a.jsx)(`code`,{children:`text-utility-critical`}),` utility class`]}),(0,a.jsx)(i,{className:`text-[var(--eds-theme-color-text-utility-favorable)]`,preset:`title-md`,children:`using color with token in utility class and preset override`})]})},g=[`Default`,`Heading1`,`Heading2`,`Heading3`,`Heading4`,`Heading5`,`Heading6`,`StructureAndTreatment`,`UsingColorTokens`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Heading'
  }
}`,...s.parameters?.docs?.source},description:{story:"The default `Heading` sets a level-one header tag `<h1>` with the prescribed default preset.\n\n`as` comes from document structure and `preset` comes from design: set `as` to the level\nthe page outline calls for, and `preset` only when the design asks for a treatment other\nthan that level's default.",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h1',
    children: 'Heading 1'
  }
}`,...c.parameters?.docs?.source},description:{story:"When using `h1`, the default preset maps to `headline-lg`",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h2',
    children: 'Heading 2'
  }
}`,...l.parameters?.docs?.source},description:{story:"When using `h2`, the default preset maps to `headline-md`",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h3',
    children: 'Heading 3'
  }
}`,...u.parameters?.docs?.source},description:{story:"When using `h3`, the default preset maps to `headline-sm`",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h4',
    children: 'Heading 4'
  }
}`,...d.parameters?.docs?.source},description:{story:"When using `h4`, the default preset maps to `title-lg`",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h5',
    children: 'Heading 5'
  }
}`,...f.parameters?.docs?.source},description:{story:"When using `h5`, the default preset maps to `title-md`",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h6',
    children: 'Heading 6'
  }
}`,...p.parameters?.docs?.source},description:{story:"When using `h6`, the default preset maps to `title-sm`",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <Heading {...args} as="h1">
        Page title, default <code>headline-lg</code>
      </Heading>
      <Heading {...args} as="h2">
        Section, default <code>headline-md</code>
      </Heading>
      <Heading {...args} as="h2" preset="title-md">
        Section, still an <code>h2</code>, drawn as <code>title-md</code>
      </Heading>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"`as` and `preset` answer different questions, so they can be set independently.\n\nHere the outline is a page title followed by two sections, so the tags are `h1`, `h2`,\n`h2`. The second section is drawn smaller in the design, so it takes a `preset` of\n`title-md` while staying an `h2`. Screen readers still read three headings at the levels\nthe outline calls for.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <Heading {...args} className="text-utility-warning" preset="title-md">
        using <code>text-utility-warning</code> utility class
      </Heading>
      <Heading {...args} as="h2" className="text-utility-favorable" preset="title-md">
        using <code>text-utility-favorable</code> utility class and preset
        override
      </Heading>
      <Heading {...args} className="text-utility-critical" preset="title-md">
        using <code>text-utility-critical</code> utility class
      </Heading>
      <Heading className="text-[var(--eds-theme-color-text-utility-favorable)]" preset="title-md">
        using color with token in utility class and preset override
      </Heading>
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Here we demonstrate how to use utility classes to augment the headings.`,...h.parameters?.docs?.description}}}}))();export{s as Default,c as Heading1,l as Heading2,u as Heading3,d as Heading4,f as Heading5,p as Heading6,m as StructureAndTreatment,h as UsingColorTokens,g as __namedExportsOrder,o as default};