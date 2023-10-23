"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[1620],{"./src/components/Checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox});var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js");var useId=__webpack_require__("./src/util/useId.ts"),InputLabel=__webpack_require__("./src/components/InputLabel/InputLabel.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Checkbox_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Checkbox_module.Z,options);const Checkbox_Checkbox_module=Checkbox_module.Z&&Checkbox_module.Z.locals?Checkbox_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const CheckboxInput=react.forwardRef(((_ref,ref)=>{let{checked,className,disabled,indeterminate,...other}=_ref;const forwardedRef=function useForwardedRef(ref){const innerRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{ref&&("function"==typeof ref?ref(innerRef.current):ref.current=innerRef.current)}),[ref]),innerRef}(ref);return react.useEffect((()=>{forwardedRef.current&&(forwardedRef.current.indeterminate=!!indeterminate)}),[forwardedRef,indeterminate]),react.createElement("input",_extends({checked,className:(0,clsx_m.Z)(className,Checkbox_Checkbox_module.checkbox__input),disabled,ref:forwardedRef,type:"checkbox"},other))}));CheckboxInput.displayName="CheckboxInput";const CheckboxLabel=_ref2=>{let{className,size,...other}=_ref2;const componentClassName=(0,clsx_m.Z)("md"===size&&Checkbox_Checkbox_module["checkbox__label--md"],className);return react.createElement(InputLabel.A,_extends({className:componentClassName,size},other))},Checkbox=Object.assign((0,react.forwardRef)(((props,ref)=>{const{className,id,label,size="lg",disabled,...other}=props,generatedId=(0,useId.M)(),checkboxId=id||generatedId;return react.createElement("div",{className:(0,clsx_m.Z)(className,Checkbox_Checkbox_module.checkbox)},react.createElement(CheckboxInput,_extends({disabled,id:checkboxId,ref},other)),label&&react.createElement(CheckboxLabel,{disabled,htmlFor:checkboxId,size},label))})),{Input:CheckboxInput,Label:CheckboxLabel});Checkbox.displayName="Checkbox";try{Checkbox.displayName="CheckboxInput",Checkbox.__docgenInfo={description:'`import {Checkbox} from "@chanzuckerberg/eds";`\n\nCheckbox control indicating if something is selected or unselected.\n\nNOTE: Requires either a visible label or `aria-label` prop.',displayName:"CheckboxInput",props:{checked:{defaultValue:null,description:"Whether checkbox is checked.",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:'Whether the checkbox is "indeterminate". Neither checked nor unchecked. The most common use\ncase for this is when a checkbox has sub-checkboxes, to represent a "partially checked" state.',name:"indeterminate",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"HTML id attribute. If not passed, this component\nwill generate an id to use for accessibility.",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Size of the checkbox label.",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},label:{defaultValue:null,description:"Visible text label for the component.",name:"label",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#CheckboxInput"]={docgenInfo:CheckboxInput.__docgenInfo,name:"CheckboxInput",path:"src/components/Checkbox/Checkbox.tsx#CheckboxInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/InputLabel/InputLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InputLabel});var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),InputLabel_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/InputLabel/InputLabel.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(InputLabel_module.Z,options);const InputLabel_InputLabel_module=InputLabel_module.Z&&InputLabel_module.Z.locals?InputLabel_module.Z.locals:void 0,InputLabel=_ref=>{let{children,className,htmlFor,size="lg",disabled}=_ref;const componentClassName=(0,clsx_m.Z)(InputLabel_InputLabel_module.label,"md"===size&&InputLabel_InputLabel_module["label--md"],"lg"===size&&InputLabel_InputLabel_module["label--lg"],disabled&&InputLabel_InputLabel_module["label--disabled"],className);return react.createElement("label",{className:componentClassName,htmlFor},children)};InputLabel.displayName="InputLabel";try{InputLabel.displayName="InputLabel",InputLabel.__docgenInfo={description:'BETA: This component is still a work in progress and is subject to change.\n\n`import {InputLabel} from "@chanzuckerberg/eds";`\n\nLabel associated with an input element such as a radio or checkbox.',displayName:"InputLabel",props:{children:{defaultValue:null,description:"Text to render in label.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classnames passed in for styling.",name:"className",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"ID of input that label is associated with.",name:"htmlFor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"Size of the label. Defaults to lg.",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},disabled:{defaultValue:null,description:"Indicates disabled state of the input.",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputLabel/InputLabel.tsx#InputLabel"]={docgenInfo:InputLabel.__docgenInfo,name:"InputLabel",path:"src/components/InputLabel/InputLabel.tsx#InputLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/util/useId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let id=0;function genId(){return++id}const useId=react__WEBPACK_IMPORTED_MODULE_0__.useId??function useId(){return"eds-"+genId()}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Link button styles\n */\n.sy8lKVWP56AlOR7ys_9A {\n  display: flex;\n  gap: var(--eds-size-1);\n}\n.JPSQ_ekGXNuGCtRVUL2a {\n  height: 18px;\n  width: 18px;\n\n  /* The parent Checkbox component is a flex container. Make sure the input doesn't shrink. */\n  flex-shrink: 0;\n\n  /* Remove the browser's checkbox styles, allowing us to provide our own. */\n  appearance: none;\n\n  /* Magic value to center the checkbox on its label. */\n  margin: 3px;\n\n  color: var(--eds-theme-color-checkbox-brand-background);\n  border: 2px solid currentColor;\n\n  /* Place the ::before content smack in the middle of the input. */\n  display: grid;\n  place-content: center;\n}\n.JPSQ_ekGXNuGCtRVUL2a:checked::before {\n  background-color: currentColor;\n  content: '';\n\n  /* Clip this element in the shape of a checkbox. The element's background color will be visible\n  anywhere the svg path is solid. Whatever is behind the checkbox will show through wherever the\n  svg is transparent. See https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path */\n  clip-path: path(\n    'M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM3 21V3H21V21H3Z'\n  );\n\n  /* Because the path does not have an explicit viewbox, this element's bounding box establishes\n  one. In other words, the height/width here need to match the expected viewbox for the path. */\n  height: 24px;\n  width: 24px;\n}\n.JPSQ_ekGXNuGCtRVUL2a:indeterminate::before {\n  background-color: currentColor;\n  content: '';\n\n  clip-path: path('M7 13H17V11H7V13ZM3 21V3H21V21H3Z');\n\n  height: 24px;\n  width: 24px;\n}\n.JPSQ_ekGXNuGCtRVUL2a:focus-visible {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n@supports not selector(:focus-visible) {\n  .JPSQ_ekGXNuGCtRVUL2a:focus {\n    outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n    outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n    outline-offset: 1px;\n  }\n}\n.JPSQ_ekGXNuGCtRVUL2a:disabled {\n  color: var(--eds-theme-color-icon-disabled);\n  cursor: not-allowed;\n}\n.tuwT5G8qQE8gu_GEsiQz {\n  /* Center the first line of the medium label with the checkbox. */\n  position: relative;\n  top: 0.0625rem;\n}\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/Checkbox/Checkbox.module.css"],names:[],mappings:"AAAA;;EAEE;ACAF;EACE,aAAa;EACb,sBAAsB;AACxB;AAEA;EACE,YAAY;EACZ,WAAW;;EAEX,2FAA2F;EAC3F,cAAc;;EAEd,0EAA0E;EAC1E,gBAAgB;;EAEhB,qDAAqD;EACrD,WAAW;;EAEX,uDAAuD;EACvD,8BAA8B;;EAE9B,iEAAiE;EACjE,aAAa;EACb,qBAAqB;AACvB;AAEA;EACE,8BAA8B;EAC9B,WAAW;;EAEX;;sFAEoF;EACpF;;GAEC;;EAED;+FAC6F;EAC7F,YAAY;EACZ,WAAW;AACb;AAEA;EACE,8BAA8B;EAC9B,WAAW;;EAEX,oDAAoD;;EAEpD,YAAY;EACZ,WAAW;AACb;AAEA;EDIE;qCACmC;EACnC,8DAA8D;ACJhE;AAEA;EACE;IDDA;qCACmC;IACnC,8DAA8D;ICC5D,mBAAmB;EACrB;AACF;AAEA;EACE,2CAA2C;EAC3C,mBAAmB;AACrB;AAEA;EACE,iEAAiE;EACjE,kBAAkB;EAClB,cAAc;AAChB",sourcesContent:["/**\n * Link button styles\n */\n@define-mixin textLink {\n  font-size: inherit;\n  font-weight: var(--eds-font-weight-medium);\n  line-height: inherit;\n\n  color: var(--eds-theme-color-link-brand-text);\n  text-decoration: underline;\n  text-decoration-color: var(--eds-theme-color-link-brand-text-decoration);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n\n  svg {\n    /* Has smaller icons than other button styles. */\n    --icon-size-default: 1.25em;\n  }\n\n  &:hover {\n    color: var(--eds-theme-color-link-brand-text-hover);\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-hover);\n  }\n\n  &:focus-visible {\n    /**\n     * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n     * color, but it will also make borders 100% opacity black.\n     */\n    outline: 1px solid transparent;\n    color: var(--eds-theme-color-link-brand-text-focus) !important;\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n    background-color: var(--eds-theme-color-link-brand-background-focus);\n  }\n\n  @supports not selector(:focus-visible) {\n    &:focus {\n      /**\n       * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n       * color, but it will also make borders 100% opacity black.\n       */\n      outline: 1px solid transparent;\n      color: var(--eds-theme-color-link-brand-text-focus) !important;\n      text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n      background-color: var(--eds-theme-color-link-brand-background-focus);\n    }\n  }\n}\n\n@define-mixin TextLinkInverted {\n  @mixin textLink;\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n\n  &:focus {\n    @mixin focusInverted;\n  }\n}\n\n@define-mixin focus {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n\n@define-mixin focusInside {\n  @mixin focus;\n  outline-offset: calc(-1 * var(--eds-theme-box-focus-ring-outline-offset));\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: var(--eds-theme-form-border-width);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: var(--eds-theme-form-border-radius);\n  outline: none;\n  padding: var(--eds-size-1);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow var(--eds-anim-fade-quick) var(--eds-anim-ease),\n    border-color var(--eds-anim-fade-quick) var(--eds-anim-ease);\n\n  &:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n\n  &:focus {\n    @mixin focus;\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n\n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:read-only,\n  &:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    @mixin placeholderStyles;\n  }\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin fieldsetStyles {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin legendReset {\n  display: inline-block;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n@define-mixin messagingBrand {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n}\n\n@define-mixin messagingNeutral {\n  --messaging-border-color: var(--eds-theme-color-border-neutral-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-neutral-subtle);\n\n  background: var(--eds-theme-color-background-neutral-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n@define-mixin messagingSuccess {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n\n@define-mixin messagingWarning {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-warning);\n\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n}\n\n@define-mixin messagingError {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n@define-mixin messagingYield {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n","@import '../../design-tokens/mixins.css';\n\n.checkbox {\n  display: flex;\n  gap: var(--eds-size-1);\n}\n\n.checkbox__input {\n  height: 18px;\n  width: 18px;\n\n  /* The parent Checkbox component is a flex container. Make sure the input doesn't shrink. */\n  flex-shrink: 0;\n\n  /* Remove the browser's checkbox styles, allowing us to provide our own. */\n  appearance: none;\n\n  /* Magic value to center the checkbox on its label. */\n  margin: 3px;\n\n  color: var(--eds-theme-color-checkbox-brand-background);\n  border: 2px solid currentColor;\n\n  /* Place the ::before content smack in the middle of the input. */\n  display: grid;\n  place-content: center;\n}\n\n.checkbox__input:checked::before {\n  background-color: currentColor;\n  content: '';\n\n  /* Clip this element in the shape of a checkbox. The element's background color will be visible\n  anywhere the svg path is solid. Whatever is behind the checkbox will show through wherever the\n  svg is transparent. See https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path */\n  clip-path: path(\n    'M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM3 21V3H21V21H3Z'\n  );\n\n  /* Because the path does not have an explicit viewbox, this element's bounding box establishes\n  one. In other words, the height/width here need to match the expected viewbox for the path. */\n  height: 24px;\n  width: 24px;\n}\n\n.checkbox__input:indeterminate::before {\n  background-color: currentColor;\n  content: '';\n\n  clip-path: path('M7 13H17V11H7V13ZM3 21V3H21V21H3Z');\n\n  height: 24px;\n  width: 24px;\n}\n\n.checkbox__input:focus-visible {\n  @mixin focus;\n}\n\n@supports not selector(:focus-visible) {\n  .checkbox__input:focus {\n    @mixin focus;\n    outline-offset: 1px;\n  }\n}\n\n.checkbox__input:disabled {\n  color: var(--eds-theme-color-icon-disabled);\n  cursor: not-allowed;\n}\n\n.checkbox__label--md {\n  /* Center the first line of the medium label with the checkbox. */\n  position: relative;\n  top: 0.0625rem;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={checkbox:"sy8lKVWP56AlOR7ys_9A",checkbox__input:"JPSQ_ekGXNuGCtRVUL2a","checkbox__label--md":"tuwT5G8qQE8gu_GEsiQz"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/InputLabel/InputLabel.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Link button styles\n */\n/*------------------------------------*\\\n    # INPUT LABEL\n\\*------------------------------------*/\n/**\n * Text labeling the input component.\n */\n.bcOIndFumM50BTk3CZ4U {\n  color: var(--eds-theme-color-text-neutral-strong);\n}\n/**\n * Disabled variant of the input label.\n */\n.Stg50Mi8OQ4EQZ851YQt {\n  color: var(--eds-theme-color-text-disabled);\n}\n/**\n * Input label size variants.\n */\n.EqWPzAuMXLmG1hq0Pzi8 {\n  font: var(--eds-theme-typography-body-sm);\n}\n.T3qjlnpz4sc3EveShPDw {\n  font: var(--eds-theme-typography-body-md);\n}\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/InputLabel/InputLabel.module.css"],names:[],mappings:"AAAA;;EAEE;ACAF;;uCAEuC;AAEvC;;EAEE;AACF;EACE,iDAAiD;AACnD;AAEA;;EAEE;AACF;EACE,2CAA2C;AAC7C;AAEA;;EAEE;AACF;EACE,yCAAyC;AAC3C;AACA;EACE,yCAAyC;AAC3C",sourcesContent:["/**\n * Link button styles\n */\n@define-mixin textLink {\n  font-size: inherit;\n  font-weight: var(--eds-font-weight-medium);\n  line-height: inherit;\n\n  color: var(--eds-theme-color-link-brand-text);\n  text-decoration: underline;\n  text-decoration-color: var(--eds-theme-color-link-brand-text-decoration);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n\n  svg {\n    /* Has smaller icons than other button styles. */\n    --icon-size-default: 1.25em;\n  }\n\n  &:hover {\n    color: var(--eds-theme-color-link-brand-text-hover);\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-hover);\n  }\n\n  &:focus-visible {\n    /**\n     * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n     * color, but it will also make borders 100% opacity black.\n     */\n    outline: 1px solid transparent;\n    color: var(--eds-theme-color-link-brand-text-focus) !important;\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n    background-color: var(--eds-theme-color-link-brand-background-focus);\n  }\n\n  @supports not selector(:focus-visible) {\n    &:focus {\n      /**\n       * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n       * color, but it will also make borders 100% opacity black.\n       */\n      outline: 1px solid transparent;\n      color: var(--eds-theme-color-link-brand-text-focus) !important;\n      text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n      background-color: var(--eds-theme-color-link-brand-background-focus);\n    }\n  }\n}\n\n@define-mixin TextLinkInverted {\n  @mixin textLink;\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n\n  &:focus {\n    @mixin focusInverted;\n  }\n}\n\n@define-mixin focus {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n\n@define-mixin focusInside {\n  @mixin focus;\n  outline-offset: calc(-1 * var(--eds-theme-box-focus-ring-outline-offset));\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: var(--eds-theme-form-border-width);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: var(--eds-theme-form-border-radius);\n  outline: none;\n  padding: var(--eds-size-1);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow var(--eds-anim-fade-quick) var(--eds-anim-ease),\n    border-color var(--eds-anim-fade-quick) var(--eds-anim-ease);\n\n  &:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n\n  &:focus {\n    @mixin focus;\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n\n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:read-only,\n  &:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    @mixin placeholderStyles;\n  }\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin fieldsetStyles {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin legendReset {\n  display: inline-block;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n@define-mixin messagingBrand {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n}\n\n@define-mixin messagingNeutral {\n  --messaging-border-color: var(--eds-theme-color-border-neutral-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-neutral-subtle);\n\n  background: var(--eds-theme-color-background-neutral-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n@define-mixin messagingSuccess {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n\n@define-mixin messagingWarning {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-warning);\n\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n}\n\n@define-mixin messagingError {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n@define-mixin messagingYield {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n","@import '../../design-tokens/mixins.css';\n\n/*------------------------------------*\\\n    # INPUT LABEL\n\\*------------------------------------*/\n\n/**\n * Text labeling the input component.\n */\n.label {\n  color: var(--eds-theme-color-text-neutral-strong);\n}\n\n/**\n * Disabled variant of the input label.\n */\n.label--disabled {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n/**\n * Input label size variants.\n */\n.label--md {\n  font: var(--eds-theme-typography-body-sm);\n}\n.label--lg {\n  font: var(--eds-theme-typography-body-md);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={label:"bcOIndFumM50BTk3CZ4U","label--disabled":"Stg50Mi8OQ4EQZ851YQt","label--md":"EqWPzAuMXLmG1hq0Pzi8","label--lg":"T3qjlnpz4sc3EveShPDw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);