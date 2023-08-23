"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[7158],{"./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NZ:()=>e});var o,e=((o=e||{}).DEFAULT="default",o.BETA="beta",o.STABLE="stable",o.NEEDS_REVISION="needs-revision",o.OBSOLETE="obsolete",o.EXPERIMENTAL="experimental",o.DEPRECATED="deprecated",o)},"./src/components/Panel/Panel.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Centered:()=>Centered,Default:()=>Default,Flush:()=>Flush,Squared:()=>Squared,default:()=>Panel_stories});var dist=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Panel_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Panel_module.Z,options);const Panel_Panel_module=Panel_module.Z&&Panel_module.Z.locals?Panel_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Panel=_ref=>{let{className,children,align,variant,flush,...other}=_ref;const componentClassName=(0,clsx_m.Z)(Panel_Panel_module.panel,"center"===align&&Panel_Panel_module["panel--align-center"],"squared"===variant&&Panel_Panel_module["panel--squared"],flush&&Panel_Panel_module["panel--flush"],className);return react.createElement("div",_extends({className:componentClassName},other),children)};try{Panel.displayName="Panel",Panel.__docgenInfo={description:'`import {Panel} from "@chanzuckerberg/eds";`\n\nComponent Panel is the container to show the contents with props passed through for conditional styling of the panel based on variants props.',displayName:"Panel",props:{align:{defaultValue:null,description:"Alignment variations for the panel\n- **center** horizontally and vertically aligns the content",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'}]}},children:{defaultValue:null,description:"Child node(s) that can be nested inside component",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},flush:{defaultValue:null,description:"Style variants\n- **flush** removes padding from the panel",name:"flush",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Style variants\n- **squared** squares corners, removes borders, and adds box shadow for headlines",name:"variant",required:!1,type:{name:"enum",value:[{value:'"squared"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:Panel.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(__react_docgen_typescript_loader_error){}const Panel_stories={title:"Components/Panel",component:Panel,parameters:{badges:["1.0",dist.NZ.DEPRECATED]},args:{children:"A Panel is a generic bordered container for content."}},Default={},Flush={args:{flush:!0}},Squared={args:{variant:"squared"}},Centered={args:{align:"center"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Flush.parameters={...Flush.parameters,docs:{...Flush.parameters?.docs,source:{originalSource:"{\n  args: {\n    flush: true\n  }\n}",...Flush.parameters?.docs?.source}}},Squared.parameters={...Squared.parameters,docs:{...Squared.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'squared'\n  }\n}",...Squared.parameters?.docs?.source}}},Centered.parameters={...Centered.parameters,docs:{...Centered.parameters?.docs,source:{originalSource:"{\n  args: {\n    align: 'center'\n  }\n}",...Centered.parameters?.docs?.source}}}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # PANEL\n\\*------------------------------------*/\n\n/**\n * A container for content.\n */\n\n.Cn6JIe0KTCbn5phMoUZR {\n  background: var(--eds-theme-color-background-neutral-default);\n  border-radius: var(--eds-border-radius-xl);\n  padding: var(--eds-size-3);\n}\n\n.qE8F6ez598EHvcedGvQG {\n  padding-left: 0;\n  padding-right: 0;\n  border-radius: 0;\n  border: none;\n  box-shadow: var(--eds-box-shadow-md);\n}\n\n.cQhnyFtuI30TstWgm3Le {\n  padding: 0;\n}\n\n.nENGhct1QmIGSlWK3rN5 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n","",{version:3,sources:["webpack://./src/components/Panel/Panel.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;EAEE;;AACF;EACE,6DAA6D;EAC7D,0CAA0C;EAC1C,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB",sourcesContent:["/*------------------------------------*\\\n    # PANEL\n\\*------------------------------------*/\n\n/**\n * A container for content.\n */\n.panel {\n  background: var(--eds-theme-color-background-neutral-default);\n  border-radius: var(--eds-border-radius-xl);\n  padding: var(--eds-size-3);\n}\n\n.panel--squared {\n  padding-left: 0;\n  padding-right: 0;\n  border-radius: 0;\n  border: none;\n  box-shadow: var(--eds-box-shadow-md);\n}\n\n.panel--flush {\n  padding: 0;\n}\n\n.panel--align-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={panel:"Cn6JIe0KTCbn5phMoUZR","panel--squared":"qE8F6ez598EHvcedGvQG","panel--flush":"cQhnyFtuI30TstWgm3Le","panel--align-center":"nENGhct1QmIGSlWK3rN5"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);