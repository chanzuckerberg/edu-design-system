try{
(()=>{var I=__STORYBOOK_API__,{ActiveTabs:L,Consumer:M,ManagerContext:H,Provider:N,addons:s,combineParameters:W,controlOrMetaKey:K,controlOrMetaSymbol:Y,eventMatchesShortcut:G,eventToShortcut:w,isMacLike:z,isShortcutTaken:U,keyToSymbol:V,merge:j,mockChannel:q,optionOrAltSymbol:Z,shortcutMatchesShortcut:J,shortcutToHumanString:Q,types:u,useAddonState:X,useArgTypes:$,useArgs:ee,useChannel:te,useGlobalTypes:oe,useGlobals:re,useParameter:ae,useSharedState:le,useStoryPrepared:ne,useStorybookApi:i,useStorybookState:se}=__STORYBOOK_API__;var t=__REACT__,{Children:ue,Component:me,Fragment:be,Profiler:ge,PureComponent:Se,StrictMode:Ce,Suspense:ye,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:_e,cloneElement:Te,createContext:Ee,createElement:he,createFactory:fe,createRef:Oe,forwardRef:ke,isValidElement:Be,lazy:xe,memo:Re,useCallback:Ae,useContext:De,useDebugValue:Fe,useEffect:ve,useImperativeHandle:Pe,useLayoutEffect:Ie,useMemo:Le,useReducer:Me,useRef:He,useState:Ne,version:We}=__REACT__;var ze=__STORYBOOK_COMPONENTS__,{A:Ue,ActionBar:Ve,AddonPanel:je,Badge:qe,Bar:Ze,Blockquote:Je,Button:Qe,ClipboardCode:Xe,Code:$e,DL:et,Div:tt,DocumentWrapper:ot,ErrorFormatter:rt,FlexBar:at,Form:lt,H1:nt,H2:st,H3:it,H4:dt,H5:ct,H6:pt,HR:ut,IconButton:mt,IconButtonSkeleton:bt,Icons:gt,Img:St,LI:Ct,Link:yt,ListItem:_t,Loader:Tt,OL:Et,P:ht,Placeholder:ft,Pre:Ot,ResetWrapper:kt,ScrollArea:Bt,Separator:d,Spaced:xt,Span:Rt,StorybookIcon:At,StorybookLogo:Dt,Symbols:Ft,SyntaxHighlighter:vt,TT:Pt,TabBar:It,TabButton:Lt,TabWrapper:Mt,Table:Ht,Tabs:Nt,TabsState:Wt,TooltipLinkList:Kt,TooltipMessage:m,TooltipNote:Yt,UL:Gt,WithTooltip:b,WithTooltipPure:wt,Zoom:zt,codeCommon:Ut,components:Vt,createCopyToClipboardFunction:jt,getStoryHref:qt,icons:Zt,interleaveSeparators:Jt,nameSpaceClassNames:Qt,resetComponents:Xt,withReset:$t}=__STORYBOOK_COMPONENTS__;var ao=__STORYBOOK_THEMING__,{CacheProvider:lo,ClassNames:no,Global:so,ThemeProvider:io,background:co,color:po,convert:uo,create:mo,createCache:bo,createGlobal:go,createReset:So,css:Co,darken:yo,ensure:_o,ignoreSsrWarning:To,isPropValid:Eo,jsx:ho,keyframes:fo,lighten:Oo,styled:c,themes:ko,typography:Bo,useTheme:xo,withTheme:Ro}=__STORYBOOK_THEMING__;var g="@geometricpanda/storybook-addon-badges",y=g,_="Storybook Addon Badges",T="badgesConfig",S="badges",C={default:{title:"Badge"},beta:{title:"Beta",styles:{backgroundColor:"#D6E0FF",borderColor:"#2952CC",color:"#2952CC"}},stable:{title:"Stable",styles:{backgroundColor:"#DCF2EA",borderColor:"#317159",color:"#317159"}},"needs-revision":{title:"Needs Revision",styles:{backgroundColor:"#FFEFD2",borderColor:"#66460D",color:"#66460D"}},obsolete:{title:"Obsolete",styles:{backgroundColor:"#F9DADA",borderColor:"#7D2828",color:"#7D2828"}},experimental:{title:"Experimental",styles:{backgroundColor:"#E7E4F9",borderColor:"#6E62B6",color:"#6E62B6"}},deprecated:{title:"Deprecated",styles:{backgroundColor:"#F8E3DA",borderColor:"#85462B",color:"#85462B"}}},E=C.default,h=({tooltip:e,children:o})=>{let r=t.createElement(m,{...typeof e=="string"?{desc:e}:e});return t.createElement(b,{tooltip:r},o)},f=c.span(({config:{styles:e}})=>({borderColor:e?.borderColor||"#474D66",borderRadius:e?.borderRadius||"3px",borderStyle:e?.borderStyle||"solid",borderWidth:e?.borderWidth||"1px",color:e?.color||"#474D66",backgroundColor:e?.backgroundColor||"#EDEFF5",fontSize:e?.fontSize||"0.625rem",fontFamily:e?.fontFamily||"inherit",fontWeight:e?.fontWeight||"bold",lineHeight:e?.lineHeight||"1",textTransform:e?.textTransform||"uppercase",paddingInline:e?.paddingInline||"5px",paddingBlock:e?.paddingBlock||"2px",display:"block"})),O=({badge:e})=>{let o=i().getCurrentParameter(T)||{},r={...C,...o}[e]||E,p=()=>t.createElement(f,{config:r},r.title);return r.tooltip?t.createElement(h,{tooltip:r.tooltip},t.createElement(p,null)):t.createElement(p,null)},k=c.div(({theme:e})=>({gap:e.layoutMargin,paddingInline:e.layoutMargin/2,display:"flex",alignItems:"center"})),B=({badges:e})=>t.createElement(t.Fragment,null,t.createElement(d,null),t.createElement(k,null,e.map(o=>t.createElement(O,{key:o,badge:o}))),t.createElement(d,null)),x=function(){let e=i().getCurrentParameter(S)||[];return t.createElement(B,{badges:e})};s.register(g,()=>{s.add(y,{type:u.TOOL,paramKey:S,title:_,match:()=>!0,render:x})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
