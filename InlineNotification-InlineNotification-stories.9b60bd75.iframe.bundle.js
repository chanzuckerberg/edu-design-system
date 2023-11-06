"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[2500],{"./src/components/InlineNotification/InlineNotification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullWidthLongText:()=>FullWidthLongText,FullWidthStrongVariants:()=>FullWidthStrongVariants,FullWidthSuccess:()=>FullWidthSuccess,FullWidthVariants:()=>FullWidthVariants,LongText:()=>LongText,StrongVariants:()=>StrongVariants,SubtleVariants:()=>SubtleVariants,Success:()=>Success,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_InlineNotification__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/InlineNotification/InlineNotification.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/InlineNotification",component:_InlineNotification__WEBPACK_IMPORTED_MODULE_1__.K,parameters:{badges:["1.0"]},args:{text:"Inline notifications lorem ipsum text",variant:"success"},argTypes:{variant:{control:{type:"select"},options:_InlineNotification__WEBPACK_IMPORTED_MODULE_1__.Z}}},Success={},LongText={args:{text:"Long text inline notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},getVariants=function(){let optionalArgs=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _InlineNotification__WEBPACK_IMPORTED_MODULE_1__.Z.map((variant=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InlineNotification__WEBPACK_IMPORTED_MODULE_1__.K,_extends({key:variant},optionalArgs,{text:`${variant} inline notification lorem ipsum`,variant}))))},SubtleVariants={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"inline-flex",flexDirection:"column",gap:"0.25rem"}},getVariants())},StrongVariants={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"inline-flex",flexDirection:"column",gap:"0.25rem"}},getVariants({isStrong:!0}))},FullWidthSuccess={args:{isFullWidth:!0}},FullWidthLongText={args:{isFullWidth:!0,text:"Long text inline notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},FullWidthVariants={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.25rem"}},getVariants({isFullWidth:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InlineNotification__WEBPACK_IMPORTED_MODULE_1__.K,{inactive:!0,isFullWidth:!0,text:"inactive inline notification lorem ipsum",variant:"success"}))},FullWidthStrongVariants={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.25rem"}},getVariants({isFullWidth:!0,isStrong:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InlineNotification__WEBPACK_IMPORTED_MODULE_1__.K,{inactive:!0,isFullWidth:!0,isStrong:!0,text:"inactive inline notification lorem ipsum",variant:"success"}))};Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{}",...Success.parameters?.docs?.source}}},LongText.parameters={...LongText.parameters,docs:{...LongText.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Long text inline notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'\n  }\n}",...LongText.parameters?.docs?.source}}},SubtleVariants.parameters={...SubtleVariants.parameters,docs:{...SubtleVariants.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    display: 'inline-flex',\n    flexDirection: 'column',\n    gap: '0.25rem'\n  }}>\n      {getVariants()}\n    </div>\n}",...SubtleVariants.parameters?.docs?.source}}},StrongVariants.parameters={...StrongVariants.parameters,docs:{...StrongVariants.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    display: 'inline-flex',\n    flexDirection: 'column',\n    gap: '0.25rem'\n  }}>\n      {getVariants({\n      isStrong: true\n    })}\n    </div>\n}",...StrongVariants.parameters?.docs?.source}}},FullWidthSuccess.parameters={...FullWidthSuccess.parameters,docs:{...FullWidthSuccess.parameters?.docs,source:{originalSource:"{\n  args: {\n    isFullWidth: true\n  }\n}",...FullWidthSuccess.parameters?.docs?.source}}},FullWidthLongText.parameters={...FullWidthLongText.parameters,docs:{...FullWidthLongText.parameters?.docs,source:{originalSource:"{\n  args: {\n    isFullWidth: true,\n    text: 'Long text inline notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'\n  }\n}",...FullWidthLongText.parameters?.docs?.source}}},FullWidthVariants.parameters={...FullWidthVariants.parameters,docs:{...FullWidthVariants.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '0.25rem'\n  }}>\n      {getVariants({\n      isFullWidth: true\n    })}\n      <InlineNotification inactive isFullWidth text=\"inactive inline notification lorem ipsum\" variant=\"success\" />\n    </div>\n}",...FullWidthVariants.parameters?.docs?.source}}},FullWidthStrongVariants.parameters={...FullWidthStrongVariants.parameters,docs:{...FullWidthStrongVariants.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '0.25rem'\n  }}>\n      {getVariants({\n      isFullWidth: true,\n      isStrong: true\n    })}\n      <InlineNotification inactive isFullWidth isStrong text=\"inactive inline notification lorem ipsum\" variant=\"success\" />\n    </div>\n}",...FullWidthStrongVariants.parameters?.docs?.source}}}},"./src/components/InlineNotification/InlineNotification.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>InlineNotification,Z:()=>VARIANTS});var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),InlineNotification_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/InlineNotification/InlineNotification.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(InlineNotification_module.Z,options);const InlineNotification_InlineNotification_module=InlineNotification_module.Z&&InlineNotification_module.Z.locals?InlineNotification_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const VARIANTS=["brand","success","warning","yield"],variantToIconAssetsMap={brand:{icon:"info",title:"info"},success:{icon:"check-circle",title:"success"},warning:{icon:"warning",title:"alert"},yield:{icon:"error-inverted",title:"yield"}},InlineNotification=_ref=>{let{className,inactive,isFullWidth,isStrong,text,variant,...other}=_ref;const subtle=!isStrong,componentClassName=(0,clsx_m.Z)(InlineNotification_InlineNotification_module["inline-notification"],InlineNotification_InlineNotification_module[`inline-notification--${variant}`],subtle&&InlineNotification_InlineNotification_module["inline-notification--subtle"],isFullWidth&&InlineNotification_InlineNotification_module["inline-notification--full-width"],isFullWidth&&(subtle||inactive)&&InlineNotification_InlineNotification_module["inline-notification--full-width-subtle"],className),iconClassName=(0,clsx_m.Z)(InlineNotification_InlineNotification_module["inline-notification__icon"],InlineNotification_InlineNotification_module[`inline-notification__icon--${variant}`],inactive&&InlineNotification_InlineNotification_module["inline-notification__icon--inactive"]),textClassName=(0,clsx_m.Z)(InlineNotification_InlineNotification_module["inline-notification__text"],inactive&&InlineNotification_InlineNotification_module["inline-notification__text--inactive"]);return react.createElement("div",_extends({className:componentClassName},other),react.createElement(Icon.J,{className:iconClassName,name:variantToIconAssetsMap[variant].icon,purpose:"informative",size:"1.5rem",title:variantToIconAssetsMap[variant].title}),react.createElement(Text.x,{as:"span",className:textClassName,variant:"yield"===variant?"neutral-medium":variant},text))};InlineNotification.displayName="InlineNotification";try{InlineNotification.displayName="InlineNotification",InlineNotification.__docgenInfo={description:'`import {InlineNotification} from "@chanzuckerberg/eds";`\n\nThis component provides an inline banner accompanied with an icon for messaging users.',displayName:"InlineNotification",props:{className:{defaultValue:null,description:"CSS class names that can be appended to the component for styling.",name:"className",required:!1,type:{name:"string"}},inactive:{defaultValue:null,description:"Indicates an inactive state for the full width variant where the icon\nwill be hidden and the text will be lighter.\nOverrides variant prop and isStrong prop as a result.\nOnly to be used with isFullWidth.",name:"inactive",required:!1,type:{name:"boolean"}},isFullWidth:{defaultValue:null,description:"Toggles notification that fills the full width of its container.",name:"isFullWidth",required:!1,type:{name:"boolean"}},isStrong:{defaultValue:null,description:"Toggles the stronger background variants.",name:"isStrong",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"The text contents of the tag, nested inside the component, in addition to the icon.",name:"text",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"The color variant of the tag. New variants should be supported\nin the VARIANTS array and by its separate style in CSS file.",name:"variant",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"brand"'},{value:'"yield"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InlineNotification/InlineNotification.tsx#InlineNotification"]={docgenInfo:InlineNotification.__docgenInfo,name:"InlineNotification",path:"src/components/InlineNotification/InlineNotification.tsx#InlineNotification"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/InlineNotification/InlineNotification.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Link button styles\n */\n/*------------------------------------*\\\n    # INLINE NOTIFICATION\n\\*------------------------------------*/\n/**\n * A messaging element that is used inline.\n */\n.GDSyHCXRwEeZL_gCV5RW {\n  display: inline-flex;\n  padding: var(--eds-size-quarter) var(--eds-size-half);\n  border-radius: var(--eds-border-radius-md);\n}\n/**\n * Icon that sits left of the notification text.\n */\n.Eniz0n7gwHvABpTH80fr {\n  /* Retain icon original size and wrap text instead. */\n  flex-shrink: 0; \n  color: var(--messaging-icon-color);\n}\n/**\n * Text that sits right of the icon.\n */\n.YwEIHiSF5WCor1nBxy50 {\n  margin: var(--eds-size-half);\n  font: var(--eds-theme-typography-label-md-subtle);\n}\n/**\n * Color variants\n */\n.bxvCHmm6cMpLu3nY8VFG {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n\n  border: var(--eds-theme-border-width) solid\n    var(--eds-theme-color-border-brand-primary-strong);\n}\n.kLMZGbkPsQu46_W66ZbM {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n\n  border: var(--eds-theme-border-width) solid\n    var(--eds-theme-color-border-utility-success-default);\n}\n.t1dA_gjOagXPEDxq9EUq {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-warning);\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n\n  border: var(--eds-theme-border-width) solid\n    var(--eds-theme-color-border-utility-warning-strong);\n}\n.tivJ9qSXIYC_wg4MPm1A {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n\n  border: var(--eds-theme-border-width) solid\n    var(--eds-theme-color-border-grade-revise-strong);\n}\n.Lm_Apltje9rDIw3mZUfE {\n  background-color: var(--eds-theme-color-background-neutral-default);\n}\n/**\n * Full width variant of the inline notification.\n */\n.PEvUvQr2R8wbsq8U6vQY {\n  display: flex;\n  border: 0;\n  border-radius: 0;\n  /*  Accounts for the lack of border in height to make it 44px. */\n  padding: calc(var(--eds-size-1) + var(--eds-theme-border-width)); \n}\n.mvQOPoyIrvQMR0RtXRZr {\n  background-color: var(--eds-theme-color-background-neutral-subtle);\n}\n/**\n * Inactive variant of the full width inline notification.\n */\n.iYzdGO4WxsNPVh9UfN2A {\n  display: none;\n}\n.N1Dhb5txEGs_0b1FtzRt {\n  /* Creates enough space to keep text in the same place. */\n  padding-left: var(--eds-size-3); \n  color: var(--eds-theme-color-text-neutral-subtle);\n}\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/InlineNotification/InlineNotification.module.css"],names:[],mappings:"AAAA;;EAEE;ACAF;;uCAEuC;AAEvC;;EAEE;AACF;EACE,oBAAoB;EACpB,qDAAqD;EACrD,0CAA0C;AAC5C;AAEA;;EAEE;AACF;EACE,qDAAqD;EACrD,cAAc;EACd,kCAAkC;AACpC;AAEA;;EAEE;AACF;EACE,4BAA4B;EAC5B,iDAAiD;AACnD;AAEA;;EAEE;AACF;EDyHE,4EAA4E;EAC5E,iEAAiE;EAEjE,mEAAmE;EACnE,gDAAgD;;EC1HhD;sDACoD;AACtD;AACA;EDmIE,8EAA8E;EAC9E,mEAAmE;EAEnE,6DAA6D;EAC7D,kDAAkD;;ECpIlD;yDACuD;AACzD;AACA;EDqIE,8EAA8E;EAC9E,mEAAmE;EAEnE,6DAA6D;EAC7D,kDAAkD;;ECtIlD;wDACsD;AACxD;AACA;ED+IE,2EAA2E;EAC3E,yEAAyE;EAEzE,iEAAiE;EACjE,kDAAkD;;EChJlD;qDACmD;AACrD;AACA;EACE,mEAAmE;AACrE;AAEA;;EAEE;AACF;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;EAChB,gEAAgE;EAChE,gEAAgE;AAClE;AACA;EACE,kEAAkE;AACpE;AACA;;EAEE;AACF;EACE,aAAa;AACf;AACA;EACE,yDAAyD;EACzD,+BAA+B;EAC/B,iDAAiD;AACnD",sourcesContent:["/**\n * Link button styles\n */\n@define-mixin textLink {\n  font-size: inherit;\n  font-weight: var(--eds-font-weight-medium);\n  line-height: inherit;\n\n  color: var(--eds-theme-color-link-brand-text);\n  text-decoration: underline;\n  text-decoration-color: var(--eds-theme-color-link-brand-text-decoration);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n\n  svg {\n    /* Has smaller icons than other button styles. */\n    --icon-size-default: 1.25em;\n  }\n\n  &:hover {\n    color: var(--eds-theme-color-link-brand-text-hover);\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-hover);\n  }\n\n  &:focus-visible {\n    /**\n     * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n     * color, but it will also make borders 100% opacity black.\n     */\n    outline: 1px solid transparent;\n    color: var(--eds-theme-color-link-brand-text-focus) !important;\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n    background-color: var(--eds-theme-color-link-brand-background-focus);\n  }\n\n  @supports not selector(:focus-visible) {\n    &:focus {\n      /**\n       * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n       * color, but it will also make borders 100% opacity black.\n       */\n      outline: 1px solid transparent;\n      color: var(--eds-theme-color-link-brand-text-focus) !important;\n      text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n      background-color: var(--eds-theme-color-link-brand-background-focus);\n    }\n  }\n}\n\n@define-mixin TextLinkInverted {\n  @mixin textLink;\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n\n  &:focus {\n    @mixin focusInverted;\n  }\n}\n\n@define-mixin focus {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n\n@define-mixin focusInside {\n  @mixin focus;\n  outline-offset: calc(-1 * var(--eds-theme-box-focus-ring-outline-offset));\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: var(--eds-theme-form-border-width);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: var(--eds-theme-form-border-radius);\n  outline: none;\n  padding: var(--eds-size-1);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow var(--eds-anim-fade-quick) var(--eds-anim-ease),\n    border-color var(--eds-anim-fade-quick) var(--eds-anim-ease);\n\n  &:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n\n  &:focus {\n    @mixin focus;\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n\n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:read-only,\n  &:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    @mixin placeholderStyles;\n  }\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin fieldsetStyles {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin legendReset {\n  display: inline-block;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n@define-mixin messagingBrand {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n}\n\n@define-mixin messagingNeutral {\n  --messaging-border-color: var(--eds-theme-color-border-neutral-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-neutral-subtle);\n\n  background: var(--eds-theme-color-background-neutral-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n@define-mixin messagingSuccess {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n\n@define-mixin messagingWarning {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-warning);\n\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n}\n\n@define-mixin messagingError {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n@define-mixin messagingYield {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n","@import '../../design-tokens/mixins.css';\n\n/*------------------------------------*\\\n    # INLINE NOTIFICATION\n\\*------------------------------------*/\n\n/**\n * A messaging element that is used inline.\n */\n.inline-notification {\n  display: inline-flex;\n  padding: var(--eds-size-quarter) var(--eds-size-half);\n  border-radius: var(--eds-border-radius-md);\n}\n\n/**\n * Icon that sits left of the notification text.\n */\n.inline-notification__icon {\n  /* Retain icon original size and wrap text instead. */\n  flex-shrink: 0; \n  color: var(--messaging-icon-color);\n}\n\n/**\n * Text that sits right of the icon.\n */\n.inline-notification__text {\n  margin: var(--eds-size-half);\n  font: var(--eds-theme-typography-label-md-subtle);\n}\n\n/**\n * Color variants\n */\n.inline-notification--brand {\n  @mixin messagingBrand;\n\n  border: var(--eds-theme-border-width) solid\n    var(--eds-theme-color-border-brand-primary-strong);\n}\n.inline-notification--success {\n  @mixin messagingSuccess;\n\n  border: var(--eds-theme-border-width) solid\n    var(--eds-theme-color-border-utility-success-default);\n}\n.inline-notification--warning {\n  @mixin messagingWarning;\n\n  border: var(--eds-theme-border-width) solid\n    var(--eds-theme-color-border-utility-warning-strong);\n}\n.inline-notification--yield {\n  @mixin messagingYield;\n\n  border: var(--eds-theme-border-width) solid\n    var(--eds-theme-color-border-grade-revise-strong);\n}\n.inline-notification--subtle {\n  background-color: var(--eds-theme-color-background-neutral-default);\n}\n\n/**\n * Full width variant of the inline notification.\n */\n.inline-notification--full-width {\n  display: flex;\n  border: 0;\n  border-radius: 0;\n  /*  Accounts for the lack of border in height to make it 44px. */\n  padding: calc(var(--eds-size-1) + var(--eds-theme-border-width)); \n}\n.inline-notification--full-width-subtle {\n  background-color: var(--eds-theme-color-background-neutral-subtle);\n}\n/**\n * Inactive variant of the full width inline notification.\n */\n.inline-notification__icon--inactive {\n  display: none;\n}\n.inline-notification__text--inactive {\n  /* Creates enough space to keep text in the same place. */\n  padding-left: var(--eds-size-3); \n  color: var(--eds-theme-color-text-neutral-subtle);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"inline-notification":"GDSyHCXRwEeZL_gCV5RW","inline-notification__icon":"Eniz0n7gwHvABpTH80fr","inline-notification__text":"YwEIHiSF5WCor1nBxy50","inline-notification--brand":"bxvCHmm6cMpLu3nY8VFG","inline-notification--success":"kLMZGbkPsQu46_W66ZbM","inline-notification--warning":"t1dA_gjOagXPEDxq9EUq","inline-notification--yield":"tivJ9qSXIYC_wg4MPm1A","inline-notification--subtle":"Lm_Apltje9rDIw3mZUfE","inline-notification--full-width":"PEvUvQr2R8wbsq8U6vQY","inline-notification--full-width-subtle":"mvQOPoyIrvQMR0RtXRZr","inline-notification__icon--inactive":"iYzdGO4WxsNPVh9UfN2A","inline-notification__text--inactive":"N1Dhb5txEGs_0b1FtzRt"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);