(this["webpackJsonpHonest-frontend"]=this["webpackJsonpHonest-frontend"]||[]).push([[16],{699:function(n,e,t){"use strict";var r=t(0),i=t(180),c=/%(.*?)%/,s=function(n,e,t){var r=n.find((function(n){return n.data.stringId===e}));if(r){var i=r.data.text;return i.includes("%")?function(n,e){var t=c.exec(n)[0],r=e.split(" ")[0];return n.replace(t,r)}(i,t):i}return t};e.a=function(){var n=Object(r.useContext)(i.a).translations;return function(e,t){return"error"===n[0]?t:n.length>0?s(n,e,t):t}}},721:function(n,e,t){"use strict";t.d(e,"a",(function(){return r.a})),t.d(e,"c",(function(){return i.a})),t.d(e,"b",(function(){return c}));var r=t(61),i=t(40),c=[];r.a.filter((function(n){return n.isCommunity})).map((function(n){return n.tokenSymbol}))},828:function(n,e,t){"use strict";t.r(e);t(0);var r,i,c,s,o,a,l,u,d,j=t(29),b=t(192),h=t(62),m=t(3),x=t(73),f=t(51),p=t(13),O=m.e.div(r||(r=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 39px;\n"]))),g=function(){var n=Object(j.g)(),e=n.url,t=n.isExact;return Object(p.jsx)(O,{children:Object(p.jsxs)(f.e,{activeIndex:t?0:1,size:"sm",variant:"subtle",children:[Object(p.jsx)(f.f,{as:x.b,to:"".concat(e),children:"Current IDO"}),Object(p.jsx)(f.f,{as:x.b,to:"".concat(e,"/history"),children:"Past IDOs"})]})})},y=t(699),v=Object(m.e)(f.n).attrs({as:"h1",size:"xl"})(i||(i=Object(h.a)(["\n  color: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.primary})),w=Object(m.e)(f.B)(c||(c=Object(h.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n"])),(function(n){return n.theme.colors.secondary})),I=m.e.div(s||(s=Object(h.a)(["\n  padding-bottom: 24px;\n  padding-top: 24px;\n"]))),k=function(){Object(y.a)();return Object(p.jsx)(I,{children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(v,{children:"Initial Dex Offering"}),Object(p.jsx)(w,{children:"Invest in Innovative Projects"})]})})},D=t(721),C=Object(m.e)(f.n).attrs({size:"lg"})(o||(o=Object(h.a)(["\n  color: ",";\n  margin-bottom: 16px;\n"])),(function(n){return n.theme.colors.secondary})),Q=Object(m.e)(f.b)(a||(a=Object(h.a)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  margin: 0 auto;\n  padding: 32px 0;\n\n  "," {\n    grid-template-columns: 1fr 1fr;\n  }\n"])),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.theme.mediaQueries.sm})),A=m.e.ul(l||(l=Object(h.a)(["\n  color: ",";\n  margin-bottom: 16px;\n\n  & > li {\n    line-height: 1.4;\n    margin-bottom: 8px;\n  }\n"])),(function(n){return n.theme.colors.text})),B=Object(m.e)(f.b)(u||(u=Object(h.a)(["\n  align-items: start;\n  margin-bottom: 20px;\n  margin-top: 30px;\n\n  & > div {\n    grid-column: span 7;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 7;\n    }\n  }\n"])),(function(n){return n.theme.mediaQueries.xs}),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.lg})),H=m.e.div(d||(d=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  \n  grid-column: span 12 !important;\n\n  "," {\n    grid-column: span 12 !important;\n  }\n\n  "," {\n    grid-column: span 12 !important;\n  }\n\n  "," {\n    grid-column: span 12 !important;\n  }\n"])),(function(n){return n.theme.mediaQueries.xs}),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.lg})),S=(D.b.find((function(n){return n.isActive})),function(){var n=Object(y.a)();return Object(p.jsxs)("div",{children:[Object(p.jsx)(B,{children:Object(p.jsx)(H,{children:Object(p.jsx)(f.B,{color:"secondary",children:"Disclaimer: Crypto / Defi markets and projects are considered high risk investments. Always do your own research (DYOR) into any project that you invest. You are responsible for your own investing strategy, and should manage your own risk. Only Invest what you can afford to lose!"})})}),Object(p.jsxs)(Q,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(C,{as:"h2",children:n(592,"How to take part")}),Object(p.jsxs)(f.n,{mb:"16px",children:[n(594,"Before Sale"),":"]}),Object(p.jsxs)(A,{children:[Object(p.jsx)("li",{children:"Buy MATIC"}),Object(p.jsx)("li",{children:"Wait for the Sale to start"})]}),Object(p.jsx)(f.m,{mb:"16px",children:Object(p.jsx)(f.r,{href:"https://polyHonest.finance/buy",mr:"16px",children:"Buy MATIC"})}),Object(p.jsxs)(f.n,{mb:"16px",children:[n(600,"During Sale"),":"]}),Object(p.jsx)(A,{children:Object(p.jsx)("li",{children:"While the sale is live, commit your MATIC tokens to buy the tokens"})}),Object(p.jsxs)(f.n,{mb:"16px",children:[n(604,"After Sale"),":"]}),Object(p.jsxs)(A,{children:[Object(p.jsx)("li",{children:"Claim the tokens you bought, along with any unspent funds."}),Object(p.jsx)("li",{children:n(608,"Done!")})]})]}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(C,{as:"h2",children:"Want to launch your own IDO?"}),Object(p.jsx)(f.B,{mb:3,children:"Launch your project with PolyHonest, Polygon Network\u2019s most transparent and active DeFi Platform"}),Object(p.jsx)(f.d,{as:"a",href:"https://t.me/polyHonesthead",external:!0,children:"Contact Us"})]})})]})]})});e.default=function(){Object(j.g)().path;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{}),Object(p.jsxs)(b.a,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(S,{})]})]})}}}]);
//# sourceMappingURL=16.a3dd28bb.chunk.js.map