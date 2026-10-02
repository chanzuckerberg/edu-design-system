import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./clsx-CU3OJm-u.js";import{t as a}from"./Link-CsSjfkrQ.js";import{t as o}from"./Link-CigzUnLI.js";import{n as s,t as c}from"./Text.module-B6njPciW.js";import{n as l}from"./Text-s7d_e173.js";import{t as u}from"./Text-4jUaZiwM.js";import{t as d}from"./Hr-Bx6YzIjh.js";import{t as f}from"./Hr-BchyLD5g.js";import{t as p}from"./Heading-Cx0nZAi1.js";import{t as m}from"./Heading-BmGY1R4y.js";import{A as ee,C as h,D as g,E as _,F as v,I as y,M as b,N as x,O as S,P as C,S as w,T,_ as E,a as te,b as D,c as ne,d as re,f as ie,g as ae,h as O,i as oe,j as se,k,l as ce,m as le,o as ue,p as de,r as fe,s as pe,t as me,u as he,v as A,w as j,x as ge,y as M}from"./CodeBlock-CsbVKEuK.js";import{n as _e,t as ve}from"./List-iHwyci04.js";import{n as ye,t as be}from"./List-DJbaVjiR.js";function xe(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}var Se=e((()=>{}));function Ce(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}var we=e((()=>{}));function Te(e,t,n){let r=he((n||{}).ignore||[]),i=Ee(t),a=-1;for(;++a<i.length;)ne(e,`text`,o);function o(e,t){let n=-1,i;for(;++n<t.length;){let e=t[n],a=i?i.children:void 0;if(r(e,a?a.indexOf(e):void 0,i))return;i=e}if(i)return s(e,t)}function s(e,t){let n=t[t.length-1],r=i[a][0],o=i[a][1],s=0,c=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,i={index:d.index,input:d.input,stack:[...t,e]},a=o(...d,i);if(typeof a==`string`&&(a=a.length>0?{type:`text`,value:a}:void 0),a===!1?r.lastIndex=n+1:(s!==n&&u.push({type:`text`,value:e.value.slice(s,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),s=n+d[0].length,l=!0),!r.global)break;d=r.exec(e.value)}return l?(s<e.value.length&&u.push({type:`text`,value:e.value.slice(s)}),n.children.splice(c,1,...u)):u=[e],c+u.length}}function Ee(e){let t=[];if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([De(e[0]),Oe(e[1])])}return t}function De(e){return typeof e==`string`?new RegExp(Ce(e),`g`):e}function Oe(e){return typeof e==`function`?e:function(){return e}}var ke=e((()=>{we(),pe(),ce()})),Ae=e((()=>{ke()}));function je(){return{transforms:[Re],enter:{literalAutolink:Ne,literalAutolinkEmail:N,literalAutolinkHttp:N,literalAutolinkWww:N},exit:{literalAutolink:Le,literalAutolinkEmail:Ie,literalAutolinkHttp:Pe,literalAutolinkWww:Fe}}}function Me(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:P,notInConstruct:F},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:P,notInConstruct:F},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:P,notInConstruct:F}]}}function Ne(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function N(e){this.config.enter.autolinkProtocol.call(this,e)}function Pe(e){this.config.exit.autolinkProtocol.call(this,e)}function Fe(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function Ie(e){this.config.exit.autolinkEmail.call(this,e)}function Le(e){this.exit(e)}function Re(e){Te(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,ze],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Be]],{ignore:[`link`,`linkReference`]})}function ze(e,t,n,r,i){let a=``;if(!Ue(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!Ve(n)))return!1;let o=He(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function Be(e,t,n,r){return!Ue(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function Ve(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function He(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=xe(e,`(`),a=xe(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function Ue(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||g(n)||_(n))&&(!t||n!==47)}var P,F,We=e((()=>{Se(),y(),w(),Ae(),P=`phrasing`,F=[`autolink`,`link`,`image`,`label`]})),Ge=e((()=>{We()}));function Ke(){this.buffer()}function qe(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function Je(){this.buffer()}function Ye(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function Xe(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=k(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Ze(e){this.exit(e)}function Qe(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=k(this.sliceSerialize(e)).toLowerCase(),n.label=t}function $e(e){this.exit(e)}function et(){return`[`}function tt(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function nt(){return{enter:{gfmFootnoteCallString:Ke,gfmFootnoteCall:qe,gfmFootnoteDefinitionLabelString:Je,gfmFootnoteDefinition:Ye},exit:{gfmFootnoteCallString:Xe,gfmFootnoteCall:Ze,gfmFootnoteDefinitionLabelString:Qe,gfmFootnoteDefinition:$e}}}function rt(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:tt},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?at:it))),s(),o}}function it(e,t,n){return t===0?e:at(e,t,n)}function at(e,t,n){return(n?``:`    `)+e}var ot=e((()=>{y(),S(),tt.peek=et})),st=e((()=>{ot()}));function ct(){return{canContainEols:[`delete`],enter:{strikethrough:ut},exit:{strikethrough:dt}}}function lt(){return{unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:mt}],handlers:{delete:ft}}}function ut(e){this.enter({type:`delete`,children:[]},e)}function dt(e){this.exit(e)}function ft(e,t,n,r){let i=n.createTracker(r),a=n.enter(`strikethrough`),o=i.move(`~~`);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:`~`}),o+=i.move(`~~`),a(),o}function pt(){return`~`}var mt,ht=e((()=>{mt=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`],ft.peek=pt})),gt=e((()=>{ht()}));function _t(e){return e.length}function vt(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||_t,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=yt(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=bt(r[d]);else{let e=bt(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding!==!1&&!(n.alignDelimiters===!1&&i===``)&&(n.delimiterStart!==!1||d)&&r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function yt(e){return e==null?``:String(e)}function bt(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}var xt=e((()=>{}));function St(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),Ct);return i(),o}function Ct(e,t,n){return`>`+(n?``:` `)+e}var wt=e((()=>{}));function Tt(e,t){return Et(e,t.inConstruct,!0)&&!Et(e,t.notInConstruct,!1)}function Et(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}var Dt=e((()=>{}));function Ot(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Tt(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?``:` `;return`\\
`}var kt=e((()=>{Dt()}));function At(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}var jt=e((()=>{}));function Mt(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}var Nt=e((()=>{}));function Pt(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}var Ft=e((()=>{}));function It(e,t,n,r){let i=Pt(n),a=e.value||``,o=i==="`"?`GraveAccent`:`Tilde`;if(Mt(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,Lt);return e(),t}let s=n.createTracker(r),c=i.repeat(Math.max(At(a,i)+1,3)),l=n.enter(`codeFenced`),u=s.move(c);if(e.lang){let t=n.enter(`codeFencedLang${o}`);u+=s.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...s.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${o}`);u+=s.move(` `),u+=s.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...s.current()})),t()}return u+=s.move(`
`),a&&(u+=s.move(a+`
`)),u+=s.move(c),l(),u}function Lt(e,t,n){return(n?``:`    `)+e}var Rt=e((()=>{jt(),Nt(),Ft()}));function I(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}var L=e((()=>{}));function zt(e,t,n,r){let i=I(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}var Bt=e((()=>{L()}));function Vt(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}var Ht=e((()=>{}));function R(e){return`&#x`+e.toString(16).toUpperCase()+`;`}var z=e((()=>{}));function B(e,t,n){let r=O(e),i=O(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}var Ut=e((()=>{ae()}));function Wt(e,t,n,r){let i=Vt(n),a=n.enter(`emphasis`),o=n.createTracker(r),s=o.move(i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=B(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=R(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=B(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+R(d));let p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function Gt(e,t,n){return n.options.emphasis||`*`}var Kt=e((()=>{Ht(),z(),Ut(),Wt.peek=Gt}));function qt(e,t){let n=!1;return ue(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&v(e)&&(t.options.setext||n))}var Jt=e((()=>{te(),C()}));function Yt(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(qt(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=R(l.charCodeAt(0))+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}var Xt=e((()=>{z(),Jt()}));function Zt(e){return e.value||``}function Qt(){return`<`}var $t=e((()=>{Zt.peek=Qt}));function en(e,t,n,r){let i=I(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function tn(){return`!`}var nn=e((()=>{L(),en.peek=tn}));function rn(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function an(){return`!`}var on=e((()=>{rn.peek=an}));function sn(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function cn(){return"`"}var ln=e((()=>{sn.peek=cn}));function un(e,t){let n=v(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type===`text`&&(n===e.url||`mailto:`+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}var dn=e((()=>{C()}));function fn(e,t,n,r){let i=I(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r),s,c;if(un(e,n)){let t=n.stack;n.stack=[],s=n.enter(`autolink`);let r=o.move(`<`);return r+=o.move(n.containerPhrasing(e,{before:r,after:`>`,...o.current()})),r+=o.move(`>`),s(),n.stack=t,r}s=n.enter(`link`),c=n.enter(`label`);let l=o.move(`[`);return l+=o.move(n.containerPhrasing(e,{before:l,after:`](`,...o.current()})),l+=o.move(`](`),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...o.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function pn(e,t,n){return un(e,n)?`<`:`[`}var mn=e((()=>{L(),dn(),fn.peek=pn}));function hn(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function gn(){return`[`}var _n=e((()=>{hn.peek=gn}));function vn(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}var yn=e((()=>{}));function bn(e){let t=vn(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}var xn=e((()=>{yn()}));function Sn(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}var Cn=e((()=>{}));function wn(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}var Tn=e((()=>{}));function En(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?Sn(n):vn(n),s=e.ordered?o===`.`?`)`:`.`:bn(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if((o===`*`||o===`-`)&&t&&(!t.children||!t.children[0])&&n.stack[n.stack.length-1]===`list`&&n.stack[n.stack.length-2]===`listItem`&&n.stack[n.stack.length-3]===`list`&&n.stack[n.stack.length-4]===`listItem`&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),wn(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}var Dn=e((()=>{yn(),xn(),Cn(),Tn()}));function On(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}var kn=e((()=>{}));function An(e,t,n,r){let i=On(n),a=n.bulletCurrent||vn(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}var jn=e((()=>{yn(),kn()}));function Mn(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}var Nn=e((()=>{})),Pn,Fn=e((()=>{ce(),Pn=he([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`])})),In=e((()=>{Fn()}));function Ln(e,t,n,r){return(e.children.some(function(e){return Pn(e)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}var Rn=e((()=>{In()}));function zn(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}var Bn=e((()=>{}));function Vn(e,t,n,r){let i=zn(n),a=n.enter(`strong`),o=n.createTracker(r),s=o.move(i+i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=B(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=R(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=B(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+R(d));let p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function Hn(e,t,n){return n.options.strong||`*`}var Un=e((()=>{Bn(),z(),Ut(),Vn.peek=Hn}));function Wn(e,t,n,r){return n.safe(e.value,r)}var Gn=e((()=>{}));function Kn(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}var qn=e((()=>{}));function Jn(e,t,n){let r=(wn(n)+(n.options.ruleSpaces?` `:``)).repeat(Kn(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Yn=e((()=>{qn(),Tn()})),Xn,Zn=e((()=>{wt(),kt(),Rt(),Bt(),Kt(),Xt(),$t(),nn(),on(),ln(),mn(),_n(),Dn(),jn(),Nn(),Rn(),Un(),Gn(),Yn(),Xn={blockquote:St,break:Ot,code:It,definition:zt,emphasis:Wt,hardBreak:Ot,heading:Yt,html:Zt,image:en,imageReference:rn,inlineCode:sn,link:fn,linkReference:hn,list:En,listItem:An,paragraph:Mn,root:Ln,strong:Vn,text:Wn,thematicBreak:Jn}})),Qn=e((()=>{Zn(),Nt(),Jt(),z(),Dt()}));function $n(){return{enter:{table:er,tableData:ir,tableHeader:ir,tableRow:nr},exit:{codeText:ar,table:tr,tableData:rr,tableHeader:rr,tableRow:rr}}}function er(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function tr(e){this.exit(e),this.data.inTable=void 0}function nr(e){this.enter({type:`tableRow`,children:[]},e)}function rr(e){this.exit(e)}function ir(e){this.enter({type:`tableCell`,children:[]},e)}function ar(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,or));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function or(e,t){return t===`|`?t:e}function sr(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return vt(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=Xn.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}var cr=e((()=>{y(),xt(),Qn()})),lr=e((()=>{cr()}));function ur(){return{exit:{taskListCheckValueChecked:fr,taskListCheckValueUnchecked:fr,paragraph:pr}}}function dr(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:mr}}}function fr(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function pr(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function mr(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=Xn.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}var hr=e((()=>{y(),Qn()})),gr=e((()=>{hr()}));function _r(){return[je(),nt(),ct(),$n(),ur()]}function vr(e){return{extensions:[Me(),rt(e),lt(),sr(e),dr()]}}var yr=e((()=>{Ge(),st(),gt(),lr(),gr()})),br=e((()=>{yr()}));function xr(){return{text:G}}function Sr(e,t,n){let r=this,i,a;return o;function o(t){return!Nr(t)||!Mr.call(r,r.previous)||Pr(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return Nr(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(Rr,u,l)(t):t===45||t===95||D(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&M(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function Cr(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!Ar.call(r,r.previous)||Pr(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(Fr,e.attempt(Ir,e.attempt(Lr,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function wr(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&jr.call(r,r.previous)&&!Pr(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(M(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||ge(t)||j(t)||g(t)||_(t)?n(t):e.attempt(Ir,e.attempt(Lr,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function Tr(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function Er(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(V,c,s)(t):t===null||j(t)||g(t)||t!==45&&_(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function Dr(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(V,t,a)(o):o===null||j(o)||g(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function Or(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||j(o)||g(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||j(e)||g(e)?t(e):r(e)}function a(e){return M(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):M(t)?(e.consume(t),o):n(t)}}function kr(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return D(e)?n(e):t(e)}}function Ar(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||j(e)}function jr(e){return!M(e)}function Mr(e){return!(e===47||Nr(e))}function Nr(e){return e===43||e===45||e===46||e===95||D(e)}function Pr(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var Fr,Ir,Lr,V,Rr,H,U,W,G,K,zr=e((()=>{for(w(),Fr={tokenize:Tr,partial:!0},Ir={tokenize:Er,partial:!0},Lr={tokenize:Dr,partial:!0},V={tokenize:Or,partial:!0},Rr={tokenize:kr,partial:!0},H={name:`wwwAutolink`,tokenize:Cr,previous:Ar},U={name:`protocolAutolink`,tokenize:wr,previous:jr},W={name:`emailAutolink`,tokenize:Sr,previous:Mr},G={},K=48;K<123;)G[K]=W,K++,K===58?K=65:K===91&&(K=97);G[43]=W,G[45]=W,G[46]=W,G[95]=W,G[72]=[W,U],G[104]=[W,U],G[87]=[W,H],G[119]=[W,H]})),Br=e((()=>{zr()}));function Vr(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:Gr,continuation:{tokenize:Kr},exit:qr}},text:{91:{name:`gfmFootnoteCall`,tokenize:Wr},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:Hr,resolveTo:Ur}}}}function Hr(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=k(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function Ur(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function Wr(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||j(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(k(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return j(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function Gr(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||j(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=k(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return j(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),E(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function Kr(e,t,n){return e.check(ie,t,e.attempt(Yr,t,n))}function qr(e){e.exit(`gfmFootnoteDefinition`)}function Jr(e,t,n){let r=this;return E(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}var Yr,Xr=e((()=>{re(),A(),w(),S(),Yr={tokenize:Jr,partial:!0}})),Zr=e((()=>{Xr()}));function Qr(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&x(o,o.length,0,le(s,e.slice(r+1,n),t)),x(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),x(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=O(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=O(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var $r=e((()=>{b(),ae(),de()})),ei=e((()=>{$r()}));function ti(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}var ni,ri=e((()=>{ni=class{constructor(){this.map=[]}add(e,t,n){ti(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0}}}));function ii(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}var ai=e((()=>{}));function oi(){return{flow:{null:{name:`table`,tokenize:si,resolveAll:ci}}}}function si(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:c;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124?u(e):(o=!0,a+=1,u(e))}function u(t){return t===null?n(t):h(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):T(t)?E(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||j(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,T(t)?E(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),ee):x(t)}function ee(t){return T(t)?E(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||h(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return T(t)?E(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||h(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||h(n)?(e.exit(`tableRow`),t(n)):T(n)?E(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||j(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?te:w)}function te(t){return t===92||t===124?(e.consume(t),w):w(t)}}function ci(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new ni;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(li(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=q(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=q(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=q(f,t,o,i,n,d)):(o[0]=o[1],d=q(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&li(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=ii(t.events,n))}return e}function q(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},J(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=J(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=J(t.events,n[2]),a=J(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},J(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function li(e,t,n,r,i){let a=[],o=J(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function J(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var ui=e((()=>{A(),w(),ri(),ai()})),di=e((()=>{ui()}));function fi(){return{text:{91:hi}}}function pi(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return j(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return h(r)?t(r):T(r)?e.check({tokenize:mi},t,n)(r):n(r)}}function mi(e,t,n){return E(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}var hi,gi=e((()=>{A(),w(),hi={name:`tasklistCheck`,tokenize:pi}})),_i=e((()=>{gi()}));function vi(e){return ee([xr(),Vr(),Qr(e),oi(),fi()])}var yi=e((()=>{se(),Br(),Zr(),ei(),di(),_i()}));function bi(e){let t=this,n=e||xi,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(vi(n)),a.push(_r()),o.push(vr(n))}var xi,Si=e((()=>{br(),yi(),xi={}})),Ci=e((()=>{Si()})),wi,Ti,Ei,Di,Oi,ki,Ai,Y,ji=e((()=>{wi=`_markdown_1h2iq_8`,Ti=`_markdown__blockquote_1h2iq_17`,Ei=`_markdown__code_1h2iq_22`,Di=`_markdown__pre_1h2iq_30`,Oi=`_markdown__table_1h2iq_49`,ki=`_markdown__td_1h2iq_57`,Ai=`_markdown__th_1h2iq_58`,Y={markdown:wi,markdown__blockquote:Ti,markdown__code:Ei,markdown__pre:Di,"markdown--multiline":`_markdown--multiline_1h2iq_44`,markdown__table:Oi,markdown__td:ki,markdown__th:Ai}})),X,Z,Mi=e((()=>{r(),n(),fe(),Ci(),_e(),m(),f(),o(),ve(),u(),ji(),s(),X=t(),Z=({children:e,className:t,remarkPlugins:n,...r})=>(0,X.jsx)(`div`,{className:i(Y.markdown,t),children:(0,X.jsx)(oe,{components:{h1(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(p,{as:`h1`,...r,children:n})},h2(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(p,{as:`h2`,...r,children:n})},h3(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(p,{as:`h3`,...r,children:n})},h4(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(p,{as:`h4`,...r,children:n})},h5(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(p,{as:`h5`,...r,children:n})},h6(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(p,{as:`h6`,...r,children:n})},a(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(a,{...r,children:n})},blockquote(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(`blockquote`,{className:Y.markdown__blockquote,...r,children:n})},p(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(l,{as:`p`,preset:`body-md`,...r,children:n})},strong(e){let{children:t}=e;return(0,X.jsx)(l,{as:`span`,preset:`body-md-bold`,children:(0,X.jsx)(`strong`,{children:t})})},pre(e){let{children:t}=e;return(0,X.jsx)(`pre`,{className:Y.markdown__pre,children:t})},ol(e){let{children:t}=e;return(0,X.jsx)(be,{markerType:`default`,children:t})},ul(e){let{children:t}=e;return(0,X.jsx)(ye,{markerType:`default`,children:t})},li(e){let{children:t}=e;return(0,X.jsx)(ye.ListItem,{children:t})},code(e){let{className:t,children:n}=e,r=/language-(\w+)/.exec(t||``);return r?(0,X.jsx)(me,{className:Y[`markdown--multiline`],copyStyle:`icon`,language:r[1],children:n}):(0,X.jsx)(`code`,{className:i(Y.markdown__code,c.text,c[`text--code-md`]),children:n})},hr(){return(0,X.jsx)(d,{})},table(e){let{children:t}=e;return(0,X.jsx)(`table`,{className:i(Y.markdown__table),children:t})},th(e){let{children:t,node:n}=e;return(0,X.jsx)(`th`,{...n?.properties,className:Y.markdown__th,children:t})},thead(e){let{children:t}=e;return(0,X.jsx)(`thead`,{className:Y.markdown__thead,children:t})},td(e){let{children:t,node:n}=e;return(0,X.jsx)(`td`,{className:Y.markdown__td,...n?.properties,children:t})},tr(e){let{children:t}=e;return(0,X.jsx)(`tr`,{className:Y.markdown__tr,children:t})}},remarkPlugins:n?[bi,...n]:[bi],...r,children:e})});try{Z.displayName=`Markdown`,Z.__docgenInfo={description:`BETA: This component is still a work in progress and is subject to change.

Generic Markdown component to wrap convert convent into EDS-compliant represenations. Includes all the base
components, plus tables from GitHub-Flavored Markdown. Other features available by using Remark Plugins.

Library documentation:
- https://github.com/remarkjs/react-markdown

Included plugins:
- https://github.com/remarkjs/remark-gfm`,displayName:`Markdown`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Markdown/Markdown.tsx`,methods:[],props:{allowElement:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Filter elements (optional);\n`allowedElements` / `disallowedElements` is used first.",name:`allowElement`,required:!1,tags:{},type:{name:`AllowElement | null`}},allowedElements:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Tag names to allow (default: all tag names);\ncannot combine w/ `disallowedElements`.",name:`allowedElements`,required:!1,tags:{},type:{name:`readonly string[] | null`}},children:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Markdown/Markdown.tsx`,name:`TypeLiteral`}],description:`Markdown.
Markdown content to convert into EDS-based content.`,name:`children`,required:!1,tags:{},type:{name:`string`}},components:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:`Map tag names to components.`,name:`components`,required:!1,tags:{},type:{name:`Components | null`}},disallowedElements:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Tag names to disallow (default: `[]`);\ncannot combine w/ `allowedElements`.",name:`disallowedElements`,required:!1,tags:{},type:{name:`readonly string[] | null`}},rehypePlugins:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:`List of rehype plugins to use.`,name:`rehypePlugins`,required:!1,tags:{},type:{name:`PluggableList | null`}},remarkPlugins:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:`List of remark plugins to use.`,name:`remarkPlugins`,required:!1,tags:{},type:{name:`PluggableList | null`}},remarkRehypeOptions:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Options to pass through to `remark-rehype`.",name:`remarkRehypeOptions`,required:!1,tags:{},type:{name:`Readonly<Options> | null`}},skipHtml:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Ignore HTML in markdown completely (default: `false`).",name:`skipHtml`,required:!1,tags:{},type:{name:`boolean | null`}},unwrapDisallowed:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Extract (unwrap) what’s in disallowed elements (default: `false`);\nnormally when say `strong` is not allowed, it and it’s children are dropped,\nwith `unwrapDisallowed` the element itself is replaced by its children.",name:`unwrapDisallowed`,required:!1,tags:{},type:{name:`boolean | null`}},urlTransform:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Change URLs (default: `defaultUrlTransform`)",name:`urlTransform`,required:!1,tags:{},type:{name:`UrlTransform | null`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Markdown/Markdown.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),Ni,Q,$,Pi;e((()=>{Mi(),Ni={title:`Components/Markdown`,component:Z,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},tags:[`beta`,`version:1.0`]},Q={args:{children:`# Introduction

Source for Testing Images: <https://picsum.photos/200/300>

This is an introductory block of text, with no additional formatting. **Strength** can be added, as well as *emphasis*.

## Details

### Lists

#### Unordered

Here are a list of items:

- Item One
- Item Two
- Item Three

----

* Item A
* Item B
* Item C

#### Ordered

1. First Item
2. Second Item
3. Third Item

### Block Quotes

> Including a block quote to demonstrate appearance.
> This should apply across multiple lines.

### Code

#### Inline & Pre-formatted

To run a command try the following: \`shell.py init\` which prints:

    Some output from the above!
    When indented, it spans multiple lines.

#### MultiLine

~~~cpp
#include <iostream.h> 
#include <iomanip.h> 
#include <fstream.h>	// To send the data to a text file 
#include <conio.h>		// For the getch() function 
#include <stdlib.h>

// This program calculates the cost of a gas fillup when the miles
// travelled, the miles per gallon, and the price of a gallon of gas
// is inputed. It also keeps track of the total transactions and sums
// the total of all gas sales. This information is sent to a text file
// on the desktop named dailyrpt.txt.

int main() 
{ 
  // Defining output function 
  ofstream trans_cash; 

  int mpg, // Variables being initialized... 
    miles, 
    trans = 0,
    month,
    day,
    year;
 
  
  char slash;	// character in the dates

  double price_gal,
    gallons,
    avg_gallons,
    avg_cost,
    avg_price_gal,
    total_gallons = 0,
    total_price_gal = 0,
    cost, 
    total_cost = 0.0; // ...Variables initialized 


  // Open the output file for the total price and transaction output 
  trans_cash.open("C:\\windows\\desktop\\dailyrpt.txt"); 

  // Setting precision and value output style 
  cout << setprecision(2) << setiosflags(ios::fixed | ios::showpoint); 

  // Greeting and input... 

  cout << "\\nWelcome to the Gas Register Cashier"; 
  cout << "\\n-----------------------------------" << "\\n"; 

  cout << "\\nTo begin, enter the date (i.e. 01/01/2001)" << endl;
  cin >> month >> slash >> day >> slash >> year;		//Input the date

  cout << "\\nPlease input requested values. If you want to quit, simply type -1 in" << "\\n 'Miles Travelled' Data to exit."; 
  cout << "\\n" << "\\n"; 

  cout << "Miles Travelled: ";	// Input miles
  cin >> miles; 


  // Loop begin: Calculator 

  while (miles >= 0) 
  { 

    cout << "Miles per Gallon for Your Car: "; 
    cin >> mpg; 

    cout << "Price Per Gallon You're Paying: "; 
    cin >> price_gal; 

    ++trans; // Adds one to the counter, keeping control of transactions 

    gallons = double(miles) / double(mpg); // Calculations... 
    cost = gallons * price_gal; 

    total_cost += cost;						// Averaging calculations
    total_gallons += gallons;
    total_price_gal += price_gal;

    // ...end 

    // Displaying data entry information 

    trans_cash << setiosflags(ios::fixed | ios::showpoint) << setprecision(2);
    trans_cash << "\\nMiles per Gallon:" << setw(9) << mpg; 
    trans_cash << "\\nMiles Travelled:" << setw(10) << miles << endl << endl; 

    trans_cash << "Number of Gallons: " << setw(7) << gallons; 
    trans_cash << setprecision(3); // Setting Precision for gas price 
    trans_cash << "\\nPrice per Gallon: " << setw(8) << price_gal << endl; 

    trans_cash << setprecision(2); // Re-setting precision for final total 
    trans_cash << "\\n--------------------------"; 
    trans_cash << "\\nCost of Fillup: " << setw(10) << cost << setw(15) << "Transaction: " << trans; 
    trans_cash << "\\n--------------------------" << endl << endl;


    system("cls");		// clears the screen

    cout << endl << "\\nRe-enter values. Again, type -1 in 'Miles Travelled' to exit." << endl; 
    cout << "Miles Travelled: "; 
    cin >> miles; 

  } 

  // Final Calculations
  avg_cost = total_cost / double(trans);
  avg_gallons = total_gallons / double(trans);
  avg_price_gal = total_price_gal / double(trans);

  // Final output 
  trans_cash << setprecision(2) << setiosflags(ios::fixed) << setiosflags(ios::showpoint);
  trans_cash << "\\nDaily Report for " << month << slash << day << slash << year;
  trans_cash << endl; 
  trans_cash << "================================" << endl; 
  trans_cash << "Number of Sales: " << setw(15) << trans << endl; 
  trans_cash << "Total Gallons Sold: " << setw(12) << total_gallons << endl;
  
  trans_cash << endl;

  trans_cash << setprecision(3);
  trans_cash << "Average price per Gallon: " << setw(6) << avg_price_gal << endl;
  trans_cash << setprecision(2);

  trans_cash << "Total Sales: " << setw(19) << total_cost << endl; 

  trans_cash << endl;

  trans_cash << "Average Gallons: " << setw(15) << avg_gallons << endl;
  trans_cash << "Average Sale: " << setw(18) << avg_cost << endl;
  trans_cash << "--------------------------------";
  
  
  // Name Entry
  trans_cash << "\\nPrepared by:" << setw(20) << "Andrew Holloway";
  // Output file located at C:\\windows\\desktop\\dailyrpt.txt

  // Closing the generated file 
  trans_cash.close(); 

  getch();	// Hit a key function

  return 0; 
}
~~~

##### Miscellaneous

###### Links

Here's a link to [CommonMark][common-mark].

[common-mark]: https://commonmark.org/
`}},$={args:{children:`
# GitHub-Flavored Markdown

## Tables

GitHub-flavored markdown supports basic tables. Alignment can be controlled for each column. [See doc.s][gfm-docs].

| a | b  |  c |  d  |
| - | :- | -: | :-: |
| 1 | 2  | 3  | 4   |

[gfm-docs]: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables
`}},Pi=[`Default`,`GithubFlavoredMarkdown`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`# Introduction

Source for Testing Images: <https://picsum.photos/200/300>

This is an introductory block of text, with no additional formatting. **Strength** can be added, as well as *emphasis*.

## Details

### Lists

#### Unordered

Here are a list of items:

- Item One
- Item Two
- Item Three

----

* Item A
* Item B
* Item C

#### Ordered

1. First Item
2. Second Item
3. Third Item

### Block Quotes

> Including a block quote to demonstrate appearance.
> This should apply across multiple lines.

### Code

#### Inline & Pre-formatted

To run a command try the following: \\\`shell.py init\\\` which prints:

    Some output from the above!
    When indented, it spans multiple lines.

#### MultiLine

~~~cpp
#include <iostream.h> 
#include <iomanip.h> 
#include <fstream.h>	// To send the data to a text file 
#include <conio.h>		// For the getch() function 
#include <stdlib.h>

// This program calculates the cost of a gas fillup when the miles
// travelled, the miles per gallon, and the price of a gallon of gas
// is inputed. It also keeps track of the total transactions and sums
// the total of all gas sales. This information is sent to a text file
// on the desktop named dailyrpt.txt.

int main() 
{ 
  // Defining output function 
  ofstream trans_cash; 

  int mpg, // Variables being initialized... 
    miles, 
    trans = 0,
    month,
    day,
    year;
 
  
  char slash;	// character in the dates

  double price_gal,
    gallons,
    avg_gallons,
    avg_cost,
    avg_price_gal,
    total_gallons = 0,
    total_price_gal = 0,
    cost, 
    total_cost = 0.0; // ...Variables initialized 


  // Open the output file for the total price and transaction output 
  trans_cash.open("C:\\\\windows\\\\desktop\\\\dailyrpt.txt"); 

  // Setting precision and value output style 
  cout << setprecision(2) << setiosflags(ios::fixed | ios::showpoint); 

  // Greeting and input... 

  cout << "\\\\nWelcome to the Gas Register Cashier"; 
  cout << "\\\\n-----------------------------------" << "\\\\n"; 

  cout << "\\\\nTo begin, enter the date (i.e. 01/01/2001)" << endl;
  cin >> month >> slash >> day >> slash >> year;		//Input the date

  cout << "\\\\nPlease input requested values. If you want to quit, simply type -1 in" << "\\\\n 'Miles Travelled' Data to exit."; 
  cout << "\\\\n" << "\\\\n"; 

  cout << "Miles Travelled: ";	// Input miles
  cin >> miles; 


  // Loop begin: Calculator 

  while (miles >= 0) 
  { 

    cout << "Miles per Gallon for Your Car: "; 
    cin >> mpg; 

    cout << "Price Per Gallon You're Paying: "; 
    cin >> price_gal; 

    ++trans; // Adds one to the counter, keeping control of transactions 

    gallons = double(miles) / double(mpg); // Calculations... 
    cost = gallons * price_gal; 

    total_cost += cost;						// Averaging calculations
    total_gallons += gallons;
    total_price_gal += price_gal;

    // ...end 

    // Displaying data entry information 

    trans_cash << setiosflags(ios::fixed | ios::showpoint) << setprecision(2);
    trans_cash << "\\\\nMiles per Gallon:" << setw(9) << mpg; 
    trans_cash << "\\\\nMiles Travelled:" << setw(10) << miles << endl << endl; 

    trans_cash << "Number of Gallons: " << setw(7) << gallons; 
    trans_cash << setprecision(3); // Setting Precision for gas price 
    trans_cash << "\\\\nPrice per Gallon: " << setw(8) << price_gal << endl; 

    trans_cash << setprecision(2); // Re-setting precision for final total 
    trans_cash << "\\\\n--------------------------"; 
    trans_cash << "\\\\nCost of Fillup: " << setw(10) << cost << setw(15) << "Transaction: " << trans; 
    trans_cash << "\\\\n--------------------------" << endl << endl;


    system("cls");		// clears the screen

    cout << endl << "\\\\nRe-enter values. Again, type -1 in 'Miles Travelled' to exit." << endl; 
    cout << "Miles Travelled: "; 
    cin >> miles; 

  } 

  // Final Calculations
  avg_cost = total_cost / double(trans);
  avg_gallons = total_gallons / double(trans);
  avg_price_gal = total_price_gal / double(trans);

  // Final output 
  trans_cash << setprecision(2) << setiosflags(ios::fixed) << setiosflags(ios::showpoint);
  trans_cash << "\\\\nDaily Report for " << month << slash << day << slash << year;
  trans_cash << endl; 
  trans_cash << "================================" << endl; 
  trans_cash << "Number of Sales: " << setw(15) << trans << endl; 
  trans_cash << "Total Gallons Sold: " << setw(12) << total_gallons << endl;
  
  trans_cash << endl;

  trans_cash << setprecision(3);
  trans_cash << "Average price per Gallon: " << setw(6) << avg_price_gal << endl;
  trans_cash << setprecision(2);

  trans_cash << "Total Sales: " << setw(19) << total_cost << endl; 

  trans_cash << endl;

  trans_cash << "Average Gallons: " << setw(15) << avg_gallons << endl;
  trans_cash << "Average Sale: " << setw(18) << avg_cost << endl;
  trans_cash << "--------------------------------";
  
  
  // Name Entry
  trans_cash << "\\\\nPrepared by:" << setw(20) << "Andrew Holloway";
  // Output file located at C:\\\\windows\\\\desktop\\\\dailyrpt.txt

  // Closing the generated file 
  trans_cash.close(); 

  getch();	// Hit a key function

  return 0; 
}
~~~

##### Miscellaneous

###### Links

Here's a link to [CommonMark][common-mark].

[common-mark]: https://commonmark.org/
\`
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`
# GitHub-Flavored Markdown

## Tables

GitHub-flavored markdown supports basic tables. Alignment can be controlled for each column. [See doc.s][gfm-docs].

| a | b  |  c |  d  |
| - | :- | -: | :-: |
| 1 | 2  | 3  | 4   |

[gfm-docs]: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables
\`
  }
}`,...$.parameters?.docs?.source}}}}))();export{Q as Default,$ as GithubFlavoredMarkdown,Pi as __namedExportsOrder,Ni as default};