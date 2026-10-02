import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n,n as r,t as i}from"./iframe-CxYcUItw.js";import{n as a,t as o}from"./clsx-CU3OJm-u.js";import{i as s,t as c}from"./logging-rNM_k4ml.js";import{t as l}from"./Link-CsSjfkrQ.js";import{t as u}from"./Link-CigzUnLI.js";import{n as d}from"./Text-s7d_e173.js";import{t as f}from"./Text-4jUaZiwM.js";var p,m=e((()=>{p={"app-footer":`_app-footer_1syif_8`,"app-footer--emphasis-low":`_app-footer--emphasis-low_1syif_13`,"app-footer--emphasis-high":`_app-footer--emphasis-high_1syif_18`,"app-footer__home-link":`_app-footer__home-link_1syif_23`,"app-footer__title":`_app-footer__title_1syif_38`,"app-footer__wrapper":`_app-footer__wrapper_1syif_45`,"app-footer__copyright":`_app-footer__copyright_1syif_71`,"app-footer__colophon":`_app-footer__colophon_1syif_75`,"app-footer__nav-items":`_app-footer__nav-items_1syif_94`,"app-footer__nav-item":`_app-footer__nav-item_1syif_94`}})),h,g,_=e((()=>{a(),n(),s(),u(),f(),m(),h=t(),g=({className:e,copyright:t,emphasis:n=`high`,href:r,navItems:i,onLinkClick:a,title:s,...u})=>(0,h.jsx)(`footer`,{className:o(p[`app-footer`],n&&p[`app-footer--emphasis-${n}`],e),...u,children:(0,h.jsxs)(`div`,{className:p[`app-footer__wrapper`],children:[(s||t)&&(0,h.jsxs)(`div`,{className:p[`app-footer__colophon`],children:[r?typeof s==`string`?(0,h.jsx)(l,{context:`standalone`,emphasis:`low`,href:r,onClick:e=>{a&&a(e,{name:`EDS-footer-logo`,type:`link`,href:r})},size:`xs`,variant:n===`low`?void 0:`inverse`,children:s}):(0,h.jsx)(`a`,{"aria-label":`homepage`,className:p[`app-footer__home-link`],href:r,onClick:e=>{a&&a(e,{name:`EDS-footer-logo`,type:`link`,href:r})},children:(0,h.jsx)(`div`,{className:p[`app-footer__title`],children:s})}):(0,h.jsx)(`div`,{className:p[`app-footer__title`],children:s}),t&&(0,h.jsx)(d,{as:`div`,className:p[`app-footer__copyright`],preset:`body-xs`,children:t})]}),(0,h.jsx)(`menu`,{className:p[`app-footer__nav-items`],children:i?.map(e=>{switch(e.type){case`link`:return(0,h.jsx)(`li`,{className:p[`app-footer__nav-item`],children:(0,h.jsx)(l,{context:`standalone`,emphasis:`low`,href:e.href,onClick:t=>{a&&a(t,e)},size:`xs`,variant:n===`low`?void 0:`inverse`,children:e.name})},e.name);default:return c([!0],`Problem with navItem data in footer: ${JSON.stringify(e)}`,`error`),(0,h.jsx)(`li`,{className:p[`app-footer__nav-item`],children:(0,h.jsx)(d,{as:`span`,preset:`body-xs`,children:`N/A`})},`error-unknown-nav-item-type-${e.name}`)}})})]})});try{g.displayName=`AppFooter`,g.__docgenInfo={description:`## Usage

A footer is a navigation component. It can hold links, buttons, company info, copyrights, forms, and many other elements.

### Best Practices

* Provide 3-5 important links, along with copyright information, for the footer content.
* Logos should be no wider than ~300px, and no taller than ~150px.

## Interaction

The links and content can guide users to other pages within the application, or to the marketing pages for the organization.

## Content & Accessibility

### Do's

* Include links with brief text.
* Include at most one logo, pointing to either the home page for the organization, or the application.

### Don'ts

* Don't use overly verbose text for any link; keep them to 1-3 words each.
* Don't use the AppFooter when working on a Single-page Application (SPA).
* Don't use a logo for any logged-in experience. Logos in \`AppFooter\` are just for
  landing/marketing pages.

## Resources

* https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/footer
* https://www.nngroup.com/articles/footers/`,displayName:`AppFooter`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/AppFooter/AppFooter.tsx`,methods:[],props:{href:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppFooter/AppFooter.tsx`,name:`TypeLiteral`}],description:`Web location for the home page. Use this to direct where the main page of the application lives.`,name:`href`,required:!1,tags:{},type:{name:`string`}},navItems:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppFooter/AppFooter.tsx`,name:`TypeLiteral`}],description:`Sets of navigation targets in the footer. Consider using four at maximum.`,name:`navItems`,required:!0,tags:{},type:{name:`NavLink[]`}},onLinkClick:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppFooter/AppFooter.tsx`,name:`TypeLiteral`}],description:"Handle the click event for a given clickable link nav item in the footer. Includes the data from the associated/clicked `NavItem` for reference\n(e.g., attaching events, tracking, etc.)",name:`onLinkClick`,required:!1,tags:{},type:{name:`AppFooterEventHandler`}},style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppFooter/AppFooter.tsx`,name:`TypeLiteral`}],description:"CSS properties defined for the HTML element. Includes the component's CSS Custom Properties:\n\n- `--app-footer__bg`\n- `--app-footer__fg`",name:`style`,required:!1,tags:{},type:{name:`AppFooterCSSProperties`}},copyright:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppFooter/AppFooter.tsx`,name:`TypeLiteral`}],description:'Text slot for specifying the copyright information (e.g., "Copyright © ${YEAR}")',name:`copyright`,required:!1,tags:{},type:{name:`string`}},emphasis:{defaultValue:{value:`high`},declarations:[{fileName:`edu-design-system/src/components/AppFooter/AppFooter.tsx`,name:`TypeLiteral`}],description:`Determine the amount of emphasis applied to the component, e.g., low or high.

**Default is \`"high"\`**.`,name:`emphasis`,required:!1,tags:{},type:{name:`enum`,raw:`Emphasis`,value:[{value:`"low"`},{value:`"high"`}]}},title:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppFooter/AppFooter.tsx`,name:`TypeLiteral`}],description:`Element used for the application's logo (can be text or an image)`,name:`title`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})),v,y,b,x,S,C,w,T,E,D,O;e((()=>{n(),_(),r(),v=t(),y={title:`Components/AppFooter`,component:g,parameters:{docs:{subtitle:`The persistent navigation element that appears at the bottom of a page, which provides sitemap links, space for a logo, and quick access to key actions and information. It anchors the user experience by ensuring consistent access to core functionality across all pages, which largely point to other company-wide resources. It also serves as the <footer> for accessibility landmarks.`},chromatic:{viewports:[i.googlePixel2,i.ipadMini,i.chromebook]}},args:{title:(0,v.jsx)(`div`,{className:`fpo h-[40px] w-[176px]`,children:`Logo goes here`}),navItems:[{type:`link`,name:`Support`,href:`#support`},{type:`link`,name:`Terms of Use`,href:`#tos`},{type:`link`,name:`Privacy Policy`,href:`#privacy`},{type:`link`,name:`Community Guidelines`,href:`#guidelines`}]},tags:[`autodocs`,`beta`,`version:2.0.0`]},b={args:{}},x={args:{title:`Logo Ipsum, Inc.`}},S={args:{copyright:`Copyright © 2026`}},C={args:{...S.args,href:`http://example.org/`}},w={args:{...x.args,...C.args}},T={args:{...b.args,title:void 0,emphasis:`low`}},E={args:{...S.args,emphasis:`high`}},D={args:{...S.args,style:{"--app-footer__bg":`rebeccapurple`,"--app-footer__fg":`papayawhip`}}},O=[`Default`,`WithTextLogo`,`WithCopyright`,`WithFooterLink`,`WithTextLogoAndCopyright`,`LowEmphasis`,`HighEmphasis`,`CustomColors`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Logo Ipsum, Inc.'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    copyright: 'Copyright © 2026'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithCopyright.args,
    href: 'http://example.org/'
  }
}`,...C.parameters?.docs?.source},description:{story:"Footers using the `href` prop get a link on the logo/text.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithTextLogo.args,
    ...WithFooterLink.args
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: undefined,
    emphasis: 'low'
  }
}`,...T.parameters?.docs?.source},description:{story:`When using the low emphasis footer, make sure not to include any logo or copyright elements.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithCopyright.args,
    emphasis: 'high'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithCopyright.args,
    style: {
      '--app-footer__bg': 'rebeccapurple',
      '--app-footer__fg': 'papayawhip'
    }
  }
}`,...D.parameters?.docs?.source},description:{story:"Each emphasis sets its own colors, and `--app-footer__bg` / `--app-footer__fg` override those\nfor either one. Pass them through the `style` prop.\n\nReach for a theme token in real usage. The literal colors here are only to make the point\nunmistakable: neither emphasis uses them, so the footer below is colored by the override\nrather than by its emphasis.",...D.parameters?.docs?.description}}}}))();export{D as CustomColors,b as Default,E as HighEmphasis,T as LowEmphasis,S as WithCopyright,C as WithFooterLink,x as WithTextLogo,w as WithTextLogoAndCopyright,O as __namedExportsOrder,y as default};