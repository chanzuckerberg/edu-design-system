"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[9595],{"./src/components/NumberIcon/NumberIcon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Completed:()=>Completed,Default:()=>Default,DifferentNumbers:()=>DifferentNumbers,Incomplete:()=>Incomplete,IsInteractive:()=>IsInteractive,NumberIconList:()=>NumberIconList,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_NumberIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/NumberIcon/NumberIcon.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/NumberIcon",component:_NumberIcon__WEBPACK_IMPORTED_MODULE_1__.y,parameters:{layout:"centered",badges:["intro-1.0","current-2.0"]},args:{"aria-label":"number icon example",number:1},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"p-8"},Story())]},Default={},Sizes={args:{status:"default"},render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NumberIcon__WEBPACK_IMPORTED_MODULE_1__.y,_extends({number:2,size:"md"},args)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NumberIcon__WEBPACK_IMPORTED_MODULE_1__.y,_extends({number:3,size:"lg"},args))),decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-wrap gap-1"},Story())]},IsInteractive={args:{...Sizes.args,isInteractive:!0},render:Sizes.render},Completed={args:{...Sizes.args,status:"completed"},render:Sizes.render,decorators:Sizes.decorators},Incomplete={args:{...Sizes.args,status:"incomplete"},render:Sizes.render,decorators:Sizes.decorators},DifferentNumbers={argTypes:{number:{table:{disable:!0}},"aria-label":{table:{disable:!0}}},render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,[0,1,2,3,4,5,6,7,8,9,10,21,32,43,54,65,76,87,98].map((number=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NumberIcon__WEBPACK_IMPORTED_MODULE_1__.y,_extends({key:number},args,{"aria-label":`Step ${number}`,number})))))},NumberIconList={parameters:{badges:["intro-1.0","current-2.0","implementationExample"]},render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-wrap gap-1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NumberIcon__WEBPACK_IMPORTED_MODULE_1__.y,{"aria-label":"Item 1",number:1,size:"md"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NumberIcon__WEBPACK_IMPORTED_MODULE_1__.y,{"aria-label":"Item 2",number:2,size:"md"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NumberIcon__WEBPACK_IMPORTED_MODULE_1__.y,{"aria-label":"Item 3",number:3,size:"md"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NumberIcon__WEBPACK_IMPORTED_MODULE_1__.y,{"aria-label":"Item 4",number:4,size:"md"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NumberIcon__WEBPACK_IMPORTED_MODULE_1__.y,{"aria-label":"Item 5",number:5,size:"md"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NumberIcon__WEBPACK_IMPORTED_MODULE_1__.y,{"aria-label":"Item 6",number:6,size:"md"}))};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  args: {\n    status: \'default\'\n  },\n  render: args => {\n    return <>\n        <NumberIcon number={2} size="md" {...args} />\n        <NumberIcon number={3} size="lg" {...args} />\n      </>;\n  },\n  decorators: [Story => <div className="flex flex-wrap gap-1">{Story()}</div>]\n}',...Sizes.parameters?.docs?.source}}},IsInteractive.parameters={...IsInteractive.parameters,docs:{...IsInteractive.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Sizes.args,\n    isInteractive: true\n  },\n  render: Sizes.render\n}",...IsInteractive.parameters?.docs?.source},description:{story:"`NumberIcon` can be used in interactive contexts, when wrapped by a navigable or interactive element.",...IsInteractive.parameters?.docs?.description}}},Completed.parameters={...Completed.parameters,docs:{...Completed.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Sizes.args,\n    status: 'completed'\n  },\n  render: Sizes.render,\n  decorators: Sizes.decorators\n}",...Completed.parameters?.docs?.source}}},Incomplete.parameters={...Incomplete.parameters,docs:{...Incomplete.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Sizes.args,\n    status: 'incomplete'\n  },\n  render: Sizes.render,\n  decorators: Sizes.decorators\n}",...Incomplete.parameters?.docs?.source}}},DifferentNumbers.parameters={...DifferentNumbers.parameters,docs:{...DifferentNumbers.parameters?.docs,source:{originalSource:"{\n  /**\n   * Disables controls for args that have no affect on this story\n   */\n  argTypes: {\n    number: {\n      table: {\n        disable: true\n      }\n    },\n    'aria-label': {\n      table: {\n        disable: true\n      }\n    }\n  },\n  render: args => <div>\n      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 32, 43, 54, 65, 76, 87, 98].map(number => <NumberIcon key={number} {...args} aria-label={`Step ${number}`} number={number} />)}\n    </div>\n}",...DifferentNumbers.parameters?.docs?.source},description:{story:"`NumberIcon` supports individual digits, with a maximum of two digits. By default,\nthey are positioned as block-level elements. use `flex` or `display` to update positioning.",...DifferentNumbers.parameters?.docs?.description}}},NumberIconList.parameters={...NumberIconList.parameters,docs:{...NumberIconList.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    badges: [\'intro-1.0\', \'current-2.0\', \'implementationExample\']\n  },\n  render: () => <div className="flex flex-wrap gap-1">\n      <NumberIcon aria-label="Item 1" number={1} size="md" />\n      <NumberIcon aria-label="Item 2" number={2} size="md" />\n      <NumberIcon aria-label="Item 3" number={3} size="md" />\n      <NumberIcon aria-label="Item 4" number={4} size="md" />\n      <NumberIcon aria-label="Item 5" number={5} size="md" />\n      <NumberIcon aria-label="Item 6" number={6} size="md" />\n    </div>\n}',...NumberIconList.parameters?.docs?.source},description:{story:"This Implementation example shows how to use Number Icon to build a stepper-like component.\n\n- incomplete rows are aligned with each number icon to show progress",...NumberIconList.parameters?.docs?.description}}};const __namedExportsOrder=["Default","Sizes","IsInteractive","Completed","Incomplete","DifferentNumbers","NumberIconList"];try{IsInteractive.displayName="IsInteractive",IsInteractive.__docgenInfo={description:"`NumberIcon` can be used in interactive contexts, when wrapped by a navigable or interactive element.",displayName:"IsInteractive",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NumberIcon/NumberIcon.stories.tsx#IsInteractive"]={docgenInfo:IsInteractive.__docgenInfo,name:"IsInteractive",path:"src/components/NumberIcon/NumberIcon.stories.tsx#IsInteractive"})}catch(__react_docgen_typescript_loader_error){}try{DifferentNumbers.displayName="DifferentNumbers",DifferentNumbers.__docgenInfo={description:"`NumberIcon` supports individual digits, with a maximum of two digits. By default,\nthey are positioned as block-level elements. use `flex` or `display` to update positioning.",displayName:"DifferentNumbers",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NumberIcon/NumberIcon.stories.tsx#DifferentNumbers"]={docgenInfo:DifferentNumbers.__docgenInfo,name:"DifferentNumbers",path:"src/components/NumberIcon/NumberIcon.stories.tsx#DifferentNumbers"})}catch(__react_docgen_typescript_loader_error){}try{NumberIconList.displayName="NumberIconList",NumberIconList.__docgenInfo={description:"This Implementation example shows how to use Number Icon to build a stepper-like component.\n\n- incomplete rows are aligned with each number icon to show progress",displayName:"NumberIconList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NumberIcon/NumberIcon.stories.tsx#NumberIconList"]={docgenInfo:NumberIconList.__docgenInfo,name:"NumberIconList",path:"src/components/NumberIcon/NumberIcon.stories.tsx#NumberIconList"})}catch(__react_docgen_typescript_loader_error){}}}]);