import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./NumberIcon-dRKk5xSh.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{t(),r(),a=n(),o={title:`Components/NumberIcon`,component:i,parameters:{docs:{subtitle:`Treats a numeral as an icon by wrapping it in a container and adding color/spacing.`},layout:`centered`},args:{"aria-label":`number icon example`,number:1},decorators:[e=>(0,a.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})],tags:[`autodocs`,`version:2.2.0`]},s={},c={args:{status:`default`},render:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{number:2,size:`md`,...e}),(0,a.jsx)(i,{number:3,size:`lg`,...e})]}),decorators:[e=>(0,a.jsx)(`div`,{className:`flex flex-wrap gap-1`,children:e()})]},l={args:{...c.args,isInteractive:!0},render:c.render},u={args:{...c.args,status:`completed`},render:c.render,decorators:c.decorators},d={args:{...c.args,status:`incomplete`},render:c.render,decorators:c.decorators},f={argTypes:{number:{table:{disable:!0}},"aria-label":{table:{disable:!0}}},render:e=>(0,a.jsx)(`div`,{children:[0,1,2,3,4,5,6,7,8,9,10,21,32,43,54,65,76,87,98].map(t=>(0,a.jsx)(i,{...e,"aria-label":`Step ${t}`,number:t},t))})},p={tags:[`code-only`],render:()=>(0,a.jsxs)(`div`,{className:`flex flex-wrap gap-1`,children:[(0,a.jsx)(i,{"aria-label":`Item 1`,number:1,size:`md`}),(0,a.jsx)(i,{"aria-label":`Item 2`,number:2,size:`md`}),(0,a.jsx)(i,{"aria-label":`Item 3`,number:3,size:`md`}),(0,a.jsx)(i,{"aria-label":`Item 4`,number:4,size:`md`}),(0,a.jsx)(i,{"aria-label":`Item 5`,number:5,size:`md`}),(0,a.jsx)(i,{"aria-label":`Item 6`,number:6,size:`md`})]})},m=[`Default`,`Sizes`,`IsInteractive`,`Completed`,`Incomplete`,`DifferentNumbers`,`NumberIconList`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'default'
  },
  render: args => {
    return <>
        <NumberIcon number={2} size="md" {...args} />
        <NumberIcon number={3} size="lg" {...args} />
      </>;
  },
  decorators: [Story => <div className="flex flex-wrap gap-1">{Story()}</div>]
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Sizes.args,
    isInteractive: true
  },
  render: Sizes.render
}`,...l.parameters?.docs?.source},description:{story:"`NumberIcon` can be used in interactive contexts, when wrapped by a navigable or interactive element.",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Sizes.args,
    status: 'completed'
  },
  render: Sizes.render,
  decorators: Sizes.decorators
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Sizes.args,
    status: 'incomplete'
  },
  render: Sizes.render,
  decorators: Sizes.decorators
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  /**
   * Disables controls for args that have no affect on this story
   */
  argTypes: {
    number: {
      table: {
        disable: true
      }
    },
    'aria-label': {
      table: {
        disable: true
      }
    }
  },
  render: args => <div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 32, 43, 54, 65, 76, 87, 98].map(number => <NumberIcon key={number} {...args} aria-label={\`Step \${number}\`} number={number} />)}
    </div>
}`,...f.parameters?.docs?.source},description:{story:"`NumberIcon` supports individual digits, with a maximum of two digits. By default,\nthey are positioned as block-level elements. use `flex` or `display` to update positioning.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  render: () => <div className="flex flex-wrap gap-1">
      <NumberIcon aria-label="Item 1" number={1} size="md" />
      <NumberIcon aria-label="Item 2" number={2} size="md" />
      <NumberIcon aria-label="Item 3" number={3} size="md" />
      <NumberIcon aria-label="Item 4" number={4} size="md" />
      <NumberIcon aria-label="Item 5" number={5} size="md" />
      <NumberIcon aria-label="Item 6" number={6} size="md" />
    </div>
}`,...p.parameters?.docs?.source},description:{story:`This Implementation example shows how to use Number Icon to build a stepper-like component.

- incomplete rows are aligned with each number icon to show progress`,...p.parameters?.docs?.description}}}})))()}h();export{u as Completed,s as Default,f as DifferentNumbers,d as Incomplete,l as IsInteractive,p as NumberIconList,c as Sizes,m as __namedExportsOrder,o as default};