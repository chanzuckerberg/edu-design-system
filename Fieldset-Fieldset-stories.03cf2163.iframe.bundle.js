(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[2616],{"./src/util/logging.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>assertEdsUsage});__webpack_require__("./node_modules/lodash/identity.js");function assertEdsUsage(checks,message){}},"./src/components/Fieldset/Fieldset.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FieldsetLegend:()=>Fieldset_stories_FieldsetLegend,FieldsetLegendOptional:()=>FieldsetLegendOptional,FieldsetLegendRequired:()=>FieldsetLegendRequired,FieldsetLegendWithSubtitle:()=>FieldsetLegendWithSubtitle,WithCheckboxes:()=>WithCheckboxes,WithCriticalFootNote:()=>WithCriticalFootNote,WithDisabledCheckboxes:()=>WithDisabledCheckboxes,WithDisabledRadioButton:()=>WithDisabledRadioButton,WithErrorCheckboxes:()=>WithErrorCheckboxes,WithErrorRadioButton:()=>WithErrorRadioButton,WithRadioButton:()=>WithRadioButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Fieldset_stories});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),logging=__webpack_require__("./src/util/logging.ts"),FieldLabel=__webpack_require__("./src/components/FieldLabel/FieldLabel.tsx"),FieldNote=__webpack_require__("./src/components/FieldNote/FieldNote.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Fieldset_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/Fieldset/Fieldset.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Fieldset_module.Z,options);const Fieldset_Fieldset_module=Fieldset_module.Z&&Fieldset_module.Z.locals?Fieldset_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FieldsetContext=(0,react.createContext)({});function Fieldset(_ref){let{children,className,fieldNote,isDisabled,status}=_ref;return react.createElement(FieldsetContext.Provider,{value:{isDisabled,status}},react.createElement("fieldset",{className},children),fieldNote&&react.createElement("div",{className:Fieldset_Fieldset_module.fieldset__footer},react.createElement(FieldNote.G,{disabled:isDisabled,status},fieldNote)))}const FieldsetItems=_ref2=>{let{children,as:Component="div",className,...other}=_ref2;const props=(0,react.useContext)(FieldsetContext),componentClassName=(0,clsx.Z)(Fieldset_Fieldset_module["fieldset-items"],className);return react.createElement(Component,_extends({className:componentClassName},other),"function"==typeof children?children(props):react.createElement(react.Fragment,null,children))},FieldsetLegend=_ref3=>{let{className,isDisabled:_,optionalLabel,required,showHint,subtitle,text,title,...other}=_ref3;const{isDisabled}=(0,react.useContext)(FieldsetContext),componentClassName=(0,clsx.Z)(Fieldset_Fieldset_module["fieldset-legend"],isDisabled&&Fieldset_Fieldset_module["fieldset-legend--disabled"],className),labelClassName=(0,clsx.Z)(Fieldset_Fieldset_module.fieldset__label);return(0,logging.h)([void 0!==text],'text is deprecated and will removed from EDS in a future release. Use "title" instead.'),(0,logging.h)([void 0!==optionalLabel],'optionalLabel is deprecated and will be removed from EDS in a future release. Use "showHint" and "required" instead.'),(0,logging.h)([!title&&!!subtitle],'When using "subtitle" you must also use "title'),react.createElement("legend",_extends({"aria-disabled":isDisabled??void 0,className:componentClassName},other),text," ",optionalLabel&&react.createElement("span",{className:Fieldset_Fieldset_module["fieldset-legend__flag"]},optionalLabel),title&&react.createElement("div",{className:Fieldset_Fieldset_module["fieldset-legend__overline"]},title&&react.createElement(FieldLabel.Q,{className:labelClassName,disabled:isDisabled},title),required&&showHint&&react.createElement(Text.x,{"aria-disabled":isDisabled??void 0,as:"span",preset:"body-sm"},"(Required)"),!required&&showHint&&react.createElement(Text.x,{"aria-disabled":isDisabled??void 0,as:"span",preset:"body-sm"},"(Optional)")),subtitle&&react.createElement(FieldNote.G,{disabled:isDisabled},subtitle))};Fieldset.displayName="Fieldset",FieldsetItems.displayName="Fieldset.Items",FieldsetLegend.displayName="Fieldset.Legend",Fieldset.Items=FieldsetItems,Fieldset.Legend=FieldsetLegend;try{Fieldset.displayName="Fieldset",Fieldset.__docgenInfo={description:'`import {Fieldset} from "@chanzuckerberg/eds";`\n\nA reusable container for a fieldset that includes a legend and\none or more form inputs, like radio buttons or checkboxes.',displayName:"Fieldset",props:{children:{defaultValue:null,description:"The contents of the fieldset. We suggest a Fieldset.Legend followed by\ninteractive elements within Fieldset.Items.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classnames passed in for styling.",name:"className",required:!1,type:{name:"string"}},fieldNote:{defaultValue:null,description:"Text under the component used to provide a description or error message to describe the state.",name:"fieldNote",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Indicates disabled state of the input.",name:"isDisabled",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:'Status for the field state\n\n**Default is `"default"`**.',name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"critical"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Fieldset/Fieldset.tsx#Fieldset"]={docgenInfo:Fieldset.__docgenInfo,name:"Fieldset",path:"src/components/Fieldset/Fieldset.tsx#Fieldset"})}catch(__react_docgen_typescript_loader_error){}try{Items.displayName="Fieldset.Items",Items.__docgenInfo={description:"Helper sub-component for styling the control elements in the component.",displayName:"Fieldset.Items",props:{as:{defaultValue:null,description:'Type of element the immediate wrapper around the contents should be.\n\n**Default is `"div"`**.',name:"as",required:!1,type:{name:"string | ComponentClass<any, any> | FunctionComponent<any>"}},className:{defaultValue:null,description:"Additional classnames passed in for styling.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Fieldset/Fieldset.tsx#Fieldset.Items"]={docgenInfo:Fieldset.Items.__docgenInfo,name:"Fieldset.Items",path:"src/components/Fieldset/Fieldset.tsx#Fieldset.Items"})}catch(__react_docgen_typescript_loader_error){}try{Legend.displayName="Fieldset.Legend",Legend.__docgenInfo={description:"Helper sub-component for styling the legend in a fieldset.",displayName:"Fieldset.Legend",props:{className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},optionalLabel:{defaultValue:null,description:"String to indicate required or optional state.\n\n**This prop is deprecated**.",name:"optionalLabel",required:!1,type:{name:"enum",value:[{value:'"(required)"'},{value:'"(optional)"'}]}},required:{defaultValue:null,description:"Indicates that field is required for form to be successfully submitted",name:"required",required:!1,type:{name:"boolean"}},showHint:{defaultValue:null,description:'Whether it should show the field hint or not\n\n**Default is `"false"`**.',name:"showHint",required:!1,type:{name:"boolean"}},subtitle:{defaultValue:null,description:"Secondary text used to describe the content in more detail",name:"subtitle",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Legend text string that names the fieldset.\n\n**This prop is deprecated**.",name:"text",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The title/heading of the component",name:"title",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Indicates disabled state of the input.",name:"isDisabled",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:'Status for the field state\n\n**Default is `"default"`**.',name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"critical"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Fieldset/Fieldset.tsx#Fieldset.Legend"]={docgenInfo:Fieldset.Legend.__docgenInfo,name:"Fieldset.Legend",path:"src/components/Fieldset/Fieldset.tsx#Fieldset.Legend"})}catch(__react_docgen_typescript_loader_error){}var Checkbox=__webpack_require__("./src/components/Checkbox/Checkbox.tsx"),Radio=__webpack_require__("./src/components/Radio/Radio.tsx");const Fieldset_stories={title:"Components/Fieldset",component:Fieldset,parameters:{layout:"centered",badges:["api-2.0","theme-2.0"]},subcomponents:{"Fieldset.Legend":Fieldset.Legend,"Fieldset.Items":Fieldset.Items},argTypes:{children:{control:!1}}},Default={args:{children:react.createElement(react.Fragment,null,react.createElement(Fieldset.Legend,{title:"Legend"}),react.createElement(Fieldset.Items,{className:"fpo"},react.createElement("div",null,"Fieldset Content (Radio Buttons or Checkboxes)")))}},WithCriticalFootNote={args:{fieldNote:"Attached field note to field set",status:"critical",children:react.createElement(react.Fragment,null,react.createElement(Fieldset.Legend,{subtitle:"Some extra descriptive text",title:"Critical Fieldset"}),react.createElement(Fieldset.Items,{className:"fpo"},react.createElement("div",null,"Fieldset Content (Radio Button or Checkbox)"),react.createElement("div",null,"Fieldset Content (Radio Button or Checkbox)"),react.createElement("div",null,"Fieldset Content (Radio Button or Checkbox)")))}},Fieldset_stories_FieldsetLegend={args:{title:"Legend"},render:args=>react.createElement(Fieldset.Legend,args)},FieldsetLegendOptional={args:{title:"Legend",showHint:!0},render:Fieldset_stories_FieldsetLegend.render},FieldsetLegendRequired={args:{title:"Legend",showHint:!0,required:!0},render:Fieldset_stories_FieldsetLegend.render},FieldsetLegendWithSubtitle={args:{title:"Legend",subtitle:"With additional Subtitle"},render:Fieldset_stories_FieldsetLegend.render},WithCheckboxes={parameters:{badges:["api-1.3","theme-2.0","implementationExample"]},args:{fieldNote:"Attached field note to field set",children:react.createElement(react.Fragment,null,react.createElement(Fieldset.Legend,{subtitle:"Some extra descriptive text",title:"Critical Fieldset"}),react.createElement(Fieldset.Items,null,(_ref=>{let{isDisabled,status}=_ref;return react.createElement(react.Fragment,null,react.createElement(Checkbox.X,{disabled:isDisabled,isError:"critical"===status,label:"Checkbox",name:"test-checkbox"}),react.createElement(Checkbox.X,{disabled:isDisabled,isError:"critical"===status,label:"Checkbox",name:"test-checkbox"}))})))}},WithDisabledCheckboxes={parameters:{badges:["api-1.3","theme-2.0","implementationExample"]},args:{fieldNote:"Attached field note to field set",isDisabled:!0,children:WithCheckboxes.args?.children}},WithErrorCheckboxes={parameters:{badges:["api-1.3","theme-2.0","implementationExample"]},args:{fieldNote:"Attached field note to field set",status:"critical",children:WithCheckboxes.args?.children}},WithRadioButton={parameters:{badges:["api-1.3","theme-2.0","implementationExample"]},args:{fieldNote:"Attached field note to field set",children:react.createElement(react.Fragment,null,react.createElement(Fieldset.Legend,{subtitle:"Some extra descriptive text",title:"Critical Fieldset"}),react.createElement(Fieldset.Items,null,(_ref2=>{let{isDisabled,status}=_ref2;return react.createElement(react.Fragment,null,react.createElement(Radio.Y,{disabled:isDisabled,isError:"critical"===status,label:"Radio Button",name:"test-radio"}),react.createElement(Radio.Y,{disabled:isDisabled,isError:"critical"===status,label:"Radio Button",name:"test-radio"}))})))}},WithDisabledRadioButton={parameters:{badges:["api-1.3","theme-2.0","implementationExample"]},args:{fieldNote:"Attached field note to field set",isDisabled:!0,children:WithRadioButton.args?.children}},WithErrorRadioButton={parameters:{badges:["api-1.3","theme-2.0","implementationExample"]},args:{fieldNote:"Attached field note to field set",status:"critical",children:WithRadioButton.args?.children}},__namedExportsOrder=["Default","WithCriticalFootNote","FieldsetLegend","FieldsetLegendOptional","FieldsetLegendRequired","FieldsetLegendWithSubtitle","WithCheckboxes","WithDisabledCheckboxes","WithErrorCheckboxes","WithRadioButton","WithDisabledRadioButton","WithErrorRadioButton"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <Fieldset.Legend title="Legend" />\n        <Fieldset.Items className="fpo">\n          <div>Fieldset Content (Radio Buttons or Checkboxes)</div>\n        </Fieldset.Items>\n      </>\n  }\n}',...Default.parameters?.docs?.source}}},WithCriticalFootNote.parameters={...WithCriticalFootNote.parameters,docs:{...WithCriticalFootNote.parameters?.docs,source:{originalSource:'{\n  args: {\n    fieldNote: \'Attached field note to field set\',\n    status: \'critical\',\n    children: <>\n        <Fieldset.Legend subtitle="Some extra descriptive text" title="Critical Fieldset" />\n        <Fieldset.Items className="fpo">\n          <div>Fieldset Content (Radio Button or Checkbox)</div>\n          <div>Fieldset Content (Radio Button or Checkbox)</div>\n          <div>Fieldset Content (Radio Button or Checkbox)</div>\n        </Fieldset.Items>\n      </>\n  }\n}',...WithCriticalFootNote.parameters?.docs?.source}}},Fieldset_stories_FieldsetLegend.parameters={...Fieldset_stories_FieldsetLegend.parameters,docs:{...Fieldset_stories_FieldsetLegend.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Legend'\n  },\n  render: args => <Fieldset.Legend {...args} />\n}",...Fieldset_stories_FieldsetLegend.parameters?.docs?.source}}},FieldsetLegendOptional.parameters={...FieldsetLegendOptional.parameters,docs:{...FieldsetLegendOptional.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Legend',\n    showHint: true\n  },\n  render: FieldsetLegend.render\n}",...FieldsetLegendOptional.parameters?.docs?.source}}},FieldsetLegendRequired.parameters={...FieldsetLegendRequired.parameters,docs:{...FieldsetLegendRequired.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Legend',\n    showHint: true,\n    required: true\n  },\n  render: FieldsetLegend.render\n}",...FieldsetLegendRequired.parameters?.docs?.source}}},FieldsetLegendWithSubtitle.parameters={...FieldsetLegendWithSubtitle.parameters,docs:{...FieldsetLegendWithSubtitle.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Legend',\n    subtitle: 'With additional Subtitle'\n  },\n  render: FieldsetLegend.render\n}",...FieldsetLegendWithSubtitle.parameters?.docs?.source}}},WithCheckboxes.parameters={...WithCheckboxes.parameters,docs:{...WithCheckboxes.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    badges: ['api-1.3', 'theme-2.0', 'implementationExample']\n  },\n  args: {\n    fieldNote: 'Attached field note to field set',\n    children: <>\n        <Fieldset.Legend subtitle=\"Some extra descriptive text\" title=\"Critical Fieldset\" />\n        <Fieldset.Items>\n          {({\n          isDisabled,\n          status\n        }) => {\n          return <>\n                <Checkbox disabled={isDisabled} isError={status === 'critical'} label=\"Checkbox\" name=\"test-checkbox\" />\n                <Checkbox disabled={isDisabled} isError={status === 'critical'} label=\"Checkbox\" name=\"test-checkbox\" />\n              </>;\n        }}\n        </Fieldset.Items>\n      </>\n  }\n}",...WithCheckboxes.parameters?.docs?.source},description:{story:'In this implementation example, we show how to compose checkboxes into the `Fieldset.Items` using the render prop.\nThis allows for controlling the state of the contents at the top level `Fieldset` component.\n\n**NOTE**: storybook won\'t show the contents of the render prope in the code inspector, but it looks like the following:\n```\n<Fieldset.Items>\n {({ isDisabled, status }) => {\n   return (\n     <>\n       <Checkbox\n         disabled={isDisabled}\n         id="1"\n         isError={status === \'critical\'}\n         label="Checbox"\n         name="test-1"\n       />\n       <Checkbox\n         disabled={isDisabled}\n         id="2"\n         isError={status === \'critical\'}\n         label="Checbox"\n         name="test-2"\n       />\n     </>\n   );\n }}\n</Fieldset.Items>\n```',...WithCheckboxes.parameters?.docs?.description}}},WithDisabledCheckboxes.parameters={...WithDisabledCheckboxes.parameters,docs:{...WithDisabledCheckboxes.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    badges: ['api-1.3', 'theme-2.0', 'implementationExample']\n  },\n  args: {\n    fieldNote: 'Attached field note to field set',\n    isDisabled: true,\n    children: WithCheckboxes.args?.children\n  }\n}",...WithDisabledCheckboxes.parameters?.docs?.source}}},WithErrorCheckboxes.parameters={...WithErrorCheckboxes.parameters,docs:{...WithErrorCheckboxes.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    badges: ['api-1.3', 'theme-2.0', 'implementationExample']\n  },\n  args: {\n    fieldNote: 'Attached field note to field set',\n    status: 'critical',\n    children: WithCheckboxes.args?.children\n  }\n}",...WithErrorCheckboxes.parameters?.docs?.source}}},WithRadioButton.parameters={...WithRadioButton.parameters,docs:{...WithRadioButton.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    badges: ['api-1.3', 'theme-2.0', 'implementationExample']\n  },\n  args: {\n    fieldNote: 'Attached field note to field set',\n    children: <>\n        <Fieldset.Legend subtitle=\"Some extra descriptive text\" title=\"Critical Fieldset\" />\n        <Fieldset.Items>\n          {({\n          isDisabled,\n          status\n        }) => {\n          return <>\n                <Radio disabled={isDisabled} isError={status === 'critical'} label=\"Radio Button\" name=\"test-radio\" />\n                <Radio disabled={isDisabled} isError={status === 'critical'} label=\"Radio Button\" name=\"test-radio\" />\n              </>;\n        }}\n        </Fieldset.Items>\n      </>\n  }\n}",...WithRadioButton.parameters?.docs?.source}}},WithDisabledRadioButton.parameters={...WithDisabledRadioButton.parameters,docs:{...WithDisabledRadioButton.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    badges: ['api-1.3', 'theme-2.0', 'implementationExample']\n  },\n  args: {\n    fieldNote: 'Attached field note to field set',\n    isDisabled: true,\n    children: WithRadioButton.args?.children\n  }\n}",...WithDisabledRadioButton.parameters?.docs?.source}}},WithErrorRadioButton.parameters={...WithErrorRadioButton.parameters,docs:{...WithErrorRadioButton.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    badges: ['api-1.3', 'theme-2.0', 'implementationExample']\n  },\n  args: {\n    fieldNote: 'Attached field note to field set',\n    status: 'critical',\n    children: WithRadioButton.args?.children\n  }\n}",...WithErrorRadioButton.parameters?.docs?.source}}};try{WithCheckboxes.displayName="WithCheckboxes",WithCheckboxes.__docgenInfo={description:'In this implementation example, we show how to compose checkboxes into the `Fieldset.Items` using the render prop.\nThis allows for controlling the state of the contents at the top level `Fieldset` component.\n\n**NOTE**: storybook won\'t show the contents of the render prope in the code inspector, but it looks like the following:\n```\n<Fieldset.Items>\n {({ isDisabled, status }) => {\n   return (\n     <>\n       <Checkbox\n         disabled={isDisabled}\n         id="1"\n         isError={status === \'critical\'}\n         label="Checbox"\n         name="test-1"\n       />\n       <Checkbox\n         disabled={isDisabled}\n         id="2"\n         isError={status === \'critical\'}\n         label="Checbox"\n         name="test-2"\n       />\n     </>\n   );\n }}\n</Fieldset.Items>\n```',displayName:"WithCheckboxes",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Fieldset/Fieldset.stories.tsx#WithCheckboxes"]={docgenInfo:WithCheckboxes.__docgenInfo,name:"WithCheckboxes",path:"src/components/Fieldset/Fieldset.stories.tsx#WithCheckboxes"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/Fieldset/Fieldset.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vX1rISDWqXBE1gSR4TBn {\n  display: flex;\n  justify-content: space-between;\n\n  margin-top: calc(var(--eds-size-3) / 16 * 1rem);\n}\n\n.QLBm8LV1nMzpMA_QIHmS {\n  /* HACK: Instead of applying the token directly in CSS, should use <Text /> */\n  font: var(--eds-theme-typography-form-label);\n}\n\n/**\n * The contents of the fieldset. Spaces them apart.\n */\n\n.fnhklu6pzmK8q21TJEzA> :not(:last-child) {\n  margin-bottom: calc(var(--eds-size-2) / 16 * 1rem);\n}\n\n/**\n * A label that's rendered as a <legend> for fieldsets.\n * It contains the same characteristics as a label (ability to add flag for optional field, etc),\n * but semantically/stylistically a bit different.\n */\n\n.ZZPccwC1Qm5tejmkXv9V {\n  margin-bottom: calc(var(--eds-size-3) / 16 * 1rem);\n}\n\n/**\n * Label flag to mark whether or not a field is required\n * or optional. Currently a flag is only present for optional fields\n *\n * TODO: remove as deprecated with v16 of EDS\n */\n\n.yxqUZK50iHGZKlL_9KN5 {\n  font: var(--eds-theme-typography-body-sm);\n}\n\n.s811Tu3p2yaAyKHFLLiy {\n  display: flex;\n  align-items: center;\n  gap: calc(var(--eds-size-half) / 16 * 1rem);\n}","",{version:3,sources:["webpack://./src/components/Fieldset/Fieldset.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,8BAA8B;;EAE9B,+CAA+C;AACjD;;AAEA;EACE,6EAA6E;EAC7E,4CAA4C;AAC9C;;AAEA;;EAEE;;AACF;EACE,kDAAkD;AACpD;;AAEA;;;;EAIE;;AACF;EACE,kDAAkD;AACpD;;AAEA;;;;;EAKE;;AACF;EACE,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2CAA2C;AAC7C",sourcesContent:[".fieldset__footer {\n  display: flex;\n  justify-content: space-between;\n\n  margin-top: calc(var(--eds-size-3) / 16 * 1rem);\n}\n\n.fieldset__label {\n  /* HACK: Instead of applying the token directly in CSS, should use <Text /> */\n  font: var(--eds-theme-typography-form-label);\n}\n\n/**\n * The contents of the fieldset. Spaces them apart.\n */\n.fieldset-items> :not(:last-child) {\n  margin-bottom: calc(var(--eds-size-2) / 16 * 1rem);\n}\n\n/**\n * A label that's rendered as a <legend> for fieldsets.\n * It contains the same characteristics as a label (ability to add flag for optional field, etc),\n * but semantically/stylistically a bit different.\n */\n.fieldset-legend {\n  margin-bottom: calc(var(--eds-size-3) / 16 * 1rem);\n}\n\n/**\n * Label flag to mark whether or not a field is required\n * or optional. Currently a flag is only present for optional fields\n *\n * TODO: remove as deprecated with v16 of EDS\n */\n.fieldset-legend__flag {\n  font: var(--eds-theme-typography-body-sm);\n}\n\n.fieldset-legend__overline {\n  display: flex;\n  align-items: center;\n  gap: calc(var(--eds-size-half) / 16 * 1rem);\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={fieldset__footer:"vX1rISDWqXBE1gSR4TBn",fieldset__label:"QLBm8LV1nMzpMA_QIHmS","fieldset-items":"fnhklu6pzmK8q21TJEzA","fieldset-legend":"ZZPccwC1Qm5tejmkXv9V","fieldset-legend__flag":"yxqUZK50iHGZKlL_9KN5","fieldset-legend__overline":"s811Tu3p2yaAyKHFLLiy"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/lodash/identity.js":module=>{module.exports=function identity(value){return value}}}]);