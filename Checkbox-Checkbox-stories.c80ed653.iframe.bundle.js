"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[3149],{"./src/components/Checkbox/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Indeterminate:()=>Indeterminate,LongLabels:()=>LongLabels,WithSublabel:()=>WithSublabel,WithoutVisibleLabel:()=>WithoutVisibleLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Checkbox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Checkbox/Checkbox.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Checkbox",component:_Checkbox__WEBPACK_IMPORTED_MODULE_1__.X,args:{label:"Checkbox"},parameters:{layout:"centered",badges:["intro-1.0","current-2.0"]},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"p-8"},Story())]},Default={},WithSublabel={args:{subLabel:"Additional descriptive text"}},Error={args:{isError:!0,label:"In error state"}},Checked={...Default,args:{defaultChecked:!0}},Indeterminate={args:{indeterminate:!0}},Disabled={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"p-0"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_1__.X,_extends({},args,{checked:!1,disabled:!0,label:"Disabled"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_1__.X,_extends({},args,{checked:!0,disabled:!0,label:"Disabled"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_1__.X,_extends({},args,{disabled:!0,indeterminate:!0,label:"Disabled"})))},WithoutVisibleLabel={args:{"aria-label":"a checkbox has no name",label:void 0}},LongLabels={args:{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},WithSublabel.parameters={...WithSublabel.parameters,docs:{...WithSublabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    subLabel: 'Additional descriptive text'\n  }\n}",...WithSublabel.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    isError: true,\n    label: 'In error state'\n  }\n}",...Error.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    defaultChecked: true\n  }\n}",...Checked.parameters?.docs?.source}}},Indeterminate.parameters={...Indeterminate.parameters,docs:{...Indeterminate.parameters?.docs,source:{originalSource:"{\n  args: {\n    indeterminate: true\n  }\n}",...Indeterminate.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: args => <div className="p-0">\n      <Checkbox {...args} checked={false} disabled label="Disabled" />\n      <Checkbox {...args} checked disabled label="Disabled" />\n      <Checkbox {...args} disabled indeterminate label="Disabled" />\n    </div>\n}',...Disabled.parameters?.docs?.source},description:{story:"`Checkbox` can be disabled in each available state.",...Disabled.parameters?.docs?.description}}},WithoutVisibleLabel.parameters={...WithoutVisibleLabel.parameters,docs:{...WithoutVisibleLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    'aria-label': 'a checkbox has no name',\n    label: undefined\n  }\n}",...WithoutVisibleLabel.parameters?.docs?.source},description:{story:"`Checkbox` doesn't require a visible label if `aria-label` is provided.",...WithoutVisibleLabel.parameters?.docs?.description}}},LongLabels.parameters={...LongLabels.parameters,docs:{...LongLabels.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n  }\n}",...LongLabels.parameters?.docs?.source},description:{story:"Long labels will sit adjacent to the text box, and allow clicking to change the state of the checkbox. When constrained,\nthe text will wrap, fixing the checkbox to the top edge.",...LongLabels.parameters?.docs?.description}}};const __namedExportsOrder=["Default","WithSublabel","Error","Checked","Indeterminate","Disabled","WithoutVisibleLabel","LongLabels"];try{Disabled.displayName="Disabled",Disabled.__docgenInfo={description:"`Checkbox` can be disabled in each available state.",displayName:"Disabled",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.stories.tsx#Disabled"]={docgenInfo:Disabled.__docgenInfo,name:"Disabled",path:"src/components/Checkbox/Checkbox.stories.tsx#Disabled"})}catch(__react_docgen_typescript_loader_error){}try{WithoutVisibleLabel.displayName="WithoutVisibleLabel",WithoutVisibleLabel.__docgenInfo={description:"`Checkbox` doesn't require a visible label if `aria-label` is provided.",displayName:"WithoutVisibleLabel",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.stories.tsx#WithoutVisibleLabel"]={docgenInfo:WithoutVisibleLabel.__docgenInfo,name:"WithoutVisibleLabel",path:"src/components/Checkbox/Checkbox.stories.tsx#WithoutVisibleLabel"})}catch(__react_docgen_typescript_loader_error){}try{LongLabels.displayName="LongLabels",LongLabels.__docgenInfo={description:"Long labels will sit adjacent to the text box, and allow clicking to change the state of the checkbox. When constrained,\nthe text will wrap, fixing the checkbox to the top edge.",displayName:"LongLabels",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.stories.tsx#LongLabels"]={docgenInfo:LongLabels.__docgenInfo,name:"LongLabels",path:"src/components/Checkbox/Checkbox.stories.tsx#LongLabels"})}catch(__react_docgen_typescript_loader_error){}}}]);