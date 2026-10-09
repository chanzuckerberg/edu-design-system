import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Accordion-vTxNZLpW.js";import{n as a,t as o}from"./Menu-CAuzxZjp.js";import{n as s,t as c}from"./Icon-BnY9HHXV.js";import{n as l,t as u}from"./IconProvider-CLE0eA_m.js";import{n as d,r as f}from"./Text-DJbcQrwW.js";import{n as p,t as m}from"./InputChip-Daid0kwV.js";import{n as h,t as g}from"./InlineNotification-9w5XFpnQ.js";var _,v,y,b,x,S,C,w;function T(){return(T=e((()=>{t(),s(),l(),r(),h(),p(),a(),f(),_=n(),v={title:`Components/IconProvider`,component:u,parameters:{docs:{subtitle:`Set the icons EDS draws for the roles it fills on its own behalf, across a whole app at once.`}},tags:[`autodocs`,`version:1.0.0`]},y=(0,_.jsxs)(`div`,{className:`gap-spacing-size-4 flex flex-col`,children:[(0,_.jsx)(o,{children:(0,_.jsx)(o.Button,{children:`Actions`})}),(0,_.jsx)(i,{headingAs:`h3`,children:(0,_.jsxs)(i.Row,{children:[(0,_.jsx)(i.Button,{title:`An expandable row`}),(0,_.jsx)(i.Panel,{children:(0,_.jsx)(d,{preset:`body-md`,children:`The indicator rotates when the row opens, so an icon set here should read well upside down.`})})]})}),(0,_.jsx)(m,{label:`A chip`}),(0,_.jsx)(g,{status:`critical`,title:`Something went wrong`})]}),b={args:{children:y}},x={close:`remove`,critical:`critical`,expand:`unfold-more`},S={args:{children:y,icons:x}},C={args:{children:y,icons:{expand:(0,_.jsx)(c,{color:`var(--eds-theme-color-icon-utility-interactive-primary)`,name:`unfold-more`,purpose:`decorative`,size:`20px`})}}},w=[`Default`,`WithOverriddenIcons`,`WithCustomContent`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
informative icon would have them announce twice.`,...C.parameters?.docs?.description}}}})))()}T();export{b as Default,C as WithCustomContent,S as WithOverriddenIcons,w as __namedExportsOrder,v as default};