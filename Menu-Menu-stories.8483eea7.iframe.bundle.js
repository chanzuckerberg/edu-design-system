(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[448],{"./src/components/Menu/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,MenuWithAvatarButton:()=>MenuWithAvatarButton,MenuWithIconButton:()=>MenuWithIconButton,Opened:()=>Opened,WithCustomButton:()=>WithCustomButton,WithLongButtonText:()=>WithLongButtonText,WithShortButtonText:()=>WithShortButtonText,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Menu/Menu.tsx"),_icons_spritemap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/icons/spritemap.tsx"),_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Avatar/Avatar.tsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Icon/Icon.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Menu",component:_Menu__WEBPACK_IMPORTED_MODULE_2__.v,subcomponents:{"Menu.Button":_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Button,"Menu.Items":_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Items,"Menu.Item":_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item},parameters:{badges:["1.2"],layout:"centered"},argTypes:{children:{control:{type:null}}},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"p-8"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Story,null))]},Default={args:{children:react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Button,null,"Documentation Links"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Items,{"data-testid":"menu-content"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"https://headlessui.com/react/menu#menu-button",icon:"link"},"Headless UI Docs"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu",icon:"link"},"MDN: Menu"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"#index",onClick:()=>console.log("Item clicked")},"Trigger Action"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{disabled:!0,href:"https://example.org/",icon:"warning"},"Not Possible (disabled)")))}},WithLongButtonText={args:{children:react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Button,null,"Long Trigger Button Text to Demonstrate Popover Matching"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Items,{"data-testid":"menu-content"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"https://headlessui.com/react/menu#menu-button",icon:"link"},"Headless UI Docs"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu",icon:"link"},"MDN: Menu"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{onClick:()=>alert("Item clicked")},"Trigger Action"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{disabled:!0,href:"https://example.org/",icon:"warning"},"Not Possible (disabled)")))}},WithShortButtonText={args:{children:react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Button,null,"Menu"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Items,{"data-testid":"menu-content"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"https://headlessui.com/react/menu#menu-button",icon:"link"},"Headless UI Docs"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu",icon:"link"},"MDN: Menu"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{onClick:()=>alert("Item clicked")},"Trigger Action"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{disabled:!0,href:"https://example.org/",icon:"warning"},"Not Possible (disabled)")))}},WithCustomButton={args:{children:react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.PlainButton,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"fpo"},"Menu Button")),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Items,{"data-testid":"menu-content"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"https://headlessui.com/react/menu#menu-button",icon:"link"},"Headless UI Docs"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu",icon:"link"},"MDN: Menu"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{onClick:()=>alert("Item clicked")},"Trigger Action"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{disabled:!0,href:"https://example.org/",icon:"warning"},"Not Possible (disabled)")))}},MenuWithAvatarButton={parameters:{badges:["1.3","implementationExample"]},args:{children:react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.PlainButton,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__.q,{user:{fullName:"Josie Sandberg"}})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Items,{"data-testid":"menu-content"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"https://headlessui.com/react/menu#menu-button",icon:"link"},"Headless UI Docs"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu",icon:"link"},"MDN: Menu"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{onClick:()=>alert("Item clicked")},"Trigger Action"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{disabled:!0,href:"https://example.org/",icon:"warning"},"Not Possible (disabled)")))}},Opened={...Default,parameters:{...Default.parameters,chromatic:{delay:300}},play:async()=>{await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.tab(),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.keyboard(" ",{delay:300})}},MenuWithIconButton={argTypes:{iconName:{control:"radio",options:Object.keys(_icons_spritemap__WEBPACK_IMPORTED_MODULE_4__.Z)}},args:{iconName:"dots-vertical"},parameters:{badges:["1.2","implementationExample"]},render:_ref=>{let{iconName}=_ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.PlainButton,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.J,{name:iconName,purpose:"informative",size:"2rem",title:"show more"})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Items,{"data-testid":"menu-content"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"https://headlessui.com/react/menu#menu-button",icon:"link"},"Headless UI Docs"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu",icon:"link"},"MDN: Menu"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{onClick:()=>alert("Item clicked")},"Trigger Action"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.v.Item,{disabled:!0,href:"https://example.org/",icon:"warning"},"Not Possible (disabled)")))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <Menu.Button>Documentation Links</Menu.Button>\n        <Menu.Items data-testid="menu-content">\n          <Menu.Item href="https://headlessui.com/react/menu#menu-button" icon="link">\n            Headless UI Docs\n          </Menu.Item>\n          <Menu.Item href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" icon="link">\n            MDN: Menu\n          </Menu.Item>\n          <Menu.Item href="#index" onClick={() => console.log(\'Item clicked\')}>\n            Trigger Action\n          </Menu.Item>\n          <Menu.Item disabled href="https://example.org/" icon="warning">\n            Not Possible (disabled)\n          </Menu.Item>\n        </Menu.Items>\n      </>\n  }\n}',...Default.parameters?.docs?.source}}},WithLongButtonText.parameters={...WithLongButtonText.parameters,docs:{...WithLongButtonText.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <Menu.Button>\n          Long Trigger Button Text to Demonstrate Popover Matching\n        </Menu.Button>\n        <Menu.Items data-testid="menu-content">\n          <Menu.Item href="https://headlessui.com/react/menu#menu-button" icon="link">\n            Headless UI Docs\n          </Menu.Item>\n          <Menu.Item href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" icon="link">\n            MDN: Menu\n          </Menu.Item>\n          {/* eslint-disable-next-line no-alert */}\n          <Menu.Item onClick={() => alert(\'Item clicked\')}>\n            Trigger Action\n          </Menu.Item>\n          <Menu.Item disabled href="https://example.org/" icon="warning">\n            Not Possible (disabled)\n          </Menu.Item>\n        </Menu.Items>\n      </>\n  }\n}',...WithLongButtonText.parameters?.docs?.source}}},WithShortButtonText.parameters={...WithShortButtonText.parameters,docs:{...WithShortButtonText.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <Menu.Button>Menu</Menu.Button>\n        <Menu.Items data-testid="menu-content">\n          <Menu.Item href="https://headlessui.com/react/menu#menu-button" icon="link">\n            Headless UI Docs\n          </Menu.Item>\n          <Menu.Item href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" icon="link">\n            MDN: Menu\n          </Menu.Item>\n          {/* eslint-disable-next-line no-alert */}\n          <Menu.Item onClick={() => alert(\'Item clicked\')}>\n            Trigger Action\n          </Menu.Item>\n          <Menu.Item disabled href="https://example.org/" icon="warning">\n            Not Possible (disabled)\n          </Menu.Item>\n        </Menu.Items>\n      </>\n  }\n}',...WithShortButtonText.parameters?.docs?.source}}},WithCustomButton.parameters={...WithCustomButton.parameters,docs:{...WithCustomButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <Menu.PlainButton>\n          <div className="fpo">Menu Button</div>\n        </Menu.PlainButton>\n        <Menu.Items data-testid="menu-content">\n          <Menu.Item href="https://headlessui.com/react/menu#menu-button" icon="link">\n            Headless UI Docs\n          </Menu.Item>\n          <Menu.Item href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" icon="link">\n            MDN: Menu\n          </Menu.Item>\n          {/* eslint-disable-next-line no-alert */}\n          <Menu.Item onClick={() => alert(\'Item clicked\')}>\n            Trigger Action\n          </Menu.Item>\n          <Menu.Item disabled href="https://example.org/" icon="warning">\n            Not Possible (disabled)\n          </Menu.Item>\n        </Menu.Items>\n      </>\n  }\n}',...WithCustomButton.parameters?.docs?.source}}},MenuWithAvatarButton.parameters={...MenuWithAvatarButton.parameters,docs:{...MenuWithAvatarButton.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    badges: [\'1.3\', \'implementationExample\']\n  },\n  args: {\n    children: <>\n        <Menu.PlainButton>\n          <Avatar user={{\n          fullName: \'Josie Sandberg\'\n        }} />\n        </Menu.PlainButton>\n        <Menu.Items data-testid="menu-content">\n          <Menu.Item href="https://headlessui.com/react/menu#menu-button" icon="link">\n            Headless UI Docs\n          </Menu.Item>\n          <Menu.Item href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" icon="link">\n            MDN: Menu\n          </Menu.Item>\n          {/* eslint-disable-next-line no-alert */}\n          <Menu.Item onClick={() => alert(\'Item clicked\')}>\n            Trigger Action\n          </Menu.Item>\n          <Menu.Item disabled href="https://example.org/" icon="warning">\n            Not Possible (disabled)\n          </Menu.Item>\n        </Menu.Items>\n      </>\n  }\n}',...MenuWithAvatarButton.parameters?.docs?.source}}},Opened.parameters={...Opened.parameters,docs:{...Opened.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  parameters: {\n    ...Default.parameters,\n    // Sets the delay (in milliseconds) for a specific story.\n    chromatic: {\n      delay: 300\n    }\n  },\n  play: async () => {\n    await userEvent.tab();\n    await userEvent.keyboard(' ', {\n      delay: 300\n    });\n  }\n}",...Opened.parameters?.docs?.source}}},MenuWithIconButton.parameters={...MenuWithIconButton.parameters,docs:{...MenuWithIconButton.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    iconName: {\n      control: \'radio\',\n      options: Object.keys(icons)\n    }\n  },\n  args: {\n    iconName: \'dots-vertical\'\n  },\n  parameters: {\n    badges: [\'1.2\', \'implementationExample\']\n  },\n  render: ({\n    iconName\n  }) => <Menu>\n        <Menu.PlainButton>\n          <Icon name={iconName} purpose="informative" size="2rem" title="show more" />\n        </Menu.PlainButton>\n        <Menu.Items data-testid="menu-content">\n          <Menu.Item href="https://headlessui.com/react/menu#menu-button" icon="link">\n            Headless UI Docs\n          </Menu.Item>\n          <Menu.Item href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" icon="link">\n            MDN: Menu\n          </Menu.Item>\n          {/* eslint-disable-next-line no-alert */}\n          <Menu.Item onClick={() => alert(\'Item clicked\')}>\n            Trigger Action\n          </Menu.Item>\n          <Menu.Item disabled href="https://example.org/" icon="warning">\n            Not Possible (disabled)\n          </Menu.Item>\n        </Menu.Items>\n      </Menu>\n}',...MenuWithIconButton.parameters?.docs?.source}}}},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>Avatar});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),lib=__webpack_require__("./node_modules/graphemer/lib/index.js"),lib_default=__webpack_require__.n(lib),react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Avatar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Avatar/Avatar.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatar_module.Z,options);const Avatar_Avatar_module=Avatar_module.Z&&Avatar_module.Z.locals?Avatar_module.Z.locals:void 0;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function produceAbbreviation(fromName){const splitter=new(lib_default());return fromName?splitter.splitGraphemes(fromName)[0]:"?"}function getInitials(fromName){return fromName.split(" ").filter((part=>""!==part)).map(produceAbbreviation).reduce(((prev,curr,idx,arr)=>0===idx||idx===arr.length-1?prev+curr:prev),"").toUpperCase()}const Avatar=_ref=>{let{ariaLabel,className,icon="person",shape="circle",size="md",user,variant="initials",src,...other}=_ref;const componentClassName=(0,clsx.Z)(Avatar_Avatar_module.avatar,shape&&Avatar_Avatar_module[`avatar--${shape}`],size&&Avatar_Avatar_module[`avatar--${size}`],variant&&Avatar_Avatar_module[`avatar--${variant}`],className),descriptiveLabel=ariaLabel??`Avatar for ${user?"":"unknown "}user ${user?.fullName||""}`;let avatarDisplayName=user?getInitials(user.fullName):"??";return user?.displayName&&(avatarDisplayName=user.displayName),react.createElement("div",_extends({"aria-label":descriptiveLabel,className:componentClassName,role:"img"},other),"initials"===variant&&avatarDisplayName,"icon"===variant&&react.createElement(Icon.J,{name:icon,purpose:"decorative"}),"image"===variant&&src&&react.createElement("img",{alt:"user",className:Avatar_Avatar_module.avatar__image,src}),"image"===variant&&!src&&avatarDisplayName)};try{getInitials.displayName="getInitials",getInitials.__docgenInfo={description:"",displayName:"getInitials",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#getInitials"]={docgenInfo:getInitials.__docgenInfo,name:"getInitials",path:"src/components/Avatar/Avatar.tsx#getInitials"})}catch(__react_docgen_typescript_loader_error){}try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:'`import {Avatar} from "@chanzuckerberg/eds";`\n\nRepresentation of a single, unique user, keyed by the user name',displayName:"Avatar",props:{ariaLabel:{defaultValue:null,description:"Label for the given avatar. Defaults to a string using user data.",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS class names that can be appended to the component.",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"person"},description:'Icon to use when an "icon" variant of the avatar. Default is "person"',name:"icon",required:!1,type:{name:"enum",value:[{value:'"map"'},{value:'"search"'},{value:'"link"'},{value:'"menu"'},{value:'"timer"'},{value:'"copy"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"description"'},{value:'"send"'},{value:'"circle"'},{value:'"account-circle"'},{value:'"add-alarm"'},{value:'"add-circle"'},{value:'"add-comment"'},{value:'"add"'},{value:'"alarm"'},{value:'"arrow-back"'},{value:'"arrow-downward"'},{value:'"arrow-forward"'},{value:'"arrow-narrow-down"'},{value:'"arrow-narrow-left"'},{value:'"arrow-narrow-right"'},{value:'"arrow-narrow-up"'},{value:'"arrow-upward"'},{value:'"assessment"'},{value:'"assignment-late"'},{value:'"assignment-turned-in"'},{value:'"assignment"'},{value:'"attachment"'},{value:'"autorenew"'},{value:'"avatar"'},{value:'"book"'},{value:'"bookmark"'},{value:'"business-center"'},{value:'"campaign"'},{value:'"cancel"'},{value:'"category"'},{value:'"check-circle"'},{value:'"check"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"circle-small"'},{value:'"class-copy"'},{value:'"close"'},{value:'"cloud-done"'},{value:'"create-new-folder"'},{value:'"create"'},{value:'"dangerous"'},{value:'"delete"'},{value:'"dots-horizontal"'},{value:'"dots-vertical"'},{value:'"drag-indicator"'},{value:'"edit"'},{value:'"empty-circle"'},{value:'"error-inverted"'},{value:'"event-available"'},{value:'"event-busy"'},{value:'"event-note"'},{value:'"event"'},{value:'"expand-less"'},{value:'"expand-more"'},{value:'"face"'},{value:'"favorite"'},{value:'"feedback"'},{value:'"file-copy"'},{value:'"filter-list"'},{value:'"flag"'},{value:'"folder"'},{value:'"forum"'},{value:'"gesture"'},{value:'"help"'},{value:'"home"'},{value:'"insert-drive-file"'},{value:'"library-books"'},{value:'"local-library"'},{value:'"lock-open"'},{value:'"lock"'},{value:'"mail"'},{value:'"menu-book"'},{value:'"mic"'},{value:'"mood"'},{value:'"more-vert"'},{value:'"notifications"'},{value:'"ondemand-video"'},{value:'"open-in-new"'},{value:'"people"'},{value:'"person"'},{value:'"person-add"'},{value:'"play-arrow"'},{value:'"print"'},{value:'"question-answer"'},{value:'"radio-selected"'},{value:'"radio-unselected"'},{value:'"record-voice-over"'},{value:'"remove"'},{value:'"schedule"'},{value:'"school"'},{value:'"sentiment-dissatisfied"'},{value:'"sentiment-satisfied"'},{value:'"sentiment-very-satisfied"'},{value:'"settings-voice"'},{value:'"settings"'},{value:'"share-custom"'},{value:'"spa"'},{value:'"spinner"'},{value:'"star-circle"'},{value:'"star-outline"'},{value:'"star"'},{value:'"status-check-circle"'},{value:'"status-error"'},{value:'"status-info"'},{value:'"status-warning"'},{value:'"supervised-user-circle"'},{value:'"swap-vert"'},{value:'"thumb-down"'},{value:'"thumb-up"'},{value:'"timeline"'},{value:'"timer-off"'},{value:'"trending-up"'},{value:'"unfold-more"'},{value:'"view-day"'},{value:'"view-headline"'},{value:'"view-module"'}]}},shape:{defaultValue:{value:"circle"},description:"The shape of the avatar",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},size:{defaultValue:{value:"md"},description:"The size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},src:{defaultValue:null,description:"The URL to an image resource (loaded lazily)",name:"src",required:!1,type:{name:"string"}},user:{defaultValue:null,description:"The user associated with this avatar",name:"user",required:!1,type:{name:"UserData"}},variant:{defaultValue:{value:"initials"},description:"Variants of how the avatar will be portrayed",name:"variant",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"image"'},{value:'"initials"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Avatar/Avatar.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/**\n * Link button styles\n */\n/*------------------------------------*\\\n    # AVATAR\n\\*------------------------------------*/\n/**\n * Avatar\n */\n.cNFgJeNuNF741mqy3HjF {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  overflow: hidden;\n\n  color: var(--eds-theme-color-text-neutral-strong);\n  background-color: var(--eds-theme-color-background-neutral-medium);\n\n  white-space: nowrap;\n}\n.cNFgJeNuNF741mqy3HjF:focus-visible {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n@supports not selector(:focus-visible) {\n  .cNFgJeNuNF741mqy3HjF:focus {\n    outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n    outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n  }\n}\n.igzjlARssBSVp1a1XMG9 {\n  font: var(--eds-theme-typography-title-xs);\n\n  height: var(--eds-size-3);\n  width: var(--eds-size-3);\n}\n.SUiVrYUvduoyU2RS0cvO {\n  font: var(--eds-theme-typography-title-sm);\n\n  height: var(--eds-size-4);\n  width: var(--eds-size-4);\n}\n.PCcROen7qoPoNlylMBKX {\n  font: var(--eds-theme-typography-title-md);\n\n  height: var(--eds-size-5);\n  width: var(--eds-size-5);\n}\n.BtHDL4f4kOQZr6AablM6 {\n  font: var(--eds-theme-typography-title-md);\n\n  height: var(--eds-size-6);\n  width: var(--eds-size-6);\n}\n.i_piQ_SgryqqnnvKL7QV {\n  font: var(--eds-theme-typography-title-lg);\n\n  height: var(--eds-size-8);\n  width: var(--eds-size-8);\n}\n.tlqlLjSE7T4etT8nUqRC {\n  font: var(--eds-theme-typography-title-lg);\n\n  height: var(--eds-size-12);\n  width: var(--eds-size-12);\n}\n.yGp9xjtSdyzVi_cmSWyi {\n  font: var(--eds-theme-typography-title-lg);\n\n  height: calc(var(--eds-size-base-unit) * 20);\n  width: calc(var(--eds-size-base-unit) * 20);\n}\n.cUOS5aXn0B3ZDTf7Vrmg {\n  border-radius: var(--eds-border-radius-round);\n}\n.nUF3zk5ht5sbF8GgGncw {\n  width: 100%;\n}\n","",{version:3,sources:["webpack://./src/design-tokens/mixins.css","webpack://./src/components/Avatar/Avatar.module.css"],names:[],mappings:"AAAA;;EAEE;ACAF;;uCAEuC;AAEvC;;EAEE;AACF;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,gBAAgB;;EAEhB,iDAAiD;EACjD,kEAAkE;;EAElE,mBAAmB;AACrB;AAEA;EDqCE;qCACmC;EACnC,8DAA8D;ACrChE;AAEA;EACE;IDgCA;qCACmC;IACnC,8DAA8D;EChC9D;AACF;AAEA;EACE,0CAA0C;;EAE1C,yBAAyB;EACzB,wBAAwB;AAC1B;AAEA;EACE,0CAA0C;;EAE1C,yBAAyB;EACzB,wBAAwB;AAC1B;AAEA;EACE,0CAA0C;;EAE1C,yBAAyB;EACzB,wBAAwB;AAC1B;AAEA;EACE,0CAA0C;;EAE1C,yBAAyB;EACzB,wBAAwB;AAC1B;AAEA;EACE,0CAA0C;;EAE1C,yBAAyB;EACzB,wBAAwB;AAC1B;AAEA;EACE,0CAA0C;;EAE1C,0BAA0B;EAC1B,yBAAyB;AAC3B;AAEA;EACE,0CAA0C;;EAE1C,4CAA4C;EAC5C,2CAA2C;AAC7C;AAEA;EACE,6CAA6C;AAC/C;AAEA;EACE,WAAW;AACb",sourcesContent:["/**\n * Link button styles\n */\n@define-mixin textLink {\n  font-size: inherit;\n  font-weight: var(--eds-font-weight-medium);\n  line-height: inherit;\n\n  color: var(--eds-theme-color-link-brand-text);\n  text-decoration: underline;\n  text-decoration-color: var(--eds-theme-color-link-brand-text-decoration);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 2px;\n\n  svg {\n    /* Has smaller icons than other button styles. */\n    --icon-size-default: 1.25em;\n  }\n\n  &:hover {\n    color: var(--eds-theme-color-link-brand-text-hover);\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-hover);\n  }\n\n  &:focus-visible {\n    /**\n     * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n     * color, but it will also make borders 100% opacity black.\n     */\n    outline: 1px solid transparent;\n    color: var(--eds-theme-color-link-brand-text-focus) !important;\n    text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n    background-color: var(--eds-theme-color-link-brand-background-focus);\n  }\n\n  @supports not selector(:focus-visible) {\n    &:focus {\n      /**\n       * Make the focus outline invisible but don't remove it. High contrast mode will remove the background\n       * color, but it will also make borders 100% opacity black.\n       */\n      outline: 1px solid transparent;\n      color: var(--eds-theme-color-link-brand-text-focus) !important;\n      text-decoration-color: var(--eds-theme-color-link-brand-text-decoration-focus) !important;\n      background-color: var(--eds-theme-color-link-brand-background-focus);\n    }\n  }\n}\n\n@define-mixin TextLinkInverted {\n  @mixin textLink;\n  color: var(--eds-theme-color-text-neutral-default-inverse);\n\n  &:focus {\n    @mixin focusInverted;\n  }\n}\n\n@define-mixin focus {\n  outline: var(--eds-theme-box-focus-ring-outline-width) solid\n    var(--eds-theme-color-focus-ring);\n  outline-offset: var(--eds-theme-box-focus-ring-outline-offset);\n}\n\n@define-mixin focusInside {\n  @mixin focus;\n  outline-offset: calc(-1 * var(--eds-theme-box-focus-ring-outline-offset));\n}\n\n@define-mixin focusInverted {\n  @mixin focus;\n  outline-color: var(--eds-theme-color-focus-ring-inverted);\n}\n\n@define-mixin inputStyles {\n  font: var(--eds-theme-typography-form-input);\n  font-family: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  border-width: var(--eds-theme-form-border-width);\n  border-style: solid;\n  border-color: var(--eds-theme-color-form-border);\n  border-radius: var(--eds-theme-form-border-radius);\n  outline: none;\n  padding: var(--eds-size-1);\n  margin: 0;\n  color: var(--eds-theme-color-text-neutral-default);\n  background-color: var(--eds-theme-color-form-background);\n  transition: box-shadow var(--eds-anim-fade-quick) var(--eds-anim-ease),\n    border-color var(--eds-anim-fade-quick) var(--eds-anim-ease);\n\n  &:hover {\n    border-color: var(--eds-theme-color-form-border-hover);\n  }\n\n  &:focus {\n    @mixin focus;\n    border-color: var(--eds-theme-color-border-brand-primary-strong);\n  }\n\n  @media screen and (prefers-reduced-motion) {\n    transition: none;\n  }\n\n  /**\n   * Input error state\n   */\n  &.error {\n    /* TODO: should this color be applied when a field is in an :invalid state */\n    border-color: var(--eds-theme-color-border-utility-error-strong);\n  }\n\n  /**\n   * Disabled/read-only state\n   */\n  &:disabled,\n  &:read-only,\n  &:disabled::placeholder {\n    border-color: var(--eds-theme-color-border-disabled);\n    color: var(--eds-theme-color-text-disabled);\n    cursor: not-allowed;\n  }\n\n  &::placeholder {\n    @mixin placeholderStyles;\n  }\n}\n\n@define-mixin placeholderStyles {\n  color: var(--eds-theme-color-text-disabled);\n}\n\n@define-mixin fieldsetStyles {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin legendReset {\n  display: inline-block;\n  padding: 0;\n  border: none;\n}\n\n@define-mixin visuallyHide {\n  position: absolute !important;\n  overflow: hidden !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n}\n\n@define-mixin messagingBrand {\n  --messaging-border-color: var(--eds-theme-color-border-brand-primary-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-brand-primary);\n\n  background: var(--eds-theme-color-background-brand-primary-default);\n  color: var(--eds-theme-color-text-brand-default);\n}\n\n@define-mixin messagingNeutral {\n  --messaging-border-color: var(--eds-theme-color-border-neutral-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-neutral-subtle);\n\n  background: var(--eds-theme-color-background-neutral-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n\n@define-mixin messagingSuccess {\n  --messaging-border-color: var(--eds-theme-color-border-utility-success-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-success);\n\n  background: var(--eds-theme-color-background-utility-success);\n  color: var(--eds-theme-color-text-utility-success);\n}\n\n@define-mixin messagingWarning {\n  --messaging-border-color: var(--eds-theme-color-border-utility-warning-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-warning);\n\n  background: var(--eds-theme-color-background-utility-warning);\n  color: var(--eds-theme-color-text-utility-warning);\n}\n\n@define-mixin messagingError {\n  --messaging-border-color: var(--eds-theme-color-border-utility-error-subtle);\n  --messaging-icon-color: var(--eds-theme-color-icon-utility-error);\n\n  background: var(--eds-theme-color-background-utility-error);\n  color: var(--eds-theme-color-text-utility-error);\n}\n\n@define-mixin messagingYield {\n  --messaging-border-color: var(--eds-theme-color-border-grade-revise-strong);\n  --messaging-icon-color: var(--eds-theme-color-border-grade-revise-strong);\n\n  background: var(--eds-theme-color-background-grade-revise-subtle);\n  color: var(--eds-theme-color-text-neutral-default);\n}\n","@import '../../design-tokens/mixins.css';\n\n/*------------------------------------*\\\n    # AVATAR\n\\*------------------------------------*/\n\n/**\n * Avatar\n */\n.avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  overflow: hidden;\n\n  color: var(--eds-theme-color-text-neutral-strong);\n  background-color: var(--eds-theme-color-background-neutral-medium);\n\n  white-space: nowrap;\n}\n\n.avatar:focus-visible {\n  @mixin focus;\n}\n\n@supports not selector(:focus-visible) {\n  .avatar:focus {\n    @mixin focus;\n  }\n}\n\n.avatar--xs {\n  font: var(--eds-theme-typography-title-xs);\n\n  height: var(--eds-size-3);\n  width: var(--eds-size-3);\n}\n\n.avatar--sm {\n  font: var(--eds-theme-typography-title-sm);\n\n  height: var(--eds-size-4);\n  width: var(--eds-size-4);\n}\n\n.avatar--md {\n  font: var(--eds-theme-typography-title-md);\n\n  height: var(--eds-size-5);\n  width: var(--eds-size-5);\n}\n\n.avatar--lg {\n  font: var(--eds-theme-typography-title-md);\n\n  height: var(--eds-size-6);\n  width: var(--eds-size-6);\n}\n\n.avatar--xl {\n  font: var(--eds-theme-typography-title-lg);\n\n  height: var(--eds-size-8);\n  width: var(--eds-size-8);\n}\n\n.avatar--xxl {\n  font: var(--eds-theme-typography-title-lg);\n\n  height: var(--eds-size-12);\n  width: var(--eds-size-12);\n}\n\n.avatar--xxxl {\n  font: var(--eds-theme-typography-title-lg);\n\n  height: calc(var(--eds-size-base-unit) * 20);\n  width: calc(var(--eds-size-base-unit) * 20);\n}\n\n.avatar--circle {\n  border-radius: var(--eds-border-radius-round);\n}\n\n.avatar__image {\n  width: 100%;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={avatar:"cNFgJeNuNF741mqy3HjF","avatar--xs":"igzjlARssBSVp1a1XMG9","avatar--sm":"SUiVrYUvduoyU2RS0cvO","avatar--md":"PCcROen7qoPoNlylMBKX","avatar--lg":"BtHDL4f4kOQZr6AablM6","avatar--xl":"i_piQ_SgryqqnnvKL7QV","avatar--xxl":"tlqlLjSE7T4etT8nUqRC","avatar--xxxl":"yGp9xjtSdyzVi_cmSWyi","avatar--circle":"cUOS5aXn0B3ZDTf7Vrmg",avatar__image:"nUF3zk5ht5sbF8GgGncw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"?4f7e":()=>{}}]);