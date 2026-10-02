import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r,n as i,r as a,t as o}from"./iframe-CxYcUItw.js";import{n as s,t as c}from"./clsx-CU3OJm-u.js";import{i as l,r as u,t as d}from"./logging-rNM_k4ml.js";import{i as ee,n as f,t as p}from"./Icon-DJYKhM6X.js";import{n as m}from"./Text-s7d_e173.js";import{t as h}from"./Text-4jUaZiwM.js";import{C as g,E as te,T as ne,t as re,w as ie}from"./headlessui.esm-lK-9xKHu.js";import{t as _}from"./Button-B9L7vEj2.js";import{t as ae}from"./Button-Czofd_Br.js";import{t as v}from"./Heading-Cx0nZAi1.js";import{t as oe}from"./Heading-BmGY1R4y.js";import{t as y}from"./ButtonGroup-CHAixHud.js";import{t as se}from"./ButtonGroup-VlQiDc46.js";import{t as ce}from"./ScrollWrapper-BZO5PxEf.js";import{t as le}from"./ScrollWrapper-BYropxAZ.js";import{n as ue,t as de}from"./semanticIconOverrides-CAkf2_aJ.js";var b,x,S,C,w,fe=t((()=>{b=`_modal_1rxac_10`,x=`_modal__overlay_1rxac_11`,S=`_modal__panel_1rxac_46`,C=`_modal__content_1rxac_74`,w={modal:b,modal__overlay:x,"fade-in":`_fade-in_1rxac_1`,modal__panel:S,"rotate-panel":`_rotate-panel_1rxac_1`,modal__content:C,"modal__content--is-open":`_modal__content--is-open_1rxac_107`,"modal-header":`_modal-header_1rxac_114`,"modal-title":`_modal-title_1rxac_120`,"modal-sub-title":`_modal-sub-title_1rxac_124`,"modal-body":`_modal-body_1rxac_131`,"modal-footer":`_modal-footer_1rxac_150`,"modal__transition--enter":`_modal__transition--enter_1rxac_162`,"modal__transition--enterFrom":`_modal__transition--enterFrom_1rxac_170`,"modal__transition--enterTo":`_modal__transition--enterTo_1rxac_174`,"modal__transition--leave":`_modal__transition--leave_1rxac_178`,"modal__transition--leaveFrom":`_modal__transition--leaveFrom_1rxac_186`,"modal__transition--leaveTo":`_modal__transition--leaveTo_1rxac_190`,"modal__content-transition--enter":`_modal__content-transition--enter_1rxac_194`,"modal__content-transition--enterFrom":`_modal__content-transition--enterFrom_1rxac_202`,"modal__content-transition--enterTo":`_modal__content-transition--enterTo_1rxac_206`,"modal__content-transition--leave":`_modal__content-transition--leave_1rxac_210`,"modal__content-transition--leaveFrom":`_modal__content-transition--leaveFrom_1rxac_218`,"modal__content-transition--leaveTo":`_modal__content-transition--leaveTo_1rxac_222`,"modal__content--full":`_modal__content--full_1rxac_226`,"modal__content--lg":`_modal__content--lg_1rxac_240`,"modal__content--sm":`_modal__content--sm_1rxac_285`,"modal__close-button":`_modal__close-button_1rxac_323`}}));function pe(e){return T.Children.toArray(e).some(e=>{if(typeof e!=`object`||!(`props`in e))return!1;let{children:t}=e.props;return e.type&&typeof e.type!=`string`&&(e.type?.name===`ModalTitle`||e.type?.name===`Modal.Title`)?!0:t?pe(t):!1})}function me(e){return T.Children.toArray(e).some(e=>T.isValidElement(e)?e.type===T.Fragment?me(e.props.children):e.type!==M&&e.type!==A&&e.type!==j:!0)}var T,E,D,O,k,A,j,M,N,P,he=t((()=>{re(),s(),T=e(r()),l(),ae(),oe(),p(),le(),h(),fe(),E=n(),D=`600px`,O=e=>{let{children:t,className:n,hideCloseButton:r=!1,open:i,onClose:a,size:o=`lg`,height:s,overlayEmphasis:l,...f}=e;u(`Modal/.Content`,`height`,`It manages its own height now: the body scrolls once the content outgrows the space the header and footer leave over.`,s),u(`Modal/.Content`,`overlayEmphasis`,`Every modal draws the low-emphasis overlay now.`,l),d([me(t)],`Modal only takes Modal.Header, Modal.Body, and Modal.Footer as direct children. The modal lays out and scrolls those three sections, so anything else placed alongside them breaks that layout. Move the content into one of the sections, usually Modal.Body.`,`error`);let p=c(w.modal__content,o&&w[`modal__content--${o}`],i&&w[`modal__content--is-open`],n),m=ee(`close`),h=T.useRef(null),g=f.style?.maxHeight;return T.useEffect(()=>{let e=h.current;if(!e||o!==`lg`||g!==void 0)return;let t=Array.from(e.querySelectorAll(`:scope > .${w[`modal-header`]}, :scope > .${w[`modal-footer`]}`)),n=e.querySelector(`:scope > .${w[`modal-body`]} > * > *`),r=``,i=t=>{r=t,e.style.maxHeight=t},a=e=>{let t=Array.from(e.children).filter(e=>e.getClientRects().length>0),n=t[0],r=t[t.length-1];if(!n){let t=document.createRange();return t.selectNodeContents(e),t.getBoundingClientRect().height}return r.getBoundingClientRect().bottom-n.getBoundingClientRect().top+parseFloat(getComputedStyle(n).marginTop)+parseFloat(getComputedStyle(r).marginBottom)},s=()=>{if(!window.matchMedia(`(min-width: ${D})`).matches){i(``);return}let r=n?e.offsetHeight-n.clientHeight:t.reduce((e,t)=>{let{marginTop:n,marginBottom:r}=getComputedStyle(t);return e+t.offsetHeight+parseFloat(n)+parseFloat(r)},0)+e.offsetHeight-e.clientHeight,o=n?a(n):0,s=e.querySelector(`:scope > .${w[`modal__close-button`]}`),c=s?s.offsetTop+s.offsetHeight+e.offsetHeight-e.clientHeight:0,l=Math.max(r+o+4,c);i(l<window.innerHeight-parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--eds-spacing-size-12`))?`${l}px`:``)};s();let c=typeof ResizeObserver>`u`?void 0:new ResizeObserver(s),l=()=>[e,...t,...n?[n,...Array.from(n.children)]:[]].forEach(e=>c?.observe(e));l();let u=new MutationObserver(()=>{c?.disconnect(),l(),s()});return n&&u.observe(n,{attributeFilter:[`class`,`style`],characterData:!0,childList:!0,subtree:!0}),window.addEventListener(`resize`,s),()=>{c?.disconnect(),u.disconnect(),window.removeEventListener(`resize`,s),e.style.maxHeight===r&&(e.style.maxHeight=``)}},[t,g,o]),(0,E.jsxs)(`div`,{className:p,ref:h,...f,children:[!r&&(0,E.jsx)(_,{"aria-label":`close`,className:w[`modal__close-button`],context:`default`,icon:m,iconLayout:`icon-only`,onClick:a,rank:`tertiary`,variant:`neutral`}),t]})},k=e=>{let{"aria-label":t,initialFocus:n,modalContainerClassName:r,onClose:i,open:a,...o}=e;d([!pe(o.children)&&!t],`You must use the Modal.Title helper component or pass in an aria-label when using the Modal. The Modal uses the Modal.Title to describe the modal to screen readers using aria-labelledby. If you're not using the Modal.Title component, you can pass in an aria-label instead.`,`error`);let s=c(w.modal,r);return(0,E.jsx)(te,{as:T.Fragment,enter:w[`modal__transition--enter`],enterFrom:w[`modal__transition--enterFrom`],enterTo:w[`modal__transition--enterTo`],leave:w[`modal__transition--leave`],leaveFrom:w[`modal__transition--leaveFrom`],leaveTo:w[`modal__transition--leaveTo`],show:a,children:(0,E.jsxs)(ie,{"aria-label":t,className:s,initialFocus:n,onClose:i,children:[(0,E.jsx)(`div`,{className:w.modal__overlay}),(0,E.jsx)(ne,{className:w.modal__panel,children:(0,E.jsx)(O,{onClose:i,open:a,...o})})]})})},A=e=>{let{children:t,className:n,height:r,...i}=e;return u(`Modal.Body`,`height`,`The body scrolls its own content, at every modal size.`,r),(0,E.jsx)(`div`,{className:c(w[`modal-body`],n),...i,children:(0,E.jsx)(ce,{shadowType:`contain`,children:t})})},j=({children:e,className:t,...n})=>(0,E.jsx)(`div`,{className:c(w[`modal-footer`],t),...n,children:e}),M=({children:e,className:t,...n})=>(0,E.jsx)(`div`,{className:c(w[`modal-header`],t),...n,children:e}),N=({children:e,className:t,preset:n=`title-lg`,...r})=>{let i=c(w[`modal-title`],t);return(0,E.jsx)(g,{as:T.Fragment,children:(0,E.jsx)(v,{as:`h2`,className:i,preset:n,...r,children:e})})},P=({children:e,className:t,preset:n=`body-md`,...r})=>(0,E.jsx)(m,{as:`div`,className:c(w[`modal-sub-title`],t),preset:n,...r,children:e}),k.displayName=`Modal`,N.displayName=`Modal.Title`,P.displayName=`Modal.SubTitle`,A.displayName=`Modal.Body`,j.displayName=`Modal.Footer`,k.Header=M,k.Content=O,k.Title=N,k.SubTitle=P,k.Body=A,k.Footer=j;try{k.displayName=`Modal`,k.__docgenInfo={description:`## Usage

| Type/Use | Description | Example |
|----------|-------------|---------|
| Standard | Central overlay with focus trap, used for focused tasks or messages. | Form entry; settings dialogs; confirmations. |
| Confirmation | Asks the user to confirm or cancel a critical action. | Deletion prompts; submitting irreversible actions. |
| Alert | Displays an important message, usually with a single dismiss button. | Error notifications; access denied messages. |
| Full-screen | Takes up the entire viewport for complex or immersive tasks. | Onboarding; mobile workflows; media viewers. |
| Success/Feedback | Provides positive feedback after a completed action. | Success confirmation; "Thanks for submitting" messages. |

### Best Practices

* Modals are disruptive and should be used sparingly.
* Use a modal to request minimal amounts of information from a user. Don't request large forms of information inside a modal.
* Don't use a modal when a separate, designated URL is desired.
* Show one modal at a time. Don't place a modal on top of another modal. This can create usability issues.
* For important error notifications, use Inline Notification or Banner.
* For short messaging confirming successful interactions, such as "Email sent", use Inline Notification or Toast.

## Content & Accessibility

### Do's

* Use a primary title, body text, and a primary CTA. All other modal content is optional.
* Use a verb-noun question or statement for the primary title.
* Ensure people can scan the heading and CTAs and know what to do even if they skip the body text.
* Keep primary titles and subtitles to a max of 2 lines each.
* Use either a short phrase or a full sentence for subtitles.
* Keep section titles to less than 1 line; preferably a short phrase.
* Break up information with section titles for scanability.
* Try to avoid scrolling text within a modal.

### Don'ts

* Include long headings or body text. The more words, the less likely people are to read any of it.
* Include long passages of informative text in a modal. Use a short summary and then link to a help article, FAQ etc.
* Avoid applying inline stylistic modifications to the Modal.Title sub-component. Use the defaults or preset props where present.

## Resources

* https://headlessui.dev/react/dialog`,displayName:`Modal`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{"aria-label":{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Optional aria-label for the modal.

If undefined, the headingText of the Modal.Header will be used.
If there is no Modal.Header, an aria-label is required.`,name:`aria-label`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Additional classnames passed in for styling.`,name:`className`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:"Contents of the modal. Only `Modal.Header`, `Modal.Body`, and `Modal.Footer` are allowed\nas direct children; anything else logs an error.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},hideCloseButton:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Hides the close button in the top right of the modal.

**Default is \`false\`**.`,name:`hideCloseButton`,required:!1,tags:{},type:{name:`boolean`}},initialFocus:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`A ref to an element that should receive focus when the modal first opens.

If undefined, the first focusable element (usually the close button) will be used.

\`\`\`
const inputFieldRef = useRef();

<Modal initialFocus={inputFieldRef}>
  ...
  <InputField ref={inputFieldRef} />
</Modal>
\`\`\``,name:`initialFocus`,required:!1,tags:{},type:{name:`MutableRefObject<HTMLElement | null>`}},onClose:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Method called when the close button is clicked. Use this to hide the modal.
This should be used to also reset the \`open\` state.

This is required even if you don't have a close button so the ESC key can close the modal.

Closing is cancellable by passing in a function that returns \`void\` or by not altering the state.

\`\`\`
const [isOpen, setIsOpen] = useState(true);
// ....

<Modal open={isOpen} onClose={() => setIsOpen(false)}>
 ...
</Modal>
\`\`\``,name:`onClose`,required:!0,tags:{},type:{name:`() => void`}},style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`CSS properties defined for the modal's content element. Includes the component's CSS Custom Properties:

- \`--modal-content__border\``,name:`style`,required:!1,tags:{},type:{name:`ModalContentCSSProperties`}},open:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:"Whether or not the modal is visible. Recommend using `useState` to set this\nvariable instead of a boolean literal, to avoid component control issues.",name:`open`,required:!1,tags:{see:`https://headlessui.com/react/dialog

\`\`\`
const [isOpen, setIsOpen] = useState(true);
// ....

<Modal open={isOpen}>
...
</Modal>
\`\`\``},type:{name:`boolean`}},size:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`The modal's footprint at each breakpoint:
- \`"sm"\` is a compact floating surface that sizes to its content, up to 480px tall
- \`"lg"\` fills the viewport at the smallest breakpoint. Above it, it sizes to its content,
  up to the viewport height less a margin
- \`"full"\` takes the whole viewport at every breakpoint

Height is managed for you at all three. The body takes whatever space the header and
footer leave over and scrolls once the content outgrows it, so the actions stay on screen
however long the content runs. The exception is a viewport under 320px tall, too short to
seat the header and footer and still leave a body worth scrolling, where the modal scrolls
as a whole instead and the footer does go off screen.

**Default is \`"lg"\`**.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "lg" | "full"`,value:[{value:`"sm"`},{value:`"lg"`},{value:`"full"`}]}},modalContainerClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Additional classnames passed in for the modal container.`,name:`modalContainerClassName`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{k.Header.displayName=`Modal.Header`,k.Header.__docgenInfo={description:`Component defines the Header section of the modal.`,displayName:`Modal.Header`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Child node(s) to place inside the Modal header.
Should include the <Modal.Title>`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{k.Content.displayName=`Modal.Content`,k.Content.__docgenInfo={description:`The actual modal, without the dark overlay behind it.

This is only exported for testing purposes; please do not import and use this directly.`,displayName:`Modal.Content`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{"aria-label":{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Optional aria-label for the modal.

If undefined, the headingText of the Modal.Header will be used.
If there is no Modal.Header, an aria-label is required.`,name:`aria-label`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Additional classnames passed in for styling.`,name:`className`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:"Contents of the modal. Only `Modal.Header`, `Modal.Body`, and `Modal.Footer` are allowed\nas direct children; anything else logs an error.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},hideCloseButton:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Hides the close button in the top right of the modal.

**Default is \`false\`**.`,name:`hideCloseButton`,required:!1,tags:{},type:{name:`boolean`}},initialFocus:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`A ref to an element that should receive focus when the modal first opens.

If undefined, the first focusable element (usually the close button) will be used.

\`\`\`
const inputFieldRef = useRef();

<Modal initialFocus={inputFieldRef}>
  ...
  <InputField ref={inputFieldRef} />
</Modal>
\`\`\``,name:`initialFocus`,required:!1,tags:{},type:{name:`MutableRefObject<HTMLElement | null>`}},onClose:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Method called when the close button is clicked. Use this to hide the modal.
This should be used to also reset the \`open\` state.

This is required even if you don't have a close button so the ESC key can close the modal.

Closing is cancellable by passing in a function that returns \`void\` or by not altering the state.

\`\`\`
const [isOpen, setIsOpen] = useState(true);
// ....

<Modal open={isOpen} onClose={() => setIsOpen(false)}>
 ...
</Modal>
\`\`\``,name:`onClose`,required:!0,tags:{},type:{name:`() => void`}},style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`CSS properties defined for the modal's content element. Includes the component's CSS Custom Properties:

- \`--modal-content__border\``,name:`style`,required:!1,tags:{},type:{name:`ModalContentCSSProperties`}},open:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`The modal's footprint at each breakpoint:
- \`"sm"\` is a compact floating surface that sizes to its content, up to 480px tall
- \`"lg"\` fills the viewport at the smallest breakpoint. Above it, it sizes to its content,
  up to the viewport height less a margin
- \`"full"\` takes the whole viewport at every breakpoint

Height is managed for you at all three. The body takes whatever space the header and
footer leave over and scrolls once the content outgrows it, so the actions stay on screen
however long the content runs. The exception is a viewport under 320px tall, too short to
seat the header and footer and still leave a body worth scrolling, where the modal scrolls
as a whole instead and the footer does go off screen.

**Default is \`"lg"\`**.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "lg" | "full"`,value:[{value:`"sm"`},{value:`"lg"`},{value:`"full"`}]}}},tags:{}}}catch{}try{k.Title.displayName=`Modal.Title`,k.Title.__docgenInfo={description:`Component defines the Title section of the modal.`,displayName:`Modal.Title`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Heading/Heading.tsx`,name:`TypeLiteral`}],description:'Which `h1`-`h6` tag renders. Pick it from the document structure, by the level\nthe page outline calls for, not by the size you want. Each level brings its own\ndefault preset, which `preset` can override.\n\n**Default is `"h1"`**.',name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`HeadingElement`,value:[{value:`"h1"`},{value:`"h2"`},{value:`"h3"`},{value:`"h4"`},{value:`"h5"`},{value:`"h6"`}]}},preset:{defaultValue:{value:`body-md`},declarations:[{fileName:`edu-design-system/src/components/Heading/Heading.tsx`,name:`TypeLiteral`}],description:`Which typography treatment renders. Pick it from the design, and only when the
design asks for something other than the default for the level set by \`as\`. It
changes the treatment alone, never which tag renders.

For details, see https://chanzuckerberg.github.io/edu-design-system/?path=/story/design-tokens-tier-2-usage--typography`,name:`preset`,required:!1,tags:{},type:{name:`enum`,raw:`"headline-xl" | "headline-lg" | "headline-md" | "headline-sm" | "headline-decorative-md" | "title-xl" | "title-lg" | "title-md" | "title-sm" | "title-xs" | "body-xl" | "body-xl-bold" | ... 22 more ...`,value:[{value:`"headline-xl"`},{value:`"headline-lg"`},{value:`"headline-md"`},{value:`"headline-sm"`},{value:`"headline-decorative-md"`},{value:`"title-xl"`},{value:`"title-lg"`},{value:`"title-md"`},{value:`"title-sm"`},{value:`"title-xs"`},{value:`"body-xl"`},{value:`"body-xl-bold"`},{value:`"body-lg"`},{value:`"body-lg-bold"`},{value:`"body-md"`},{value:`"body-md-bold"`},{value:`"body-sm"`},{value:`"body-sm-bold"`},{value:`"body-xs"`},{value:`"body-xs-bold"`},{value:`"label-xl"`},{value:`"label-lg"`},{value:`"label-md"`},{value:`"label-sm"`},{value:`"overline-lg"`},{value:`"overline-md"`},{value:`"overline-sm"`},{value:`"caption-md"`},{value:`"caption-sm"`},{value:`"code-xl"`},{value:`"code-lg"`},{value:`"code-md"`},{value:`"code-sm"`},{value:`"code-xs"`}]}}},tags:{}}}catch{}try{k.SubTitle.displayName=`Modal.SubTitle`,k.SubTitle.__docgenInfo={description:``,displayName:`Modal.SubTitle`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Text/Text.tsx`,name:`TypeLiteral`}],description:'Controls which component to use when rendering copy: e.g., `p` or `span`.\n\n**Default is `"p"`**.',name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`"div" | "p" | "span"`,value:[{value:`"div"`},{value:`"p"`},{value:`"span"`}]}},children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Text/Text.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Contents for the modal title.`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Text/Text.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},tabIndex:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Text/Text.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`tabIndex`,required:!1,tags:{},type:{name:`number`}},preset:{defaultValue:{value:`body-md`},declarations:[{fileName:`edu-design-system/src/components/Text/Text.tsx`,name:`TypeLiteral`}],description:`Prop to set the desired typography value used in design. Acceptable values
match those used across the design system.`,name:`preset`,required:!1,tags:{},type:{name:`enum`,raw:`"headline-xl" | "headline-lg" | "headline-md" | "headline-sm" | "headline-decorative-md" | "title-xl" | "title-lg" | "title-md" | "title-sm" | "title-xs" | "body-xl" | "body-xl-bold" | ... 22 more ...`,value:[{value:`"headline-xl"`},{value:`"headline-lg"`},{value:`"headline-md"`},{value:`"headline-sm"`},{value:`"headline-decorative-md"`},{value:`"title-xl"`},{value:`"title-lg"`},{value:`"title-md"`},{value:`"title-sm"`},{value:`"title-xs"`},{value:`"body-xl"`},{value:`"body-xl-bold"`},{value:`"body-lg"`},{value:`"body-lg-bold"`},{value:`"body-md"`},{value:`"body-md-bold"`},{value:`"body-sm"`},{value:`"body-sm-bold"`},{value:`"body-xs"`},{value:`"body-xs-bold"`},{value:`"label-xl"`},{value:`"label-lg"`},{value:`"label-md"`},{value:`"label-sm"`},{value:`"overline-lg"`},{value:`"overline-md"`},{value:`"overline-sm"`},{value:`"caption-md"`},{value:`"caption-sm"`},{value:`"code-xl"`},{value:`"code-lg"`},{value:`"code-md"`},{value:`"code-sm"`},{value:`"code-xs"`}]}}},tags:{}}}catch{}try{k.Body.displayName=`Modal.Body`,k.Body.__docgenInfo={description:`Component defines the body of the modal.

The body scrolls its content, so however long that content is, it does not push the header
and footer off the viewport. Below 320px of viewport height there is no room to scroll the
body within and the modal scrolls as a whole, which is the one case where the footer does
move off screen.

\`ScrollWrapper\` leaves the region it scrolls in the tab order, which is how a keyboard user
reaches the rest of it; this element only sizes that region, so it stays out of the tab
order itself.`,displayName:`Modal.Body`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:"Child node(s) that can be nested inside component. `Modal.Header`,\n`Modal.Body`, and `Modal.Footer` are the only permissible children of the Modal.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{k.Footer.displayName=`Modal.Footer`,k.Footer.__docgenInfo={description:`Component defines the Footer section of the modal.`,displayName:`Modal.Footer`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Child node(s) to place inside the Modal footer.`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}}));function F(e){let[t,n]=(0,I.useState)(!1);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{className:`fpo mb-spacing-size-3`,children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa, quis iure eligendi voluptates delectus earum suscipit porro exercitationem asperiores voluptatibus repellat saepe neque nisi quidem repellendus temporibus accusamus ea officiis illo unde illum mollitia eos consectetur. Possimus, eaque nihil?`}),(0,L.jsx)(`div`,{className:`flex justify-center`,children:(0,L.jsx)(_,{onClick:()=>n(!0),rank:`primary`,children:`Open the modal`})}),(0,L.jsx)(k,{...e,onClose:()=>n(!1),open:t})]})}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ge;t((()=>{r(),I=e(r()),he(),oe(),h(),ue(),i(),ae(),se(),p(),L=n(),{userEvent:R}=__STORYBOOK_MODULE_TEST__,z={title:`Components/Modal`,component:k,parameters:{docs:{subtitle:`Modals display content on top of the page in a separate container, blocking the content underneath. They require user action and can be used to deliver a message or help a user complete a task.`},chromatic:{delay:500,prefersReducedMotion:`reduce`},layout:`fullscreen`},tags:[`autodocs`,`version:4.0.1`]},B={parameters:{layout:`centered`,snapshot:{skip:!0}},render:e=>(0,L.jsxs)(F,{...e,children:[(0,L.jsxs)(k.Header,{children:[(0,L.jsx)(k.Title,{children:`Modal title`}),(0,L.jsx)(k.SubTitle,{children:`Modal Sub-title`})]}),(0,L.jsx)(k.Body,{children:(0,L.jsx)(`div`,{className:`fpo`,children:`Modal Content`})}),(0,L.jsx)(k.Footer,{children:(0,L.jsxs)(y,{children:[(0,L.jsx)(_,{onClick:()=>{},rank:`primary`,children:`Primary`}),(0,L.jsx)(_,{onClick:()=>{},rank:`secondary`,children:`Secondary`})]})})]}),play:async()=>{await R.tab(),await R.keyboard(` `,{delay:150})}},V={args:{size:`full`},parameters:B.parameters,render:e=>(0,L.jsxs)(F,{...e,children:[(0,L.jsxs)(k.Header,{children:[(0,L.jsx)(k.Title,{children:`Modal title`}),(0,L.jsx)(k.SubTitle,{children:`Modal title`})]}),(0,L.jsx)(k.Body,{children:(0,L.jsx)(`div`,{className:`fpo h-full w-full`,children:`Modal Content`})}),(0,L.jsx)(k.Footer,{children:(0,L.jsxs)(y,{children:[(0,L.jsx)(_,{onClick:()=>{},rank:`primary`,children:`Primary`}),(0,L.jsx)(_,{onClick:()=>{},rank:`secondary`,children:`Secondary`})]})})]})},H={args:{size:`lg`},parameters:B.parameters,render:e=>(0,L.jsxs)(F,{...e,children:[(0,L.jsxs)(k.Header,{children:[(0,L.jsx)(k.Title,{children:`Modal title`}),(0,L.jsx)(k.SubTitle,{children:`Modal Sub-title`})]}),(0,L.jsxs)(k.Body,{children:[(0,L.jsx)(v,{as:`h3`,children:`Title text`}),(0,L.jsx)(m,{as:`p`,preset:`body-lg`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam diam quis dolor maximus, non tincidunt lacus facilisis. Praesent ac vestibulum diam. Sed ac orci fringilla, ullamcorper quam nec, elementum turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur et vulputate leo. Phasellus convallis ante at augue iaculis, quis consectetur dolor placerat. Nulla ornare malesuada elit eu faucibus. Mauris ultricies tincidunt eleifend. Aliquam erat volutpat. Morbi nec ipsum sed sem facilisis tristique nec et ligula. Vivamus id feugiat sapien.`}),(0,L.jsx)(v,{as:`h3`,children:`Title text`}),(0,L.jsx)(m,{as:`p`,preset:`body-lg`,children:`Nam ac tincidunt arcu. Nam non metus sem. Morbi eleifend metus vel venenatis accumsan. Vestibulum pharetra, ante quis sollicitudin aliquam, orci ex pretium ipsum, congue rhoncus dui orci sed velit. Cras ac leo vel massa rutrum auctor eget sed orci. Aenean id nisi consectetur, dapibus tellus ut, finibus metus. Integer tristique est vitae lectus suscipit, ut vulputate est fringilla. Donec pharetra facilisis erat at venenatis. Etiam faucibus dignissim leo eget congue. Sed vehicula imperdiet neque id gravida. Proin volutpat tortor quis quam molestie, faucibus condimentum ante sagittis. Suspendisse sit amet luctus tellus. Suspendisse a sapien hendrerit eros dictum faucibus. Vivamus pretium vel sem faucibus tristique. Integer iaculis pellentesque nunc ac pellentesque.`}),(0,L.jsx)(v,{as:`h3`,children:`Title text`}),(0,L.jsx)(m,{as:`p`,preset:`body-lg`,children:`Integer mollis, urna eget sollicitudin laoreet, nunc elit facilisis urna, ut finibus est mi eu quam. Nam ac venenatis massa. Vestibulum suscipit ac ligula venenatis scelerisque. Fusce rutrum nulla lectus, sed dignissim ipsum faucibus sodales. Suspendisse id aliquet quam. Maecenas facilisis mauris dolor, id accumsan ex vehicula in. In nisl ligula, fringilla in enim nec, lobortis sollicitudin purus. Aliquam vehicula euismod enim quis finibus. Fusce ornare tortor malesuada, consequat magna quis, porta dolor. Donec quis nisl ac sem dictum semper quis vel turpis. Proin sed leo in ante rhoncus pellentesque a eu urna. Phasellus consequat lectus et hendrerit luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,L.jsx)(v,{as:`h3`,children:`Title text`}),(0,L.jsx)(m,{as:`p`,preset:`body-lg`,children:`Suspendisse vitae eros elit. Maecenas id urna tempus, tempus turpis id, blandit turpis. Fusce augue quam, pellentesque et suscipit consectetur, pharetra in mi. Suspendisse non ultricies purus. Integer dignissim condimentum sem ac porta. Vivamus viverra congue massa, vitae fermentum est scelerisque et. Duis a urna vitae odio semper dictum a sed nisl. In fringilla hendrerit massa, at luctus arcu tincidunt nec. Donec gravida, mauris sit amet porta lobortis, justo sem vehicula ipsum, at pretium sem leo sed libero. Morbi tristique rhoncus suscipit. Nullam at malesuada sapien. Nam in egestas tellus. Nulla quis metus dui. Suspendisse sit amet nisi at lectus ultricies egestas.`}),(0,L.jsx)(v,{as:`h3`,children:`Title text`}),(0,L.jsx)(m,{as:`p`,className:`mb-0`,preset:`body-lg`,children:`Integer pulvinar felis sit amet dignissim fermentum. Nulla sodales enim mi, varius feugiat sapien congue eget. Morbi vitae ipsum non ligula eleifend molestie. Aenean bibendum tortor sapien, quis volutpat ante ultricies id. Morbi varius dolor ac ante posuere, sit amet tincidunt lectus pulvinar. Proin id efficitur neque. Nullam vel feugiat dui. Curabitur imperdiet lacinia eros, ac iaculis odio. Praesent quis pretium sapien, quis posuere lectus. Proin eleifend purus nec massa aliquam commodo. Quisque auctor suscipit ex sed tristique. Sed eget ultrices est. Suspendisse nunc justo, dapibus at eros ac, rutrum vestibulum est.`})]}),(0,L.jsx)(k.Footer,{children:(0,L.jsxs)(y,{children:[(0,L.jsx)(_,{onClick:()=>{},rank:`primary`,children:`Primary`}),(0,L.jsx)(_,{onClick:()=>{},rank:`secondary`,children:`Secondary`})]})})]}),play:B.play},U={args:{size:`sm`},parameters:B.parameters,render:B.render,play:B.play},W={render:e=>(0,L.jsxs)(`div`,{className:`fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center`,children:[(0,L.jsx)(`div`,{className:`bg-utility-overlay-lowEmphasis absolute h-[100vh] w-full opacity-50`}),(0,L.jsx)(k.Content,{...e,"data-testid":`non-interactive`,onClose:()=>{}})]}),args:{children:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(k.Header,{children:[(0,L.jsx)(v,{as:`h2`,className:`text-utility-default-primary`,preset:`title-lg`,children:`Modal Title`}),(0,L.jsx)(k.SubTitle,{children:`Modal Sub-title`})]}),(0,L.jsx)(k.Body,{children:(0,L.jsx)(`div`,{className:`fpo h-full w-full`,children:`Modal Content`})}),(0,L.jsx)(k.Footer,{children:(0,L.jsxs)(y,{children:[(0,L.jsx)(_,{onClick:()=>{},rank:`primary`,children:`Primary`}),(0,L.jsx)(_,{onClick:()=>{},rank:`secondary`,children:`Secondary`})]})})]}),hideCloseButton:!1,open:!0},parameters:{chromatic:{disableSnapshot:!1},snapshot:{skip:!0}}},G={...W,args:{...W.args,size:`lg`}},K={...W,args:{...W.args,size:`sm`},parameters:{...W.parameters,chromatic:{disableSnapshot:!1,viewports:[o.googlePixel2,o.ipadMini,o.ipadPro,o.chromebook,o.macbookPro]}}},q={...W,args:{...W.args,size:`lg`,children:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(k.Header,{children:[(0,L.jsx)(v,{as:`h2`,className:`text-utility-default-primary`,preset:`title-lg`,children:`Modal Title`}),(0,L.jsx)(k.SubTitle,{children:`Modal Sub-title`})]}),(0,L.jsx)(k.Body,{children:(0,L.jsx)(`div`,{className:`fpo h-full w-full`,children:`Modal Content`})}),(0,L.jsx)(k.Footer,{children:(0,L.jsxs)(y,{buttonLayout:`vertical`,children:[(0,L.jsx)(_,{isFullWidth:!0,onClick:()=>{},rank:`primary`,children:`Primary`}),(0,L.jsx)(_,{isFullWidth:!0,onClick:()=>{},rank:`secondary`,children:`Secondary`})]})})]})},render:e=>(0,L.jsxs)(`div`,{className:`fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center`,children:[(0,L.jsx)(`div`,{className:`bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50`}),(0,L.jsx)(k.Content,{...e,"data-testid":`non-interactive`,onClose:()=>{}})]})},J={...W,args:{...W.args,size:`lg`,children:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(k.Header,{children:[(0,L.jsx)(v,{as:`h2`,className:`text-utility-default-primary`,preset:`title-lg`,children:`Modal Title`}),(0,L.jsx)(k.SubTitle,{children:`Modal Sub-title`})]}),(0,L.jsx)(k.Body,{children:(0,L.jsx)(`div`,{className:`fpo h-full w-full`,children:`Modal Content`})}),(0,L.jsx)(k.Footer,{children:(0,L.jsxs)(y,{buttonLayout:`vertical`,children:[(0,L.jsx)(_,{isFullWidth:!0,onClick:()=>{},rank:`primary`,children:`Primary`}),(0,L.jsx)(_,{isFullWidth:!0,onClick:()=>{},rank:`tertiary`,children:`Tertiary`})]})})]})},render:e=>(0,L.jsxs)(`div`,{className:`fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center`,children:[(0,L.jsx)(`div`,{className:`bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50`}),(0,L.jsx)(k.Content,{...e,"data-testid":`non-interactive`,onClose:()=>{}})]})},Y={...W,args:{...W.args,size:`lg`,children:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(k.Header,{children:[(0,L.jsx)(v,{as:`h2`,className:`text-utility-default-primary`,preset:`title-lg`,children:`Modal Title`}),(0,L.jsx)(k.SubTitle,{children:`Modal Sub-title`})]}),(0,L.jsx)(k.Body,{children:(0,L.jsx)(`div`,{className:`fpo h-full w-full`,children:`Modal Content`})}),(0,L.jsx)(k.Footer,{children:(0,L.jsx)(y,{children:(0,L.jsx)(_,{onClick:()=>{},rank:`primary`,variant:`critical`,children:`Critical Action`})})})]})},render:e=>(0,L.jsxs)(`div`,{className:`fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center`,children:[(0,L.jsx)(`div`,{className:`bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50`}),(0,L.jsx)(k.Content,{...e,"data-testid":`non-interactive`,onClose:()=>{}})]})},X={...W,parameters:{...W.parameters,viewport:{defaultViewport:`googlePixel2`},chromatic:{disableSnapshot:!1,viewports:[o.googlePixel2]}}},Z={...W,parameters:{...W.parameters,viewport:{defaultViewport:`mobilelandscape`,viewports:{mobilelandscape:{name:`Mobile Landscape`,styles:{width:`896px`,height:`414px`}}},chromatic:{disableSnapshot:!0}}}},Q={...W,parameters:{...W.parameters,viewport:{defaultViewport:`ipadMini`,viewports:{mobilelandscape:a.ipadMini}},chromatic:{disableSnapshot:!1,viewports:[o.ipadMini]}}},$={...W,decorators:[e=>(0,L.jsx)(f,{icons:de,children:e()})]},ge=[`Default`,`Full`,`LargeScrolling`,`Small`,`ContentDefault`,`ContentLarge`,`ContentSmall`,`LayoutVertical`,`LayoutVerticalWithTertiary`,`WithCriticalButton`,`Mobile`,`MobileLandscape`,`Tablet`,`WithProvidedIcons`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    snapshot: {
      skip: true
    }
  },
  render: args => <InteractiveExample {...args}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
      </Modal.Header>
      <Modal.Body>
        <div className="fpo">Modal Content</div>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button onClick={() => {}} rank="primary">
            Primary
          </Button>
          <Button onClick={() => {}} rank="secondary">
            Secondary
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </InteractiveExample>,
  play: async () => {
    await userEvent.tab();
    await userEvent.keyboard(' ', {
      delay: 150
    });
  }
}`,...B.parameters?.docs?.source},description:{story:`Clicking on a trigger item (in this case \`Button\`) will cause a modal to open.

**Note**: this only works from certain screens in Storybook. If it doesn't work as expected, view from the
"docs" sub-page.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'full'
  },
  parameters: Default.parameters,
  render: args => <InteractiveExample {...args}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <Modal.SubTitle>Modal title</Modal.SubTitle>
      </Modal.Header>
      <Modal.Body>
        <div className="fpo h-full w-full">Modal Content</div>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button onClick={() => {}} rank="primary">
            Primary
          </Button>
          <Button onClick={() => {}} rank="secondary">
            Secondary
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </InteractiveExample>
}`,...V.parameters?.docs?.source},description:{story:"`Modal` provides `size`, which allows control over the natural width of the modal. This does not affect the contents\nof the modal except to wrap text.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  parameters: Default.parameters,
  render: args => <InteractiveExample {...args}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
      </Modal.Header>
      <Modal.Body>
        <Heading as="h3">Title text</Heading>
        <Text as="p" preset="body-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam
          diam quis dolor maximus, non tincidunt lacus facilisis. Praesent ac
          vestibulum diam. Sed ac orci fringilla, ullamcorper quam nec,
          elementum turpis. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Curabitur et vulputate leo.
          Phasellus convallis ante at augue iaculis, quis consectetur dolor
          placerat. Nulla ornare malesuada elit eu faucibus. Mauris ultricies
          tincidunt eleifend. Aliquam erat volutpat. Morbi nec ipsum sed sem
          facilisis tristique nec et ligula. Vivamus id feugiat sapien.
        </Text>
        <Heading as="h3">Title text</Heading>
        <Text as="p" preset="body-lg">
          Nam ac tincidunt arcu. Nam non metus sem. Morbi eleifend metus vel
          venenatis accumsan. Vestibulum pharetra, ante quis sollicitudin
          aliquam, orci ex pretium ipsum, congue rhoncus dui orci sed velit.
          Cras ac leo vel massa rutrum auctor eget sed orci. Aenean id nisi
          consectetur, dapibus tellus ut, finibus metus. Integer tristique est
          vitae lectus suscipit, ut vulputate est fringilla. Donec pharetra
          facilisis erat at venenatis. Etiam faucibus dignissim leo eget congue.
          Sed vehicula imperdiet neque id gravida. Proin volutpat tortor quis
          quam molestie, faucibus condimentum ante sagittis. Suspendisse sit
          amet luctus tellus. Suspendisse a sapien hendrerit eros dictum
          faucibus. Vivamus pretium vel sem faucibus tristique. Integer iaculis
          pellentesque nunc ac pellentesque.
        </Text>
        <Heading as="h3">Title text</Heading>
        <Text as="p" preset="body-lg">
          Integer mollis, urna eget sollicitudin laoreet, nunc elit facilisis
          urna, ut finibus est mi eu quam. Nam ac venenatis massa. Vestibulum
          suscipit ac ligula venenatis scelerisque. Fusce rutrum nulla lectus,
          sed dignissim ipsum faucibus sodales. Suspendisse id aliquet quam.
          Maecenas facilisis mauris dolor, id accumsan ex vehicula in. In nisl
          ligula, fringilla in enim nec, lobortis sollicitudin purus. Aliquam
          vehicula euismod enim quis finibus. Fusce ornare tortor malesuada,
          consequat magna quis, porta dolor. Donec quis nisl ac sem dictum
          semper quis vel turpis. Proin sed leo in ante rhoncus pellentesque a
          eu urna. Phasellus consequat lectus et hendrerit luctus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Heading as="h3">Title text</Heading>
        <Text as="p" preset="body-lg">
          Suspendisse vitae eros elit. Maecenas id urna tempus, tempus turpis
          id, blandit turpis. Fusce augue quam, pellentesque et suscipit
          consectetur, pharetra in mi. Suspendisse non ultricies purus. Integer
          dignissim condimentum sem ac porta. Vivamus viverra congue massa,
          vitae fermentum est scelerisque et. Duis a urna vitae odio semper
          dictum a sed nisl. In fringilla hendrerit massa, at luctus arcu
          tincidunt nec. Donec gravida, mauris sit amet porta lobortis, justo
          sem vehicula ipsum, at pretium sem leo sed libero. Morbi tristique
          rhoncus suscipit. Nullam at malesuada sapien. Nam in egestas tellus.
          Nulla quis metus dui. Suspendisse sit amet nisi at lectus ultricies
          egestas.
        </Text>
        <Heading as="h3">Title text</Heading>
        <Text as="p" className="mb-0" preset="body-lg">
          Integer pulvinar felis sit amet dignissim fermentum. Nulla sodales
          enim mi, varius feugiat sapien congue eget. Morbi vitae ipsum non
          ligula eleifend molestie. Aenean bibendum tortor sapien, quis volutpat
          ante ultricies id. Morbi varius dolor ac ante posuere, sit amet
          tincidunt lectus pulvinar. Proin id efficitur neque. Nullam vel
          feugiat dui. Curabitur imperdiet lacinia eros, ac iaculis odio.
          Praesent quis pretium sapien, quis posuere lectus. Proin eleifend
          purus nec massa aliquam commodo. Quisque auctor suscipit ex sed
          tristique. Sed eget ultrices est. Suspendisse nunc justo, dapibus at
          eros ac, rutrum vestibulum est.
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button onClick={() => {}} rank="primary">
            Primary
          </Button>
          <Button onClick={() => {}} rank="secondary">
            Secondary
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </InteractiveExample>,
  play: Default.play
}`,...H.parameters?.docs?.source},description:{story:`\`Modal\` manages its own height. Content taller than the space available scrolls inside the
body, and the header and footer stay on screen while it does, so a long modal does not run
its actions off the bottom of the viewport.

Below 320px of viewport height there is no room to scroll the body within, and the modal
scrolls as a whole instead, which is the one case where the footer goes off screen.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  parameters: Default.parameters,
  render: Default.render,
  play: Default.play
}`,...U.parameters?.docs?.source},description:{story:`Small will always try to take up the least amount of space.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center">
      <div className="bg-utility-overlay-lowEmphasis absolute h-[100vh] w-full opacity-50" />
      <Modal.Content {...args} data-testid="non-interactive" onClose={() => {}} />
    </div>,
  args: {
    children: <>
        <Modal.Header>
          <Heading as="h2" className="text-utility-default-primary" preset="title-lg">
            Modal Title
          </Heading>
          <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="fpo h-full w-full">Modal Content</div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button onClick={() => {}} rank="primary">
              Primary
            </Button>
            <Button onClick={() => {}} rank="secondary">
              Secondary
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </>,
    hideCloseButton: false,
    open: true
  },
  parameters: {
    // This story shows the modal content by default, for visual regression testing purposes.
    chromatic: {
      disableSnapshot: false
    },
    snapshot: {
      skip: true
    }
  }
}`,...W.parameters?.docs?.source},description:{story:`The default modal experience's Content area (the modal itself). The following stories show how the modal
will render in various contexts and with various props set.

When viewing code, This will use \`<Header>\` directly, to demonstrate composition. When building \`Modal\`s, use
\`Modal.Title\` instead.

**NOTE**: The order of the buttons puts the primary to the far bottom and right of the modal, per
macOS conventions and style guide.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'lg'
  }
}`,...G.parameters?.docs?.source},description:{story:"`Modal` provides `size`, which allows control over the natural width of the modal. This does not affect the contents\nof the modal except to wrap text.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'sm'
  },
  parameters: {
    ...ContentDefault.parameters,
    chromatic: {
      disableSnapshot: false,
      viewports: [chromaticViewports.googlePixel2, chromaticViewports.ipadMini, chromaticViewports.ipadPro, chromaticViewports.chromebook, chromaticViewports.macbookPro]
    }
  }
}`,...K.parameters?.docs?.source},description:{story:'`Modal` also allows for `small`.\n\nUnlike `lg`, `size="sm"` never goes full-bleed and has a different width at each\nbreakpoint (480px max at the smallest, 480px through `md`, 560px at `lg` and up), so this\nsnapshots at every available viewport rather than the single default width.',...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'lg',
    children: <>
        <Modal.Header>
          <Heading as="h2" className="text-utility-default-primary" preset="title-lg">
            Modal Title
          </Heading>
          <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="fpo h-full w-full">Modal Content</div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup buttonLayout="vertical">
            <Button isFullWidth onClick={() => {}} rank="primary">
              Primary
            </Button>
            <Button isFullWidth onClick={() => {}} rank="secondary">
              Secondary
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </>
  },
  render: args => <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center">
      <div className="bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50" />
      <Modal.Content {...args} data-testid="non-interactive" onClose={() => {}} />
    </div>
}`,...q.parameters?.docs?.source},description:{story:"Buttons can have a vertical alignment in the footer. For this, use `ButtonGroup` with the `buttonLayout` = `vertical`.\nMake sure to match the Button width style by using `isFullWidth`.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'lg',
    children: <>
        <Modal.Header>
          <Heading as="h2" className="text-utility-default-primary" preset="title-lg">
            Modal Title
          </Heading>
          <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="fpo h-full w-full">Modal Content</div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup buttonLayout="vertical">
            <Button isFullWidth onClick={() => {}} rank="primary">
              Primary
            </Button>
            <Button isFullWidth onClick={() => {}} rank="tertiary">
              Tertiary
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </>
  },
  render: args => <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center">
      <div className="bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50" />
      <Modal.Content {...args} data-testid="non-interactive" onClose={() => {}} />
    </div>
}`,...J.parameters?.docs?.source},description:{story:"Buttons can have a vertical alignment in the footer. For this, use `ButtonGroup` with the `buttonLayout` = `vertical`.\nMake sure to match the Button width style by using `isFullWidth`.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'lg',
    children: <>
        <Modal.Header>
          <Heading as="h2" className="text-utility-default-primary" preset="title-lg">
            Modal Title
          </Heading>
          <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="fpo h-full w-full">Modal Content</div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button onClick={() => {}} rank="primary" variant="critical">
              Critical Action
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </>
  },
  render: args => <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center">
      <div className="bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50" />
      <Modal.Content {...args} data-testid="non-interactive" onClose={() => {}} />
    </div>
}`,...Y.parameters?.docs?.source},description:{story:`Modals can have destructive behavior. Use the 'critical' button variant.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  parameters: {
    ...ContentDefault.parameters,
    viewport: {
      defaultViewport: 'googlePixel2'
    },
    chromatic: {
      disableSnapshot: false,
      viewports: [chromaticViewports.googlePixel2]
    }
  }
}`,...X.parameters?.docs?.source},description:{story:`This shows the responsive layout in a mobile viewport`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  parameters: {
    ...ContentDefault.parameters,
    viewport: {
      defaultViewport: 'mobilelandscape',
      viewports: {
        mobilelandscape: {
          name: 'Mobile Landscape',
          styles: {
            width: '896px',
            height: '414px'
          }
        }
      },
      /**
       * Chromatic sets viewport height to 900px, hence won't snap as necessary
       */
      chromatic: {
        disableSnapshot: true
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`This shows the responsive layout in a mobile (landscape) viewport`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  parameters: {
    ...ContentDefault.parameters,
    viewport: {
      defaultViewport: 'ipadMini',
      viewports: {
        mobilelandscape: storybookViewports.ipadMini
      }
    },
    chromatic: {
      disableSnapshot: false,
      viewports: [chromaticViewports.ipadMini]
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`This shows the responsive layout in a tablet viewport`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...$.parameters?.docs?.source},description:{story:"The close button comes from `IconProvider`, so it is the same affordance as every other\nclose in the app rather than something set per modal.\n\nShown non-interactive, like the other `Modal.Content` stories.",...$.parameters?.docs?.description}}}}))();export{W as ContentDefault,G as ContentLarge,K as ContentSmall,B as Default,V as Full,H as LargeScrolling,q as LayoutVertical,J as LayoutVerticalWithTertiary,X as Mobile,Z as MobileLandscape,U as Small,Q as Tablet,Y as WithCriticalButton,$ as WithProvidedIcons,ge as __namedExportsOrder,z as default};