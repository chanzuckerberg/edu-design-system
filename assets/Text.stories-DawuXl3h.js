import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./Text-DJbcQrwW.js";var a;function o(){return(o=e((()=>{a=`headline-xl.headline-lg.headline-md.headline-sm.headline-decorative-md.title-xl.title-lg.title-md.title-sm.title-xs.body-xl.body-xl-bold.body-lg.body-lg-bold.body-md.body-md-bold.body-sm.body-sm-bold.body-xs.body-xs-bold.label-xl.label-lg.label-md.label-sm.overline-lg.overline-md.overline-sm.caption-md.caption-sm.code-xl.code-lg.code-md.code-sm.code-xs`.split(`.`)})))()}var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),i(),o(),s=n(),c={title:`Components/Text`,component:r,parameters:{docs:{subtitle:"The Text component decorates `<p>`, `<span>`, and `<div>` with typographic variants."},layout:`centered`},argTypes:{children:{control:{type:`text`}}},decorators:[e=>(0,s.jsx)(`div`,{className:`m-spacing-size-2`,children:e()})],tags:[`autodocs`,`version:3.0`]},l={args:{children:`Default <Text /> rendering`}},u={render:e=>(0,s.jsx)(`div`,{children:a.map(e=>(0,s.jsx)(r,{preset:e,children:e},e))})},d={args:{preset:`caption-md`,children:`Caption medium`}},f={render:e=>(0,s.jsxs)(`div`,{children:[(0,s.jsx)(r,{...e,preset:`code-xl`,children:`Code Extra Large`}),(0,s.jsx)(r,{...e,preset:`code-lg`,children:`Code Large`}),(0,s.jsx)(r,{...e,preset:`code-md`,children:`Code Medium`}),(0,s.jsx)(r,{...e,preset:`code-sm`,children:`Code Small`}),(0,s.jsx)(r,{...e,preset:`code-xs`,children:`Code Extra Small`})]})},p={args:{preset:`body-md`,children:`You can use utility classes to override the font family used for a given size`,className:`!font-3`}},m={render:e=>(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(r,{...e,className:`text-utility-warning`,preset:`body-xl`,children:[`using `,(0,s.jsx)(`code`,{children:`text-utility-warning`}),` utility class`]}),(0,s.jsxs)(r,{...e,className:`text-utility-favorable`,preset:`body-lg`,children:[`using `,(0,s.jsx)(`code`,{children:`text-utility-favorable`}),` utility class`]}),(0,s.jsxs)(r,{...e,className:`text-utility-critical`,preset:`body-md`,children:[`using `,(0,s.jsx)(`code`,{children:`text-utility-critical`}),` utility class`]})]})},h=[`Default`,`AllPresets`,`CaptionMedium`,`CodePresets`,`OverridingFontFamily`,`UsingColorTokens`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default <Text /> rendering'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      {presets.map(preset => <Text key={preset} preset={preset}>
          {preset}
        </Text>)}
    </div>
}`,...u.parameters?.docs?.source},description:{story:"Every preset `Text` accepts. Presets that belong to a single component are not in this\nlist, and not available on `Text`: they carry that component's own treatment, so they\ncan change when the component does.",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    preset: 'caption-md',
    children: 'Caption medium'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <Text {...args} preset="code-xl">
        Code Extra Large
      </Text>
      <Text {...args} preset="code-lg">
        Code Large
      </Text>
      <Text {...args} preset="code-md">
        Code Medium
      </Text>
      <Text {...args} preset="code-sm">
        Code Small
      </Text>
      <Text {...args} preset="code-xs">
        Code Extra Small
      </Text>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    preset: 'body-md',
    children: 'You can use utility classes to override the font family used for a given size',
    className: '!font-3'
  }
}`,...p.parameters?.docs?.source},description:{story:`If a design calls for a different font family to apply to a given preset, you can use a utility class or style to override the font family value.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <Text {...args} className="text-utility-warning" preset="body-xl">
        using <code>text-utility-warning</code> utility class
      </Text>
      <Text {...args} className="text-utility-favorable" preset="body-lg">
        using <code>text-utility-favorable</code> utility class
      </Text>
      <Text {...args} className="text-utility-critical" preset="body-md">
        using <code>text-utility-critical</code> utility class
      </Text>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Here, we demonstrate how to use utility classes to augment the text.\nNote that when present, `preset` will override the deprecated props.",...m.parameters?.docs?.description}}}})))()}g();export{u as AllPresets,d as CaptionMedium,f as CodePresets,l as Default,p as OverridingFontFamily,m as UsingColorTokens,h as __namedExportsOrder,c as default};