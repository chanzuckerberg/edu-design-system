"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[7220],{"./src/components/NumberIcon/NumberIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>NumberIcon});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Text=__webpack_require__("./src/components/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),NumberIcon_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/NumberIcon/NumberIcon.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(NumberIcon_module.Z,options);const NumberIcon_NumberIcon_module=NumberIcon_module.Z&&NumberIcon_module.Z.locals?NumberIcon_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const NumberIcon=_ref=>{let{className,isInteractive=!1,number,status="default",size="lg",...other}=_ref;const componentClassName=(0,clsx.Z)(className,NumberIcon_NumberIcon_module["number-icon"],isInteractive&&NumberIcon_NumberIcon_module["number-icon--is-interactive"],size&&NumberIcon_NumberIcon_module[`number-icon--size-${size}`],status&&NumberIcon_NumberIcon_module[`number-icon--status-${status}`]);return react.createElement(Text.x,_extends({as:"span",className:componentClassName,preset:"md"===size?"label-md-subtle":"label-lg-subtle",role:"img",tabIndex:isInteractive?0:-1},other),number)};NumberIcon.displayName="NumberIcon";try{NumberIcon.displayName="NumberIcon",NumberIcon.__docgenInfo={description:'`import {NumberIcon} from "@chanzuckerberg/eds";`\n\nTreats a numeral as an icon by wrapping it in a container and adding color/spacing.',displayName:"NumberIcon",props:{"aria-label":{defaultValue:null,description:"(Required) Screen-reader text for the number icon.",name:"aria-label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},isInteractive:{defaultValue:{value:"false"},description:"Whether `NumberIcon` can be focused on, clicked, etc.",name:"isInteractive",required:!1,type:{name:"boolean"}},number:{defaultValue:null,description:"Number to be shown as the icon. Maximum of two digits.",name:"number",required:!1,type:{name:"number"}},size:{defaultValue:{value:"lg"},description:'The size of the icon.\n\n**Default is `"lg"`**.',name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}},status:{defaultValue:{value:"default"},description:"Indication of the status of the referenced item",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"completed"'},{value:'"incomplete"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NumberIcon/NumberIcon.tsx#NumberIcon"]={docgenInfo:NumberIcon.__docgenInfo,name:"NumberIcon",path:"src/components/NumberIcon/NumberIcon.tsx#NumberIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Text_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/Text/Text.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Text_module.Z,options);const Text_Text_module=Text_module.Z&&Text_module.Z.locals?Text_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Text=(0,react.forwardRef)(((_ref,ref)=>{let{as:TagName="p",children,className,preset="body-md",...other}=_ref;const componentClassName=(0,clsx.Z)(Text_Text_module.text,preset&&Text_Text_module[`text--${preset}`],className);return react.createElement(TagName,_extends({className:componentClassName,ref},other),children)}));Text.displayName="Text";try{Text.displayName="Text",Text.__docgenInfo={description:'`import {Text} from "@chanzuckerberg/eds";`\n\nThe Text component decorates `<p>` and `<span>` with typographic variants. Use\ntypography presets to style the text via `preset`.\n\nFor headers, please use `Heading`.',displayName:"Text",props:{as:{defaultValue:null,description:'Controls which component to use when rendering copy: `p` or `span`.\n\n**Default is `"p"`**.',name:"as",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"span"'},{value:'"div"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},preset:{defaultValue:{value:"body-md"},description:"Prop to set the desired typography value used in design. Acceptable values\nmatch those used across the design system.",name:"preset",required:!1,type:{name:"enum",value:[{value:'"headline-lg"'},{value:'"headline-lg-bold"'},{value:'"headline-lg-bold-mobile"'},{value:'"headline-lg-mobile"'},{value:'"headline-md"'},{value:'"headline-md-bold"'},{value:'"headline-md-bold-mobile"'},{value:'"headline-md-mobile"'},{value:'"headline-sm"'},{value:'"headline-sm-bold"'},{value:'"headline-sm-bold-mobile"'},{value:'"headline-sm-mobile"'},{value:'"headline-secondary-lg"'},{value:'"headline-secondary-lg-bold"'},{value:'"headline-secondary-md"'},{value:'"headline-secondary-md-bold"'},{value:'"headline-secondary-sm"'},{value:'"headline-secondary-sm-bold"'},{value:'"title-lg"'},{value:'"title-lg-bold"'},{value:'"title-md"'},{value:'"title-md-bold"'},{value:'"title-sm"'},{value:'"title-sm-bold"'},{value:'"title-xs"'},{value:'"title-xs-bold"'},{value:'"label-lg-subtle"'},{value:'"label-md"'},{value:'"label-md-subtle"'},{value:'"label-sm"'},{value:'"body-xl"'},{value:'"body-lg"'},{value:'"body-md"'},{value:'"body-sm"'},{value:'"body-xs"'},{value:'"caption-lg"'},{value:'"caption-lg-bold"'},{value:'"caption-md"'},{value:'"caption-md-bold"'},{value:'"caption-sm"'},{value:'"caption-sm-bold"'},{value:'"overline"'},{value:'"overline-lg"'},{value:'"overline-md"'},{value:'"overline-sm"'},{value:'"callout"'},{value:'"breadcrumb"'},{value:'"button-lg"'},{value:'"button-md"'},{value:'"button-label"'},{value:'"button-label-sm"'},{value:'"form-label"'},{value:'"form-input"'},{value:'"link-lg"'},{value:'"link-md"'},{value:'"link-sm"'},{value:'"link-xs"'},{value:'"tab-lg"'},{value:'"tab-lg-active"'},{value:'"tab-sm"'},{value:'"tab-sm-active"'},{value:'"tag"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/NumberIcon/NumberIcon.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Legacy Mixins\n * TODO: remove once not in use\n */\n/* TODO(next-major): remove b/c this is no longer in use */\n/* TODO(next-major): remove b/c this is no longer in use */\n/* TODO(next-major): remove this after the one usage is removed */\n/**\n * Component 2.0 Mixins\n */\n/*------------------------------------*\\\n    # NUMBER ICON\n\\*------------------------------------*/\n/**\n * Number Icon displays a number enclosed in a circle.\n * \n * Centers the number text in the circle.\n */\n.dPzphbCRvT26oiO5rzB2 {\n  /* Line height set to 1 here since this should only ever be on 1 line and it evens out padding in circle. */\n  line-height: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* The circle part of the icon, made with borders. */\n  border: calc(var(--eds-border-width-sm) * 1px) solid;\n  border-color: inherit;\n  border-radius: calc(var(--eds-border-radius-full) * 1px);\n}\n.dPzphbCRvT26oiO5rzB2.s9NE3DzXr_kOZ8y54Ux9 {\n    cursor: pointer;\n  }\n/**\n * Size Variants.\n */\n.ApRCDQ7nzZJktKTh6NPn {\n  height: calc(var(--eds-size-3) / 16 * 1rem);\n  width: calc(var(--eds-size-3) / 16 * 1rem);\n  min-width: calc(var(--eds-size-3) / 16 * 1rem);\n}\n.V4cZLlCfwyMKrmYLfonT {\n  height: calc(var(--eds-size-4) / 16 * 1rem);\n  width: calc(var(--eds-size-4) / 16 * 1rem);\n  min-width: calc(var(--eds-size-4) / 16 * 1rem);\n}\n/* Colors & Theme */\n/**\n * Interactive States\n */\n.qlOpJeg6ETqWuGKIgwWO {\n  color: var(--eds-theme-color-text-utility-interactive-primary);\n  border-color: var(--eds-theme-color-border-utility-interactive);\n  background-color: var(--eds-theme-color-background-utility-interactive-no-emphasis);\n}\n.qlOpJeg6ETqWuGKIgwWO.s9NE3DzXr_kOZ8y54Ux9:hover {\n      border-color: var(--eds-theme-color-border-utility-interactive-hover);\n      background-color: var(--eds-theme-color-background-utility-interactive-no-emphasis-hover);\n    }\n.qlOpJeg6ETqWuGKIgwWO.s9NE3DzXr_kOZ8y54Ux9:active {\n      border-color: var(--eds-theme-color-border-utility-interactive-active);\n      background-color: var(--eds-theme-color-background-utility-interactive-no-emphasis-active);\n    }\n.JVEXFWboU5cVFWOeQWhn {\n  color: var(--eds-theme-color-text-utility-inverse);\n  border-color: var(--eds-theme-color-background-utility-favorable-high-emphasis);\n  background-color: var(--eds-theme-color-background-utility-favorable-high-emphasis);\n}\n.JVEXFWboU5cVFWOeQWhn.s9NE3DzXr_kOZ8y54Ux9:hover {\n      border-color: var(--eds-theme-color-background-utility-favorable-high-emphasis-hover);\n      background-color: var(--eds-theme-color-background-utility-favorable-high-emphasis-hover);\n    }\n.JVEXFWboU5cVFWOeQWhn.s9NE3DzXr_kOZ8y54Ux9:active {\n      border-color: var(--eds-theme-color-background-utility-favorable-high-emphasis-active);\n      background-color: var(--eds-theme-color-background-utility-favorable-high-emphasis-active);\n    }\n.xqTvBNLb0QHwnkIM4qZ_ {\n  color: var(--eds-theme-color-text-utility-default-secondary);\n  border-color: var(--eds-theme-color-border-utility-default-medium-emphasis);\n\n  border-style: dashed;\n  pointer-events: none;\n}","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/NumberIcon/NumberIcon.module.css"],names:[],mappings:"AAAA;;;EAGE;AAOF,0DAA0D;AAM1D,0DAA0D;AAK1D,iEAAiE;AAWjE;;EAEE;ACjCF;;uCAEuC;AAEvC;;;;EAIE;AACF;EACE,2GAA2G;EAC3G,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,oDAAoD;EACpD,oDAAoD;EACpD,qBAAqB;EACrB,wDAAwD;AAK1D;AAHE;IACE,eAAe;EACjB;AAGF;;EAEE;AACF;EACE,2CAA2C;EAC3C,0CAA0C;EAC1C,8CAA8C;AAChD;AAEA;EACE,2CAA2C;EAC3C,0CAA0C;EAC1C,8CAA8C;AAChD;AAEA,mBAAmB;AAEnB;;EAEE;AACF;EACE,8DAA8D;EAC9D,+DAA+D;EAC/D,mFAAmF;AAarF;AAVI;MACE,qEAAqE;MACrE,yFAAyF;IAC3F;AAEA;MACE,sEAAsE;MACtE,0FAA0F;IAC5F;AAIJ;EACE,kDAAkD;EAClD,+EAA+E;EAC/E,mFAAmF;AAarF;AAVI;MACE,qFAAqF;MACrF,yFAAyF;IAC3F;AAEA;MACE,sFAAsF;MACtF,0FAA0F;IAC5F;AAIJ;EACE,4DAA4D;EAC5D,2EAA2E;;EAE3E,oBAAoB;EACpB,oBAAoB;AACtB",sourcesContent:["/**\n * Legacy Mixins\n * TODO: remove once not in use\n */\n@define-mixin focus {\n  outline: calc(var(--eds-theme-box-focus-ring-outline-width) * 1px) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: calc(var(--eds-theme-box-focus-ring-outline-offset) * 1px);\n}\n\n/* TODO(next-major): remove b/c this is no longer in use */\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n/* TODO(next-major): remove b/c this is no longer in use */\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n/* TODO(next-major): remove this after the one usage is removed */\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n/**\n * Component 2.0 Mixins\n */\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n\n  border: calc(var(--eds-border-width-sm) * 1px) solid;\n  border-radius: calc(var(--eds-theme-border-radius-objects-sm) * 1px);\n\n  outline: none;\n  padding: 0.5rem;\n  margin: 0;\n\n  transition: box-shadow calc(var(--eds-anim-fade-quick) * 1s) var(--eds-anim-ease),\n  border-color calc(var(--eds-anim-fade-quick) * 1s) var(--eds-anim-ease);\n  \n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n  \n  color: var(--eds-theme-color-text-utility-default-primary);\n  border-color: var(--eds-theme-color-border-utility-default-medium-emphasis);\n  background-color: var(--eds-theme-color-background-input);\n  \n  &:hover {\n    border-color: var(--eds-theme-color-border-utility-default-medium-emphasis-hover);\n  }\n\n  &:focus {\n    border-color: var(--eds-theme-color-border-utility-focus);\n    outline: calc(var(--eds-border-width-sm) * 1px) solid var(--eds-theme-color-border-utility-focus);\n  }\n\n  &:read-only:not(:disabled) {\n    border-color: transparent;\n    outline: none;\n    padding-left: 0;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    border-color: var(--eds-theme-color-border-utility-critical);\n\n    &:hover {\n      border-color: var(--eds-theme-color-border-utility-critical-hover);\n    }\n\n    &:focus {\n      border-color: var(--eds-theme-color-border-utility-critical);\n      outline: calc(var(--eds-border-width-sm) * 1px) solid var(--eds-theme-color-border-utility-critical);\n    }\n  }\n\n  &.warning {\n    border-color: var(--eds-theme-color-border-utility-warning);\n\n    &:hover {\n      border-color: var(--eds-theme-color-border-utility-warning-hover);\n    }\n\n    &:focus {\n      border-color: var(--eds-theme-color-border-utility-warning);\n      outline: calc(var(--eds-border-width-sm) * 1px) solid var(--eds-theme-color-border-utility-warning);\n    }\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:disabled::placeholder {\n    cursor: not-allowed;\n\n    color: var(--eds-theme-color-text-utility-disabled-primary);\n    border-color: var(--eds-theme-color-border-utility-disabled);\n    background-color: var(--eds-theme-color-background-utility-disabled-low-emphasis);\n  }\n\n  &::placeholder {\n    color: var(--eds-theme-color-text-utility-default-secondary);\n  }\n}\n","@import '../../design-tokens/mixins.css';\n/*------------------------------------*\\\n    # NUMBER ICON\n\\*------------------------------------*/\n\n/**\n * Number Icon displays a number enclosed in a circle.\n * \n * Centers the number text in the circle.\n */\n.number-icon {\n  /* Line height set to 1 here since this should only ever be on 1 line and it evens out padding in circle. */\n  line-height: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* The circle part of the icon, made with borders. */\n  border: calc(var(--eds-border-width-sm) * 1px) solid;\n  border-color: inherit;\n  border-radius: calc(var(--eds-border-radius-full) * 1px);\n\n  &.number-icon--is-interactive {\n    cursor: pointer;\n  }\n}\n\n/**\n * Size Variants.\n */\n.number-icon--size-md {\n  height: calc(var(--eds-size-3) / 16 * 1rem);\n  width: calc(var(--eds-size-3) / 16 * 1rem);\n  min-width: calc(var(--eds-size-3) / 16 * 1rem);\n}\n\n.number-icon--size-lg {\n  height: calc(var(--eds-size-4) / 16 * 1rem);\n  width: calc(var(--eds-size-4) / 16 * 1rem);\n  min-width: calc(var(--eds-size-4) / 16 * 1rem);\n}\n\n/* Colors & Theme */\n\n/**\n * Interactive States\n */\n.number-icon--status-default {\n  color: var(--eds-theme-color-text-utility-interactive-primary);\n  border-color: var(--eds-theme-color-border-utility-interactive);\n  background-color: var(--eds-theme-color-background-utility-interactive-no-emphasis);\n\n  &.number-icon--is-interactive {\n    &:hover {\n      border-color: var(--eds-theme-color-border-utility-interactive-hover);\n      background-color: var(--eds-theme-color-background-utility-interactive-no-emphasis-hover);\n    }\n\n    &:active {\n      border-color: var(--eds-theme-color-border-utility-interactive-active);\n      background-color: var(--eds-theme-color-background-utility-interactive-no-emphasis-active);\n    }\n  }\n}\n\n.number-icon--status-completed {\n  color: var(--eds-theme-color-text-utility-inverse);\n  border-color: var(--eds-theme-color-background-utility-favorable-high-emphasis);\n  background-color: var(--eds-theme-color-background-utility-favorable-high-emphasis);\n\n  &.number-icon--is-interactive {\n    &:hover {\n      border-color: var(--eds-theme-color-background-utility-favorable-high-emphasis-hover);\n      background-color: var(--eds-theme-color-background-utility-favorable-high-emphasis-hover);\n    }\n\n    &:active {\n      border-color: var(--eds-theme-color-background-utility-favorable-high-emphasis-active);\n      background-color: var(--eds-theme-color-background-utility-favorable-high-emphasis-active);\n    }\n  }\n}\n\n.number-icon--status-incomplete {\n  color: var(--eds-theme-color-text-utility-default-secondary);\n  border-color: var(--eds-theme-color-border-utility-default-medium-emphasis);\n\n  border-style: dashed;\n  pointer-events: none;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"number-icon":"dPzphbCRvT26oiO5rzB2","number-icon--is-interactive":"s9NE3DzXr_kOZ8y54Ux9","number-icon--size-md":"ApRCDQ7nzZJktKTh6NPn","number-icon--size-lg":"V4cZLlCfwyMKrmYLfonT","number-icon--status-default":"qlOpJeg6ETqWuGKIgwWO","number-icon--status-completed":"JVEXFWboU5cVFWOeQWhn","number-icon--status-incomplete":"xqTvBNLb0QHwnkIM4qZ_"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./src/components/Text/Text.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'/*------------------------------------*\\\n    # TEXT\n\\*------------------------------------*/\n\n/**\n * Map the component preset names to the defined typography tokens\n *\n * TODO: This should always match the generated tokens so find a\n * way to generate this.\n */\n\n.DhmlsIfNxJUkqX9MqosQ {\n  font: var(--eds-theme-typography-headline-lg);\n}\n\n.DvKxDVyR1A2VKlXEKmZK {\n  font: var(--eds-theme-typography-headline-lg-bold);\n}\n\n.f8dgrLUYrPW85oxNpy3W {\n  font: var(--eds-theme-typography-headline-lg-bold-mobile);\n}\n\n.UhA9q2umDfAKFA9YiUmZ {\n  font: var(--eds-theme-typography-headline-lg-mobile);\n}\n\n.vHm8cFKh7_X8fybm68hc {\n  font: var(--eds-theme-typography-headline-md);\n}\n\n.Y1H5GjOlLS6pF5H3c_Fy {\n  font: var(--eds-theme-typography-headline-md-bold);\n}\n\n.yfwmw7Fkz7CByTZ907Gp {\n  font: var(--eds-theme-typography-headline-md-bold-mobile);\n}\n\n.HxKS3AonNZBy8lJRDhWM {\n  font: var(--eds-theme-typography-headline-md-mobile);\n}\n\n.W8wLnVAfkibdIwvqpoXo {\n  font: var(--eds-theme-typography-headline-sm);\n}\n\n.MPQJmXhe2QlSbQBahdIv {\n  font: var(--eds-theme-typography-headline-sm-bold);\n}\n\n.R7SQxRWr3jt33P4dHBBC {\n  font: var(--eds-theme-typography-headline-sm-bold-mobile);\n}\n\n.SyIDnkLUqt2Gvl4pGEwt {\n  font: var(--eds-theme-typography-headline-sm-mobile);\n}\n\n.s_yAx32eU9Ig_UWGjsKt {\n  font: var(--eds-theme-typography-headline-secondary-lg);\n}\n\n.iFaUcBpvOryf3M9Ph6Wh {\n  font: var(--eds-theme-typography-headline-secondary-lg-bold);\n}\n\n.CMlsSkEkVI0Zfi00Xeiu {\n  font: var(--eds-theme-typography-headline-secondary-md);\n}\n\n.GoZhyVxrMpThO74T7IL8 {\n  font: var(--eds-theme-typography-headline-secondary-md-bold);\n}\n\n.dqWY6U3rZ_zBr0qH0KCv {\n  font: var(--eds-theme-typography-headline-secondary-sm);\n}\n\n.DZ_tOjabinx7fZeMz8kQ {\n  font: var(--eds-theme-typography-headline-secondary-sm-bold);\n}\n\n.BLA83uUMyW_gctYumlPv {\n  font: var(--eds-theme-typography-title-lg);\n}\n\n._55_zYxH5bSRFbH6apZz {\n  font: var(--eds-theme-typography-title-lg-bold);\n}\n\n.OPv4iVIxYF9Z3RNvKyLn {\n  font: var(--eds-theme-typography-title-md);\n}\n\n.ctjW6VOnBhA2R4G5FEyT {\n  font: var(--eds-theme-typography-title-md-bold);\n}\n\n.sC4fs_rzr0R8g_sh2EMo {\n  font: var(--eds-theme-typography-title-sm);\n}\n\n.T96ZEo0J2q0jQmDvUiXh {\n  font: var(--eds-theme-typography-title-sm-bold);\n}\n\n.AvqKwN_t1Lza8rEWC6PQ {\n  font: var(--eds-theme-typography-title-xs);\n}\n\n.nfQ2DbrQTdskI09UmhbL {\n  font: var(--eds-theme-typography-title-xs-bold);\n}\n\n.iOWhbh7IiQSZBGbyVkCq {\n  font: var(--eds-theme-typography-label-lg-subtle);\n}\n\n.hP8AHcHqHBmUMIACT63P {\n  font: var(--eds-theme-typography-label-md);\n}\n\n.r8i6e8bAE9l3EAAUq48f {\n  font: var(--eds-theme-typography-label-md-subtle);\n}\n\n.HxjWKgSnIkVu67eLVVCI {\n  font: var(--eds-theme-typography-label-sm);\n}\n\n.nwgnB5s2X4CE1DHNWSfi {\n  font: var(--eds-theme-typography-body-xl);\n}\n\n.IbUEkvD2irvJoo_Tqsms {\n  font: var(--eds-theme-typography-body-lg);\n}\n\n.YOZr2LgtpArXj722lfGg {\n  font: var(--eds-theme-typography-body-md);\n}\n\n.yiOQ68CEgeALxMgTSQq9 {\n  font: var(--eds-theme-typography-body-sm);\n}\n\n.aFyy5eIfXKI1cF3rBfpB {\n  font: var(--eds-theme-typography-body-xs);\n}\n\n.QzTfwZpw1gbSKUtlHz7V {\n  font: var(--eds-theme-typography-caption-lg);\n}\n\n.mvFSbxlp5PgzR1fXrP2J {\n  font: var(--eds-theme-typography-caption-lg-bold);\n}\n\n.jUiEPr3xJs40ZKp5iLmG {\n  font: var(--eds-theme-typography-caption-md);\n}\n\n.Ld8VO1OJ0F7zoIC77AsJ {\n  font: var(--eds-theme-typography-caption-md-bold);\n}\n\n.p25F_rIYqwccZGBOhtDt {\n  font: var(--eds-theme-typography-caption-sm);\n}\n\n.YjgI7xL7RjJ26DEqXp8w {\n  font: var(--eds-theme-typography-caption-sm-bold);\n}\n\n.ntysVX8lE1UjxXEHSRvy {\n  /* @deprecated TODO(next-major): This should not be used in code or design. It will be removed in a future version of EDS." */\n    /* Remove the constant in the text component for this as well */\n  font: var(--eds-theme-typography-overline);\n  text-transform: uppercase;\n}\n\n.vLMATCpynuRIPfzO_wat {\n  font: var(--eds-theme-typography-overline-lg);\n  text-transform: uppercase;\n}\n\n.m7yyF5ij8bm8m0ro7C2l {\n  font: var(--eds-theme-typography-overline-md);\n  text-transform: uppercase;\n}\n\n.T_7a5jxvuYa4JHeoABr_ {\n  font: var(--eds-theme-typography-overline-sm);\n  text-transform: uppercase;\n}\n\n.Sxwj8Nga21XT2r9mbH4h {\n  font: var(--eds-theme-typography-callout);\n}\n\n.aTSULmEReR4iXuCCID2T {\n  font: var(--eds-theme-typography-breadcrumb);\n}\n\n.r4R3qIu5kgXzaIASrYUP {\n  font: var(--eds-theme-typography-button-lg);\n}\n\n.ektdRZSxYE5xIYpnyyKo {\n  font: var(--eds-theme-typography-button-md);\n}\n\n.K2b1OYUsPJMkpVUU6pdv {\n  font: var(--eds-theme-typography-button-label);\n}\n\n.qlHpX8TPPwz2Q4ievKL7 {\n  font: var(--eds-theme-typography-button-label-sm);\n}\n\n.ugHAU5EnFcBYPQ7BTS3b {\n  font: var(--eds-theme-typography-form-label);\n}\n\n.QE13tIoV7Hk8OfNvCydH {\n  font: var(--eds-theme-typography-form-input);\n}\n\n.N8aORLqBrnUiUHLX6Yw4 {\n  font: var(--eds-theme-typography-link-lg);\n}\n\n.UpQ8wJuvvz_E_BsVbnrG {\n  font: var(--eds-theme-typography-link-md);\n}\n\n.TSTDDR_IUajHqY1yit2h {\n  font: var(--eds-theme-typography-link-sm);\n}\n\n.Kzz1wXAr3Jc4TR_4PlzT {\n  font: var(--eds-theme-typography-link-xs);\n}\n\n.EpFAAbofW_AetuJ4IdgA {\n  font: var(--eds-theme-typography-tab-lg);\n}\n\n.Yu3LYYpr0RDoUIfA9WNC {\n  font: var(--eds-theme-typography-tab-lg-active);\n}\n\n.NvDZ9x78RkBNibHu7npH {\n  font: var(--eds-theme-typography-tab-sm);\n}\n\n.LMoFklRS2ryXKvxZSm8C {\n  font: var(--eds-theme-typography-tab-sm-active);\n}\n\n.wcOJUI1S98rpB3s76dBK {\n  font: var(--eds-theme-typography-tag);\n}\n',"",{version:3,sources:["webpack://./src/components/Text/Text.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;;;;EAKE;;AACF;EACE,6CAA6C;AAC/C;;AACA;EACE,kDAAkD;AACpD;;AACA;EACE,yDAAyD;AAC3D;;AACA;EACE,oDAAoD;AACtD;;AACA;EACE,6CAA6C;AAC/C;;AACA;EACE,kDAAkD;AACpD;;AACA;EACE,yDAAyD;AAC3D;;AACA;EACE,oDAAoD;AACtD;;AACA;EACE,6CAA6C;AAC/C;;AACA;EACE,kDAAkD;AACpD;;AACA;EACE,yDAAyD;AAC3D;;AACA;EACE,oDAAoD;AACtD;;AACA;EACE,uDAAuD;AACzD;;AACA;EACE,4DAA4D;AAC9D;;AACA;EACE,uDAAuD;AACzD;;AACA;EACE,4DAA4D;AAC9D;;AACA;EACE,uDAAuD;AACzD;;AACA;EACE,4DAA4D;AAC9D;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,iDAAiD;AACnD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,iDAAiD;AACnD;;AACA;EACE,0CAA0C;AAC5C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,4CAA4C;AAC9C;;AACA;EACE,iDAAiD;AACnD;;AACA;EACE,4CAA4C;AAC9C;;AACA;EACE,iDAAiD;AACnD;;AACA;EACE,4CAA4C;AAC9C;;AACA;EACE,iDAAiD;AACnD;;AACA;EACE,6HAA6H;IAC3H,+DAA+D;EACjE,0CAA0C;EAC1C,yBAAyB;AAC3B;;AACA;EACE,6CAA6C;EAC7C,yBAAyB;AAC3B;;AACA;EACE,6CAA6C;EAC7C,yBAAyB;AAC3B;;AACA;EACE,6CAA6C;EAC7C,yBAAyB;AAC3B;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,4CAA4C;AAC9C;;AACA;EACE,2CAA2C;AAC7C;;AACA;EACE,2CAA2C;AAC7C;;AACA;EACE,8CAA8C;AAChD;;AACA;EACE,iDAAiD;AACnD;;AACA;EACE,4CAA4C;AAC9C;;AACA;EACE,4CAA4C;AAC9C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,yCAAyC;AAC3C;;AACA;EACE,wCAAwC;AAC1C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,wCAAwC;AAC1C;;AACA;EACE,+CAA+C;AACjD;;AACA;EACE,qCAAqC;AACvC",sourcesContent:['/*------------------------------------*\\\n    # TEXT\n\\*------------------------------------*/\n\n/**\n * Map the component preset names to the defined typography tokens\n *\n * TODO: This should always match the generated tokens so find a\n * way to generate this.\n */\n.text--headline-lg {\n  font: var(--eds-theme-typography-headline-lg);\n}\n.text--headline-lg-bold {\n  font: var(--eds-theme-typography-headline-lg-bold);\n}\n.text--headline-lg-bold-mobile {\n  font: var(--eds-theme-typography-headline-lg-bold-mobile);\n}\n.text--headline-lg-mobile {\n  font: var(--eds-theme-typography-headline-lg-mobile);\n}\n.text--headline-md {\n  font: var(--eds-theme-typography-headline-md);\n}\n.text--headline-md-bold {\n  font: var(--eds-theme-typography-headline-md-bold);\n}\n.text--headline-md-bold-mobile {\n  font: var(--eds-theme-typography-headline-md-bold-mobile);\n}\n.text--headline-md-mobile {\n  font: var(--eds-theme-typography-headline-md-mobile);\n}\n.text--headline-sm {\n  font: var(--eds-theme-typography-headline-sm);\n}\n.text--headline-sm-bold {\n  font: var(--eds-theme-typography-headline-sm-bold);\n}\n.text--headline-sm-bold-mobile {\n  font: var(--eds-theme-typography-headline-sm-bold-mobile);\n}\n.text--headline-sm-mobile {\n  font: var(--eds-theme-typography-headline-sm-mobile);\n}\n.text--headline-secondary-lg {\n  font: var(--eds-theme-typography-headline-secondary-lg);\n}\n.text--headline-secondary-lg-bold {\n  font: var(--eds-theme-typography-headline-secondary-lg-bold);\n}\n.text--headline-secondary-md {\n  font: var(--eds-theme-typography-headline-secondary-md);\n}\n.text--headline-secondary-md-bold {\n  font: var(--eds-theme-typography-headline-secondary-md-bold);\n}\n.text--headline-secondary-sm {\n  font: var(--eds-theme-typography-headline-secondary-sm);\n}\n.text--headline-secondary-sm-bold {\n  font: var(--eds-theme-typography-headline-secondary-sm-bold);\n}\n.text--title-lg {\n  font: var(--eds-theme-typography-title-lg);\n}\n.text--title-lg-bold {\n  font: var(--eds-theme-typography-title-lg-bold);\n}\n.text--title-md {\n  font: var(--eds-theme-typography-title-md);\n}\n.text--title-md-bold {\n  font: var(--eds-theme-typography-title-md-bold);\n}\n.text--title-sm {\n  font: var(--eds-theme-typography-title-sm);\n}\n.text--title-sm-bold {\n  font: var(--eds-theme-typography-title-sm-bold);\n}\n.text--title-xs {\n  font: var(--eds-theme-typography-title-xs);\n}\n.text--title-xs-bold {\n  font: var(--eds-theme-typography-title-xs-bold);\n}\n.text--label-lg-subtle {\n  font: var(--eds-theme-typography-label-lg-subtle);\n}\n.text--label-md {\n  font: var(--eds-theme-typography-label-md);\n}\n.text--label-md-subtle {\n  font: var(--eds-theme-typography-label-md-subtle);\n}\n.text--label-sm {\n  font: var(--eds-theme-typography-label-sm);\n}\n.text--body-xl {\n  font: var(--eds-theme-typography-body-xl);\n}\n.text--body-lg {\n  font: var(--eds-theme-typography-body-lg);\n}\n.text--body-md {\n  font: var(--eds-theme-typography-body-md);\n}\n.text--body-sm {\n  font: var(--eds-theme-typography-body-sm);\n}\n.text--body-xs {\n  font: var(--eds-theme-typography-body-xs);\n}\n.text--caption-lg {\n  font: var(--eds-theme-typography-caption-lg);\n}\n.text--caption-lg-bold {\n  font: var(--eds-theme-typography-caption-lg-bold);\n}\n.text--caption-md {\n  font: var(--eds-theme-typography-caption-md);\n}\n.text--caption-md-bold {\n  font: var(--eds-theme-typography-caption-md-bold);\n}\n.text--caption-sm {\n  font: var(--eds-theme-typography-caption-sm);\n}\n.text--caption-sm-bold {\n  font: var(--eds-theme-typography-caption-sm-bold);\n}\n.text--overline {\n  /* @deprecated TODO(next-major): This should not be used in code or design. It will be removed in a future version of EDS." */\n    /* Remove the constant in the text component for this as well */\n  font: var(--eds-theme-typography-overline);\n  text-transform: uppercase;\n}\n.text--overline-lg {\n  font: var(--eds-theme-typography-overline-lg);\n  text-transform: uppercase;\n}\n.text--overline-md {\n  font: var(--eds-theme-typography-overline-md);\n  text-transform: uppercase;\n}\n.text--overline-sm {\n  font: var(--eds-theme-typography-overline-sm);\n  text-transform: uppercase;\n}\n.text--callout {\n  font: var(--eds-theme-typography-callout);\n}\n.text--breadcrumb {\n  font: var(--eds-theme-typography-breadcrumb);\n}\n.text--button-lg {\n  font: var(--eds-theme-typography-button-lg);\n}\n.text--button-md {\n  font: var(--eds-theme-typography-button-md);\n}\n.text--button-label {\n  font: var(--eds-theme-typography-button-label);\n}\n.text--button-label-sm {\n  font: var(--eds-theme-typography-button-label-sm);\n}\n.text--form-label {\n  font: var(--eds-theme-typography-form-label);\n}\n.text--form-input {\n  font: var(--eds-theme-typography-form-input);\n}\n.text--link-lg {\n  font: var(--eds-theme-typography-link-lg);\n}\n.text--link-md {\n  font: var(--eds-theme-typography-link-md);\n}\n.text--link-sm {\n  font: var(--eds-theme-typography-link-sm);\n}\n.text--link-xs {\n  font: var(--eds-theme-typography-link-xs);\n}\n.text--tab-lg {\n  font: var(--eds-theme-typography-tab-lg);\n}\n.text--tab-lg-active {\n  font: var(--eds-theme-typography-tab-lg-active);\n}\n.text--tab-sm {\n  font: var(--eds-theme-typography-tab-sm);\n}\n.text--tab-sm-active {\n  font: var(--eds-theme-typography-tab-sm-active);\n}\n.text--tag {\n  font: var(--eds-theme-typography-tag);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"text--headline-lg":"DhmlsIfNxJUkqX9MqosQ","text--headline-lg-bold":"DvKxDVyR1A2VKlXEKmZK","text--headline-lg-bold-mobile":"f8dgrLUYrPW85oxNpy3W","text--headline-lg-mobile":"UhA9q2umDfAKFA9YiUmZ","text--headline-md":"vHm8cFKh7_X8fybm68hc","text--headline-md-bold":"Y1H5GjOlLS6pF5H3c_Fy","text--headline-md-bold-mobile":"yfwmw7Fkz7CByTZ907Gp","text--headline-md-mobile":"HxKS3AonNZBy8lJRDhWM","text--headline-sm":"W8wLnVAfkibdIwvqpoXo","text--headline-sm-bold":"MPQJmXhe2QlSbQBahdIv","text--headline-sm-bold-mobile":"R7SQxRWr3jt33P4dHBBC","text--headline-sm-mobile":"SyIDnkLUqt2Gvl4pGEwt","text--headline-secondary-lg":"s_yAx32eU9Ig_UWGjsKt","text--headline-secondary-lg-bold":"iFaUcBpvOryf3M9Ph6Wh","text--headline-secondary-md":"CMlsSkEkVI0Zfi00Xeiu","text--headline-secondary-md-bold":"GoZhyVxrMpThO74T7IL8","text--headline-secondary-sm":"dqWY6U3rZ_zBr0qH0KCv","text--headline-secondary-sm-bold":"DZ_tOjabinx7fZeMz8kQ","text--title-lg":"BLA83uUMyW_gctYumlPv","text--title-lg-bold":"_55_zYxH5bSRFbH6apZz","text--title-md":"OPv4iVIxYF9Z3RNvKyLn","text--title-md-bold":"ctjW6VOnBhA2R4G5FEyT","text--title-sm":"sC4fs_rzr0R8g_sh2EMo","text--title-sm-bold":"T96ZEo0J2q0jQmDvUiXh","text--title-xs":"AvqKwN_t1Lza8rEWC6PQ","text--title-xs-bold":"nfQ2DbrQTdskI09UmhbL","text--label-lg-subtle":"iOWhbh7IiQSZBGbyVkCq","text--label-md":"hP8AHcHqHBmUMIACT63P","text--label-md-subtle":"r8i6e8bAE9l3EAAUq48f","text--label-sm":"HxjWKgSnIkVu67eLVVCI","text--body-xl":"nwgnB5s2X4CE1DHNWSfi","text--body-lg":"IbUEkvD2irvJoo_Tqsms","text--body-md":"YOZr2LgtpArXj722lfGg","text--body-sm":"yiOQ68CEgeALxMgTSQq9","text--body-xs":"aFyy5eIfXKI1cF3rBfpB","text--caption-lg":"QzTfwZpw1gbSKUtlHz7V","text--caption-lg-bold":"mvFSbxlp5PgzR1fXrP2J","text--caption-md":"jUiEPr3xJs40ZKp5iLmG","text--caption-md-bold":"Ld8VO1OJ0F7zoIC77AsJ","text--caption-sm":"p25F_rIYqwccZGBOhtDt","text--caption-sm-bold":"YjgI7xL7RjJ26DEqXp8w","text--overline":"ntysVX8lE1UjxXEHSRvy","text--overline-lg":"vLMATCpynuRIPfzO_wat","text--overline-md":"m7yyF5ij8bm8m0ro7C2l","text--overline-sm":"T_7a5jxvuYa4JHeoABr_","text--callout":"Sxwj8Nga21XT2r9mbH4h","text--breadcrumb":"aTSULmEReR4iXuCCID2T","text--button-lg":"r4R3qIu5kgXzaIASrYUP","text--button-md":"ektdRZSxYE5xIYpnyyKo","text--button-label":"K2b1OYUsPJMkpVUU6pdv","text--button-label-sm":"qlHpX8TPPwz2Q4ievKL7","text--form-label":"ugHAU5EnFcBYPQ7BTS3b","text--form-input":"QE13tIoV7Hk8OfNvCydH","text--link-lg":"N8aORLqBrnUiUHLX6Yw4","text--link-md":"UpQ8wJuvvz_E_BsVbnrG","text--link-sm":"TSTDDR_IUajHqY1yit2h","text--link-xs":"Kzz1wXAr3Jc4TR_4PlzT","text--tab-lg":"EpFAAbofW_AetuJ4IdgA","text--tab-lg-active":"Yu3LYYpr0RDoUIfA9WNC","text--tab-sm":"NvDZ9x78RkBNibHu7npH","text--tab-sm-active":"LMoFklRS2ryXKvxZSm8C","text--tag":"wcOJUI1S98rpB3s76dBK"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);