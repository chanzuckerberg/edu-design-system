"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[8261],{"./src/components/FieldLabel/FieldLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>FieldLabel});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),FieldLabel_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/FieldLabel/FieldLabel.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FieldLabel_module.Z,options);const FieldLabel_FieldLabel_module=FieldLabel_module.Z&&FieldLabel_module.Z.locals?FieldLabel_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FieldLabel=react.forwardRef(((_ref,ref)=>{let{children,className,htmlFor,size="lg",disabled,...other}=_ref;const componentClassName=(0,clsx.Z)(FieldLabel_FieldLabel_module.label,"md"===size&&FieldLabel_FieldLabel_module["label--md"],"lg"===size&&FieldLabel_FieldLabel_module["label--lg"],disabled&&FieldLabel_FieldLabel_module["label--disabled"],className);return react.createElement("label",_extends({"aria-disabled":disabled??void 0,className:componentClassName,htmlFor,ref},other),children)}));FieldLabel.displayName="FieldLabel";try{FieldLabel.displayName="FieldLabel",FieldLabel.__docgenInfo={description:'`import {FieldLabel} from "@chanzuckerberg/eds";`\n\nLabel associated with an input element or field.',displayName:"FieldLabel",props:{children:{defaultValue:null,description:"Text to render in label.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classnames passed in for styling.",name:"className",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"ID of input that label is associated with.",name:"htmlFor",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Indicates disabled state of the input.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"lg"},description:'Size of the label.\n\n**Default is `"lg"`**.',name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FieldLabel/FieldLabel.tsx#FieldLabel"]={docgenInfo:FieldLabel.__docgenInfo,name:"FieldLabel",path:"src/components/FieldLabel/FieldLabel.tsx#FieldLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FieldLabel/FieldLabel.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LargeDisabled:()=>LargeDisabled,LongCopy:()=>LongCopy,Medium:()=>Medium,MediumDisabled:()=>MediumDisabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/FieldLabel",component:__webpack_require__("./src/components/FieldLabel/FieldLabel.tsx").Q,args:{children:"Label"},parameters:{layout:"centered",badges:["api-2.0","theme-2.0"]}},Default={},Medium={args:{size:"md"}},LargeDisabled={args:{disabled:!0},parameters:{axe:{disabledRules:["color-contrast"]}}},MediumDisabled={args:{disabled:!0,size:"md"},parameters:{axe:{disabledRules:["color-contrast"]}}},LongCopy={args:{children:"Long label lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac id velit ut egestas arcu. Atmaecenas urna, risus donec praesent eu consectetur."}},__namedExportsOrder=["Default","Medium","LargeDisabled","MediumDisabled","LongCopy"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'md'\n  }\n}",...Medium.parameters?.docs?.source}}},LargeDisabled.parameters={...LargeDisabled.parameters,docs:{...LargeDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  },\n  parameters: {\n    axe: {\n      disabledRules: ['color-contrast']\n    }\n  }\n}",...LargeDisabled.parameters?.docs?.source}}},MediumDisabled.parameters={...MediumDisabled.parameters,docs:{...MediumDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    size: 'md'\n  },\n  parameters: {\n    axe: {\n      disabledRules: ['color-contrast']\n    }\n  }\n}",...MediumDisabled.parameters?.docs?.source}}},LongCopy.parameters={...LongCopy.parameters,docs:{...LongCopy.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Long label lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac id velit ut egestas arcu. Atmaecenas urna, risus donec praesent eu consectetur.'\n  }\n}",...LongCopy.parameters?.docs?.source}}}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/FieldLabel/FieldLabel.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Legacy Mixins\n * TODO: remove once not in use\n */\n/**\n * Component 2.0 Mixins\n */\n/*------------------------------------*\\\n    # FIELD LABEL\n\\*------------------------------------*/\n/**\n * Text labeling the field component.\n */\n.pvub3gvK7ZJPOdVEl32y {\n  color: var(--eds-theme-color-text-utility-default-primary);\n}\n/**\n * Disabled variant of the field label.\n */\n.nwhxtMpF3rMnoKvZ3kP_ {\n  color: var(--eds-theme-color-text-utility-disabled-primary);\n}\n/**\n * Field label size variants.\n */\n.n7yhV4s0kr2p4Jkqweco {\n  font: var(--eds-theme-typography-body-sm);\n}\n.z6uZ_3Zp5Q00Exeer006 {\n  font: var(--eds-theme-typography-body-md);\n}\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/FieldLabel/FieldLabel.module.css"],names:[],mappings:"AAAA;;;EAGE;AA0BF;;EAEE;AC7BF;;uCAEuC;AAEvC;;EAEE;AACF;EACE,0DAA0D;AAC5D;AAEA;;EAEE;AACF;EACE,2DAA2D;AAC7D;AAEA;;EAEE;AACF;EACE,yCAAyC;AAC3C;AACA;EACE,yCAAyC;AAC3C",sourcesContent:["/**\n * Legacy Mixins\n * TODO: remove once not in use\n */\n@define-mixin focus {\n  outline: calc(var(--eds-theme-box-focus-ring-outline-width) * 1px) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: calc(var(--eds-theme-box-focus-ring-outline-offset) * 1px);\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n/**\n * Component 2.0 Mixins\n */\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n\n  border: calc(var(--eds-border-width-sm) * 1px) solid;\n  border-radius: calc(var(--eds-theme-border-radius-objects-sm) * 1px);\n\n  outline: none;\n  padding: 0.5rem;\n  margin: 0;\n\n  transition: box-shadow calc(var(--eds-anim-fade-quick) * 1s) var(--eds-anim-ease),\n  border-color calc(var(--eds-anim-fade-quick) * 1s) var(--eds-anim-ease);\n  \n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n  \n  color: var(--eds-theme-color-text-utility-default-primary);\n  border-color: var(--eds-theme-color-border-utility-default-medium-emphasis);\n  background-color: var(--eds-theme-color-background-input);\n  \n  &:hover {\n    border-color: var(--eds-theme-color-border-utility-default-medium-emphasis-hover);\n  }\n\n  &:focus {\n    border-color: var(--eds-theme-color-border-utility-focus);\n    outline: calc(var(--eds-border-width-sm) * 1px) solid var(--eds-theme-color-border-utility-focus);\n  }\n\n  &:read-only:not(:disabled) {\n    border-color: transparent;\n    outline: none;\n    padding-left: 0;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    border-color: var(--eds-theme-color-border-utility-critical);\n\n    &:hover {\n      border-color: var(--eds-theme-color-border-utility-critical-hover);\n    }\n\n    &:focus {\n      border-color: var(--eds-theme-color-border-utility-critical);\n      outline: calc(var(--eds-border-width-sm) * 1px) solid var(--eds-theme-color-border-utility-critical);\n    }\n  }\n\n  &.warning {\n    border-color: var(--eds-theme-color-border-utility-warning);\n\n    &:hover {\n      border-color: var(--eds-theme-color-border-utility-warning-hover);\n    }\n\n    &:focus {\n      border-color: var(--eds-theme-color-border-utility-warning);\n      outline: calc(var(--eds-border-width-sm) * 1px) solid var(--eds-theme-color-border-utility-warning);\n    }\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:disabled::placeholder {\n    cursor: not-allowed;\n\n    color: var(--eds-theme-color-text-utility-disabled-primary);\n    border-color: var(--eds-theme-color-border-utility-disabled);\n    background-color: var(--eds-theme-color-background-utility-disabled-low-emphasis);\n  }\n\n  &::placeholder {\n    color: var(--eds-theme-color-text-utility-default-secondary);\n  }\n}\n","@import '../../design-tokens/mixins.css';\n\n/*------------------------------------*\\\n    # FIELD LABEL\n\\*------------------------------------*/\n\n/**\n * Text labeling the field component.\n */\n.label {\n  color: var(--eds-theme-color-text-utility-default-primary);\n}\n\n/**\n * Disabled variant of the field label.\n */\n.label--disabled {\n  color: var(--eds-theme-color-text-utility-disabled-primary);\n}\n\n/**\n * Field label size variants.\n */\n.label--md {\n  font: var(--eds-theme-typography-body-sm);\n}\n.label--lg {\n  font: var(--eds-theme-typography-body-md);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={label:"pvub3gvK7ZJPOdVEl32y","label--disabled":"nwhxtMpF3rMnoKvZ3kP_","label--md":"n7yhV4s0kr2p4Jkqweco","label--lg":"z6uZ_3Zp5Q00Exeer006"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);