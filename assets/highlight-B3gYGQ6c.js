var e=new Set(`alignas alignof and and_eq asm auto bitand bitor bool break case catch char
   char8_t char16_t char32_t class compl concept const consteval constexpr
   constinit const_cast continue co_await co_return co_yield decltype default
   delete do double dynamic_cast else enum explicit export extern false float
   for friend goto if inline int long mutable namespace new noexcept not
   not_eq nullptr operator or or_eq private protected public register
   reinterpret_cast requires return short signed sizeof static static_assert
   static_cast struct switch template this thread_local throw true try typedef
   typeid typename union unsigned using virtual void volatile wchar_t while xor
   xor_eq override final`.split(/\s+/));function t(e,t){for(let n=t-1;n>=0;--n){let t=e[n];if(t===`
`)return!0;if(t!==` `&&t!==`	`)return!1}return!0}function n(n){let r=[],i=(e,t)=>{if(!t)return;let n=r[r.length-1];n&&n.kind===e?n.text+=t:r.push({kind:e,text:t})},a=0,o=n.length;for(;a<o;){if(n.startsWith(`//`,a)){let e=n.indexOf(`
`,a),t=e===-1?o:e;i(`com`,n.slice(a,t)),a=t;continue}if(n.startsWith(`/*`,a)){let e=n.indexOf(`*/`,a+2),t=e===-1?o:e+2;i(`com`,n.slice(a,t)),a=t;continue}let r=n[a]??``;if(r===`#`&&t(n,a)){let e=n.indexOf(`
`,a),t=e===-1?o:e;i(`pre`,n.slice(a,t)),a=t;continue}if(r===`"`||r===`'`){let e=a+1;for(;e<o;){if(n[e]===`\\`){e+=2;continue}if(n[e]===r){e+=1;break}if(n[e]===`
`&&r===`'`)break;e+=1}i(`str`,n.slice(a,e)),a=e;continue}if(/[A-Za-z_]/.test(r)){let t=a+1;for(;t<o&&/[A-Za-z0-9_]/.test(n[t]??``);)t+=1;let r=n.slice(a,t);if(r===`R`&&n[t]===`"`){let e=t+1;for(;e<o&&n[e]!==`(`&&n[e]!==`
`;)e+=1;if(n[e]===`(`){let r=`)${n.slice(t+1,e)}"`,s=n.indexOf(r,e+1),c=s===-1?o:s+r.length;i(`str`,n.slice(a,c)),a=c;continue}}i(e.has(r)?`kw`:`plain`,r),a=t;continue}i(`plain`,r),a+=1}let s=[[]];for(let e of r)e.text.split(`
`).forEach((t,n)=>{n>0&&s.push([]),t&&s[s.length-1]?.push({kind:e.kind,text:t})});return n.endsWith(`
`)&&s.push([]),s}var r={plain:`text-code-ink`,kw:`text-code-oxide`,str:`text-code-string`,com:`text-code-muted italic`,pre:`text-code-oxide`};export{r as n,n as t};