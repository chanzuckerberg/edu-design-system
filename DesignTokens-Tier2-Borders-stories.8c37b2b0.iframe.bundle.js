"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[4923],{"./.storybook/components/DesignTokens/Tier2/Borders.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BorderRadii:()=>BorderRadii,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_util_filterTokens__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/util/filterTokens.ts"),_Grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/components/Grid/Grid.tsx"),_Section__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/components/Section/Section.tsx"),_TokenSpecimen_TokenSpecimen__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/components/TokenSpecimen/TokenSpecimen.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Design Tokens/Tier 2: Usage",parameters:{axe:{skip:!0}}},BorderRadii={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Section__WEBPACK_IMPORTED_MODULE_1__.$,{title:"Border Radii"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_2__.r,null,(0,_util_filterTokens__WEBPACK_IMPORTED_MODULE_3__.Z)("eds-theme-border-radius").map((function(listItem){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_2__.r.Item,{key:listItem.name},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TokenSpecimen_TokenSpecimen__WEBPACK_IMPORTED_MODULE_4__.T,{inlineStyles:{backgroundColor:"transparent",borderStyle:"solid",borderWidth:"1px",borderColor:"black",borderRadius:`calc(var(${listItem.name}) * 1px)`},name:listItem.name,value:listItem.value+"px"}))})))))},__namedExportsOrder=["BorderRadii"];BorderRadii.parameters={...BorderRadii.parameters,docs:{...BorderRadii.parameters?.docs,source:{originalSource:"{\n  render: () => <div>\n      <Section title=\"Border Radii\">\n        <Grid>\n          {filterTokens(`eds-theme-border-radius`).map(function (listItem) {\n          return <Grid.Item key={listItem.name}>\n                <TokenSpecimen inlineStyles={{\n              backgroundColor: 'transparent',\n              borderStyle: 'solid',\n              borderWidth: '1px',\n              borderColor: 'black',\n              borderRadius: `calc(var(${listItem.name}) * 1px)`\n            }} name={listItem.name} value={listItem.value + 'px'} />\n              </Grid.Item>;\n        })}\n        </Grid>\n      </Section>\n    </div>\n}",...BorderRadii.parameters?.docs?.source}}}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);