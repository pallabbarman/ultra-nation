(this["webpackJsonpultra-nation"]=this["webpackJsonpultra-nation"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){},15:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var c=e(1),r=e.n(c),o=e(6),i=e.n(o),s=e(7),u=e(5),a=(e(12),e(0)),j=function(t){var n=t.cart,e=n.reduce((function(t,n){return t+n.population}),0);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:["This is Cart: ",n.length]}),Object(a.jsxs)("p",{children:["Total Population: ",e]})]})},l=(e(14),function(t){var n=t.country,e=t.handleAddCountry,c=n.name,r=n.population,o=n.flag,i=e;return Object(a.jsxs)("div",{className:"country",children:[Object(a.jsx)("img",{src:o,alt:""}),Object(a.jsx)("h4",{children:c}),Object(a.jsxs)("h5",{children:["Population: ",r]}),Object(a.jsx)("button",{onClick:function(){return i(n)},type:"button",children:"Add Country"})]})});var d=function(){var t=Object(c.useState)([]),n=Object(u.a)(t,2),e=n[0],r=n[1],o=Object(c.useState)([]),i=Object(u.a)(o,2),d=i[0],h=i[1];Object(c.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(t){return t.json()})).then((function(t){return r(t)})).catch((function(t){return console.log(t)}))}),[]);var b=function(t){var n=[].concat(Object(s.a)(d),[t]);h(n)};return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("h1",{children:["Countries: ",e.length]}),Object(a.jsxs)("h4",{children:["Country Added: ",d.length]}),Object(a.jsx)(j,{cart:d})]}),Object(a.jsx)("div",{className:"show-country",children:e.map((function(t){return Object(a.jsx)(l,{country:t,handleAddCountry:b})}))})]})},h=(e(15),function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,i=n.getTTFB;e(t),c(t),r(t),o(t),i(t)}))});i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.c948a8da.chunk.js.map