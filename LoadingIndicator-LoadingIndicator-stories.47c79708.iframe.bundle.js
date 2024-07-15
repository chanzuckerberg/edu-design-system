"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[1371],{"./src/components/LoadingIndicator/LoadingIndicator.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ExtraSmall:()=>ExtraSmall,Invisible:()=>Invisible,Large:()=>Large,Medium:()=>Medium,Small:()=>Small,WithAriaLabel:()=>WithAriaLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/LoadingIndicator",component:__webpack_require__("./src/components/LoadingIndicator/LoadingIndicator.tsx").T,parameters:{layout:"centered",badges:["intro-1.2","current-2.0"]}},Default={},ExtraSmall={args:{size:"xs"}},Small={args:{size:"sm"}},Medium={args:{size:"md"}},Large={args:{size:"lg"}},Invisible={args:{isVisible:!1}},WithAriaLabel={args:{ariaLabel:"Loading, Please Wait"}},__namedExportsOrder=["Default","ExtraSmall","Small","Medium","Large","Invisible","WithAriaLabel"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},ExtraSmall.parameters={...ExtraSmall.parameters,docs:{...ExtraSmall.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'xs'\n  }\n}",...ExtraSmall.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'sm'\n  }\n}",...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'md'\n  }\n}",...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'lg'\n  }\n}",...Large.parameters?.docs?.source}}},Invisible.parameters={...Invisible.parameters,docs:{...Invisible.parameters?.docs,source:{originalSource:"{\n  args: {\n    isVisible: false\n  }\n}",...Invisible.parameters?.docs?.source}}},WithAriaLabel.parameters={...WithAriaLabel.parameters,docs:{...WithAriaLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    ariaLabel: 'Loading, Please Wait'\n  }\n}",...WithAriaLabel.parameters?.docs?.source}}}},"./src/components/LoadingIndicator/LoadingIndicator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>LoadingIndicator});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LoadingIndicator_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/LoadingIndicator/LoadingIndicator.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LoadingIndicator_module.Z,options);const LoadingIndicator_LoadingIndicator_module=LoadingIndicator_module.Z&&LoadingIndicator_module.Z.locals?LoadingIndicator_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const loaderSize={xs:16,sm:24,md:40,lg:56},loaderStrokeSize={xs:4,sm:4,md:4,lg:4},loaderViewportSize={xs:"-22 -22 46 46",sm:"-22 -22 46 46",md:"-22 -22 46 46",lg:"-22 -22 46 46"},LoadingIndicator=_ref=>{let{ariaLabel="loading",className,size="md",isVisible:visible=!0,...other}=_ref;const componentClassName=(0,clsx.Z)(LoadingIndicator_LoadingIndicator_module["loading-indicator"],!visible&&LoadingIndicator_LoadingIndicator_module["loading-indicator--invisible"],className);return react.createElement("div",_extends({"aria-busy":"true","aria-label":ariaLabel,className:componentClassName,"data-testid":"oval-loading",role:"status"},other),react.createElement("svg",{"data-testid":"oval-svg",height:loaderSize[size],stroke:"transparent",viewBox:loaderViewportSize[size],width:loaderSize[size],xmlns:"http://www.w3.org/2000/svg"},react.createElement("g",{fill:"none",fillRule:"evenodd"},react.createElement("g",{"data-testid":"oval-secondary-group",strokeWidth:loaderStrokeSize[size],transform:"translate(1 1)"},react.createElement("circle",{cx:"0",cy:"0",r:"20",stroke:"transparent",strokeOpacity:".5",strokeWidth:loaderStrokeSize[size]}),react.createElement("path",{d:"M20 0c0-9.94-8.06-20-20-20"},react.createElement("animateTransform",{attributeName:"transform",dur:"1s",from:"0 0 0",repeatCount:"indefinite",to:"360 0 0",type:"rotate"}))))))};LoadingIndicator.displayName="LoadingIndicator";try{LoadingIndicator.displayName="LoadingIndicator",LoadingIndicator.__docgenInfo={description:'`import {LoadingIndicator} from "@chanzuckerberg/eds";`\n\nLoading indicators inform users about the wait time, reason, and status of ongoing processes when the layout is unknown\n\nFor screen readers, add a custom `aria-label` to describe what is loading.',displayName:"LoadingIndicator",props:{className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"loading"},description:'Aria label of the oval. Default is "loading". Will be overridden if ariaLabel is passed in props',name:"ariaLabel",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Layout size of the loader. This affects the overall size and associated\nstroke width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},isVisible:{defaultValue:null,description:"Whether the oval is visible. Default is true.",name:"isVisible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LoadingIndicator/LoadingIndicator.tsx#LoadingIndicator"]={docgenInfo:LoadingIndicator.__docgenInfo,name:"LoadingIndicator",path:"src/components/LoadingIndicator/LoadingIndicator.tsx#LoadingIndicator"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/LoadingIndicator/LoadingIndicator.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # LOADINGINDICATOR\n\\*------------------------------------*/\n\n/**\n * LoadingIndicator\n */\n\n.rzQisA9Pp16MAYjEwIgP {\n  background-color: transparent;\n  padding: 3px; /* ported from react-loader-spinner */\n  display: flex;\n}\n\n.SebNVn43ZHqUJBVHKC2o {\n  display: none;\n}\n\n/* override for `color` */\n\n.rzQisA9Pp16MAYjEwIgP > svg path {\n  stroke: var(--eds-theme-color-border-utility-informational);\n}\n\n/* override for `secondaryColor` */\n\n.rzQisA9Pp16MAYjEwIgP > svg circle {\n  stroke: var(--eds-theme-color-border-utility-default-low-emphasis);\n  stroke-opacity: 1;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  /* if reducing motion, don't show the moving portion */\n  .rzQisA9Pp16MAYjEwIgP > svg path {\n    stroke: none;\n  }\n}\n","",{version:3,sources:["webpack://./src/components/LoadingIndicator/LoadingIndicator.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;EAEE;;AACF;EACE,6BAA6B;EAC7B,YAAY,EAAE,qCAAqC;EACnD,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA,yBAAyB;;AACzB;EACE,2DAA2D;AAC7D;;AAEA,kCAAkC;;AAClC;EACE,kEAAkE;EAClE,iBAAiB;AACnB;;AAEA;EACE,sDAAsD;EACtD;IACE,YAAY;EACd;AACF",sourcesContent:["/*------------------------------------*\\\n    # LOADINGINDICATOR\n\\*------------------------------------*/\n\n/**\n * LoadingIndicator\n */\n.loading-indicator {\n  background-color: transparent;\n  padding: 3px; /* ported from react-loader-spinner */\n  display: flex;\n}\n\n.loading-indicator--invisible {\n  display: none;\n}\n\n/* override for `color` */\n.loading-indicator > svg path {\n  stroke: var(--eds-theme-color-border-utility-informational);\n}\n\n/* override for `secondaryColor` */\n.loading-indicator > svg circle {\n  stroke: var(--eds-theme-color-border-utility-default-low-emphasis);\n  stroke-opacity: 1;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  /* if reducing motion, don't show the moving portion */\n  .loading-indicator > svg path {\n    stroke: none;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"loading-indicator":"rzQisA9Pp16MAYjEwIgP","loading-indicator--invisible":"SebNVn43ZHqUJBVHKC2o"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);