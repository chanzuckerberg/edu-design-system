"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[5193],{"./src/components/Breadcrumbs/Breadcrumbs.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Breadcrumbs});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),debounce=__webpack_require__("./node_modules/lodash/debounce.js"),debounce_default=__webpack_require__.n(debounce),react=__webpack_require__("./node_modules/react/index.js");function flattenReactChildren(children){return react.Children.toArray(children).reduce(((flatChildren,child)=>child.type===react.Fragment?flatChildren.concat(flattenReactChildren(child.props.children)):(flatChildren.push(child),flatChildren)),[])}var Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),Menu=__webpack_require__("./src/components/Menu/Menu.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Breadcrumbs_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/Breadcrumbs/Breadcrumbs.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Breadcrumbs_module.Z,options);const Breadcrumbs_Breadcrumbs_module=Breadcrumbs_module.Z&&Breadcrumbs_module.Z.locals?Breadcrumbs_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const BreadcrumbsContext=(0,react.createContext)({}),Breadcrumbs=_ref=>{let{"aria-label":ariaLabel="breadcrumbs links",className,children,id,separator,...other}=_ref;const[shouldTruncate,setShouldTruncate]=react.useState(!1),ref=react.useRef(null);react.useEffect((()=>{const updateShouldTruncate=()=>{const willOverflow=!!ref.current&&ref.current.clientWidth<ref.current.scrollWidth;setShouldTruncate(willOverflow)},debouncedUpdateShouldTruncate=debounce_default()(updateShouldTruncate,200);return updateShouldTruncate(),window.addEventListener("resize",debouncedUpdateShouldTruncate),()=>{window.removeEventListener("resize",debouncedUpdateShouldTruncate)}}),[]);const breadcrumbsItems=flattenBreadcrumbsItems(children),backBreadCrumb=breadcrumbsItems.length>1?react.cloneElement(breadcrumbsItems[breadcrumbsItems.length-2],{variant:"back"}):null,menuItems=breadcrumbsItems.slice(1,breadcrumbsItems.length-1).map(((breadcrumbItem,index)=>{const menuItem=breadcrumbItem;return react.createElement(Menu.v.Item,{href:menuItem.props.href,icon:"link",key:`breadcrumb-menu-item-${index}`},menuItem.props.text)})),componentClassName=(0,clsx.Z)(Breadcrumbs_Breadcrumbs_module.breadcrumbs,className);return react.createElement(BreadcrumbsContext.Provider,{value:{separator}},react.createElement("nav",_extends({"aria-label":ariaLabel,className:componentClassName,id},other),react.createElement("ul",{className:Breadcrumbs_Breadcrumbs_module.breadcrumbs__list,ref},backBreadCrumb,shouldTruncate&&breadcrumbsItems.length>2?react.createElement(react.Fragment,null,breadcrumbsItems[0],react.createElement(BreadcrumbsItem,{href:null,menuItems,separator,variant:"collapsed"}),breadcrumbsItems[breadcrumbsItems.length-1]):breadcrumbsItems)))},flattenBreadcrumbsItems=children=>{const flattenedChildren=flattenReactChildren(children);flattenedChildren.some((child=>child.type!==BreadcrumbsItem&&child.type!==Breadcrumbs.Item));return flattenedChildren},CustomSeparatorBreadcrumbsItem=props=>{const{separator}=(0,react.useContext)(BreadcrumbsContext);return react.createElement(BreadcrumbsItem,_extends({separator},props))},BreadcrumbsItem=_ref2=>{let{className,href,icon="chevron-left",menuItems,separator="/",text,variant,...other}=_ref2;const componentClassName=(0,clsx.Z)(Breadcrumbs_Breadcrumbs_module.breadcrumbs__item,"back"===variant&&Breadcrumbs_Breadcrumbs_module["breadcrumbs__item-back"],className),ellipsisButtonClassName=(0,clsx.Z)(Breadcrumbs_Breadcrumbs_module.breadcrumbs__link,Breadcrumbs_Breadcrumbs_module.breadcrumbs__ellipsis);return react.createElement("li",_extends({className:componentClassName},other),"collapsed"===variant?react.createElement(Menu.v,null,react.createElement(Menu.v.PlainButton,{"aria-label":"Show more breadcrumbs",className:ellipsisButtonClassName},"…"),react.createElement(Menu.v.Items,null,menuItems)):"back"===variant?react.createElement("a",{className:Breadcrumbs_Breadcrumbs_module.breadcrumbs__link,href},react.createElement(Icon.J,{className:Breadcrumbs_Breadcrumbs_module["breadcrumbs__back-icon"],name:icon,purpose:"informative",title:text})):react.createElement("a",{className:Breadcrumbs_Breadcrumbs_module.breadcrumbs__link,href},text),react.createElement("span",{"aria-hidden":!0,className:Breadcrumbs_Breadcrumbs_module.breadcrumbs__separator},separator))};Breadcrumbs.displayName="Breadcrumbs",CustomSeparatorBreadcrumbsItem.displayName="Breadcrumbs.Item",Breadcrumbs.Item=CustomSeparatorBreadcrumbsItem;try{Breadcrumbs.displayName="Breadcrumbs",Breadcrumbs.__docgenInfo={description:'`import {Breadcrumbs} from "@chanzuckerberg/eds";`\n\nList of Breadcrumb components showing the user where they are in the system and allow them\nto navigate to parent pages.',displayName:"Breadcrumbs",props:{"aria-label":{defaultValue:null,description:"aria-label for `nav` element to describe Breadcrumbs navigation to screen readers",name:"aria-label",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Child node(s) that can be nested inside component",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class names that can be appended to the component",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"HTML id for the component",name:"id",required:!1,type:{name:"string"}},separator:{defaultValue:{value:"/"},description:"Custom string separator between individual breadcrumbs\nDefaults to '/'",name:"separator",required:!1,type:{name:"enum",value:[{value:'"|"'},{value:'">"'},{value:'"/"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"]={docgenInfo:Breadcrumbs.__docgenInfo,name:"Breadcrumbs",path:"src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"})}catch(__react_docgen_typescript_loader_error){}try{Item.displayName="Breadcrumbs.Item",Item.__docgenInfo={description:"",displayName:"Breadcrumbs.Item",props:{className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"URL for the breadcrumbs item.\nRequired since breadcrumbs should reroute user.\nNull case is used for the collapsed variant, which uses Menu Items which has hrefs.",name:"href",required:!0,type:{name:"string | null"}},icon:{defaultValue:{value:"chevron-left"},description:"Icon override for component. Default is 'chevron-left'",name:"icon",required:!1,type:{name:"enum",value:[{value:'"chevron-left"'}]}},menuItems:{defaultValue:null,description:"URLs for the collapsed breadcrumbs variant.\nShould be <Menu.Item href={href}>{text}</Menu.Item>.",name:"menuItems",required:!1,type:{name:"ReactNode[]"}},separator:{defaultValue:{value:"/"},description:"Custom string separator after current breadcrumb item.\nDefaults to '/'",name:"separator",required:!1,type:{name:"enum",value:[{value:'"|"'},{value:'">"'},{value:'"/"'}]}},text:{defaultValue:null,description:"Breadcrumbs item text.",name:"text",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"Behavior variations for the breadcrumbs item.\n- **back** - results in a left facing icon, usually denoting the second last breadcrumb item in a mobile breakpoint.\n- **collapsed** - results in an ellipsis, where interaction spawns a Menu containing more links.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"back"'},{value:'"collapsed"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs.Item"]={docgenInfo:Breadcrumbs.Item.__docgenInfo,name:"Breadcrumbs.Item",path:"src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs.Item"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/Breadcrumbs/Breadcrumbs.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Link button styles\n */\n/*------------------------------------*\\\n    # BREADCRUMBS\n\\*------------------------------------*/\n/**\n * Breadcrumbs are a navigational component\n *\n * The outer wrapper for the breadcrumbs is a <nav> element.\n */\n/**\n * Breadcrumbs list\n */\n.ooh4IY_VJfg9KEDlUBvk {\n  list-style: none;\n  display: flex;\n}\n/*------------------------------------*\\\n    # BREADCRUMBS ITEM\n\\*------------------------------------*/\n/**\n * Breadcrumbs list item.\n */\n.u3gbbRLiCKMh5Y_fJsiY {\n  font: var(--eds-theme-typography-body-xs);\n  max-width: 100%;\n  /* Required for the Menu to absolutely position relative to this container. */\n  position: relative;\n\n  /* Hides all breadcrumbs except the last breadcrumb in smaller breakpoints. */\n  display: none;\n  flex-shrink: 0;\n}\n.u3gbbRLiCKMh5Y_fJsiY:last-of-type {\n    display: flex;\n    /* Truncate last breadcrumb in smaller breakpoints */\n    flex: 1 0 0%;\n  }\n.u3gbbRLiCKMh5Y_fJsiY {\n\n  min-width: 0;\n\n  align-items: center;\n}\n@media all and (min-width: 48rem) {\n.u3gbbRLiCKMh5Y_fJsiY {\n    /* Display breadcrumbs in larger breakpoints. */\n    display: flex\n}\n    .u3gbbRLiCKMh5Y_fJsiY:last-of-type {\n      /* Truncate last breadcrumb in smaller breakpoints */\n      flex: 0 0 auto;\n    }\n  }\n/**\n * Back variant of the breadcrumbs list item.\n */\n.wp8muuX_5kHqSTiiNM_J {\n  display: flex;\n  margin-right: var(--eds-size-1-and-half);\n}\n@media all and (min-width: 48rem) {\n.wp8muuX_5kHqSTiiNM_J {\n    /* Hidden for larger breakpoints. */\n    display: none\n}\n  }\n.wp8muuX_5kHqSTiiNM_J > .W9st6Dyi8mrS_y2RJBMy {\n  /* Hide the separator for the back variant. */\n  display: none;\n}\n/**\n * Ellipsis variant of the breadcrumbs list item.\n */\n.jN3JmOqtYdo8KW_kpf0t {\n  min-height: unset;\n  min-width: unset;\n\n  border: none;\n  border-radius: unset;\n  background-color: transparent;\n}\n.jN3JmOqtYdo8KW_kpf0t:hover {\n  background-color: transparent;\n}\n/**\n * Breadcrumbs link.\n */\n.tuddtDWDwjPTDXDEBQOk {\n  color: var(--eds-theme-color-text-neutral-subtle);\n  text-decoration: none;\n}\n.tuddtDWDwjPTDXDEBQOk:last-of-type {\n    /* Truncate last link with ellipsis. */\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n.tuddtDWDwjPTDXDEBQOk:hover,\n  .tuddtDWDwjPTDXDEBQOk:focus-visible {\n    text-decoration: underline;\n  }\n.tuddtDWDwjPTDXDEBQOk:focus-visible {\n    outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n    outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n  }\n@supports not selector(:focus-visible) {\n    .tuddtDWDwjPTDXDEBQOk:hover,\n    .tuddtDWDwjPTDXDEBQOk:focus {\n      text-decoration: underline;\n    }\n\n    .tuddtDWDwjPTDXDEBQOk:focus {\n      outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n      outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n    }\n  }\n/**\n * Breadcrumbs Icon - a separator between breadcrumb links.\n */\n.W9st6Dyi8mrS_y2RJBMy {\n  color: var(--eds-theme-color-icon-neutral-subtle);\n  margin-left: var(--eds-size-1);\n  margin-right: var(--eds-size-1);\n  cursor: default;\n}\n/**\n * Last breadcrumbs item icon.\n */\n.u3gbbRLiCKMh5Y_fJsiY:last-child .W9st6Dyi8mrS_y2RJBMy.W9st6Dyi8mrS_y2RJBMy {\n  /*  A separator shouldn't be displayed after last link. */\n  display: none;\n}\n/**\n * Breadcrumbs Back Icon.\n */\n.TEeZJ9LD7lxZ9nl6gT1Y {\n  color: var(--eds-theme-color-icon-neutral-subtle);\n  /* Transform over height due to icon being placed inside <a>. */\n  transform: scale(1.5);\n  position: relative;\n  bottom: 0.125rem;\n}\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/Breadcrumbs/Breadcrumbs.module.css","<no source>"],names:[],mappings:"AAAA;;EAEE;ACAF;;uCAEuC;AAEvC;;;;EAIE;AAEF;;EAEE;AACF;EACE,gBAAgB;EAChB,aAAa;AACf;AAEA;;uCAEuC;AAEvC;;EAEE;AACD;EACC,yCAAyC;EACzC,eAAe;EACf,6EAA6E;EAC7E,kBAAkB;;EAElB,6EAA6E;EAC7E,aAAa;EACb,cAAc;AAmBhB;AAlBE;IACE,aAAa;IACb,oDAAoD;IACpD,YAAY;EACd;ACxCF;;ED0CE,YAAY;;EAEZ;CC5CF;AD8CE;AAnBD;IAoBG,+CAA+C;IAC/C;AAMJ;IALI;MACE,oDAAoD;MACpD,cAAc;IAChB;EACF;AAGF;;EAEE;AACF;EACE,aAAa;EACb,wCAAwC;AAK1C;AAJE;AAHF;IAII,mCAAmC;IACnC;AAEJ;EADE;AAEF;EACE,6CAA6C;EAC7C,aAAa;AACf;AAEA;;EAEE;AACF;EACE,iBAAiB;EACjB,gBAAgB;;EAEhB,YAAY;EACZ,oBAAoB;EACpB,6BAA6B;AAC/B;AACA;EACE,6BAA6B;AAC/B;AAEA;;EAEE;AACF;EACE,iDAAiD;EACjD,qBAAqB;AA4BvB;AA1BE;IACE,sCAAsC;IACtC,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;EACzB;AAEA;;IAEE,0BAA0B;EAC5B;AAEA;ID/CA;qCACmC;IACnC,8DAA8D;EC+C9D;AAEA;IACE;;MAEE,0BAA0B;IAC5B;;IAEA;MDzDF;qCACmC;MACnC,8DAA8D;ICyD5D;EACF;AAGF;;EAEE;AACF;EACE,iDAAiD;EACjD,8BAA8B;EAC9B,+BAA+B;EAC/B,eAAe;AACjB;AAEA;;EAEE;AACF;EACE,yDAAyD;EACzD,aAAa;AACf;AAEA;;EAEE;AACF;EACE,iDAAiD;EACjD,+DAA+D;EAC/D,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;AAClB",sourcesContent:["/**\n * Link button styles\n */\n@define-mixin textLink {\n  font-size: inherit;\n  font-weight: var(--eds-font-weight-medium);\n  line-height: inherit;\n\n  color: var(--eds-theme-color-link-brand-text);\n  text-decoration: underline;\n  text-decoration-color: var(--eds-theme-color-link-brand-text-decoration);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n\n  svg {\n    /* Has smaller icons than other button styles. */\n    --icon-size-default: 1.25em;\n  }\n\n  &:hover {\n    color: var(--eds-theme-color-link-brand-text-hover);\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-hover);\n  }\n\n  &:focus-visible {\n    /**\n     * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n     * color, but it will also make borders 100% opacity black.\n     */\n    outline: 1px solid transparent;\n    color: var(--eds-theme-color-link-brand-text-focus) !important;\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n    background-color: var(--eds-theme-color-link-brand-background-focus);\n  }\n\n  @supports not selector(:focus-visible) {\n    &:focus {\n      /**\n       * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n       * color, but it will also make borders 100% opacity black.\n       */\n      outline: 1px solid transparent;\n      color: var(--eds-theme-color-link-brand-text-focus) !important;\n      text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n      background-color: var(--eds-theme-color-link-brand-background-focus);\n    }\n  }\n}\n\n@define-mixin TextLinkInverted {\n  @mixin textLink;\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n\n  &:focus {\n    @mixin focusInverted;\n  }\n}\n\n@define-mixin focus {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n\n@define-mixin focusInside {\n  @mixin focus;\n  outline-offset: calc(-1 * var(--eds-theme-box-focus-ring-outline-offset));\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: var(--eds-theme-form-border-width);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: var(--eds-theme-form-border-radius);\n  outline: none;\n  padding: var(--eds-size-1);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow var(--eds-anim-fade-quick) var(--eds-anim-ease),\n    border-color var(--eds-anim-fade-quick) var(--eds-anim-ease);\n\n  &:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n\n  &:focus {\n    @mixin focus;\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n\n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:read-only,\n  &:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    @mixin placeholderStyles;\n  }\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin fieldsetStyles {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin legendReset {\n  display: inline-block;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n@define-mixin messagingBrand {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n}\n\n@define-mixin messagingNeutral {\n  --messaging-border-color: var(--eds-theme-color-border-neutral-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-neutral-subtle);\n\n  background: var(--eds-theme-color-background-neutral-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n@define-mixin messagingSuccess {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n\n@define-mixin messagingWarning {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-warning);\n\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n}\n\n@define-mixin messagingError {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n@define-mixin messagingYield {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n","@import '../../design-tokens/mixins.css';\n\n/*------------------------------------*\\\n    # BREADCRUMBS\n\\*------------------------------------*/\n\n/**\n * Breadcrumbs are a navigational component\n *\n * The outer wrapper for the breadcrumbs is a <nav> element.\n */\n\n/**\n * Breadcrumbs list\n */\n.breadcrumbs__list {\n  list-style: none;\n  display: flex;\n}\n\n/*------------------------------------*\\\n    # BREADCRUMBS ITEM\n\\*------------------------------------*/\n\n/**\n * Breadcrumbs list item.\n */\n .breadcrumbs__item {\n  font: var(--eds-theme-typography-body-xs);\n  max-width: 100%;\n  /* Required for the Menu to absolutely position relative to this container. */\n  position: relative;\n\n  /* Hides all breadcrumbs except the last breadcrumb in smaller breakpoints. */\n  display: none;\n  flex-shrink: 0;\n  &:last-of-type {\n    display: flex;\n    /* Truncate last breadcrumb in smaller breakpoints */\n    flex: 1 0 0%;\n  }\n\n  min-width: 0;\n\n  align-items: center;\n\n  @media all and (min-width: $eds-bp-md) {\n    /* Display breadcrumbs in larger breakpoints. */\n    display: flex;\n    &:last-of-type {\n      /* Truncate last breadcrumb in smaller breakpoints */\n      flex: 0 0 auto;\n    }\n  }\n}\n\n/**\n * Back variant of the breadcrumbs list item.\n */\n.breadcrumbs__item-back {\n  display: flex;\n  margin-right: var(--eds-size-1-and-half);\n  @media all and (min-width: $eds-bp-md) {\n    /* Hidden for larger breakpoints. */\n    display: none;\n  }\n}\n.breadcrumbs__item-back > .breadcrumbs__separator {\n  /* Hide the separator for the back variant. */\n  display: none;\n}\n\n/**\n * Ellipsis variant of the breadcrumbs list item.\n */\n.breadcrumbs__ellipsis {\n  min-height: unset;\n  min-width: unset;\n\n  border: none;\n  border-radius: unset;\n  background-color: transparent;\n}\n.breadcrumbs__ellipsis:hover {\n  background-color: transparent;\n}\n\n/**\n * Breadcrumbs link.\n */\n.breadcrumbs__link {\n  color: var(--eds-theme-color-text-neutral-subtle);\n  text-decoration: none;\n\n  &:last-of-type {\n    /* Truncate last link with ellipsis. */\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  &:hover,\n  &:focus-visible {\n    text-decoration: underline;\n  }\n\n  &:focus-visible {\n    @mixin focus;\n  }\n\n  @supports not selector(:focus-visible) {\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n\n    &:focus {\n      @mixin focus;\n    }\n  }\n}\n\n/**\n * Breadcrumbs Icon - a separator between breadcrumb links.\n */\n.breadcrumbs__separator {\n  color: var(--eds-theme-color-icon-neutral-subtle);\n  margin-left: var(--eds-size-1);\n  margin-right: var(--eds-size-1);\n  cursor: default;\n}\n\n/**\n * Last breadcrumbs item icon.\n */\n.breadcrumbs__item:last-child .breadcrumbs__separator.breadcrumbs__separator {\n  /*  A separator shouldn't be displayed after last link. */\n  display: none;\n}\n\n/**\n * Breadcrumbs Back Icon.\n */\n.breadcrumbs__back-icon {\n  color: var(--eds-theme-color-icon-neutral-subtle);\n  /* Transform over height due to icon being placed inside <a>. */\n  transform: scale(1.5);\n  position: relative;\n  bottom: 0.125rem;\n}\n",null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={breadcrumbs__list:"ooh4IY_VJfg9KEDlUBvk",breadcrumbs__item:"u3gbbRLiCKMh5Y_fJsiY","breadcrumbs__item-back":"wp8muuX_5kHqSTiiNM_J",breadcrumbs__separator:"W9st6Dyi8mrS_y2RJBMy",breadcrumbs__ellipsis:"jN3JmOqtYdo8KW_kpf0t",breadcrumbs__link:"tuddtDWDwjPTDXDEBQOk","breadcrumbs__back-icon":"TEeZJ9LD7lxZ9nl6gT1Y"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);