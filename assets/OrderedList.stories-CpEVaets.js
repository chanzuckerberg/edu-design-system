import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./List-COkOzcu8.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),r(),a=n(),o={title:`Components/OrderedList`,component:i,parameters:{docs:{subtitle:`Structures related content into a skimmable vertical layout.`},layout:`centered`},args:{markerType:`default`,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.ListItem,{children:`test 1`}),(0,a.jsx)(i.ListItem,{children:`test 2`}),(0,a.jsx)(i.ListItem,{children:`test 3`})]})},argTypes:{children:{control:!1,description:"Content of the list (essentially the series of `.ListItem`s within the list)"}},tags:[`autodocs`,`version:1.0`]},s={},c={args:{markerType:`none`}},l={args:{size:`xs`}},u={args:{size:`sm`}},d={args:{size:`md`}},f={render:e=>(0,a.jsxs)(i,{...e,children:[(0,a.jsx)(i.ListItem,{children:`test 1`}),(0,a.jsx)(i.ListItem,{children:`test 2`}),(0,a.jsxs)(i.ListItem,{children:[`test 3`,(0,a.jsxs)(i,{...e,children:[(0,a.jsx)(i.ListItem,{children:`test 1`}),(0,a.jsx)(i.ListItem,{children:`test 2`})]})]})]})},p=[`Default`,`None`,`XSmall`,`Small`,`Medium`,`Nested`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  render: args => <OrderedList {...args}>
      <OrderedList.ListItem>test 1</OrderedList.ListItem>
      <OrderedList.ListItem>test 2</OrderedList.ListItem>
      <OrderedList.ListItem>
        test 3
        <OrderedList {...args}>
          <OrderedList.ListItem>test 1</OrderedList.ListItem>
          <OrderedList.ListItem>test 2</OrderedList.ListItem>
        </OrderedList>
      </OrderedList.ListItem>
    </OrderedList>
}`,...f.parameters?.docs?.source},description:{story:`List can be nested to one depth`,...f.parameters?.docs?.description}}}})))()}m();export{s as Default,d as Medium,f as Nested,c as None,u as Small,l as XSmall,p as __namedExportsOrder,o as default};