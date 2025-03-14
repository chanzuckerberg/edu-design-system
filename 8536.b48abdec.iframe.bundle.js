"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[8536],{"./src/components/Checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js");var useId=__webpack_require__("./src/util/useId.ts"),FieldLabel=__webpack_require__("./src/components/FieldLabel/FieldLabel.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Checkbox_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/Checkbox/Checkbox.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Checkbox_module.Z,options);const Checkbox_Checkbox_module=Checkbox_module.Z&&Checkbox_module.Z.locals?Checkbox_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const CheckboxInput=react.forwardRef(((_ref,ref)=>{let{checked,className,disabled,indeterminate,...other}=_ref;const forwardedRef=function useForwardedRef(ref){const innerRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{ref&&("function"==typeof ref?ref(innerRef.current):ref.current=innerRef.current)}),[ref]),innerRef}(ref);return react.useEffect((()=>{forwardedRef.current&&(forwardedRef.current.indeterminate=!!indeterminate)}),[forwardedRef,indeterminate]),react.createElement("input",_extends({checked,className:(0,clsx.Z)(className,Checkbox_Checkbox_module.checkbox__input),disabled,ref:forwardedRef,type:"checkbox"},other))})),Checkbox=Object.assign((0,react.forwardRef)(((props,ref)=>{const{className,id,isError,label,disabled,subLabel,...other}=props,generatedId=(0,useId.M)(),checkboxId=id||generatedId;return react.createElement("div",{className:(0,clsx.Z)(className,Checkbox_Checkbox_module.checkbox,isError&&Checkbox_Checkbox_module["checkbox--error"])},react.createElement(CheckboxInput,_extends({disabled,id:checkboxId,ref},other)),react.createElement("div",{className:Checkbox_Checkbox_module.checkbox__labels},label&&react.createElement(FieldLabel.Q,{disabled,htmlFor:checkboxId},label),subLabel&&react.createElement(Text.x,{as:"span",className:Checkbox_Checkbox_module["checkbox__sub-label"],preset:"body-sm"},subLabel)))})),{Input:CheckboxInput,Label:FieldLabel.Q});Checkbox.displayName="Checkbox",CheckboxInput.displayName="CheckboxInput";try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:'`import {Checkbox} from "@chanzuckerberg/eds";`\n\nCheckbox control indicating if something is selected or unselected. Uncontrolled by default,\nit can be used in place of boolean-like form data.\n\n**NOTE**: Requires either a visible `label` or `aria-label` prop.',displayName:"Checkbox",props:{checked:{defaultValue:null,description:"Whether checkbox is checked.",name:"checked",required:!1,type:{name:"boolean"}},isError:{defaultValue:null,description:"Whether the radio button is in an error state",name:"isError",required:!1,type:{name:"boolean"}},subLabel:{defaultValue:null,description:"Additional descriptive text below the primary label, adding additional detail",name:"subLabel",required:!1,type:{name:"string"}},indeterminate:{defaultValue:null,description:'Whether the checkbox is "indeterminate". Neither checked nor unchecked. The most common use\ncase for this is when a checkbox has sub-checkboxes, to represent a "partially checked" state.',name:"indeterminate",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"HTML id attribute. If not passed, this component\nwill generate an id to use for accessibility.",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Visible text label for the component.",name:"label",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/Checkbox/Checkbox.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Legacy Mixins\n * TODO: remove once not in use\n */\n/* TODO(next-major): remove b/c this is no longer in use */\n/* TODO(next-major): remove b/c this is no longer in use */\n/* TODO(next-major): remove this after the one usage is removed */\n/**\n * Component 2.0 Mixins\n */\n.sy8lKVWP56AlOR7ys_9A {\n  display: flex;\n  gap: calc(var(--eds-size-1) / 16 * 1rem);\n}\n.JPSQ_ekGXNuGCtRVUL2a {\n  height: 1.125rem;\n  width: 1.125rem;\n\n  /* The parent Checkbox component is a flex container. Make sure the input doesn't shrink. */\n  flex-shrink: 0;\n\n  /* Remove the browser's checkbox styles, allowing us to provide our own. */\n  appearance: none;\n\n  /* Magic value to center the checkbox on its label. */\n  margin: 3px;\n\n  border: calc(var(--eds-size-quarter) / 16 * 1rem) solid currentColor;\n\n  /* Place the ::before content smack in the middle of the input. */\n  display: grid;\n  place-content: center;\n\n  border-radius: calc(var(--eds-theme-border-radius-objects-sm) * 1px);\n  font: var(--eds-theme-typography-body-md);\n}\n.JPSQ_ekGXNuGCtRVUL2a:checked::before {\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n  content: '✓';\n  text-align: center;\n\n  /* Because the path does not have an explicit viewbox, this element's bounding box establishes\n  one. In other words, the height/width here need to match the expected viewbox for the path. */\n  height: calc(var(--eds-size-3) / 16 * 1rem);\n  width: calc(var(--eds-size-3) / 16 * 1rem);\n\n  /* use the platform's font face, which defines the checkbox glyph to use */\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n.JPSQ_ekGXNuGCtRVUL2a:checked {\n  background-color: currentColor;\n  border: currentColor;\n}\n.JPSQ_ekGXNuGCtRVUL2a:indeterminate::before {\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n  content: '–';\n  text-align: center;\n\n  height: calc(var(--eds-size-3) / 16 * 1rem);\n  width: calc(var(--eds-size-3) / 16 * 1rem);\n  transform: translateY(-1px);\n}\n.JPSQ_ekGXNuGCtRVUL2a:indeterminate {\n  background-color: currentColor;\n  border: currentColor;\n}\n.aFrltPUO7xFESraoQjYw {\n  position: relative;\n}\n.Wqh2JRkL9ZLV8JCo1at0 {\n  display: block;\n\n  color: var(--eds-theme-color-text-utility-default-secondary);\n}\n.JPSQ_ekGXNuGCtRVUL2a:not(:checked):not(:indeterminate) {\n  color: var(--eds-theme-color-border-utility-default-medium-emphasis);\n}\n.JPSQ_ekGXNuGCtRVUL2a:not(:checked):not(:indeterminate):not(:disabled):hover {\n    color: var(--eds-theme-color-border-utility-default-medium-emphasis-hover);\n    background-color: var(--eds-theme-color-background-utility-default-no-emphasis-hover);\n  }\n.JPSQ_ekGXNuGCtRVUL2a:not(:checked):not(:indeterminate):not(:disabled):active {\n    color: var(--eds-theme-color-border-utility-default-medium-emphasis-active);\n    background-color: var(--eds-theme-color-background-utility-default-no-emphasis-active);\n  }\n.dOSpULbeFS0RS0BSuge6 .JPSQ_ekGXNuGCtRVUL2a:not(:checked):not(:indeterminate) {\n    color: var(--eds-theme-color-text-utility-critical);\n  }\n.dOSpULbeFS0RS0BSuge6 .JPSQ_ekGXNuGCtRVUL2a:not(:checked):not(:indeterminate):hover {\n      color: var(--eds-theme-color-border-utility-critical-hover);\n      background-color: var(--eds-theme-color-background-utility-critical-no-emphasis-hover);\n    }\n.dOSpULbeFS0RS0BSuge6 .JPSQ_ekGXNuGCtRVUL2a:not(:checked):not(:indeterminate):active {\n      color: var(--eds-theme-color-border-utility-critical-active);\n      background-color: var(--eds-theme-color-background-utility-critical-no-emphasis-active);\n    }\n.JPSQ_ekGXNuGCtRVUL2a:checked,\n.JPSQ_ekGXNuGCtRVUL2a:indeterminate {\n  color: var(--eds-theme-color-border-utility-default-high-emphasis);\n}\n.JPSQ_ekGXNuGCtRVUL2a:checked:hover, .JPSQ_ekGXNuGCtRVUL2a:indeterminate:hover {\n    color: var(--eds-theme-color-border-utility-default-high-emphasis-hover);\n  }\n.JPSQ_ekGXNuGCtRVUL2a:checked:active, .JPSQ_ekGXNuGCtRVUL2a:indeterminate:active {\n    color: var(--eds-theme-color-border-utility-default-high-emphasis-active);\n  }\n.dOSpULbeFS0RS0BSuge6 .JPSQ_ekGXNuGCtRVUL2a:checked, .dOSpULbeFS0RS0BSuge6 .JPSQ_ekGXNuGCtRVUL2a:indeterminate {\n    color: var(--eds-theme-color-text-utility-critical);\n  }\n.dOSpULbeFS0RS0BSuge6 .JPSQ_ekGXNuGCtRVUL2a:checked:hover, .dOSpULbeFS0RS0BSuge6 .JPSQ_ekGXNuGCtRVUL2a:indeterminate:hover {\n      color: var(--eds-theme-color-border-utility-critical-hover);\n    }\n.dOSpULbeFS0RS0BSuge6 .JPSQ_ekGXNuGCtRVUL2a:checked:active, .dOSpULbeFS0RS0BSuge6 .JPSQ_ekGXNuGCtRVUL2a:indeterminate:active {\n      color: var(--eds-theme-color-border-utility-critical-active);\n    }\n.JPSQ_ekGXNuGCtRVUL2a:disabled {\n  color: var(--eds-theme-color-background-utility-disabled-medium-emphasis);\n  cursor: not-allowed;\n}\n.JPSQ_ekGXNuGCtRVUL2a:disabled:not(:checked) {\n    color: var(--eds-theme-color-border-utility-disabled);\n    background-color: var(--eds-theme-color-text-utility-disabled-secondary);\n  }\n.JPSQ_ekGXNuGCtRVUL2a:disabled:checked,\n  .JPSQ_ekGXNuGCtRVUL2a:disabled:indeterminate {\n    background-color: var(--eds-theme-color-background-utility-disabled-medium-emphasis);\n  }\n.JPSQ_ekGXNuGCtRVUL2a:disabled:checked::before, .JPSQ_ekGXNuGCtRVUL2a:disabled:indeterminate::before {\n      color: var(--eds-theme-color-text-utility-disabled-primary);\n\n    }\n.JPSQ_ekGXNuGCtRVUL2a:focus-visible {\n  outline: calc(var(--eds-size-quarter) / 16 * 1rem) solid var(--eds-theme-color-border-utility-focus);\n}\n@supports not selector(:focus-visible) {\n  .JPSQ_ekGXNuGCtRVUL2a {\n    outline: calc(var(--eds-size-quarter) / 16 * 1rem) solid var(--eds-theme-color-border-utility-focus);\n  }\n}\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/Checkbox/Checkbox.module.css"],names:[],mappings:"AAAA;;;EAGE;AAOF,0DAA0D;AAM1D,0DAA0D;AAK1D,iEAAiE;AAWjE;;EAEE;AChCF;EACE,aAAa;EACb,wCAAwC;AAC1C;AAEA;EACE,gBAAgB;EAChB,eAAe;;EAEf,2FAA2F;EAC3F,cAAc;;EAEd,0EAA0E;EAC1E,gBAAgB;;EAEhB,qDAAqD;EACrD,WAAW;;EAEX,oEAAoE;;EAEpE,iEAAiE;EACjE,aAAa;EACb,qBAAqB;;EAErB,oEAAoE;EACpE,yCAAyC;AAC3C;AAEA;EACE,0DAA0D;EAC1D,YAAY;EACZ,kBAAkB;;EAElB;+FAC6F;EAC7F,2CAA2C;EAC3C,0CAA0C;;EAE1C,0EAA0E;EAC1E,mJAAmJ;AACrJ;AAEA;EACE,8BAA8B;EAC9B,oBAAoB;AACtB;AAEA;EACE,0DAA0D;EAC1D,YAAY;EACZ,kBAAkB;;EAElB,2CAA2C;EAC3C,0CAA0C;EAC1C,2BAA2B;AAC7B;AAEA;EACE,8BAA8B;EAC9B,oBAAoB;AACtB;AAEA;EACE,kBAAkB;AACpB;AAEA;EACE,cAAc;;EAEd,4DAA4D;AAC9D;AAEA;EACE,oEAAoE;AAyBtE;AAvBE;IACE,0EAA0E;IAC1E,qFAAqF;EACvF;AAEA;IACE,2EAA2E;IAC3E,sFAAsF;EACxF;AAEA;IACE,mDAAmD;EAWrD;AATE;MACE,2DAA2D;MAC3D,sFAAsF;IACxF;AAEA;MACE,4DAA4D;MAC5D,uFAAuF;IACzF;AAIJ;;EAEE,kEAAkE;AAqBpE;AAnBE;IACE,wEAAwE;EAC1E;AAEA;IACE,yEAAyE;EAC3E;AAEA;IACE,mDAAmD;EASrD;AAPE;MACE,2DAA2D;IAC7D;AAEA;MACE,4DAA4D;IAC9D;AAIJ;EACE,yEAAyE;EACzE,mBAAmB;AAgBrB;AAdE;IACE,qDAAqD;IACrD,wEAAwE;EAC1E;AAEA;;IAEE,oFAAoF;EAMtF;AAJE;MACE,2DAA2D;;IAE7D;AAIJ;EACE,oGAAoG;AACtG;AAEA;EACE;IACE,oGAAoG;EACtG;AACF",sourcesContent:["/**\n * Legacy Mixins\n * TODO: remove once not in use\n */\n@define-mixin focus {\n  outline: calc(var(--eds-theme-box-focus-ring-outline-width) * 1px) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: calc(var(--eds-theme-box-focus-ring-outline-offset) * 1px);\n}\n\n/* TODO(next-major): remove b/c this is no longer in use */\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n/* TODO(next-major): remove b/c this is no longer in use */\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n/* TODO(next-major): remove this after the one usage is removed */\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n/**\n * Component 2.0 Mixins\n */\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n\n  border: calc(var(--eds-border-width-sm) * 1px) solid;\n  border-radius: calc(var(--eds-theme-border-radius-objects-sm) * 1px);\n\n  outline: none;\n  padding: 0.5rem;\n  margin: 0;\n\n  transition: box-shadow calc(var(--eds-anim-fade-quick) * 1s) var(--eds-anim-ease),\n  border-color calc(var(--eds-anim-fade-quick) * 1s) var(--eds-anim-ease);\n  \n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n  \n  color: var(--eds-theme-color-text-utility-default-primary);\n  border-color: var(--eds-theme-color-border-utility-default-medium-emphasis);\n  background-color: var(--eds-theme-color-background-input);\n  \n  &:hover {\n    border-color: var(--eds-theme-color-border-utility-default-medium-emphasis-hover);\n  }\n\n  &:focus {\n    border-color: var(--eds-theme-color-border-utility-focus);\n    outline: calc(var(--eds-border-width-sm) * 1px) solid var(--eds-theme-color-border-utility-focus);\n  }\n\n  &:read-only:not(:disabled) {\n    border-color: transparent;\n    outline: none;\n    padding-left: 0;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    border-color: var(--eds-theme-color-border-utility-critical);\n\n    &:hover {\n      border-color: var(--eds-theme-color-border-utility-critical-hover);\n    }\n\n    &:focus {\n      border-color: var(--eds-theme-color-border-utility-critical);\n      outline: calc(var(--eds-border-width-sm) * 1px) solid var(--eds-theme-color-border-utility-critical);\n    }\n  }\n\n  &.warning {\n    border-color: var(--eds-theme-color-border-utility-warning);\n\n    &:hover {\n      border-color: var(--eds-theme-color-border-utility-warning-hover);\n    }\n\n    &:focus {\n      border-color: var(--eds-theme-color-border-utility-warning);\n      outline: calc(var(--eds-border-width-sm) * 1px) solid var(--eds-theme-color-border-utility-warning);\n    }\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:disabled::placeholder {\n    cursor: not-allowed;\n\n    color: var(--eds-theme-color-text-utility-disabled-primary);\n    border-color: var(--eds-theme-color-border-utility-disabled);\n    background-color: var(--eds-theme-color-background-utility-disabled-low-emphasis);\n  }\n\n  &::placeholder {\n    color: var(--eds-theme-color-text-utility-default-secondary);\n  }\n}\n","@import '../../design-tokens/mixins.css';\n\n.checkbox {\n  display: flex;\n  gap: calc(var(--eds-size-1) / 16 * 1rem);\n}\n\n.checkbox__input {\n  height: 1.125rem;\n  width: 1.125rem;\n\n  /* The parent Checkbox component is a flex container. Make sure the input doesn't shrink. */\n  flex-shrink: 0;\n\n  /* Remove the browser's checkbox styles, allowing us to provide our own. */\n  appearance: none;\n\n  /* Magic value to center the checkbox on its label. */\n  margin: 3px;\n\n  border: calc(var(--eds-size-quarter) / 16 * 1rem) solid currentColor;\n\n  /* Place the ::before content smack in the middle of the input. */\n  display: grid;\n  place-content: center;\n\n  border-radius: calc(var(--eds-theme-border-radius-objects-sm) * 1px);\n  font: var(--eds-theme-typography-body-md);\n}\n\n.checkbox__input:checked::before {\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n  content: '✓';\n  text-align: center;\n\n  /* Because the path does not have an explicit viewbox, this element's bounding box establishes\n  one. In other words, the height/width here need to match the expected viewbox for the path. */\n  height: calc(var(--eds-size-3) / 16 * 1rem);\n  width: calc(var(--eds-size-3) / 16 * 1rem);\n\n  /* use the platform's font face, which defines the checkbox glyph to use */\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.checkbox__input:checked {\n  background-color: currentColor;\n  border: currentColor;\n}\n\n.checkbox__input:indeterminate::before {\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n  content: '–';\n  text-align: center;\n\n  height: calc(var(--eds-size-3) / 16 * 1rem);\n  width: calc(var(--eds-size-3) / 16 * 1rem);\n  transform: translateY(-1px);\n}\n\n.checkbox__input:indeterminate {\n  background-color: currentColor;\n  border: currentColor;\n}\n\n.checkbox__labels {\n  position: relative;\n}\n\n.checkbox__sub-label {\n  display: block;\n\n  color: var(--eds-theme-color-text-utility-default-secondary);\n}\n\n.checkbox__input:not(:checked):not(:indeterminate) {\n  color: var(--eds-theme-color-border-utility-default-medium-emphasis);\n\n  &:not(:disabled):hover {\n    color: var(--eds-theme-color-border-utility-default-medium-emphasis-hover);\n    background-color: var(--eds-theme-color-background-utility-default-no-emphasis-hover);\n  }\n\n  &:not(:disabled):active {\n    color: var(--eds-theme-color-border-utility-default-medium-emphasis-active);\n    background-color: var(--eds-theme-color-background-utility-default-no-emphasis-active);\n  }\n\n  .checkbox--error & {\n    color: var(--eds-theme-color-text-utility-critical);\n\n    &:hover {\n      color: var(--eds-theme-color-border-utility-critical-hover);\n      background-color: var(--eds-theme-color-background-utility-critical-no-emphasis-hover);\n    }\n\n    &:active {\n      color: var(--eds-theme-color-border-utility-critical-active);\n      background-color: var(--eds-theme-color-background-utility-critical-no-emphasis-active);\n    }\n  }\n}\n\n.checkbox__input:checked,\n.checkbox__input:indeterminate {\n  color: var(--eds-theme-color-border-utility-default-high-emphasis);\n\n  &:hover {\n    color: var(--eds-theme-color-border-utility-default-high-emphasis-hover);\n  }\n\n  &:active {\n    color: var(--eds-theme-color-border-utility-default-high-emphasis-active);\n  }\n\n  .checkbox--error & {\n    color: var(--eds-theme-color-text-utility-critical);\n\n    &:hover {\n      color: var(--eds-theme-color-border-utility-critical-hover);\n    }\n\n    &:active {\n      color: var(--eds-theme-color-border-utility-critical-active);\n    }\n  }\n}\n\n.checkbox__input:disabled {\n  color: var(--eds-theme-color-background-utility-disabled-medium-emphasis);\n  cursor: not-allowed;\n\n  &:not(:checked) {\n    color: var(--eds-theme-color-border-utility-disabled);\n    background-color: var(--eds-theme-color-text-utility-disabled-secondary);\n  }\n\n  &:checked,\n  &:indeterminate {\n    background-color: var(--eds-theme-color-background-utility-disabled-medium-emphasis);\n\n    &::before {\n      color: var(--eds-theme-color-text-utility-disabled-primary);\n\n    }\n  }\n}\n\n.checkbox__input:focus-visible {\n  outline: calc(var(--eds-size-quarter) / 16 * 1rem) solid var(--eds-theme-color-border-utility-focus);\n}\n\n@supports not selector(:focus-visible) {\n  .checkbox__input {\n    outline: calc(var(--eds-size-quarter) / 16 * 1rem) solid var(--eds-theme-color-border-utility-focus);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={checkbox:"sy8lKVWP56AlOR7ys_9A",checkbox__input:"JPSQ_ekGXNuGCtRVUL2a",checkbox__labels:"aFrltPUO7xFESraoQjYw","checkbox__sub-label":"Wqh2JRkL9ZLV8JCo1at0","checkbox--error":"dOSpULbeFS0RS0BSuge6"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);