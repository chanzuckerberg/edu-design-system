"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[1713],{"./src/components/Skeleton/Skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Circle:()=>Skeleton_stories_Circle,Default:()=>Default,Text:()=>Skeleton_stories_Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Skeleton_stories});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Skeleton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/Skeleton/Skeleton.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Skeleton_module.Z,options);const Skeleton_Skeleton_module=Skeleton_module.Z&&Skeleton_module.Z.locals?Skeleton_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Skeleton=_ref=>{let{className,isAnimating=!0,height,width,...other}=_ref;const componentClassName=(0,clsx.Z)(className,Skeleton_Skeleton_module.skeleton,isAnimating&&Skeleton_Skeleton_module["skeleton--is-animating"]);return react.createElement("div",_extends({"aria-hidden":!0,className:componentClassName},other,{style:{width,height}}))},TextSkeleton=_ref2=>{let{className,isAnimating=!0,height,width,...other}=_ref2;const componentClassName=(0,clsx.Z)(className,Skeleton_Skeleton_module.skeleton,isAnimating&&Skeleton_Skeleton_module["skeleton--is-animating"]);return react.createElement("div",{"aria-hidden":!0,className:componentClassName,style:{width,height}})},CircleSkeleton=_ref3=>{let{className,isAnimating=!0,width,...other}=_ref3;const componentClassName=(0,clsx.Z)(className,Skeleton_Skeleton_module.skeleton,Skeleton_Skeleton_module["skeleton-circle"],isAnimating&&Skeleton_Skeleton_module["skeleton--is-animating"]);return react.createElement("div",{"aria-hidden":!0,className:componentClassName,style:{width,height:width}})};Skeleton.displayName="Skeleton",TextSkeleton.displayName="Skeleton.Text",CircleSkeleton.displayName="Skeleton.Circle",Skeleton.Text=TextSkeleton,Skeleton.Circle=CircleSkeleton;try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:'`import {Skeleton} from "@chanzuckerberg/eds";`\n\nSkeleton states inform users about the wait time, reason, and status of ongoing processes, showing the expected layout',displayName:"Skeleton",props:{className:{defaultValue:null,description:"CSS class names to augment the layout of the skeleton component. For skeletons,\nthis is mostly useful to add layout styles (e.g., tailwind CSS margins, flex, etc.)",name:"className",required:!1,type:{name:"string"}},isAnimating:{defaultValue:{value:"true"},description:"Determine whether there should be an animation in the skeleton state",name:"isAnimating",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Skeleton.Text",Text.__docgenInfo={description:"",displayName:"Skeleton.Text",props:{className:{defaultValue:null,description:"CSS class names to augment the layout of the skeleton component. For skeletons,\nthis is mostly useful to add layout styles (e.g., tailwind CSS margins, flex, etc.)",name:"className",required:!1,type:{name:"string"}},isAnimating:{defaultValue:{value:"true"},description:"Determine whether there should be an animation in the skeleton state",name:"isAnimating",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton.Text"]={docgenInfo:Skeleton.Text.__docgenInfo,name:"Skeleton.Text",path:"src/components/Skeleton/Skeleton.tsx#Skeleton.Text"})}catch(__react_docgen_typescript_loader_error){}try{Circle.displayName="Skeleton.Circle",Circle.__docgenInfo={description:"",displayName:"Skeleton.Circle",props:{className:{defaultValue:null,description:"CSS class names to augment the layout of the skeleton component. For skeletons,\nthis is mostly useful to add layout styles (e.g., tailwind CSS margins, flex, etc.)",name:"className",required:!1,type:{name:"string"}},isAnimating:{defaultValue:{value:"true"},description:"Determine whether there should be an animation in the skeleton state",name:"isAnimating",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton.Circle"]={docgenInfo:Skeleton.Circle.__docgenInfo,name:"Skeleton.Circle",path:"src/components/Skeleton/Skeleton.tsx#Skeleton.Circle"})}catch(__react_docgen_typescript_loader_error){}const Skeleton_stories={title:"Components/Skeleton",component:Skeleton,parameters:{badges:["api-1.3","theme-1.0"],layout:"centered",backgrounds:{default:"background-utility-inverse-high-emphasis"}}},Default={args:{width:100,height:100}},Skeleton_stories_Circle={args:{width:100},render:args=>react.createElement(Skeleton.Circle,args)},Skeleton_stories_Text={args:{width:"30ch",height:"1.5rem"},render:args=>react.createElement(Skeleton.Text,args)},__namedExportsOrder=["Default","Circle","Text"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    width: 100,\n    height: 100\n  }\n}",...Default.parameters?.docs?.source},description:{story:"The default shape for a skeleton is a Rounded rectangle with an optional animation.",...Default.parameters?.docs?.description}}},Skeleton_stories_Circle.parameters={...Skeleton_stories_Circle.parameters,docs:{...Skeleton_stories_Circle.parameters?.docs,source:{originalSource:"{\n  args: {\n    width: 100\n  },\n  render: args => {\n    return <Skeleton.Circle {...args} />;\n  }\n}",...Skeleton_stories_Circle.parameters?.docs?.source},description:{story:"It's also possible to use a fully-rounded circle for components like `Avatar`. Only `width` is defined for `.Circle`.",...Skeleton_stories_Circle.parameters?.docs?.description}}},Skeleton_stories_Text.parameters={...Skeleton_stories_Text.parameters,docs:{...Skeleton_stories_Text.parameters?.docs,source:{originalSource:"{\n  args: {\n    width: '30ch',\n    height: '1.5rem'\n  },\n  render: args => {\n    return <Skeleton.Text {...args} />;\n  }\n}",...Skeleton_stories_Text.parameters?.docs?.source},description:{story:"You can also use a specific variant for handling text. It is recommended to use charactor spacing units,\nrepresenting the length in a way that mimics expected/maximum character length.",...Skeleton_stories_Text.parameters?.docs?.description}}};try{Default.displayName="Default",Default.__docgenInfo={description:"The default shape for a skeleton is a Rounded rectangle with an optional animation.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/components/Skeleton/Skeleton.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton_stories_Circle.displayName="Circle",Skeleton_stories_Circle.__docgenInfo={description:"It's also possible to use a fully-rounded circle for components like `Avatar`. Only `width` is defined for `.Circle`.",displayName:"Circle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.stories.tsx#Circle"]={docgenInfo:Skeleton_stories_Circle.__docgenInfo,name:"Circle",path:"src/components/Skeleton/Skeleton.stories.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton_stories_Text.displayName="Text",Skeleton_stories_Text.__docgenInfo={description:"You can also use a specific variant for handling text. It is recommended to use charactor spacing units,\nrepresenting the length in a way that mimics expected/maximum character length.",displayName:"Text",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.stories.tsx#Text"]={docgenInfo:Skeleton_stories_Text.__docgenInfo,name:"Text",path:"src/components/Skeleton/Skeleton.stories.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/Skeleton/Skeleton.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # SKELETON\n\\*------------------------------------*/\n\n@keyframes _ydfj1sH1vfj4l3RZhOA {\n  0% {\n    background-position: 0% 0%;\n  }\n  100% {\n    background-position: 100% 0%;\n  }\n}\n\n/**\n * Skeleton\n */\n\n.vhcjkv2MBIB1Bzrv0oyu {\n  border-radius: calc(var(--eds-border-radius-lg) * 1px);\n  background-color: var(--eds-theme-color-background-neutral-medium);\n  background-image: linear-gradient(\n    to right,\n    var(--eds-theme-color-background-neutral-medium) 50%,\n    var(--eds-theme-color-background-neutral-subtle) 65%,\n    var(--eds-theme-color-background-neutral-medium) 80%);\n  background-size: 500% 100%;\n}\n\n.XGOK_1r6fTMG41Rx6ofl {\n  animation: _ydfj1sH1vfj4l3RZhOA 2s ease-out infinite;\n}\n\n.vhcjkv2MBIB1Bzrv0oyu.u6tZcnhtjmXyhOtIslm6 {\n  border-radius: calc(var(--eds-border-radius-full) * 1px);\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .XGOK_1r6fTMG41Rx6ofl {\n    animation: none;\n  }\n}\n","",{version:3,sources:["webpack://./src/components/Skeleton/Skeleton.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;AACF;;AAEA;;EAEE;;AACF;EACE,sDAAsD;EACtD,kEAAkE;EAClE;;;;yDAIuD;EACvD,0BAA0B;AAC5B;;AAEA;EACE,oDAAuC;AACzC;;AAEA;EACE,wDAAwD;AAC1D;;AAEA;EACE;IACE,eAAe;EACjB;AACF",sourcesContent:["/*------------------------------------*\\\n    # SKELETON\n\\*------------------------------------*/\n\n@keyframes bg-wipe {\n  0% {\n    background-position: 0% 0%;\n  }\n  100% {\n    background-position: 100% 0%;\n  }\n}\n\n/**\n * Skeleton\n */\n.skeleton {\n  border-radius: calc(var(--eds-border-radius-lg) * 1px);\n  background-color: var(--eds-theme-color-background-neutral-medium);\n  background-image: linear-gradient(\n    to right,\n    var(--eds-theme-color-background-neutral-medium) 50%,\n    var(--eds-theme-color-background-neutral-subtle) 65%,\n    var(--eds-theme-color-background-neutral-medium) 80%);\n  background-size: 500% 100%;\n}\n\n.skeleton--is-animating {\n  animation: bg-wipe 2s ease-out infinite;\n}\n\n.skeleton.skeleton-circle {\n  border-radius: calc(var(--eds-border-radius-full) * 1px);\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .skeleton--is-animating {\n    animation: none;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={skeleton:"vhcjkv2MBIB1Bzrv0oyu","skeleton--is-animating":"XGOK_1r6fTMG41Rx6ofl","bg-wipe":"_ydfj1sH1vfj4l3RZhOA","skeleton-circle":"u6tZcnhtjmXyhOtIslm6"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);