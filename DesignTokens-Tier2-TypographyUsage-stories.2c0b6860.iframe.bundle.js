"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[3229],{"./.storybook/util/flattenToken.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>flatten});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js");function flatten(obj){let themePrefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",separator=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";const result={};return function flat(o){let prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:themePrefix;(0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(o,((value,key)=>{(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)?value.value?result[`${"@"===key?prefix.slice(0,-1):prefix}${"@"===key?"":key}`]=value.value:flat(value,`${prefix}${key}${separator}`):result[`${prefix}${key}`]=value}))}(obj),result}},"./.storybook/components/DesignTokens/Tier2/TypographyUsage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Typography:()=>Typography,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TypographyUsage_stories});var lodash=__webpack_require__("./node_modules/lodash/lodash.js"),react=__webpack_require__("./node_modules/react/index.js");const typography_namespaceObject=JSON.parse('{"eds":{"theme":{"typography":{"headline":{"lg":{"@":{"value":"var(--eds-typography-preset-001-light)"},"bold":{"@":{"value":"var(--eds-typography-preset-001)"},"mobile":{"value":"var(--eds-typography-preset-mobile-001)"}},"mobile":{"value":"var(--eds-typography-preset-mobile-001-light)"}},"md":{"@":{"value":"var(--eds-typography-preset-002-light)"},"bold":{"@":{"value":"var(--eds-typography-preset-002)"},"mobile":{"value":"var(--eds-typography-preset-mobile-002)"}},"mobile":{"value":"var(--eds-typography-preset-mobile-002-light)"}},"sm":{"@":{"value":"var(--eds-typography-preset-003-light)"},"bold":{"@":{"value":"var(--eds-typography-preset-003)"},"mobile":{"value":"var(--eds-typography-preset-mobile-003)"}},"mobile":{"value":"var(--eds-typography-preset-mobile-003-light)"}},"secondary":{"lg":{"@":{"value":"var(--eds-typography-preset-secondary-001-light)"},"bold":{"@":{"value":"var(--eds-typography-preset-secondary-001)"},"mobile":{"value":"var(--eds-typography-preset-secondary-mobile-001-bold)"}},"mobile":{"value":"var(--eds-typography-preset-secondary-mobile-001-light)"}},"md":{"@":{"value":"var(--eds-typography-preset-secondary-002-light)"},"bold":{"@":{"value":"var(--eds-typography-preset-secondary-002)"},"mobile":{"value":"var(--eds-typography-secondary-mobile-002-bold)"}},"mobile":{"value":"var(--eds-typography-preset-mobile-002-light)"}},"sm":{"@":{"value":"var(--eds-typography-preset-secondary-003-light)"},"bold":{"@":{"value":"var(--eds-typography-preset-secondary-003)"},"mobile":{"value":"var(--eds-typography-preset-secondary-mobile-003-bold)"}},"mobile":{"value":"var(--eds-typography-preset-secondary-mobile-003-light)"}}}},"title":{"lg":{"@":{"value":"var(--eds-typography-preset-004)"},"bold":{"value":"var(--eds-typography-preset-004-bold)"}},"md":{"@":{"value":"var(--eds-typography-preset-004)"},"bold":{"value":"var(--eds-typography-preset-004-bold)"}},"sm":{"@":{"value":"var(--eds-typography-preset-005)"},"bold":{"value":"var(--eds-typography-preset-005-bold)"}},"xs":{"@":{"value":"var(--eds-typography-preset-007)"},"bold":{"value":"var(--eds-typography-preset-007-bold)"}}},"label":{"lg":{"subtle":{"value":"var(--eds-typography-preset-005)"}},"md":{"@":{"value":"var(--eds-typography-preset-007-bold)"},"subtle":{"value":"var(--eds-typography-preset-007)"}},"sm":{"value":"var(--eds-typography-preset-009-bold)"}},"body":{"xl":{"value":"var(--eds-typography-preset-003-light)"},"lg":{"value":"var(--eds-typography-preset-004-light)"},"md":{"value":"var(--eds-typography-preset-005-light)"},"sm":{"value":"var(--eds-typography-preset-006-light)"},"xs":{"value":"var(--eds-typography-preset-008-light)"}},"caption":{"lg":{"@":{"value":"var(--eds-typography-preset-006-light)"},"bold":{"value":"var(--eds-typography-preset-006)"}},"md":{"@":{"value":"var(--eds-typography-preset-008-light)"},"bold":{"value":"var(--eds-typography-preset-008)"}},"sm":{"@":{"value":"var(--eds-typography-preset-010-light)"},"bold":{"value":"var(--eds-typography-preset-010)"}}},"overline":{"@":{"value":"var(--eds-typography-preset-011)","comment":"@deprecated This should not be used in code or design. It will be removed in a future version of EDS."},"lg":{"value":"var(--eds-typography-preset-005)"},"md":{"value":"var(--eds-typography-preset-011)"},"sm":{"value":"var(--eds-typography-preset-012)"}},"callout":{"value":"var(--eds-typography-preset-002-light)"}}}}}');var flattenToken=__webpack_require__("./.storybook/util/flattenToken.js"),Grid=__webpack_require__("./.storybook/components/Grid/Grid.tsx"),Section=__webpack_require__("./.storybook/components/Section/Section.tsx"),TokenSpecimen=__webpack_require__("./.storybook/components/TokenSpecimen/TokenSpecimen.tsx");const TypographyUsage_stories={title:"Design Tokens/Tier 2: Usage",parameters:{axe:{skip:!0}}},Typography={render:()=>{const values={};return(0,lodash.forEach)((0,lodash.at)(typography_namespaceObject,"eds.theme.typography")[0],((_,key)=>{values[key]=(0,flattenToken.Z)((0,lodash.at)(typography_namespaceObject,`eds.theme.typography.${key}`)[0],`eds-theme-typography-${key}-`)})),react.createElement("div",null,Object.keys(values).map((section=>react.createElement(Section.$,{key:section,title:(0,lodash.capitalize)(section)},react.createElement(Grid.r,null,Object.keys(values[section]).map((usage=>react.createElement(TokenSpecimen.T,{inlineStyles:{font:values[section][usage]},key:usage,name:usage,value:values[section][usage],variant:"typography-body"}))))))))}},__namedExportsOrder=["Typography"];Typography.parameters={...Typography.parameters,docs:{...Typography.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const values: {\n      [key: string]: {\n        [key: string]: string;\n      };\n    } = {};\n    forEach(at(usages, 'eds.theme.typography')[0], (_, key) => {\n      values[key] = flatten(at(usages, `eds.theme.typography.${key}`)[0], `eds-theme-typography-${key}-`);\n    });\n\n    // Flatten all the tier 2 tokens, group them by usage, and print specimens for the results\n    return <div>\n        {Object.keys(values).map(section => {\n        return <Section key={section} title={capitalize(section)}>\n              <Grid>\n                {Object.keys(values[section]).map(usage => {\n              return <TokenSpecimen inlineStyles={{\n                font: values[section][usage]\n              }} key={usage} name={usage} value={values[section][usage]} variant=\"typography-body\" />;\n            })}\n              </Grid>\n            </Section>;\n      })}\n      </div>;\n  }\n}",...Typography.parameters?.docs?.source}}}}}]);