webpackJsonp([6],{"5iFC":function(e,t){},GGAH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Dd8w"),a=n.n(s),i=n("Xxa5"),r=n.n(i),c=n("exGp"),o=n.n(c),d=n("NYxO"),u=n("JHeQ"),l=n("OFOn"),p={name:"pledgeDetail",data:function(){return{propertyList:[{id:1,name:"币种"}],days:[{id:0,name:"90天"},{id:1,name:"180天"},{id:2,name:"365天"}],activeDayIndex:2,depositNum:"",tokenBalance:"--",tokenAddress:"",originName:"",name:"",approved:0,decimals:18,isDemand:!1,unfoldTypeBalance:{day90:{balance:"--",already:!1},day180:{balance:"--",already:!1},day365:{balance:"--",already:!1}}}},created:function(){try{var e=sessionStorage.getItem("plInfo"),t=JSON.parse(e);this.tokenAddress=t.token,this.isDemand=t.demand,this.decimals=t.decimals,this.name=t.name,this.originName=t.originName}catch(e){console.log("JSON_err",e)}},mounted:function(){},watch:{isConnected:{immediate:!0,handler:function(e){var t=this;return o()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e&&t.tokenAddress&&!t.approve&&("un"!==t.type?t.getTokenBalanceApprove():t.getTokenBalance(t.pid));case 1:case"end":return n.stop()}},n,t)}))()}},tokenAddress:{handler:function(e){this.isConnected&&e&&("un"!==this.type?this.getTokenBalanceApprove():this.getTokenBalance(this.pid))}}},computed:a()({btnDisabled:function(){return this.isConnected&&!(2===this.approved&&"un"!==this.type)&&!Boolean(Number(this.depositNum))||this.isOverMax},themeText:function(){return"un"===this.type?"解押":"质押"},type:function(){return this.$route.query.type},kind:function(){return this.$route.query.kind},GettingApprove:function(){return this.isConnected&&0===this.approved},submitBtnText:function(){return this.isConnected?2===this.approved&&"un"!==this.type?"授权":this.themeText:"链接钱包"},isOverMax:function(){return"--"===this.tokenBalance&&Number(this.depositNum)||"--"!==this.tokenBalance&&Number(this.depositNum)>Number(this.tokenBalance)},unfoldString:function(){var e="day365";switch(this.activeDayIndex){case 0:e="day90";break;case 1:e="day180"}return e},pid:function(){if(!this.isDemand)return this.activeDayIndex;var e=5;switch(this.isDemand){case"hH2O":e=3;break;case"rH2O":e=4;break;case"hBNB":e=5}return e}},Object(d.c)({isConnected:function(e){return e.base.isConnected},fairLaunchAddress:function(e){return e.base.fairLaunchAddress}})),methods:{inputEvent:function(e){this.depositNum=this.$inputLimit(e,6,!0)},toggleDays:function(e){if(this.activeDayIndex=e.id,"un"===this.type){var t=this.unfoldTypeBalance[this.unfoldString],n=t.already,s=t.balance;n?this.tokenBalance=s:(this.approve=0,this.getTokenBalance(this.activeDayIndex))}},returnPage:function(){this.depositNum="",this.$router.go(-1)},submitOrder:function(){var e=this;if(!this.isConnected)return this.$connect();2!==this.approved||"un"===this.type?("un"===this.type?u.f:u.e)(this.tokenAddress,this.decimals,this.depositNum,this.pid).finally(function(){e.depositNum="",e.approve=0,e.getTokenBalance(e.pid),e.$store.dispatch("judgeDepositCurrentIsIRO",e.tokenAddress)}):Object(u.a)(this.tokenAddress,this.fairLaunchAddress).then(function(){e.approved=1})},clickAllBtn:function(){this.isConnected&&this.tokenBalance&&(this.depositNum=this.tokenBalance)},getTokenBalanceApprove:function(){var e=this;return o()(r.a.mark(function t(){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.d)(e.tokenAddress,e.decimals);case 2:n=t.sent,console.log("balance",n),e.tokenBalance=n,Object(l.n)(e.tokenAddress,e.decimals,n,e.fairLaunchAddress).then(function(t){e.approved=t?1:2});case 6:case"end":return t.stop()}},t,e)}))()},getTokenBalance:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return o()(r.a.mark(function n(){var s,a;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("un"!==e.type){n.next=11;break}return n.next=3,Object(l.j)(t,e.decimals);case 3:s=n.sent,console.log("解押balance",s),e.tokenBalance=s,e.approved=1,e.unfoldTypeBalance[e.unfoldString].already=!0,e.unfoldTypeBalance[e.unfoldString].balance=s,n.next=17;break;case 11:return n.next=13,Object(l.d)(e.tokenAddress,e.decimals);case 13:a=n.sent,console.log("balance",a),e.tokenBalance=a,e.approved=1;case 17:case"end":return n.stop()}},n,e)}))()}}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"deposit-detail-page"},[s("div",{staticClass:"depositInner"},[s("div",{staticClass:"kind"},[s("img",{attrs:{src:n("Gvdv")}}),e._v(" "),s("span",[e._v(e._s(e.name))])]),e._v(" "),s("div",{staticClass:"property"},e._l(e.propertyList,function(t){return s("div",{key:t.id,staticClass:"item"},[s("span",{staticClass:"num"},[e._v(e._s(t.id))]),e._v(" "),s("span",{staticClass:"name"},[e._v(e._s("un"===e.type?"解押":"质押"))])])}),0),e._v(" "),e.kind||e.isDemand?s("p",{staticClass:"title"},[s("span",[e._v("我要"+e._s(e.themeText))])]):s("p",{staticClass:"title"},[s("span",[e._v("我要"+e._s(e.themeText))]),e._v(" "),e._l(e.days,function(t){return s("button",{key:t.id,class:["btn",{active:e.activeDayIndex===t.id}],on:{click:function(n){return e.toggleDays(t)}}},[e._v("\n                "+e._s(t.name)+"\n            ")])})],2),e._v(" "),s("div",{staticClass:"input-area"},["pl"===e.type?s("div",{staticClass:"receInfo"},[e._v("\n                年化收益率： "),s("span",[e._v("18%")])]):e._e(),e._v(" "),s("div",{staticClass:"balance"},[s("span",{staticClass:"info"},[e._v("余额：")]),e._v(" "),s("span",{staticClass:"num"},[e._v(e._s(e.toFixed(e.tokenBalance,6)||"--")+" "+e._s(e.name))])]),e._v(" "),s("div",{class:["inputBox",{overMax:e.isConnected&&e.isOverMax}]},[s("img",{attrs:{src:n("Gvdv"),alt:""}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.depositNum,expression:"depositNum"}],attrs:{type:"number",minLength:"1",maxLength:"79"},domProps:{value:e.depositNum},on:{input:[function(t){t.target.composing||(e.depositNum=t.target.value)},e.inputEvent]}}),e._v(" "),s("button",{on:{click:e.clickAllBtn}},[e._v("MAX")])])]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:e.isConnected&&e.isOverMax,expression:"isConnected&&isOverMax"}],staticClass:"warn-tips"},[e._v("当前地址余额不足")]),e._v(" "),"un"===e.type?s("div",{staticClass:"receive"},[s("p",{staticClass:"tit"},[e._v("您将获得：")]),e._v(" "),s("p",{staticClass:"num"},[s("span",[e._v(e._s(e.depositNum||"--"))]),e._v(" "+e._s(e.name))])]):e._e(),e._v(" "),s("div",{staticClass:"submitBtns"},[s("button",{class:["enter",{disabled:e.btnDisabled}],attrs:{disabled:e.btnDisabled},on:{click:e.submitOrder}},[e._v(e._s(e.submitBtnText))]),e._v(" "),s("button",{staticClass:"cancal",on:{click:e.returnPage}},[e._v("返回")])])])])},staticRenderFns:[]};var h=n("VU/8")(p,v,!1,function(e){n("5iFC")},"data-v-67376eee",null);t.default=h.exports}});