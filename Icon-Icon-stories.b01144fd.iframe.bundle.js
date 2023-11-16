"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[2686],{"./src/components/Icon/Icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColor:()=>CustomColor,Default:()=>Default,IconGrid:()=>IconGrid,InText:()=>InText,Large:()=>Large,Medium:()=>Medium,WithChildrenSvg:()=>WithChildrenSvg,default:()=>Icon_stories});var lodash=__webpack_require__("./node_modules/lodash/lodash.js"),react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),spritemap=__webpack_require__("./src/icons/spritemap.tsx"),colors=__webpack_require__("./src/tokens-dist/ts/colors.ts"),Text=__webpack_require__("./src/components/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon_stories_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Icon/Icon.stories.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon_stories_module.Z,options);const Icon_Icon_stories_module=Icon_stories_module.Z&&Icon_stories_module.Z.locals?Icon_stories_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Icon_stories={title:"Components/Icon",component:Icon.J,parameters:{badges:["1.0"]},argTypes:{name:{control:{type:"select"},options:Object.keys(spritemap.Z)},color:{control:{type:"select"},options:["currentColor",...Object.keys(colors).map((tokenVarName=>`var(--${(0,lodash.kebabCase)(tokenVarName)})`))]}}},Default={render:_ref=>{let{name,color,...rest}=_ref;return react.createElement(Icon.J,_extends({},rest,{color,name}))},args:{name:"close",purpose:"decorative"}},Medium={...Default,args:{...Default.args,size:"2em"}},Large={...Default,args:{...Default.args,size:"4em"}},CustomColor={...Default,args:{...Default.args,color:"var(--eds-color-brand-grape-400)",size:"2em"}},InText={render:args=>react.createElement(Text.x,{as:"p"},"The svg icon defaults to the surrounding text size (",react.createElement(Icon.J,_extends({},args,{name:"account-circle",purpose:"informative",title:"icon with 1em line height"})),"; 1em) by default.")},WithChildrenSvg={...Default,args:{viewBox:"0 0 24 24",children:react.createElement("path",{d:"M11.6144 8.96051C12.2524 7.61848 13.9514 4.56304 14.905 3C15.5557 3.28671 16.1844 3.61871 16.7863 3.99342C15.9964 5.50177 14.2272 8.6643 13.5144 9.87646C14.7414 9.45266 18.4783 8.3362 20.1657 7.89646C20.4765 8.60506 20.8294 9.55291 21 10.0815C19.0439 10.5737 15.0872 11.5078 13.699 11.8109C15.335 12.2848 17.9431 13.0914 19.8642 13.7408C19.6118 14.2352 19.0345 15.2354 18.6209 15.9122C17.034 15.3311 15.0639 14.5451 13.4794 13.8934C13.9 14.3491 16.8143 17.8329 17.5178 18.7147C17.1322 19.2023 16.4217 20.0157 15.9566 20.5101C14.6058 18.7876 13.1522 16.819 12.0047 15.2149C12.0911 16.0785 12.3412 19.4119 12.43 20.8701C11.764 20.9339 10.8455 20.9841 10.093 21C10.0345 18.7739 10.0065 16.9648 10.0088 15.7253C9.39652 16.6367 7.40068 19.4734 6.97066 20.0544C6.58504 19.7263 5.80213 18.9152 5.48429 18.5985C6.41911 17.2975 8.24201 14.9939 9.14412 13.8957C8.24435 14.1965 4.57518 15.3266 3.53519 15.6046C3.35991 15.0418 3.11685 14.1076 3 13.5334C4.11945 13.2395 7.56661 12.4352 8.98987 12.1322C8.04103 11.5603 5.13607 9.68506 3.88574 8.81013C4.35316 8.17671 4.91872 7.48633 5.43521 6.88481C6.44015 7.60709 8.7772 9.32734 9.5718 9.92203C9.00857 7.9238 8.57388 5.88 8.13918 3.57646C8.9025 3.38437 9.67878 3.24503 10.4622 3.15949C10.6679 4.05949 11.4298 8.09468 11.6144 8.96051Z"})}},IconsInGrid=args=>react.createElement("div",null,react.createElement("ul",{className:Icon_Icon_stories_module["icon-grid"]},Object.keys(spritemap.Z).map((name=>react.createElement("li",{className:Icon_Icon_stories_module["icon-grid__item"],key:name},react.createElement(Icon.J,_extends({className:Icon_Icon_stories_module["icon-grid__icon"],name},args)),react.createElement("span",{className:Icon_Icon_stories_module["icon-grid__text"]},name),"avatar"===name&&react.createElement("div",{className:Icon_Icon_stories_module["icon-grid__deprecation"]},react.createElement(Icon.J,_extends({className:Icon_Icon_stories_module["icon-grid__deprecation-icon"],name:"status-error"},args)),"This has been replaced by person. This will be deprecated"),"class-copy"===name&&react.createElement("div",{className:Icon_Icon_stories_module["icon-grid__deprecation"]},react.createElement(Icon.J,_extends({className:Icon_Icon_stories_module["icon-grid__deprecation-icon"],name:"status-error"},args)),"This has been replaced by book. This will be deprecated"),"file-copy"===name&&react.createElement("div",{className:Icon_Icon_stories_module["icon-grid__deprecation"]},react.createElement(Icon.J,_extends({className:Icon_Icon_stories_module["icon-grid__deprecation-icon"],name:"status-error"},args)),"This has been replaced by copy. This will be deprecated"),"more-vert"===name&&react.createElement("div",{className:Icon_Icon_stories_module["icon-grid__deprecation"]},react.createElement(Icon.J,_extends({className:Icon_Icon_stories_module["icon-grid__deprecation-icon"],name:"status-error"},args)),"This has been replaced by dots-vertical. This will be deprecated"),["status-check-circle","status-error","status-info","status-warning"].includes(name)&&react.createElement("div",{className:Icon_Icon_stories_module["icon-grid__deprecation"]},react.createElement(Icon.J,_extends({className:Icon_Icon_stories_module["icon-grid__deprecation-icon"],name:"status-error"},args)),"Icons with baked-in colors are not recommended. This will be deprecated.")))))),IconGrid={render:args=>react.createElement(IconsInGrid,args)};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: ({\n    name,\n    color,\n    ...rest\n  }) => {\n    return <Icon {...rest} color={color} name={name} />;\n  },\n  args: {\n    name: 'close',\n    purpose: ('decorative' as const)\n  }\n}",...Default.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    ...Default.args,\n    size: '2em'\n  }\n}",...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    ...Default.args,\n    size: '4em'\n  }\n}",...Large.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    ...Default.args,\n    color: 'var(--eds-color-brand-grape-400)',\n    size: '2em'\n  }\n}",...CustomColor.parameters?.docs?.source},description:{story:"You can control the color of the icon using any valid CSS color values, including our token suite.\n\nIf `currentColor` for the whole container isn't sufficient,\nuse a CSS variable in `color` with the token you need, or\nstyle `fill` with Tailwind: https://tailwindcss.com/docs/fill",...CustomColor.parameters?.docs?.description}}},InText.parameters={...InText.parameters,docs:{...InText.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Text as="p">\n        The svg icon defaults to the surrounding text size (\n        <Icon {...args} name="account-circle" purpose="informative" title="icon with 1em line height" />\n        ; 1em) by default.\n      </Text>;\n  }\n}',...InText.parameters?.docs?.source},description:{story:"Icons are positioned naturally in lines of text. Use the size, color, or other props\nto match the recommended design and layout.\n\nSee: https://material-ui.com/components/material-icons/",...InText.parameters?.docs?.description}}},WithChildrenSvg.parameters={...WithChildrenSvg.parameters,docs:{...WithChildrenSvg.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    viewBox: '0 0 24 24',\n    children: <path d=\"M11.6144 8.96051C12.2524 7.61848 13.9514 4.56304 14.905 3C15.5557 3.28671 16.1844 3.61871 16.7863 3.99342C15.9964 5.50177 14.2272 8.6643 13.5144 9.87646C14.7414 9.45266 18.4783 8.3362 20.1657 7.89646C20.4765 8.60506 20.8294 9.55291 21 10.0815C19.0439 10.5737 15.0872 11.5078 13.699 11.8109C15.335 12.2848 17.9431 13.0914 19.8642 13.7408C19.6118 14.2352 19.0345 15.2354 18.6209 15.9122C17.034 15.3311 15.0639 14.5451 13.4794 13.8934C13.9 14.3491 16.8143 17.8329 17.5178 18.7147C17.1322 19.2023 16.4217 20.0157 15.9566 20.5101C14.6058 18.7876 13.1522 16.819 12.0047 15.2149C12.0911 16.0785 12.3412 19.4119 12.43 20.8701C11.764 20.9339 10.8455 20.9841 10.093 21C10.0345 18.7739 10.0065 16.9648 10.0088 15.7253C9.39652 16.6367 7.40068 19.4734 6.97066 20.0544C6.58504 19.7263 5.80213 18.9152 5.48429 18.5985C6.41911 17.2975 8.24201 14.9939 9.14412 13.8957C8.24435 14.1965 4.57518 15.3266 3.53519 15.6046C3.35991 15.0418 3.11685 14.1076 3 13.5334C4.11945 13.2395 7.56661 12.4352 8.98987 12.1322C8.04103 11.5603 5.13607 9.68506 3.88574 8.81013C4.35316 8.17671 4.91872 7.48633 5.43521 6.88481C6.44015 7.60709 8.7772 9.32734 9.5718 9.92203C9.00857 7.9238 8.57388 5.88 8.13918 3.57646C8.9025 3.38437 9.67878 3.24503 10.4622 3.15949C10.6679 4.05949 11.4298 8.09468 11.6144 8.96051Z\" />\n  }\n}",...WithChildrenSvg.parameters?.docs?.source},description:{story:"If your product needs icons not currently existing in the suite, you can introduce new\naccessible icons by inserting the body of an SVG into `Icon`. Each resulting icon can be\ntreated like a standalone component, matching the recipe defined by design.",...WithChildrenSvg.parameters?.docs?.description}}},IconGrid.parameters={...IconGrid.parameters,docs:{...IconGrid.parameters?.docs,source:{originalSource:"{\n  render: args => <IconsInGrid {...args} />\n}",...IconGrid.parameters?.docs?.source},description:{story:"Grid of all the available icons. Use the controls to change color, or other attributes\n\n**NOTE**: some icons marked as deprecated will be removed in future releases.",...IconGrid.parameters?.docs?.description}}};try{CustomColor.displayName="CustomColor",CustomColor.__docgenInfo={description:"You can control the color of the icon using any valid CSS color values, including our token suite.\n\nIf `currentColor` for the whole container isn't sufficient,\nuse a CSS variable in `color` with the token you need, or\nstyle `fill` with Tailwind: https://tailwindcss.com/docs/fill",displayName:"CustomColor",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.stories.tsx#CustomColor"]={docgenInfo:CustomColor.__docgenInfo,name:"CustomColor",path:"src/components/Icon/Icon.stories.tsx#CustomColor"})}catch(__react_docgen_typescript_loader_error){}try{InText.displayName="InText",InText.__docgenInfo={description:"Icons are positioned naturally in lines of text. Use the size, color, or other props\nto match the recommended design and layout.\n\nSee: https://material-ui.com/components/material-icons/",displayName:"InText",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.stories.tsx#InText"]={docgenInfo:InText.__docgenInfo,name:"InText",path:"src/components/Icon/Icon.stories.tsx#InText"})}catch(__react_docgen_typescript_loader_error){}try{WithChildrenSvg.displayName="WithChildrenSvg",WithChildrenSvg.__docgenInfo={description:"If your product needs icons not currently existing in the suite, you can introduce new\naccessible icons by inserting the body of an SVG into `Icon`. Each resulting icon can be\ntreated like a standalone component, matching the recipe defined by design.",displayName:"WithChildrenSvg",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.stories.tsx#WithChildrenSvg"]={docgenInfo:WithChildrenSvg.__docgenInfo,name:"WithChildrenSvg",path:"src/components/Icon/Icon.stories.tsx#WithChildrenSvg"})}catch(__react_docgen_typescript_loader_error){}try{IconGrid.displayName="IconGrid",IconGrid.__docgenInfo={description:"Grid of all the available icons. Use the controls to change color, or other attributes\n\n**NOTE**: some icons marked as deprecated will be removed in future releases.",displayName:"IconGrid",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.stories.tsx#IconGrid"]={docgenInfo:IconGrid.__docgenInfo,name:"IconGrid",path:"src/components/Icon/Icon.stories.tsx#IconGrid"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Icon/Icon.stories.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*------------------------------------*\\\n    # ICON GRID\n\\*------------------------------------*/\n\n/**\n * The icon grid is not for production and is meant solely to display\n * a grid of icons within the pattern library. THerefore, it does not\n * follow coding conventions\n */\n\n.OOuQGilp8N1MvNb8WExp {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  grid-gap: 1rem;\n}\n\n.PH1W1IbM2WqfnyacHOwh {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  border-radius: 4px;\n  border: 1px solid #cccccc;\n  padding: 8px;\n  min-height: 5.5rem;\n}\n\n.k0vNlmfrxHvggm0NJmdB {\n  height: 24px;\n  width: 24px;\n  margin: 0 auto 1rem auto;\n}\n\n.ywFyX17pw_MUdrxPibSJ {\n  display: block;\n  font-size: 0.75rem;\n}\n\n.FRBScm83QZNbzu3Hw2VA {\n  font-size: 0.75rem;\n  color: #606060;\n  margin-top: 0.5rem;\n}\n\n.NwsKXZ5qYnd2ij1_ExsT {\n  display: inline;\n  position: relative;\n  bottom: 1px;\n  margin-right: 0.25rem;\n}\n","",{version:3,sources:["webpack://./src/components/Icon/Icon.stories.module.css"],names:[],mappings:"AAAA;;uCAEuC;;AAEvC;;;;EAIE;;AAEF;EACE,aAAa;EACb,4DAA4D;EAC5D,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,aAAa;EACb,4BAA4B;EAC5B,6BAA6B;EAC7B,sBAAsB;EACtB,yBAAyB;EACzB,mBAAmB;EACnB,wBAAwB;EACxB,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,qBAAqB;AACvB",sourcesContent:["/*------------------------------------*\\\n    # ICON GRID\n\\*------------------------------------*/\n\n/**\n * The icon grid is not for production and is meant solely to display\n * a grid of icons within the pattern library. THerefore, it does not\n * follow coding conventions\n */\n\n.icon-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  grid-gap: 1rem;\n}\n\n.icon-grid__item {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  border-radius: 4px;\n  border: 1px solid #cccccc;\n  padding: 8px;\n  min-height: 5.5rem;\n}\n\n.icon-grid__icon {\n  height: 24px;\n  width: 24px;\n  margin: 0 auto 1rem auto;\n}\n\n.icon-grid__text {\n  display: block;\n  font-size: 0.75rem;\n}\n\n.icon-grid__deprecation {\n  font-size: 0.75rem;\n  color: #606060;\n  margin-top: 0.5rem;\n}\n\n.icon-grid__deprecation-icon {\n  display: inline;\n  position: relative;\n  bottom: 1px;\n  margin-right: 0.25rem;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"icon-grid":"OOuQGilp8N1MvNb8WExp","icon-grid__item":"PH1W1IbM2WqfnyacHOwh","icon-grid__icon":"k0vNlmfrxHvggm0NJmdB","icon-grid__text":"ywFyX17pw_MUdrxPibSJ","icon-grid__deprecation":"FRBScm83QZNbzu3Hw2VA","icon-grid__deprecation-icon":"NwsKXZ5qYnd2ij1_ExsT"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);