import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,r as i}from"./List-DJbaVjiR.js";var a,o,s,c,l,u,d,f,p,m;e((()=>{n(),i(),a=t(),o={title:`Components/UnorderedList`,component:r,parameters:{docs:{subtitle:`Structures related content into a skimmable vertical layout.`},layout:`centered`},args:{markerType:`default`,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.ListItem,{children:`test 1`}),(0,a.jsx)(r.ListItem,{children:`test 2`}),(0,a.jsx)(r.ListItem,{children:`test 3`})]})},argTypes:{children:{control:!1,description:"Content of the list (essentially the series of `.ListItem`s within the list)"}},tags:[`autodocs`,`version:1.0`]},s={},c={args:{markerType:`none`}},l={args:{size:`xs`}},u={args:{size:`sm`}},d={args:{size:`md`}},f={args:{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.ListItem,{className:`list-['+']`,children:`test 1`}),(0,a.jsx)(r.ListItem,{className:`list-['–']`,children:`test 2`}),(0,a.jsx)(r.ListItem,{className:`list-['*']`,children:`test 3`})]})}},p={render:e=>(0,a.jsxs)(r,{...e,children:[(0,a.jsx)(r.ListItem,{children:`test 1`}),(0,a.jsx)(r.ListItem,{children:`test 2`}),(0,a.jsxs)(r.ListItem,{children:[`test 3`,(0,a.jsxs)(r,{...e,children:[(0,a.jsx)(r.ListItem,{children:`test 1`}),(0,a.jsx)(r.ListItem,{children:`test 2`})]})]})]})},m=[`Default`,`None`,`XSmall`,`Small`,`Medium`,`CustomMarker`,`Nested`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    markerType: 'none'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <UnorderedList.ListItem className="list-['+']">
          test 1
        </UnorderedList.ListItem>
        <UnorderedList.ListItem className="list-['–']">
          test 2
        </UnorderedList.ListItem>
        <UnorderedList.ListItem className="list-['*']">
          test 3
        </UnorderedList.ListItem>
      </>
  }
}`,...f.parameters?.docs?.source},description:{story:`You can add custom markers to any list item by specifying a \`list-style-type\` value for the given row.

This example uses TailwindCSS to specify a utility class with custom characters`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <UnorderedList {...args}>
      <UnorderedList.ListItem>test 1</UnorderedList.ListItem>
      <UnorderedList.ListItem>test 2</UnorderedList.ListItem>
      <UnorderedList.ListItem>
        test 3
        <UnorderedList {...args}>
          <UnorderedList.ListItem>test 1</UnorderedList.ListItem>
          <UnorderedList.ListItem>test 2</UnorderedList.ListItem>
        </UnorderedList>
      </UnorderedList.ListItem>
    </UnorderedList>
}`,...p.parameters?.docs?.source},description:{story:`List can be nested to one depth`,...p.parameters?.docs?.description}}}}))();export{f as CustomMarker,s as Default,d as Medium,p as Nested,c as None,u as Small,l as XSmall,m as __namedExportsOrder,o as default};