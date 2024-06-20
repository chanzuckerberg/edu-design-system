"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[1297],{"./.storybook/components/DesignTokens/Tier1/TypographyTokens.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FontFamily:()=>FontFamily,FontWeight:()=>FontWeight,Presets:()=>Presets,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TypographyTokens_stories});var react=__webpack_require__("./node_modules/react/index.js"),Grid=__webpack_require__("./src/components/Grid/Grid.tsx"),Section=__webpack_require__("./src/components/Section/Section.tsx"),filterTokens=__webpack_require__("./.storybook/util/filterTokens.ts"),TokenSpecimen=__webpack_require__("./.storybook/components/TokenSpecimen/TokenSpecimen.tsx");const FontFamilies=()=>react.createElement(Section.$,{title:"Font Families"},react.createElement(Grid.r,null,(0,filterTokens.Z)("eds-font-family").map((function(listItem){return react.createElement(Grid.r.Item,{key:listItem.name},react.createElement(TokenSpecimen.T,{inlineStyles:{fontFamily:`var(${listItem.name})`},name:listItem.name,value:listItem.value,variant:"typography-title"}))})))),FontWeights=()=>react.createElement(Section.$,{title:"Font Weights"},react.createElement(Grid.r,null,(0,filterTokens.Z)("eds-font-weight").map((function(listItem){return react.createElement(Grid.r.Item,{key:listItem.name},react.createElement(TokenSpecimen.T,{inlineStyles:{fontWeight:`var(${listItem.name})`},name:listItem.name,value:listItem.value,variant:"typography-title"}))}))));var lodash=__webpack_require__("./node_modules/lodash/lodash.js");const typography_namespaceObject=JSON.parse('{"eds":{"font-family":{"primary":{"value":"\'Graphik\', sans-serif"},"secondary":{"value":"\'Argent\', serif"}},"font-size":{"base":{"value":"16","comment":"(pixels) Base font size for design system in px"}},"font-weight":{"light":{"value":"400"},"medium":{"value":"500"},"bold":{"value":"600"}},"letter-spacing":{"sm":{"value":"0.5","comment":"(pixels) Spacing token used between characters in a text"}},"typography":{"preset":{"001":{"@":{"value":"var(--eds-font-weight-medium) 2.5rem/1.2 var(--eds-font-family-primary)"},"light":{"value":"var(--eds-font-weight-light) 2.5rem/1.2 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 2.5rem/1.2 var(--eds-font-family-primary)"},"mobile":{"value":"var(--eds-font-weight-bold) 2rem/1.25 var(--eds-font-family-primary)","comment":"@deprecated This should not be used in code or design. It will be removed in a future version of EDS."}},"002":{"@":{"value":"var(--eds-font-weight-medium) 2rem/1.25 var(--eds-font-family-primary)"},"light":{"value":"var(--eds-font-weight-light) 2rem/1.25 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 2rem/1.25 var(--eds-font-family-primary)"},"mobile":{"value":"var(--eds-font-weight-bold) 1.5rem/1.333333333 var(--eds-font-family-primary)","comment":"@deprecated This should not be used in code or design. It will be removed in a future version of EDS."}},"003":{"@":{"value":"var(--eds-font-weight-medium) 1.5rem/1.333333333 var(--eds-font-family-primary)"},"light":{"value":"var(--eds-font-weight-light) 1.5rem/1.333333333 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 1.5rem/1.333333333 var(--eds-font-family-primary)"},"mobile":{"value":"var(--eds-font-weight-bold) 1.25rem/1.4 var(--eds-font-family-primary)","comment":"@deprecated This should not be used in code or design. It will be removed in a future version of EDS."}},"004":{"@":{"value":"var(--eds-font-weight-medium) 1.125rem/1.55555556 var(--eds-font-family-primary)"},"light":{"value":"var(--eds-font-weight-light) 1.125rem/1.55555556 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 1.125rem/1.55555556 var(--eds-font-family-primary)"}},"005":{"@":{"value":"var(--eds-font-weight-medium) 1rem/1.5 var(--eds-font-family-primary)"},"light":{"value":"var(--eds-font-weight-light) 1rem/1.5 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 1rem/1.5 var(--eds-font-family-primary)"}},"006":{"@":{"value":"var(--eds-font-weight-medium) 0.875rem/1.57142857 var(--eds-font-family-primary)"},"light":{"value":"var(--eds-font-weight-light) 0.875rem/1.57142857 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 0.875rem/1.57142857 var(--eds-font-family-primary)"}},"007":{"@":{"value":"var(--eds-font-weight-medium) 0.875rem/1.28571429 var(--eds-font-family-primary)"},"light":{"value":"var(--eds-font-weight-light) 0.875rem/1.28571429 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 0.875rem/1.28571429 var(--eds-font-family-primary)"}},"008":{"@":{"value":"var(--eds-font-weight-medium) 0.75rem/1.666666667 var(--eds-font-family-primary)"},"light":{"value":"var(--eds-font-weight-light) 0.75rem/1.666666667 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 0.75rem/1.666666667 var(--eds-font-family-primary)"}},"009":{"@":{"value":"var(--eds-font-weight-medium) 0.75rem/1.333333333 var(--eds-font-family-primary)"},"light":{"value":"var(--eds-font-weight-light) 0.75rem/1.333333333 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 0.75rem/1.333333333 var(--eds-font-family-primary)"}},"010":{"@":{"value":"var(--eds-font-weight-medium) 0.6875rem/1.272727272 var(--eds-font-family-primary)"},"light":{"value":"var(--eds-font-weight-light) 0.6875rem/1.272727272 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 0.6875rem/1.272727272 var(--eds-font-family-primary)"}},"011":{"@":{"value":"var(--eds-font-weight-medium) 0.75rem/1.333333333 var(--eds-font-family-primary)","comment":"For 011, add a text-transform treatment for uppercase (font-variant is limited to CSS 2.1 values)"},"light":{"value":"var(--eds-font-weight-light) 0.75rem/1.333333333 var(--eds-font-family-primary)","comment":"For 011, add a text-transform treatment for uppercase (font-variant is limited to CSS 2.1 values)"},"bold":{"value":"var(--eds-font-weight-bold) 0.75rem/1.333333333 var(--eds-font-family-primary)","comment":"For 011, add a text-transform treatment for uppercase (font-variant is limited to CSS 2.1 values)"}},"012":{"@":{"value":"var(--eds-font-weight-medium) 0.6875rem/1.272727272 var(--eds-font-family-primary)","comment":"For 012, add a text-transform treatment for uppercase (font-variant is limited to CSS 2.1 values)"},"light":{"value":"var(--eds-font-weight-light) 0.6875rem/1.272727272 var(--eds-font-family-primary)","comment":"For 012, add a text-transform treatment for uppercase (font-variant is limited to CSS 2.1 values)"},"bold":{"value":"var(--eds-font-weight-bold) 0.6875rem/1.272727272 var(--eds-font-family-primary)","comment":"For 012, add a text-transform treatment for uppercase (font-variant is limited to CSS 2.1 values)"}},"secondary":{"001":{"@":{"value":"var(--eds-font-weight-medium) 2.5rem/1.2 var(--eds-font-family-secondary)"},"light":{"value":"var(--eds-font-weight-light) 2.5rem/1.2 var(--eds-font-family-secondary)"},"bold":{"value":"var(--eds-font-weight-bold) 2.5rem/1.2 var(--eds-font-family-secondary)"}},"002":{"@":{"value":"var(--eds-font-weight-medium) 1.75rem/1.28571429 var(--eds-font-family-secondary)"},"light":{"value":"var(--eds-font-weight-light) 1.75rem/1.28571429 var(--eds-font-family-secondary)"}},"003":{"@":{"value":"var(--eds-font-weight-medium) 1.5rem/1.333333333 var(--eds-font-family-secondary)"},"light":{"value":"var(--eds-font-weight-light) 1.5rem/1.333333333 var(--eds-font-family-secondary)"},"bold":{"value":"var(--eds-font-weight-bold) 1.5rem/1.333333333 var(--eds-font-family-secondary)"}},"004":{"@":{"value":"var(--eds-font-weight-medium) 1rem/1.5 var(--eds-font-family-secondary)"},"light":{"value":"var(--eds-font-weight-light) 1rem/1.5 var(--eds-font-family-secondary)"}},"005":{"@":{"value":"var(--eds-font-weight-medium) 0.875rem/1.57142857 var(--eds-font-family-secondary)"},"light":{"value":"var(--eds-font-weight-light) 0.875rem/1.57142857 var(--eds-font-family-secondary)"}},"006":{"@":{"value":"var(--eds-font-weight-medium) 0.875rem/1.42857143 var(--eds-font-family-secondary)"},"light":{"value":"var(--eds-font-weight-light) 0.875rem/1.42857143 var(--eds-font-family-secondary)"}},"007":{"@":{"value":"var(--eds-font-weight-medium) 0.75rem/1.66666667 var(--eds-font-family-secondary)"},"light":{"value":"var(--eds-font-weight-light) 0.75rem/1.66666667 var(--eds-font-family-secondary)"}},"008":{"@":{"value":"var(--eds-font-weight-medium) 0.75rem/1.33333333 var(--eds-font-family-secondary)"},"light":{"value":"var(--eds-font-weight-light) 0.75rem/1.33333333 var(--eds-font-family-secondary)"}},"mobile":{"001":{"light":{"value":"var(--eds-font-weight-light) 2rem/1.25 var(--eds-font-family-secondary)"},"@":{"value":"var(--eds-font-weight-medium) 2rem/1.25 var(--eds-font-family-secondary)"}},"002":{"light":{"value":"var(--eds-font-weight-light) 1.5rem/1.333333333 var(--eds-font-family-secondary)"},"@":{"value":"var(--eds-font-weight-medium) 1.5rem/1.333333333 var(--eds-font-family-secondary)"},"bold":{"value":"var(--eds-font-weight-bold) 1.5rem/1.333333333 var(--eds-font-family-secondary)"}},"003":{"light":{"value":"var(--eds-font-weight-light) 1.25rem/1.4 var(--eds-font-family-secondary)"},"@":{"value":"var(--eds-font-weight-medium) 1.25rem/1.4 var(--eds-font-family-secondary)"}}}},"mobile":{"001":{"light":{"value":"var(--eds-font-weight-light) 2rem/1.25 var(--eds-font-family-primary)"},"@":{"value":"var(--eds-font-weight-medium) 2rem/1.25 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 2rem/1.25 var(--eds-font-family-primary)"}},"002":{"light":{"value":"var(--eds-font-weight-light) 1.75rem/1.28571429 var(--eds-font-family-primary)"},"@":{"value":"var(--eds-font-weight-medium) 1.75rem/1.28571429 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 1.75rem/1.28571429 var(--eds-font-family-primary)"}},"003":{"light":{"value":"var(--eds-font-weight-light) 1.25rem/1.4 var(--eds-font-family-primary)"},"@":{"value":"var(--eds-font-weight-medium) 1.25rem/1.4 var(--eds-font-family-primary)"},"bold":{"value":"var(--eds-font-weight-bold) 1.25rem/1.4 var(--eds-font-family-primary)"}}}}}}}');var flattenToken=__webpack_require__("./.storybook/util/flattenToken.js");class Tier1TypographyPresets extends react.Component{render(){const values={};return(0,lodash.forEach)((0,lodash.at)(typography_namespaceObject,"eds.typography")[0],((_,key)=>{values[key]=(0,flattenToken.Z)((0,lodash.at)(typography_namespaceObject,`eds.typography.${key}`)[0],`eds-typography-${key}-`)})),react.createElement("div",null,Object.keys(values).map((section=>react.createElement(Section.$,{key:section,title:"Typography Presets"},react.createElement(Grid.r,null,Object.keys(values[section]).map((usage=>react.createElement(TokenSpecimen.T,{inlineStyles:{font:values[section][usage]},key:usage,name:usage,value:values[section][usage],variant:"typography-body"}))))))))}}Tier1TypographyPresets.__docgenInfo={description:"",methods:[],displayName:"Tier1TypographyPresets"};const TypographyTokens_stories={title:"Design Tokens/Tier 1: Definitions/Typography",parameters:{axe:{skip:!0}}},FontFamily={render:()=>react.createElement(FontFamilies,null)},FontWeight={render:()=>react.createElement(FontWeights,null)},Presets={render:()=>react.createElement(Tier1TypographyPresets,null)};FontFamily.parameters={...FontFamily.parameters,docs:{...FontFamily.parameters?.docs,source:{originalSource:"{\n  render: () => <FontFamilies />\n}",...FontFamily.parameters?.docs?.source}}},FontWeight.parameters={...FontWeight.parameters,docs:{...FontWeight.parameters?.docs,source:{originalSource:"{\n  render: () => <FontWeights />\n}",...FontWeight.parameters?.docs?.source}}},Presets.parameters={...Presets.parameters,docs:{...Presets.parameters?.docs,source:{originalSource:"{\n  render: () => <Tier1TypographyPresets />\n}",...Presets.parameters?.docs?.source}}};const __namedExportsOrder=["FontFamily","FontWeight","Presets"]},"./.storybook/util/flattenToken.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>flatten});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js");function flatten(obj){let themePrefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",separator=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";const result={};return function flat(o){let prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:themePrefix;(0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(o,((value,key)=>{(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)?value.value?result[`${"@"===key?prefix.slice(0,-1):prefix}${"@"===key?"":key}`]=value.value:flat(value,`${prefix}${key}${separator}`):result[`${prefix}${key}`]=value}))}(obj),result}}}]);