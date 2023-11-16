(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[6378],{"./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NZ:()=>e});var o,e=((o=e||{}).DEFAULT="default",o.BETA="beta",o.STABLE="stable",o.NEEDS_REVISION="needs-revision",o.OBSOLETE="obsolete",o.EXPERIMENTAL="experimental",o.DEPRECATED="deprecated",o)},"./src/components/FiltersPopover/FiltersPopover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,OverflowInteractive:()=>OverflowInteractive,WithOnApplyAndCustomButtonGroup:()=>WithOnApplyAndCustomButtonGroup,WithOnClear:()=>WithOnClear,default:()=>FiltersPopover_stories});var dist=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs"),testing_library_dist=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),isChromatic=__webpack_require__("./node_modules/chromatic/isChromatic.mjs"),react=__webpack_require__("./node_modules/react/index.js"),FiltersPopover=__webpack_require__("./src/components/FiltersPopover/FiltersPopover.tsx"),Checkbox=__webpack_require__("./src/components/Checkbox/Checkbox.tsx"),FiltersCheckboxField=__webpack_require__("./src/components/FiltersCheckboxField/FiltersCheckboxField.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),FiltersPopover_stories_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FiltersPopover/FiltersPopover.stories.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FiltersPopover_stories_module.Z,options);const FiltersPopover_FiltersPopover_stories_module=FiltersPopover_stories_module.Z&&FiltersPopover_stories_module.Z.locals?FiltersPopover_stories_module.Z.locals:void 0,FiltersPopover_stories={title:"Components/FiltersPopover",component:FiltersPopover.g,parameters:{badges:["1.1",dist.NZ.BETA],chromatic:{disableSnapshot:!0}},args:{triggerText:"Filters",hasSelectedFilters:!1,children:react.createElement(FiltersCheckboxField.G,{legend:"Filters Segment 1"},react.createElement(Checkbox.X,{label:"Filters label 1",onChange:()=>{}}),react.createElement(Checkbox.X,{label:"Filters label 2",onChange:()=>{}}),react.createElement(Checkbox.X,{label:"Filters label 3",onChange:()=>{}})),placement:"bottom-start"},argTypes:{children:{control:{type:null}}},decorators:[Story=>react.createElement("div",{style:{margin:"0.25rem",height:"100vh"}},Story())]},Default={play:async _ref=>{let{canvasElement}=_ref;if((0,isChromatic.Z)()){const canvas=(0,testing_library_dist.uh)(canvasElement),filtersTrigger=await canvas.findByRole("button");await testing_library_dist.mV.click(filtersTrigger)}}},WithOnClear={...Default,args:{onClear:()=>{}}},WithOnApplyAndCustomButtonGroup={...Default,args:{footerButtonGroupClassName:FiltersPopover_FiltersPopover_stories_module["button-group__apply-only"],onApply:()=>{}}},OverflowCheckboxFields=_ref2=>{let{placement}=_ref2;const initialCheckedState=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[transientChecked,setTransientChecked]=react.useState(initialCheckedState),onCheckboxChange=index=>{const newTransientChecked=[...transientChecked];newTransientChecked[index]=!transientChecked[index],setTransientChecked(newTransientChecked)},[appliedChecked,setAppliedChecked]=react.useState(initialCheckedState),filterCount=Object.values(appliedChecked).reduce(((count,status)=>status?count+1:count),0),hasSelectedFilters=filterCount>0,triggerText=hasSelectedFilters?`Filters (${filterCount})`:"Filters";return react.createElement(FiltersPopover.g,{className:FiltersPopover_FiltersPopover_stories_module["filters-popover"],hasSelectedFilters,onApply:()=>{setAppliedChecked([...transientChecked])},onClear:()=>{setTransientChecked(initialCheckedState),setAppliedChecked(initialCheckedState)},onClose:()=>{setTransientChecked([...appliedChecked])},placement,triggerText},react.createElement(FiltersCheckboxField.G,{className:FiltersPopover_FiltersPopover_stories_module["filters-popover__checkbox-field"],legend:"Filters Segment 1"},react.createElement(Checkbox.X,{checked:transientChecked[0],label:"Filters long label 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",onChange:()=>onCheckboxChange(0)}),react.createElement(Checkbox.X,{checked:transientChecked[1],label:"Filters label 2",onChange:()=>onCheckboxChange(1)}),react.createElement(Checkbox.X,{checked:transientChecked[2],label:"Filters label 3",onChange:()=>onCheckboxChange(2)})),react.createElement(FiltersCheckboxField.G,{className:FiltersPopover_FiltersPopover_stories_module["filters-popover__checkbox-field"],legend:"Filters Segment 2"},react.createElement(Checkbox.X,{checked:transientChecked[3],label:"Filters label 1",onChange:()=>onCheckboxChange(3)}),react.createElement(Checkbox.X,{checked:transientChecked[4],label:"Filters long label 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",onChange:()=>onCheckboxChange(4)}),react.createElement(Checkbox.X,{checked:transientChecked[5],label:"Filters label 3",onChange:()=>onCheckboxChange(5)})),react.createElement(FiltersCheckboxField.G,{className:FiltersPopover_FiltersPopover_stories_module["filters-popover__checkbox-field"],legend:"Filters Segment 3"},react.createElement(Checkbox.X,{checked:transientChecked[6],label:"Filters label 1",onChange:()=>onCheckboxChange(6)}),react.createElement(Checkbox.X,{checked:transientChecked[7],label:"Filters label 2",onChange:()=>onCheckboxChange(7)}),react.createElement(Checkbox.X,{checked:transientChecked[8],label:"Filters long label 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",onChange:()=>onCheckboxChange(8)})),react.createElement(FiltersCheckboxField.G,{className:FiltersPopover_FiltersPopover_stories_module["filters-popover__checkbox-field"],legend:"Filters Segment 4"},react.createElement(Checkbox.X,{checked:transientChecked[9],label:"Filters label 1",onChange:()=>onCheckboxChange(9)}),react.createElement(Checkbox.X,{checked:transientChecked[10],label:"Filters label 2",onChange:()=>onCheckboxChange(10)}),react.createElement(Checkbox.X,{checked:transientChecked[11],label:"Filters label 3",onChange:()=>onCheckboxChange(11)}),react.createElement(Checkbox.X,{checked:transientChecked[12],label:"Filters label 4",onChange:()=>onCheckboxChange(12)}),react.createElement(Checkbox.X,{checked:transientChecked[13],label:"Filters label 5",onChange:()=>onCheckboxChange(13)}),react.createElement(Checkbox.X,{checked:transientChecked[14],label:"Filters label 6",onChange:()=>onCheckboxChange(14)})))},OverflowInteractive={render:_ref3=>{let{placement}=_ref3;return react.createElement(OverflowCheckboxFields,{placement})},play:async _ref4=>{let{canvasElement}=_ref4;if((0,isChromatic.Z)()){const canvas=(0,testing_library_dist.uh)(canvasElement),filtersTrigger=await canvas.findByRole("button");await testing_library_dist.mV.click(filtersTrigger)}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    // We want to test visual regression for the drawer as well as the button, but don't want the drawer open initally outside Chromatic\n    if (isChromatic()) {\n      const canvas = within(canvasElement);\n      const filtersTrigger = await canvas.findByRole('button');\n      await userEvent.click(filtersTrigger);\n    }\n  }\n}",...Default.parameters?.docs?.source}}},WithOnClear.parameters={...WithOnClear.parameters,docs:{...WithOnClear.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    onClear: () => {}\n  }\n}",...WithOnClear.parameters?.docs?.source}}},WithOnApplyAndCustomButtonGroup.parameters={...WithOnApplyAndCustomButtonGroup.parameters,docs:{...WithOnApplyAndCustomButtonGroup.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    footerButtonGroupClassName: styles['button-group__apply-only'],\n    onApply: () => {}\n  }\n}",...WithOnApplyAndCustomButtonGroup.parameters?.docs?.source}}},OverflowInteractive.parameters={...OverflowInteractive.parameters,docs:{...OverflowInteractive.parameters?.docs,source:{originalSource:"{\n  render: ({\n    placement\n  }) => <OverflowCheckboxFields placement={placement} />,\n  play: async ({\n    canvasElement\n  }) => {\n    // We want to test visual regression for the drawer as well as the button, but don't want the drawer open initally outside Chromatic\n    if (isChromatic()) {\n      const canvas = within(canvasElement);\n      const filtersTrigger = await canvas.findByRole('button');\n      await userEvent.click(filtersTrigger);\n    }\n  }\n}",...OverflowInteractive.parameters?.docs?.source}}}},"./src/components/FiltersPopover/FiltersPopover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>FiltersPopover});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),ButtonGroup=__webpack_require__("./src/components/ButtonGroup/ButtonGroup.tsx"),FiltersButton=__webpack_require__("./src/components/FiltersButton/FiltersButton.tsx"),Popover=__webpack_require__("./src/components/Popover/Popover.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),FiltersPopover_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FiltersPopover/FiltersPopover.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FiltersPopover_module.Z,options);const FiltersPopover_FiltersPopover_module=FiltersPopover_module.Z&&FiltersPopover_module.Z.locals?FiltersPopover_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const FiltersPopoverRender=_ref=>{let{children,className,close,footerButtonGroupClassName,hasSelectedFilters,onApply,onClear,onClose,open,triggerElement,triggerText,...other}=_ref;const onCloseRef=(0,react.useRef)(onClose);(0,react.useEffect)((()=>{onCloseRef.current=onClose}),[onClose]);const firstRender=(0,react.useRef)(!0);(0,react.useEffect)((()=>{firstRender.current?firstRender.current=!1:!open&&onCloseRef.current&&onCloseRef.current()}),[open]);const trigger=triggerElement||react.createElement(FiltersButton.c,{hasSelectedFilters,triggerText}),buttonGroupClassName=(0,clsx.Z)(FiltersPopover_FiltersPopover_module["footer__button-group"],footerButtonGroupClassName);return react.createElement(react.Fragment,null,react.createElement(Popover.J.Button,{as:react.Fragment},trigger),react.createElement(Popover.J.Content,_extends({bodyClassName:FiltersPopover_FiltersPopover_module["filters-popover"]},other),react.createElement("div",{className},children),(onClear||onApply)&&react.createElement(ButtonGroup.h,{className:buttonGroupClassName},onClear&&react.createElement(Button.z,{onClick:()=>{close(),onClear()}},"Clear All"),onApply&&react.createElement(Button.z,{onClick:()=>{close(),onApply()},variant:"primary"},"Apply"))))},FiltersPopover=_ref2=>{let{placement="bottom-start",...other}=_ref2;return react.createElement(Popover.J,{placement},(_ref3=>{let{close,open}=_ref3;return react.createElement(FiltersPopoverRender,_extends({close,open},other))}))};try{FiltersPopover.displayName="FiltersPopover",FiltersPopover.__docgenInfo={description:'`import {FiltersPopover} from "@chanzuckerberg/eds";`\n\nA popover component with fields of form inputs to select filters.',displayName:"FiltersPopover",props:{children:{defaultValue:null,description:"Form controls, form fields, or other relevant information that will be displayed in the filters popover.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},footerButtonGroupClassName:{defaultValue:null,description:"CSS class names that can be appended to the footer button group.",name:"footerButtonGroupClassName",required:!1,type:{name:"string"}},hasSelectedFilters:{defaultValue:null,description:"Indicates status that filters have been selected, influencing toggle button variant.",name:"hasSelectedFilters",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"Callback called when the clear button is called.",name:"onClear",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"Callback called when filters drawer is closed.",name:"onClose",required:!1,type:{name:"(() => void)"}},onApply:{defaultValue:null,description:"Callback called when the apply button is called.",name:"onApply",required:!1,type:{name:"(() => void)"}},placement:{defaultValue:{value:"bottom-start"},description:"Popover placement options relative to the filters trigger button.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},triggerElement:{defaultValue:null,description:"Trigger element that toggles the filters drawer.\nMust be able to forward a ref.",name:"triggerElement",required:!1,type:{name:"ReactNode"}},triggerText:{defaultValue:null,description:"Text to be placed in the button that activates the Filters Drawer",name:"triggerText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FiltersPopover/FiltersPopover.tsx#FiltersPopover"]={docgenInfo:FiltersPopover.__docgenInfo,name:"FiltersPopover",path:"src/components/FiltersPopover/FiltersPopover.tsx#FiltersPopover"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/chromatic/isChromatic.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isChromatic(windowArg){const windowToCheck=windowArg||"undefined"!=typeof window&&window;return!(!windowToCheck||!windowToCheck.navigator.userAgent.match(/Chromatic/)&&!windowToCheck.location.href.match(/chromatic=true/))}__webpack_require__.d(__webpack_exports__,{Z:()=>isChromatic})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FiltersPopover/FiltersPopover.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # FILTERS POPOVER\n\\*------------------------------------*/\n\n/**\n * A floating panel component with arbitrary content.\n * Styling for the Popover component since the parent <Popover> component provides functionality.\n */\n\n.m2C9mQivpEuu3f6wYY8Z {\n  padding: var(--eds-size-3);\n}\n\n/**\n * The button group of the houses the apply and clear all buttons.\n */\n\n.ZA1lbvNqKGa25maNr1SO {\n  margin-top: var(--eds-size-3);\n  display: flex;\n  justify-content: flex-end;\n}\n","",{version:3,sources:["webpack://./src/components/FiltersPopover/FiltersPopover.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;;EAGE;;AACF;EACE,0BAA0B;AAC5B;;AAEA;;EAEE;;AACF;EACE,6BAA6B;EAC7B,aAAa;EACb,yBAAyB;AAC3B",sourcesContent:["/*------------------------------------*\\\n    # FILTERS POPOVER\n\\*------------------------------------*/\n\n/**\n * A floating panel component with arbitrary content.\n * Styling for the Popover component since the parent <Popover> component provides functionality.\n */\n.filters-popover {\n  padding: var(--eds-size-3);\n}\n\n/**\n * The button group of the houses the apply and clear all buttons.\n */\n.footer__button-group {\n  margin-top: var(--eds-size-3);\n  display: flex;\n  justify-content: flex-end;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"filters-popover":"m2C9mQivpEuu3f6wYY8Z","footer__button-group":"ZA1lbvNqKGa25maNr1SO"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FiltersPopover/FiltersPopover.stories.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ZbInqVl7G5Z9DVcPzXeS {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.gBET1luu0ETO7a7MCF77 {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--eds-size-6);\n}\n\n.yTL7sXl_cmJG8EJSLKXn {\n  max-width: 300px;\n}\n","",{version:3,sources:["webpack://./src/components/FiltersPopover/FiltersPopover.stories.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".button-group__apply-only {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.filters-popover {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--eds-size-6);\n}\n\n.filters-popover__checkbox-field {\n  max-width: 300px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"button-group__apply-only":"ZbInqVl7G5Z9DVcPzXeS","filters-popover":"gBET1luu0ETO7a7MCF77","filters-popover__checkbox-field":"yTL7sXl_cmJG8EJSLKXn"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"?4f7e":()=>{}}]);