"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[2724],{"./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NZ:()=>e});var o,e=((o=e||{}).DEFAULT="default",o.BETA="beta",o.STABLE="stable",o.NEEDS_REVISION="needs-revision",o.OBSOLETE="obsolete",o.EXPERIMENTAL="experimental",o.DEPRECATED="deprecated",o)},"./src/components/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomPlacement:()=>BottomPlacement,Interactive:()=>Interactive,InteractiveDisabled:()=>InteractiveDisabled,LeftPlacement:()=>LeftPlacement,LongText:()=>LongText,LongTriggerText:()=>LongTriggerText,TopPlacement:()=>TopPlacement,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _geometricpanda_storybook_addon_badges__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tooltip/Tooltip.tsx");const defaultArgs={text:react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."," ",react__WEBPACK_IMPORTED_MODULE_1__.createElement("strong",null,"Donec a erat eu augue consequat eleifend non vel sem.")," ","Praesent efficitur mauris ac leo semper accumsan."),children:react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo w-3 p-1"},"•"),placement:"right",duration:0,visible:!0},__WEBPACK_DEFAULT_EXPORT__={title:"Components/Tooltip",component:_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,args:defaultArgs,argTypes:{text:{control:{type:"text"}},children:{control:{type:null}},placement:{table:{defaultValue:{summary:"top"}}}},parameters:{layout:"centered",badges:["1.0",_geometricpanda_storybook_addon_badges__WEBPACK_IMPORTED_MODULE_0__.NZ.NEEDS_REVISION],chromatic:{diffThreshold:.75,diffIncludeAntiAliasing:!1}},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"p-8"},Story())]},LeftPlacement={args:{placement:"left",children:react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo w-3 p-1"},"•")},parameters:{chromatic:{disableSnapshot:!0}}},TopPlacement={args:{placement:"top",children:react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo w-3 p-1"},"•")}},BottomPlacement={args:{placement:"bottom",children:react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo w-3 p-1"},"•")}},LongText={args:{text:react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."," ",react__WEBPACK_IMPORTED_MODULE_1__.createElement("b",null,"Donec a erat eu augue consequat eleifend non vel sem.")," Praesent efficitur mauris ac leo semper accumsan. Donec posuere semper fermentum. Vivamus venenatis laoreet venenatis. Sed consectetur, dolor sed tristique vehicula, sapien nulla convallis odio, et tempus urna mi eu leo. Phasellus a venenatis sapien. Cras massa lectus, sollicitudin id nulla id, laoreet facilisis est.")}},LongTriggerText={args:{children:react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo p-1"},"Longer text to test placement")}},Interactive={args:{duration:void 0,visible:void 0,children:react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",{className:"fpo w-3 p-1"},"•")}},InteractiveDisabled={args:{duration:void 0},render:args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,{childNotInteractive:!0,duration:args.duration,placement:"top",text:defaultArgs.text},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo p-1"},"•"))};LeftPlacement.parameters={...LeftPlacement.parameters,docs:{...LeftPlacement.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'left',\n    children: <div className=\"fpo w-3 p-1\">&bull;</div>\n  },\n  parameters: {\n    chromatic: {\n      disableSnapshot: true\n    }\n  }\n}",...LeftPlacement.parameters?.docs?.source},description:{story:"The following stories demonstrate how `Tooltip` can be made to appear on different sides of the trigger.\nEach story name denotes a value pased to `placement`.",...LeftPlacement.parameters?.docs?.description}}},TopPlacement.parameters={...TopPlacement.parameters,docs:{...TopPlacement.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'top',\n    children: <div className=\"fpo w-3 p-1\">&bull;</div>\n  }\n}",...TopPlacement.parameters?.docs?.source}}},BottomPlacement.parameters={...BottomPlacement.parameters,docs:{...BottomPlacement.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'bottom',\n    children: <div className=\"fpo w-3 p-1\">&bull;</div>\n  }\n}",...BottomPlacement.parameters?.docs?.source}}},LongText.parameters={...LongText.parameters,docs:{...LongText.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: <span>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n        <b>Donec a erat eu augue consequat eleifend non vel sem.</b> Praesent\n        efficitur mauris ac leo semper accumsan. Donec posuere semper fermentum.\n        Vivamus venenatis laoreet venenatis. Sed consectetur, dolor sed\n        tristique vehicula, sapien nulla convallis odio, et tempus urna mi eu\n        leo. Phasellus a venenatis sapien. Cras massa lectus, sollicitudin id\n        nulla id, laoreet facilisis est.\n      </span>\n  }\n}",...LongText.parameters?.docs?.source}}},LongTriggerText.parameters={...LongTriggerText.parameters,docs:{...LongTriggerText.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <div className="fpo p-1">Longer text to test placement</div>\n  }\n}',...LongTriggerText.parameters?.docs?.source}}},Interactive.parameters={...Interactive.parameters,docs:{...Interactive.parameters?.docs,source:{originalSource:'{\n  args: {\n    // reset prop values defined in defaultArgs\n    duration: undefined,\n    visible: undefined,\n    children: <button className="fpo w-3 p-1">&bull;</button>\n  }\n}',...Interactive.parameters?.docs?.source},description:{story:"Hover over the button to make the tooltip appear.",...Interactive.parameters?.docs?.description}}},InteractiveDisabled.parameters={...InteractiveDisabled.parameters,docs:{...InteractiveDisabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    duration: undefined\n  },\n  render: args => <Tooltip childNotInteractive duration={args.duration} placement="top" text={defaultArgs.text}>\n      <div className="fpo p-1">&bull;</div>\n    </Tooltip>\n}',...InteractiveDisabled.parameters?.docs?.source},description:{story:"Hover over the button to make the tooltip appear.",...InteractiveDisabled.parameters?.docs?.description}}};const __namedExportsOrder=["LeftPlacement","TopPlacement","BottomPlacement","LongText","LongTriggerText","Interactive","InteractiveDisabled"];try{LeftPlacement.displayName="LeftPlacement",LeftPlacement.__docgenInfo={description:"The following stories demonstrate how `Tooltip` can be made to appear on different sides of the trigger.\nEach story name denotes a value pased to `placement`.",displayName:"LeftPlacement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.stories.tsx#LeftPlacement"]={docgenInfo:LeftPlacement.__docgenInfo,name:"LeftPlacement",path:"src/components/Tooltip/Tooltip.stories.tsx#LeftPlacement"})}catch(__react_docgen_typescript_loader_error){}try{Interactive.displayName="Interactive",Interactive.__docgenInfo={description:"Hover over the button to make the tooltip appear.",displayName:"Interactive",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.stories.tsx#Interactive"]={docgenInfo:Interactive.__docgenInfo,name:"Interactive",path:"src/components/Tooltip/Tooltip.stories.tsx#Interactive"})}catch(__react_docgen_typescript_loader_error){}try{InteractiveDisabled.displayName="InteractiveDisabled",InteractiveDisabled.__docgenInfo={description:"Hover over the button to make the tooltip appear.",displayName:"InteractiveDisabled",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.stories.tsx#InteractiveDisabled"]={docgenInfo:InteractiveDisabled.__docgenInfo,name:"InteractiveDisabled",path:"src/components/Tooltip/Tooltip.stories.tsx#InteractiveDisabled"})}catch(__react_docgen_typescript_loader_error){}}}]);