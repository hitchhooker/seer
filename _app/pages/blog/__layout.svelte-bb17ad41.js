import{S as s,i as e,s as t,e as a,k as n,j as o,P as r,c,d as l,n as $,m as i,b as p,D as d,f as h,o as f,x as u,u as m,v as x,F as k,G as g,H as y,I}from"../../chunks/vendor-6af88ea1.js";import{b}from"../../chunks/paths-45dac81d.js";import{P as j}from"../../chunks/PageTransition-c353d768.js";function v(s){let e;const t=s[2].default,a=k(t,s,s[3],null);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,t){a&&a.m(s,t),e=!0},p(s,n){a&&a.p&&(!e||8&n)&&g(a,t,s,s[3],e?I(t,s[3],n,null):y(s[3]),null)},i(s){e||(u(a,s),e=!0)},o(s){m(a,s),e=!1},d(s){a&&a.d(s)}}}function P(s){let e,t,k,g;return k=new j({props:{refresh:s[0],$$slots:{default:[v]},$$scope:{ctx:s}}}),{c(){e=a("link"),t=n(),o(k.$$.fragment),this.h()},l(s){const a=r('[data-svelte="svelte-cgb4xc"]',document.head);e=c(a,"LINK",{href:!0,rel:!0}),a.forEach(l),t=$(s),i(k.$$.fragment,s),this.h()},h(){p(e,"href",`${b}/prism.css`),p(e,"rel","stylesheet")},m(s,a){d(document.head,e),h(s,t,a),f(k,s,a),g=!0},p(s,[e]){const t={};1&e&&(t.refresh=s[0]),8&e&&(t.$$scope={dirty:e,ctx:s}),k.$set(t)},i(s){g||(u(k.$$.fragment,s),g=!0)},o(s){m(k.$$.fragment,s),g=!1},d(s){l(e),s&&l(t),x(k,s)}}}const w=async({page:s})=>({props:{isIndex:"/blog/"===s.path||"/blog"===s.path,key:s.path}});function D(s,e,t){let{$$slots:a={},$$scope:n}=e,{isIndex:o}=e,{key:r}=e;return s.$$set=s=>{"isIndex"in s&&t(1,o=s.isIndex),"key"in s&&t(0,r=s.key),"$$scope"in s&&t(3,n=s.$$scope)},[r,o,a,n]}export default class extends s{constructor(s){super(),e(this,s,D,P,t,{isIndex:1,key:0})}}export{w as load};
