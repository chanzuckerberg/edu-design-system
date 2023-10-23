"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[2664],{"./src/components/InputField/InputField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>InputField});var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),getMinValue=__webpack_require__("./src/util/getMinValue.ts"),useId=__webpack_require__("./src/util/useId.ts"),FieldNote=__webpack_require__("./src/components/FieldNote/FieldNote.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),InputLabel=__webpack_require__("./src/components/InputLabel/InputLabel.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),InputField_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/InputField/InputField.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(InputField_module.Z,options);const InputField_InputField_module=InputField_module.Z&&InputField_module.Z.locals?InputField_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const InputField=(0,react.forwardRef)(((_ref,ref)=>{let{"aria-describedby":ariaDescribedBy,className,disabled,fieldNote,id,inputWithin,isError,label,maxLength,onChange,recommendedMaxLength,required,type="text",...other}=_ref;const shouldRenderOverline=!(!label&&!required),[fieldText,setFieldText]=(0,react.useState)(other.defaultValue),overlineClassName=(0,clsx_m.Z)(InputField_InputField_module["input-field__overline"],!label&&InputField_InputField_module["input-field__overline--no-label"]),labelClassName=(0,clsx_m.Z)(InputField_InputField_module["input-field__label"],disabled&&InputField_InputField_module["input-field__label--disabled"]),requiredTextClassName=(0,clsx_m.Z)(InputField_InputField_module["input-field__required-text"],disabled&&InputField_InputField_module["input-field__required-text--disabled"]),inputBodyClassName=(0,clsx_m.Z)(InputField_InputField_module["input-field__body"],fieldNote&&InputField_InputField_module["input-field--has-fieldNote"]),fieldLength=fieldText?.toString().length??0,textExceedsMaxLength=!(void 0===maxLength||!fieldLength)&&fieldLength>maxLength,textExceedsRecommendedLength=!(void 0===recommendedMaxLength||!fieldLength)&&fieldLength>recommendedMaxLength,shouldRenderError=isError||textExceedsMaxLength||textExceedsRecommendedLength,generatedIdVar=(0,useId.M)(),idVar=id||generatedIdVar,generatedAriaDescribedById=(0,useId.M)(),ariaDescribedByVar=fieldNote?ariaDescribedBy||generatedAriaDescribedById:void 0,fieldLengthCountClassName=(0,clsx_m.Z)((textExceedsMaxLength||textExceedsRecommendedLength)&&InputField_InputField_module["input-field--invalid-length"]),maxLengthShown=(0,getMinValue.a)(maxLength,recommendedMaxLength);return react.createElement("div",{className},shouldRenderOverline&&react.createElement("div",{className:overlineClassName},label&&react.createElement(InputLabel.A,{className:labelClassName,htmlFor:idVar},label),required&&react.createElement(Text.x,{as:"span",className:requiredTextClassName,size:"sm"},"Required")),react.createElement("div",{className:inputBodyClassName},react.createElement(Input.I,_extends({"aria-describedby":ariaDescribedByVar,"aria-invalid":!!isError,disabled,id:idVar,isError:shouldRenderError,maxLength,onChange:e=>{setFieldText(e.target.value),onChange&&onChange(e)},ref,required,type},other)),inputWithin&&react.createElement("div",{className:InputField_InputField_module["input-field__input-within"]},inputWithin)),maxLengthShown?react.createElement("div",{className:InputField_InputField_module["input-field__footer"]},fieldNote&&react.createElement(FieldNote.G,{disabled,id:ariaDescribedByVar,isError:shouldRenderError},fieldNote),maxLengthShown&&react.createElement("div",{className:InputField_InputField_module["input-field__character-counter"]},react.createElement("span",{className:fieldLengthCountClassName},fieldLength)," ","/ ",maxLengthShown)):react.createElement(react.Fragment,null,fieldNote&&react.createElement(FieldNote.G,{disabled,id:ariaDescribedByVar,isError:shouldRenderError},fieldNote)))}));InputField.displayName="InputField",InputField.Input=Input.I,InputField.Label=InputLabel.A;try{InputField.displayName="InputField",InputField.__docgenInfo={description:'`import {InputField} from "@chanzuckerberg/eds";`\n\nAn input with optional labels and error messaging built-in.\n\nNOTE: This component requires `label` or `aria-label` prop',displayName:"InputField",props:{fieldNote:{defaultValue:null,description:"Text under the text input used to provide a description or error message to describe the input.",name:"fieldNote",required:!1,type:{name:"ReactNode"}},inputWithin:{defaultValue:null,description:"Node(s) that can be nested within the input field",name:"inputWithin",required:!1,type:{name:"ReactNode"}},isError:{defaultValue:null,description:"Error state of the form field",name:"isError",required:!1,type:{name:"boolean"}},recommendedMaxLength:{defaultValue:null,description:"Behaves similar to `maxLength` but allows the user to continue typing more text.\nShould not be larger than `maxLength`, if present.",name:"recommendedMaxLength",required:!1,type:{name:"number"}},requiredLabel:{defaultValue:null,description:"String for the required label to add additional information if needed.",name:"requiredLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Visible text label for the component.",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputField/InputField.tsx#InputField"]={docgenInfo:InputField.__docgenInfo,name:"InputField",path:"src/components/InputField/InputField.tsx#InputField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Label_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Label/Label.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Label_module.Z,options);const Label_Label_module=Label_module.Z&&Label_module.Z.locals?Label_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Label=_ref=>{let{className,hideLabel,htmlFor,id,labelAfter,optionalLabel="(optional)",required=!0,requiredLabel,text,...other}=_ref;const componentClassName=(0,clsx_m.Z)(Label_Label_module.label,hideLabel&&Label_Label_module["u-is-vishidden"],className);return react.createElement("label",_extends({className:componentClassName,htmlFor,id},other),text," ",!required&&react.createElement("span",{className:Label_Label_module.label__flag},optionalLabel),requiredLabel&&react.createElement("span",{className:Label_Label_module.label__flag},requiredLabel),labelAfter&&react.createElement("span",{className:Label_Label_module.label__after},labelAfter))};Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:'`import {Label} from "@chanzuckerberg/eds";`\n\nComponent Label used as legends for field groups (i.e. radio field).',displayName:"Label",props:{className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},hideLabel:{defaultValue:null,description:"Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies",name:"hideLabel",required:!1,type:{name:"boolean"}},htmlFor:{defaultValue:null,description:"HTML `for` attribute, which maps the label to an associated input `id`",name:"htmlFor",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"HTML id for the component",name:"id",required:!1,type:{name:"string"}},labelAfter:{defaultValue:null,description:"Slot for node to appear directly after field label. Typically used to include a Toolip",name:"labelAfter",required:!1,type:{name:"ReactNode"}},optionalLabel:{defaultValue:{value:"(optional)"},description:"String for the optional label. By default it is '(optional)'",name:"optionalLabel",required:!1,type:{name:"string"}},required:{defaultValue:{value:"true"},description:'Indicates that field is required for form to be successfully submitted. Non-required fields will display a text "(optional)" beside the label text',name:"required",required:!1,type:{name:"boolean"}},requiredLabel:{defaultValue:null,description:"String for the required label to add additional information if needed.",name:"requiredLabel",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"The label text string",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/InputField/InputField.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # INPUT FIELD\n\\*------------------------------------*/\n\n/**\n * Wraps the Label and the optional/required indicator.\n */\n\n.uqKIWFnvqRQ4EqjRzXDX {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: var(--eds-size-half);\n}\n\n.KiiN3YnUxRoguCpIzFbD {\n  justify-content: flex-end;\n}\n\n/**\n * Input field body\n */\n\n.jAThSKdjjwjelCOAYYTP {\n  position: relative;\n}\n\n.Q5PbmqZ8reEihhQWCp_w {\n  color: var(--eds-theme-color-form-label);\n  font: var(--eds-theme-typography-form-label);\n}\n\n.HC4_K1EcW6I1B0MyrU_2 {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n.Vjy1TRLMLDQsHpuroXOG {\n  color: var(--eds-theme-color-text-neutral-subtle);\n  font: var(--eds-theme-typography-body-sm);\n}\n\n.RvlqiDLmRLO4Hg67lKBA {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n.TnAX15ps27dQjZPUOA1M {\n  display: flex;\n  justify-content: space-between;\n}\n\n.KkL5mglogu5wp0ruM51C {\n  font: var(--eds-theme-typography-body-sm);\n\n  color: var(--eds-theme-color-text-neutral-default);\n  flex: 1 0 50%;\n  text-align: right;\n}\n\n.iAp4GYhfcTbbZ6kjjpsY {\n  margin-bottom: var(--eds-size-half);\n}\n\n.CkBrV_cFQ7F_iM19EqAA {\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n/**\n * Input Field Within\n *\n * A slot to put arbitrary content that appears within the input field border to the right. \n *\n * Typically used for buttons and icon buttons to enable things like show/hide password buttons .\n */\n\n.Lqi8fmazao9voiLqbcgc {\n  position: absolute;\n  right: var(--eds-size-2);\n  top: 0;\n  bottom: 0;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n","",{version:3,sources:["webpack://./src/components/InputField/InputField.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;EAEE;;AACF;EACE,aAAa;EACb,8BAA8B;EAC9B,mCAAmC;AACrC;;AACA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE;;AACF;EACE,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,4CAA4C;AAC9C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;EACjD,yCAAyC;AAC3C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,yCAAyC;;EAEzC,kDAAkD;EAClD,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,gDAAgD;AAClD;;AAEA;;;;;;EAME;;AACF;EACE,kBAAkB;EAClB,wBAAwB;EACxB,MAAM;EACN,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB",sourcesContent:["/*------------------------------------*\\\n    # INPUT FIELD\n\\*------------------------------------*/\n\n/**\n * Wraps the Label and the optional/required indicator.\n */\n.input-field__overline {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: var(--eds-size-half);\n}\n.input-field__overline--no-label {\n  justify-content: flex-end;\n}\n\n/**\n * Input field body\n */\n.input-field__body {\n  position: relative;\n}\n\n.input-field__label {\n  color: var(--eds-theme-color-form-label);\n  font: var(--eds-theme-typography-form-label);\n}\n\n.input-field__label--disabled {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n.input-field__required-text {\n  color: var(--eds-theme-color-text-neutral-subtle);\n  font: var(--eds-theme-typography-body-sm);\n}\n\n.input-field__required-text--disabled {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n.input-field__footer {\n  display: flex;\n  justify-content: space-between;\n}\n\n.input-field__character-counter {\n  font: var(--eds-theme-typography-body-sm);\n\n  color: var(--eds-theme-color-text-neutral-default);\n  flex: 1 0 50%;\n  text-align: right;\n}\n\n.input-field--has-fieldNote {\n  margin-bottom: var(--eds-size-half);\n}\n\n.input-field--invalid-length {\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n/**\n * Input Field Within\n *\n * A slot to put arbitrary content that appears within the input field border to the right. \n *\n * Typically used for buttons and icon buttons to enable things like show/hide password buttons .\n */\n.input-field__input-within {\n  position: absolute;\n  right: var(--eds-size-2);\n  top: 0;\n  bottom: 0;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"input-field__overline":"uqKIWFnvqRQ4EqjRzXDX","input-field__overline--no-label":"KiiN3YnUxRoguCpIzFbD","input-field__body":"jAThSKdjjwjelCOAYYTP","input-field__label":"Q5PbmqZ8reEihhQWCp_w","input-field__label--disabled":"HC4_K1EcW6I1B0MyrU_2","input-field__required-text":"Vjy1TRLMLDQsHpuroXOG","input-field__required-text--disabled":"RvlqiDLmRLO4Hg67lKBA","input-field__footer":"TnAX15ps27dQjZPUOA1M","input-field__character-counter":"KkL5mglogu5wp0ruM51C","input-field--has-fieldNote":"iAp4GYhfcTbbZ6kjjpsY","input-field--invalid-length":"CkBrV_cFQ7F_iM19EqAA","input-field__input-within":"Lqi8fmazao9voiLqbcgc"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Label/Label.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Link button styles\n */\n/*------------------------------------*\\\n    # LABEL\n\\*------------------------------------*/\n/**\n * Label\n * \n * Labels can sometimes be marked up as legends for field groups (i.e. radio field).\n */\n.cjQoqVs3VqSYANFvJFBU {\n  font: var(--eds-theme-typography-form-label);\n  display: inline-block;\n}\n/**\n * Label flag\n *\n * A flag to mark whether or not a field is required or optional. Currently a flag\n * is only present for optional fields.\n */\n.O2krDR0BPuf3uvespOlN {\n  font: var(--eds-theme-typography-body-sm);\n}\n/**\n * Label after\n *\n * An empty slot for additional element to appear to the right of the label text.\n * Typically used to present tooltips by the labels.\n */\n._JF2SUTyrj89YEtIRsow {\n  display: inline-block;\n  position: relative;\n  top: 3px;\n  margin-left: var(--eds-size-1);\n}\n/**\n * Visually hides the label element but is kept for screen reading accessibility.\n */\n.Y4hkd79j2H1YNLBQjwsg {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/Label/Label.module.css"],names:[],mappings:"AAAA;;EAEE;ACAF;;uCAEuC;AAEvC;;;;EAIE;AACF;EACE,4CAA4C;EAC5C,qBAAqB;AACvB;AAEA;;;;;EAKE;AACF;EACE,yCAAyC;AAC3C;AAEA;;;;;EAKE;AACF;EACE,qBAAqB;EACrB,kBAAkB;EAClB,QAAQ;EACR,8BAA8B;AAChC;AAEA;;EAEE;AACF;EDwGE,6BAA6B;EAC7B,2BAA2B;EAC3B,qBAAqB;EACrB,sBAAsB;EACtB,qBAAqB;EACrB,oBAAoB;EACpB,yCAAyC;AC5G3C",sourcesContent:["/**\n * Link button styles\n */\n@define-mixin textLink {\n  font-size: inherit;\n  font-weight: var(--eds-font-weight-medium);\n  line-height: inherit;\n\n  color: var(--eds-theme-color-link-brand-text);\n  text-decoration: underline;\n  text-decoration-color: var(--eds-theme-color-link-brand-text-decoration);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n\n  svg {\n    /* Has smaller icons than other button styles. */\n    --icon-size-default: 1.25em;\n  }\n\n  &:hover {\n    color: var(--eds-theme-color-link-brand-text-hover);\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-hover);\n  }\n\n  &:focus-visible {\n    /**\n     * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n     * color, but it will also make borders 100% opacity black.\n     */\n    outline: 1px solid transparent;\n    color: var(--eds-theme-color-link-brand-text-focus) !important;\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n    background-color: var(--eds-theme-color-link-brand-background-focus);\n  }\n\n  @supports not selector(:focus-visible) {\n    &:focus {\n      /**\n       * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n       * color, but it will also make borders 100% opacity black.\n       */\n      outline: 1px solid transparent;\n      color: var(--eds-theme-color-link-brand-text-focus) !important;\n      text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n      background-color: var(--eds-theme-color-link-brand-background-focus);\n    }\n  }\n}\n\n@define-mixin TextLinkInverted {\n  @mixin textLink;\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n\n  &:focus {\n    @mixin focusInverted;\n  }\n}\n\n@define-mixin focus {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n\n@define-mixin focusInside {\n  @mixin focus;\n  outline-offset: calc(-1 * var(--eds-theme-box-focus-ring-outline-offset));\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: var(--eds-theme-form-border-width);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: var(--eds-theme-form-border-radius);\n  outline: none;\n  padding: var(--eds-size-1);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow var(--eds-anim-fade-quick) var(--eds-anim-ease),\n    border-color var(--eds-anim-fade-quick) var(--eds-anim-ease);\n\n  &:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n\n  &:focus {\n    @mixin focus;\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n\n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:read-only,\n  &:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    @mixin placeholderStyles;\n  }\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin fieldsetStyles {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin legendReset {\n  display: inline-block;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n@define-mixin messagingBrand {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n}\n\n@define-mixin messagingNeutral {\n  --messaging-border-color: var(--eds-theme-color-border-neutral-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-neutral-subtle);\n\n  background: var(--eds-theme-color-background-neutral-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n@define-mixin messagingSuccess {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n\n@define-mixin messagingWarning {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-warning);\n\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n}\n\n@define-mixin messagingError {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n@define-mixin messagingYield {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n","@import '../../design-tokens/mixins.css';\n\n/*------------------------------------*\\\n    # LABEL\n\\*------------------------------------*/\n\n/**\n * Label\n * \n * Labels can sometimes be marked up as legends for field groups (i.e. radio field).\n */\n.label {\n  font: var(--eds-theme-typography-form-label);\n  display: inline-block;\n}\n\n/**\n * Label flag\n *\n * A flag to mark whether or not a field is required or optional. Currently a flag\n * is only present for optional fields.\n */\n.label__flag {\n  font: var(--eds-theme-typography-body-sm);\n}\n\n/**\n * Label after\n *\n * An empty slot for additional element to appear to the right of the label text.\n * Typically used to present tooltips by the labels.\n */\n.label__after {\n  display: inline-block;\n  position: relative;\n  top: 3px;\n  margin-left: var(--eds-size-1);\n}\n\n/**\n * Visually hides the label element but is kept for screen reading accessibility.\n */\n.u-is-vishidden {\n  @mixin visuallyHide;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={label:"cjQoqVs3VqSYANFvJFBU",label__flag:"O2krDR0BPuf3uvespOlN",label__after:"_JF2SUTyrj89YEtIRsow","u-is-vishidden":"Y4hkd79j2H1YNLBQjwsg"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);