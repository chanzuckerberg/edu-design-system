import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./react-dom-BHZR6v6Q.js";import{n as a,r as o}from"./iframe-84brN7F6.js";import{n as s,t as c}from"./clsx-CTwy9ux-.js";import{i as l,n as u,r as d,t as f}from"./Menu-CAuzxZjp.js";import{i as p,t as m}from"./logging-DIGRaM8w.js";import{n as h,t as g}from"./Icon-BnY9HHXV.js";import{n as _,r as ee,t as v}from"./IconSlot-Chsa5gUx.js";import{n as y,r as b,t as te}from"./IconProvider-CLE0eA_m.js";import{n as x,r as ne,t as S}from"./Text-DJbcQrwW.js";import{n as re,t as ie}from"./semanticIconOverrides-8zHpyBoo.js";import{n as C}from"./isChromatic-3XEt0aYp.js";import{n as ae,t as oe}from"./Avatar-BXAV-gzG.js";import{n as se,t as ce}from"./Button-Byx35aD3.js";import{n as le,t as w}from"./Hr-BnOZxqdG.js";import{n as ue,t as de}from"./PopoverContainer-BooOHzBJ.js";var T;function fe(){return(fe=t((()=>{T={"app-header":`_app-header_oxp2l_9`,"app-header--style-docked":`_app-header--style-docked_oxp2l_21`,"app-header--style-floating":`_app-header--style-floating_oxp2l_27`,"app-header--orientation-horizontal":`_app-header--orientation-horizontal_oxp2l_34`,"app-header__nav-groups":`_app-header__nav-groups_oxp2l_49`,"app-header__content":`_app-header__content_oxp2l_59`,"app-header--orientation-vertical":`_app-header--orientation-vertical_oxp2l_72`,"app-header__nav-group":`_app-header__nav-group_oxp2l_49`,"app-header__home-link":`_app-header__home-link_oxp2l_104`,"app-header-title__title":`_app-header-title__title_oxp2l_111`,"app-header__menu":`_app-header__menu_oxp2l_126`,"app-header__drawer":`_app-header__drawer_oxp2l_135`,"app-header__drawer-button":`_app-header__drawer-button_oxp2l_164`,"app-header__drawer-button-instance":`_app-header__drawer-button-instance_oxp2l_168`,"app-header__nav-item":`_app-header__nav-item_oxp2l_176`,"app-header__nav-item--link":`_app-header__nav-item--link_oxp2l_193`,"app-header__nav-item--button":`_app-header__nav-item--button_oxp2l_194`,"app-header__nav-items":`_app-header__nav-items_oxp2l_208`,"app-header__nav-items--absolute":`_app-header__nav-items--absolute_oxp2l_212`,"app-header__nav-item--icon-layout-left":`_app-header__nav-item--icon-layout-left_oxp2l_218`,"app-header__nav-item--icon-layout-right":`_app-header__nav-item--icon-layout-right_oxp2l_222`,"app-header__menu-trigger":`_app-header__menu-trigger_oxp2l_244`,"app-header-title":`_app-header-title_oxp2l_111`,"app-header-title--has-logo":`_app-header-title--has-logo_oxp2l_265`,"app-header-title__sub-title":`_app-header-title__sub-title_oxp2l_274`,"drawer-content":`_drawer-content_oxp2l_282`,"app-header__nav-item--is-current":`_app-header__nav-item--is-current_oxp2l_320`,"drawer-content__nav-group":`_drawer-content__nav-group_oxp2l_339`,"drawer-content__nav-group-item":`_drawer-content__nav-group-item_oxp2l_347`,"drawer-content__nav-group-item--type-separator":`_drawer-content__nav-group-item--type-separator_oxp2l_351`,"drawer-content__header-container":`_drawer-content__header-container_oxp2l_357`,"app-header_nav-item-label":`_app-header_nav-item-label_oxp2l_378`,"drawer-content__nav-group-item--type-menu":`_drawer-content__nav-group-item--type-menu_oxp2l_391`,"app-header__nav-item--separator":`_app-header__nav-item--separator_oxp2l_408`}})))()}function pe(e){return window.innerWidth>parseInt(he[`eds-bp-sm`],10)&&e||`horizontal`}function E(e){let{navItem:t}=e,n=null;return t.leadingContent===`avatar`?n=(0,A.jsx)(oe,{size:`sm`,user:t.user}):t.leadingContent&&(n=(0,A.jsx)(g,{name:t.leadingContent,purpose:`decorative`,size:`24px`})),n}function D(e){let{navItem:t}=e,n=null;return t.trailingContent&&(n=(0,A.jsx)(g,{name:t.trailingContent,purpose:`decorative`,size:`24px`})),n}function O(e,t,n){t.shouldClose!==void 0&&(t.shouldClose?n():e.preventDefault())}var k,me,A,he,j,M,N,ge,P,F,I;function _e(){return(_e=t((()=>{d(),s(),k=e(n()),me=i(),p(),ae(),se(),le(),h(),ee(),y(),u(),ue(),ne(),fe(),A=r(),he={"eds-bp-xs":`0px`,"eds-bp-sm":`600px`,"eds-bp-md":`768px`,"eds-bp-lg":`1040px`,"eds-bp-xl":`1440px`,"eds-bp-xxl":`1920px`},j=(0,k.createContext)({orientation:`horizontal`,href:`#`}),M=({className:e,href:t,navGroups:n,onButtonClick:r,onLinkClick:i,orientation:a,style:o=`docked`,subTitle:s,title:l,...u})=>{let[d,f]=(0,k.useState)(null),p=c(T[`app-header`],d&&T[`app-header--orientation-${d}`],o&&T[`app-header--style-${o}`],e),m=c(o&&T[`app-header--style-${o}`],T[`app-header__drawer`]),h=b(`menu`),g=b(`close`);return(0,k.useLayoutEffect)(()=>{let e=()=>{f(pe(a))};return e(),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[a]),d?(0,A.jsxs)(j.Provider,{value:{href:t,orientation:d},children:[(0,A.jsx)(`header`,{className:p,...u,children:(0,A.jsx)(`div`,{children:(0,A.jsxs)(`div`,{className:T[`app-header__content`],children:[(0,A.jsx)(`div`,{className:T[`app-header-title`],children:t?(0,A.jsx)(`a`,{"aria-label":`homepage`,className:T[`app-header__home-link`],href:t,onClick:e=>{i&&i(e,{name:`EDS-header-logo`,type:`link`,href:t})},children:(0,A.jsx)(N,{subTitle:s,title:l})}):(0,A.jsx)(N,{subTitle:s,title:l})}),d===`horizontal`&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:T[`app-header__nav-groups`],children:n?.map(e=>(0,A.jsx)(ge,{name:e.name,navItems:e.navItems,onButtonClick:r,onLinkClick:i},`navGroup-${e.name}`))}),n?.length?(0,A.jsx)(`div`,{className:T[`app-header__menu`],children:(0,A.jsx)(F,{"aria-label":`Show Menu`,icon:h,iconLayout:`icon-only`,name:`hamburger-menu`,onClick:()=>{document.getElementById(`popover`)?.showPopover()},type:`button`})}):null]}),d===`vertical`&&(0,A.jsx)(I,{navGroups:n,onButtonClick:r,onLinkClick:i})]})})}),d===`horizontal`&&n?.length?(0,me.createPortal)((0,A.jsxs)(`div`,{className:m,id:`popover`,popover:`auto`,children:[(0,A.jsx)(`div`,{className:T[`app-header__drawer-button`],children:(0,A.jsx)(ce,{"aria-label":`Close popover menu`,className:T[`app-header__drawer-button-instance`],icon:g,iconLayout:`icon-only`,onClick:()=>{document.getElementById(`popover`)?.hidePopover()},rank:`tertiary`,size:`lg`})}),(0,A.jsx)(I,{mode:`drawer`,navGroups:n,onButtonClick:r,onLinkClick:i})]}),document.body):null]}):(0,A.jsx)(`header`,{className:p,...u})},N=({title:e,subTitle:t})=>{let n=c(T[`app-header-title__title`],typeof e==`object`&&T[`app-header-title--has-logo`]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:n,children:typeof e==`string`?(0,A.jsx)(x,{as:`span`,preset:`headline-sm`,children:e}):(0,A.jsx)(A.Fragment,{children:e})}),t&&(0,A.jsx)(`div`,{className:T[`app-header-title__sub-title`],children:(0,A.jsx)(x,{as:`span`,preset:`body-md`,children:t})})]})},ge=({name:e,navItems:t,onButtonClick:n,onLinkClick:r,...i})=>{let a=c(T[`app-header__nav-group`]),o=b(`expand`);return(0,A.jsx)(`nav`,{"aria-label":e,className:a,...i,children:(0,A.jsx)(`ul`,{children:t.map(e=>e.type===`separator`?null:(0,A.jsxs)(`li`,{children:[e.type===`button`&&(0,A.jsx)(F,{...e,onClick:t=>{n&&n(t,e)}}),e.type===`link`&&(0,A.jsx)(P,{...e,onClick:t=>{r&&r(t,e)}},e.name),(e.type===`menu`||e.type===`tree`)&&(0,A.jsx)(f,{children:({close:t,open:i})=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(f.PlainButton,{as:k.Fragment,children:(0,A.jsxs)(F,{icon:e.type===`tree`?o:void 0,iconLayout:e.type===`menu`&&e.leadingContent===`avatar`?`left`:e.iconLayout,isCurrent:i,leadingContent:e.type===`menu`?e.leadingContent:void 0,name:e.name,trailingContent:e.type===`menu`?o:void 0,type:`button`,user:e.type===`menu`?e.user:void 0,children:[e.name,e.type===`menu`&&e.subLabel&&(0,A.jsx)(S,{as:`div`,preset:`appHeader-subLabel`,children:e.subLabel})]})}),(0,A.jsx)(f.Items,{anchor:{to:`bottom end`,gap:12},className:T[`app-header__nav-items`],children:e.navItems?.map(e=>{switch(e.type){case`link`:return(0,A.jsx)(f.Item,{href:e.href,leadingContent:(0,A.jsx)(E,{navItem:e}),onClick:n=>{r&&r(n,e),O(n,e,t)},target:e.isExternal?`_blank`:void 0,trailingContent:(0,A.jsx)(D,{navItem:e}),children:e.name},e.name);case`button`:return(0,A.jsx)(f.Item,{leadingContent:(0,A.jsx)(E,{navItem:e}),onClick:r=>{n&&n(r,e),O(r,e,t)},trailingContent:(0,A.jsx)(D,{navItem:e}),children:e.name},e.name);case`label`:return(0,A.jsx)(f.Item,{__type:`label`,children:e.name},e.name);case`caption`:return(0,A.jsx)(f.Item,{__type:`caption`,children:e.name},e.name);case`separator`:return(0,A.jsx)(f.Separator,{},e.name);default:return m([e===void 0],`Problem with navItem data: ${e}`,`error`),(0,A.jsx)(f.Item,{children:`N/A`},`error-unknown-nav-item-type`)}})})]})})]},e.name))})})},P=(0,k.forwardRef)(({children:e,className:t,icon:n,iconLayout:r=`none`,isCurrent:i=!1,isExternal:a=!1,isVertical:o,meta:s,name:l,type:u,...d},f)=>{let p=c(T[`app-header__nav-item`],T[`app-header__nav-item--link`],i&&T[`app-header__nav-item--is-current`]),m=b(`open-in-new`);return(0,A.jsxs)(`a`,{className:p,ref:f,...d,target:a?`_blank`:void 0,children:[(0,A.jsxs)(`span`,{className:c(r&&T[`app-header__nav-item--icon-layout-${r}`]),children:[r!==`icon-only`&&(0,A.jsx)(S,{as:`span`,preset:`appHeader-label`,children:e??l}),n&&r&&(0,A.jsx)(g,{name:n,purpose:`decorative`,size:`24px`})]}),a&&o&&_(m)&&(0,A.jsx)(v,{content:m,purpose:`decorative`,size:`24px`})]})}),F=(0,k.forwardRef)(({children:e,className:t,icon:n,iconLayout:r=`none`,isCurrent:i,isVertical:a,leadingContent:o,name:s,trailingContent:l,type:u,meta:d,user:f,...p},m)=>{let h=c(t,T[`app-header__nav-item`],T[`app-header__nav-item--button`],i&&T[`app-header__nav-item--is-current`]),g=b(`expand`);return(0,A.jsxs)(`button`,{className:h,ref:m,...p,children:[a&&_(g)&&(0,A.jsx)(v,{content:g,purpose:`decorative`,size:`24px`}),(0,A.jsxs)(`span`,{className:c(T[`app-header__nav-item--button`],r&&T[`app-header__nav-item--icon-layout-${r}`]),children:[r!==`icon-only`&&(0,A.jsx)(S,{as:`span`,preset:`appHeader-label`,children:e??s}),_(n)&&r&&(0,A.jsx)(v,{content:n,purpose:`decorative`,size:`24px`}),!_(n)&&o===`avatar`&&f&&(0,A.jsx)(oe,{size:`sm`,user:f})]}),_(l)&&(0,A.jsx)(v,{content:l,purpose:`decorative`,size:`24px`})]})}),I=({mode:e=`default`,navGroups:t,onButtonClick:n,onLinkClick:r})=>(0,A.jsx)(`div`,{className:T[`drawer-content`],children:t?.map(t=>(0,A.jsx)(`nav`,{"aria-label":t.name,className:T[`drawer-content__nav-group`],children:(0,A.jsx)(`ul`,{children:t.navItems.map(t=>(0,A.jsxs)(`li`,{className:c(T[`drawer-content__nav-group-item`],t.type&&T[`drawer-content__nav-group-item--type-${t.type}`]),children:[t.type===`button`&&(0,A.jsx)(F,{...t,onClick:r=>{e===`drawer`&&document.getElementById(`popover`)?.hidePopover(),n&&n(r,t)}},t.name),t.type===`link`&&(0,A.jsx)(P,{isVertical:!0,...t,onClick:n=>{e===`drawer`&&document.getElementById(`popover`)?.hidePopover(),r&&r(n,t)}},t.name),t.type===`separator`&&(0,A.jsx)(w,{className:T[`app-header__nav-item--separator`],...t},t.name),t.type===`tree`&&(0,A.jsxs)(`menu`,{children:[(0,A.jsx)(`div`,{className:T[`drawer-content__header-container`],children:(0,A.jsx)(`div`,{children:(0,A.jsxs)(`span`,{className:c(T[`app-header__nav-item--button`],T[`app-header_nav-item-label`],t.iconLayout&&T[`app-header__nav-item--icon-layout-${t.iconLayout}`]),children:[t.iconLayout!==`icon-only`&&(0,A.jsx)(x,{as:`span`,preset:`overline-sm`,children:t.name}),t.icon&&t.iconLayout&&(0,A.jsx)(g,{name:t.icon,purpose:`decorative`,size:`24px`})]})})}),(0,A.jsx)(`ul`,{children:t.navItems.map(t=>(0,A.jsxs)(`li`,{children:[t.type===`button`&&(0,A.jsx)(F,{...t,onClick:r=>{e===`drawer`&&document.getElementById(`popover`)?.hidePopover(),n&&n(r,t)}},t.name),t.type===`link`&&(0,A.jsx)(P,{...t,onClick:n=>{e===`drawer`&&document.getElementById(`popover`)?.hidePopover(),r&&r(n,t)}},t.name),t.type===`separator`&&(0,A.jsx)(w,{className:T[`app-header__nav-item--separator`],...t},t.name)]},t.name))})]}),t.type===`menu`&&(0,A.jsx)(f,{children:({open:i,close:a})=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(f.PlainButton,{as:k.Fragment,children:(0,A.jsxs)(F,{className:T[`app-header__menu-trigger`],icon:t.icon,iconLayout:t.leadingContent===`avatar`?`left`:t.iconLayout,isCurrent:i,isVertical:!0,leadingContent:t.leadingContent,name:t.name,type:`button`,user:t.user,children:[t.name,t.type===`menu`&&t.subLabel&&(0,A.jsx)(S,{as:`div`,preset:`appHeader-subLabel`,children:t.subLabel})]})}),(0,A.jsx)(l,{anchor:e==="default"?{to:`right end`,gap:24}:void 0,as:de,className:c(T[`app-header__nav-items`],e===`drawer`&&T[`app-header__nav-items--absolute`]),modal:!1,children:t.navItems?.map(t=>{switch(t.type){case`link`:return(0,A.jsx)(f.Item,{href:t.href,leadingContent:(0,A.jsx)(E,{navItem:t}),onClick:n=>{e===`drawer`&&document.getElementById(`popover`)?.hidePopover(),r&&r(n,t),O(n,t,a)},target:t.isExternal?`_blank`:void 0,trailingContent:(0,A.jsx)(D,{navItem:t}),children:t.name},t.name);case`button`:return(0,A.jsx)(f.Item,{leadingContent:(0,A.jsx)(E,{navItem:t}),onClick:r=>{e===`drawer`&&document.getElementById(`popover`)?.hidePopover(),n&&n(r,t),O(r,t,a)},trailingContent:(0,A.jsx)(D,{navItem:t}),children:t.name},t.name);case`caption`:return(0,A.jsx)(f.Item,{__type:`caption`,children:t.name},t.name);case`label`:return(0,A.jsx)(f.Item,{__type:`label`,children:t.name},t.name);case`separator`:return(0,A.jsx)(f.Separator,{},t.name);default:return(0,A.jsx)(f.Item,{children:`N/A`},`error-unknown-nav-item-type`)}})})]})})]},t.name))})},t.name))}),M.displayName=`AppHeader`;try{M.displayName=`AppHeader`,M.__docgenInfo={description:`## Usage

App headers have three distinct sections with different purposes.

| Type | Description | Uses |
|------|-------------|------|
| Branding | Displays the product name, logo, or identity elements. | Reinforces brand presence. Ensures users always know where they are. |
| Navigation | Provides access to global navigation items such as menus, links, or search. | Helps users move between top-level sections or features quickly. |
| Utility / Actions | Contains user profile. | Gives users immediate access to high-frequency or contextual actions. |

### Best Practices

* Keep navigation concise and limited to high-level sections.
* Don't overload the header with too many links or rarely used actions.`,displayName:`AppHeader`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/AppHeader/AppHeader.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppHeader/AppHeader.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},onButtonClick:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppHeader/AppHeader.tsx`,name:`TypeLiteral`}],description:"Handle the click event for a given clickable button nav item in the header. Includes the data from the associated/clicked `NavItem` for reference\n(e.g., attaching events, tracking, etc.)",name:`onButtonClick`,required:!1,tags:{},type:{name:`AppHeaderEventHandler`}},onLinkClick:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppHeader/AppHeader.tsx`,name:`TypeLiteral`}],description:"Handle the click event for a given clickable link nav item in the header. Includes the data from the associated/clicked `NavItem` for reference\n(e.g., attaching events, tracking, etc.)",name:`onLinkClick`,required:!1,tags:{},type:{name:`AppHeaderEventHandler`}},href:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppHeader/AppHeader.tsx`,name:`TypeLiteral`}],description:`Web location for the home page. Use this to direct where the main page of the application lives.`,name:`href`,required:!1,tags:{},type:{name:`string`}},navGroups:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppHeader/AppHeader.tsx`,name:`TypeLiteral`}],description:`Sets of navigation groups in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems`,name:`navGroups`,required:!1,tags:{},type:{name:`NavGroup[]`}},orientation:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppHeader/AppHeader.tsx`,name:`TypeLiteral`}],description:'Sets the default orientation of the App Header.\n\n* `vertical` alignment places the navigation along the left edge of the screen\n* `horizontal` alignment spans the top portion of the screen and can flex into a responsive display with an expanding vertical menu\n\n**Default is `"horizontal"`**.',name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},style:{defaultValue:{value:`docked`},declarations:[{fileName:`edu-design-system/src/components/AppHeader/AppHeader.tsx`,name:`TypeLiteral`}],description:"Determines how the appheader attaches to the window.\n\n* `floating` describes an overlay appearance where `AppHeader` is not flush with the edge of the window\n* `docked' describes an appearance where `AppHeader` is flush with the edge of the window",name:`style`,required:!1,tags:{},type:{name:`enum`,raw:`"floating" | "docked"`,value:[{value:`"floating"`},{value:`"docked"`}]}},subTitle:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppHeader/AppHeader.tsx`,name:`TypeLiteral`}],description:`Text used to describe the contents of the page with more detail.`,name:`subTitle`,required:!1,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/AppHeader/AppHeader.tsx`,name:`TypeLiteral`}],description:`Element used for the application's logo (can be text or an image)`,name:`title`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var L,ve,R,ye,be,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,xe;function Se(){return(Se=t((()=>{n(),_e(),re(),o(),y(),L=r(),{expect:ve,userEvent:R,within:ye}=__STORYBOOK_MODULE_TEST__,be={title:`Components/AppHeader`,component:M,parameters:{docs:{subtitle:`The persistent navigation bar that appears at the top or left of an application provides brand identity, global navigation, and quick access to key actions. It anchors the user experience by ensuring consistent access to core functionality across all pages. It also serves as the <header> for accessibility landmarks.`},chromatic:{prefersReducedMotion:`reduce`,delay:500,viewports:[a.googlePixel2,a.ipadMini,a.chromebook]}},tags:[`autodocs`,`version:1.7.2`]},z={args:{title:`Bodies of water`,subTitle:`They're cool!`,onButtonClick:(e,t)=>{console.log(`button clicked`,e,t)},onLinkClick:(e,t)=>{console.log(`link clicked`,e,t)},navGroups:[{name:`lakes`,navItems:[{name:`Lakes`,type:`tree`,meta:{name:`track-value`,value:3},navItems:[{name:`Lake Superior`,type:`link`,href:`https://example.org`,isCurrent:!0},{name:`Lake Tahoe`,type:`link`,href:`https://example.org`},{name:`Crater Lake`,type:`link`,href:`https://example.org`}]},{name:`Oceans`,type:`tree`,navItems:[{name:`Pacific Ocean`,type:`link`,href:`https://example.org`},{name:`Atlantic Ocean`,type:`link`,href:`https://example.org`},{name:`Arctic Ocean`,type:`link`,href:`https://example.org`}]},{name:`Rivers`,type:`tree`,navItems:[{name:`Nile River`,type:`link`,href:`https://example.org`},{name:`Amazon River`,type:`link`,href:`https://example.org`},{name:`Danube River`,type:`link`,href:`https://example.org`}]}]},{name:`group-2`,navItems:[{name:`Documentation`,type:`link`,isExternal:!0,href:`https://example.org`},{name:`GitHub`,type:`link`,isExternal:!0,href:`https://example.org`},{type:`separator`,name:`line-0`},{name:`Profile`,type:`menu`,leadingContent:`avatar`,user:{fullName:`Lorem Ipsum`},subLabel:`sublabel`,navItems:[{type:`button`,leadingContent:`avatar`,name:`Lorem Ipsum, Inc.`,user:{fullName:`Lorem Ipsum`},trailingContent:`check`,shouldClose:!1},{type:`button`,leadingContent:`avatar`,name:`Unknown Organization`,shouldClose:!1},{type:`button`,leadingContent:`add-encircled`,name:`New organization`},{type:`separator`,name:`line-0`},{type:`button`,name:`Settings`},{name:`About Us`,type:`link`,href:`http://example.org`,isExternal:!0},{type:`link`,name:`Sign Out`,href:`https://example.org/#logout`},{type:`separator`,name:`line`},{type:`caption`,name:`© 2025 Your Company Name. All rights reserved.`}]}]}]},globals:{viewport:{value:``,isRotated:!1}}},B={args:{...z.args,title:(0,L.jsx)(`div`,{className:`fpo h-[36px] w-[175px]`,tabIndex:0,children:`Logo goes here`}),href:`https://example.org`,subTitle:void 0}},V={args:{...z.args,style:`floating`}},H={args:{...z.args,orientation:`vertical`}},U={args:{...z.args,orientation:`vertical`,style:`floating`}},W={args:{...U.args,orientation:`vertical`,navGroups:[]},globals:{viewport:{value:`googlePixel2`,isRotated:!1}}},G={args:{...B.args,orientation:`vertical`}},K={args:{...B.args},parameters:{snapshot:{skip:!0}},play:async()=>{await R.tab()}},q={args:{...G.args},parameters:{snapshot:{skip:!0}},play:async()=>{await R.tab()}},J={tags:[`code-only`],args:{...z.args},parameters:{chromatic:{delay:300,viewports:[a.chromebook]},snapshot:{skip:!0}},play:async()=>{await R.tab(),await R.tab(),await R.tab(),C()&&await R.keyboard(` `,{delay:300})},globals:{viewport:{value:`macbookPro`,isRotated:!1}}},Y={tags:[`code-only`],args:{...z.args},parameters:{chromatic:{delay:500,viewports:[a.googlePixel2]},snapshot:{skip:!0}},play:async()=>{await R.tab(),C()&&await R.keyboard(` `,{delay:400})},globals:{viewport:{value:`googlePixel2`,isRotated:!1}}},X={tags:[`code-only`],args:{...z.args,orientation:`vertical`},parameters:{chromatic:{viewports:[a.googlePixel2]},snapshot:{skip:!0}},play:async({canvasElement:e})=>{let t=await ye(e).findByRole(`button`,{name:`Show Menu`});await R.tab(),await ve(t).toHaveFocus()},globals:{viewport:{value:`googlePixel2`,isRotated:!1}}},Z={tags:[`code-only`],args:{title:`Bodies of water`,subTitle:`They're cool!`,navGroups:[{name:`group-2`,navItems:[{name:`Show Profile`,type:`menu`,navItems:[{type:`custom`,name:`Settings`}]}]}]},play:async()=>{C()&&(await R.tab(),await R.keyboard(` `,{delay:300}))}},Q={args:{...z.args},decorators:[e=>(0,L.jsx)(te,{icons:ie,children:e()})]},$={args:{...H.args},decorators:[e=>(0,L.jsx)(te,{icons:ie,children:e()})]},xe=[`Default`,`DefaultWithImageLogo`,`StyleFloating`,`VerticalOrientation`,`FloatingVerticalOrientation`,`MobileFloatingVerticalEmpty`,`VerticalDefaultWithImageLogo`,`ImageLogoFocus`,`VerticalImageLogoFocus`,`CanExpandFullSizeMenu`,`CanExpandHamburgerMenu`,`CanFocusMenuItem`,`CanHandleFallbackNavMenus`,`WithProvidedIcons`,`WithProvidedIconsVertical`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Bodies of water',
    subTitle: "They're cool!",
    onButtonClick: (ev, navItem) => {
      console.log('button clicked', ev, navItem);
    },
    onLinkClick: (ev, navItem) => {
      console.log('link clicked', ev, navItem);
    },
    navGroups: [{
      name: 'lakes',
      navItems: [{
        name: 'Lakes',
        type: 'tree',
        meta: {
          name: 'track-value',
          value: 3
        },
        navItems: [{
          name: 'Lake Superior',
          type: 'link',
          href: 'https://example.org',
          isCurrent: true
        }, {
          name: 'Lake Tahoe',
          type: 'link',
          href: 'https://example.org'
        }, {
          name: 'Crater Lake',
          type: 'link',
          href: 'https://example.org'
        }]
      }, {
        name: 'Oceans',
        type: 'tree',
        navItems: [{
          name: 'Pacific Ocean',
          type: 'link',
          href: 'https://example.org'
        }, {
          name: 'Atlantic Ocean',
          type: 'link',
          href: 'https://example.org'
        }, {
          name: 'Arctic Ocean',
          type: 'link',
          href: 'https://example.org'
        }]
      }, {
        name: 'Rivers',
        type: 'tree',
        navItems: [{
          name: 'Nile River',
          type: 'link',
          href: 'https://example.org'
        }, {
          name: 'Amazon River',
          type: 'link',
          href: 'https://example.org'
        }, {
          name: 'Danube River',
          type: 'link',
          href: 'https://example.org'
        }]
      }]
    }, {
      name: 'group-2',
      navItems: [{
        name: 'Documentation',
        type: 'link',
        isExternal: true,
        href: 'https://example.org'
      }, {
        name: 'GitHub',
        type: 'link',
        isExternal: true,
        href: 'https://example.org'
      }, {
        type: 'separator',
        name: 'line-0'
      }, {
        name: 'Profile',
        type: 'menu',
        leadingContent: 'avatar',
        user: {
          fullName: 'Lorem Ipsum'
        },
        subLabel: 'sublabel',
        navItems: [{
          type: 'button',
          leadingContent: 'avatar',
          name: 'Lorem Ipsum, Inc.',
          user: {
            fullName: 'Lorem Ipsum'
          },
          trailingContent: 'check',
          shouldClose: false
        }, {
          type: 'button',
          leadingContent: 'avatar',
          name: 'Unknown Organization',
          shouldClose: false
        }, {
          type: 'button',
          leadingContent: 'add-encircled',
          name: 'New organization'
        }, {
          type: 'separator',
          name: 'line-0'
        }, {
          type: 'button',
          name: 'Settings'
        }, {
          name: 'About Us',
          type: 'link',
          href: 'http://example.org',
          isExternal: true
        }, {
          type: 'link',
          name: 'Sign Out',
          href: 'https://example.org/#logout'
        }, {
          type: 'separator',
          name: 'line'
        }, {
          type: 'caption',
          name: '© 2025 Your Company Name. All rights reserved.'
        }]
      }]
    }]
  },
  globals: {
    viewport: {
      value: '',
      isRotated: false
    }
  }
}`,...z.parameters?.docs?.source},description:{story:"`AppHeader` comes with some sensible defaults. Interactive items can have metadata added to allow for additional data when handling events.\n\nUse the `meta:` object in the nav item object to pass in additional information.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title:
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div className="fpo h-[36px] w-[175px]" tabIndex={0}>
        Logo goes here
      </div>,
    href: 'https://example.org',
    subTitle: undefined
  }
}`,...B.parameters?.docs?.source},description:{story:"Logos can also be an image (using either `<img>` or `<svg>` for format). When using logo, the maximum height\nallowed is fixed, and the logo takes up the total possible vertical height.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    style: 'floating'
  }
}`,...V.parameters?.docs?.source},description:{story:"`AppHeader` can take on a floating position, which adds some space between the edges of the screen.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: 'vertical'
  }
}`,...H.parameters?.docs?.source},description:{story:`Menus can exist in a vertical orientation as well, affixed to the left-hand side of the screen`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: 'vertical',
    style: 'floating'
  }
}`,...U.parameters?.docs?.source},description:{story:"Vertical `AppHeader`s can also sit with a floating style.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...FloatingVerticalOrientation.args,
    orientation: 'vertical',
    navGroups: []
  },
  globals: {
    viewport: {
      value: 'googlePixel2',
      isRotated: false
    }
  }
}`,...W.parameters?.docs?.source},description:{story:`When empty, we do not render the menu button (there is nothing to show).`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultWithImageLogo.args,
    orientation: 'vertical'
  }
}`,...G.parameters?.docs?.source},description:{story:`Logos are positioned properly when the orientation is vertical`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultWithImageLogo.args
  },
  parameters: {
    snapshot: {
      skip: true
    }
  },
  play: async () => {
    await userEvent.tab();
  }
}`,...K.parameters?.docs?.source},description:{story:`Provided links are accessible in horizontal orientation`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...VerticalDefaultWithImageLogo.args
  },
  parameters: {
    snapshot: {
      skip: true
    }
  },
  play: async () => {
    await userEvent.tab();
  }
}`,...q.parameters?.docs?.source},description:{story:`Provided links are accessible in vertical orientation`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  args: {
    ...Default.args
  },
  parameters: {
    // Sets the delay (in milliseconds) for a specific story.
    chromatic: {
      delay: 300,
      viewports: [chromaticViewports.chromebook]
    },
    snapshot: {
      skip: true
    }
  },
  // Select the menu then expand it with the keyboard. set up for snapshotting
  play: async () => {
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    if (isChromatic()) {
      await userEvent.keyboard(' ', {
        delay: 300
      });
    }
  },
  globals: {
    viewport: {
      value: 'macbookPro',
      isRotated: false
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Chromatic Test: show the full size menu on snapshot`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  args: {
    ...Default.args
  },
  parameters: {
    // Sets the delay (in milliseconds) for a specific story.
    chromatic: {
      delay: 500,
      viewports: [chromaticViewports.googlePixel2]
    },
    snapshot: {
      skip: true
    }
  },
  // Select the menu then expand it with the keyboard. set up for snapshotting
  play: async () => {
    await userEvent.tab();
    if (isChromatic()) {
      await userEvent.keyboard(' ', {
        delay: 400
      });
    }
  },
  globals: {
    viewport: {
      value: 'googlePixel2',
      isRotated: false
    }
  }
}`,...Y.parameters?.docs?.source},description:{story:`Chromatic Test: Verify opening of hamburger menu`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  args: {
    ...Default.args,
    orientation: 'vertical'
  },
  parameters: {
    // The hamburger only renders at the smallest breakpoint
    chromatic: {
      viewports: [chromaticViewports.googlePixel2]
    },
    snapshot: {
      skip: true
    }
  },
  // At this viewport the header renders horizontally, so the hamburger is the only tab stop.
  // Tab to it with the keyboard so the snapshot shows the focus ring
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = await canvas.findByRole('button', {
      name: 'Show Menu'
    });
    await userEvent.tab();
    await expect(menuButton).toHaveFocus();
  },
  globals: {
    viewport: {
      value: 'googlePixel2',
      isRotated: false
    }
  }
}`,...X.parameters?.docs?.source},description:{story:`Chromatic Test: Verify focus ring on nav items (EDS-1820)`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  args: {
    title: 'Bodies of water',
    subTitle: "They're cool!",
    navGroups: [{
      name: 'group-2',
      navItems: [{
        name: 'Show Profile',
        type: 'menu',
        navItems: [{
          // @ts-expect-error using invalid type on purpose
          type: 'custom',
          name: 'Settings'
        }]
      }]
    }]
  },
  play: async () => {
    if (isChromatic()) {
      await userEvent.tab();
      await userEvent.keyboard(' ', {
        delay: 300
      });
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:'When rendering the content of `AppHeader` dynamically, it can be given invalid sub-menu types. This is handled via\nnon-interactive fallbacks showing "N/A".',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...Q.parameters?.docs?.source},description:{story:"`AppHeader` draws four semantic icons: the chevron marking a nav item as a menu, the\nhamburger that opens the drawer at narrow widths, that drawer's close button, and the mark\non a link that leaves the site. All four come from `IconProvider`.\n\nIcons that arrive as nav data stay the consumer's to choose, so `NavItem.icon` is\nuntouched by the provider.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    ...VerticalOrientation.args
  },
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...$.parameters?.docs?.source},description:{story:`The mark on a link that leaves the site only renders in the vertical orientation, so it
needs a story of its own. Here it becomes a chain rather than the usual box-and-arrow.

The fourth icon \`AppHeader\` resolves, the close button on the drawer, cannot be shown in a
story at all: it renders through a portal, outside the tree a story snapshots. It is
covered in \`IconProvider\`'s own tests instead.`,...$.parameters?.docs?.description}}}})))()}Se();export{J as CanExpandFullSizeMenu,Y as CanExpandHamburgerMenu,X as CanFocusMenuItem,Z as CanHandleFallbackNavMenus,z as Default,B as DefaultWithImageLogo,U as FloatingVerticalOrientation,K as ImageLogoFocus,W as MobileFloatingVerticalEmpty,V as StyleFloating,G as VerticalDefaultWithImageLogo,q as VerticalImageLogoFocus,H as VerticalOrientation,Q as WithProvidedIcons,$ as WithProvidedIconsVertical,xe as __namedExportsOrder,be as default};