"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[2724],{"./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NZ:()=>e});var o,e=((o=e||{}).DEFAULT="default",o.BETA="beta",o.STABLE="stable",o.NEEDS_REVISION="needs-revision",o.OBSOLETE="obsolete",o.EXPERIMENTAL="experimental",o.DEPRECATED="deprecated",o)},"./src/components/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomPlacement:()=>BottomPlacement,Interactive:()=>Interactive,InteractiveDisabled:()=>InteractiveDisabled,LeftPlacement:()=>LeftPlacement,LightVariant:()=>LightVariant,LongText:()=>LongText,LongTriggerText:()=>LongTriggerText,TextChild:()=>TextChild,TopPlacement:()=>TopPlacement,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _geometricpanda_storybook_addon_badges__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tooltip/Tooltip.tsx");const defaultArgs={text:react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."," ",react__WEBPACK_IMPORTED_MODULE_1__.createElement("strong",null,"Donec a erat eu augue consequat eleifend non vel sem.")," ","Praesent efficitur mauris ac leo semper accumsan."),children:react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo w-3 p-1"},"•"),align:"right",duration:0,visible:!0},__WEBPACK_DEFAULT_EXPORT__={title:"Components/Tooltip",component:_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,args:defaultArgs,argTypes:{text:{control:{type:"text"}},children:{control:{type:null}}},parameters:{layout:"centered",badges:["1.0",_geometricpanda_storybook_addon_badges__WEBPACK_IMPORTED_MODULE_0__.NZ.NEEDS_REVISION],chromatic:{diffThreshold:.75,diffIncludeAntiAliasing:!1}},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"p-16"},Story())]},LightVariant={},LeftPlacement={args:{align:"left",children:react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo w-3 p-1"},"•")},parameters:{chromatic:{disableSnapshot:!0}}},TopPlacement={args:{align:"top",children:react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo w-3 p-1"},"•")}},BottomPlacement={args:{align:"bottom",children:react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo w-3 p-1"},"•")}},LongText={args:{text:react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."," ",react__WEBPACK_IMPORTED_MODULE_1__.createElement("b",null,"Donec a erat eu augue consequat eleifend non vel sem.")," Praesent efficitur mauris ac leo semper accumsan. Donec posuere semper fermentum. Vivamus venenatis laoreet venenatis. Sed consectetur, dolor sed tristique vehicula, sapien nulla convallis odio, et tempus urna mi eu leo. Phasellus a venenatis sapien. Cras massa lectus, sollicitudin id nulla id, laoreet facilisis est.")}},LongTriggerText={args:{children:react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo p-1"},"Longer text to test placement")}},TextChild={render:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,{align:"top",childNotInteractive:!0,text:defaultArgs.text,visible:!0},react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",null,"Tooltip trigger"))},Interactive={args:{duration:void 0,visible:void 0,children:react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",{className:"fpo w-3 p-1"},"•")},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("p",null,"Hover over the button to make the tooltip appear."),Story())]},InteractiveDisabled={args:{duration:void 0},render:args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,{align:"top",childNotInteractive:!0,duration:args.duration,text:defaultArgs.text},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo p-1"},"•")),decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("p",null,"Hover over the button to make the tooltip appear."),Story())]};LightVariant.parameters={...LightVariant.parameters,docs:{...LightVariant.parameters?.docs,source:{originalSource:"{}",...LightVariant.parameters?.docs?.source}}},LeftPlacement.parameters={...LeftPlacement.parameters,docs:{...LeftPlacement.parameters?.docs,source:{originalSource:"{\n  args: {\n    align: 'left',\n    children: <div className=\"fpo w-3 p-1\">&bull;</div>\n  },\n  parameters: {\n    chromatic: {\n      disableSnapshot: true\n    }\n  }\n}",...LeftPlacement.parameters?.docs?.source}}},TopPlacement.parameters={...TopPlacement.parameters,docs:{...TopPlacement.parameters?.docs,source:{originalSource:"{\n  args: {\n    align: 'top',\n    children: <div className=\"fpo w-3 p-1\">&bull;</div>\n  }\n}",...TopPlacement.parameters?.docs?.source}}},BottomPlacement.parameters={...BottomPlacement.parameters,docs:{...BottomPlacement.parameters?.docs,source:{originalSource:"{\n  args: {\n    align: 'bottom',\n    children: <div className=\"fpo w-3 p-1\">&bull;</div>\n  }\n}",...BottomPlacement.parameters?.docs?.source}}},LongText.parameters={...LongText.parameters,docs:{...LongText.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: <span>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n        <b>Donec a erat eu augue consequat eleifend non vel sem.</b> Praesent\n        efficitur mauris ac leo semper accumsan. Donec posuere semper fermentum.\n        Vivamus venenatis laoreet venenatis. Sed consectetur, dolor sed\n        tristique vehicula, sapien nulla convallis odio, et tempus urna mi eu\n        leo. Phasellus a venenatis sapien. Cras massa lectus, sollicitudin id\n        nulla id, laoreet facilisis est.\n      </span>\n  }\n}",...LongText.parameters?.docs?.source}}},LongTriggerText.parameters={...LongTriggerText.parameters,docs:{...LongTriggerText.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <div className="fpo p-1">Longer text to test placement</div>\n  }\n}',...LongTriggerText.parameters?.docs?.source}}},TextChild.parameters={...TextChild.parameters,docs:{...TextChild.parameters?.docs,source:{originalSource:'{\n  render: () => <Tooltip align="top" childNotInteractive text={defaultArgs.text} visible>\n      <span>Tooltip trigger</span>\n    </Tooltip>\n}',...TextChild.parameters?.docs?.source}}},Interactive.parameters={...Interactive.parameters,docs:{...Interactive.parameters?.docs,source:{originalSource:'{\n  args: {\n    // reset prop values defined in defaultArgs\n    duration: undefined,\n    visible: undefined,\n    children: <button className="fpo w-3 p-1">&bull;</button>\n  },\n  decorators: [Story => <div>\n        <p>Hover over the button to make the tooltip appear.</p>\n        {Story()}\n      </div>]\n}',...Interactive.parameters?.docs?.source}}},InteractiveDisabled.parameters={...InteractiveDisabled.parameters,docs:{...InteractiveDisabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    duration: undefined\n  },\n  render: args => <Tooltip align="top" childNotInteractive duration={args.duration} text={defaultArgs.text}>\n      <div className="fpo p-1">&bull;</div>\n    </Tooltip>,\n  decorators: [Story => <div>\n        <p>Hover over the button to make the tooltip appear.</p>\n        {Story()}\n      </div>]\n}',...InteractiveDisabled.parameters?.docs?.source}}}},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var tippy_react_esm=__webpack_require__("./node_modules/@tippyjs/react/dist/tippy-react.esm.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),Text=__webpack_require__("./src/components/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tooltip_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tooltip/Tooltip.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tooltip_module.Z,options);const Tooltip_Tooltip_module=Tooltip_module.Z&&Tooltip_module.Z.locals?Tooltip_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Tooltip=_ref=>{let{variant="light",align="top",childNotInteractive,className,duration=200,text,...rest}=_ref;const hideOnEsc={name:"hideOnEsc",defaultValue:!0,fn:_ref2=>{let{hide}=_ref2;function onKeyDown(event){"Escape"===event.key&&hide()}return{onShow(){document.addEventListener("keydown",onKeyDown)},onHide(){document.removeEventListener("keydown",onKeyDown)}}}};let children=rest.children;childNotInteractive&&(children=react.createElement("span",{"data-testid":"disabled-child-tooltip-wrapper",tabIndex:0},rest.children));const textContent=react.createElement(Text.x,{as:"span","data-testid":"tooltip-content",size:"caption-lg"},text);return react.createElement(tippy_react_esm.ZP,_extends({},rest,{className:(0,clsx_m.Z)(Tooltip_Tooltip_module.tooltip,"light"===variant&&Tooltip_Tooltip_module["tooltip--light"],"dark"===variant&&Tooltip_Tooltip_module["tooltip--dark"],className),content:textContent,duration,placement:align,plugins:[hideOnEsc]}),children)};Tooltip.displayName="Tooltip";try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:'`import {Tooltip} from "@chanzuckerberg/eds";`\n\nA styled tooltip built on Tippy.js.\n\nhttps://atomiks.github.io/tippyjs/\nhttps://github.com/atomiks/tippyjs-react',displayName:"Tooltip",props:{align:{defaultValue:{value:"top"},description:"Where the tooltip should be placed in relation to the element it's attached to.\n\nTippy also supports 'top-start', 'top-end', 'right-start', 'right-end', etc,\nbut our CSS currently only supports the 4 main sides.",name:"align",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},appendTo:{defaultValue:null,description:"The element or ref to append the tooltip to.\nDefaults to the body element.\n'parent' is suggested if used in a modal.",name:"appendTo",required:!1,type:{name:'((Element | "parent" | ((ref: Element) => Element)) & (Element | "parent" | ((ref: Element) => Element)))'}},animation:{defaultValue:null,description:'Behavior of the tooltip transition, defaults to an opacity "fade".\nAnimation guidelines are provided in https://atomiks.github.io/tippyjs/v5/animations/.\nTo disable animations, pass `duration={0}`.',name:"animation",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The trigger element the tooltip appears next to.",name:"children",required:!1,type:{name:"(ReactElement<any, string | JSXElementConstructor<any>> & (string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<...> | ReactPortal | null))"}},childNotInteractive:{defaultValue:null,description:'If the child being passed into the Tooltip via the `children` prop is not interactive (e.g. a disabled button or an icon).\n\nPlease note that spacing and placement styling will need to be added to a wrapper around the Tooltip,\nnot on the child component inside the Tooltip, because there will be a wrapper around the child. Example:\n<div className="spacing-goes-here"><Tooltip text="Tooltip text"><Button disabled>Button text</Button></Tooltip></div>',name:"childNotInteractive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom classname for additional styles.\n\nThese styles will only affect the tooltip bubble.",name:"className",required:!1,type:{name:"string"}},delay:{defaultValue:null,description:"How long to delay the Tooltip showing and hiding, in milliseconds.\n\nIf a single number is provided, it will be applied to showing and hiding.\nIf an array with 2 numbers is provided, the first will apply to showing and\nthe second will be applied to hiding.\nhttps://atomiks.github.io/tippyjs/v6/all-props/#delay",name:"delay",required:!1,type:{name:"number | [number | null, number | null]"}},duration:{defaultValue:{value:"200"},description:"Duration of Tooltip animation, in milliseconds. Default is 200.",name:"duration",required:!1,type:{name:"number | (number & [number | null, number | null])"}},reference:{defaultValue:null,description:"The trigger element the tooltip appears next to.\n\nUse this instead of `children` if the trigger element is being\nstored in a ref. Most cases will use `children` and not\n`reference`.",name:"reference",required:!1,type:{name:"((Element | RefObject<Element>) & (Element | RefObject<Element> | null))"}},text:{defaultValue:null,description:"The content of the tooltip bubble.",name:"text",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"light"},description:"Whether the tooltip has a light or dark background.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},visible:{defaultValue:null,description:"Whether the tooltip is always visible or always invisible.\n\nThis is most often left undefined so the Tooltip component\ncontrols if/when the bubble appears (on hover, click, focus, etc).",name:"visible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tooltip/Tooltip.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # TOOLTIP\n\\*------------------------------------*/\n\n/**\n * Tippyjs provides .tippy-box, which has two child elements: .tippy-content and .tippy-arrow.\n *\n * Tippyjs also attaches data-attribute `data-placement` depending on how the tooltip is aligned.\n */\n\n.Km6UUy0jpqM0LA2eXccc {\n  border-style: solid;\n  border-width: var(--eds-border-width-sm);\n  border-radius: var(--eds-border-radius-lg);\n  box-shadow: var(--eds-box-shadow-md);\n}\n\n@media (prefers-reduced-motion) {\n\n.Km6UUy0jpqM0LA2eXccc {\n    transition: none\n}\n  }\n\n/**\n * Enables opacity fade animation \n */\n\n.Km6UUy0jpqM0LA2eXccc[data-state='hidden'] {\n  opacity: 0;\n}\n\n.Km6UUy0jpqM0LA2eXccc .tippy-content {\n  padding-left: var(--eds-size-2);\n  padding-right: var(--eds-size-2);\n  padding-bottom: var(--eds-size-1);\n  padding-top: var(--eds-size-1);\n}\n\n/**\n * Color Variants\n */\n\n.sYlNTJUz_z8Y_MiWA2kx {\n  border-color: var(--eds-theme-color-border-neutral-default);\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-background-neutral-subtle);\n  --arrow-color: var(--eds-theme-color-border-neutral-default);\n}\n\n.kqyInudBK4tZ2ZfPc_Oc {\n  border-color: var(--eds-theme-color-body-background-inverted);\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n  background-color: var(--eds-theme-color-body-background-inverted);\n  --arrow-color: var(--eds-theme-color-body-background-inverted);\n}\n\n/**\n * Add arrows\n */\n\n.Km6UUy0jpqM0LA2eXccc .tippy-arrow {\n  position: absolute;\n\n  width: var(--eds-size-2);\n  height: var(--eds-size-2);\n}\n\n.Km6UUy0jpqM0LA2eXccc .tippy-arrow::before {\n  position: absolute;\n\n  border-style: solid;\n  border-color: transparent;\n  border-width: var(--eds-size-1);\n\n  content: '';\n}\n\n.Km6UUy0jpqM0LA2eXccc[data-placement^='top'] .tippy-arrow {\n  left: 0;\n\n  transform: translate3d(73px, 0, 0);\n}\n\n.Km6UUy0jpqM0LA2eXccc[data-placement^='bottom'] .tippy-arrow {\n  top: 0;\n  left: 0;\n\n  transform: translate3d(73px, 0, 0);\n}\n\n.Km6UUy0jpqM0LA2eXccc[data-placement^='left'] .tippy-arrow {\n  top: 0;\n  right: 0;\n\n  transform: translate3d(0, 19px, 0);\n}\n\n.Km6UUy0jpqM0LA2eXccc[data-placement^='right'] .tippy-arrow {\n  top: 0;\n  left: 0;\n\n  transform: translate3d(0, 25px, 0);\n}\n\n.Km6UUy0jpqM0LA2eXccc[data-placement^='top'] .tippy-arrow::before {\n  left: 0;\n\n  border-top-color: var(--arrow-color);\n  border-bottom-width: 0;\n}\n\n.Km6UUy0jpqM0LA2eXccc[data-placement^='bottom'] .tippy-arrow::before {\n  left: 0;\n\n  border-bottom-color: var(--arrow-color);\n  border-top-width: 0;\n  top: -7px;\n}\n\n.Km6UUy0jpqM0LA2eXccc[data-placement^='left'] .tippy-arrow::before {\n  border-left-color: var(--arrow-color);\n  border-right-width: 0;\n  right: -7px;\n}\n\n.Km6UUy0jpqM0LA2eXccc[data-placement^='right'] .tippy-arrow::before {\n  border-right-color: var(--arrow-color);\n  border-left-width: 0;\n  left: -7px;\n}\n","",{version:3,sources:["webpack://./src/components/Tooltip/Tooltip.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;;;EAIE;;AAEF;EACE,mBAAmB;EACnB,wCAAwC;EACxC,0CAA0C;EAC1C,oCAAoC;AAKtC;;AAHE;;AANF;IAOI;AAEJ;EADE;;AAGF;;EAEE;;AACF;EACE,UAAU;AACZ;;AAEA;EACE,+BAA+B;EAC/B,gCAAgC;EAChC,iCAAiC;EACjC,8BAA8B;AAChC;;AAEA;;EAEE;;AACF;EACE,2DAA2D;EAC3D,kDAAkD;EAClD,kEAAkE;EAClE,4DAA4D;AAC9D;;AAEA;EACE,6DAA6D;EAC7D,0DAA0D;EAC1D,iEAAiE;EACjE,8DAA8D;AAChE;;AAEA;;EAEE;;AACF;EACE,kBAAkB;;EAElB,wBAAwB;EACxB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;;EAElB,mBAAmB;EACnB,yBAAyB;EACzB,+BAA+B;;EAE/B,WAAW;AACb;;AAEA;EACE,OAAO;;EAEP,kCAAkC;AACpC;;AAEA;EACE,MAAM;EACN,OAAO;;EAEP,kCAAkC;AACpC;;AAEA;EACE,MAAM;EACN,QAAQ;;EAER,kCAAkC;AACpC;;AAEA;EACE,MAAM;EACN,OAAO;;EAEP,kCAAkC;AACpC;;AAEA;EACE,OAAO;;EAEP,oCAAoC;EACpC,sBAAsB;AACxB;;AAEA;EACE,OAAO;;EAEP,uCAAuC;EACvC,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,qCAAqC;EACrC,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,sCAAsC;EACtC,oBAAoB;EACpB,UAAU;AACZ",sourcesContent:["/*------------------------------------*\\\n    # TOOLTIP\n\\*------------------------------------*/\n\n/**\n * Tippyjs provides .tippy-box, which has two child elements: .tippy-content and .tippy-arrow.\n *\n * Tippyjs also attaches data-attribute `data-placement` depending on how the tooltip is aligned.\n */\n\n.tooltip {\n  border-style: solid;\n  border-width: var(--eds-border-width-sm);\n  border-radius: var(--eds-border-radius-lg);\n  box-shadow: var(--eds-box-shadow-md);\n\n  @media (prefers-reduced-motion) {\n    transition: none;\n  }\n}\n\n/**\n * Enables opacity fade animation \n */\n.tooltip[data-state='hidden'] {\n  opacity: 0;\n}\n\n.tooltip :global(.tippy-content) {\n  padding-left: var(--eds-size-2);\n  padding-right: var(--eds-size-2);\n  padding-bottom: var(--eds-size-1);\n  padding-top: var(--eds-size-1);\n}\n\n/**\n * Color Variants\n */\n.tooltip--light {\n  border-color: var(--eds-theme-color-border-neutral-default);\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-background-neutral-subtle);\n  --arrow-color: var(--eds-theme-color-border-neutral-default);\n}\n\n.tooltip--dark {\n  border-color: var(--eds-theme-color-body-background-inverted);\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n  background-color: var(--eds-theme-color-body-background-inverted);\n  --arrow-color: var(--eds-theme-color-body-background-inverted);\n}\n\n/**\n * Add arrows\n */\n.tooltip :global(.tippy-arrow) {\n  position: absolute;\n\n  width: var(--eds-size-2);\n  height: var(--eds-size-2);\n}\n\n.tooltip :global(.tippy-arrow::before) {\n  position: absolute;\n\n  border-style: solid;\n  border-color: transparent;\n  border-width: var(--eds-size-1);\n\n  content: '';\n}\n\n.tooltip[data-placement^='top'] :global(.tippy-arrow) {\n  left: 0;\n\n  transform: translate3d(73px, 0, 0);\n}\n\n.tooltip[data-placement^='bottom'] :global(.tippy-arrow) {\n  top: 0;\n  left: 0;\n\n  transform: translate3d(73px, 0, 0);\n}\n\n.tooltip[data-placement^='left'] :global(.tippy-arrow) {\n  top: 0;\n  right: 0;\n\n  transform: translate3d(0, 19px, 0);\n}\n\n.tooltip[data-placement^='right'] :global(.tippy-arrow) {\n  top: 0;\n  left: 0;\n\n  transform: translate3d(0, 25px, 0);\n}\n\n.tooltip[data-placement^='top'] :global(.tippy-arrow::before) {\n  left: 0;\n\n  border-top-color: var(--arrow-color);\n  border-bottom-width: 0;\n}\n\n.tooltip[data-placement^='bottom'] :global(.tippy-arrow::before) {\n  left: 0;\n\n  border-bottom-color: var(--arrow-color);\n  border-top-width: 0;\n  top: -7px;\n}\n\n.tooltip[data-placement^='left'] :global(.tippy-arrow::before) {\n  border-left-color: var(--arrow-color);\n  border-right-width: 0;\n  right: -7px;\n}\n\n.tooltip[data-placement^='right'] :global(.tippy-arrow::before) {\n  border-right-color: var(--arrow-color);\n  border-left-width: 0;\n  left: -7px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={tooltip:"Km6UUy0jpqM0LA2eXccc","tooltip--light":"sYlNTJUz_z8Y_MiWA2kx","tooltip--dark":"kqyInudBK4tZ2ZfPc_Oc"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);