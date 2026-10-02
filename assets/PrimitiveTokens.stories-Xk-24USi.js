import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n,c as r,g as i,h as a,m as o,p as s}from"./iframe-CxYcUItw.js";import{i as c,r as l,t as u}from"./TokenList-0qXVm1TI.js";function d(e,t){return e.name<t.name?-1:1}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{i(),n(),c(),f=t(),p={title:`Design Tokens/(1) Primitive`,component:u,args:{caption:`Tokens`,subCaption:`These values are used in higher semantic and component tokens and should not be used in custom components directly.`,size:`md`},parameters:{chromatic:{diffThreshold:.75,delay:100},controls:{disable:!0},actions:{disable:!0},table:{disable:!0},docs:{description:{component:`This page documents all of the primitive token values, defined by the brand. For colors, primitive color tokens should **not** be used directly in designs or code. Tokens available for use will have an available tailwind class name listed. If no tailwind CSS class name is listed, **do not use this token in code**!`},page:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{}),(0,f.jsx)(o,{}),(0,f.jsx)(r,{}),(0,f.jsx)(s,{})]})},a11y:{test:`off`}}},m={args:{caption:`Red Hues`,listItems:l(`eds-color-red`,`color`,(e,t)=>t===`figma`?`red/`+e.slice(e.lastIndexOf(`-`)+1):``).sort(d)}},h={args:{caption:`Orange Hues`,listItems:l(`eds-color-orange`,`color`,(e,t)=>t===`figma`?`orange/`+e.slice(e.lastIndexOf(`-`)+1):``).sort(d)}},g={args:{caption:`Yellow Hues`,listItems:l(`eds-color-yellow`,`color`,(e,t)=>t===`figma`?`yellow/`+e.slice(e.lastIndexOf(`-`)+1):``).sort(d)}},_={args:{caption:`Green Hues`,listItems:l(`eds-color-green`,`color`,(e,t)=>t===`figma`?`green/`+e.slice(e.lastIndexOf(`-`)+1):``).sort(d)}},v={args:{caption:`Blue Hues`,listItems:l(`eds-color-blue`,`color`,(e,t)=>t===`figma`?`blue/`+e.slice(e.lastIndexOf(`-`)+1):``).sort(d)}},y={args:{caption:`Purple Hues`,listItems:l(`eds-color-purple`,`color`,(e,t)=>t===`figma`?`purple/`+e.slice(e.lastIndexOf(`-`)+1):``).sort(d)}},b={args:{caption:`Neutral Hues`,listItems:l(`eds-color-neutral`,`color`,(e,t)=>t===`figma`?`neutral/`+e.slice(e.lastIndexOf(`-`)+1):``).sort(d)}},x={args:{caption:`Opacities`,listItems:l(`eds-color-opacity`,`size`,(e,t)=>``)}},S={args:{caption:`Fade Animations`,subCaption:"These constants define the time length for different opacity transitions in EDS. Use with `calc()` in CSS to add second units.",listItems:l(`eds-anim-fade`,`size`,()=>``)}},C={args:{caption:`Movement Animations`,subCaption:"These constants define the time length for different transition animations in EDS. Use with `calc()` in CSS to add second units.",listItems:l(`eds-anim-move`,`size`,()=>``)}},w={args:{caption:`Border Radii`,listItems:l(`eds-border-radius`,`size`,()=>``)}},T={args:{caption:`Spacing`,subCaption:"Spacing sizes represent a core set of sizing units to match designs to code. Use with `calc()` in CSS to add second units.",listItems:l(`eds-spacing-size`,`size`,(e,t)=>t===`figma`?`spacing/size-`+e.split(`spacing-size-`)[1]:`*-spacing-size-`+e.split(`spacing-size-`)[1])}},E={args:{caption:`Shadows`,subCaption:`Shadows are a set of reusable tokens for determining elevation.`,listItems:l(`eds-box-shadow`,`size`)}},D={args:{caption:`Font Families`,listItems:l(`eds-typography-font-family`,`size`,(e,t)=>e.includes(`offset`)?``:t===`figma`?`fontFamily/font-family-`+e.slice(e.lastIndexOf(`-`)+1):`font-`+e.slice(e.lastIndexOf(`-`)+1))}},O=[`Reds`,`Oranges`,`Yellows`,`Greens`,`Blues`,`Purples`,`Neutrals`,`Opacities`,`FadeAnimations`,`MovementAnimations`,`BorderRadii`,`Sizes`,`Shadows`,`FontFamilies`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Red Hues',
    listItems: getTokenListItems('eds-color-red', 'color', (name, column) => {
      if (column === 'figma') {
        return 'red/' + name.slice(name.lastIndexOf('-') + 1);
      } else {
        return '';
      }
    }).sort(sortVarNames)
  }
}`,...m.parameters?.docs?.source},description:{story:`Red Brand Colors`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Orange Hues',
    listItems: getTokenListItems('eds-color-orange', 'color', (name, column) => {
      if (column === 'figma') {
        return 'orange/' + name.slice(name.lastIndexOf('-') + 1);
      } else {
        return '';
      }
    }).sort(sortVarNames)
  }
}`,...h.parameters?.docs?.source},description:{story:`Oranges Brand Colors`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Yellow Hues',
    listItems: getTokenListItems('eds-color-yellow', 'color', (name, column) => {
      if (column === 'figma') {
        return 'yellow/' + name.slice(name.lastIndexOf('-') + 1);
      } else {
        return '';
      }
    }).sort(sortVarNames)
  }
}`,...g.parameters?.docs?.source},description:{story:`Yellow Brand Colors`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Green Hues',
    listItems: getTokenListItems('eds-color-green', 'color', (name, column) => {
      if (column === 'figma') {
        return 'green/' + name.slice(name.lastIndexOf('-') + 1);
      } else {
        return '';
      }
    }).sort(sortVarNames)
  }
}`,..._.parameters?.docs?.source},description:{story:`Green Brand Colors`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Blue Hues',
    listItems: getTokenListItems('eds-color-blue', 'color', (name, column) => {
      if (column === 'figma') {
        return 'blue/' + name.slice(name.lastIndexOf('-') + 1);
      } else {
        return '';
      }
    }).sort(sortVarNames)
  }
}`,...v.parameters?.docs?.source},description:{story:`Blue Brand Colors`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Purple Hues',
    listItems: getTokenListItems('eds-color-purple', 'color', (name, column) => {
      if (column === 'figma') {
        return 'purple/' + name.slice(name.lastIndexOf('-') + 1);
      } else {
        return '';
      }
    }).sort(sortVarNames)
  }
}`,...y.parameters?.docs?.source},description:{story:`Purple Brand Colors`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Neutral Hues',
    listItems: getTokenListItems('eds-color-neutral', 'color', (name, column) => {
      if (column === 'figma') {
        return 'neutral/' + name.slice(name.lastIndexOf('-') + 1);
      } else {
        return '';
      }
    }).sort(sortVarNames)
  }
}`,...b.parameters?.docs?.source},description:{story:`Neutral Brand Colors`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Opacities',
    listItems: getTokenListItems('eds-color-opacity', 'size', (name, column) => '')
  }
}`,...x.parameters?.docs?.source},description:{story:`Opacity Brand Colors`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Fade Animations',
    subCaption: 'These constants define the time length for different opacity transitions in EDS. Use with \`calc()\` in CSS to add second units.',
    listItems: getTokenListItems('eds-anim-fade', 'size', () => '')
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Movement Animations',
    subCaption: 'These constants define the time length for different transition animations in EDS. Use with \`calc()\` in CSS to add second units.',
    listItems: getTokenListItems('eds-anim-move', 'size', () => '')
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Border Radii',
    listItems: getTokenListItems('eds-border-radius', 'size', () => '')
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Spacing',
    subCaption: 'Spacing sizes represent a core set of sizing units to match designs to code. Use with \`calc()\` in CSS to add second units.',
    listItems: getTokenListItems('eds-spacing-size', 'size', (name, column) => {
      if (column === 'figma') {
        return 'spacing/size-' + name.split('spacing-size-')[1];
      } else {
        // tailwind or some other value(s) as fallback
        return '*-spacing-size-' + name.split('spacing-size-')[1];
      }
    })
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Shadows',
    subCaption: 'Shadows are a set of reusable tokens for determining elevation.',
    listItems: getTokenListItems('eds-box-shadow', 'size')
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Font Families',
    listItems: getTokenListItems('eds-typography-font-family', 'size', (name, column) => {
      // Hide the one-off offset value
      if (!name.includes('offset')) {
        if (column === 'figma') {
          return 'fontFamily/font-family-' + name.slice(name.lastIndexOf('-') + 1);
        } else {
          return 'font-' + name.slice(name.lastIndexOf('-') + 1);
        }
      }
      return '';
    })
  }
}`,...D.parameters?.docs?.source}}}}))();export{v as Blues,w as BorderRadii,S as FadeAnimations,D as FontFamilies,_ as Greens,C as MovementAnimations,b as Neutrals,x as Opacities,h as Oranges,y as Purples,m as Reds,E as Shadows,T as Sizes,g as Yellows,O as __namedExportsOrder,p as default};