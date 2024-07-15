"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[1825],{"./.storybook/components/Section/Section.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Section});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Heading=__webpack_require__("./src/components/Heading/Heading.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Section_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./.storybook/components/Section/Section.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Section_module.Z,options);const Section_Section_module=Section_module.Z&&Section_module.Z.locals?Section_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Section=_ref=>{let{align,children,className,description,headingAs="h2",overline,right,title,titleAfter,titleBefore,...other}=_ref;const componentClassName=(0,clsx.Z)(Section_Section_module.section,"center"===align&&Section_Section_module["section--center"],className);return react.createElement("section",_extends({className:componentClassName},other),react.createElement("div",{className:Section_Section_module.section__inner},react.createElement("header",{className:Section_Section_module.section__header},react.createElement("div",{className:Section_Section_module["section__header-inner"]},titleBefore&&react.createElement("div",{className:Section_Section_module["section__title-before"]},titleBefore),react.createElement("div",{className:Section_Section_module["section__title-inner"]},overline&&react.createElement("div",{className:Section_Section_module.section__overline},overline),react.createElement(Heading.X,{as:headingAs,className:Section_Section_module.section__title},title,titleAfter&&react.createElement("span",{className:Section_Section_module["section__title-after"]},titleAfter)),description&&react.createElement("div",{className:Section_Section_module.section__description},description))),right&&react.createElement("div",{className:Section_Section_module.section__right},right)),react.createElement("div",{className:Section_Section_module.section__body},children)))};try{Section.displayName="Section",Section.__docgenInfo={description:'`import {Section} from "@chanzuckerberg/eds";`\n\nSection component contains a section header and body.',displayName:"Section",props:{align:{defaultValue:null,description:"Align variations:\n- **center** yields a center-aligned section header",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'}]}},children:{defaultValue:null,description:"Child node(s) that can be nested inside component",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description that appears below the section title",name:"description",required:!1,type:{name:"ReactNode"}},overline:{defaultValue:null,description:"overline appears above the section title",name:"overline",required:!1,type:{name:"ReactNode"}},headingAs:{defaultValue:{value:"h2"},description:'"as" prop, passed to Heading Component\n\n**Default is `"h2"`.',name:"headingAs",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},right:{defaultValue:null,description:"Right slot - an area to put right-aligned content after section title",name:"right",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Section heading text string",name:"title",required:!1,type:{name:"string"}},titleAfter:{defaultValue:null,description:"Slot for node to appear to the right of the section title. Typically used to include a Badge, Button, Tooltip, or other component",name:"titleAfter",required:!1,type:{name:"ReactNode"}},titleBefore:{defaultValue:null,description:"Slot for node to appear to the left of the section title. Typically used for images or avatars",name:"titleBefore",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/Section/Section.tsx#Section"]={docgenInfo:Section.__docgenInfo,name:"Section",path:".storybook/components/Section/Section.tsx#Section"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Heading/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Heading});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Heading_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/Heading/Heading.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Heading_module.Z,options);const Heading_Heading_module=Heading_module.Z&&Heading_module.Z.locals?Heading_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const headingPresetMap={h1:"headline-lg",h2:"headline-md",h3:"headline-sm",h4:"title-md",h5:"title-sm",h6:"title-xs"},Heading=(0,react.forwardRef)(((_ref,ref)=>{let{as="h1",children,className,preset,...other}=_ref;const TagName=as,componentClassName=(0,clsx.Z)(Heading_Heading_module.heading,preset&&Heading_Heading_module[`heading--${preset}`],!preset&&Heading_Heading_module[`heading--${headingPresetMap[as]}`],className);return react.createElement(TagName,_extends({className:componentClassName,ref},other),children)}));Heading.displayName="Heading";try{Heading.displayName="Heading",Heading.__docgenInfo={description:'`import {Heading} from "@chanzuckerberg/eds";`\n\nA component for styling heading text (`<h1>`-`<h6>`).\n\nBe careful to pass the correct heading element via the `as` prop to avoid skipping heading levels because [heading levels increasing by only one level at a time is important for screen reader users.](https://www.w3.org/WAI/tutorials/page-structure/headings/)',displayName:"Heading",props:{as:{defaultValue:{value:"h1"},description:'This prop can be used to specify which level heading should\nactually be rendered, in the case that you want to render an element\nas one heading but style it as if it were another.\n\n**Default is `"h1"`**.',name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},preset:{defaultValue:null,description:"Prop to set the desired typography value used in design. Acceptable values\nmatch those used across the design system.\n\nFor details, see https://chanzuckerberg.github.io/edu-design-system/?path=/story/design-tokens-tier-2-usage--typography",name:"preset",required:!1,type:{name:"enum",value:[{value:'"headline-lg"'},{value:'"headline-lg-bold"'},{value:'"headline-lg-bold-mobile"'},{value:'"headline-lg-mobile"'},{value:'"headline-md"'},{value:'"headline-md-bold"'},{value:'"headline-md-bold-mobile"'},{value:'"headline-md-mobile"'},{value:'"headline-sm"'},{value:'"headline-sm-bold"'},{value:'"headline-sm-bold-mobile"'},{value:'"headline-sm-mobile"'},{value:'"headline-secondary-lg"'},{value:'"headline-secondary-lg-bold"'},{value:'"headline-secondary-md"'},{value:'"headline-secondary-md-bold"'},{value:'"headline-secondary-sm"'},{value:'"headline-secondary-sm-bold"'},{value:'"title-lg"'},{value:'"title-lg-bold"'},{value:'"title-md"'},{value:'"title-md-bold"'},{value:'"title-sm"'},{value:'"title-sm-bold"'},{value:'"title-xs"'},{value:'"title-xs-bold"'},{value:'"label-lg-subtle"'},{value:'"label-md"'},{value:'"label-md-subtle"'},{value:'"label-sm"'},{value:'"body-xl"'},{value:'"body-lg"'},{value:'"body-md"'},{value:'"body-sm"'},{value:'"body-xs"'},{value:'"caption-lg"'},{value:'"caption-lg-bold"'},{value:'"caption-md"'},{value:'"caption-md-bold"'},{value:'"caption-sm"'},{value:'"caption-sm-bold"'},{value:'"overline"'},{value:'"overline-lg"'},{value:'"overline-md"'},{value:'"overline-sm"'},{value:'"callout"'},{value:'"breadcrumb"'},{value:'"button-lg"'},{value:'"button-md"'},{value:'"button-label"'},{value:'"button-label-sm"'},{value:'"form-label"'},{value:'"form-input"'},{value:'"link-lg"'},{value:'"link-md"'},{value:'"link-sm"'},{value:'"link-xs"'},{value:'"tab-lg"'},{value:'"tab-lg-active"'},{value:'"tab-sm"'},{value:'"tab-sm-active"'},{value:'"tag"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Heading/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/Heading/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./.storybook/components/Section/Section.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # SECTION\n\\*------------------------------------*/\n\n/**\n * Section\n * \n * A section is a discrete section of a web page.\n */\n\n._1ViK_kbzlrT8KtgI5L6 {\n  padding-top: calc(var(--eds-size-4) / 16 * 1rem);\n  padding-bottom: calc(var(--eds-size-4) / 16 * 1rem);\n}\n\n/**\n * Section header\n * \n * contains section header inner, left, and right elements.\n */\n\n.jT6orji7iW13__gYs2qs {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  gap: calc(var(--eds-size-1) / 16 * 1rem);\n  margin-bottom: calc(var(--eds-size-3) / 16 * 1rem);\n}\n\n/**\n   * Section header within centered section\n   */\n\n.qLvbJB6WUOAFL6FVOuEc .jT6orji7iW13__gYs2qs {\n    justify-content: center;\n  }\n\n/**\n* Section header inner\n* \n* Contains the titleBefore, title-inner, and titleAfter..\n*/\n\n.QCCFmIMrsy9So2DzGhGK {\n  /**\n   * Flex grow only has an effect if there is content in the section__right slot;\n   * section_right gets forced to the right edge of the header \n   */\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  gap: calc(var(--eds-size-1) / 16 * 1rem);\n}\n\n/*  To center the header, flex-grow must be disabled. */\n\n.qLvbJB6WUOAFL6FVOuEc .QCCFmIMrsy9So2DzGhGK {\n    flex-grow: 0;\n  }\n\n/**\n* Section title inner\n* \n* Contains the section title, overline, and description in a column..\n*/\n\n.XYu4FxiWQtCMZfLuIFDz {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.qLvbJB6WUOAFL6FVOuEc .XYu4FxiWQtCMZfLuIFDz {\n    /* When variant === center, the title inner container gets centered in the header inner container */\n    justify-self: center;\n    /* When variant === center, the title inner container's contents get center aligned on the cross-axis */\n    align-items: center;\n  }\n\n/**\n * Section title\n */\n\n.nxPJNQ4XrG4rmkchx1XK {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n/**\n* Section title before, after\n* \n* Slots for node(s) to appear to the left (before) and right (after) of the title.\n*\n* The title after slot is vertically aligned to the top of the title, similar to the positioning of a superscript.\n*/\n\n.qSwIv7Ou1lDHMQbIOx8q,\n.ueDz4bOF_xmTU9AOcJcp {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n/**\n* overline \n* \n* Optional string that appears above the section title.\n*/\n\n.RSG1_S5TdLqjezfVqTLF {\n  margin-top: 0;\n  margin-bottom: calc(var(--eds-size-1) / 16 * 1rem);\n}\n\n/**\n * Section description\n * \n * Optional string that appears beneath the section title.\n */\n\n.bU3LuXh1pFRpOXHrAdta {\n  margin-top: calc(var(--eds-size-half) / 16 * 1rem);\n  margin-bottom: 0;\n}\n\n/**\n* Section right\n* \n* Optional area to put right-aligned content after section title.\n**/\n\n.h5FW2oowFxakZAEJ7R3f {\n  display: flex;\n  align-items: center;\n}\n","",{version:3,sources:["webpack://./.storybook/components/Section/Section.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;;;EAIE;;AACF;EACE,gDAAgD;EAChD,mDAAmD;AACrD;;AAEA;;;;EAIE;;AACF;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,wCAAwC;EACxC,kDAAkD;AAQpD;;AANE;;IAEE;;AACF;IACE,uBAAuB;EACzB;;AAGF;;;;CAIC;;AACD;EACE;;;IAGE;EACF,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,wCAAwC;AAK1C;;AAJE,uDAAuD;;AACvD;IACE,YAAY;EACd;;AAGF;;;;CAIC;;AACD;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;AAQzB;;AANE;IACE,mGAAmG;IACnG,oBAAoB;IACpB,uGAAuG;IACvG,mBAAmB;EACrB;;AAGF;;EAEE;;AACF;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;;;;;;CAMC;;AACD;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;;;CAIC;;AACD;EACE,aAAa;EACb,kDAAkD;AACpD;;AAEA;;;;EAIE;;AACF;EACE,kDAAkD;EAClD,gBAAgB;AAClB;;AAEA;;;;EAIE;;AACF;EACE,aAAa;EACb,mBAAmB;AACrB",sourcesContent:["/*------------------------------------*\\\n    # SECTION\n\\*------------------------------------*/\n\n/**\n * Section\n * \n * A section is a discrete section of a web page.\n */\n.section {\n  padding-top: calc(var(--eds-size-4) / 16 * 1rem);\n  padding-bottom: calc(var(--eds-size-4) / 16 * 1rem);\n}\n\n/**\n * Section header\n * \n * contains section header inner, left, and right elements.\n */\n.section__header {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  gap: calc(var(--eds-size-1) / 16 * 1rem);\n  margin-bottom: calc(var(--eds-size-3) / 16 * 1rem);\n\n  /**\n   * Section header within centered section\n   */\n  .section--center & {\n    justify-content: center;\n  }\n}\n\n/**\n* Section header inner\n* \n* Contains the titleBefore, title-inner, and titleAfter..\n*/\n.section__header-inner {\n  /**\n   * Flex grow only has an effect if there is content in the section__right slot;\n   * section_right gets forced to the right edge of the header \n   */\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  gap: calc(var(--eds-size-1) / 16 * 1rem);\n  /*  To center the header, flex-grow must be disabled. */\n  .section--center & {\n    flex-grow: 0;\n  }\n}\n\n/**\n* Section title inner\n* \n* Contains the section title, overline, and description in a column..\n*/\n.section__title-inner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  .section--center & {\n    /* When variant === center, the title inner container gets centered in the header inner container */\n    justify-self: center;\n    /* When variant === center, the title inner container's contents get center aligned on the cross-axis */\n    align-items: center;\n  }\n}\n\n/**\n * Section title\n */\n.section__title {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n/**\n* Section title before, after\n* \n* Slots for node(s) to appear to the left (before) and right (after) of the title.\n*\n* The title after slot is vertically aligned to the top of the title, similar to the positioning of a superscript.\n*/\n.section__title-before,\n.section__title-after {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n/**\n* overline \n* \n* Optional string that appears above the section title.\n*/\n.section__overline {\n  margin-top: 0;\n  margin-bottom: calc(var(--eds-size-1) / 16 * 1rem);\n}\n\n/**\n * Section description\n * \n * Optional string that appears beneath the section title.\n */\n.section__description {\n  margin-top: calc(var(--eds-size-half) / 16 * 1rem);\n  margin-bottom: 0;\n}\n\n/**\n* Section right\n* \n* Optional area to put right-aligned content after section title.\n**/\n.section__right {\n  display: flex;\n  align-items: center;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={section:"_1ViK_kbzlrT8KtgI5L6",section__header:"jT6orji7iW13__gYs2qs","section--center":"qLvbJB6WUOAFL6FVOuEc","section__header-inner":"QCCFmIMrsy9So2DzGhGK","section__title-inner":"XYu4FxiWQtCMZfLuIFDz",section__title:"nxPJNQ4XrG4rmkchx1XK","section__title-before":"qSwIv7Ou1lDHMQbIOx8q","section__title-after":"ueDz4bOF_xmTU9AOcJcp",section__overline:"RSG1_S5TdLqjezfVqTLF",section__description:"bU3LuXh1pFRpOXHrAdta",section__right:"h5FW2oowFxakZAEJ7R3f"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/Heading/Heading.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # HEADING\n\\*------------------------------------*/\n\n/**\n * Map the component preset names to the defined typography tokens\n *\n * TODO: This should always match the generated tokens so find a\n * way to generate this.\n */\n\n.jnFaA5qkbTg904cCbPig {\n  font: var(--eds-theme-typography-headline-lg);\n}\n\n@media all and (max-width: 768px) {\n\n.jnFaA5qkbTg904cCbPig {\n    font: var(--eds-typography-preset-001-mobile)\n}\n  }\n\n.HtHfj16RWesml2sDAmRI {\n  font: var(--eds-theme-typography-headline-lg-bold);\n}\n\n.hHgmf9N3IZuSb9eJJsjc {\n  font: var(--eds-theme-typography-headline-lg-bold-mobile);\n}\n\n.EIi5eG5afSF2PbzhpGT8 {\n  font: var(--eds-theme-typography-headline-lg-mobile);\n}\n\n.l14RSE0827gHI1fnxMsS {\n  font: var(--eds-theme-typography-headline-md);\n}\n\n@media all and (max-width: 768px) {\n\n.l14RSE0827gHI1fnxMsS {\n    font: var(--eds-typography-preset-002-mobile)\n}\n  }\n\n.brueaRFDNQRexiZES1Pg {\n  font: var(--eds-theme-typography-headline-md-bold);\n}\n\n.g_rG1eilR19Ul4tse_ru {\n  font: var(--eds-theme-typography-headline-md-bold-mobile);\n}\n\n.HKHkp4ZXMfnCH7AzAVzt {\n  font: var(--eds-theme-typography-headline-md-mobile);\n}\n\n.amGeH0jZkWFWOzTjeHGK {\n  font: var(--eds-theme-typography-headline-sm);\n}\n\n@media all and (max-width: 768px) {\n\n.amGeH0jZkWFWOzTjeHGK {\n    font: var(--eds-typography-preset-003-mobile)\n}\n  }\n\n.KNrQ78yJwek4mjZKEiwq {\n  font: var(--eds-theme-typography-headline-sm-bold);\n}\n\n.R5tsNgfbEj4edneXU8mT {\n  font: var(--eds-theme-typography-headline-sm-bold-mobile);\n}\n\n._5YkjZYvs_jOqekPEBTi {\n  font: var(--eds-theme-typography-headline-sm-mobile);\n}\n\n.MNTnFcaWX2NOkOcWqAIO {\n  font: var(--eds-theme-typography-headline-secondary-lg);\n}\n\n.bdNz_83nJOGwP7sfVvW6 {\n  font: var(--eds-theme-typography-headline-secondary-lg-bold);\n}\n\n.UTE1i1YT7J5CG27DW85o {\n  font: var(--eds-theme-typography-headline-secondary-md);\n}\n\n.i8nt7Es3FuVLl8qVI_1X {\n  font: var(--eds-theme-typography-headline-secondary-md-bold);\n}\n\n.Zc4DCQaYwn_wIljU8FWQ {\n  font: var(--eds-theme-typography-headline-secondary-sm);\n}\n\n.LKids5wb6bD23sToXR3f {\n  font: var(--eds-theme-typography-headline-secondary-sm-bold);\n}\n\n.n12ASoM_kRnVrKxYI79d {\n  font: var(--eds-theme-typography-title-lg);\n}\n\n.vJSZfudz1gRmh6Mk7e1w {\n  font: var(--eds-theme-typography-title-lg-bold);\n}\n\n.vlqDexEstFxbs7O0GtGA {\n  font: var(--eds-theme-typography-title-md);\n}\n\n.uMqFtP7kSPi994mYPSxf {\n  font: var(--eds-theme-typography-title-md-bold);\n}\n\n.KHkNzTcpC_ZAYQThP9QK {\n  font: var(--eds-theme-typography-title-sm);\n}\n\n.SPqKkJ2cQ7Jw3fkgWBms {\n  font: var(--eds-theme-typography-title-sm-bold);\n}\n\n.FJiYY04pnONnnsUlKgtu {\n  font: var(--eds-theme-typography-title-xs);\n}\n\n.OuSbHjE_ynB8Axo1iMFP {\n  font: var(--eds-theme-typography-title-xs-bold);\n}","",{version:3,sources:["webpack://./src/components/Heading/Heading.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;;;;EAKE;;AACF;EACE,6CAA6C;AAK/C;;AAHE;;AAHF;IAII;AAEJ;EADE;;AAEF;EACE,kDAAkD;AACpD;;AACA;EACE,yDAAyD;AAC3D;;AACA;EACE,oDAAoD;AACtD;;AACA;EACE,6CAA6C;AAK/C;;AAHE;;AAHF;IAII;AAEJ;EADE;;AAEF;EACE,kDAAkD;AACpD;;AACA;EACE,yDAAyD;AAC3D;;AACA;EACE,oDAAoD;AACtD;;AACA;EACE,6CAA6C;AAK/C;;AAHE;;AAHF;IAII;AAEJ;EADE;;AAEF;EACE,kDAAkD;AACpD;;AACA;EACE,yDAAyD;AAC3D;;AACA;EACE,oDAAoD;AACtD;;AACA;EACE,uDAAuD;AACzD;;AACA;EACE,4DAA4D;AAC9D;;AACA;EACE,uDAAuD;AACzD;;AACA;EACE,4DAA4D;AAC9D;;AACA;EACE,uDAAuD;AACzD;;AACA;EACE,4DAA4D;AAC9D;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,+CAA+C;AACjD",sourcesContent:["/*------------------------------------*\\\n    # HEADING\n\\*------------------------------------*/\n\n/**\n * Map the component preset names to the defined typography tokens\n *\n * TODO: This should always match the generated tokens so find a\n * way to generate this.\n */\n.heading--headline-lg {\n  font: var(--eds-theme-typography-headline-lg);\n\n  @media all and (max-width: $eds-bp-md) {\n    font: var(--eds-typography-preset-001-mobile);\n  }\n}\n.heading--headline-lg-bold {\n  font: var(--eds-theme-typography-headline-lg-bold);\n}\n.heading--headline-lg-bold-mobile {\n  font: var(--eds-theme-typography-headline-lg-bold-mobile);\n}\n.heading--headline-lg-mobile {\n  font: var(--eds-theme-typography-headline-lg-mobile);\n}\n.heading--headline-md {\n  font: var(--eds-theme-typography-headline-md);\n\n  @media all and (max-width: $eds-bp-md) {\n    font: var(--eds-typography-preset-002-mobile);\n  }\n}\n.heading--headline-md-bold {\n  font: var(--eds-theme-typography-headline-md-bold);\n}\n.heading--headline-md-bold-mobile {\n  font: var(--eds-theme-typography-headline-md-bold-mobile);\n}\n.heading--headline-md-mobile {\n  font: var(--eds-theme-typography-headline-md-mobile);\n}\n.heading--headline-sm {\n  font: var(--eds-theme-typography-headline-sm);\n  \n  @media all and (max-width: $eds-bp-md) {\n    font: var(--eds-typography-preset-003-mobile);\n  }\n}\n.heading--headline-sm-bold {\n  font: var(--eds-theme-typography-headline-sm-bold);\n}\n.heading--headline-sm-bold-mobile {\n  font: var(--eds-theme-typography-headline-sm-bold-mobile);\n}\n.heading--headline-sm-mobile {\n  font: var(--eds-theme-typography-headline-sm-mobile);\n}\n.heading--headline-secondary-lg {\n  font: var(--eds-theme-typography-headline-secondary-lg);\n}\n.heading--headline-secondary-lg-bold {\n  font: var(--eds-theme-typography-headline-secondary-lg-bold);\n}\n.heading--headline-secondary-md {\n  font: var(--eds-theme-typography-headline-secondary-md);\n}\n.heading--headline-secondary-md-bold {\n  font: var(--eds-theme-typography-headline-secondary-md-bold);\n}\n.heading--headline-secondary-sm {\n  font: var(--eds-theme-typography-headline-secondary-sm);\n}\n.heading--headline-secondary-sm-bold {\n  font: var(--eds-theme-typography-headline-secondary-sm-bold);\n}\n.heading--title-lg {\n  font: var(--eds-theme-typography-title-lg);\n}\n.heading--title-lg-bold {\n  font: var(--eds-theme-typography-title-lg-bold);\n}\n.heading--title-md {\n  font: var(--eds-theme-typography-title-md);\n}\n.heading--title-md-bold {\n  font: var(--eds-theme-typography-title-md-bold);\n}\n.heading--title-sm {\n  font: var(--eds-theme-typography-title-sm);\n}\n.heading--title-sm-bold {\n  font: var(--eds-theme-typography-title-sm-bold);\n}\n.heading--title-xs {\n  font: var(--eds-theme-typography-title-xs);\n}\n.heading--title-xs-bold {\n  font: var(--eds-theme-typography-title-xs-bold);\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"heading--headline-lg":"jnFaA5qkbTg904cCbPig","heading--headline-lg-bold":"HtHfj16RWesml2sDAmRI","heading--headline-lg-bold-mobile":"hHgmf9N3IZuSb9eJJsjc","heading--headline-lg-mobile":"EIi5eG5afSF2PbzhpGT8","heading--headline-md":"l14RSE0827gHI1fnxMsS","heading--headline-md-bold":"brueaRFDNQRexiZES1Pg","heading--headline-md-bold-mobile":"g_rG1eilR19Ul4tse_ru","heading--headline-md-mobile":"HKHkp4ZXMfnCH7AzAVzt","heading--headline-sm":"amGeH0jZkWFWOzTjeHGK","heading--headline-sm-bold":"KNrQ78yJwek4mjZKEiwq","heading--headline-sm-bold-mobile":"R5tsNgfbEj4edneXU8mT","heading--headline-sm-mobile":"_5YkjZYvs_jOqekPEBTi","heading--headline-secondary-lg":"MNTnFcaWX2NOkOcWqAIO","heading--headline-secondary-lg-bold":"bdNz_83nJOGwP7sfVvW6","heading--headline-secondary-md":"UTE1i1YT7J5CG27DW85o","heading--headline-secondary-md-bold":"i8nt7Es3FuVLl8qVI_1X","heading--headline-secondary-sm":"Zc4DCQaYwn_wIljU8FWQ","heading--headline-secondary-sm-bold":"LKids5wb6bD23sToXR3f","heading--title-lg":"n12ASoM_kRnVrKxYI79d","heading--title-lg-bold":"vJSZfudz1gRmh6Mk7e1w","heading--title-md":"vlqDexEstFxbs7O0GtGA","heading--title-md-bold":"uMqFtP7kSPi994mYPSxf","heading--title-sm":"KHkNzTcpC_ZAYQThP9QK","heading--title-sm-bold":"SPqKkJ2cQ7Jw3fkgWBms","heading--title-xs":"FJiYY04pnONnnsUlKgtu","heading--title-xs-bold":"OuSbHjE_ynB8Axo1iMFP"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);