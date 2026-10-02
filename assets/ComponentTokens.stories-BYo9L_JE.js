import{a as e,n as t,t as n}from"./chunk-DnJy8xQt.js";import{M as r,W as i,c as a,g as o,h as s,m as c,p as l}from"./iframe-CxYcUItw.js";import{i as u,n as d,r as f,t as p}from"./TokenList-0qXVm1TI.js";import{n as m,t as h}from"./_createCompounder-CZHYIUxm.js";var g=n(((e,t)=>{function n(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}t.exports=n})),_=n(((e,t)=>{var n=g();function r(e,t,r){var i=e.length;return r=r===void 0?i:r,!t&&r>=i?e:n(e,t,r)}t.exports=r})),v=n(((e,t)=>{var n=RegExp(`[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]`);function r(e){return n.test(e)}t.exports=r})),y=n(((e,t)=>{function n(e){return e.split(``)}t.exports=n})),b=n(((e,t)=>{var n=`\\ud800-\\udfff`,r=`\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`,i=`\\ufe0e\\ufe0f`,a=`[`+n+`]`,o=`[`+r+`]`,s=`\\ud83c[\\udffb-\\udfff]`,c=`(?:`+o+`|`+s+`)`,l=`[^`+n+`]`,u=`(?:\\ud83c[\\udde6-\\uddff]){2}`,d=`[\\ud800-\\udbff][\\udc00-\\udfff]`,f=`\\u200d`,p=c+`?`,m=`[`+i+`]?`,h=`(?:`+f+`(?:`+[l,u,d].join(`|`)+`)`+m+p+`)*`,g=m+p+h,_=`(?:`+[l+o+`?`,o,u,d,a].join(`|`)+`)`,v=RegExp(s+`(?=`+s+`)|`+_+g,`g`);function y(e){return e.match(v)||[]}t.exports=y})),x=n(((e,t)=>{var n=y(),r=v(),i=b();function a(e){return r(e)?i(e):n(e)}t.exports=a})),S=n(((e,t)=>{var n=_(),r=v(),i=x(),a=m();function o(e){return function(t){t=a(t);var o=r(t)?i(t):void 0,s=o?o[0]:t.charAt(0),c=o?n(o,1).join(``):t.slice(1);return s[e]()+c}}t.exports=o})),C=n(((e,t)=>{t.exports=S()(`toUpperCase`)})),w=n(((e,t)=>{var n=m(),r=C();function i(e){return r(n(e).toLowerCase())}t.exports=i})),T=n(((e,t)=>{var n=w();t.exports=h()(function(e,t,r){return t=t.toLowerCase(),e+(r?n(t):t)})})),E,D,O,k,A,j;t((()=>{o(),E=e(T()),i(),u(),D=r(),O={title:`Design Tokens/(3) Component`,component:p,parameters:{chromatic:{diffThreshold:.75,delay:100},controls:{disable:!0},docs:{description:{component:`This page documents all of the component-specific token values, mapped to semantic tokens. These tokens are meant to be used inside internal EDS components, but can be used sparingly for any custom elements that match the named ccomponent.`},page:()=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(s,{}),(0,D.jsx)(c,{}),(0,D.jsx)(a,{}),(0,D.jsx)(l,{})]})},a11y:{test:`off`}}},k={args:{caption:`Icon Utility Tokens`,listItems:f(`eds-theme-color-icon-utility`,`color`,(e,t,n)=>t===`figma`?`→ icon/utility/`+d(e,n):`icon-utility-`+d(e,n))}},A={args:{caption:`Background DataTable Tokens`,listItems:f(`eds-theme-color-background-datatable`,`color`,(e,t,n)=>{let r=(0,E.default)(d(e,n));return t===`figma`?`→ background/datatable-`+r:`bg-datatable-`+r})}},j=[`IconUtility`,`BackgroundDataTable`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Icon Utility Tokens',
    listItems: getTokenListItems('eds-theme-color-icon-utility', 'color', (name, column, filterTerm) => {
      if (column === 'figma') {
        return '→ icon/utility/' + getSpecifier(name, filterTerm);
      } else {
        return 'icon-utility-' + getSpecifier(name, filterTerm);
      }
    })
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Background DataTable Tokens',
    listItems: getTokenListItems('eds-theme-color-background-datatable', 'color', (name, column, filterTerm) => {
      const varName = camelCase(getSpecifier(name, filterTerm));
      if (column === 'figma') {
        return '→ background/datatable-' + varName;
      } else {
        return 'bg-datatable-' + varName;
      }
    })
  }
}`,...A.parameters?.docs?.source}}}}))();export{A as BackgroundDataTable,k as IconUtility,j as __namedExportsOrder,O as default};