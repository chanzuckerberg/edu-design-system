"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[103],{"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Text_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/Text/Text.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Text_module.Z,options);const Text_Text_module=Text_module.Z&&Text_module.Z.locals?Text_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Text=(0,react.forwardRef)(((_ref,ref)=>{let{as:TagName="p",children,className,preset="body-md",...other}=_ref;const componentClassName=(0,clsx.Z)(Text_Text_module.text,preset&&Text_Text_module[`text--${preset}`],className);return react.createElement(TagName,_extends({className:componentClassName,ref},other),children)}));Text.displayName="Text";try{Text.displayName="Text",Text.__docgenInfo={description:'`import {Text} from "@chanzuckerberg/eds";`\n\nThe Text component decorates `<p>` and `<span>` with typographic variants. Use\ntypography presets to style the text via `preset`.\n\nFor headers, please use `Heading`.',displayName:"Text",props:{as:{defaultValue:null,description:'Controls which component to use when rendering copy: `p` or `span`.\n\n**Default is `"p"`**.',name:"as",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"span"'},{value:'"div"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},preset:{defaultValue:{value:"body-md"},description:"Prop to set the desired typography value used in design. Acceptable values\nmatch those used across the design system.",name:"preset",required:!1,type:{name:"enum",value:[{value:'"headline-lg"'},{value:'"headline-lg-bold"'},{value:'"headline-lg-bold-mobile"'},{value:'"headline-lg-mobile"'},{value:'"headline-md"'},{value:'"headline-md-bold"'},{value:'"headline-md-bold-mobile"'},{value:'"headline-md-mobile"'},{value:'"headline-sm"'},{value:'"headline-sm-bold"'},{value:'"headline-sm-bold-mobile"'},{value:'"headline-sm-mobile"'},{value:'"headline-secondary-lg"'},{value:'"headline-secondary-lg-bold"'},{value:'"headline-secondary-md"'},{value:'"headline-secondary-md-bold"'},{value:'"headline-secondary-sm"'},{value:'"headline-secondary-sm-bold"'},{value:'"title-lg"'},{value:'"title-lg-bold"'},{value:'"title-md"'},{value:'"title-md-bold"'},{value:'"title-sm"'},{value:'"title-sm-bold"'},{value:'"title-xs"'},{value:'"title-xs-bold"'},{value:'"label-lg-subtle"'},{value:'"label-md"'},{value:'"label-md-subtle"'},{value:'"label-sm"'},{value:'"body-xl"'},{value:'"body-lg"'},{value:'"body-md"'},{value:'"body-sm"'},{value:'"body-xs"'},{value:'"caption-lg"'},{value:'"caption-lg-bold"'},{value:'"caption-md"'},{value:'"caption-md-bold"'},{value:'"caption-sm"'},{value:'"caption-sm-bold"'},{value:'"overline"'},{value:'"overline-lg"'},{value:'"overline-md"'},{value:'"overline-sm"'},{value:'"callout"'},{value:'"breadcrumb"'},{value:'"button-lg"'},{value:'"button-md"'},{value:'"button-label"'},{value:'"button-label-sm"'},{value:'"form-label"'},{value:'"form-input"'},{value:'"link-lg"'},{value:'"link-md"'},{value:'"link-sm"'},{value:'"link-xs"'},{value:'"tab-lg"'},{value:'"tab-lg-active"'},{value:'"tab-sm"'},{value:'"tab-sm-active"'},{value:'"tag"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BodyLarge:()=>BodyLarge,BodyMedium:()=>BodyMedium,BodySmall:()=>BodySmall,BodyXLarge:()=>BodyXLarge,BodyXSmall:()=>BodyXSmall,Callout:()=>Callout,Caption:()=>Caption,Default:()=>Default,Overline:()=>Overline,OverridingFontFamily:()=>OverridingFontFamily,UsingColorTokens:()=>UsingColorTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/Text.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Text",component:_Text__WEBPACK_IMPORTED_MODULE_1__.x,parameters:{layout:"centered",badges:["api-1.3","theme-2.0"]},argTypes:{children:{control:{type:"text"}}},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"m-1"},Story())]},Default={args:{children:"Default <Text /> rendering"}},BodyXLarge={args:{preset:"body-xl",children:"Body extra-large"}},BodyLarge={args:{preset:"body-lg",children:"Body large"}},BodyMedium={args:{preset:"body-md",children:"Body medium"}},BodySmall={args:{preset:"body-sm",children:"Body small"}},BodyXSmall={args:{preset:"body-xs",children:"Body Xsmall"}},Caption={args:{preset:"caption-md",children:"Caption"}},Overline={args:{preset:"overline",children:"Overline"}},Callout={args:{preset:"callout",children:"Callout"}},OverridingFontFamily={args:{preset:"body-md",children:"You can use utility classes to override the font family used for a given size",className:"!font-secondary"}},UsingColorTokens={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text__WEBPACK_IMPORTED_MODULE_1__.x,_extends({},args,{className:"text-utility-warning",preset:"body-xl"}),"using ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"text-utility-warning")," utility class"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text__WEBPACK_IMPORTED_MODULE_1__.x,_extends({},args,{className:"text-utility-success",preset:"body-lg"}),"using ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"text-utility-success")," utility class"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text__WEBPACK_IMPORTED_MODULE_1__.x,_extends({},args,{className:"text-utility-error",preset:"body-md"}),"using ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"text-utility-error")," utility class"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text__WEBPACK_IMPORTED_MODULE_1__.x,{className:"text-[var(--eds-theme-color-text-utility-success)]",preset:"body-sm"},"using inline color"))},__namedExportsOrder=["Default","BodyXLarge","BodyLarge","BodyMedium","BodySmall","BodyXSmall","Caption","Overline","Callout","OverridingFontFamily","UsingColorTokens"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Default <Text /> rendering'\n  }\n}",...Default.parameters?.docs?.source}}},BodyXLarge.parameters={...BodyXLarge.parameters,docs:{...BodyXLarge.parameters?.docs,source:{originalSource:"{\n  args: {\n    preset: 'body-xl',\n    children: 'Body extra-large'\n  }\n}",...BodyXLarge.parameters?.docs?.source}}},BodyLarge.parameters={...BodyLarge.parameters,docs:{...BodyLarge.parameters?.docs,source:{originalSource:"{\n  args: {\n    preset: 'body-lg',\n    children: 'Body large'\n  }\n}",...BodyLarge.parameters?.docs?.source}}},BodyMedium.parameters={...BodyMedium.parameters,docs:{...BodyMedium.parameters?.docs,source:{originalSource:"{\n  args: {\n    preset: 'body-md',\n    children: 'Body medium'\n  }\n}",...BodyMedium.parameters?.docs?.source}}},BodySmall.parameters={...BodySmall.parameters,docs:{...BodySmall.parameters?.docs,source:{originalSource:"{\n  args: {\n    preset: 'body-sm',\n    children: 'Body small'\n  }\n}",...BodySmall.parameters?.docs?.source}}},BodyXSmall.parameters={...BodyXSmall.parameters,docs:{...BodyXSmall.parameters?.docs,source:{originalSource:"{\n  args: {\n    preset: 'body-xs',\n    children: 'Body Xsmall'\n  }\n}",...BodyXSmall.parameters?.docs?.source}}},Caption.parameters={...Caption.parameters,docs:{...Caption.parameters?.docs,source:{originalSource:"{\n  args: {\n    preset: 'caption-md',\n    children: 'Caption'\n  }\n}",...Caption.parameters?.docs?.source}}},Overline.parameters={...Overline.parameters,docs:{...Overline.parameters?.docs,source:{originalSource:"{\n  args: {\n    preset: 'overline',\n    children: 'Overline'\n  }\n}",...Overline.parameters?.docs?.source}}},Callout.parameters={...Callout.parameters,docs:{...Callout.parameters?.docs,source:{originalSource:"{\n  args: {\n    preset: 'callout',\n    children: 'Callout'\n  }\n}",...Callout.parameters?.docs?.source}}},OverridingFontFamily.parameters={...OverridingFontFamily.parameters,docs:{...OverridingFontFamily.parameters?.docs,source:{originalSource:"{\n  args: {\n    preset: 'body-md',\n    children: 'You can use utility classes to override the font family used for a given size',\n    className: '!font-secondary'\n  }\n}",...OverridingFontFamily.parameters?.docs?.source}}},UsingColorTokens.parameters={...UsingColorTokens.parameters,docs:{...UsingColorTokens.parameters?.docs,source:{originalSource:'{\n  render: args => <div>\n      <Text {...args} className="text-utility-warning" preset="body-xl">\n        using <code>text-utility-warning</code> utility class\n      </Text>\n      <Text {...args} className="text-utility-success" preset="body-lg">\n        using <code>text-utility-success</code> utility class\n      </Text>\n      <Text {...args} className="text-utility-error" preset="body-md">\n        using <code>text-utility-error</code> utility class\n      </Text>\n      <Text className="text-[var(--eds-theme-color-text-utility-success)]" preset="body-sm">\n        using inline color\n      </Text>\n    </div>\n}',...UsingColorTokens.parameters?.docs?.source},description:{story:"Here we demonstrate how to use utility classes to augment the text.\nNote that when present, `preset` will override the deprecated props.",...UsingColorTokens.parameters?.docs?.description}}};try{UsingColorTokens.displayName="UsingColorTokens",UsingColorTokens.__docgenInfo={description:"Here we demonstrate how to use utility classes to augment the text.\nNote that when present, `preset` will override the deprecated props.",displayName:"UsingColorTokens",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.stories.tsx#UsingColorTokens"]={docgenInfo:UsingColorTokens.__docgenInfo,name:"UsingColorTokens",path:"src/components/Text/Text.stories.tsx#UsingColorTokens"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/Text/Text.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'/*------------------------------------*\\\n    # TEXT\n\\*------------------------------------*/\n\n/**\n * Map the component preset names to the defined typography tokens\n *\n * TODO: This should always match the generated tokens so find a\n * way to generate this.\n */\n\n.DhmlsIfNxJUkqX9MqosQ {\n  font: var(--eds-theme-typography-headline-lg);\n}\n\n.DvKxDVyR1A2VKlXEKmZK {\n  font: var(--eds-theme-typography-headline-lg-bold);\n}\n\n.f8dgrLUYrPW85oxNpy3W {\n  font: var(--eds-theme-typography-headline-lg-bold-mobile);\n}\n\n.UhA9q2umDfAKFA9YiUmZ {\n  font: var(--eds-theme-typography-headline-lg-mobile);\n}\n\n.vHm8cFKh7_X8fybm68hc {\n  font: var(--eds-theme-typography-headline-md);\n}\n\n.Y1H5GjOlLS6pF5H3c_Fy {\n  font: var(--eds-theme-typography-headline-md-bold);\n}\n\n.yfwmw7Fkz7CByTZ907Gp {\n  font: var(--eds-theme-typography-headline-md-bold-mobile);\n}\n\n.HxKS3AonNZBy8lJRDhWM {\n  font: var(--eds-theme-typography-headline-md-mobile);\n}\n\n.W8wLnVAfkibdIwvqpoXo {\n  font: var(--eds-theme-typography-headline-sm);\n}\n\n.MPQJmXhe2QlSbQBahdIv {\n  font: var(--eds-theme-typography-headline-sm-bold);\n}\n\n.R7SQxRWr3jt33P4dHBBC {\n  font: var(--eds-theme-typography-headline-sm-bold-mobile);\n}\n\n.SyIDnkLUqt2Gvl4pGEwt {\n  font: var(--eds-theme-typography-headline-sm-mobile);\n}\n\n.s_yAx32eU9Ig_UWGjsKt {\n  font: var(--eds-theme-typography-headline-secondary-lg);\n}\n\n.iFaUcBpvOryf3M9Ph6Wh {\n  font: var(--eds-theme-typography-headline-secondary-lg-bold);\n}\n\n.CMlsSkEkVI0Zfi00Xeiu {\n  font: var(--eds-theme-typography-headline-secondary-md);\n}\n\n.GoZhyVxrMpThO74T7IL8 {\n  font: var(--eds-theme-typography-headline-secondary-md-bold);\n}\n\n.dqWY6U3rZ_zBr0qH0KCv {\n  font: var(--eds-theme-typography-headline-secondary-sm);\n}\n\n.DZ_tOjabinx7fZeMz8kQ {\n  font: var(--eds-theme-typography-headline-secondary-sm-bold);\n}\n\n.BLA83uUMyW_gctYumlPv {\n  font: var(--eds-theme-typography-title-lg);\n}\n\n._55_zYxH5bSRFbH6apZz {\n  font: var(--eds-theme-typography-title-lg-bold);\n}\n\n.OPv4iVIxYF9Z3RNvKyLn {\n  font: var(--eds-theme-typography-title-md);\n}\n\n.ctjW6VOnBhA2R4G5FEyT {\n  font: var(--eds-theme-typography-title-md-bold);\n}\n\n.sC4fs_rzr0R8g_sh2EMo {\n  font: var(--eds-theme-typography-title-sm);\n}\n\n.T96ZEo0J2q0jQmDvUiXh {\n  font: var(--eds-theme-typography-title-sm-bold);\n}\n\n.AvqKwN_t1Lza8rEWC6PQ {\n  font: var(--eds-theme-typography-title-xs);\n}\n\n.nfQ2DbrQTdskI09UmhbL {\n  font: var(--eds-theme-typography-title-xs-bold);\n}\n\n.iOWhbh7IiQSZBGbyVkCq {\n  font: var(--eds-theme-typography-label-lg-subtle);\n}\n\n.hP8AHcHqHBmUMIACT63P {\n  font: var(--eds-theme-typography-label-md);\n}\n\n.r8i6e8bAE9l3EAAUq48f {\n  font: var(--eds-theme-typography-label-md-subtle);\n}\n\n.HxjWKgSnIkVu67eLVVCI {\n  font: var(--eds-theme-typography-label-sm);\n}\n\n.nwgnB5s2X4CE1DHNWSfi {\n  font: var(--eds-theme-typography-body-xl);\n}\n\n.IbUEkvD2irvJoo_Tqsms {\n  font: var(--eds-theme-typography-body-lg);\n}\n\n.YOZr2LgtpArXj722lfGg {\n  font: var(--eds-theme-typography-body-md);\n}\n\n.yiOQ68CEgeALxMgTSQq9 {\n  font: var(--eds-theme-typography-body-sm);\n}\n\n.aFyy5eIfXKI1cF3rBfpB {\n  font: var(--eds-theme-typography-body-xs);\n}\n\n.QzTfwZpw1gbSKUtlHz7V {\n  font: var(--eds-theme-typography-caption-lg);\n}\n\n.mvFSbxlp5PgzR1fXrP2J {\n  font: var(--eds-theme-typography-caption-lg-bold);\n}\n\n.jUiEPr3xJs40ZKp5iLmG {\n  font: var(--eds-theme-typography-caption-md);\n}\n\n.Ld8VO1OJ0F7zoIC77AsJ {\n  font: var(--eds-theme-typography-caption-md-bold);\n}\n\n.p25F_rIYqwccZGBOhtDt {\n  font: var(--eds-theme-typography-caption-sm);\n}\n\n.YjgI7xL7RjJ26DEqXp8w {\n  font: var(--eds-theme-typography-caption-sm-bold);\n}\n\n.ntysVX8lE1UjxXEHSRvy {\n  /* @deprecated This should not be used in code or design. It will be removed in a future version of EDS." */\n  font: var(--eds-theme-typography-overline);\n  text-transform: uppercase;\n}\n\n.vLMATCpynuRIPfzO_wat {\n  font: var(--eds-theme-typography-overline-lg);\n  text-transform: uppercase;\n}\n\n.m7yyF5ij8bm8m0ro7C2l {\n  font: var(--eds-theme-typography-overline-md);\n  text-transform: uppercase;\n}\n\n.T_7a5jxvuYa4JHeoABr_ {\n  font: var(--eds-theme-typography-overline-sm);\n  text-transform: uppercase;\n}\n\n.Sxwj8Nga21XT2r9mbH4h {\n  font: var(--eds-theme-typography-callout);\n}\n\n.aTSULmEReR4iXuCCID2T {\n  font: var(--eds-theme-typography-breadcrumb);\n}\n\n.r4R3qIu5kgXzaIASrYUP {\n  font: var(--eds-theme-typography-button-lg);\n}\n\n.ektdRZSxYE5xIYpnyyKo {\n  font: var(--eds-theme-typography-button-md);\n}\n\n.K2b1OYUsPJMkpVUU6pdv {\n  font: var(--eds-theme-typography-button-label);\n}\n\n.qlHpX8TPPwz2Q4ievKL7 {\n  font: var(--eds-theme-typography-button-label-sm);\n}\n\n.ugHAU5EnFcBYPQ7BTS3b {\n  font: var(--eds-theme-typography-form-label);\n}\n\n.QE13tIoV7Hk8OfNvCydH {\n  font: var(--eds-theme-typography-form-input);\n}\n\n.N8aORLqBrnUiUHLX6Yw4 {\n  font: var(--eds-theme-typography-link-lg);\n}\n\n.UpQ8wJuvvz_E_BsVbnrG {\n  font: var(--eds-theme-typography-link-md);\n}\n\n.TSTDDR_IUajHqY1yit2h {\n  font: var(--eds-theme-typography-link-sm);\n}\n\n.Kzz1wXAr3Jc4TR_4PlzT {\n  font: var(--eds-theme-typography-link-xs);\n}\n\n.EpFAAbofW_AetuJ4IdgA {\n  font: var(--eds-theme-typography-tab-lg);\n}\n\n.Yu3LYYpr0RDoUIfA9WNC {\n  font: var(--eds-theme-typography-tab-lg-active);\n}\n\n.NvDZ9x78RkBNibHu7npH {\n  font: var(--eds-theme-typography-tab-sm);\n}\n\n.LMoFklRS2ryXKvxZSm8C {\n  font: var(--eds-theme-typography-tab-sm-active);\n}\n\n.wcOJUI1S98rpB3s76dBK {\n  font: var(--eds-theme-typography-tag);\n}\n',"",{version:3,sources:["webpack://./src/components/Text/Text.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;;;;EAKE;;AACF;EACE,6CAA6C;AAC/C;;AACA;EACE,kDAAkD;AACpD;;AACA;EACE,yDAAyD;AAC3D;;AACA;EACE,oDAAoD;AACtD;;AACA;EACE,6CAA6C;AAC/C;;AACA;EACE,kDAAkD;AACpD;;AACA;EACE,yDAAyD;AAC3D;;AACA;EACE,oDAAoD;AACtD;;AACA;EACE,6CAA6C;AAC/C;;AACA;EACE,kDAAkD;AACpD;;AACA;EACE,yDAAyD;AAC3D;;AACA;EACE,oDAAoD;AACtD;;AACA;EACE,uDAAuD;AACzD;;AACA;EACE,4DAA4D;AAC9D;;AACA;EACE,uDAAuD;AACzD;;AACA;EACE,4DAA4D;AAC9D;;AACA;EACE,uDAAuD;AACzD;;AACA;EACE,4DAA4D;AAC9D;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,iDAAiD;AACnD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,iDAAiD;AACnD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,4CAA4C;AAC9C;;AACA;EACE,iDAAiD;AACnD;;AACA;EACE,4CAA4C;AAC9C;;AACA;EACE,iDAAiD;AACnD;;AACA;EACE,4CAA4C;AAC9C;;AACA;EACE,iDAAiD;AACnD;;AACA;EACE,2GAA2G;EAC3G,0CAA0C;EAC1C,yBAAyB;AAC3B;;AACA;EACE,6CAA6C;EAC7C,yBAAyB;AAC3B;;AACA;EACE,6CAA6C;EAC7C,yBAAyB;AAC3B;;AACA;EACE,6CAA6C;EAC7C,yBAAyB;AAC3B;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,4CAA4C;AAC9C;;AACA;EACE,2CAA2C;AAC7C;;AACA;EACE,2CAA2C;AAC7C;;AACA;EACE,8CAA8C;AAChD;;AACA;EACE,iDAAiD;AACnD;;AACA;EACE,4CAA4C;AAC9C;;AACA;EACE,4CAA4C;AAC9C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,wCAAwC;AAC1C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,wCAAwC;AAC1C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,qCAAqC;AACvC",sourcesContent:['/*------------------------------------*\\\n    # TEXT\n\\*------------------------------------*/\n\n/**\n * Map the component preset names to the defined typography tokens\n *\n * TODO: This should always match the generated tokens so find a\n * way to generate this.\n */\n.text--headline-lg {\n  font: var(--eds-theme-typography-headline-lg);\n}\n.text--headline-lg-bold {\n  font: var(--eds-theme-typography-headline-lg-bold);\n}\n.text--headline-lg-bold-mobile {\n  font: var(--eds-theme-typography-headline-lg-bold-mobile);\n}\n.text--headline-lg-mobile {\n  font: var(--eds-theme-typography-headline-lg-mobile);\n}\n.text--headline-md {\n  font: var(--eds-theme-typography-headline-md);\n}\n.text--headline-md-bold {\n  font: var(--eds-theme-typography-headline-md-bold);\n}\n.text--headline-md-bold-mobile {\n  font: var(--eds-theme-typography-headline-md-bold-mobile);\n}\n.text--headline-md-mobile {\n  font: var(--eds-theme-typography-headline-md-mobile);\n}\n.text--headline-sm {\n  font: var(--eds-theme-typography-headline-sm);\n}\n.text--headline-sm-bold {\n  font: var(--eds-theme-typography-headline-sm-bold);\n}\n.text--headline-sm-bold-mobile {\n  font: var(--eds-theme-typography-headline-sm-bold-mobile);\n}\n.text--headline-sm-mobile {\n  font: var(--eds-theme-typography-headline-sm-mobile);\n}\n.text--headline-secondary-lg {\n  font: var(--eds-theme-typography-headline-secondary-lg);\n}\n.text--headline-secondary-lg-bold {\n  font: var(--eds-theme-typography-headline-secondary-lg-bold);\n}\n.text--headline-secondary-md {\n  font: var(--eds-theme-typography-headline-secondary-md);\n}\n.text--headline-secondary-md-bold {\n  font: var(--eds-theme-typography-headline-secondary-md-bold);\n}\n.text--headline-secondary-sm {\n  font: var(--eds-theme-typography-headline-secondary-sm);\n}\n.text--headline-secondary-sm-bold {\n  font: var(--eds-theme-typography-headline-secondary-sm-bold);\n}\n.text--title-lg {\n  font: var(--eds-theme-typography-title-lg);\n}\n.text--title-lg-bold {\n  font: var(--eds-theme-typography-title-lg-bold);\n}\n.text--title-md {\n  font: var(--eds-theme-typography-title-md);\n}\n.text--title-md-bold {\n  font: var(--eds-theme-typography-title-md-bold);\n}\n.text--title-sm {\n  font: var(--eds-theme-typography-title-sm);\n}\n.text--title-sm-bold {\n  font: var(--eds-theme-typography-title-sm-bold);\n}\n.text--title-xs {\n  font: var(--eds-theme-typography-title-xs);\n}\n.text--title-xs-bold {\n  font: var(--eds-theme-typography-title-xs-bold);\n}\n.text--label-lg-subtle {\n  font: var(--eds-theme-typography-label-lg-subtle);\n}\n.text--label-md {\n  font: var(--eds-theme-typography-label-md);\n}\n.text--label-md-subtle {\n  font: var(--eds-theme-typography-label-md-subtle);\n}\n.text--label-sm {\n  font: var(--eds-theme-typography-label-sm);\n}\n.text--body-xl {\n  font: var(--eds-theme-typography-body-xl);\n}\n.text--body-lg {\n  font: var(--eds-theme-typography-body-lg);\n}\n.text--body-md {\n  font: var(--eds-theme-typography-body-md);\n}\n.text--body-sm {\n  font: var(--eds-theme-typography-body-sm);\n}\n.text--body-xs {\n  font: var(--eds-theme-typography-body-xs);\n}\n.text--caption-lg {\n  font: var(--eds-theme-typography-caption-lg);\n}\n.text--caption-lg-bold {\n  font: var(--eds-theme-typography-caption-lg-bold);\n}\n.text--caption-md {\n  font: var(--eds-theme-typography-caption-md);\n}\n.text--caption-md-bold {\n  font: var(--eds-theme-typography-caption-md-bold);\n}\n.text--caption-sm {\n  font: var(--eds-theme-typography-caption-sm);\n}\n.text--caption-sm-bold {\n  font: var(--eds-theme-typography-caption-sm-bold);\n}\n.text--overline {\n  /* @deprecated This should not be used in code or design. It will be removed in a future version of EDS." */\n  font: var(--eds-theme-typography-overline);\n  text-transform: uppercase;\n}\n.text--overline-lg {\n  font: var(--eds-theme-typography-overline-lg);\n  text-transform: uppercase;\n}\n.text--overline-md {\n  font: var(--eds-theme-typography-overline-md);\n  text-transform: uppercase;\n}\n.text--overline-sm {\n  font: var(--eds-theme-typography-overline-sm);\n  text-transform: uppercase;\n}\n.text--callout {\n  font: var(--eds-theme-typography-callout);\n}\n.text--breadcrumb {\n  font: var(--eds-theme-typography-breadcrumb);\n}\n.text--button-lg {\n  font: var(--eds-theme-typography-button-lg);\n}\n.text--button-md {\n  font: var(--eds-theme-typography-button-md);\n}\n.text--button-label {\n  font: var(--eds-theme-typography-button-label);\n}\n.text--button-label-sm {\n  font: var(--eds-theme-typography-button-label-sm);\n}\n.text--form-label {\n  font: var(--eds-theme-typography-form-label);\n}\n.text--form-input {\n  font: var(--eds-theme-typography-form-input);\n}\n.text--link-lg {\n  font: var(--eds-theme-typography-link-lg);\n}\n.text--link-md {\n  font: var(--eds-theme-typography-link-md);\n}\n.text--link-sm {\n  font: var(--eds-theme-typography-link-sm);\n}\n.text--link-xs {\n  font: var(--eds-theme-typography-link-xs);\n}\n.text--tab-lg {\n  font: var(--eds-theme-typography-tab-lg);\n}\n.text--tab-lg-active {\n  font: var(--eds-theme-typography-tab-lg-active);\n}\n.text--tab-sm {\n  font: var(--eds-theme-typography-tab-sm);\n}\n.text--tab-sm-active {\n  font: var(--eds-theme-typography-tab-sm-active);\n}\n.text--tag {\n  font: var(--eds-theme-typography-tag);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"text--headline-lg":"DhmlsIfNxJUkqX9MqosQ","text--headline-lg-bold":"DvKxDVyR1A2VKlXEKmZK","text--headline-lg-bold-mobile":"f8dgrLUYrPW85oxNpy3W","text--headline-lg-mobile":"UhA9q2umDfAKFA9YiUmZ","text--headline-md":"vHm8cFKh7_X8fybm68hc","text--headline-md-bold":"Y1H5GjOlLS6pF5H3c_Fy","text--headline-md-bold-mobile":"yfwmw7Fkz7CByTZ907Gp","text--headline-md-mobile":"HxKS3AonNZBy8lJRDhWM","text--headline-sm":"W8wLnVAfkibdIwvqpoXo","text--headline-sm-bold":"MPQJmXhe2QlSbQBahdIv","text--headline-sm-bold-mobile":"R7SQxRWr3jt33P4dHBBC","text--headline-sm-mobile":"SyIDnkLUqt2Gvl4pGEwt","text--headline-secondary-lg":"s_yAx32eU9Ig_UWGjsKt","text--headline-secondary-lg-bold":"iFaUcBpvOryf3M9Ph6Wh","text--headline-secondary-md":"CMlsSkEkVI0Zfi00Xeiu","text--headline-secondary-md-bold":"GoZhyVxrMpThO74T7IL8","text--headline-secondary-sm":"dqWY6U3rZ_zBr0qH0KCv","text--headline-secondary-sm-bold":"DZ_tOjabinx7fZeMz8kQ","text--title-lg":"BLA83uUMyW_gctYumlPv","text--title-lg-bold":"_55_zYxH5bSRFbH6apZz","text--title-md":"OPv4iVIxYF9Z3RNvKyLn","text--title-md-bold":"ctjW6VOnBhA2R4G5FEyT","text--title-sm":"sC4fs_rzr0R8g_sh2EMo","text--title-sm-bold":"T96ZEo0J2q0jQmDvUiXh","text--title-xs":"AvqKwN_t1Lza8rEWC6PQ","text--title-xs-bold":"nfQ2DbrQTdskI09UmhbL","text--label-lg-subtle":"iOWhbh7IiQSZBGbyVkCq","text--label-md":"hP8AHcHqHBmUMIACT63P","text--label-md-subtle":"r8i6e8bAE9l3EAAUq48f","text--label-sm":"HxjWKgSnIkVu67eLVVCI","text--body-xl":"nwgnB5s2X4CE1DHNWSfi","text--body-lg":"IbUEkvD2irvJoo_Tqsms","text--body-md":"YOZr2LgtpArXj722lfGg","text--body-sm":"yiOQ68CEgeALxMgTSQq9","text--body-xs":"aFyy5eIfXKI1cF3rBfpB","text--caption-lg":"QzTfwZpw1gbSKUtlHz7V","text--caption-lg-bold":"mvFSbxlp5PgzR1fXrP2J","text--caption-md":"jUiEPr3xJs40ZKp5iLmG","text--caption-md-bold":"Ld8VO1OJ0F7zoIC77AsJ","text--caption-sm":"p25F_rIYqwccZGBOhtDt","text--caption-sm-bold":"YjgI7xL7RjJ26DEqXp8w","text--overline":"ntysVX8lE1UjxXEHSRvy","text--overline-lg":"vLMATCpynuRIPfzO_wat","text--overline-md":"m7yyF5ij8bm8m0ro7C2l","text--overline-sm":"T_7a5jxvuYa4JHeoABr_","text--callout":"Sxwj8Nga21XT2r9mbH4h","text--breadcrumb":"aTSULmEReR4iXuCCID2T","text--button-lg":"r4R3qIu5kgXzaIASrYUP","text--button-md":"ektdRZSxYE5xIYpnyyKo","text--button-label":"K2b1OYUsPJMkpVUU6pdv","text--button-label-sm":"qlHpX8TPPwz2Q4ievKL7","text--form-label":"ugHAU5EnFcBYPQ7BTS3b","text--form-input":"QE13tIoV7Hk8OfNvCydH","text--link-lg":"N8aORLqBrnUiUHLX6Yw4","text--link-md":"UpQ8wJuvvz_E_BsVbnrG","text--link-sm":"TSTDDR_IUajHqY1yit2h","text--link-xs":"Kzz1wXAr3Jc4TR_4PlzT","text--tab-lg":"EpFAAbofW_AetuJ4IdgA","text--tab-lg-active":"Yu3LYYpr0RDoUIfA9WNC","text--tab-sm":"NvDZ9x78RkBNibHu7npH","text--tab-sm-active":"LMoFklRS2ryXKvxZSm8C","text--tag":"wcOJUI1S98rpB3s76dBK"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);