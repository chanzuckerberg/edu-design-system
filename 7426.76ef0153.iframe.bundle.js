"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[7426],{"./node_modules/@headlessui/react/dist/hooks/use-disposables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>p});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js");function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.k);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>e.dispose()),[e]),e}},"./node_modules/@headlessui/react/dist/hooks/use-text-value.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>b});var react=__webpack_require__("./node_modules/react/index.js");let a=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var r,i;let n=null!=(r=e.innerText)?r:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return n;let u=!1;for(let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),u=!0;let l=u?null!=(i=t.innerText)?i:"":n;return a.test(l)&&(l=l.replace(a,"")),l}var use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js");function b(c){let t=(0,react.useRef)(""),r=(0,react.useRef)("");return(0,use_event.z)((()=>{let e=c.current;if(!e)return"";let u=e.innerText;if(t.current===u)return r.current;let n=function g(e){let n=e.getAttribute("aria-label");if("string"==typeof n)return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let u=t.split(" ").map((l=>{let r=document.getElementById(l);if(r){let i=r.getAttribute("aria-label");return"string"==typeof i?i.trim():o(r).trim()}return null})).filter(Boolean);if(u.length>0)return u.join(", ")}return o(e).trim()}(e).trim().toLowerCase();return t.current=u,r.current=n,n}))}},"./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>u});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function t(e){return[e.screenX,e.screenY]}function u(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([-1,-1]);return{wasMoved(r){let n=t(r);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(r){e.current=t(r)}}}},"./node_modules/@headlessui/react/dist/utils/calculate-active-index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>a,d:()=>x});var e,a=((e=a||{})[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e);function x(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=null!=l?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex((e=>!n.resolveDisabled(e)));case 1:{let e=t.slice().reverse().findIndex(((i,c,u)=>!(-1!==s&&u.length-c-1>=s)&&!n.resolveDisabled(i)));return-1===e?e:t.length-1-e}case 2:return t.findIndex(((e,i)=>!(i<=s)&&!n.resolveDisabled(e)));case 3:{let e=t.slice().reverse().findIndex((i=>!n.resolveDisabled(i)));return-1===e?e:t.length-1-e}case 4:return t.findIndex((e=>n.resolveId(e)===r.id));case 5:return null;default:!function f(r){throw new Error("Unexpected object: "+r)}(r)}})();return-1===d?l:d}},"./src/components/PopoverContainer/PopoverContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>PopoverContainer,u:()=>defaultPopoverModifiers});var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PopoverContainer_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/PopoverContainer/PopoverContainer.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PopoverContainer_module.Z,options);const PopoverContainer_PopoverContainer_module=PopoverContainer_module.Z&&PopoverContainer_module.Z.locals?PopoverContainer_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultPopoverModifiers=[{name:"offset",options:{offset:[0,10]}},{name:"preventOverflow",options:{mainAxis:!1}},{name:"computeStyles",options:{roundOffsets:!1}},{name:"minWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:_ref=>{let{state}=_ref;state.styles.popper.minWidth=`${state.rects.reference.width}px`},effect:_ref2=>{let{state}=_ref2;state.elements.popper.style.minWidth=`${state.elements.reference.getBoundingClientRect().width}px`}}],PopoverContainer=react.forwardRef(((_ref3,ref)=>{let{className,children,...other}=_ref3;const componentClassName=(0,clsx_m.Z)(PopoverContainer_PopoverContainer_module["popover-container"],className);return react.createElement("div",_extends({className:componentClassName},other,{ref}),children)}));PopoverContainer.displayName="PopoverContainer";try{PopoverContainer.displayName="PopoverContainer",PopoverContainer.__docgenInfo={description:"",displayName:"PopoverContainer",props:{className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PopoverContainer/PopoverContainer.tsx#PopoverContainer"]={docgenInfo:PopoverContainer.__docgenInfo,name:"PopoverContainer",path:"src/components/PopoverContainer/PopoverContainer.tsx#PopoverContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PopoverListItem/PopoverListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>PopoverListItem});var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PopoverListItem_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/PopoverListItem/PopoverListItem.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PopoverListItem_module.Z,options);const PopoverListItem_PopoverListItem_module=PopoverListItem_module.Z&&PopoverListItem_module.Z.locals?PopoverListItem_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const PopoverListItem=react.forwardRef(((_ref,ref)=>{let{active,className,disabled,children,icon,...other}=_ref;const componentClassName=(0,clsx_m.Z)(PopoverListItem_PopoverListItem_module["popover-list-item"],active&&PopoverListItem_PopoverListItem_module["popover-list-item--active"],disabled&&PopoverListItem_PopoverListItem_module["popover-list-item--disabled"],className),ariaIsDisabled=disabled?{"aria-disabled":!0}:{};return react.createElement("div",_extends({className:componentClassName},other,ariaIsDisabled,{ref}),icon?react.createElement("div",{className:PopoverListItem_PopoverListItem_module["popover-list-item__icon"]},react.createElement(Icon.J,{name:icon,purpose:"decorative",size:"1.5rem"})):react.createElement("div",{className:PopoverListItem_PopoverListItem_module["popover-list-item__no-icon"]}),children)}));PopoverListItem.displayName="PopoverListItem";try{PopoverListItem.displayName="PopoverListItem",PopoverListItem.__docgenInfo={description:'`import {PopoverListItem} from "@chanzuckerberg/eds";`\n\nThis abstracts the structure of an item in a popover, when the popover contains a\nlist of items (e.g., Menus and Selects)\n- Contains styles for when active/disabled or not\n- contains styles for when there is an icon on the left\n\nGiven headless implements listbox options as a renderProp, this can work for both\nListbox and Menu examples, in the latter case not specifying an icon',displayName:"PopoverListItem",props:{active:{defaultValue:null,description:"Whether the list item is treated as highlighted in its container",name:"active",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Child node(s) that can be nested inside component",name:"children",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Whether the list item is treated as disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Icon from the set of defined EDS icon set",name:"icon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"link"'},{value:'"menu"'},{value:'"timer"'},{value:'"copy"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"send"'},{value:'"map"'},{value:'"circle"'},{value:'"description"'},{value:'"account-circle"'},{value:'"add-alarm"'},{value:'"add-circle"'},{value:'"add-comment"'},{value:'"add"'},{value:'"alarm"'},{value:'"arrow-back"'},{value:'"arrow-downward"'},{value:'"arrow-forward"'},{value:'"arrow-narrow-down"'},{value:'"arrow-narrow-left"'},{value:'"arrow-narrow-right"'},{value:'"arrow-narrow-up"'},{value:'"arrow-upward"'},{value:'"assessment"'},{value:'"assignment-late"'},{value:'"assignment-turned-in"'},{value:'"assignment"'},{value:'"attachment"'},{value:'"autorenew"'},{value:'"avatar"'},{value:'"book"'},{value:'"bookmark"'},{value:'"business-center"'},{value:'"campaign"'},{value:'"cancel"'},{value:'"category"'},{value:'"check-circle"'},{value:'"check"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"circle-small"'},{value:'"class-copy"'},{value:'"close"'},{value:'"cloud-done"'},{value:'"create-new-folder"'},{value:'"create"'},{value:'"dangerous"'},{value:'"delete"'},{value:'"dots-horizontal"'},{value:'"dots-vertical"'},{value:'"drag-indicator"'},{value:'"edit"'},{value:'"empty-circle"'},{value:'"error-inverted"'},{value:'"event-available"'},{value:'"event-busy"'},{value:'"event-note"'},{value:'"event"'},{value:'"expand-less"'},{value:'"expand-more"'},{value:'"face"'},{value:'"favorite"'},{value:'"feedback"'},{value:'"file-copy"'},{value:'"filter-list"'},{value:'"flag"'},{value:'"folder"'},{value:'"forum"'},{value:'"gesture"'},{value:'"help"'},{value:'"home"'},{value:'"insert-drive-file"'},{value:'"library-books"'},{value:'"local-library"'},{value:'"lock-open"'},{value:'"lock"'},{value:'"mail"'},{value:'"menu-book"'},{value:'"mic"'},{value:'"mood"'},{value:'"more-vert"'},{value:'"notifications"'},{value:'"ondemand-video"'},{value:'"open-in-new"'},{value:'"people"'},{value:'"person"'},{value:'"person-add"'},{value:'"play-arrow"'},{value:'"print"'},{value:'"question-answer"'},{value:'"radio-selected"'},{value:'"radio-unselected"'},{value:'"record-voice-over"'},{value:'"remove"'},{value:'"schedule"'},{value:'"school"'},{value:'"sentiment-dissatisfied"'},{value:'"sentiment-satisfied"'},{value:'"sentiment-very-satisfied"'},{value:'"settings-voice"'},{value:'"settings"'},{value:'"share-custom"'},{value:'"spa"'},{value:'"spinner"'},{value:'"star-circle"'},{value:'"star-outline"'},{value:'"star"'},{value:'"status-check-circle"'},{value:'"status-error"'},{value:'"status-info"'},{value:'"status-warning"'},{value:'"supervised-user-circle"'},{value:'"swap-vert"'},{value:'"thumb-down"'},{value:'"thumb-up"'},{value:'"timeline"'},{value:'"timer-off"'},{value:'"trending-up"'},{value:'"unfold-more"'},{value:'"view-day"'},{value:'"view-headline"'},{value:'"view-module"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PopoverListItem/PopoverListItem.tsx#PopoverListItem"]={docgenInfo:PopoverListItem.__docgenInfo,name:"PopoverListItem",path:"src/components/PopoverListItem/PopoverListItem.tsx#PopoverListItem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/PopoverContainer/PopoverContainer.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Link button styles\n */\n/*------------------------------------*\\\n # POPOVER CONTAINER\n\\*------------------------------------*/\n/**\n * Popover container\n */\n.SLtTKWETa018d6od2baJ {\n  border-radius: var(--eds-border-radius-md);\n  overflow: auto;\n  box-shadow: var(--eds-box-shadow-md);\n  background-color: var(--eds-theme-color-background-neutral-default);\n  z-index: var(--eds-z-index-100);\n}\n.SLtTKWETa018d6od2baJ:focus-visible {\n    outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n    outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n  }\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/PopoverContainer/PopoverContainer.module.css"],names:[],mappings:"AAAA;;EAEE;ACAF;;uCAEuC;AAEvC;;EAEE;AACF;EACE,0CAA0C;EAC1C,cAAc;EACd,oCAAoC;EACpC,mEAAmE;EACnE,+BAA+B;AAKjC;AAHE;ID2CA;qCACmC;IACnC,8DAA8D;EC3C9D",sourcesContent:["/**\n * Link button styles\n */\n@define-mixin textLink {\n  font-size: inherit;\n  font-weight: var(--eds-font-weight-medium);\n  line-height: inherit;\n\n  color: var(--eds-theme-color-link-brand-text);\n  text-decoration: underline;\n  text-decoration-color: var(--eds-theme-color-link-brand-text-decoration);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n\n  svg {\n    /* Has smaller icons than other button styles. */\n    --icon-size-default: 1.25em;\n  }\n\n  &:hover {\n    color: var(--eds-theme-color-link-brand-text-hover);\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-hover);\n  }\n\n  &:focus-visible {\n    /**\n     * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n     * color, but it will also make borders 100% opacity black.\n     */\n    outline: 1px solid transparent;\n    color: var(--eds-theme-color-link-brand-text-focus) !important;\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n    background-color: var(--eds-theme-color-link-brand-background-focus);\n  }\n\n  @supports not selector(:focus-visible) {\n    &:focus {\n      /**\n       * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n       * color, but it will also make borders 100% opacity black.\n       */\n      outline: 1px solid transparent;\n      color: var(--eds-theme-color-link-brand-text-focus) !important;\n      text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n      background-color: var(--eds-theme-color-link-brand-background-focus);\n    }\n  }\n}\n\n@define-mixin TextLinkInverted {\n  @mixin textLink;\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n\n  &:focus {\n    @mixin focusInverted;\n  }\n}\n\n@define-mixin focus {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n\n@define-mixin focusInside {\n  @mixin focus;\n  outline-offset: calc(-1 * var(--eds-theme-box-focus-ring-outline-offset));\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: var(--eds-theme-form-border-width);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: var(--eds-theme-form-border-radius);\n  outline: none;\n  padding: var(--eds-size-1);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow var(--eds-anim-fade-quick) var(--eds-anim-ease),\n    border-color var(--eds-anim-fade-quick) var(--eds-anim-ease);\n\n  &:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n\n  &:focus {\n    @mixin focus;\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n\n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:read-only,\n  &:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    @mixin placeholderStyles;\n  }\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin fieldsetStyles {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin legendReset {\n  display: inline-block;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n@define-mixin messagingBrand {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n}\n\n@define-mixin messagingNeutral {\n  --messaging-border-color: var(--eds-theme-color-border-neutral-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-neutral-subtle);\n\n  background: var(--eds-theme-color-background-neutral-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n@define-mixin messagingSuccess {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n\n@define-mixin messagingWarning {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-warning);\n\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n}\n\n@define-mixin messagingError {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n@define-mixin messagingYield {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n","@import '../../design-tokens/mixins.css';\n\n/*------------------------------------*\\\n # POPOVER CONTAINER\n\\*------------------------------------*/\n\n/**\n * Popover container\n */\n.popover-container {\n  border-radius: var(--eds-border-radius-md);\n  overflow: auto;\n  box-shadow: var(--eds-box-shadow-md);\n  background-color: var(--eds-theme-color-background-neutral-default);\n  z-index: var(--eds-z-index-100);\n\n  &:focus-visible {\n    @mixin focus;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"popover-container":"SLtTKWETa018d6od2baJ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/PopoverListItem/PopoverListItem.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # POPOVER LIST ITEM\n\\*------------------------------------*/\n\n/**\n * PopoverListItem\n */\n\n.CY80_iT2ig3yYOnK1_6C {\n  display: flex;\n  font-size: var(--eds-font-size-14);\n  padding: var(--eds-size-1) var(--eds-size-2);\n  background-color: var(--eds-theme-color-form-background);\n  cursor: pointer;\n}\n\n.TTOhsyZE7YVk52xciKa8 {\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-background-neutral-default-hover);\n}\n\n.XjlgNXAHgdZS6Xt4ZDeT {\n  color: var(--eds-theme-color-text-disabled);\n  cursor: not-allowed;\n}\n\n.jaUbdEH3bSHDL6zmW_vz {\n  padding-right: var(--eds-size-1-and-half);\n}\n\n.VRMQih7Aam8WIf3Y9eKQ {\n  /* right padding applies space for the icon itself and the padding for that icon container */\n  padding-right: calc(var(--eds-size-3) + var(--eds-size-1-and-half));\n}\n","",{version:3,sources:["webpack://./src/components/PopoverListItem/PopoverListItem.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;EAEE;;AACF;EACE,aAAa;EACb,kCAAkC;EAClC,4CAA4C;EAC5C,wDAAwD;EACxD,eAAe;AACjB;;AAEA;EACE,kDAAkD;EAClD,yEAAyE;AAC3E;;AAEA;EACE,2CAA2C;EAC3C,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,4FAA4F;EAC5F,mEAAmE;AACrE",sourcesContent:["/*------------------------------------*\\\n    # POPOVER LIST ITEM\n\\*------------------------------------*/\n\n/**\n * PopoverListItem\n */\n.popover-list-item {\n  display: flex;\n  font-size: var(--eds-font-size-14);\n  padding: var(--eds-size-1) var(--eds-size-2);\n  background-color: var(--eds-theme-color-form-background);\n  cursor: pointer;\n}\n\n.popover-list-item--active {\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-background-neutral-default-hover);\n}\n\n.popover-list-item--disabled {\n  color: var(--eds-theme-color-text-disabled);\n  cursor: not-allowed;\n}\n\n.popover-list-item__icon {\n  padding-right: var(--eds-size-1-and-half);\n}\n\n.popover-list-item__no-icon {\n  /* right padding applies space for the icon itself and the padding for that icon container */\n  padding-right: calc(var(--eds-size-3) + var(--eds-size-1-and-half));\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"popover-list-item":"CY80_iT2ig3yYOnK1_6C","popover-list-item--active":"TTOhsyZE7YVk52xciKa8","popover-list-item--disabled":"XjlgNXAHgdZS6Xt4ZDeT","popover-list-item__icon":"jaUbdEH3bSHDL6zmW_vz","popover-list-item__no-icon":"VRMQih7Aam8WIf3Y9eKQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);