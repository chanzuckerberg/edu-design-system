import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./iframe-84brN7F6.js";import{n as o,t as s}from"./clsx-CTwy9ux-.js";import{n as c,t as l}from"./Menu-CAuzxZjp.js";import{i as u,n as d}from"./logging-DIGRaM8w.js";import{n as f,r as p,t as m}from"./IconSlot-Chsa5gUx.js";import{n as h,r as g,t as _}from"./IconProvider-CLE0eA_m.js";import{n as v,r as y}from"./Text-DJbcQrwW.js";import{n as b,t as x}from"./semanticIconOverrides-8zHpyBoo.js";import{n as S}from"./isChromatic-3XEt0aYp.js";import{t as ee}from"./debounce-Ct9gZWRS.js";var C,w,T,E,D,O;function k(){return(k=t((()=>{C=`_breadcrumbs__list_x38zp_16`,w=`_breadcrumbs__item_x38zp_28`,T=`_breadcrumbs__separator_x38zp_71`,E=`_breadcrumbs__ellipsis_x38zp_79`,D=`_breadcrumbs__link_x38zp_95`,O={breadcrumbs__list:C,breadcrumbs__item:w,"breadcrumbs__item-back":`_breadcrumbs__item-back_x38zp_61`,breadcrumbs__separator:T,breadcrumbs__ellipsis:E,breadcrumbs__link:D,"breadcrumbs__back-icon":`_breadcrumbs__back-icon_x38zp_155`}})))()}function A(e){return M.Children.toArray(e).reduce((e,t)=>t.type===M.Fragment?e.concat(A(t.props.children)):(e.push(t),e),[])}var j,M,N,P,F,I,L,R;function z(){return(z=t((()=>{o(),j=e(ee()),M=e(n()),u(),p(),h(),c(),y(),k(),N=r(),P=(0,M.createContext)({}),F=({"aria-label":e=`breadcrumbs links`,className:t,children:n,id:r,separator:i,...a})=>{let[o,s]=M.useState(!1),c=M.useRef(null);M.useEffect(()=>{let e=()=>{let e=c.current?c.current.clientWidth<c.current.scrollWidth:!1;s(e)},t=(0,j.default)(e,200);return e(),window.addEventListener(`resize`,t),()=>{window.removeEventListener(`resize`,t)}},[]);let u=I(n),d=u.length>1?M.cloneElement(u[u.length-2],{variant:`back`}):null,f=u.slice(1,u.length-1).map((e,t)=>{let n=e;return(0,N.jsx)(l.Item,{href:n.props.href,leadingContent:`link`,children:n.props.text},`breadcrumb-menu-item-${t}`)});return(0,N.jsx)(P.Provider,{value:{separator:i},children:(0,N.jsx)(`nav`,{"aria-label":e,className:t,id:r,...a,children:(0,N.jsxs)(`ul`,{className:O.breadcrumbs__list,ref:c,children:[d,o&&u.length>2?(0,N.jsxs)(N.Fragment,{children:[u[0],(0,N.jsx)(R,{href:null,menuItems:f,separator:i,variant:`collapsed`}),u[u.length-1]]}):u]})})})},I=e=>{let t=A(e);return t.some(e=>e.type!==R&&e.type!==F.Item),t},L=e=>{let{separator:t}=(0,M.useContext)(P);return(0,N.jsx)(R,{separator:t,...e})},R=e=>{let{className:t,href:n,menuItems:r,separator:i=`/`,text:a,variant:o,icon:c,...u}=e;d(`Breadcrumbs.Item`,`icon`,`back`,c);let p=g(`back`),h=s(O.breadcrumbs__item,o===`back`&&O[`breadcrumbs__item-back`],t),_=s(O.breadcrumbs__link,O.breadcrumbs__ellipsis),y=()=>o===`collapsed`?(0,N.jsxs)(l,{children:[(0,N.jsx)(l.PlainButton,{"aria-label":`Show more breadcrumbs`,className:_,children:`…`}),(0,N.jsx)(l.Items,{children:r})]}):o===`back`?(0,N.jsx)(`a`,{"aria-label":a||`Back`,className:O.breadcrumbs__link,href:n,children:f(p)&&(0,N.jsx)(m,{className:O[`breadcrumbs__back-icon`],content:p,purpose:`decorative`})}):(0,N.jsx)(`a`,{className:O.breadcrumbs__link,href:n,children:a});return(0,N.jsxs)(`li`,{className:h,...u,children:[y(),(0,N.jsx)(v,{"aria-hidden":!0,as:`span`,className:O.breadcrumbs__separator,children:i})]})},F.displayName=`Breadcrumbs`,L.displayName=`Breadcrumbs.Item`,F.Item=L;try{A.displayName=`Breadcrumbs`,A.__docgenInfo={description:``,displayName:`Breadcrumbs`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,methods:[],props:{},tags:{}}}catch{}try{F.Item.displayName=`Breadcrumbs.Item`,F.Item.__docgenInfo={description:``,displayName:`Breadcrumbs.Item`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},href:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,name:`TypeLiteral`}],description:`URL for the breadcrumbs item.
Required since breadcrumbs should reroute user.
Null case is used for the collapsed variant, which uses Menu Items which has hrefs.`,name:`href`,required:!0,tags:{},type:{name:`string | null`}},menuItems:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,name:`TypeLiteral`}],description:`URLs for the collapsed breadcrumbs variant.
Should be <Menu.Item href={href}>{text}</Menu.Item>.`,name:`menuItems`,required:!1,tags:{},type:{name:`ReactNode[]`}},separator:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,name:`TypeLiteral`}],description:`Custom string separator after current breadcrumb item.
Defaults to '/'`,name:`separator`,required:!1,tags:{},type:{name:`enum`,raw:`Separators`,value:[{value:`"|"`},{value:`">"`},{value:`"/"`}]}},text:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,name:`TypeLiteral`}],description:`Breadcrumbs item text.`,name:`text`,required:!1,tags:{},type:{name:`string`}},variant:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,name:`TypeLiteral`}],description:`Behavior variations for the breadcrumbs item.
- **back** - results in a left facing icon, usually denoting the second last breadcrumb item in a mobile breakpoint.
- **collapsed** - results in an ellipsis, where interaction spawns a Menu containing more links.`,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"back" | "collapsed"`,value:[{value:`"back"`},{value:`"collapsed"`}]}}},tags:{}}}catch{}})))()}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{n(),z(),b(),a(),h(),B=r(),{userEvent:V,within:H}=__STORYBOOK_MODULE_TEST__,U={title:`Components/Breadcrumbs`,component:F,args:{children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(F.Item,{href:`#`,text:`Home`}),(0,B.jsx)(F.Item,{href:`#`,text:`Child`}),(0,B.jsx)(F.Item,{href:`#`,text:`Grandchild`})]})},parameters:{docs:{subtitle:`List of links showing the user where they are in the system and allowing them to navigate to parent pages.`},layout:`centered`},argTypes:{children:{control:!1}},decorators:[e=>(0,B.jsx)(`div`,{className:`m-spacing-size-1`,children:e()})],tags:[`autodocs`,`version:2.0`]},W={},G={args:{children:(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 1`})}},K={args:{children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 1`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 2`})]})}},q={args:{children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(F.Item,{href:`#`,text:`Parent`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 1`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 2`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 3`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 4`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 5`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 6`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 7`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 8`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 9`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 10`})]})}},J={args:{children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(F.Item,{href:`#`,text:`Home`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 1`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 2 Lorem ipsum dolor sit amet, no overflow is two lines at 320px`}),(0,B.jsx)(F.Item,{href:`#`,text:`Breadcrumb 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, no overflow is 3 lines at 320px`})]})},parameters:{chromatic:{viewports:[i.googlePixel2,i.ipadMini,i.chromebook]},layout:`padded`}},Y={args:{...J.args,separator:`>`},parameters:{...J.parameters,layout:`padded`}},X={args:{...J.args},decorators:[e=>(0,B.jsx)(`div`,{className:`pb-28`,children:e()})],parameters:{chromatic:{viewports:[i.ipadMini],diffThreshold:.75,delay:100},a11y:{test:`off`},snapshot:{skip:!0},layout:`padded`},play:async({canvasElement:e})=>{let t=H(e);if(S()){let e=await t.findByRole(`button`);await V.click(e)}},globals:{viewport:{value:`ipadMini`,isRotated:!1}}},Z={decorators:[e=>(0,B.jsx)(_,{icons:x,children:e()})],globals:{viewport:{value:`googlePixel2`,isRotated:!1}}},Q=[`Default`,`OneCrumb`,`TwoCrumbs`,`LongList`,`LongText`,`LongTextCustomSeparator`,`LongTextMenu`,`WithProvidedIcons`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Breadcrumbs.Item href="#" text="Breadcrumb 1" />
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Breadcrumbs.Item href="#" text="Breadcrumb 1" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 2" />
      </>
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Breadcrumbs.Item href="#" text="Parent" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 1" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 2" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 3" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 4" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 5" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 6" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 7" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 8" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 9" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 10" />
      </>
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Breadcrumbs.Item href="#" text="Home" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 1" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 2 Lorem ipsum dolor sit amet, no overflow is two lines at 320px" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, no overflow is 3 lines at 320px" />
      </>
  },
  parameters: {
    chromatic: {
      viewports: [chromaticViewports.googlePixel2, chromaticViewports.ipadMini, chromaticViewports.chromebook]
    },
    layout: 'padded'
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...LongText.args,
    separator: '>'
  },
  parameters: {
    ...LongText.parameters,
    layout: 'padded'
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ...LongText.args
  },
  decorators: [Story => <div className="pb-28">{Story()}</div>],
  parameters: {
    chromatic: {
      viewports: [chromaticViewports.ipadMini],
      diffThreshold: 0.75,
      delay: 100
    },
    a11y: {
      test: 'off'
    },
    snapshot: {
      skip: true
    },
    layout: 'padded'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    if (isChromatic()) {
      const dropdownMenuTrigger = await canvas.findByRole('button');
      await userEvent.click(dropdownMenuTrigger);
    }
  },
  globals: {
    viewport: {
      value: 'ipadMini',
      isRotated: false
    }
  }
}`,...X.parameters?.docs?.source},description:{story:`Mostly for visual regression testing.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>],
  globals: {
    viewport: {
      value: 'googlePixel2',
      isRotated: false
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`The back arrow replaces the trail below the \`md\` breakpoint, so this one is shown at a
phone width where it is visible. It marks "up one level", which is a role, so it comes from
\`IconProvider\` rather than from a prop on the item.

Here it becomes a full arrow instead of a chevron.`,...Z.parameters?.docs?.description}}}})))()}$();export{W as Default,q as LongList,J as LongText,Y as LongTextCustomSeparator,X as LongTextMenu,G as OneCrumb,K as TwoCrumbs,Z as WithProvidedIcons,Q as __namedExportsOrder,U as default};