"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[7047],{"./.storybook/util/flattenToken.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>flatten});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js");function flatten(obj){let themePrefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",separator=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";const result={};return function flat(o){let prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:themePrefix;(0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(o,((value,key)=>{(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)?value.value?result[`${"@"===key?prefix.slice(0,-1):prefix}${"@"===key?"":key}`]=value.value:flat(value,`${prefix}${key}${separator}`):result[`${prefix}${key}`]=value}))}(obj),result}},"./.storybook/components/DesignTokens/Tier3/TypographyComponents.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Typography:()=>Typography,default:()=>TypographyComponents_stories});var lodash=__webpack_require__("./node_modules/lodash/lodash.js"),react=__webpack_require__("./node_modules/react/index.js"),Section=__webpack_require__("./src/components/Section/Section.tsx"),Grid=__webpack_require__("./src/components/Grid/Grid.tsx");const breadcrumb_namespaceObject=JSON.parse('{"eds":{"theme":{"typography":{"breadcrumb":{"value":"var(--eds-typography-preset-009)"}}}}}'),buttons_namespaceObject=JSON.parse('{"eds":{"theme":{"typography":{"button":{"lg":{"value":"var(--eds-typography-preset-006)"},"md":{"value":"var(--eds-typography-preset-006)"},"label":{"@":{"value":"var(--eds-typography-preset-006)","comment":"@deprecated This is deprecated and missing from figma"},"sm":{"value":"var(--eds-typography-preset-008-bold)","comment":"@deprecated This is deprecated and missing from figma"}}}},"color":{"button":{"primary":{"brand":{"background":{"@":{"value":"{eds.color.brand.grape.600}"},"hover":{"value":"{eds.color.brand.grape.700}"},"active":{"value":"{eds.color.brand.grape.800}"}},"border":{"@":{"value":"{eds.color.brand.grape.600}"},"hover":{"value":"{eds.color.brand.grape.700}"},"active":{"value":"{eds.color.brand.grape.800}"}},"text":{"@":{"value":"{eds.color.neutral.white}"},"hover":{"value":"{eds.color.neutral.white}"},"active":{"value":"{eds.color.neutral.white}"}}},"error":{"background":{"@":{"value":"{eds.color.other.ruby.600}"},"hover":{"value":"{eds.color.other.ruby.700}"},"active":{"value":"{eds.color.other.ruby.800}"}},"border":{"@":{"value":"{eds.color.other.ruby.600}"},"hover":{"value":"{eds.color.other.ruby.700}"},"active":{"value":"{eds.color.other.ruby.800}"}},"text":{"@":{"value":"{eds.color.neutral.white}"},"hover":{"value":"{eds.color.neutral.white}"},"active":{"value":"{eds.color.neutral.white}"}}}},"secondary":{"brand":{"background":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.brand.grape.700}"},"active":{"value":"{eds.color.brand.grape.800}"}},"border":{"@":{"value":"{eds.color.brand.grape.600}"},"hover":{"value":"{eds.color.brand.grape.700}"},"active":{"value":"{eds.color.brand.grape.800}"}},"text":{"@":{"value":"{eds.color.brand.grape.700}"},"hover":{"value":"{eds.color.neutral.white}"},"active":{"value":"{eds.color.neutral.white}"}},"icon":{"@":{"value":"{eds.color.brand.grape.600}"},"hover":{"value":"{eds.color.neutral.white}"},"active":{"value":"{eds.color.neutral.white}"}}},"neutral":{"background":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.neutral.200}"},"active":{"value":"{eds.color.neutral.700}"}},"border":{"@":{"value":"{eds.color.neutral.600}"},"hover":{"value":"{eds.color.neutral.600}"},"active":{"value":"{eds.color.neutral.700}"}},"text":{"@":{"value":"{eds.color.neutral.600}"},"hover":{"value":"{eds.color.neutral.600}"},"active":{"value":"{eds.color.neutral.white}"}},"icon":{"@":{"value":"{eds.color.neutral.400}"},"hover":{"value":"{eds.color.neutral.400}"},"active":{"value":"{eds.color.neutral.white}"}}},"success":{"background":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.other.mint.700}"},"active":{"value":"{eds.color.other.mint.800}"}},"border":{"@":{"value":"{eds.color.other.mint.600}"},"hover":{"value":"{eds.color.other.mint.700}"},"active":{"value":"{eds.color.other.mint.800}"}},"text":{"@":{"value":"{eds.color.other.mint.700}"},"hover":{"value":"{eds.color.neutral.white}"},"active":{"value":"{eds.color.neutral.white}"}},"icon":{"@":{"value":"{eds.color.other.mint.600}"},"hover":{"value":"{eds.color.neutral.white}"},"active":{"value":"{eds.color.neutral.white}"}}},"warning":{"background":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.other.orange.700}"},"active":{"value":"{eds.color.other.orange.800}"}},"border":{"@":{"value":"{eds.color.other.orange.600}"},"hover":{"value":"{eds.color.other.orange.700}"},"active":{"value":"{eds.color.other.orange.800}"}},"text":{"@":{"value":"{eds.color.other.orange.700}"},"hover":{"value":"{eds.color.neutral.white}"},"active":{"value":"{eds.color.neutral.white}"}},"icon":{"@":{"value":"{eds.color.other.orange.600}"},"hover":{"value":"{eds.color.neutral.white}"},"active":{"value":"{eds.color.neutral.white}"}}},"error":{"background":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.other.ruby.700}"},"active":{"value":"{eds.color.other.ruby.800}"}},"border":{"@":{"value":"{eds.color.other.ruby.600}"},"hover":{"value":"{eds.color.other.ruby.700}"},"active":{"value":"{eds.color.other.ruby.800}"}},"text":{"@":{"value":"{eds.color.other.ruby.700}"},"hover":{"value":"{eds.color.neutral.white}"},"active":{"value":"{eds.color.neutral.white}"}},"icon":{"@":{"value":"{eds.color.other.ruby.600}"},"hover":{"value":"{eds.color.neutral.white}"},"active":{"value":"{eds.color.neutral.white}"}}}},"icon":{"brand":{"@":{"value":"{eds.color.brand.grape.600}"},"hover":{"value":"{eds.color.brand.grape.600}"},"active":{"value":"{eds.color.neutral.white}"},"background":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.brand.grape.200}"},"active":{"value":"{eds.color.brand.grape.700}"}},"border":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.brand.grape.200}"},"active":{"value":"{eds.color.brand.grape.700}"}},"text":{"@":{"value":"{eds.color.brand.grape.700}"},"hover":{"value":"{eds.color.brand.grape.700}"},"active":{"value":"{eds.color.neutral.white}"}}},"neutral":{"@":{"value":"{eds.color.neutral.600}"},"hover":{"value":"{eds.color.neutral.600}"},"active":{"value":"{eds.color.neutral.white}"},"background":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.neutral.200}"},"active":{"value":"{eds.color.neutral.600}"}},"border":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.neutral.200}"},"active":{"value":"{eds.color.neutral.600}"}},"text":{"@":{"value":"{eds.color.neutral.600}"},"hover":{"value":"{eds.color.neutral.600}"},"active":{"value":"{eds.color.neutral.white}"}}},"success":{"@":{"value":"{eds.color.other.mint.600}"},"hover":{"value":"{eds.color.other.mint.600}"},"active":{"value":"{eds.color.neutral.white}"},"background":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.other.mint.200}"},"active":{"value":"{eds.color.other.mint.700}"}},"border":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.other.mint.200}"},"active":{"value":"{eds.color.other.mint.700}"}},"text":{"@":{"value":"{eds.color.other.mint.700}"},"hover":{"value":"{eds.color.other.mint.700}"},"active":{"value":"{eds.color.neutral.white}"}}},"warning":{"@":{"value":"{eds.color.other.orange.600}"},"hover":{"value":"{eds.color.other.orange.600}"},"active":{"value":"{eds.color.neutral.white}"},"background":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.other.orange.100}"},"active":{"value":"{eds.color.other.orange.700}"}},"border":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.other.orange.100}"},"active":{"value":"{eds.color.other.orange.700}"}},"text":{"@":{"value":"{eds.color.other.orange.700}"},"hover":{"value":"{eds.color.other.orange.700}"},"active":{"value":"{eds.color.neutral.white}"}}},"error":{"@":{"value":"{eds.color.other.ruby.600}"},"hover":{"value":"{eds.color.other.ruby.600}"},"active":{"value":"{eds.color.neutral.white}"},"background":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.other.ruby.200}"},"active":{"value":"{eds.color.other.ruby.700}"}},"border":{"@":{"value":"{eds.theme.color.transparent.black.0}"},"hover":{"value":"{eds.color.other.ruby.200}"},"active":{"value":"{eds.color.other.ruby.700}"}},"text":{"@":{"value":"{eds.color.other.ruby.700}"},"hover":{"value":"{eds.color.other.ruby.700}"},"active":{"value":"{eds.color.neutral.white}"}}}}}},"box":{"button":{"border":{"radius":{"value":"{eds.border.radius.md}"}}}}}}}'),forms_namespaceObject=JSON.parse('{"eds":{"theme":{"typography":{"form":{"label":{"value":"var(--eds-typography-preset-006)"},"input":{"value":"var(--eds-typography-preset-005-light)"}}},"color":{"form":{"border":{"@":{"value":"{eds.color.neutral.500}"},"hover":{"value":"{eds.color.neutral.800}"}},"background":{"@":{"value":"{eds.color.neutral.white}"},"hover":{"value":"{eds.color.neutral.100}"}},"label":{"value":"{eds.color.neutral.700}"}}},"form":{"border":{"width":{"value":"{eds.border.width.sm}"},"radius":{"value":"{eds.border.radius.md}"}}}}}}'),link_namespaceObject=JSON.parse('{"eds":{"theme":{"color":{"link":{"brand":{"text":{"@":{"value":"var(--eds-theme-color-text-neutral-strong)"},"hover":{"value":"var(--eds-theme-color-text-brand-default)"},"focus":{"value":"var(--eds-theme-color-text-neutral-default-inverse)"}},"text-decoration":{"@":{"value":"var(--eds-theme-color-text-brand-default)"},"hover":{"value":"var(--eds-theme-color-text-brand-default)"},"focus":{"value":"var(--eds-theme-color-text-neutral-default-inverse)"}},"background":{"focus":{"value":"var(--eds-theme-color-text-brand-default)"}}},"neutral":{"text":{"@":{"value":"var(--eds-theme-color-text-neutral-strong)"},"hover":{"value":"var(--eds-theme-color-text-brand-default)"},"focus":{"value":"var(--eds-theme-color-text-neutral-default-inverse)"}},"text-decoration":{"@":{"value":"var(--eds-theme-color-text-neutral-default)"},"hover":{"value":"var(--eds-theme-color-text-brand-default)"},"focus":{"value":"var(--eds-theme-color-text-neutral-default-inverse)"}},"background":{"focus":{"value":"var(--eds-theme-color-text-neutral-default)"}}}}},"typography":{"link":{"lg":{"value":"var(--eds-typography-preset-004)"},"md":{"value":"var(--eds-typography-preset-005)"},"sm":{"value":"var(--eds-typography-preset-007)"},"xs":{"value":"var(--eds-typography-preset-009)"}}}}}}'),tab_namespaceObject=JSON.parse('{"eds":{"theme":{"typography":{"tab":{"lg":{"@":{"value":"var(--eds-typography-preset-006-light)"},"active":{"value":"var(--eds-typography-preset-006)"}},"sm":{"@":{"value":"var(--eds-typography-preset-008-light)"},"active":{"value":"var(--eds-typography-preset-009)"}}}}}}}'),tag_namespaceObject=JSON.parse('{"eds":{"theme":{"typography":{"tag":{"value":"var(--eds-typography-preset-009)"}}}}}');var flattenToken=__webpack_require__("./.storybook/util/flattenToken.js"),TokenSpecimen=__webpack_require__("./.storybook/components/TokenSpecimen/TokenSpecimen.tsx");const TypographyComponents_stories={title:"Design Tokens/Tier 3: Component",parameters:{axe:{skip:!0}}},Typography={render:()=>{const values={},componentTypography=(0,lodash.merge)(breadcrumb_namespaceObject,buttons_namespaceObject,forms_namespaceObject,link_namespaceObject,tab_namespaceObject,tag_namespaceObject);return(0,lodash.forEach)((0,lodash.at)(componentTypography,"eds.theme.typography")[0],((_,key)=>{values[key]=(0,flattenToken.Z)((0,lodash.at)(componentTypography,`eds.theme.typography.${key}`)[0],`eds-theme-typography-${key}-`)})),react.createElement("div",null,Object.keys(values).map((section=>react.createElement(Section.$,{key:section,title:(0,lodash.capitalize)(section)},react.createElement(Grid.r,null,Object.keys(values[section]).map((usage=>react.createElement(TokenSpecimen.T,{inlineStyles:{font:values[section][usage]},key:usage,name:usage,value:values[section][usage],variant:"typography-body"}))))))))}};Typography.parameters={...Typography.parameters,docs:{...Typography.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const values: {\n      [key: string]: {\n        [key: string]: string;\n      };\n    } = {};\n    const componentTypography = merge(breadcrumb, button, form, link, tab, tag);\n    forEach(at(componentTypography, 'eds.theme.typography')[0], (_, key) => {\n      values[key] = flatten(at(componentTypography, `eds.theme.typography.${key}`)[0], `eds-theme-typography-${key}-`);\n    });\n\n    // Flatten all the tier 3 tokens, group them by component, and print specimens for the results\n    return <div>\n        {Object.keys(values).map(section => {\n        return <Section key={section} title={capitalize(section)}>\n              <Grid>\n                {Object.keys(values[section]).map(usage => {\n              return <TokenSpecimen inlineStyles={{\n                font: values[section][usage]\n              }} key={usage} name={usage} value={values[section][usage]} variant=\"typography-body\" />;\n            })}\n              </Grid>\n            </Section>;\n      })}\n      </div>;\n  }\n}",...Typography.parameters?.docs?.source}}}},"./src/components/Section/Section.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Section});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Heading=__webpack_require__("./src/components/Heading/Heading.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Section_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Section/Section.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Section_module.Z,options);const Section_Section_module=Section_module.Z&&Section_module.Z.locals?Section_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Section=_ref=>{let{align,children,className,description,headingAs,headingSize="h2",overline,right,title,titleAfter,titleBefore,...other}=_ref;const componentClassName=(0,clsx.Z)(Section_Section_module.section,"center"===align&&Section_Section_module["section--center"],className);return react.createElement("section",_extends({className:componentClassName},other),react.createElement("div",{className:Section_Section_module.section__inner},react.createElement("header",{className:Section_Section_module.section__header},react.createElement("div",{className:Section_Section_module["section__header-inner"]},titleBefore&&react.createElement("div",{className:Section_Section_module["section__title-before"]},titleBefore),react.createElement("div",{className:Section_Section_module["section__title-inner"]},overline&&react.createElement("div",{className:Section_Section_module.section__overline},overline),react.createElement(Heading.X,{as:headingAs,className:Section_Section_module.section__title,size:headingSize},title,titleAfter&&react.createElement("span",{className:Section_Section_module["section__title-after"]},titleAfter)),description&&react.createElement("div",{className:Section_Section_module.section__description},description))),right&&react.createElement("div",{className:Section_Section_module.section__right},right)),react.createElement("div",{className:Section_Section_module.section__body},children)))};try{Section.displayName="Section",Section.__docgenInfo={description:'`import {Section} from "@chanzuckerberg/eds";`\n\nSection component contains a section header and body.\n\nThe Heading component requires a value for "size", so this headingAs prop is provided\na default value of "h2" to allow it to remain optional on Section component.',displayName:"Section",props:{align:{defaultValue:null,description:"Align variations:\n- **center** yields a center-aligned section header",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'}]}},children:{defaultValue:null,description:"Child node(s) that can be nested inside component",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description that appears below the section title",name:"description",required:!1,type:{name:"ReactNode"}},overline:{defaultValue:null,description:"overline appears above the section title",name:"overline",required:!1,type:{name:"ReactNode"}},headingAs:{defaultValue:null,description:'"as" prop, passed to Heading Component',name:"headingAs",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},headingSize:{defaultValue:{value:"h2"},description:'"size" prop, passed to Heading Component',name:"headingSize",required:!1,type:{name:"enum",value:[{value:'"headline-lg"'},{value:'"headline-md"'},{value:'"headline-sm"'},{value:'"title-md"'},{value:'"title-sm"'},{value:'"title-xs"'},{value:'"body-sm"'},{value:'"body-xs"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'}]}},right:{defaultValue:null,description:"Right slot - an area to put right-aligned content after section title",name:"right",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Section heading text string",name:"title",required:!1,type:{name:"string"}},titleAfter:{defaultValue:null,description:"Slot for node to appear to the right of the section title. Typically used to include a Badge, Button, Tooltip, or other component",name:"titleAfter",required:!1,type:{name:"ReactNode"}},titleBefore:{defaultValue:null,description:"Slot for node to appear to the left of the section title. Typically used for images or avatars",name:"titleBefore",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Section/Section.tsx#Section"]={docgenInfo:Section.__docgenInfo,name:"Section",path:"src/components/Section/Section.tsx#Section"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Section/Section.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # SECTION\n\\*------------------------------------*/\n\n/**\n * Section\n * \n * A section is a discrete section of a web page.\n */\n\n.tlJzVMDoi3cLkxw70eVc {\n  padding-top: var(--eds-size-4);\n  padding-bottom: var(--eds-size-4);\n}\n\n/**\n * Section header\n * \n * contains section header inner, left, and right elements.\n */\n\n.aiHgexrspGGEOX94J3EF {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  gap: var(--eds-size-1);\n  margin-bottom: var(--eds-size-3);\n}\n\n/**\n   * Section header within centered section\n   */\n\n.LvcLhI3Uwaat_a5_nbfe .aiHgexrspGGEOX94J3EF {\n    justify-content: center;\n  }\n\n/**\n* Section header inner\n* \n* Contains the titleBefore, title-inner, and titleAfter..\n*/\n\n.X45wbGfVBqdQOAW0bEkR {\n  /**\n   * Flex grow only has an effect if there is content in the section__right slot;\n   * section_right gets forced to the right edge of the header \n   */\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  gap: var(--eds-size-1);\n}\n\n/*  To center the header, flex-grow must be disabled. */\n\n.LvcLhI3Uwaat_a5_nbfe .X45wbGfVBqdQOAW0bEkR {\n    flex-grow: 0;\n  }\n\n/**\n* Section title inner\n* \n* Contains the section title, overline, and description in a column..\n*/\n\n.S95kk19745dSKtrmYn2a {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.LvcLhI3Uwaat_a5_nbfe .S95kk19745dSKtrmYn2a {\n    /* When variant === center, the title inner container gets centered in the header inner container */\n    justify-self: center;\n    /* When variant === center, the title inner container's contents get center aligned on the cross-axis */\n    align-items: center;\n  }\n\n/**\n * Section title\n */\n\n.Gvxd2YFVpXFFLLxwmYoz {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n/**\n* Section title before, after\n* \n* Slots for node(s) to appear to the left (before) and right (after) of the title.\n*\n* The title after slot is vertically aligned to the top of the title, similar to the positioning of a superscript.\n*/\n\n.wBT1hbXGB9b_tpzAwUC9,\n.WgbQfdz_aPEmoUZMzjIL {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n/**\n* overline \n* \n* Optional string that appears above the section title.\n*/\n\n.nOa7vE84mhM_SprEonOS {\n  margin-top: 0;\n  margin-bottom: var(--eds-size-1);\n}\n\n/**\n * Section description\n * \n * Optional string that appears beneath the section title.\n */\n\n.ge1ZulmFwY227LxuBNeQ {\n  margin-top: var(--eds-size-half);\n  margin-bottom: 0;\n}\n\n/**\n* Section right\n* \n* Optional area to put right-aligned content after section title.\n**/\n\n.fi7SqXT2TnME_p9oOSpL {\n  display: flex;\n  align-items: center;\n}\n","",{version:3,sources:["webpack://./src/components/Section/Section.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;;;EAIE;;AACF;EACE,8BAA8B;EAC9B,iCAAiC;AACnC;;AAEA;;;;EAIE;;AACF;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,sBAAsB;EACtB,gCAAgC;AAQlC;;AANE;;IAEE;;AACF;IACE,uBAAuB;EACzB;;AAGF;;;;CAIC;;AACD;EACE;;;IAGE;EACF,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AAKxB;;AAJE,uDAAuD;;AACvD;IACE,YAAY;EACd;;AAGF;;;;CAIC;;AACD;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;AAQzB;;AANE;IACE,mGAAmG;IACnG,oBAAoB;IACpB,uGAAuG;IACvG,mBAAmB;EACrB;;AAGF;;EAEE;;AACF;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;;;;;;CAMC;;AACD;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;;;CAIC;;AACD;EACE,aAAa;EACb,gCAAgC;AAClC;;AAEA;;;;EAIE;;AACF;EACE,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;;;;EAIE;;AACF;EACE,aAAa;EACb,mBAAmB;AACrB",sourcesContent:["/*------------------------------------*\\\n    # SECTION\n\\*------------------------------------*/\n\n/**\n * Section\n * \n * A section is a discrete section of a web page.\n */\n.section {\n  padding-top: var(--eds-size-4);\n  padding-bottom: var(--eds-size-4);\n}\n\n/**\n * Section header\n * \n * contains section header inner, left, and right elements.\n */\n.section__header {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  gap: var(--eds-size-1);\n  margin-bottom: var(--eds-size-3);\n\n  /**\n   * Section header within centered section\n   */\n  .section--center & {\n    justify-content: center;\n  }\n}\n\n/**\n* Section header inner\n* \n* Contains the titleBefore, title-inner, and titleAfter..\n*/\n.section__header-inner {\n  /**\n   * Flex grow only has an effect if there is content in the section__right slot;\n   * section_right gets forced to the right edge of the header \n   */\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  gap: var(--eds-size-1);\n  /*  To center the header, flex-grow must be disabled. */\n  .section--center & {\n    flex-grow: 0;\n  }\n}\n\n/**\n* Section title inner\n* \n* Contains the section title, overline, and description in a column..\n*/\n.section__title-inner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  .section--center & {\n    /* When variant === center, the title inner container gets centered in the header inner container */\n    justify-self: center;\n    /* When variant === center, the title inner container's contents get center aligned on the cross-axis */\n    align-items: center;\n  }\n}\n\n/**\n * Section title\n */\n.section__title {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n/**\n* Section title before, after\n* \n* Slots for node(s) to appear to the left (before) and right (after) of the title.\n*\n* The title after slot is vertically aligned to the top of the title, similar to the positioning of a superscript.\n*/\n.section__title-before,\n.section__title-after {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n/**\n* overline \n* \n* Optional string that appears above the section title.\n*/\n.section__overline {\n  margin-top: 0;\n  margin-bottom: var(--eds-size-1);\n}\n\n/**\n * Section description\n * \n * Optional string that appears beneath the section title.\n */\n.section__description {\n  margin-top: var(--eds-size-half);\n  margin-bottom: 0;\n}\n\n/**\n* Section right\n* \n* Optional area to put right-aligned content after section title.\n**/\n.section__right {\n  display: flex;\n  align-items: center;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={section:"tlJzVMDoi3cLkxw70eVc",section__header:"aiHgexrspGGEOX94J3EF","section--center":"LvcLhI3Uwaat_a5_nbfe","section__header-inner":"X45wbGfVBqdQOAW0bEkR","section__title-inner":"S95kk19745dSKtrmYn2a",section__title:"Gvxd2YFVpXFFLLxwmYoz","section__title-before":"wBT1hbXGB9b_tpzAwUC9","section__title-after":"WgbQfdz_aPEmoUZMzjIL",section__overline:"nOa7vE84mhM_SprEonOS",section__description:"ge1ZulmFwY227LxuBNeQ",section__right:"fi7SqXT2TnME_p9oOSpL"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);