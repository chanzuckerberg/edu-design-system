"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[7215],{"./src/components/TextareaField/TextareaField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WhenDisabled:()=>WhenDisabled,WhenError:()=>WhenError,WhenNoDefaultValue:()=>WhenNoDefaultValue,WhenRequired:()=>WhenRequired,WhenUsingChildren:()=>WhenUsingChildren,WithADifferentSize:()=>WithADifferentSize,WithAMaxLength:()=>WithAMaxLength,WithARecommendedLength:()=>WithARecommendedLength,WithBothRecommendedAndMaxLengths:()=>WithBothRecommendedAndMaxLengths,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextareaField_stories});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),getMinValue=__webpack_require__("./src/util/getMinValue.ts"),useId=__webpack_require__("./src/util/useId.ts"),FieldNote=__webpack_require__("./src/components/FieldNote/FieldNote.tsx"),InputLabel=__webpack_require__("./src/components/InputLabel/InputLabel.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TextareaField_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/TextareaField/TextareaField.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TextareaField_module.Z,options);const TextareaField_TextareaField_module=TextareaField_module.Z&&TextareaField_module.Z.locals?TextareaField_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const TextArea=(0,react.forwardRef)(((_ref,ref)=>{let{className,children,disabled,defaultValue="",isError=!1,...other}=_ref;const componentClassName=(0,clsx.Z)(TextareaField_TextareaField_module.textarea,isError&&TextareaField_TextareaField_module.error,disabled&&TextareaField_TextareaField_module["textarea--disabled"],className);return react.createElement("textarea",_extends({className:componentClassName,defaultValue:children||defaultValue,ref},other))})),TextareaField=(0,react.forwardRef)(((_ref2,ref)=>{let{"aria-describedby":ariaDescribedBy,children,className,defaultValue="",disabled,fieldNote,id,isError,label,maxLength,onChange,recommendedMaxLength,required,...other}=_ref2;const[fieldText,setFieldText]=(0,react.useState)(defaultValue),generatedIdVar=(0,useId.M)(),generatedAriaDescribedById=(0,useId.M)(),idVar=id||generatedIdVar,shouldRenderOverline=!(!label&&!required),fieldLength=fieldText?.toString().length??0,textExceedsMaxLength=void 0!==maxLength&&fieldLength>maxLength,textExceedsRecommendedLength=void 0!==recommendedMaxLength&&fieldLength>recommendedMaxLength,shouldRenderError=isError||textExceedsMaxLength||textExceedsRecommendedLength,ariaDescribedByVar=fieldNote?ariaDescribedBy||generatedAriaDescribedById:void 0,componentClassName=(0,clsx.Z)(TextareaField_TextareaField_module["textarea-field"],className),overlineClassName=(0,clsx.Z)(TextareaField_TextareaField_module["textarea-field__overline"],!label&&TextareaField_TextareaField_module["textarea-field__overline--no-label"],disabled&&TextareaField_TextareaField_module["textarea-field__overline--disabled"]),labelClassName=(0,clsx.Z)(TextareaField_TextareaField_module["textarea-field__label"],disabled&&TextareaField_TextareaField_module["textarea-field__label--disabled"]),requiredTextClassName=(0,clsx.Z)(TextareaField_TextareaField_module["textarea-field__required-text"],disabled&&TextareaField_TextareaField_module["textarea-field__required-text--disabled"]),fieldLengthCountClassName=(0,clsx.Z)((textExceedsMaxLength||textExceedsRecommendedLength)&&TextareaField_TextareaField_module["textarea-field--invalid-length"]),maxLengthShown=(0,getMinValue.a)(maxLength,recommendedMaxLength);return react.createElement("div",{className:componentClassName},shouldRenderOverline&&react.createElement("div",{className:overlineClassName},label&&react.createElement(InputLabel.A,{className:labelClassName,htmlFor:idVar},label),required&&react.createElement(Text.x,{as:"p",className:requiredTextClassName,size:"sm"},"Required")),react.createElement(TextArea,_extends({"aria-describedby":ariaDescribedByVar,"aria-disabled":disabled,defaultValue,disabled,id:idVar,isError:shouldRenderError,maxLength,onChange:e=>{setFieldText(e.target.value),onChange&&onChange(e)},readOnly:disabled,ref,required},other),children),(fieldNote||maxLengthShown)&&react.createElement("div",{className:TextareaField_TextareaField_module["textarea-field__footer"]},fieldNote&&react.createElement(FieldNote.G,{className:TextareaField_TextareaField_module["textarea-field__field-note"],disabled,id:ariaDescribedByVar,isError:shouldRenderError},fieldNote),maxLengthShown&&react.createElement("div",{className:TextareaField_TextareaField_module["textarea-field__character-counter"]},react.createElement("span",{className:fieldLengthCountClassName},fieldLength)," ","/ ",maxLengthShown)))}));TextareaField.displayName="TextareaField",TextArea.displayName="TextareaField.Textarea",TextareaField.TextArea=TextArea,TextareaField.Label=InputLabel.A;try{TextareaField.displayName="TextareaField",TextareaField.__docgenInfo={description:'`import {TextareaField} from "@chanzuckerberg/eds";`\n\nMulti-line text input field with built-in labeling and accessory text to describe\nthe content. When a maximum text count is specified, component also shows relevant\ntext up to the maximum.\n\n**NOTE**: This component requires `label` or `aria-label` prop to support accessibility.',displayName:"TextareaField",props:{fieldNote:{defaultValue:null,description:"Text under the textarea used to provide a description or error message to describe the input.",name:"fieldNote",required:!1,type:{name:"ReactNode"}},isError:{defaultValue:{value:"false"},description:"Error state of the form field",name:"isError",required:!1,type:{name:"boolean"}},recommendedMaxLength:{defaultValue:null,description:"Behaves similar to `maxLength` but allows the user to continue typing more text.\nShould not be larger than `maxLength`, if present.",name:"recommendedMaxLength",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"Visible text label for the component.",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextareaField/TextareaField.tsx#TextareaField"]={docgenInfo:TextareaField.__docgenInfo,name:"TextareaField",path:"src/components/TextareaField/TextareaField.tsx#TextareaField"})}catch(__react_docgen_typescript_loader_error){}function TextareaField_stories_extends(){return TextareaField_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},TextareaField_stories_extends.apply(this,arguments)}const TextareaField_stories={title:"Components/TextareaField",component:TextareaField,args:{placeholder:"Enter long-form text here",defaultValue:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo\ndicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo\npraesentium, commodi eligendi asperiores quis dolorum porro.",label:"Textarea Field",rows:5,fieldNote:"Longer Field description",spellCheck:!1},parameters:{badges:["1.3"]}},Default={render:args=>react.createElement(TextareaField,TextareaField_stories_extends({"aria-label":"Text Label"},args))},WhenUsingChildren={args:{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo\n    dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo\n    praesentium, commodi eligendi asperiores quis dolorum porro.",defaultValue:""}},WhenNoDefaultValue={args:{defaultValue:void 0,fieldNote:void 0}},WhenDisabled={args:{disabled:!0,rows:2},parameters:{axe:{disabledRules:["color-contrast"]}}},WhenError={args:{isError:!0,fieldNote:"Text should be at least 100 characters"}},WhenRequired={args:{required:!0}},WithADifferentSize={args:{rows:10}},WithAMaxLength={args:{rows:10,maxLength:144,required:!0},render:args=>react.createElement(TextareaField,args)},WithARecommendedLength={args:{rows:10,recommendedMaxLength:144,required:!0},render:args=>react.createElement(TextareaField,args)},WithBothRecommendedAndMaxLengths={args:{rows:10,maxLength:256,recommendedMaxLength:144,required:!0},render:args=>react.createElement(TextareaField,args)};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <TextareaField aria-label="Text Label" {...args}></TextareaField>\n}',...Default.parameters?.docs?.source}}},WhenUsingChildren.parameters={...WhenUsingChildren.parameters,docs:{...WhenUsingChildren.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo\n    dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo\n    praesentium, commodi eligendi asperiores quis dolorum porro.`,\n    defaultValue: ''\n  }\n}",...WhenUsingChildren.parameters?.docs?.source},description:{story:"You can specify the content of `TextareaField` by using children. Convenient for cases where\nspecifying `value` or `defaultValue` is inconvenient.",...WhenUsingChildren.parameters?.docs?.description}}},WhenNoDefaultValue.parameters={...WhenNoDefaultValue.parameters,docs:{...WhenNoDefaultValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultValue: undefined,\n    fieldNote: undefined\n  }\n}",...WhenNoDefaultValue.parameters?.docs?.source},description:{story:"`TextareaField` does not require any initial content.",...WhenNoDefaultValue.parameters?.docs?.description}}},WhenDisabled.parameters={...WhenDisabled.parameters,docs:{...WhenDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    rows: 2\n  },\n  parameters: {\n    axe: {\n      // Disabled input does not need to meet color contrast\n      disabledRules: ['color-contrast']\n    }\n  }\n}",...WhenDisabled.parameters?.docs?.source}}},WhenError.parameters={...WhenError.parameters,docs:{...WhenError.parameters?.docs,source:{originalSource:"{\n  args: {\n    isError: true,\n    fieldNote: 'Text should be at least 100 characters'\n  }\n}",...WhenError.parameters?.docs?.source}}},WhenRequired.parameters={...WhenRequired.parameters,docs:{...WhenRequired.parameters?.docs,source:{originalSource:"{\n  args: {\n    required: true\n  }\n}",...WhenRequired.parameters?.docs?.source}}},WithADifferentSize.parameters={...WithADifferentSize.parameters,docs:{...WithADifferentSize.parameters?.docs,source:{originalSource:"{\n  args: {\n    rows: 10\n  }\n}",...WithADifferentSize.parameters?.docs?.source},description:{story:"You can size `TextareaField` by specifying `row` attribute, inherited from\n[textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).",...WithADifferentSize.parameters?.docs?.description}}},WithAMaxLength.parameters={...WithAMaxLength.parameters,docs:{...WithAMaxLength.parameters?.docs,source:{originalSource:"{\n  args: {\n    rows: 10,\n    maxLength: 144,\n    required: true\n  },\n  render: args => <TextareaField {...args} />\n}",...WithAMaxLength.parameters?.docs?.source},description:{story:"You can lock the maximum length of the text content of `TextareaField`. When setting `maxLength`,\nthe field will reuse the browser's [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)\nbehavior (e.g., prevent further text from being typed, prevent keydown events, etc.).",...WithAMaxLength.parameters?.docs?.description}}},WithARecommendedLength.parameters={...WithARecommendedLength.parameters,docs:{...WithARecommendedLength.parameters?.docs,source:{originalSource:"{\n  args: {\n    rows: 10,\n    recommendedMaxLength: 144,\n    required: true\n  },\n  render: args => <TextareaField {...args} />\n}",...WithARecommendedLength.parameters?.docs?.source},description:{story:"If you want to signal that a field has reached a maximum length but want to allow more text to be typed, you can use\n`recommendedMaxLength`. This will show a similar UI to using `maxLength` but will allow more text to be typed, and\nemit any appropriate events.",...WithARecommendedLength.parameters?.docs?.description}}},WithBothRecommendedAndMaxLengths.parameters={...WithBothRecommendedAndMaxLengths.parameters,docs:{...WithBothRecommendedAndMaxLengths.parameters?.docs,source:{originalSource:"{\n  args: {\n    rows: 10,\n    maxLength: 256,\n    recommendedMaxLength: 144,\n    required: true\n  },\n  render: args => <TextareaField {...args} />\n}",...WithBothRecommendedAndMaxLengths.parameters?.docs?.source},description:{story:"Both `maxLength` and `recommendedMaxLength` can be specified at the same time. Text length between `recommendedMaxLength`\nand `maxLength` will show the treatment warning the user about the text length being violated.",...WithBothRecommendedAndMaxLengths.parameters?.docs?.description}}};const __namedExportsOrder=["Default","WhenUsingChildren","WhenNoDefaultValue","WhenDisabled","WhenError","WhenRequired","WithADifferentSize","WithAMaxLength","WithARecommendedLength","WithBothRecommendedAndMaxLengths"];try{WhenUsingChildren.displayName="WhenUsingChildren",WhenUsingChildren.__docgenInfo={description:"You can specify the content of `TextareaField` by using children. Convenient for cases where\nspecifying `value` or `defaultValue` is inconvenient.",displayName:"WhenUsingChildren",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextareaField/TextareaField.stories.tsx#WhenUsingChildren"]={docgenInfo:WhenUsingChildren.__docgenInfo,name:"WhenUsingChildren",path:"src/components/TextareaField/TextareaField.stories.tsx#WhenUsingChildren"})}catch(__react_docgen_typescript_loader_error){}try{WhenNoDefaultValue.displayName="WhenNoDefaultValue",WhenNoDefaultValue.__docgenInfo={description:"`TextareaField` does not require any initial content.",displayName:"WhenNoDefaultValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextareaField/TextareaField.stories.tsx#WhenNoDefaultValue"]={docgenInfo:WhenNoDefaultValue.__docgenInfo,name:"WhenNoDefaultValue",path:"src/components/TextareaField/TextareaField.stories.tsx#WhenNoDefaultValue"})}catch(__react_docgen_typescript_loader_error){}try{WithADifferentSize.displayName="WithADifferentSize",WithADifferentSize.__docgenInfo={description:"You can size `TextareaField` by specifying `row` attribute, inherited from\n[textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).",displayName:"WithADifferentSize",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextareaField/TextareaField.stories.tsx#WithADifferentSize"]={docgenInfo:WithADifferentSize.__docgenInfo,name:"WithADifferentSize",path:"src/components/TextareaField/TextareaField.stories.tsx#WithADifferentSize"})}catch(__react_docgen_typescript_loader_error){}try{WithAMaxLength.displayName="WithAMaxLength",WithAMaxLength.__docgenInfo={description:"You can lock the maximum length of the text content of `TextareaField`. When setting `maxLength`,\nthe field will reuse the browser's [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)\nbehavior (e.g., prevent further text from being typed, prevent keydown events, etc.).",displayName:"WithAMaxLength",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextareaField/TextareaField.stories.tsx#WithAMaxLength"]={docgenInfo:WithAMaxLength.__docgenInfo,name:"WithAMaxLength",path:"src/components/TextareaField/TextareaField.stories.tsx#WithAMaxLength"})}catch(__react_docgen_typescript_loader_error){}try{WithARecommendedLength.displayName="WithARecommendedLength",WithARecommendedLength.__docgenInfo={description:"If you want to signal that a field has reached a maximum length but want to allow more text to be typed, you can use\n`recommendedMaxLength`. This will show a similar UI to using `maxLength` but will allow more text to be typed, and\nemit any appropriate events.",displayName:"WithARecommendedLength",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextareaField/TextareaField.stories.tsx#WithARecommendedLength"]={docgenInfo:WithARecommendedLength.__docgenInfo,name:"WithARecommendedLength",path:"src/components/TextareaField/TextareaField.stories.tsx#WithARecommendedLength"})}catch(__react_docgen_typescript_loader_error){}try{WithBothRecommendedAndMaxLengths.displayName="WithBothRecommendedAndMaxLengths",WithBothRecommendedAndMaxLengths.__docgenInfo={description:"Both `maxLength` and `recommendedMaxLength` can be specified at the same time. Text length between `recommendedMaxLength`\nand `maxLength` will show the treatment warning the user about the text length being violated.",displayName:"WithBothRecommendedAndMaxLengths",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextareaField/TextareaField.stories.tsx#WithBothRecommendedAndMaxLengths"]={docgenInfo:WithBothRecommendedAndMaxLengths.__docgenInfo,name:"WithBothRecommendedAndMaxLengths",path:"src/components/TextareaField/TextareaField.stories.tsx#WithBothRecommendedAndMaxLengths"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/TextareaField/TextareaField.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Link button styles\n */\n/*------------------------------------*\\\n    # TEXTAREA FIELD\n\\*------------------------------------*/\n/**\n * Default input styles \n */\n.dpplMKP4sXAk_v8KQxZ2 {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: var(--eds-theme-form-border-width);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: var(--eds-theme-form-border-radius);\n  outline: none;\n  padding: var(--eds-size-1);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow var(--eds-anim-fade-quick) var(--eds-anim-ease),\n    border-color var(--eds-anim-fade-quick) var(--eds-anim-ease);\n}\n.dpplMKP4sXAk_v8KQxZ2:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n.dpplMKP4sXAk_v8KQxZ2:focus {\n    outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n    outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n@media screen and (prefers-reduced-motion) {\n.dpplMKP4sXAk_v8KQxZ2 {\n    transition: none;\n}\n  }\n/**\n   * Input error state\n   */\n.dpplMKP4sXAk_v8KQxZ2.ROGO8tmHTaTehCBOGX7M {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n/**\n   * Disabled/read-only state\n   */\n.dpplMKP4sXAk_v8KQxZ2:disabled,\n  .dpplMKP4sXAk_v8KQxZ2:read-only,\n  .dpplMKP4sXAk_v8KQxZ2:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n.dpplMKP4sXAk_v8KQxZ2::placeholder {\n    color: var(--eds-theme-color-text-disabled);\n  }\n.hwMV_fQ4gfXDU5n5ne_G:focus {\n  outline: none;\n}\n/**\n * Wraps the Label and the optional/required indicator.\n */\n.SmO9N5eYhqM1u0Gk5Ei1 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: var(--eds-size-half);\n}\n.nKCEHwgcycblO7mTOp80 {\n  justify-content: flex-end;\n}\n.yYJQRZrHm8Vb4psvakSr {\n  color: var(--eds-theme-color-form-label);\n  font: var(--eds-theme-typography-form-label);\n}\n.r6iPcJbMAw0KMV5si0Pg {\n  color: var(--eds-theme-color-text-disabled);\n}\n.bagntKvgRWVfgLHqQj7w {\n  color: var(--eds-theme-color-text-neutral-subtle);\n  font: var(--eds-theme-typography-body-sm);\n}\n.J5w6aWYVWNaRfv7Txx1s {\n  color: var(--eds-theme-color-text-disabled);\n}\n.h2qx_Gt_GNKUMHNEiIWv {\n  color: var(--eds-theme-color-text-utility-error);\n}\n.nbvqBLWc4fScaqFnP5DT {\n  display: flex;\n  justify-content: space-between;\n}\n.__pMsWWAiCmGzPkoG2rM {\n  flex: 1 0 50%;\n}\n.dsVpB4pXsy37SGSR9vbQ {\n  font: var(--eds-theme-typography-body-sm);\n\n  color: var(--eds-theme-color-text-neutral-default);\n  flex: 1 0 50%;\n  text-align: right;\n}\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/TextareaField/TextareaField.module.css"],names:[],mappings:"AAAA;;EAEE;ACAF;;uCAEuC;AAEvC;;EAEE;AACF;EDkEE,4CAA4C;EAC5C,oBAAoB;EACpB,wBAAwB;EACxB,WAAW;EACX,gDAAgD;EAChD,mBAAmB;EACnB,gDAAgD;EAChD,kDAAkD;EAClD,aAAa;EACb,0BAA0B;EAC1B,SAAS;EACT,kDAAkD;EAClD,wDAAwD;EACxD;gEAC8D;AC9EhE;ADgFE;IACE,sDAAsD;EACxD;AAEA;IApCA;qCACmC;IACnC,8DAA8D;IAoC5D,gEAAgE;EAClE;AAEA;AC3FF;ID4FI,gBAAgB;AC1FpB;ED2FE;AAEA;;IAEE;AACF;IACE,4EAA4E;IAC5E,gEAAgE;EAClE;AAEA;;IAEE;AACF;;;IAGE,oDAAoD;IACpD,2CAA2C;IAC3C,mBAAmB;EACrB;AAEA;IAMA,2CAA2C;EAJ3C;AChHF;EACE,aAAa;AACf;AAEA;;EAEE;AACF;EACE,aAAa;EACb,8BAA8B;EAC9B,mCAAmC;AACrC;AAEA;EACE,yBAAyB;AAC3B;AAEA;EACE,wCAAwC;EACxC,4CAA4C;AAC9C;AACA;EACE,2CAA2C;AAC7C;AAEA;EACE,iDAAiD;EACjD,yCAAyC;AAC3C;AACA;EACE,2CAA2C;AAC7C;AAEA;EACE,gDAAgD;AAClD;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;AAEA;EACE,aAAa;AACf;AAEA;EACE,yCAAyC;;EAEzC,kDAAkD;EAClD,aAAa;EACb,iBAAiB;AACnB",sourcesContent:["/**\n * Link button styles\n */\n@define-mixin textLink {\n  font-size: inherit;\n  font-weight: var(--eds-font-weight-medium);\n  line-height: inherit;\n\n  color: var(--eds-theme-color-link-brand-text);\n  text-decoration: underline;\n  text-decoration-color: var(--eds-theme-color-link-brand-text-decoration);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n\n  svg {\n    /* Has smaller icons than other button styles. */\n    --icon-size-default: 1.25em;\n  }\n\n  &:hover {\n    color: var(--eds-theme-color-link-brand-text-hover);\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-hover);\n  }\n\n  &:focus-visible {\n    /**\n     * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n     * color, but it will also make borders 100% opacity black.\n     */\n    outline: 1px solid transparent;\n    color: var(--eds-theme-color-link-brand-text-focus) !important;\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n    background-color: var(--eds-theme-color-link-brand-background-focus);\n  }\n\n  @supports not selector(:focus-visible) {\n    &:focus {\n      /**\n       * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n       * color, but it will also make borders 100% opacity black.\n       */\n      outline: 1px solid transparent;\n      color: var(--eds-theme-color-link-brand-text-focus) !important;\n      text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n      background-color: var(--eds-theme-color-link-brand-background-focus);\n    }\n  }\n}\n\n@define-mixin TextLinkInverted {\n  @mixin textLink;\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n\n  &:focus {\n    @mixin focusInverted;\n  }\n}\n\n@define-mixin focus {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n\n@define-mixin focusInside {\n  @mixin focus;\n  outline-offset: calc(-1 * var(--eds-theme-box-focus-ring-outline-offset));\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: var(--eds-theme-form-border-width);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: var(--eds-theme-form-border-radius);\n  outline: none;\n  padding: var(--eds-size-1);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow var(--eds-anim-fade-quick) var(--eds-anim-ease),\n    border-color var(--eds-anim-fade-quick) var(--eds-anim-ease);\n\n  &:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n\n  &:focus {\n    @mixin focus;\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n\n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:read-only,\n  &:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    @mixin placeholderStyles;\n  }\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin fieldsetStyles {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin legendReset {\n  display: inline-block;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n@define-mixin messagingBrand {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n}\n\n@define-mixin messagingNeutral {\n  --messaging-border-color: var(--eds-theme-color-border-neutral-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-neutral-subtle);\n\n  background: var(--eds-theme-color-background-neutral-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n@define-mixin messagingSuccess {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n\n@define-mixin messagingWarning {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-warning);\n\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n}\n\n@define-mixin messagingError {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n@define-mixin messagingYield {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n","@import '../../design-tokens/mixins.css';\n\n/*------------------------------------*\\\n    # TEXTAREA FIELD\n\\*------------------------------------*/\n\n/**\n * Default input styles \n */\n.textarea {\n  @mixin inputStyles;\n}\n\n.textarea--disabled:focus {\n  outline: none;\n}\n\n/**\n * Wraps the Label and the optional/required indicator.\n */\n.textarea-field__overline {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: var(--eds-size-half);\n}\n\n.textarea-field__overline--no-label {\n  justify-content: flex-end;\n}\n\n.textarea-field__label {\n  color: var(--eds-theme-color-form-label);\n  font: var(--eds-theme-typography-form-label);\n}\n.textarea-field__label--disabled {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n.textarea-field__required-text {\n  color: var(--eds-theme-color-text-neutral-subtle);\n  font: var(--eds-theme-typography-body-sm);\n}\n.textarea-field__required-text--disabled {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n.textarea-field--invalid-length {\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n.textarea-field__footer {\n  display: flex;\n  justify-content: space-between;\n}\n\n.textarea-field__field-note {\n  flex: 1 0 50%;\n}\n\n.textarea-field__character-counter {\n  font: var(--eds-theme-typography-body-sm);\n\n  color: var(--eds-theme-color-text-neutral-default);\n  flex: 1 0 50%;\n  text-align: right;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={textarea:"dpplMKP4sXAk_v8KQxZ2",error:"ROGO8tmHTaTehCBOGX7M","textarea--disabled":"hwMV_fQ4gfXDU5n5ne_G","textarea-field__overline":"SmO9N5eYhqM1u0Gk5Ei1","textarea-field__overline--no-label":"nKCEHwgcycblO7mTOp80","textarea-field__label":"yYJQRZrHm8Vb4psvakSr","textarea-field__label--disabled":"r6iPcJbMAw0KMV5si0Pg","textarea-field__required-text":"bagntKvgRWVfgLHqQj7w","textarea-field__required-text--disabled":"J5w6aWYVWNaRfv7Txx1s","textarea-field--invalid-length":"h2qx_Gt_GNKUMHNEiIWv","textarea-field__footer":"nbvqBLWc4fScaqFnP5DT","textarea-field__field-note":"__pMsWWAiCmGzPkoG2rM","textarea-field__character-counter":"dsVpB4pXsy37SGSR9vbQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);