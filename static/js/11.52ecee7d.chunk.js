(this["webpackJsonpHonest-frontend"]=this["webpackJsonpHonest-frontend"]||[]).push([[11],{703:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var c,r,a,i=n(62),o=n(0),s=n.n(o),b=n(3),u=n(13),j=b.e.div(c||(c=Object(i.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),l=function(e){var t,n=e.size,c=void 0===n?"md":n,r=Object(o.useContext)(b.a).spacing;switch(c){case"lg":t=r[6];break;case"sm":t=r[2];break;case"md":default:t=r[4]}return Object(u.jsx)(j,{size:t})},d=b.e.div(r||(r=Object(i.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),O=b.e.div(a||(a=Object(i.a)(["\n  flex: 1;\n  text-align: center;\n"]))),x=function(e){var t=e.children,n=s.a.Children.toArray(t).length;return Object(u.jsx)(d,{children:s.a.Children.map(t,(function(e,t){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{children:e}),t<n-1&&Object(u.jsx)(l,{})]})}))})}},704:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var c,r,a,i,o,s,b,u=n(62),j=(n(0),n(3)),l=n(706),d=n(51),O=n(699),x=n(13),p=j.e.div(c||(c=Object(u.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),m=j.e.input(r||(r=Object(u.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.colors.primary})),f=function(e){var t=e.endAdornment,n=e.onChange,c=e.placeholder,r=e.startAdornment,a=e.value;return Object(x.jsxs)(p,{children:[!!r&&r,Object(x.jsx)(m,{placeholder:c,value:a,onChange:n}),!!t&&t]})},h=j.e.div(a||(a=Object(u.a)([""]))),k=j.e.div(i||(i=Object(u.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),v=j.e.div(o||(o=Object(u.a)(["\n  align-items: center;\n  display: flex;\n"]))),g=j.e.div(s||(s=Object(u.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),y=j.e.span(b||(b=Object(u.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),S=function(e){var t=e.max,n=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,i=e.depositFeeBP,o=void 0===i?0:i,s=Object(O.a)();return Object(x.jsxs)(h,{children:[Object(x.jsxs)(g,{children:[t.toLocaleString()," ",n," ",s(526,"Available")]}),Object(x.jsx)(f,{endAdornment:Object(x.jsxs)(v,{children:[Object(x.jsx)(y,{children:n}),Object(x.jsx)(k,{}),Object(x.jsx)("div",{children:Object(x.jsx)(d.d,{size:"sm",onClick:r,children:s(452,"Max")})})]}),onChange:c,placeholder:"0",value:a}),o>0?Object(x.jsxs)(g,{children:[s(10001,"Deposit Fee"),": ",new l.a(a||0).times(o/1e4).toString()," ",n]}):null]})}},705:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var c=n(4),r=n.n(c),a=n(16),i=n(0),o=n(72),s=n(55),b=n(138),u=n(702),j=n(701),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(s.b)(),c=Object(o.m)(),l=c.account,d=Object(j.f)(e),O=Object(i.useCallback)(function(){var c=Object(a.a)(r.a.mark((function c(a){var i;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i=t?u.g:u.f,c.next=3,i(d,a,l);case 3:n(Object(b.g)(String(e),l)),n(Object(b.e)(String(e),l));case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),[l,n,t,d,e]);return{onStake:O}};t.a=function(e){var t=Object(s.b)(),n=Object(o.m)().account,c=Object(j.e)();return{onStake:Object(i.useCallback)(function(){var i=Object(a.a)(r.a.mark((function a(i){var o;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(u.h)(c,e,i,n);case 2:o=r.sent,t(Object(b.a)(n)),console.info(o);case 5:case"end":return r.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[n,t,c,e])}}},707:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return a}));n(0);var c=n(51),r=n(13),a=function(){return Object(r.jsx)(c.A,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"No Fees"})},i=function(){return Object(r.jsx)(c.A,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"Core"})},o=function(){return Object(r.jsx)(c.A,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.l,{}),children:"Community"})},s=function(){return Object(r.jsx)(c.A,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.c,{}),children:"Binance"})}},708:function(e,t,n){"use strict";t.a=function(e){var t=e.quoteTokenAdresses,n=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===n?"ETH":t[137],a=c[137];return"".concat(r,"/").concat(a)}},709:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var c=n(4),r=n.n(c),a=n(16),i=n(117),o=n.n(i),s=n(63),b=function(e,t){return new(new o.a(e).eth.Contract)(s,t)},u=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},710:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(706);c.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new c.a(.5);var r=new c.a(15768e3)},711:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var c=n(4),r=n.n(c),a=n(16),i=n(0),o=n(72),s=(n(714),n(55)),b=n(138),u=n(702),j=n(701),l=function(e){var t=Object(s.b)(),n=Object(o.m)().account,c=Object(j.e)();return{onApprove:Object(i.useCallback)(Object(a.a)(r.a.mark((function a(){var i;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(u.a)(e,c,n);case 3:return i=r.sent,t(Object(b.a)(n)),r.abrupt("return",i);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",!1);case 11:case"end":return r.stop()}}),a,null,[[0,8]])}))),[n,t,e,c])}},d=function(e,t){var n=Object(s.b)(),c=Object(o.m)().account,l=Object(j.f)(t);return{onApprove:Object(i.useCallback)(Object(a.a)(r.a.mark((function a(){var i;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(u.a)(e,l,c);case 3:return i=r.sent,n(Object(b.d)(String(t),c)),r.abrupt("return",i);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",!1);case 11:case"end":return r.stop()}}),a,null,[[0,8]])}))),[c,n,e,l,t])}}},712:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var c=n(4),r=n.n(c),a=n(16),i=n(0),o=n(72),s=n(55),b=n(138),u=n(702),j=n(701),l=function(e){var t=Object(s.b)(),n=Object(o.m)().account,c=Object(j.f)(e);return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(r.a.mark((function a(i){return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(u.c)(c,i,n);case 2:t(Object(b.g)(String(e),n)),t(Object(b.e)(String(e),n)),t(Object(b.f)(String(e),n));case 5:case"end":return r.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[n,t,c,e])}};t.a=function(e){var t=Object(s.b)(),n=Object(o.m)().account,c=Object(j.e)();return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(r.a.mark((function a(i){var o;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(u.i)(c,e,i,n);case 2:o=r.sent,t(Object(b.a)(n)),console.info(o);case 5:case"end":return r.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[n,t,c,e])}}},715:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));var c=function(e){var t,n=e.numberOfDays,c=e.farmApy/100,r=n/365,a=1e3/e.cakePrice,i=a*Math.pow(1+c/365,365*r);return t=i-a,Math.round(100*t)/100},r=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)}},725:function(e,t,n){"use strict";var c,r=n(62),a=n(3).e.div(c||(c=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));t.a=a},823:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ce}));var c,r,a,i,o,s,b,u,j,l,d,O,x,p,m,f,h=n(17),k=n(26),v=n(0),g=n(29),y=n(55),S=n(14),w=n.n(S),C=n(72),T=n(51),B=n(710),A=n(725),P=n(181),I=n(113),D=n(141),z=n(138),F=n(34),q=n(699),L=n(62),N=n(3),E=n(707),M=n(13),H=Object(N.e)(T.m)(c||(c=Object(L.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),G=Object(N.e)(T.A)(r||(r=Object(L.a)(["\n  margin-left: 4px;\n"]))),Q=function(e){var t=e.lpLabel,n=e.multiplier,c=(e.risk,e.farmImage),r=e.tokenSymbol,a=e.depositFee;return Object(M.jsxs)(H,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(M.jsx)(T.p,{src:"/images/farms/".concat(c,".png"),alt:r,width:64,height:64}),Object(M.jsxs)(T.m,{flexDirection:"column",alignItems:"flex-end",children:[Object(M.jsx)(T.n,{mb:"4px",children:t}),Object(M.jsxs)(T.m,{justifyContent:"center",children:[Object(M.jsx)(G,{variant:"secondary",children:n}),0===a?Object(M.jsx)(E.d,{}):null]})]})]})},R=n(4),U=n.n(R),W=n(16),X=n(709),J=n(716),$=n(711),_=n(705),K=n(712),Y=n(700),V=n(703),Z=n(704),ee=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,i=e.depositFeeBP,o=void 0===i?0:i,s=Object(v.useState)(""),b=Object(k.a)(s,2),u=b[0],j=b[1],l=Object(v.useState)(!1),d=Object(k.a)(l,2),O=d[0],x=d[1],p=Object(q.a)(),m=Object(v.useMemo)((function(){return Object(Y.b)(t)}),[t]),f=Object(v.useCallback)((function(e){j(e.currentTarget.value)}),[j]),h=Object(v.useCallback)((function(){j(m)}),[m,j]);return Object(M.jsxs)(T.v,{title:"".concat(p(316,"Deposit")," ").concat(a," Tokens"),onDismiss:c,children:[Object(M.jsx)(Z.a,{value:u,onSelectMax:h,onChange:f,max:m,symbol:a,depositFeeBP:o}),Object(M.jsxs)(V.a,{children:[Object(M.jsx)(T.d,{variant:"secondary",onClick:c,children:p(462,"Cancel")}),Object(M.jsx)(T.d,{disabled:O,onClick:Object(W.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,n(u);case 3:x(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:O?p(488,"Pending Confirmation"):p(464,"Confirm")})]})]})},te=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,i=Object(v.useState)(""),o=Object(k.a)(i,2),s=o[0],b=o[1],u=Object(v.useState)(!1),j=Object(k.a)(u,2),l=j[0],d=j[1],O=Object(q.a)(),x=Object(v.useMemo)((function(){return Object(Y.b)(c)}),[c]),p=Object(v.useCallback)((function(e){b(e.currentTarget.value)}),[b]),m=Object(v.useCallback)((function(){b(x)}),[x,b]);return Object(M.jsxs)(T.v,{title:"Withdraw ".concat(a),onDismiss:n,children:[Object(M.jsx)(Z.a,{onSelectMax:m,onChange:p,value:s,max:x,symbol:a}),Object(M.jsxs)(V.a,{children:[Object(M.jsx)(T.d,{variant:"secondary",onClick:n,children:O(462,"Cancel")}),Object(M.jsx)(T.d,{disabled:l,onClick:Object(W.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,t(s);case 3:d(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:l?O(488,"Pending Confirmation"):O(464,"Confirm")})]})]})},ne=N.e.div(a||(a=Object(L.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),ce=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.depositFeeBP,i=Object(q.a)(),o=Object(_.a)(r).onStake,s=Object(K.a)(r).onUnstake,b=Object(Y.a)(t),u=b.toLocaleString(),j=Object(T.G)(Object(M.jsx)(ee,{max:n,onConfirm:o,tokenName:c,depositFeeBP:a})),l=Object(k.a)(j,1)[0],d=Object(T.G)(Object(M.jsx)(te,{max:t,onConfirm:s,tokenName:c})),O=Object(k.a)(d,1)[0];return Object(M.jsxs)(T.m,{justifyContent:"space-between",alignItems:"center",children:[Object(M.jsx)(T.n,{color:0===b?"textDisabled":"text",children:u}),0===b?Object(M.jsx)(T.d,{onClick:l,children:i(999,"Stake")}):Object(M.jsxs)(ne,{children:[Object(M.jsx)(T.o,{variant:"tertiary",onClick:O,mr:"6px",children:Object(M.jsx)(T.u,{color:"primary"})}),Object(M.jsx)(T.o,{variant:"tertiary",onClick:l,children:Object(M.jsx)(T.a,{color:"primary"})})]})]})},re=n(713),ae=N.e.div(i||(i=Object(L.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),ie=function(e){var t=e.earnings,n=e.pid,c=Object(q.a)(),r=Object(v.useState)(!1),a=Object(k.a)(r,2),i=a[0],o=a[1],s=Object(re.b)(n).onReward,b=(Object(_.a)(n).onStake,Object(Y.a)(t)),u=b.toLocaleString();return Object(M.jsxs)(T.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(M.jsx)(T.n,{color:0===b?"textDisabled":"text",children:u}),Object(M.jsx)(ae,{children:Object(M.jsx)(T.d,{disabled:0===b||i,onClick:Object(W.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,s();case 3:o(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})})]})},oe=N.e.div(o||(o=Object(L.a)(["\n  padding-top: 16px;\n"]))),se=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=Object(q.a)(),a=Object(v.useState)(!1),i=Object(k.a)(a,2),o=i[0],s=i[1],b=Object(I.a)(t.pid),u=b.pid,j=b.lpAddresses,l=b.tokenAddresses,d=b.isTokenOnly,O=b.depositFeeBP,x=Object(I.b)(u),p=x.allowance,m=x.tokenBalance,f=x.stakedBalance,h=x.earnings,g=j[137],y=l[137],S=t.lpSymbol.toUpperCase(),w=c&&p&&p.isGreaterThan(0),C=Object(v.useMemo)((function(){return d?Object(X.a)(n,y):Object(X.a)(n,g)}),[n,g,y,d]),B=Object($.a)(C).onApprove,A=Object(v.useCallback)(Object(W.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,B();case 4:s(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[B]);return Object(M.jsxs)(oe,{children:[Object(M.jsxs)(T.m,{children:[Object(M.jsx)(T.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"Honest"}),Object(M.jsx)(T.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Earned")})]}),Object(M.jsx)(ie,{earnings:h,pid:u}),Object(M.jsxs)(T.m,{children:[Object(M.jsx)(T.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:S}),Object(M.jsx)(T.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Staked")})]}),c?w?Object(M.jsx)(ce,{stakedBalance:f,tokenBalance:m,tokenName:S,pid:u,depositFeeBP:O}):Object(M.jsx)(T.d,{mt:"8px",fullWidth:!0,disabled:o,onClick:A,children:r(999,"Approve Contract")}):Object(M.jsx)(J.a,{mt:"8px",fullWidth:!0})]})},be=n(708),ue=n(715),je=N.e.div(s||(s=Object(L.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),le=N.e.div(b||(b=Object(L.a)(["\n  margin-bottom: '10px';\n"]))),de=Object(N.e)(T.B)(u||(u=Object(L.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),Oe=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,i=e.cakePrice,o=e.apy,s=Object(q.a)(),b=Object(be.a)({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),u=o.times(new w.a(100)).toNumber(),j=1e3/i.toNumber(),l=Object(ue.b)({numberOfDays:1,farmApy:u,cakePrice:i}),d=Object(ue.b)({numberOfDays:7,farmApy:u,cakePrice:i}),O=Object(ue.b)({numberOfDays:30,farmApy:u,cakePrice:i}),x=Object(ue.b)({numberOfDays:365,farmApy:u,cakePrice:i});return Object(M.jsxs)(T.v,{title:"ROI",onDismiss:t,children:[Object(M.jsxs)(je,{children:[Object(M.jsx)(le,{children:Object(M.jsx)(T.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:s(999,"Timeframe")})}),Object(M.jsx)(le,{children:Object(M.jsx)(T.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:s(999,"ROI")})}),Object(M.jsx)(le,{children:Object(M.jsx)(T.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:s(999,"Honest per $1000")})}),Object(M.jsx)(le,{children:Object(M.jsx)(T.B,{children:"1d"})}),Object(M.jsx)(le,{children:Object(M.jsxs)(T.B,{children:[Object(ue.a)({amountEarned:l,amountInvested:j}),"%"]})}),Object(M.jsx)(le,{children:Object(M.jsx)(T.B,{children:l})}),Object(M.jsx)(le,{children:Object(M.jsx)(T.B,{children:"7d"})}),Object(M.jsx)(le,{children:Object(M.jsxs)(T.B,{children:[Object(ue.a)({amountEarned:d,amountInvested:j}),"%"]})}),Object(M.jsx)(le,{children:Object(M.jsx)(T.B,{children:d})}),Object(M.jsx)(le,{children:Object(M.jsx)(T.B,{children:"30d"})}),Object(M.jsx)(le,{children:Object(M.jsxs)(T.B,{children:[Object(ue.a)({amountEarned:O,amountInvested:j}),"%"]})}),Object(M.jsx)(le,{children:Object(M.jsx)(T.B,{children:O})}),Object(M.jsx)(le,{children:Object(M.jsx)(T.B,{children:"365d(APY)"})}),Object(M.jsx)(le,{children:Object(M.jsxs)(T.B,{children:[Object(ue.a)({amountEarned:x,amountInvested:j}),"%"]})}),Object(M.jsx)(le,{children:Object(M.jsx)(T.B,{children:x})})]}),Object(M.jsx)(de,{fontSize:"12px",color:"textSubtle",children:s(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(M.jsx)(T.m,{justifyContent:"center",children:Object(M.jsxs)(T.r,{href:"https://exchange.pancakeswap.finance/#/add/".concat(b),children:[s(999,"Get")," ",n]})})]})},xe=function(e){var t=e.lpLabel,n=e.quoteTokenAdresses,c=e.quoteTokenSymbol,r=e.tokenAddresses,a=e.cakePrice,i=e.apy,o=Object(T.G)(Object(M.jsx)(Oe,{lpLabel:t,quoteTokenAdresses:n,quoteTokenSymbol:c,tokenAddresses:r,cakePrice:a,apy:i})),s=Object(k.a)(o,1)[0];return Object(M.jsx)(T.o,{onClick:s,variant:"text",size:"sm",ml:"4px",children:Object(M.jsx)(T.g,{})})},pe=Object(N.f)(j||(j=Object(L.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),me=N.e.div(l||(l=Object(L.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),pe),fe=N.e.div(d||(d=Object(L.a)(["\nalign-self: baseline;\nbackground-image: url('/images/egg/farmcard.gif');\nbackground-size: cover;\n\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]))),he=N.e.div(O||(O=Object(L.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),ke=(N.e.div(x||(x=Object(L.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,a=e.ethereum,i=e.account,o=Object(q.a)(),s=Object(v.useState)(!1),b=Object(k.a)(s,2),u=(b[0],b[1],t.isTokenOnly?t.tokenSymbol.toLowerCase():"".concat(t.tokenSymbol.toLowerCase(),"-").concat(t.quoteTokenSymbol.toLowerCase())),j=Object(v.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===F.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===F.b.CAKE?c.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),l=(j&&"$".concat(Number(j).toLocaleString(void 0,{maximumFractionDigits:0})),t.lpSymbol),d=t.apy&&t.apy.times(new w.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),O=t.quoteTokenAdresses,x=t.quoteTokenSymbol,p=t.tokenAddresses,m=t.risk;return Object(M.jsxs)(fe,{children:["HONEST"===t.tokenSymbol&&Object(M.jsx)(me,{}),Object(M.jsx)(Q,{lpLabel:l,multiplier:t.multiplier,risk:m,depositFee:t.depositFeeBP,farmImage:u,tokenSymbol:t.tokenSymbol}),!n&&Object(M.jsxs)(T.m,{justifyContent:"space-between",alignItems:"center",children:[Object(M.jsxs)(T.B,{children:[o(352,"APR"),":"]}),Object(M.jsx)(T.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(xe,{lpLabel:l,quoteTokenAdresses:O,quoteTokenSymbol:x,tokenAddresses:p,cakePrice:c,apy:t.apy}),d,"%"]}):Object(M.jsx)(T.y,{height:24,width:80})})]}),Object(M.jsxs)(T.m,{justifyContent:"space-between",children:[Object(M.jsxs)(T.B,{children:[o(318,"Earn"),":"]}),Object(M.jsx)(T.B,{bold:!0,children:"HONEST"})]}),Object(M.jsxs)(T.m,{justifyContent:"space-between",children:[Object(M.jsxs)(T.B,{style:{fontSize:"24px"},children:[o(10001,"Deposit Fee"),":"]}),Object(M.jsxs)(T.B,{bold:!0,style:{fontSize:"24px"},children:[t.depositFeeBP/100,"%"]})]}),Object(M.jsx)(se,{farm:t,ethereum:a,account:i}),Object(M.jsx)(he,{})]})}),ve=n(73),ge=function(e){var t=e.stakedOnly,n=e.setStakedOnly,c=Object(g.g)(),r=c.url,a=c.isExact,i=Object(q.a)();return Object(M.jsxs)(ye,{children:[Object(M.jsxs)(Se,{children:[Object(M.jsx)(T.C,{checked:t,onChange:function(){return n(!t)}}),Object(M.jsxs)(T.B,{children:[" ",i(699,"Staked only")]})]}),Object(M.jsxs)(T.e,{activeIndex:a?0:1,size:"sm",variant:"subtle",children:[Object(M.jsx)(T.f,{as:ve.b,to:"".concat(r),children:i(698,"Active")}),Object(M.jsx)(T.f,{as:ve.b,to:"".concat(r,"/history"),children:i(700,"Inactive")})]})]})},ye=N.e.div(p||(p=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),Se=N.e.div(m||(m=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),T.B),we=N.e.div(f||(f=Object(L.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),Ce=function(e){var t=Object(g.g)().path,n=(Object(q.a)(),Object(I.c)()),c=Object(I.g)(),r=Object(I.f)(),a=Object(C.m)(),i=a.account,o=a.ethereum,s=e.tokenMode,b=Object(y.b)(),u=Object(D.a)().fastRefresh;Object(v.useEffect)((function(){i&&b(Object(z.a)(i))}),[i,b,u]);var j=Object(v.useState)(!1),l=Object(k.a)(j,2),d=l[0],O=l[1],x=n.filter((function(e){return!!e.isTokenOnly===!!s&&"0X"!==e.multiplier&&8!==e.pid})),p=n.filter((function(e){return!!e.isTokenOnly===!!s&&"0X"===e.multiplier&&8!==e.pid})),m=x.filter((function(e){return e.userData&&new w.a(e.userData.stakedBalance).isGreaterThan(0)})),f=Object(v.useCallback)((function(e,t){return e.map((function(e){var t=new w.a(e.honestPerBlock||1).times(new w.a(e.poolWeight)).div(new w.a(10).pow(18)).times(B.a),n=c.times(t),a=new w.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===F.b.BNB&&(a=a.times(r)),a.comparedTo(0)>0&&(n=n.div(a)),Object(h.a)(Object(h.a)({},e),{},{apy:n})})).map((function(e){return Object(M.jsx)(ke,{farm:e,removed:t,bnbPrice:r,cakePrice:c,ethereum:o,account:i},e.pid)}))}),[r,i,c,o]);return Object(M.jsxs)(P.a,{children:[Object(M.jsx)(T.n,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:s?"Stake tokens to earn honest":"Stake LP tokens to earn honest"}),Object(M.jsx)(ge,{stakedOnly:d,setStakedOnly:O}),Object(M.jsxs)("div",{children:[Object(M.jsx)(we,{}),Object(M.jsxs)(A.a,{children:[Object(M.jsx)(g.a,{exact:!0,path:"".concat(t),children:f(d?m:x,!1)}),Object(M.jsx)(g.a,{exact:!0,path:"".concat(t,"/history"),children:f(p,!0)})]})]})]})}}}]);
//# sourceMappingURL=11.52ecee7d.chunk.js.map