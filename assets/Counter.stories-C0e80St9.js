import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r}from"./iframe-CxYcUItw.js";import{n as i,t as a}from"./Counter-JueOuRrx.js";import{n as o,t as s}from"./Input-qrbB2cZl.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{c=e(r()),i(),s(),l=n(),u=({count:e,...t})=>{let[n,r]=(0,c.useState)(`Some initial text`);return(0,l.jsxs)(`div`,{className:`gap-spacing-size-1 flex w-[384px] flex-col`,children:[(0,l.jsx)(o,{"aria-label":`Type to change the count`,onChange:e=>r(e.target.value),value:n}),(0,l.jsx)(a,{count:n.length,...t})]})},d={title:`Components/Counter`,component:a,parameters:{docs:{subtitle:`A current count against its total, as a fraction or a percentage. Internal to the components that show a counting construction; not exported from the package.`},layout:`centered`},args:{count:3,total:10},tags:[`autodocs`,`beta`,`ai`,`version:1.0.0`]},f={},p={args:{count:0}},m={args:{count:10}},h={args:{count:12}},g={args:{count:3,total:0}},_={args:{count:3,total:-10}},v={render:e=>(0,l.jsx)(u,{...e}),args:{total:20}},y={args:{variant:`percentage`}},b={args:{count:1,total:3,variant:`percentage`}},x={args:{count:12,variant:`percentage`}},S={args:{total:0,variant:`percentage`}},C={render:e=>(0,l.jsx)(u,{...e}),args:{total:20,variant:`percentage`}},w=[`Default`,`EmptyCount`,`AtTotal`,`OverTotal`,`ZeroTotal`,`NegativeTotal`,`CountChanging`,`Percentage`,`PercentageRounded`,`PercentageOverTotal`,`PercentageZeroTotal`,`PercentageChanging`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...p.parameters?.docs?.source},description:{story:`A count of zero is still shown, so the total is visible before the user types anything.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    count: 10
  }
}`,...m.parameters?.docs?.source},description:{story:`Reaching the total is a valid state, so the count keeps the default treatment.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    count: 12
  }
}`,...h.parameters?.docs?.source},description:{story:`Once the count goes past the total, the count switches to the critical treatment. The total
stays as-is; it is the limit being violated, not the thing in error. Fields allow this when
they use \`recommendedMaxLength\`, which lets the user keep typing past the count shown.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3,
    total: 0
  }
}`,...g.parameters?.docs?.source},description:{story:`A total of zero leaves every count above it invalid. Fields avoid this by hiding the counter
when no length is set, but the counter still renders it consistently.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3,
    total: -10
  }
}`,..._.parameters?.docs?.source},description:{story:`A negative total is not a state a field can reach. The counter renders what it is given and
logs a development warning rather than guessing at a correction.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveCounter {...args} />,
  args: {
    total: 20
  }
}`,...v.parameters?.docs?.source},description:{story:`The count updates as the user types, and picks up the critical treatment as soon as it passes
the total.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'percentage'
  }
}`,...y.parameters?.docs?.source},description:{story:"The same `count` and `total` can be reported as a share of the total instead of a fraction,\nusing the whole-percentage format `ProgressBar` uses.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    count: 1,
    total: 3,
    variant: 'percentage'
  }
}`,...b.parameters?.docs?.source},description:{story:"Percentages carry no decimals, so a count that doesn't divide evenly rounds to the nearest\nwhole number (here, 1 of 3 reads as `33%`).",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    count: 12,
    variant: 'percentage'
  }
}`,...x.parameters?.docs?.source},description:{story:`Going over the total reads as more than 100%, and takes the same critical treatment as the
fraction variant.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    total: 0,
    variant: 'percentage'
  }
}`,...S.parameters?.docs?.source},description:{story:`There is no percentage to report against a total of zero, so the counter logs a development
error and reads \`0%\` rather than rendering a non-finite value. Pass a total greater than zero
whenever you ask for this variant.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveCounter {...args} />,
  args: {
    total: 20,
    variant: 'percentage'
  }
}`,...C.parameters?.docs?.source},description:{story:`The percentage climbs as the user types, crossing 100% at the same point the fraction variant
goes over its total.`,...C.parameters?.docs?.description}}}}))();export{m as AtTotal,v as CountChanging,f as Default,p as EmptyCount,_ as NegativeTotal,h as OverTotal,y as Percentage,C as PercentageChanging,x as PercentageOverTotal,b as PercentageRounded,S as PercentageZeroTotal,g as ZeroTotal,w as __namedExportsOrder,d as default};