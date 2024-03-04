"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[9114],{"./src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var popover=__webpack_require__("./node_modules/@headlessui/react/dist/components/popover/popover.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),PopoverContainer=__webpack_require__("./src/components/PopoverContainer/PopoverContainer.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Popover_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/Popover/Popover.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Popover_module.Z,options);const Popover_Popover_module=Popover_module.Z&&Popover_module.Z.locals?Popover_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const PopoverContext=(0,react.createContext)({}),Popover=_ref=>{let{placement="bottom-start",modifiers=PopoverContainer.u,strategy,onFirstUpdate,...other}=_ref;const[referenceElement,setReferenceElement]=(0,react.useState)(),[popperElement,setPopperElement]=(0,react.useState)(),{styles:popperStyles,attributes}=(0,usePopper.D)(referenceElement,popperElement,{placement,modifiers,strategy,onFirstUpdate});return react.createElement(PopoverContext.Provider,{value:{placement,popperStyles:popperStyles.popper,popperAttributes:attributes.popper,popperElement,setReferenceElement,setPopperElement}},react.createElement(popover.J,other))},PopoverOverlay=props=>react.createElement(popover.J.Overlay,props),PopoverGroup=props=>react.createElement(popover.J.Group,props),PopoverButton=props=>{const{setReferenceElement}=(0,react.useContext)(PopoverContext);return react.createElement(popover.J.Button,_extends({},props,{ref:setReferenceElement}))},PopoverContent=_ref2=>{let{arrowClassName,bodyClassName,children,className,...other}=_ref2;const{popperStyles,popperAttributes,setPopperElement}=(0,react.useContext)(PopoverContext),allProps={...popperAttributes,...other,ref:setPopperElement,style:popperStyles},componentClassName=(0,clsx.Z)(Popover_Popover_module["popover-content"],className);return"undefined"!=typeof document?react.createElement(react.Fragment,null,(0,react_dom.createPortal)(react.createElement(popover.J.Panel,_extends({},allProps,{as:"article",className:componentClassName}),react.createElement(PopoverContainer.O,{className:bodyClassName},children)),document.body)):null};Popover.displayName="Popover",PopoverButton.displayName="Popover.Group",PopoverContent.displayName="Popover.Content",PopoverOverlay.displayName="Popover.Overlay",PopoverGroup.displayName="Popover.Group",Popover.Button=PopoverButton,Popover.Content=PopoverContent,Popover.Overlay=PopoverOverlay,Popover.Group=PopoverGroup;try{Popover.displayName="Popover",Popover.__docgenInfo={description:'`import {Popover} from "@chanzuckerberg/eds";`\n\nGeneral-purpose floating containers that appear proximal to a trigger point',displayName:"Popover",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom classname for additional styles",name:"className",required:!1,type:{name:"any"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}},placement:{defaultValue:{value:"bottom-start"},description:"Popover placement options relative to the trigger element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},modifiers:{defaultValue:{value:"[\n  {\n    name: 'offset',\n    options: {\n      offset: [0, 10], // spaces the popover from the trigger element\n    },\n  },\n  {\n    name: 'preventOverflow',\n    options: {\n      mainAxis: false, // prevents popover from offsetting to prevent overflow. Turned off due to resulting misalignment of popover arrow.\n    },\n  },\n  {\n    name: 'computeStyles',\n    options: {\n      roundOffsets: false, // This is to prevent off-by-one rendering glitches, but may add some sub-pixel fuzziness\n    },\n  },\n  {\n    name: 'minWidth',\n    enabled: true,\n    phase: 'beforeWrite',\n    requires: ['computeStyles'],\n    fn: ({ state }) => {\n      state.styles.popper.minWidth = `${state.rects.reference.width}px`;\n    },\n    effect: ({ state }) => {\n      state.elements.popper.style.minWidth = `${\n        state.elements.reference.getBoundingClientRect().width\n      }px`;\n    },\n  },\n]"},description:"Object to customize how your popover will behave.\n\nFor a full list of what is available, refer to https://popper.js.org/docs/v2/modifiers/.",name:"modifiers",required:!1,type:{name:"Partial<Modifier<any, any>>[]"}},strategy:{defaultValue:null,description:"Describes the positioning strategy to use. By default, it is 'absolute', which in the simplest cases does not require repositioning of the popper.\nIf your trigger element is in a fixed container, use the fixed strategy.",name:"strategy",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'}]}},onFirstUpdate:{defaultValue:null,description:"Callback ran after Popper positions the element the first time.\n\nRefer to https://popper.js.org/docs/v2/lifecycle/#hook-into-the-lifecycle.",name:"onFirstUpdate",required:!1,type:{name:"((arg0: Partial<State>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Popover.Button",Button.__docgenInfo={description:"",displayName:"Popover.Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover.Button"]={docgenInfo:Popover.Button.__docgenInfo,name:"Popover.Button",path:"src/components/Popover/Popover.tsx#Popover.Button"})}catch(__react_docgen_typescript_loader_error){}try{Content.displayName="Popover.Content",Content.__docgenInfo={description:"A floating container that can be resized to fit content inside",displayName:"Popover.Content",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom classname for additional styles for the entire popover content.",name:"className",required:!1,type:{name:"any"}},static:{defaultValue:null,description:"",name:"static",required:!1,type:{name:"boolean"}},unmount:{defaultValue:null,description:"",name:"unmount",required:!1,type:{name:"boolean"}},focus:{defaultValue:null,description:"",name:"focus",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},arrowClassName:{defaultValue:null,description:"Custom classname for additional styles for the arrow.",name:"arrowClassName",required:!1,type:{name:"string"}},bodyClassName:{defaultValue:null,description:"Custom classname for additional styles on the generic popover container.",name:"bodyClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover.Content"]={docgenInfo:Popover.Content.__docgenInfo,name:"Popover.Content",path:"src/components/Popover/Popover.tsx#Popover.Content"})}catch(__react_docgen_typescript_loader_error){}try{Overlay.displayName="Popover.Overlay",Overlay.__docgenInfo={description:"Prevents TypeScript erroring of using private Headless Popover attributes.",displayName:"Popover.Overlay",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},static:{defaultValue:null,description:"",name:"static",required:!1,type:{name:"boolean"}},unmount:{defaultValue:null,description:"",name:"unmount",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover.Overlay"]={docgenInfo:Popover.Overlay.__docgenInfo,name:"Popover.Overlay",path:"src/components/Popover/Popover.tsx#Popover.Overlay"})}catch(__react_docgen_typescript_loader_error){}try{Group.displayName="Popover.Group",Group.__docgenInfo={description:"",displayName:"Popover.Group",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover.Group"]={docgenInfo:Popover.Group.__docgenInfo,name:"Popover.Group",path:"src/components/Popover/Popover.tsx#Popover.Group"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PopoverContainer/PopoverContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>PopoverContainer,u:()=>defaultPopoverModifiers});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PopoverContainer_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/PopoverContainer/PopoverContainer.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PopoverContainer_module.Z,options);const PopoverContainer_PopoverContainer_module=PopoverContainer_module.Z&&PopoverContainer_module.Z.locals?PopoverContainer_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultPopoverModifiers=[{name:"offset",options:{offset:[0,10]}},{name:"preventOverflow",options:{mainAxis:!1}},{name:"computeStyles",options:{roundOffsets:!1}},{name:"minWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:_ref=>{let{state}=_ref;state.styles.popper.minWidth=`${state.rects.reference.width}px`},effect:_ref2=>{let{state}=_ref2;state.elements.popper.style.minWidth=`${state.elements.reference.getBoundingClientRect().width}px`}}],PopoverContainer=react.forwardRef(((_ref3,ref)=>{let{className,children,...other}=_ref3;const componentClassName=(0,clsx.Z)(PopoverContainer_PopoverContainer_module["popover-container"],className);return react.createElement("div",_extends({className:componentClassName},other,{ref}),children)}));PopoverContainer.displayName="PopoverContainer";try{PopoverContainer.displayName="PopoverContainer",PopoverContainer.__docgenInfo={description:"",displayName:"PopoverContainer",props:{className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PopoverContainer/PopoverContainer.tsx#PopoverContainer"]={docgenInfo:PopoverContainer.__docgenInfo,name:"PopoverContainer",path:"src/components/PopoverContainer/PopoverContainer.tsx#PopoverContainer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/Popover/Popover.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # POPOVER CONTENT\n\\*------------------------------------*/\n\n/**\n * Decorative arrow pointing the Popover to the trigger element.\n */\n\n.y2ETROLxTQVzaGjmlzqQ {\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n\n/**\n * Arrow directions, made into mixins for brevity in use.\n */\n\n/**\n * Arrow placement according to popover placement.\n */\n\n:where([data-popper-placement='top-start'] > .y2ETROLxTQVzaGjmlzqQ) {\n  left: var(--eds-size-2);\n\n  bottom: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n\n  border-top-color: var(--eds-theme-color-background-neutral-default);\n\n  border-bottom: none;\n}\n\n:where([data-popper-placement='top-end'] > .y2ETROLxTQVzaGjmlzqQ) {\n  right: var(--eds-size-2);\n\n  bottom: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n\n  border-top-color: var(--eds-theme-color-background-neutral-default);\n\n  border-bottom: none;\n}\n\n:where([data-popper-placement='bottom-start'] > .y2ETROLxTQVzaGjmlzqQ) {\n  left: var(--eds-size-2);\n\n  top: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n\n  border-bottom-color: var(--eds-theme-color-background-neutral-default);\n\n  border-top: none;\n}\n\n:where([data-popper-placement='bottom-end'] > .y2ETROLxTQVzaGjmlzqQ) {\n  right: var(--eds-size-2);\n\n  top: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n\n  border-bottom-color: var(--eds-theme-color-background-neutral-default);\n\n  border-top: none;\n}\n\n:where([data-popper-placement='right-start'] > .y2ETROLxTQVzaGjmlzqQ) {\n  top: var(--eds-size-2);\n\n  left: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n\n  border-right-color: var(--eds-theme-color-background-neutral-default);\n\n  border-left: none;\n}\n\n:where([data-popper-placement='right-end'] > .y2ETROLxTQVzaGjmlzqQ) {\n  bottom: var(--eds-size-2);\n\n  left: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n\n  border-right-color: var(--eds-theme-color-background-neutral-default);\n\n  border-left: none;\n}\n\n:where([data-popper-placement='left-start'] > .y2ETROLxTQVzaGjmlzqQ) {\n  top: var(--eds-size-2);\n\n  right: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n\n  border-left-color: var(--eds-theme-color-background-neutral-default);\n\n  border-right: none;\n}\n\n:where([data-popper-placement='left-end'] > .y2ETROLxTQVzaGjmlzqQ) {\n  bottom: var(--eds-size-2);\n\n  right: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n\n  border-left-color: var(--eds-theme-color-background-neutral-default);\n\n  border-right: none;\n}\n\n:where([data-popper-placement='top'] > .y2ETROLxTQVzaGjmlzqQ) {\n  left: 50%;\n\n  bottom: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n\n  border-top-color: var(--eds-theme-color-background-neutral-default);\n\n  border-bottom: none;\n}\n\n:where([data-popper-placement='bottom'] > .y2ETROLxTQVzaGjmlzqQ) {\n  left: 50%;\n\n  top: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n\n  border-bottom-color: var(--eds-theme-color-background-neutral-default);\n\n  border-top: none;\n}\n\n:where([data-popper-placement='right'] > .y2ETROLxTQVzaGjmlzqQ) {\n  top: 50%;\n\n  left: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n\n  border-right-color: var(--eds-theme-color-background-neutral-default);\n\n  border-left: none;\n}\n\n:where([data-popper-placement='left'] > .y2ETROLxTQVzaGjmlzqQ) {\n  top: 50%;\n\n  right: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n\n  border-left-color: var(--eds-theme-color-background-neutral-default);\n\n  border-right: none;\n}\n","",{version:3,sources:["webpack://./src/components/Popover/Popover.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;EAEE;;AACF;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;AACX;;AAEA;;EAEE;;AA8BF;;EAEE;;AACF;EACE,uBAAuB;;EAhCvB,gBAAgB;;EAEhB,8CAA8C;;EAC9C,mEAAmE;;EACnE,mBAAmB;AA+BrB;;AACA;EACE,wBAAwB;;EArCxB,gBAAgB;;EAEhB,8CAA8C;;EAC9C,mEAAmE;;EACnE,mBAAmB;AAoCrB;;AACA;EACE,uBAAuB;;EAnCvB,aAAa;;EAEb,8CAA8C;;EAC9C,sEAAsE;;EACtE,gBAAgB;AAkClB;;AACA;EACE,wBAAwB;;EAxCxB,aAAa;;EAEb,8CAA8C;;EAC9C,sEAAsE;;EACtE,gBAAgB;AAuClB;;AACA;EACE,sBAAsB;;EAtCtB,cAAc;;EAEd,8CAA8C;;EAC9C,qEAAqE;;EACrE,iBAAiB;AAqCnB;;AACA;EACE,yBAAyB;;EA3CzB,cAAc;;EAEd,8CAA8C;;EAC9C,qEAAqE;;EACrE,iBAAiB;AA0CnB;;AACA;EACE,sBAAsB;;EAzCtB,eAAe;;EAEf,8CAA8C;;EAC9C,oEAAoE;;EACpE,kBAAkB;AAwCpB;;AACA;EACE,yBAAyB;;EA9CzB,eAAe;;EAEf,8CAA8C;;EAC9C,oEAAoE;;EACpE,kBAAkB;AA6CpB;;AAEA;EACE,SAAS;;EAzET,gBAAgB;;EAEhB,8CAA8C;;EAC9C,mEAAmE;;EACnE,mBAAmB;AAwErB;;AAEA;EACE,SAAS;;EAxET,aAAa;;EAEb,8CAA8C;;EAC9C,sEAAsE;;EACtE,gBAAgB;AAuElB;;AAEA;EACE,QAAQ;;EAvER,cAAc;;EAEd,8CAA8C;;EAC9C,qEAAqE;;EACrE,iBAAiB;AAsEnB;;AAEA;EACE,QAAQ;;EAtER,eAAe;;EAEf,8CAA8C;;EAC9C,oEAAoE;;EACpE,kBAAkB;AAqEpB",sourcesContent:["/*------------------------------------*\\\n    # POPOVER CONTENT\n\\*------------------------------------*/\n\n/**\n * Decorative arrow pointing the Popover to the trigger element.\n */\n.popover-content__arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n\n/**\n * Arrow directions, made into mixins for brevity in use.\n */\n@define-mixin down-arrow {\n  bottom: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n  border-top-color: var(--eds-theme-color-background-neutral-default);\n  border-bottom: none;\n}\n@define-mixin up-arrow {\n  top: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n  border-bottom-color: var(--eds-theme-color-background-neutral-default);\n  border-top: none;\n}\n@define-mixin left-arrow {\n  left: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n  border-right-color: var(--eds-theme-color-background-neutral-default);\n  border-left: none;\n}\n@define-mixin right-arrow {\n  right: -0.25rem;\n\n  border: var(--eds-size-half) solid transparent;\n  border-left-color: var(--eds-theme-color-background-neutral-default);\n  border-right: none;\n}\n\n/**\n * Arrow placement according to popover placement.\n */\n:where([data-popper-placement='top-start'] > .popover-content__arrow) {\n  left: var(--eds-size-2);\n\n  @mixin down-arrow;\n}\n:where([data-popper-placement='top-end'] > .popover-content__arrow) {\n  right: var(--eds-size-2);\n\n  @mixin down-arrow;\n}\n:where([data-popper-placement='bottom-start'] > .popover-content__arrow) {\n  left: var(--eds-size-2);\n\n  @mixin up-arrow;\n}\n:where([data-popper-placement='bottom-end'] > .popover-content__arrow) {\n  right: var(--eds-size-2);\n\n  @mixin up-arrow;\n}\n:where([data-popper-placement='right-start'] > .popover-content__arrow) {\n  top: var(--eds-size-2);\n\n  @mixin left-arrow;\n}\n:where([data-popper-placement='right-end'] > .popover-content__arrow) {\n  bottom: var(--eds-size-2);\n\n  @mixin left-arrow;\n}\n:where([data-popper-placement='left-start'] > .popover-content__arrow) {\n  top: var(--eds-size-2);\n\n  @mixin right-arrow;\n}\n:where([data-popper-placement='left-end'] > .popover-content__arrow) {\n  bottom: var(--eds-size-2);\n\n  @mixin right-arrow;\n}\n\n:where([data-popper-placement='top'] > .popover-content__arrow) {\n  left: 50%;\n\n  @mixin down-arrow;\n}\n\n:where([data-popper-placement='bottom'] > .popover-content__arrow) {\n  left: 50%;\n\n  @mixin up-arrow;\n}\n\n:where([data-popper-placement='right'] > .popover-content__arrow) {\n  top: 50%;\n\n  @mixin left-arrow;\n}\n\n:where([data-popper-placement='left'] > .popover-content__arrow) {\n  top: 50%;\n\n  @mixin right-arrow;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"popover-content__arrow":"y2ETROLxTQVzaGjmlzqQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/PopoverContainer/PopoverContainer.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Link button styles\n */\n/*------------------------------------*\\\n # POPOVER CONTAINER\n\\*------------------------------------*/\n/**\n * Popover container\n */\n.SLtTKWETa018d6od2baJ {\n  border-radius: var(--eds-border-radius-md);\n  overflow: auto;\n  box-shadow: var(--eds-box-shadow-md);\n  background-color: var(--eds-theme-color-background-neutral-default);\n  z-index: 100;\n}\n.SLtTKWETa018d6od2baJ:focus-visible {\n    outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n    outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n  }\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/PopoverContainer/PopoverContainer.module.css"],names:[],mappings:"AAAA;;EAEE;ACAF;;uCAEuC;AAEvC;;EAEE;AACF;EACE,0CAA0C;EAC1C,cAAc;EACd,oCAAoC;EACpC,mEAAmE;EACnE,YAAY;AAKd;AAHE;ID2CA;qCACmC;IACnC,8DAA8D;EC3C9D",sourcesContent:["/**\n * Link button styles\n */\n@define-mixin textLink {\n  font-size: inherit;\n  font-weight: var(--eds-font-weight-medium);\n  line-height: inherit;\n\n  color: var(--eds-theme-color-link-brand-text);\n  text-decoration: underline;\n  text-decoration-color: var(--eds-theme-color-link-brand-text-decoration);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n\n  svg {\n    /* Has smaller icons than other button styles. */\n    --icon-size-default: 1.25em;\n  }\n\n  &:hover {\n    color: var(--eds-theme-color-link-brand-text-hover);\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-hover);\n  }\n\n  &:focus-visible {\n    /**\n     * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n     * color, but it will also make borders 100% opacity black.\n     */\n    outline: 1px solid transparent;\n    color: var(--eds-theme-color-link-brand-text-focus) !important;\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n    background-color: var(--eds-theme-color-link-brand-background-focus);\n  }\n\n  @supports not selector(:focus-visible) {\n    &:focus {\n      /**\n       * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n       * color, but it will also make borders 100% opacity black.\n       */\n      outline: 1px solid transparent;\n      color: var(--eds-theme-color-link-brand-text-focus) !important;\n      text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n      background-color: var(--eds-theme-color-link-brand-background-focus);\n    }\n  }\n}\n\n@define-mixin TextLinkInverted {\n  @mixin textLink;\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n\n  &:focus {\n    @mixin focusInverted;\n  }\n}\n\n@define-mixin focus {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n\n@define-mixin focusInside {\n  @mixin focus;\n  outline-offset: calc(-1 * var(--eds-theme-box-focus-ring-outline-offset));\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: var(--eds-theme-form-border-width);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: var(--eds-theme-form-border-radius);\n  outline: none;\n  padding: var(--eds-size-1);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow var(--eds-anim-fade-quick) var(--eds-anim-ease),\n    border-color var(--eds-anim-fade-quick) var(--eds-anim-ease);\n\n  &:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n\n  &:focus {\n    @mixin focus;\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n\n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:read-only,\n  &:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    @mixin placeholderStyles;\n  }\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin fieldsetStyles {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin legendReset {\n  display: inline-block;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n@define-mixin messagingBrand {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n}\n\n@define-mixin messagingNeutral {\n  --messaging-border-color: var(--eds-theme-color-border-neutral-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-neutral-subtle);\n\n  background: var(--eds-theme-color-background-neutral-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n@define-mixin messagingSuccess {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n\n@define-mixin messagingWarning {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-warning);\n\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n}\n\n@define-mixin messagingError {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n@define-mixin messagingYield {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n","@import '../../design-tokens/mixins.css';\n\n/*------------------------------------*\\\n # POPOVER CONTAINER\n\\*------------------------------------*/\n\n/**\n * Popover container\n */\n.popover-container {\n  border-radius: var(--eds-border-radius-md);\n  overflow: auto;\n  box-shadow: var(--eds-box-shadow-md);\n  background-color: var(--eds-theme-color-background-neutral-default);\n  z-index: 100;\n\n  &:focus-visible {\n    @mixin focus;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"popover-container":"SLtTKWETa018d6od2baJ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);