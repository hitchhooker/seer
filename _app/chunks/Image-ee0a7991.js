import{S as a,i,s as t,e as s,c as n,a as e,d as c,f as r,k as l,n as o,b as d,D as h,E as g,F as m}from"./vendor-c55fcb02.js";function p(a){let i;return{c(){i=s("figcaption")},l(a){i=n(a,"FIGCAPTION",{}),e(i).forEach(c)},m(t,s){r(t,i,s),i.innerHTML=a[3]},p(a,t){8&t&&(i.innerHTML=a[3])},d(a){a&&c(i)}}}function u(a){let i,t,u,f,w,E,P,G=""!==a[3]&&p(a);return{c(){i=s("figure"),t=s("picture"),u=s("source"),f=l(),w=s("img"),P=l(),G&&G.c(),this.h()},l(a){i=n(a,"FIGURE",{});var s=e(i);t=n(s,"PICTURE",{});var r=e(t);u=n(r,"SOURCE",{srcset:!0,type:!0,loading:!0,width:!0}),f=o(r),w=n(r,"IMG",{src:!0,alt:!0,loading:!0,width:!0}),r.forEach(c),P=o(s),G&&G.l(s),s.forEach(c),this.h()},h(){d(u,"srcset",a[1]),d(u,"type","image/webp"),d(u,"loading","lazy"),d(u,"width",a[4]),h(w.src,E=a[0])||d(w,"src",E),d(w,"alt",a[2]),d(w,"loading","lazy"),d(w,"width",a[4])},m(a,s){r(a,i,s),g(i,t),g(t,u),g(t,f),g(t,w),g(i,P),G&&G.m(i,null)},p(a,[t]){2&t&&d(u,"srcset",a[1]),16&t&&d(u,"width",a[4]),1&t&&!h(w.src,E=a[0])&&d(w,"src",E),4&t&&d(w,"alt",a[2]),16&t&&d(w,"width",a[4]),""!==a[3]?G?G.p(a,t):(G=p(a),G.c(),G.m(i,null)):G&&(G.d(1),G=null)},i:m,o:m,d(a){a&&c(i),G&&G.d()}}}function f(a,i,t){let{imageJPG:s}=i,{imageWEBP:n}=i,{alt:e}=i,{caption:c=""}=i,{width:r="100%"}=i;return a.$$set=a=>{"imageJPG"in a&&t(0,s=a.imageJPG),"imageWEBP"in a&&t(1,n=a.imageWEBP),"alt"in a&&t(2,e=a.alt),"caption"in a&&t(3,c=a.caption),"width"in a&&t(4,r=a.width)},[s,n,e,c,r]}class w extends a{constructor(a){super(),i(this,a,f,u,t,{imageJPG:0,imageWEBP:1,alt:2,caption:3,width:4})}}export{w as I};
