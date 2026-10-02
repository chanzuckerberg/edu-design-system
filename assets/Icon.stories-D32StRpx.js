import{a as e,n as t,t as n}from"./chunk-DnJy8xQt.js";import{M as r,W as i,a,i as o}from"./iframe-CxYcUItw.js";import{n as s,t as c}from"./clsx-CU3OJm-u.js";import{i as l,n as u,r as d,t as f}from"./Icon-BK9TF5-o.js";import{n as p}from"./Text-s7d_e173.js";import{t as m}from"./Text-4jUaZiwM.js";import{t as h}from"./_createCompounder-CZHYIUxm.js";var g=n(((e,t)=>{t.exports=h()(function(e,t,n){return e+(n?`-`:``)+t.toLowerCase()})})),_,v=t((()=>{_={"icon-grid":`_icon-grid_32ch0_5`,"icon-grid__item":`_icon-grid__item_32ch0_12`,"icon-grid__icon":`_icon-grid__icon_32ch0_27`,"icon-grid__item--is-deprecated":`_icon-grid__item--is-deprecated_32ch0_33`}})),y,b,x,S,C,w,T,E,D,O,k,A;t((()=>{s(),y=e(g()),i(),u(),l(),a(),m(),v(),b=r(),x={title:`Components/Icon`,component:f,parameters:{docs:{subtitle:`Render arbitrary SVG path data while enforcing good accessibility practices.`},layout:`centered`},argTypes:{name:{control:{type:`select`},options:Object.keys(d)},color:{control:{type:`select`},options:[`currentColor`,...Object.keys(o).filter(e=>e.indexOf(`Icon`)!==-1).map(e=>`var(--${(0,y.default)(e)})`)]}},tags:[`autodocs`,`version:2.3.0`]},S={render:({name:e,color:t,...n})=>(0,b.jsx)(f,{...n,color:t,name:e}),args:{name:`close`,purpose:`decorative`}},C={...S,args:{...S.args,size:`2em`}},w={...S,args:{...S.args,size:`4em`}},T={...S,args:{...S.args,color:`var(--eds-theme-color-icon-utility-critical)`,size:`2em`}},E={render:e=>(0,b.jsxs)(p,{as:`p`,children:[`The svg icon defaults to the surrounding text size (`,(0,b.jsx)(f,{...e,name:`add-encircled`,purpose:`informative`,title:`icon with 1em line height`}),`; 1em) by default.`]})},D={...S,args:{viewBox:`0 0 24 24`,children:(0,b.jsx)(`path`,{d:`M11.6144 8.96051C12.2524 7.61848 13.9514 4.56304 14.905 3C15.5557 3.28671 16.1844 3.61871 16.7863 3.99342C15.9964 5.50177 14.2272 8.6643 13.5144 9.87646C14.7414 9.45266 18.4783 8.3362 20.1657 7.89646C20.4765 8.60506 20.8294 9.55291 21 10.0815C19.0439 10.5737 15.0872 11.5078 13.699 11.8109C15.335 12.2848 17.9431 13.0914 19.8642 13.7408C19.6118 14.2352 19.0345 15.2354 18.6209 15.9122C17.034 15.3311 15.0639 14.5451 13.4794 13.8934C13.9 14.3491 16.8143 17.8329 17.5178 18.7147C17.1322 19.2023 16.4217 20.0157 15.9566 20.5101C14.6058 18.7876 13.1522 16.819 12.0047 15.2149C12.0911 16.0785 12.3412 19.4119 12.43 20.8701C11.764 20.9339 10.8455 20.9841 10.093 21C10.0345 18.7739 10.0065 16.9648 10.0088 15.7253C9.39652 16.6367 7.40068 19.4734 6.97066 20.0544C6.58504 19.7263 5.80213 18.9152 5.48429 18.5985C6.41911 17.2975 8.24201 14.9939 9.14412 13.8957C8.24435 14.1965 4.57518 15.3266 3.53519 15.6046C3.35991 15.0418 3.11685 14.1076 3 13.5334C4.11945 13.2395 7.56661 12.4352 8.98987 12.1322C8.04103 11.5603 5.13607 9.68506 3.88574 8.81013C4.35316 8.17671 4.91872 7.48633 5.43521 6.88481C6.44015 7.60709 8.7772 9.32734 9.5718 9.92203C9.00857 7.9238 8.57388 5.88 8.13918 3.57646C8.9025 3.38437 9.67878 3.24503 10.4622 3.15949C10.6679 4.05949 11.4298 8.09468 11.6144 8.96051Z`})}},O=e=>(0,b.jsx)(`div`,{children:(0,b.jsx)(`ul`,{className:_[`icon-grid`],children:Object.keys(d).map(t=>(0,b.jsxs)(`li`,{className:c(_[`icon-grid__item`],d[t].isDeprecated&&_[`icon-grid__item--is-deprecated`]),children:[(0,b.jsx)(f,{className:_[`icon-grid__icon`],name:t,...e}),(0,b.jsx)(p,{preset:`body-xs`,children:t})]},t))})}),k={render:e=>(0,b.jsx)(O,{...e}),parameters:{layout:`padded`}},A=[`Default`,`Medium`,`Large`,`CustomColor`,`InText`,`WithChildrenSvg`,`IconGrid`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: ({
    name,
    color,
    ...rest
  }) => {
    return <Icon {...rest} color={color} name={name} />;
  },
  args: {
    name: 'close',
    purpose: 'decorative' as const
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    size: '2em'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    size: '4em'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    color: 'var(--eds-theme-color-icon-utility-critical)',
    size: '2em'
  }
}`,...T.parameters?.docs?.source},description:{story:"You can control the color of the icon using any valid CSS color values, including our token suite.\n\nIf `currentColor` for the whole container isn't sufficient,\nuse a CSS variable in `color` with the token you need, or\nstyle `fill` with Tailwind: https://v3.tailwindcss.com/docs/fill",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Text as="p">
        The svg icon defaults to the surrounding text size (
        <Icon {...args} name="add-encircled" purpose="informative" title="icon with 1em line height" />
        ; 1em) by default.
      </Text>;
  }
}`,...E.parameters?.docs?.source},description:{story:`Icons are positioned naturally in lines of text. Use the size, color, or other props
to match the recommended design and layout.

See: https://material-ui.com/components/material-icons/`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    viewBox: '0 0 24 24',
    children: <path d="M11.6144 8.96051C12.2524 7.61848 13.9514 4.56304 14.905 3C15.5557 3.28671 16.1844 3.61871 16.7863 3.99342C15.9964 5.50177 14.2272 8.6643 13.5144 9.87646C14.7414 9.45266 18.4783 8.3362 20.1657 7.89646C20.4765 8.60506 20.8294 9.55291 21 10.0815C19.0439 10.5737 15.0872 11.5078 13.699 11.8109C15.335 12.2848 17.9431 13.0914 19.8642 13.7408C19.6118 14.2352 19.0345 15.2354 18.6209 15.9122C17.034 15.3311 15.0639 14.5451 13.4794 13.8934C13.9 14.3491 16.8143 17.8329 17.5178 18.7147C17.1322 19.2023 16.4217 20.0157 15.9566 20.5101C14.6058 18.7876 13.1522 16.819 12.0047 15.2149C12.0911 16.0785 12.3412 19.4119 12.43 20.8701C11.764 20.9339 10.8455 20.9841 10.093 21C10.0345 18.7739 10.0065 16.9648 10.0088 15.7253C9.39652 16.6367 7.40068 19.4734 6.97066 20.0544C6.58504 19.7263 5.80213 18.9152 5.48429 18.5985C6.41911 17.2975 8.24201 14.9939 9.14412 13.8957C8.24435 14.1965 4.57518 15.3266 3.53519 15.6046C3.35991 15.0418 3.11685 14.1076 3 13.5334C4.11945 13.2395 7.56661 12.4352 8.98987 12.1322C8.04103 11.5603 5.13607 9.68506 3.88574 8.81013C4.35316 8.17671 4.91872 7.48633 5.43521 6.88481C6.44015 7.60709 8.7772 9.32734 9.5718 9.92203C9.00857 7.9238 8.57388 5.88 8.13918 3.57646C8.9025 3.38437 9.67878 3.24503 10.4622 3.15949C10.6679 4.05949 11.4298 8.09468 11.6144 8.96051Z" />
  }
}`,...D.parameters?.docs?.source},description:{story:`If your product needs icons not currently existing in the suite, you can introduce new
accessible icons by inserting the body of an SVG into \`Icon\`. Each resulting icon can be
treated like a standalone component, matching the recipe defined by design.`,...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <IconsInGrid {...args} />,
  parameters: {
    layout: 'padded'
  }
}`,...k.parameters?.docs?.source},description:{story:`The icon grid is not exported and is meant solely to display
a grid of icons within the system.

**NOTE**: Deprecated icons are dimmed, and will be removed in the next major release`,...k.parameters?.docs?.description}}}}))();export{T as CustomColor,S as Default,k as IconGrid,E as InText,w as Large,C as Medium,D as WithChildrenSvg,A as __namedExportsOrder,x as default};