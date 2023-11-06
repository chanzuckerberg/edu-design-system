"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[399],{"./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NZ:()=>e});var o,e=((o=e||{}).DEFAULT="default",o.BETA="beta",o.STABLE="stable",o.NEEDS_REVISION="needs-revision",o.OBSOLETE="obsolete",o.EXPERIMENTAL="experimental",o.DEPRECATED="deprecated",o)},"./src/components/Score/Score.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Success:()=>Success,Table:()=>Table,default:()=>Score_stories});var dist=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),Tag=__webpack_require__("./src/components/Tag/Tag.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Score_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Score/Score.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Score_module.Z,options);const Score_Score_module=Score_module.Z&&Score_module.Z.locals?Score_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Score=_ref=>{let{className,variant,...other}=_ref;const componentClassName=(0,clsx_m.Z)(Score_Score_module.score,Score_Score_module[`score--${variant}`],className);return react.createElement(Tag.V,_extends({className:componentClassName,hasOutline:!0},other))};try{Score.displayName="Score",Score.__docgenInfo={description:'`import {Score} from "@chanzuckerberg/eds";`\n\nA (pill shaped badge) wrapper intended for use with scores.',displayName:"Score",props:{className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"The color variant of the score.",name:"variant",required:!0,type:{name:"enum",value:[{value:'"table"'},{value:'"error"'},{value:'"success"'}]}},text:{defaultValue:null,description:"The score value text.",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Score/Score.tsx#Score"]={docgenInfo:Score.__docgenInfo,name:"Score",path:"src/components/Score/Score.tsx#Score"})}catch(__react_docgen_typescript_loader_error){}const Score_stories={title:"Components/Score",component:Score,parameters:{badges:["1.0",dist.NZ.DEPRECATED]}},Success={args:{text:"91 / 100",variant:"success"}},Error={args:{text:"6 / 10",variant:"error"}},Table={args:{text:"6 / 10",variant:"table"},decorators:[Story=>react.createElement("div",null,react.createElement("p",{className:"mb-4"},"Score has transparent border for use in Table component"),Story())]};Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: '91 / 100',\n    variant: 'success'\n  }\n}",...Success.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: '6 / 10',\n    variant: 'error'\n  }\n}",...Error.parameters?.docs?.source}}},Table.parameters={...Table.parameters,docs:{...Table.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: '6 / 10',\n    variant: 'table'\n  },\n  decorators: [Story => <div>\n        <p className=\"mb-4\">\n          Score has transparent border for use in Table component\n        </p>\n        {Story()}\n      </div>]\n}",...Table.parameters?.docs?.source}}}},"./src/components/Tag/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Tag,Z:()=>VARIANTS});var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),Text=__webpack_require__("./src/components/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tag_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tag/Tag.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tag_module.Z,options);const Tag_Tag_module=Tag_module.Z&&Tag_module.Z.locals?Tag_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const VARIANTS=["neutral","error","success","warning","yield","brand"],Tag=_ref=>{let{variant="neutral",className,icon,text,hasOutline=!1,...other}=_ref;const componentClassName=(0,clsx_m.Z)(Tag_Tag_module.tag,Tag_Tag_module[`tag--${variant}`],hasOutline&&Tag_Tag_module["tag--outline"],className);return react.createElement(Text.x,_extends({as:"span",className:componentClassName,size:"sm",weight:"bold"},other),icon,text&&react.createElement("span",{className:Tag_Tag_module.tag__body},text))};try{Tag.displayName="Tag",Tag.__docgenInfo={description:'`import {Tag} from "@chanzuckerberg/eds";`\n\nThis component provides a tag (pill shaped badge) wrapper.',displayName:"Tag",props:{variant:{defaultValue:{value:"neutral"},description:"The color variant of the tag. New variants should be supported\nin the VARIANTS array and by its separate style in CSS file.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"brand"'},{value:'"neutral"'},{value:'"yield"'}]}},className:{defaultValue:null,description:"CSS class names that can be appended to the component for styling.",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"The tag icon (shouldn't provide color or size since those are determined\nby the color prop).",name:"icon",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"The text contents of the tag, nested inside the component, in addition to the icon.",name:"text",required:!1,type:{name:"ReactNode"}},hasOutline:{defaultValue:{value:"false"},description:"Adds an outline for the tag. Defaulted to no outline.",name:"hasOutline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/components/Tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Score/Score.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # SCORE\n\\*------------------------------------*/\n\n/**\n * Rounded rectangle container that houses a score.\n */\n\n.hCKdGBMrJGLGUXNMDc4c {\n  --tag-secondary-color: transparent;\n}\n\n/**\n * Color variants\n */\n\n.tMFl56v6hV8QkdYyIE5_ {\n  --tag-outline-color: var(--eds-theme-color-border-utility-success-strong);\n}\n\n.PvY8SN1TFe0VJ4jjqqAY {\n  --tag-outline-color: var(--eds-theme-color-border-utility-error-default);\n}\n\n.jh62SdFE63XAFCp2buNX {\n  --tag-outline-color: transparent;\n}\n","",{version:3,sources:["webpack://./src/components/Score/Score.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;EAEE;;AACF;EACE,kCAAkC;AACpC;;AAEA;;EAEE;;AACF;EACE,yEAAyE;AAC3E;;AACA;EACE,wEAAwE;AAC1E;;AACA;EACE,gCAAgC;AAClC",sourcesContent:["/*------------------------------------*\\\n    # SCORE\n\\*------------------------------------*/\n\n/**\n * Rounded rectangle container that houses a score.\n */\n.score {\n  --tag-secondary-color: transparent;\n}\n\n/**\n * Color variants\n */\n.score--success {\n  --tag-outline-color: var(--eds-theme-color-border-utility-success-strong);\n}\n.score--error {\n  --tag-outline-color: var(--eds-theme-color-border-utility-error-default);\n}\n.score--table {\n  --tag-outline-color: transparent;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={score:"hCKdGBMrJGLGUXNMDc4c","score--success":"tMFl56v6hV8QkdYyIE5_","score--error":"PvY8SN1TFe0VJ4jjqqAY","score--table":"jh62SdFE63XAFCp2buNX"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tag/Tag.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Link button styles\n */\n/*------------------------------------*\\\n    # TAG\n\\*------------------------------------*/\n/**\n * The rounded rectangle container that houses information.\n */\n.ShQtbi3basjfRSD56lDp {\n  width: max-content;\n  height: var(--eds-size-3);\n  padding-left: var(--eds-size-1-and-half);\n  padding-right: var(--eds-size-1-and-half);\n\n  display: inline-flex;\n  align-items: center;\n\n  /* Grabs colors from whichever variant is selected. */\n  border: var(--tag-secondary-color) solid var(--eds-theme-border-width);\n  /* Rounds the corners of the tag. */\n  border-radius: var(--eds-border-radius-full);\n\n  background-color: var(--tag-secondary-color);\n  color: var(--tag-primary-color);\n  --icon-size-default: 0.875rem;\n}\n/**\n * If tags are used inline, ensures spacing between tags.\n */\n.ShQtbi3basjfRSD56lDp > :not(:last-child) {\n  margin-right: var(--eds-size-half);\n}\n/**\n * Keeps text centered and in one line.\n */\n.aRjS34GgTy31lVDWWd0m {\n  flex: 1 1 auto;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  font: var(--eds-theme-typography-tag);\n}\n/**\n * Color variants.\n */\n:where(.ywLyJwxQ6UdqbVw8fSSq) {\n  --tag-primary-color: var(--eds-theme-color-text-neutral-default);\n  --tag-secondary-color: var(--eds-theme-color-background-neutral-subtle);\n  --tag-outline-color: var(--eds-theme-color-border-neutral-default);\n}\n:where(.n7wdJO8Dc0v7C0JyKjCt) {\n  --tag-primary-color: var(--eds-theme-color-text-utility-error);\n  --tag-secondary-color: var(--eds-theme-color-background-utility-error);\n  --tag-outline-color: var(--eds-theme-color-border-utility-error-default);\n}\n:where(.jj3rYtS3KwKuNXzgnls9) {\n  --tag-primary-color: var(--eds-theme-color-text-utility-success);\n  --tag-secondary-color: var(--eds-theme-color-background-utility-success);\n  --tag-outline-color: var(--eds-theme-color-border-utility-success-default);\n}\n:where(.msX7_AqF59bxcLUv9L8w) {\n  --tag-primary-color: var(--eds-theme-color-text-utility-warning);\n  --tag-secondary-color: var(--eds-theme-color-background-utility-warning);\n  --tag-outline-color: var(--eds-theme-color-border-utility-warning-default);\n}\n:where(.bkWatI0QkvVfjdll73Yc) {\n  --tag-primary-color: var(--eds-theme-color-text-grade-revise);\n  --tag-secondary-color: var(--eds-theme-color-background-grade-revise-subtle);\n  --tag-outline-color: var(--eds-theme-color-border-grade-revise-default);\n}\n:where(.DqY6CpTHgS521yWwhDeG) {\n  --tag-primary-color: var(--eds-theme-color-text-brand-default);\n  --tag-secondary-color: var(--eds-theme-color-background-brand-primary-default);\n  --tag-outline-color: var(--eds-theme-color-border-brand-primary-default);\n}\n/**\n * Adds outline to the tag.\n */\n.uEyay3yACCU7MmavKteY {\n  border-color: var(--tag-outline-color);\n}\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/Tag/Tag.module.css"],names:[],mappings:"AAAA;;EAEE;ACAF;;uCAEuC;AAEvC;;EAEE;AACF;EACE,kBAAkB;EAClB,yBAAyB;EACzB,wCAAwC;EACxC,yCAAyC;;EAEzC,oBAAoB;EACpB,mBAAmB;;EAEnB,qDAAqD;EACrD,sEAAsE;EACtE,mCAAmC;EACnC,4CAA4C;;EAE5C,4CAA4C;EAC5C,+BAA+B;EAC/B,6BAA6B;AAC/B;AAEA;;EAEE;AACF;EACE,kCAAkC;AACpC;AAEA;;EAEE;AACF;EACE,cAAc;;EAEd,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;;EAEnB,qCAAqC;AACvC;AAEA;;EAEE;AACF;EACE,gEAAgE;EAChE,uEAAuE;EACvE,kEAAkE;AACpE;AAEA;EACE,8DAA8D;EAC9D,sEAAsE;EACtE,wEAAwE;AAC1E;AAEA;EACE,gEAAgE;EAChE,wEAAwE;EACxE,0EAA0E;AAC5E;AAEA;EACE,gEAAgE;EAChE,wEAAwE;EACxE,0EAA0E;AAC5E;AAEA;EACE,6DAA6D;EAC7D,4EAA4E;EAC5E,uEAAuE;AACzE;AAEA;EACE,8DAA8D;EAC9D,8EAA8E;EAC9E,wEAAwE;AAC1E;AAEA;;EAEE;AACF;EACE,sCAAsC;AACxC",sourcesContent:["/**\n * Link button styles\n */\n@define-mixin textLink {\n  font-size: inherit;\n  font-weight: var(--eds-font-weight-medium);\n  line-height: inherit;\n\n  color: var(--eds-theme-color-link-brand-text);\n  text-decoration: underline;\n  text-decoration-color: var(--eds-theme-color-link-brand-text-decoration);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n\n  svg {\n    /* Has smaller icons than other button styles. */\n    --icon-size-default: 1.25em;\n  }\n\n  &:hover {\n    color: var(--eds-theme-color-link-brand-text-hover);\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-hover);\n  }\n\n  &:focus-visible {\n    /**\n     * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n     * color, but it will also make borders 100% opacity black.\n     */\n    outline: 1px solid transparent;\n    color: var(--eds-theme-color-link-brand-text-focus) !important;\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n    background-color: var(--eds-theme-color-link-brand-background-focus);\n  }\n\n  @supports not selector(:focus-visible) {\n    &:focus {\n      /**\n       * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n       * color, but it will also make borders 100% opacity black.\n       */\n      outline: 1px solid transparent;\n      color: var(--eds-theme-color-link-brand-text-focus) !important;\n      text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n      background-color: var(--eds-theme-color-link-brand-background-focus);\n    }\n  }\n}\n\n@define-mixin TextLinkInverted {\n  @mixin textLink;\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n\n  &:focus {\n    @mixin focusInverted;\n  }\n}\n\n@define-mixin focus {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n\n@define-mixin focusInside {\n  @mixin focus;\n  outline-offset: calc(-1 * var(--eds-theme-box-focus-ring-outline-offset));\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: var(--eds-theme-form-border-width);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: var(--eds-theme-form-border-radius);\n  outline: none;\n  padding: var(--eds-size-1);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow var(--eds-anim-fade-quick) var(--eds-anim-ease),\n    border-color var(--eds-anim-fade-quick) var(--eds-anim-ease);\n\n  &:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n\n  &:focus {\n    @mixin focus;\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n\n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:read-only,\n  &:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    @mixin placeholderStyles;\n  }\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin fieldsetStyles {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin legendReset {\n  display: inline-block;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n@define-mixin messagingBrand {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n}\n\n@define-mixin messagingNeutral {\n  --messaging-border-color: var(--eds-theme-color-border-neutral-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-neutral-subtle);\n\n  background: var(--eds-theme-color-background-neutral-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n@define-mixin messagingSuccess {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n\n@define-mixin messagingWarning {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-warning);\n\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n}\n\n@define-mixin messagingError {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n@define-mixin messagingYield {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n","@import '../../design-tokens/mixins.css';\n\n/*------------------------------------*\\\n    # TAG\n\\*------------------------------------*/\n\n/**\n * The rounded rectangle container that houses information.\n */\n.tag {\n  width: max-content;\n  height: var(--eds-size-3);\n  padding-left: var(--eds-size-1-and-half);\n  padding-right: var(--eds-size-1-and-half);\n\n  display: inline-flex;\n  align-items: center;\n\n  /* Grabs colors from whichever variant is selected. */\n  border: var(--tag-secondary-color) solid var(--eds-theme-border-width);\n  /* Rounds the corners of the tag. */\n  border-radius: var(--eds-border-radius-full);\n\n  background-color: var(--tag-secondary-color);\n  color: var(--tag-primary-color);\n  --icon-size-default: 0.875rem;\n}\n\n/**\n * If tags are used inline, ensures spacing between tags.\n */\n.tag > :not(:last-child) {\n  margin-right: var(--eds-size-half);\n}\n\n/**\n * Keeps text centered and in one line.\n */\n.tag__body {\n  flex: 1 1 auto;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  font: var(--eds-theme-typography-tag);\n}\n\n/**\n * Color variants.\n */\n:where(.tag--neutral) {\n  --tag-primary-color: var(--eds-theme-color-text-neutral-default);\n  --tag-secondary-color: var(--eds-theme-color-background-neutral-subtle);\n  --tag-outline-color: var(--eds-theme-color-border-neutral-default);\n}\n\n:where(.tag--error) {\n  --tag-primary-color: var(--eds-theme-color-text-utility-error);\n  --tag-secondary-color: var(--eds-theme-color-background-utility-error);\n  --tag-outline-color: var(--eds-theme-color-border-utility-error-default);\n}\n\n:where(.tag--success) {\n  --tag-primary-color: var(--eds-theme-color-text-utility-success);\n  --tag-secondary-color: var(--eds-theme-color-background-utility-success);\n  --tag-outline-color: var(--eds-theme-color-border-utility-success-default);\n}\n\n:where(.tag--warning) {\n  --tag-primary-color: var(--eds-theme-color-text-utility-warning);\n  --tag-secondary-color: var(--eds-theme-color-background-utility-warning);\n  --tag-outline-color: var(--eds-theme-color-border-utility-warning-default);\n}\n\n:where(.tag--yield) {\n  --tag-primary-color: var(--eds-theme-color-text-grade-revise);\n  --tag-secondary-color: var(--eds-theme-color-background-grade-revise-subtle);\n  --tag-outline-color: var(--eds-theme-color-border-grade-revise-default);\n}\n\n:where(.tag--brand) {\n  --tag-primary-color: var(--eds-theme-color-text-brand-default);\n  --tag-secondary-color: var(--eds-theme-color-background-brand-primary-default);\n  --tag-outline-color: var(--eds-theme-color-border-brand-primary-default);\n}\n\n/**\n * Adds outline to the tag.\n */\n.tag--outline {\n  border-color: var(--tag-outline-color);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={tag:"ShQtbi3basjfRSD56lDp",tag__body:"aRjS34GgTy31lVDWWd0m","tag--neutral":"ywLyJwxQ6UdqbVw8fSSq","tag--error":"n7wdJO8Dc0v7C0JyKjCt","tag--success":"jj3rYtS3KwKuNXzgnls9","tag--warning":"msX7_AqF59bxcLUv9L8w","tag--yield":"bkWatI0QkvVfjdll73Yc","tag--brand":"DqY6CpTHgS521yWwhDeG","tag--outline":"uEyay3yACCU7MmavKteY"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);