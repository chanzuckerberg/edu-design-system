"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[8333],{"./src/components/PopoverContainer/PopoverContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_PopoverContainer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/PopoverContainer/PopoverContainer.tsx"),_PopoverListItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/PopoverListItem/PopoverListItem.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/PopoverContainer",component:_PopoverContainer__WEBPACK_IMPORTED_MODULE_1__.O,parameters:{layout:"centered",badges:["intro-1.2","current-2.0"]},argTypes:{children:{control:!1}},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"p-8"},Story())]},Default={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"none"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PopoverListItem__WEBPACK_IMPORTED_MODULE_2__.S,{icon:"arrow-down"},"test 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PopoverListItem__WEBPACK_IMPORTED_MODULE_2__.S,{icon:"arrow-left-narrow"},"test 2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PopoverListItem__WEBPACK_IMPORTED_MODULE_2__.S,{icon:"arrow-up"},"test 3")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"none"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PopoverListItem__WEBPACK_IMPORTED_MODULE_2__.S,{icon:"arrow-right-narrow",isDestructiveAction:!0},"test 4")))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <div role="none">\n          <PopoverListItem icon="arrow-down">test 1</PopoverListItem>\n          <PopoverListItem icon="arrow-left-narrow">test 2</PopoverListItem>\n          <PopoverListItem icon="arrow-up">test 3</PopoverListItem>\n        </div>\n        <div role="none">\n          <PopoverListItem icon="arrow-right-narrow" isDestructiveAction>\n            test 4\n          </PopoverListItem>\n        </div>\n      </>\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/PopoverContainer/PopoverContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>PopoverContainer,u:()=>defaultPopoverModifiers});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PopoverContainer_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/PopoverContainer/PopoverContainer.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PopoverContainer_module.Z,options);const PopoverContainer_PopoverContainer_module=PopoverContainer_module.Z&&PopoverContainer_module.Z.locals?PopoverContainer_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const defaultPopoverModifiers=[{name:"offset",options:{offset:[0,12]}},{name:"preventOverflow",options:{mainAxis:!1}},{name:"computeStyles",options:{roundOffsets:!1}},{name:"minWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:_ref=>{let{state}=_ref;state.styles.popper.minWidth=`${state.rects.reference.width}px`},effect:_ref2=>{let{state}=_ref2;state.elements.popper.style.minWidth=`${state.elements.reference.getBoundingClientRect().width}px`}}],PopoverContainer=react.forwardRef(((_ref3,ref)=>{let{className,children,...other}=_ref3;const componentClassName=(0,clsx.Z)(PopoverContainer_PopoverContainer_module["popover-container"],className);return react.createElement("div",_extends({className:componentClassName},other,{ref}),children)}));PopoverContainer.displayName="PopoverContainer";try{PopoverContainer.displayName="PopoverContainer",PopoverContainer.__docgenInfo={description:"",displayName:"PopoverContainer",props:{className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Child node(s) that can be nested inside component.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PopoverContainer/PopoverContainer.tsx#PopoverContainer"]={docgenInfo:PopoverContainer.__docgenInfo,name:"PopoverContainer",path:"src/components/PopoverContainer/PopoverContainer.tsx#PopoverContainer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/PopoverContainer/PopoverContainer.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'/**\n * Link button styles\n * TODO(2.0): remove unused mixins once 2.0 is released\n */\n/**\n * Component 2.0 Styles\n */\n/*------------------------------------*\\\n # POPOVER CONTAINER\n\\*------------------------------------*/\n/**\n * Popover container\n */\n.SLtTKWETa018d6od2baJ {\n  border-radius: var(--eds-theme-border-radius-objects-md);\n  overflow: auto;\n  padding: calc(var(--eds-size-half) / 16 * 1rem) 0;\n  z-index: 1150;\n\n  box-shadow: var(--eds-box-shadow-md);\n  background-color: var(--eds-theme-color-background-utility-container);\n}\n.SLtTKWETa018d6od2baJ:focus-visible {\n    outline: none;\n  }\n.SLtTKWETa018d6od2baJ > *[role=none] + *[role=none] {\n  /* create dividers by looking for groups under the component that wrap using the "none" role */\n  border-top: 1px solid var(--eds-theme-color-border-utility-default-low-emphasis);\n}',"",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/PopoverContainer/PopoverContainer.module.css"],names:[],mappings:"AAAA;;;EAGE;AAyMF;;EAEE;AC5MF;;uCAEuC;AAEvC;;EAEE;AACF;EACE,wDAAwD;EACxD,cAAc;EACd,iDAAiD;EACjD,aAAa;;EAEb,oCAAoC;EACpC,qEAAqE;AAKvE;AAHE;IACE,aAAa;EACf;AAGF;EACE,8FAA8F;EAC9F,gFAAgF;AAClF",sourcesContent:["/**\n * Link button styles\n * TODO(2.0): remove unused mixins once 2.0 is released\n */\n@define-mixin textLink {\n  font-size: inherit;\n  font-weight: var(--eds-font-weight-medium);\n  line-height: inherit;\n\n  color: var(--eds-theme-color-link-brand-text);\n  text-decoration: underline;\n  text-decoration-color: var(--eds-theme-color-link-brand-text-decoration);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n\n  svg {\n    /* Has smaller icons than other button styles. */\n    --icon-size-default: 1.25em;\n  }\n\n  &:hover {\n    color: var(--eds-theme-color-link-brand-text-hover);\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-hover);\n  }\n\n  &:focus-visible {\n    /**\n     * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n     * color, but it will also make borders 100% opacity black.\n     */\n    outline: 1px solid transparent;\n    color: var(--eds-theme-color-link-brand-text-focus) !important;\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n    background-color: var(--eds-theme-color-link-brand-background-focus);\n  }\n\n  @supports not selector(:focus-visible) {\n    &:focus {\n      /**\n       * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n       * color, but it will also make borders 100% opacity black.\n       */\n      outline: 1px solid transparent;\n      color: var(--eds-theme-color-link-brand-text-focus) !important;\n      text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n      background-color: var(--eds-theme-color-link-brand-background-focus);\n    }\n  }\n}\n\n@define-mixin TextLinkInverted {\n  @mixin textLink;\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n\n  &:focus {\n    @mixin focusInverted;\n  }\n}\n\n@define-mixin focus {\n  outline: calc(var(--eds-theme-box-focus-ring-outline-width) * 1px) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: calc(var(--eds-theme-box-focus-ring-outline-offset) * 1px);\n}\n\n@define-mixin focusInside {\n  @mixin focus;\n  outline-offset: calc(-1 * var(--eds-theme-box-focus-ring-outline-offset));\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: calc(var(--eds-theme-form-border-width) * 1px);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: calc(var(--eds-theme-form-border-radius) * 1px);\n  outline: none;\n  padding: calc(var(--eds-size-1) / 16 * 1rem);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow calc(var(--eds-anim-fade-quick) * 1s) var(--eds-anim-ease),\n    border-color calc(var(--eds-anim-fade-quick) * 1s) var(--eds-anim-ease);\n\n  &:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n\n  &:focus {\n    @mixin focus;\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n\n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:read-only,\n  &:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    @mixin placeholderStyles;\n  }\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin fieldsetStyles {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin legendReset {\n  display: inline-block;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n@define-mixin messagingBrand {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n}\n\n@define-mixin messagingNeutral {\n  --messaging-border-color: var(--eds-theme-color-border-neutral-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-neutral-subtle);\n\n  background: var(--eds-theme-color-background-neutral-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n@define-mixin messagingSuccess {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n\n@define-mixin messagingWarning {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: #E06B00;\n\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n}\n\n@define-mixin messagingError {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n@define-mixin messagingYield {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n/**\n * Component 2.0 Styles\n */\n\n @define-mixin inputStylesV2 {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n\n  border: calc(var(--eds-border-width-sm) * 1px) solid;\n  border-radius: calc(var(--eds-theme-border-radius-objects-sm) * 1px);\n\n  outline: none;\n  padding: 0.5rem;\n  margin: 0;\n\n  transition: box-shadow calc(var(--eds-anim-fade-quick) * 1s) var(--eds-anim-ease),\n  border-color calc(var(--eds-anim-fade-quick) * 1s) var(--eds-anim-ease);\n  \n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n  \n  color: var(--eds-theme-color-text-utility-default-primary);\n  border-color: var(--eds-theme-color-border-utility-default-medium-emphasis);\n  background-color: var(--eds-theme-color-background-input);\n  \n  &:hover {\n    border-color: var(--eds-theme-color-border-utility-default-medium-emphasis-hover);\n  }\n\n  &:focus {\n    border-color: var(--eds-theme-color-border-utility-focus);\n    outline: calc(var(--eds-border-width-sm) * 1px) solid var(--eds-theme-color-border-utility-focus);\n  }\n\n  &:read-only:not(:disabled) {\n    border-color: transparent;\n    outline: none;\n    padding-left: 0;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    border-color: var(--eds-theme-color-border-utility-critical);\n\n    &:hover {\n      border-color: var(--eds-theme-color-border-utility-critical-hover);\n    }\n\n    &:focus {\n      border-color: var(--eds-theme-color-border-utility-critical);\n      outline: calc(var(--eds-border-width-sm) * 1px) solid var(--eds-theme-color-border-utility-critical);\n    }\n  }\n\n  &.warning {\n    border-color: var(--eds-theme-color-border-utility-warning);\n\n    &:hover {\n      border-color: var(--eds-theme-color-border-utility-warning-hover);\n    }\n\n    &:focus {\n      border-color: var(--eds-theme-color-border-utility-warning);\n      outline: calc(var(--eds-border-width-sm) * 1px) solid var(--eds-theme-color-border-utility-warning);\n    }\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:disabled::placeholder {\n    cursor: not-allowed;\n\n    color: var(--eds-theme-color-text-utility-disabled-primary);\n    border-color: var(--eds-theme-color-border-utility-disabled);\n    background-color: var(--eds-theme-color-background-utility-disabled-low-emphasis);\n  }\n\n  &::placeholder {\n    color: var(--eds-theme-color-text-utility-default-secondary);\n  }\n}\n","@import '../../design-tokens/mixins.css';\n\n/*------------------------------------*\\\n # POPOVER CONTAINER\n\\*------------------------------------*/\n\n/**\n * Popover container\n */\n.popover-container {\n  border-radius: var(--eds-theme-border-radius-objects-md);\n  overflow: auto;\n  padding: calc(var(--eds-size-half) / 16 * 1rem) 0;\n  z-index: 1150;\n\n  box-shadow: var(--eds-box-shadow-md);\n  background-color: var(--eds-theme-color-background-utility-container);\n\n  &:focus-visible {\n    outline: none;\n  }\n}\n\n.popover-container > *[role=none] + *[role=none] {\n  /* create dividers by looking for groups under the component that wrap using the \"none\" role */\n  border-top: 1px solid var(--eds-theme-color-border-utility-default-low-emphasis);\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"popover-container":"SLtTKWETa018d6od2baJ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);