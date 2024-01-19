"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[4374],{"./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NZ:()=>e});var o,e=((o=e||{}).DEFAULT="default",o.BETA="beta",o.STABLE="stable",o.NEEDS_REVISION="needs-revision",o.OBSOLETE="obsolete",o.EXPERIMENTAL="experimental",o.DEPRECATED="deprecated",o)},"./src/components/Toast/Toast.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,NotDismissable:()=>NotDismissable,Success:()=>Success,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toast_stories});var dist=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Toast_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/Toast/Toast.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Toast_module.Z,options);const Toast_Toast_module=Toast_module.Z&&Toast_module.Z.locals?Toast_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Toast=_ref=>{let{children,className,variant,onDismiss,...other}=_ref;const componentClassName=(0,clsx.Z)(Toast_Toast_module.toast,"success"===variant&&Toast_Toast_module["toast--success"],"error"===variant&&Toast_Toast_module["toast--error"],className),icon="success"===variant?"check-circle":"warning";return react.createElement("div",_extends({className:componentClassName},other),react.createElement("div",{className:Toast_Toast_module.toast__content},react.createElement(Icon.J,{name:icon,purpose:"informative",size:"1.5rem",title:variant}),react.createElement("p",{className:Toast_Toast_module.toast__text},children)),onDismiss&&react.createElement(Button.z,{onClick:onDismiss,status:variant,variant:"icon"},react.createElement(Icon.J,{name:"close",purpose:"informative",size:"2rem",title:"dismiss message"})))};try{Toast.displayName="Toast",Toast.__docgenInfo={description:'`import {Toast} from "@chanzuckerberg/eds";`\n\nA toast used to provide information on the state of the page, usually in response to a\nuser action. Ex: The user updates their profile, and a toast pop-up informs them that the\ndata was successfully saved.',displayName:"Toast",props:{className:{defaultValue:null,description:"Additional class names that can be appended to the component, passed in for styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The child node(s) contains the toast message.",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"The color of the Toast, based on EDS defined colors. Also determines the icon used.\nNote that the Icon mapping matches the style of Banners.",name:"variant",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},onDismiss:{defaultValue:null,description:"Callback when Toast is dismissed.",name:"onDismiss",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/Toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}const Toast_stories={title:"Components/Toast",component:Toast,parameters:{badges:["1.0",dist.NZ.DEPRECATED]},argTypes:{onDismiss:{action:"dismissed"}},args:{children:"You've got toast!"}},Success={args:{variant:"success"}},Error={args:{variant:"error"}},NotDismissable={args:{variant:"success",onDismiss:null}};Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'success'\n  }\n}",...Success.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'error'\n  }\n}",...Error.parameters?.docs?.source}}},NotDismissable.parameters={...NotDismissable.parameters,docs:{...NotDismissable.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'success',\n    // @ts-expect-error onDismiss is not nullable, but this is needed to remove the arg from\n    // storybook's actions addon\n    onDismiss: null\n  }\n}",...NotDismissable.parameters?.docs?.source}}};const __namedExportsOrder=["Success","Error","NotDismissable"]},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/Toast/Toast.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Link button styles\n */\n/*------------------------------------*\\\n    # TOAST\n\\*------------------------------------*/\n/**\n * Message of information, success, caution, or warning to the user.\n *\n * Container for the toast content, to provide background styling.\n */\n.zFiuATgsSB42VdEmcJZY {\n  width: 100%;\n  max-width: 25rem;\n\n  padding-left: var(--eds-size-2);\n  padding-right: var(--eds-size-1);\n\n  display: grid;\n  gap: var(--eds-size-1);\n  grid-template-columns: 1fr min-content;\n  align-items: center;\n\n  border-style: solid;\n  border-width: var(--eds-border-width-sm);\n  /**\n   * The thick left border operates as a foreground band of color, \n   * so foreground rather than border is used\n   */\n  border-left-width: var(--eds-border-width-lg);\n  border-radius: var(--eds-size-half);\n  /**\n   * The border CSS variables are defined in the messaging mixins    \n   */\n  border-color: var(--messaging-border-color);\n  border-left-color: var(--border-dark-color);\n\n  box-shadow: var(--eds-box-shadow-sm);\n}\n.eMkg_UYwNfdZBiOe4YkE {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n.DKLpAU7Wyd9ndF2hWlGF {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n/**\n * The toast content, usually an icon and text message. Does not include the optional close button\n */\n.krTsuaP7ZeLXQhyVM0Cg {\n  padding-top: var(--eds-size-2);\n  padding-bottom: var(--eds-size-2);\n  /**\n   * Grid places the icon on the left and message on the right, with both vertically aligned to the center.   \n   */\n  display: grid;\n  gap: var(--eds-size-2);\n  grid-template-columns: min-content 1fr;\n  align-items: center;\n}\n/**\n * The text in the toast. Styled via mixins over using Text component.\n */\n.Txrp2fH9uHDSd5Rolfn5 {\n  font: var(--eds-typography-preset-007-bold);\n\n  color: inherit;\n}\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/Toast/Toast.module.css"],names:[],mappings:"AAAA;;EAEE;ACAF;;uCAEuC;AAEvC;;;;EAIE;AACF;EACE,WAAW;EACX,gBAAgB;;EAEhB,+BAA+B;EAC/B,gCAAgC;;EAEhC,aAAa;EACb,sBAAsB;EACtB,sCAAsC;EACtC,mBAAmB;;EAEnB,mBAAmB;EACnB,wCAAwC;EACxC;;;IAGE;EACF,6CAA6C;EAC7C,mCAAmC;EACnC;;IAEE;EACF,2CAA2C;EAC3C,2CAA2C;;EAE3C,oCAAoC;AACtC;AAEA;EDoIE,8EAA8E;EAC9E,mEAAmE;EAEnE,6DAA6D;EAC7D,kDAAkD;ACtIpD;AAEA;EDgJE,4EAA4E;EAC5E,iEAAiE;EAEjE,2DAA2D;EAC3D,gDAAgD;AClJlD;AAEA;;EAEE;AACF;EACE,8BAA8B;EAC9B,iCAAiC;EACjC;;IAEE;EACF,aAAa;EACb,sBAAsB;EACtB,sCAAsC;EACtC,mBAAmB;AACrB;AAEA;;EAEE;AACF;EACE,2CAA2C;;EAE3C,cAAc;AAChB",sourcesContent:["/**\n * Link button styles\n */\n@define-mixin textLink {\n  font-size: inherit;\n  font-weight: var(--eds-font-weight-medium);\n  line-height: inherit;\n\n  color: var(--eds-theme-color-link-brand-text);\n  text-decoration: underline;\n  text-decoration-color: var(--eds-theme-color-link-brand-text-decoration);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n\n  svg {\n    /* Has smaller icons than other button styles. */\n    --icon-size-default: 1.25em;\n  }\n\n  &:hover {\n    color: var(--eds-theme-color-link-brand-text-hover);\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-hover);\n  }\n\n  &:focus-visible {\n    /**\n     * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n     * color, but it will also make borders 100% opacity black.\n     */\n    outline: 1px solid transparent;\n    color: var(--eds-theme-color-link-brand-text-focus) !important;\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n    background-color: var(--eds-theme-color-link-brand-background-focus);\n  }\n\n  @supports not selector(:focus-visible) {\n    &:focus {\n      /**\n       * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n       * color, but it will also make borders 100% opacity black.\n       */\n      outline: 1px solid transparent;\n      color: var(--eds-theme-color-link-brand-text-focus) !important;\n      text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n      background-color: var(--eds-theme-color-link-brand-background-focus);\n    }\n  }\n}\n\n@define-mixin TextLinkInverted {\n  @mixin textLink;\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n\n  &:focus {\n    @mixin focusInverted;\n  }\n}\n\n@define-mixin focus {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n\n@define-mixin focusInside {\n  @mixin focus;\n  outline-offset: calc(-1 * var(--eds-theme-box-focus-ring-outline-offset));\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: var(--eds-theme-form-border-width);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: var(--eds-theme-form-border-radius);\n  outline: none;\n  padding: var(--eds-size-1);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow var(--eds-anim-fade-quick) var(--eds-anim-ease),\n    border-color var(--eds-anim-fade-quick) var(--eds-anim-ease);\n\n  &:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n\n  &:focus {\n    @mixin focus;\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n\n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:read-only,\n  &:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    @mixin placeholderStyles;\n  }\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin fieldsetStyles {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin legendReset {\n  display: inline-block;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n@define-mixin messagingBrand {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n}\n\n@define-mixin messagingNeutral {\n  --messaging-border-color: var(--eds-theme-color-border-neutral-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-neutral-subtle);\n\n  background: var(--eds-theme-color-background-neutral-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n@define-mixin messagingSuccess {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n\n@define-mixin messagingWarning {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-warning);\n\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n}\n\n@define-mixin messagingError {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n@define-mixin messagingYield {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n","@import '../../design-tokens/mixins.css';\n\n/*------------------------------------*\\\n    # TOAST\n\\*------------------------------------*/\n\n/**\n * Message of information, success, caution, or warning to the user.\n *\n * Container for the toast content, to provide background styling.\n */\n.toast {\n  width: 100%;\n  max-width: 25rem;\n\n  padding-left: var(--eds-size-2);\n  padding-right: var(--eds-size-1);\n\n  display: grid;\n  gap: var(--eds-size-1);\n  grid-template-columns: 1fr min-content;\n  align-items: center;\n\n  border-style: solid;\n  border-width: var(--eds-border-width-sm);\n  /**\n   * The thick left border operates as a foreground band of color, \n   * so foreground rather than border is used\n   */\n  border-left-width: var(--eds-border-width-lg);\n  border-radius: var(--eds-size-half);\n  /**\n   * The border CSS variables are defined in the messaging mixins    \n   */\n  border-color: var(--messaging-border-color);\n  border-left-color: var(--border-dark-color);\n\n  box-shadow: var(--eds-box-shadow-sm);\n}\n\n.toast--success {\n  @mixin messagingSuccess;\n}\n\n.toast--error {\n  @mixin messagingError;\n}\n\n/**\n * The toast content, usually an icon and text message. Does not include the optional close button\n */\n.toast__content {\n  padding-top: var(--eds-size-2);\n  padding-bottom: var(--eds-size-2);\n  /**\n   * Grid places the icon on the left and message on the right, with both vertically aligned to the center.   \n   */\n  display: grid;\n  gap: var(--eds-size-2);\n  grid-template-columns: min-content 1fr;\n  align-items: center;\n}\n\n/**\n * The text in the toast. Styled via mixins over using Text component.\n */\n.toast__text {\n  font: var(--eds-typography-preset-007-bold);\n\n  color: inherit;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={toast:"zFiuATgsSB42VdEmcJZY","toast--success":"eMkg_UYwNfdZBiOe4YkE","toast--error":"DKLpAU7Wyd9ndF2hWlGF",toast__content:"krTsuaP7ZeLXQhyVM0Cg",toast__text:"Txrp2fH9uHDSd5Rolfn5"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);