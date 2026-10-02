import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r,n as i,t as a}from"./iframe-CxYcUItw.js";import{n as o,t as s}from"./clsx-CU3OJm-u.js";import{i as c,n as l}from"./logging-rNM_k4ml.js";import{a as u,i as d,n as f,o as p,t as m}from"./Icon-DJYKhM6X.js";import{n as h}from"./Text-s7d_e173.js";import{t as g}from"./Text-4jUaZiwM.js";import{t as _}from"./Menu-JUw5tcxL.js";import{t as v}from"./Menu-DngLwsWN.js";import{t as y}from"./debounce-sqAUfviD.js";import{n as b,t as x}from"./semanticIconOverrides-CAkf2_aJ.js";import{n as S,t as C}from"./isChromatic-m-T4_eoU.js";var w,T,E,D,O,k,A=t((()=>{w=`_breadcrumbs__list_x38zp_16`,T=`_breadcrumbs__item_x38zp_28`,E=`_breadcrumbs__separator_x38zp_71`,D=`_breadcrumbs__ellipsis_x38zp_79`,O=`_breadcrumbs__link_x38zp_95`,k={breadcrumbs__list:w,breadcrumbs__item:T,"breadcrumbs__item-back":`_breadcrumbs__item-back_x38zp_61`,breadcrumbs__separator:E,breadcrumbs__ellipsis:D,breadcrumbs__link:O,"breadcrumbs__back-icon":`_breadcrumbs__back-icon_x38zp_155`}}));function j(e){return N.Children.toArray(e).reduce((e,t)=>t.type===N.Fragment?e.concat(j(t.props.children)):(e.push(t),e),[])}var M,N,P,F,I,L,R,z,B=t((()=>{o(),M=e(y()),N=e(r()),c(),m(),v(),g(),A(),P=n(),F=(0,N.createContext)({}),I=({"aria-label":e=`breadcrumbs links`,className:t,children:n,id:r,separator:i,...a})=>{let[o,c]=N.useState(!1),l=N.useRef(null);N.useEffect(()=>{let e=()=>{c(l.current?l.current.clientWidth<l.current.scrollWidth:!1)},t=(0,M.default)(e,200);return e(),window.addEventListener(`resize`,t),()=>{window.removeEventListener(`resize`,t)}},[]);let u=L(n),d=u.length>1?N.cloneElement(u[u.length-2],{variant:`back`}):null,f=u.slice(1,u.length-1).map((e,t)=>{let n=e;return(0,P.jsx)(_.Item,{href:n.props.href,leadingContent:`link`,children:n.props.text},`breadcrumb-menu-item-${t}`)}),p=s(k.breadcrumbs,t);return(0,P.jsx)(F.Provider,{value:{separator:i},children:(0,P.jsx)(`nav`,{"aria-label":e,className:p,id:r,...a,children:(0,P.jsxs)(`ul`,{className:k.breadcrumbs__list,ref:l,children:[d,o&&u.length>2?(0,P.jsxs)(P.Fragment,{children:[u[0],(0,P.jsx)(z,{href:null,menuItems:f,separator:i,variant:`collapsed`}),u[u.length-1]]}):u]})})})},L=e=>{let t=j(e);return t.some(e=>!(e.type===z||e.type===I.Item)),t},R=e=>{let{separator:t}=(0,N.useContext)(F);return(0,P.jsx)(z,{separator:t,...e})},z=e=>{let{className:t,href:n,menuItems:r,separator:i=`/`,text:a,variant:o,icon:c,...f}=e;l(`Breadcrumbs.Item`,`icon`,`back`,c);let m=d(`back`),g=s(k.breadcrumbs__item,o===`back`&&k[`breadcrumbs__item-back`],t),v=s(k.breadcrumbs__link,k.breadcrumbs__ellipsis),y=()=>o===`collapsed`?(0,P.jsxs)(_,{children:[(0,P.jsx)(_.PlainButton,{"aria-label":`Show more breadcrumbs`,className:v,children:`…`}),(0,P.jsx)(_.Items,{children:r})]}):o===`back`?(0,P.jsx)(`a`,{"aria-label":a||`Back`,className:k.breadcrumbs__link,href:n,children:p(m)&&(0,P.jsx)(u,{className:k[`breadcrumbs__back-icon`],content:m,purpose:`decorative`})}):(0,P.jsx)(`a`,{className:k.breadcrumbs__link,href:n,children:a});return(0,P.jsxs)(`li`,{className:g,...f,children:[y(),(0,P.jsx)(h,{"aria-hidden":!0,as:`span`,className:k.breadcrumbs__separator,children:i})]})},I.displayName=`Breadcrumbs`,R.displayName=`Breadcrumbs.Item`,I.Item=R;try{j.displayName=`Breadcrumbs`,j.__docgenInfo={description:``,displayName:`Breadcrumbs`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,methods:[],props:{},tags:{}}}catch{}try{I.Item.displayName=`Breadcrumbs.Item`,I.Item.__docgenInfo={description:``,displayName:`Breadcrumbs.Item`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},href:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,name:`TypeLiteral`}],description:`URL for the breadcrumbs item.
Required since breadcrumbs should reroute user.
Null case is used for the collapsed variant, which uses Menu Items which has hrefs.`,name:`href`,required:!0,tags:{},type:{name:`string | null`}},menuItems:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,name:`TypeLiteral`}],description:`URLs for the collapsed breadcrumbs variant.
Should be <Menu.Item href={href}>{text}</Menu.Item>.`,name:`menuItems`,required:!1,tags:{},type:{name:`ReactNode[]`}},separator:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,name:`TypeLiteral`}],description:`Custom string separator after current breadcrumb item.
Defaults to '/'`,name:`separator`,required:!1,tags:{},type:{name:`enum`,raw:`Separators`,value:[{value:`"|"`},{value:`">"`},{value:`"/"`}]}},text:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,name:`TypeLiteral`}],description:`Breadcrumbs item text.`,name:`text`,required:!1,tags:{},type:{name:`string`}},variant:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Breadcrumbs/Breadcrumbs.tsx`,name:`TypeLiteral`}],description:`Behavior variations for the breadcrumbs item.
- **back** - results in a left facing icon, usually denoting the second last breadcrumb item in a mobile breakpoint.
- **collapsed** - results in an ellipsis, where interaction spawns a Menu containing more links.`,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"back" | "collapsed"`,value:[{value:`"back"`},{value:`"collapsed"`}]}}},tags:{}}}catch{}})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{C(),r(),B(),b(),i(),m(),V=n(),{userEvent:H,within:U}=__STORYBOOK_MODULE_TEST__,W={title:`Components/Breadcrumbs`,component:I,args:{children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(I.Item,{href:`#`,text:`Home`}),(0,V.jsx)(I.Item,{href:`#`,text:`Child`}),(0,V.jsx)(I.Item,{href:`#`,text:`Grandchild`})]})},parameters:{docs:{subtitle:`List of links showing the user where they are in the system and allowing them to navigate to parent pages.`},layout:`centered`},argTypes:{children:{control:!1}},decorators:[e=>(0,V.jsx)(`div`,{className:`m-spacing-size-1`,children:e()})],tags:[`autodocs`,`version:2.0`]},G={},K={args:{children:(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 1`})}},q={args:{children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 1`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 2`})]})}},J={args:{children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(I.Item,{href:`#`,text:`Parent`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 1`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 2`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 3`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 4`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 5`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 6`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 7`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 8`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 9`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 10`})]})}},Y={args:{children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(I.Item,{href:`#`,text:`Home`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 1`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 2 Lorem ipsum dolor sit amet, no overflow is two lines at 320px`}),(0,V.jsx)(I.Item,{href:`#`,text:`Breadcrumb 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, no overflow is 3 lines at 320px`})]})},parameters:{chromatic:{viewports:[a.googlePixel2,a.ipadMini,a.chromebook]},layout:`padded`}},X={args:{...Y.args,separator:`>`},parameters:{...Y.parameters,layout:`padded`}},Z={args:{...Y.args},decorators:[e=>(0,V.jsx)(`div`,{className:`pb-28`,children:e()})],parameters:{chromatic:{viewports:[a.ipadMini],diffThreshold:.75,delay:100},a11y:{test:`off`},snapshot:{skip:!0},layout:`padded`},play:async({canvasElement:e})=>{let t=U(e);if(S()){let e=await t.findByRole(`button`);await H.click(e)}},globals:{viewport:{value:`ipadMini`,isRotated:!1}}},Q={decorators:[e=>(0,V.jsx)(f,{icons:x,children:e()})],globals:{viewport:{value:`googlePixel2`,isRotated:!1}}},$=[`Default`,`OneCrumb`,`TwoCrumbs`,`LongList`,`LongText`,`LongTextCustomSeparator`,`LongTextMenu`,`WithProvidedIcons`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Breadcrumbs.Item href="#" text="Breadcrumb 1" />
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Breadcrumbs.Item href="#" text="Breadcrumb 1" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 2" />
      </>
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ...LongText.args,
    separator: '>'
  },
  parameters: {
    ...LongText.parameters,
    layout: 'padded'
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Mostly for visual regression testing.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>],
  globals: {
    viewport: {
      value: 'googlePixel2',
      isRotated: false
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`The back arrow replaces the trail below the \`md\` breakpoint, so this one is shown at a
phone width where it is visible. It marks "up one level", which is a role, so it comes from
\`IconProvider\` rather than from a prop on the item.

Here it becomes a full arrow instead of a chevron.`,...Q.parameters?.docs?.description}}}}))();export{G as Default,J as LongList,Y as LongText,X as LongTextCustomSeparator,Z as LongTextMenu,K as OneCrumb,q as TwoCrumbs,Q as WithProvidedIcons,$ as __namedExportsOrder,W as default};