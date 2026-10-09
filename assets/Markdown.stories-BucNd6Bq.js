import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,C as i,D as a,E as o,F as s,N as c,P as l,S as u,T as d,_ as f,a as p,b as m,c as ee,d as te,f as h,g,h as _,i as v,j as ne,k as y,l as b,m as x,n as S,o as C,r as w,s as T,t as re,u as ie,v as ae,w as E,x as oe,y as D}from"./CodeBlock-DK5mXEn6.js";import{n as se,t as ce}from"./clsx-CTwy9ux-.js";import{n as le,t as ue}from"./Text.module-C4ozVvgv.js";import{n as de,t as O}from"./Heading-CI3mrpQ7.js";import{n as fe,r as pe}from"./Text-DJbcQrwW.js";import{n as me,t as he}from"./Link-B3y35rrp.js";import{n as ge,t as _e}from"./Hr-BnOZxqdG.js";import{n as ve,r as ye,t as be}from"./List-COkOzcu8.js";function xe(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function Se(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}function Ce(e,t,n){let r=b((n||{}).ignore||[]),i=we(t),a=-1;for(;++a<i.length;)ee(e,`text`,o);function o(e,t){let n=-1,i;for(;++n<t.length;){let e=t[n],a=i?i.children:void 0;if(r(e,a?a.indexOf(e):void 0,i))return;i=e}if(i)return s(e,t)}function s(e,t){let n=t[t.length-1],r=i[a][0],o=i[a][1],s=0,c=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,i={index:d.index,input:d.input,stack:[...t,e]},a=o(...d,i);if(typeof a==`string`&&(a=a.length>0?{type:`text`,value:a}:void 0),a===!1?r.lastIndex=n+1:(s!==n&&u.push({type:`text`,value:e.value.slice(s,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),s=n+d[0].length,l=!0),!r.global)break;d=r.exec(e.value)}return l?(s<e.value.length&&u.push({type:`text`,value:e.value.slice(s)}),n.children.splice(c,1,...u)):u=[e],c+u.length}}function we(e){let t=[];if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([Te(e[0]),Ee(e[1])])}return t}function Te(e){return typeof e==`string`?new RegExp(Se(e),`g`):e}function Ee(e){return typeof e==`function`?e:function(){return e}}function De(){return(De=e((()=>{T(),ie()})))()}function Oe(){return{transforms:[Fe],enter:{literalAutolink:Ae,literalAutolinkEmail:k,literalAutolinkHttp:k,literalAutolinkWww:k},exit:{literalAutolink:Pe,literalAutolinkEmail:Ne,literalAutolinkHttp:je,literalAutolinkWww:Me}}}function ke(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:A,notInConstruct:j},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:A,notInConstruct:j},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:A,notInConstruct:j}]}}function Ae(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function k(e){this.config.enter.autolinkProtocol.call(this,e)}function je(e){this.config.exit.autolinkProtocol.call(this,e)}function Me(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function Ne(e){this.config.exit.autolinkEmail.call(this,e)}function Pe(e){this.exit(e)}function Fe(e){Ce(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Ie],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Le]],{ignore:[`link`,`linkReference`]})}function Ie(e,t,n,r,i){let a=``;if(!Be(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!Re(n)))return!1;let o=ze(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function Le(e,t,n,r){return!Be(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function Re(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function ze(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=xe(e,`(`),a=xe(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function Be(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||a(n)||o(n))&&(!t||n!==47)}var A,j;function Ve(){return(Ve=e((()=>{u(),De(),A=`phrasing`,j=[`autolink`,`link`,`image`,`label`]})))()}function He(){this.buffer()}function Ue(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function We(){this.buffer()}function Ge(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function Ke(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=y(this.sliceSerialize(e)).toLowerCase(),n.label=t}function qe(e){this.exit(e)}function Je(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=y(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Ye(e){this.exit(e)}function Xe(){return`[`}function Ze(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function Qe(){return{enter:{gfmFootnoteCallString:He,gfmFootnoteCall:Ue,gfmFootnoteDefinitionLabelString:We,gfmFootnoteDefinition:Ge},exit:{gfmFootnoteCallString:Ke,gfmFootnoteCall:qe,gfmFootnoteDefinitionLabelString:Je,gfmFootnoteDefinition:Ye}}}function $e(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:Ze},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?tt:et))),s(),o}}function et(e,t,n){return t===0?e:tt(e,t,n)}function tt(e,t,n){return(n?``:`    `)+e}function nt(){return(nt=e((()=>{Ze.peek=Xe})))()}function rt(){return{canContainEols:[`delete`],enter:{strikethrough:at},exit:{strikethrough:ot}}}function it(){return{unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:lt}],handlers:{delete:st}}}function at(e){this.enter({type:`delete`,children:[]},e)}function ot(e){this.exit(e)}function st(e,t,n,r){let i=n.createTracker(r),a=n.enter(`strikethrough`),o=i.move(`~~`);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:`~`}),o+=i.move(`~~`),a(),o}function ct(){return`~`}var lt;function ut(){return(ut=e((()=>{lt=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`],st.peek=ct})))()}function dt(e){return e.length}function ft(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||dt,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=pt(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=mt(r[d]);else{let e=mt(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding!==!1&&(n.alignDelimiters!==!1||i!==``)&&(n.delimiterStart!==!1||d)&&r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function pt(e){return e==null?``:String(e)}function mt(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function ht(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),gt);return i(),o}function gt(e,t,n){return`>`+(n?``:` `)+e}function _t(e,t){return vt(e,t.inConstruct,!0)&&!vt(e,t.notInConstruct,!1)}function vt(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function yt(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&_t(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?``:` `;return`\\
`}function bt(){return(bt=e((()=>{})))()}function xt(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function St(e,t){return!(t.options.fences!==!1||!e.value||e.lang||!/[^ \r\n]/.test(e.value)||/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Ct(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function wt(e,t,n,r){let i=Ct(n),a=e.value||``,o=i==="`"?`GraveAccent`:`Tilde`;if(St(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,Tt);return e(),t}let s=n.createTracker(r),c=i.repeat(Math.max(xt(a,i)+1,3)),l=n.enter(`codeFenced`),u=s.move(c);if(e.lang){let t=n.enter(`codeFencedLang${o}`);u+=s.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...s.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${o}`);u+=s.move(` `),u+=s.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...s.current()})),t()}return u+=s.move(`
`),a&&(u+=s.move(a+`
`)),u+=s.move(c),l(),u}function Tt(e,t,n){return(n?``:`    `)+e}function Et(){return(Et=e((()=>{})))()}function M(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Dt(e,t,n,r){let i=M(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function Ot(){return(Ot=e((()=>{})))()}function kt(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function N(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function P(e,t,n){let r=_(e),i=_(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}function At(){return(At=e((()=>{g()})))()}function jt(e,t,n,r){let i=kt(n),a=n.enter(`emphasis`),o=n.createTracker(r),s=o.move(i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=P(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=N(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=P(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+N(d));let p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function Mt(e,t,n){return n.options.emphasis||`*`}function Nt(){return(Nt=e((()=>{At(),jt.peek=Mt})))()}function Pt(e,t){let n=!1;return C(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&s(e)&&(t.options.setext||n))}function Ft(){return(Ft=e((()=>{T(),p(),l()})))()}function It(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(Pt(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=N(l.charCodeAt(0))+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}function Lt(){return(Lt=e((()=>{Ft()})))()}function Rt(e){return e.value||``}function zt(){return`<`}function Bt(){return(Bt=e((()=>{Rt.peek=zt})))()}function Vt(e,t,n,r){let i=M(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function Ht(){return`!`}function Ut(){return(Ut=e((()=>{Vt.peek=Ht})))()}function Wt(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function Gt(){return`!`}function Kt(){return(Kt=e((()=>{Wt.peek=Gt})))()}function qt(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function Jt(){return"`"}function Yt(){return(Yt=e((()=>{qt.peek=Jt})))()}function Xt(e,t){let n=s(e);return!(t.options.resourceLink||!e.url||e.title||!e.children||e.children.length!==1||e.children[0].type!==`text`||n!==e.url&&`mailto:`+n!==e.url||!/^[a-z][a-z+.-]+:/i.test(e.url)||/[\0- <>\u007F]/.test(e.url))}function Zt(){return(Zt=e((()=>{l()})))()}function Qt(e,t,n,r){let i=M(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r),s,c;if(Xt(e,n)){let t=n.stack;n.stack=[],s=n.enter(`autolink`);let r=o.move(`<`);return r+=o.move(n.containerPhrasing(e,{before:r,after:`>`,...o.current()})),r+=o.move(`>`),s(),n.stack=t,r}s=n.enter(`link`),c=n.enter(`label`);let l=o.move(`[`);return l+=o.move(n.containerPhrasing(e,{before:l,after:`](`,...o.current()})),l+=o.move(`](`),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...o.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function $t(e,t,n){return Xt(e,n)?`<`:`[`}function en(){return(en=e((()=>{Zt(),Qt.peek=$t})))()}function tn(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function nn(){return`[`}function rn(){return(rn=e((()=>{tn.peek=nn})))()}function an(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function on(e){let t=an(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function sn(){return(sn=e((()=>{})))()}function cn(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function ln(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function un(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?cn(n):an(n),s=e.ordered?o===`.`?`)`:`.`:on(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if((o===`*`||o===`-`)&&t&&(!t.children||!t.children[0])&&n.stack[n.stack.length-1]===`list`&&n.stack[n.stack.length-2]===`listItem`&&n.stack[n.stack.length-3]===`list`&&n.stack[n.stack.length-4]===`listItem`&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),ln(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function dn(){return(dn=e((()=>{sn()})))()}function fn(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function pn(e,t,n,r){let i=fn(n),a=n.bulletCurrent||an(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function mn(){return(mn=e((()=>{})))()}function hn(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}var gn;function _n(){return(_n=e((()=>{ie(),gn=b([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`])})))()}function vn(e,t,n,r){return(e.children.some(function(e){return gn(e)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function yn(){return(yn=e((()=>{_n()})))()}function bn(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}function xn(e,t,n,r){let i=bn(n),a=n.enter(`strong`),o=n.createTracker(r),s=o.move(i+i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=P(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=N(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=P(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+N(d));let p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function Sn(e,t,n){return n.options.strong||`*`}function Cn(){return(Cn=e((()=>{At(),xn.peek=Sn})))()}function wn(e,t,n,r){return n.safe(e.value,r)}function Tn(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function En(e,t,n){let r=(ln(n)+(n.options.ruleSpaces?` `:``)).repeat(Tn(n));return n.options.ruleSpaces?r.slice(0,-1):r}function Dn(){return(Dn=e((()=>{})))()}var On;function F(){return(F=e((()=>{bt(),Et(),Ot(),Nt(),Lt(),Bt(),Ut(),Kt(),Yt(),en(),rn(),dn(),mn(),yn(),Cn(),Dn(),On={blockquote:ht,break:yt,code:wt,definition:Dt,emphasis:jt,hardBreak:yt,heading:It,html:Rt,image:Vt,imageReference:Wt,inlineCode:qt,link:Qt,linkReference:tn,list:un,listItem:pn,paragraph:hn,root:vn,strong:xn,text:wn,thematicBreak:En}})))()}function kn(){return{enter:{table:An,tableData:Nn,tableHeader:Nn,tableRow:Mn},exit:{codeText:Pn,table:jn,tableData:I,tableHeader:I,tableRow:I}}}function An(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function jn(e){this.exit(e),this.data.inTable=void 0}function Mn(e){this.enter({type:`tableRow`,children:[]},e)}function I(e){this.exit(e)}function Nn(e){this.enter({type:`tableCell`,children:[]},e)}function Pn(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Fn));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function Fn(e,t){return t===`|`?t:e}function In(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return ft(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=On.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function Ln(){return(Ln=e((()=>{F()})))()}function Rn(){return{exit:{taskListCheckValueChecked:Bn,taskListCheckValueUnchecked:Bn,paragraph:Vn}}}function zn(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:Hn}}}function Bn(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function Vn(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function Hn(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=On.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function Un(){return(Un=e((()=>{F()})))()}function Wn(){return[Oe(),Qe(),rt(),kn(),Rn()]}function Gn(e){return{extensions:[ke(),$e(e),it(),In(e),zn()]}}function Kn(){return(Kn=e((()=>{Ve(),nt(),ut(),Ln(),Un()})))()}function qn(){return{text:G}}function Jn(e,t,n){let r=this,i,a;return o;function o(t){return!L(t)||!ir.call(r,r.previous)||R(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return L(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(or,u,l)(t):t===45||t===95||m(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&D(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function Yn(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!nr.call(r,r.previous)||R(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(ar,e.attempt(z,e.attempt(B,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function Xn(e,t,n){let r=this,i=``,s=!1;return c;function c(t){return(t===72||t===104)&&rr.call(r,r.previous)&&!R(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),l):n(t)}function l(t){if(D(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),l;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),u}return n(t)}function u(t){return t===47?(e.consume(t),s?d:(s=!0,u)):n(t)}function d(t){return t===null||oe(t)||E(t)||a(t)||o(t)?n(t):e.attempt(z,e.attempt(B,f),n)(t)}function f(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function Zn(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function Qn(e,t,n){let r,i,s;return c;function c(t){return t===46||t===95?e.check(V,u,l)(t):t===null||E(t)||a(t)||t!==45&&o(t)?u(t):(s=!0,e.consume(t),c)}function l(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),c}function u(e){return i||r||!s?n(e):t(e)}}function $n(e,t){let n=0,r=0;return i;function i(s){return s===40?(n++,e.consume(s),i):s===41&&r<n?o(s):s===33||s===34||s===38||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===60||s===63||s===93||s===95||s===126?e.check(V,t,o)(s):s===null||E(s)||a(s)?t(s):(e.consume(s),i)}function o(t){return t===41&&r++,e.consume(t),i}}function er(e,t,n){return r;function r(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),r):s===38?(e.consume(s),o):s===93?(e.consume(s),i):s===60||s===null||E(s)||a(s)?t(s):n(s)}function i(e){return e===null||e===40||e===91||E(e)||a(e)?t(e):r(e)}function o(e){return D(e)?s(e):n(e)}function s(t){return t===59?(e.consume(t),r):D(t)?(e.consume(t),s):n(t)}}function tr(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return m(e)?n(e):t(e)}}function nr(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||E(e)}function rr(e){return!D(e)}function ir(e){return!(e===47||L(e))}function L(e){return e===43||e===45||e===46||e===95||m(e)}function R(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var ar,z,B,V,or,H,U,W,G,K;function sr(){return(sr=e((()=>{for(u(),ar={tokenize:Zn,partial:!0},z={tokenize:Qn,partial:!0},B={tokenize:$n,partial:!0},V={tokenize:er,partial:!0},or={tokenize:tr,partial:!0},H={name:`wwwAutolink`,tokenize:Yn,previous:nr},U={name:`protocolAutolink`,tokenize:Xn,previous:rr},W={name:`emailAutolink`,tokenize:Jn,previous:ir},G={},K=48;K<123;)G[K]=W,K++,K===58?K=65:K===91&&(K=97);G[43]=W,G[45]=W,G[46]=W,G[95]=W,G[72]=[W,U],G[104]=[W,U],G[87]=[W,H],G[119]=[W,H]})))()}function cr(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:fr,continuation:{tokenize:pr},exit:mr}},text:{91:{name:`gfmFootnoteCall`,tokenize:dr},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:lr,resolveTo:ur}}}}function lr(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=y(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function ur(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function dr(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||E(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(y(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return E(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function fr(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||E(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=y(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),p}return E(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function p(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),f(e,m,`gfmFootnoteDefinitionWhitespace`)):n(t)}function m(e){return t(e)}}function pr(e,t,n){return e.check(te,t,e.attempt(gr,t,n))}function mr(e){e.exit(`gfmFootnoteDefinition`)}function hr(e,t,n){let r=this;return f(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}var gr;function _r(){return(_r=e((()=>{h(),ae(),u(),gr={tokenize:hr,partial:!0}})))()}function vr(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&c(o,o.length,0,x(s,e.slice(r+1,n),t)),c(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),c(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=_(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=_(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}function yr(){return(yr=e((()=>{g()})))()}function br(e,t,n,r){let i=0;if(n!==0||r.length!==0){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}var xr;function Sr(){return(Sr=e((()=>{xr=class{constructor(){this.map=[]}add(e,t,n){br(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0}}})))()}function Cr(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function wr(){return{flow:{null:{name:`table`,tokenize:Tr,resolveAll:Er}}}}function Tr(e,t,n){let r=this,a=0,o=0,s;return c;function c(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:l;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function l(t){return e.enter(`tableHead`),e.enter(`tableRow`),u(t)}function u(e){return e===124?p(e):(s=!0,o+=1,p(e))}function p(t){return t===null?n(t):i(t)?o>1?(o=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),te):n(t):d(t)?f(e,p,`whitespace`)(t):(o+=1,s&&(s=!1,a+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),s=!0,p):(e.enter(`data`),m(t)))}function m(t){return t===null||t===124||E(t)?(e.exit(`data`),p(t)):(e.consume(t),t===92?ee:m)}function ee(t){return t===92||t===124?(e.consume(t),m):m(t)}function te(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),s=!1,d(t)?f(e,h,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):h(t))}function h(t){return t===45||t===58?_(t):t===124?(s=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),g):x(t)}function g(t){return d(t)?f(e,_,`whitespace`)(t):_(t)}function _(t){return t===58?(o+=1,s=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),v):t===45?(o+=1,v(t)):t===null||i(t)?b(t):x(t)}function v(t){return t===45?(e.enter(`tableDelimiterFiller`),ne(t)):x(t)}function ne(t){return t===45?(e.consume(t),ne):t===58?(s=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return d(t)?f(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?h(n):n===null||i(n)?!s||a!==o?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||i(n)?(e.exit(`tableRow`),t(n)):d(n)?f(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||E(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?T:w)}function T(t){return t===92||t===124?(e.consume(t),w):w(t)}}function Er(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new xr;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(Dr(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=q(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=q(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=q(f,t,o,i,n,d)):(o[0]=o[1],d=q(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&Dr(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=Cr(t.events,n))}return e}function q(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},J(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=J(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=J(t.events,n[2]),a=J(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},J(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function Dr(e,t,n,r,i){let a=[],o=J(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function J(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}function Or(){return(Or=e((()=>{ae(),u(),Sr()})))()}function kr(){return{text:{91:Mr}}}function Ar(e,t,n){let r=this;return a;function a(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),o)}function o(t){return E(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),s):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),s):n(t)}function s(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),c):n(t)}function c(r){return i(r)?t(r):d(r)?e.check({tokenize:jr},t,n)(r):n(r)}}function jr(e,t,n){return f(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}var Mr;function Nr(){return(Nr=e((()=>{ae(),u(),Mr={name:`tasklistCheck`,tokenize:Ar}})))()}function Pr(e){return r([qn(),cr(),vr(e),wr(),kr()])}function Fr(){return(Fr=e((()=>{ne(),sr(),_r(),yr(),Or(),Nr()})))()}function Ir(e){let t=this,n=e||Lr,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(Pr(n)),a.push(Wn()),o.push(Gn(n))}var Lr;function Rr(){return(Rr=e((()=>{Kn(),Fr(),Lr={}})))()}var zr,Br,Vr,Hr,Ur,Wr,Gr,Y;function Kr(){return(Kr=e((()=>{zr=`_markdown_1h2iq_8`,Br=`_markdown__blockquote_1h2iq_17`,Vr=`_markdown__code_1h2iq_22`,Hr=`_markdown__pre_1h2iq_30`,Ur=`_markdown__table_1h2iq_49`,Wr=`_markdown__td_1h2iq_57`,Gr=`_markdown__th_1h2iq_58`,Y={markdown:zr,markdown__blockquote:Br,markdown__code:Vr,markdown__pre:Hr,"markdown--multiline":`_markdown--multiline_1h2iq_44`,markdown__table:Ur,markdown__td:Wr,markdown__th:Gr}})))()}var X,Z;function qr(){return(qr=e((()=>{se(),t(),v(),Rr(),S(),de(),ge(),me(),ye(),pe(),Kr(),le(),X=n(),Z=({children:e,className:t,remarkPlugins:n,...r})=>{let i=ce(Y.markdown,t);return(0,X.jsx)(`div`,{className:i,children:(0,X.jsx)(w,{components:{h1(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(O,{as:`h1`,...r,children:n})},h2(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(O,{as:`h2`,...r,children:n})},h3(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(O,{as:`h3`,...r,children:n})},h4(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(O,{as:`h4`,...r,children:n})},h5(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(O,{as:`h5`,...r,children:n})},h6(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(O,{as:`h6`,...r,children:n})},a(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(he,{...r,children:n})},blockquote(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(`blockquote`,{className:Y.markdown__blockquote,...r,children:n})},p(e){let{node:t,children:n,...r}=e;return(0,X.jsx)(fe,{as:`p`,preset:`body-md`,...r,children:n})},strong(e){let{children:t}=e;return(0,X.jsx)(fe,{as:`span`,preset:`body-md-bold`,children:(0,X.jsx)(`strong`,{children:t})})},pre(e){let{children:t}=e;return(0,X.jsx)(`pre`,{className:Y.markdown__pre,children:t})},ol(e){let{children:t}=e;return(0,X.jsx)(be,{markerType:`default`,children:t})},ul(e){let{children:t}=e;return(0,X.jsx)(ve,{markerType:`default`,children:t})},li(e){let{children:t}=e;return(0,X.jsx)(ve.ListItem,{children:t})},code(e){let{className:t,children:n}=e,r=/language-(\w+)/.exec(t||``);return r?(0,X.jsx)(re,{className:Y[`markdown--multiline`],copyStyle:`icon`,language:r[1],children:n}):(0,X.jsx)(`code`,{className:ce(Y.markdown__code,ue.text,ue[`text--code-md`]),children:n})},hr(){return(0,X.jsx)(_e,{})},table(e){let{children:t}=e;return(0,X.jsx)(`table`,{className:ce(Y.markdown__table),children:t})},th(e){let{children:t,node:n}=e;return(0,X.jsx)(`th`,{...n?.properties,className:Y.markdown__th,children:t})},thead(e){let{children:t}=e;return(0,X.jsx)(`thead`,{children:t})},td(e){let{children:t,node:n}=e;return(0,X.jsx)(`td`,{className:Y.markdown__td,...n?.properties,children:t})},tr(e){let{children:t}=e;return(0,X.jsx)(`tr`,{children:t})}},remarkPlugins:n?[Ir,...n]:[Ir],...r,children:e})})},Z.displayName=`Markdown`;try{Z.displayName=`Markdown`,Z.__docgenInfo={description:`BETA: This component is still a work in progress and is subject to change.

Generic Markdown component to wrap convert convent into EDS-compliant represenations. Includes all the base
components, plus tables from GitHub-Flavored Markdown. Other features available by using Remark Plugins.

Library documentation:
- https://github.com/remarkjs/react-markdown

Included plugins:
- https://github.com/remarkjs/remark-gfm`,displayName:`Markdown`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Markdown/Markdown.tsx`,methods:[],props:{allowElement:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Filter elements (optional);\n`allowedElements` / `disallowedElements` is used first.",name:`allowElement`,required:!1,tags:{},type:{name:`AllowElement | null`}},allowedElements:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Tag names to allow (default: all tag names);\ncannot combine w/ `disallowedElements`.",name:`allowedElements`,required:!1,tags:{},type:{name:`readonly string[] | null`}},children:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Markdown/Markdown.tsx`,name:`TypeLiteral`}],description:`Markdown.
Markdown content to convert into EDS-based content.`,name:`children`,required:!1,tags:{},type:{name:`string`}},components:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:`Map tag names to components.`,name:`components`,required:!1,tags:{},type:{name:`Components | null`}},disallowedElements:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Tag names to disallow (default: `[]`);\ncannot combine w/ `allowedElements`.",name:`disallowedElements`,required:!1,tags:{},type:{name:`readonly string[] | null`}},rehypePlugins:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:`List of rehype plugins to use.`,name:`rehypePlugins`,required:!1,tags:{},type:{name:`PluggableList | null`}},remarkPlugins:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:`List of remark plugins to use.`,name:`remarkPlugins`,required:!1,tags:{},type:{name:`PluggableList | null`}},remarkRehypeOptions:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Options to pass through to `remark-rehype`.",name:`remarkRehypeOptions`,required:!1,tags:{},type:{name:`Readonly<Options> | null`}},skipHtml:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Ignore HTML in markdown completely (default: `false`).",name:`skipHtml`,required:!1,tags:{},type:{name:`boolean | null`}},unwrapDisallowed:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Extract (unwrap) what’s in disallowed elements (default: `false`);\nnormally when say `strong` is not allowed, it and it’s children are dropped,\nwith `unwrapDisallowed` the element itself is replaced by its children.",name:`unwrapDisallowed`,required:!1,tags:{},type:{name:`boolean | null`}},urlTransform:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/react-markdown/lib/index.d.ts`,name:`TypeLiteral`}],description:"Change URLs (default: `defaultUrlTransform`)",name:`urlTransform`,required:!1,tags:{},type:{name:`UrlTransform | null`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Markdown/Markdown.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Jr,Q,$,Yr;function Xr(){return(Xr=e((()=>{qr(),Jr={title:`Components/Markdown`,component:Z,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},tags:[`beta`,`version:1.0`]},Q={args:{children:`# Introduction

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
`}},Yr=[`Default`,`GithubFlavoredMarkdown`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}Xr();export{Q as Default,$ as GithubFlavoredMarkdown,Yr as __namedExportsOrder,Jr as default};