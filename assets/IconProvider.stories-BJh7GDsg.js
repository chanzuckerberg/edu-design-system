import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./Icon-BK9TF5-o.js";import{n as a,r as o}from"./Icon-DJYKhM6X.js";import{n as s}from"./Text-s7d_e173.js";import{t as c}from"./Text-4jUaZiwM.js";import{t as l}from"./Menu-JUw5tcxL.js";import{t as u}from"./Menu-DngLwsWN.js";import{t as d}from"./Accordion-BgN6lorY.js";import{n as f,t as p}from"./InlineNotification-14SMStlZ.js";import{t as m}from"./InputChip-DqXpmquI.js";import{t as h}from"./InputChip-LDaZPPg2.js";import{t as g}from"./InlineNotification-B6dvzwso.js";var _,v,y,b,x,S,C,w;e((()=>{n(),r(),o(),f(),p(),h(),u(),c(),_=t(),v={title:`Components/IconProvider`,component:a,parameters:{docs:{subtitle:`Set the icons EDS draws for the roles it fills on its own behalf, across a whole app at once.`}},tags:[`autodocs`,`version:1.0.0`]},y=(0,_.jsxs)(`div`,{className:`gap-spacing-size-4 flex flex-col`,children:[(0,_.jsx)(l,{children:(0,_.jsx)(l.Button,{children:`Actions`})}),(0,_.jsx)(d,{headingAs:`h3`,children:(0,_.jsxs)(d.Row,{children:[(0,_.jsx)(d.Button,{title:`An expandable row`}),(0,_.jsx)(d.Panel,{children:(0,_.jsx)(s,{preset:`body-md`,children:`The indicator rotates when the row opens, so an icon set here should read well upside down.`})})]})}),(0,_.jsx)(m,{label:`A chip`}),(0,_.jsx)(g,{status:`critical`,title:`Something went wrong`})]}),b={args:{children:y}},x={close:`remove`,critical:`critical`,expand:`unfold-more`},S={args:{children:y,icons:x}},C={args:{children:y,icons:{expand:(0,_.jsx)(i,{color:`var(--eds-theme-color-icon-utility-interactive-primary)`,name:`unfold-more`,purpose:`decorative`,size:`20px`})}}},w=[`Default`,`WithOverriddenIcons`,`WithCustomContent`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleTree
  }
}`,...b.parameters?.docs?.source},description:{story:`With no provider in the tree, every role renders the icon EDS ships for it. An app that
is happy with those does not need this component at all.`,...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleTree,
    icons: partialOverride
  }
}`,...S.parameters?.docs?.source},description:{story:`Naming a role replaces its icon everywhere below the provider, so the expand chevron
changes on the menu button and the accordion row together. Roles left out of the map
keep the icon they had.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleTree,
    icons: {
      expand: <Icon color="var(--eds-theme-color-icon-utility-interactive-primary)" name="unfold-more" purpose="decorative" size="20px" />
    }
  }
}`,...C.parameters?.docs?.source},description:{story:`A role takes a node as readily as an icon name, on the same terms as any other content
slot in the system.

An \`Icon\` instance is the usual reason to reach for one. Passing a name leaves the icon's
own props to whichever component draws it, which is what keeps a role consistent; passing
the component sets them yourself, so a role can carry a fixed size or a color that does
not follow the surrounding text. Below, \`expand\` stays put at 20px on both the menu button
and the accordion row, where a name would have been sized 24px by each of them.

Content passed this way carries its own accessible treatment. \`purpose="decorative"\` is
right for this one: both controls it lands in already have a text label, and an
informative icon would have them announce twice.`,...C.parameters?.docs?.description}}}}))();export{b as Default,C as WithCustomContent,S as WithOverriddenIcons,w as __namedExportsOrder,v as default};