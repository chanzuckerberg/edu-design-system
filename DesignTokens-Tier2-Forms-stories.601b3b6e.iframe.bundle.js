"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[7287],{"./.storybook/components/DesignTokens/Tier2/Forms.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Forms:()=>Forms,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Section/Section.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Grid/Grid.tsx"),_util_filterTokens__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/util/filterTokens.ts"),_TokenSpecimen_TokenSpecimen__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/components/TokenSpecimen/TokenSpecimen.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Design Tokens/Tier 2: Usage",parameters:{axe:{skip:!0}}},Forms={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.$,{title:"Form Border"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.r,null,(0,_util_filterTokens__WEBPACK_IMPORTED_MODULE_3__.Z)("eds-theme-form-border-width").map((listItem=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.r.Item,{key:listItem.name},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TokenSpecimen_TokenSpecimen__WEBPACK_IMPORTED_MODULE_4__.T,{inlineStyles:{backgroundColor:"transparent",borderWidth:`var(${listItem.name})`,borderStyle:"solid",borderColor:"black"},name:listItem.name,value:listItem.value})))),(0,_util_filterTokens__WEBPACK_IMPORTED_MODULE_3__.Z)("eds-theme-form-border-radius").map((listItem=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.r.Item,{key:listItem.name},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TokenSpecimen_TokenSpecimen__WEBPACK_IMPORTED_MODULE_4__.T,{inlineStyles:{backgroundColor:"transparent",borderWidth:"1px",borderStyle:"solid",borderColor:"black",borderRadius:`var(${listItem.name})`},name:listItem.name,value:listItem.value}))))))};Forms.parameters={...Forms.parameters,docs:{...Forms.parameters?.docs,source:{originalSource:"{\n  render: () => <Section title=\"Form Border\">\n      <Grid>\n        {filterTokens(`eds-theme-form-border-width`).map(listItem => <Grid.Item key={listItem.name}>\n            <TokenSpecimen inlineStyles={{\n          backgroundColor: 'transparent',\n          borderWidth: `var(${listItem.name})`,\n          borderStyle: 'solid',\n          borderColor: 'black'\n        }} name={listItem.name} value={listItem.value} />\n          </Grid.Item>)}\n\n        {filterTokens(`eds-theme-form-border-radius`).map(listItem => <Grid.Item key={listItem.name}>\n            <TokenSpecimen inlineStyles={{\n          backgroundColor: 'transparent',\n          borderWidth: '1px',\n          borderStyle: 'solid',\n          borderColor: 'black',\n          borderRadius: `var(${listItem.name})`\n        }} name={listItem.name} value={listItem.value} />\n          </Grid.Item>)}\n      </Grid>\n    </Section>\n}",...Forms.parameters?.docs?.source}}};const __namedExportsOrder=["Forms"]}}]);