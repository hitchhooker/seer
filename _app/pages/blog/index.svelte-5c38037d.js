import{_ as t}from"../../chunks/preload-helper-13c00eaa.js";import{S as s,i as e,s as a,e as o,t as r,k as h,c as l,a as n,g as i,d as p,n as f,b as c,f as d,F as m,h as _,G as u,I as E}from"../../chunks/vendor-526315b7.js";function g(t,s,e){const a=t.slice();return a[1]=s[e].path,a[2]=s[e].metadata.title,a}function b(t){let s,e,a,u,E,g=t[2]+"";return{c(){s=o("li"),e=o("a"),a=r(g),E=h(),this.h()},l(t){s=l(t,"LI",{});var o=n(s);e=l(o,"A",{href:!0});var r=n(e);a=i(r,g),r.forEach(p),E=f(o),o.forEach(p),this.h()},h(){c(e,"href",u=`/blog/${t[1].replace(".md","")}`)},m(t,o){d(t,s,o),m(s,e),m(e,a),m(s,E)},p(t,s){1&s&&g!==(g=t[2]+"")&&_(a,g),1&s&&u!==(u=`/blog/${t[1].replace(".md","")}`)&&c(e,"href",u)},d(t){t&&p(s)}}}function w(t){let s,e,a,_,w,j,v,A,I,L=t[0],P=[];for(let o=0;o<L.length;o+=1)P[o]=b(g(t,L,o));return{c(){s=o("ul");for(let t=0;t<P.length;t+=1)P[t].c();e=h(),a=o("p"),_=r("Thank to "),w=o("a"),j=r("WebJeda"),v=r("for the "),A=o("a"),I=r("inspiration"),this.h()},l(t){s=l(t,"UL",{});var o=n(s);for(let s=0;s<P.length;s+=1)P[s].l(o);o.forEach(p),e=f(t),a=l(t,"P",{});var r=n(a);_=i(r,"Thank to "),w=l(r,"A",{href:!0});var h=n(w);j=i(h,"WebJeda"),h.forEach(p),v=i(r,"for the "),A=l(r,"A",{href:!0});var c=n(A);I=i(c,"inspiration"),c.forEach(p),r.forEach(p),this.h()},h(){c(w,"href","https://blog.webjeda.com"),c(A,"href","https://www.youtube.com/watch?v=sKKgT0SEioI&list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V&index=1")},m(t,o){d(t,s,o);for(let e=0;e<P.length;e+=1)P[e].m(s,null);d(t,e,o),d(t,a,o),m(a,_),m(a,w),m(w,j),m(a,v),m(a,A),m(A,I)},p(t,[e]){if(1&e){let a;for(L=t[0],a=0;a<L.length;a+=1){const o=g(t,L,a);P[a]?P[a].p(o,e):(P[a]=b(o),P[a].c(),P[a].m(s,null))}for(;a<P.length;a+=1)P[a].d(1);P.length=L.length}},i:u,o:u,d(t){t&&p(s),E(P,t),t&&p(e),t&&p(a)}}}const j={"./first-post.md":()=>t((()=>import("./first-post.md-92570ad0.js")),["/memento-sveltekit-and-github-pages/_app/pages/blog/first-post.md-92570ad0.js","/memento-sveltekit-and-github-pages/_app/chunks/vendor-526315b7.js","/memento-sveltekit-and-github-pages/_app/chunks/Box-576f2454.js","/memento-sveltekit-and-github-pages/_app/assets/Box-25fac082.css"]),"./hello-world.md":()=>t((()=>import("./hello-world.md-4a3f4fb0.js")),["/memento-sveltekit-and-github-pages/_app/pages/blog/hello-world.md-4a3f4fb0.js","/memento-sveltekit-and-github-pages/_app/chunks/vendor-526315b7.js","/memento-sveltekit-and-github-pages/_app/chunks/Box-576f2454.js","/memento-sveltekit-and-github-pages/_app/assets/Box-25fac082.css","/memento-sveltekit-and-github-pages/_app/chunks/drums-8db4ebbd.js"]),"./help-it.md":()=>t((()=>import("./help-it.md-3211abcc.js")),["/memento-sveltekit-and-github-pages/_app/pages/blog/help-it.md-3211abcc.js","/memento-sveltekit-and-github-pages/_app/chunks/vendor-526315b7.js"]),"./second-post.md":()=>t((()=>import("./second-post.md-1e762858.js")),["/memento-sveltekit-and-github-pages/_app/pages/blog/second-post.md-1e762858.js","/memento-sveltekit-and-github-pages/_app/chunks/vendor-526315b7.js","/memento-sveltekit-and-github-pages/_app/chunks/Box-576f2454.js","/memento-sveltekit-and-github-pages/_app/assets/Box-25fac082.css","/memento-sveltekit-and-github-pages/_app/chunks/drums-8db4ebbd.js"]),"./third-post.md":()=>t((()=>import("./third-post.md-148ba2e0.js")),["/memento-sveltekit-and-github-pages/_app/pages/blog/third-post.md-148ba2e0.js","/memento-sveltekit-and-github-pages/_app/chunks/vendor-526315b7.js","/memento-sveltekit-and-github-pages/_app/chunks/Box-576f2454.js","/memento-sveltekit-and-github-pages/_app/assets/Box-25fac082.css","/memento-sveltekit-and-github-pages/_app/chunks/drums-8db4ebbd.js"])};let v=[];for(let L in j)v.push(j[L]().then((({metadata:t})=>({path:L,metadata:t}))));async function A(){return{props:{posts:await Promise.all(v)}}}function I(t,s,e){let{posts:a}=s;return t.$$set=t=>{"posts"in t&&e(0,a=t.posts)},[a]}export default class extends s{constructor(t){super(),e(this,t,I,w,a,{posts:0})}}export{A as load};
