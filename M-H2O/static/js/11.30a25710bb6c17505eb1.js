webpackJsonp([11],{"3Sr/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),a=n("Xxa5"),r=n.n(a),o=n("exGp"),c=n.n(o),d=n("NYxO"),u=n("JHeQ"),p=n("OFOn"),l={name:"depositDetail",data:function(){return{propertyList:[{id:1,name:"币种"}],days:[{id:1,name:"30天"},{id:2,name:"60天"},{id:3,name:"90天"},{id:4,name:"180天"}],activeDayIndex:4,depositNum:"",rewardRate:1,tokenBalance:"--",tokenAddress:"",originAddress:"",name:"",subname:"",approved:0,decimals:18,origindecimals:18}},created:function(){try{var e=sessionStorage.getItem("deInfo"),t=JSON.parse(e);this.tokenAddress=t.token,this.originAddress=t.originToken,this.origindecimals=t.origindecimals,this.decimals=t.decimals,"et"===this.type?(this.name=t.name_h,this.subname=t.name):(this.name=t.name,this.subname=t.name_h)}catch(e){}},mounted:function(){},watch:{isConnected:{immediate:!0,handler:function(e){var t=this;return c()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e&&t.tokenAddress&&!t.approve&&("et"!==t.type?t.getTokenBalanceApprove():t.getTokenBalance());case 1:case"end":return n.stop()}},n,t)}))()}},tokenAddress:{handler:function(e){this.isConnected&&e&&("et"!==this.type?this.getTokenBalanceApprove():this.getTokenBalance())}}},computed:i()({btnDisabled:function(){return this.isConnected&&!(2===this.approved&&"et"!==this.type)&&!Boolean(Number(this.depositNum))||this.isOverMax},themeText:function(){return"et"===this.type?"提取":"存入"},type:function(){return this.$route.query.type},GettingApprove:function(){return this.isConnected&&0===this.approved},submitBtnText:function(){return this.isConnected?2===this.approved&&"et"!==this.type?"授权":this.themeText:"链接钱包"},isOverMax:function(){return"--"!==this.tokenBalance&&Number(this.depositNum)>Number(this.tokenBalance)}},Object(d.c)({isConnected:function(e){return e.base.isConnected}})),methods:{inputEvent:function(e){this.depositNum=this.$inputLimit(e,6,!0)},toggleDays:function(e){this.activeDayIndex=e.id},returnPage:function(){this.depositNum="",this.$router.go(-1)},submitOrder:function(){var e=this;if(!this.isConnected)return this.$connect();2!==this.approved||"et"===this.type?("et"===this.type?u.c:u.b)(this.originAddress,this.origindecimals,this.depositNum).finally(function(){e.depositNum="",e.getTokenBalance(),e.$store.commit("setDepositCurrent",e.tokenAddress)}):Object(u.a)(this.tokenAddress).then(function(){e.approved=1})},clickAllBtn:function(){this.isConnected&&this.tokenBalance&&(this.depositNum=this.tokenBalance)},getTokenBalanceApprove:function(){var e=this;return c()(r.a.mark(function t(){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.d)(e.tokenAddress,e.decimals);case 2:n=t.sent,console.log("balance",n),e.tokenBalance=n,Object(p.n)(e.tokenAddress,e.decimals,n).then(function(t){e.approved=t?1:2});case 6:case"end":return t.stop()}},t,e)}))()},getTokenBalance:function(){var e=this;return c()(r.a.mark(function t(){var n,s,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.h)(e.tokenAddress,e.decimals);case 2:return n=t.sent,t.next=5,Object(p.m)(e.originAddress,e.origindecimals);case 5:return s=t.sent,isNaN(n)||isNaN(s)||(e.rewardRate=Number(s)/Number(n),console.log("rewardRate",e.rewardRate)),t.next=9,Object(p.d)(e.tokenAddress,e.decimals);case 9:i=t.sent,console.log("balance",i),e.tokenBalance=i,e.approved=1;case 13:case"end":return t.stop()}},t,e)}))()}}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"deposit-detail-page"},[s("div",{staticClass:"depositInner"},[s("div",{staticClass:"kind"},[s("img",{attrs:{src:n("Gvdv")}}),e._v(" "),s("span",[e._v(e._s(e.name))])]),e._v(" "),s("div",{staticClass:"property"},e._l(e.propertyList,function(t){return s("div",{key:t.id,staticClass:"item"},[s("span",{staticClass:"num"},[e._v(e._s(t.id))]),e._v(" "),s("span",{staticClass:"name"},[e._v(e._s("et"===e.type?"取款":"存款"))])])}),0),e._v(" "),s("p",{staticClass:"title"},[s("span",[e._v("我要"+e._s(e.themeText))])]),e._v(" "),s("div",{staticClass:"input-area"},[s("div",{staticClass:"balance"},[s("span",{staticClass:"info"},[e._v("余额：")]),e._v(" "),s("span",{staticClass:"num"},[e._v(e._s(e.toFixed(e.tokenBalance,6)||"--")+" "+e._s(e.name))])]),e._v(" "),s("div",{class:["inputBox",{overMax:e.isConnected&&e.isOverMax}]},[s("img",{attrs:{src:n("Gvdv"),alt:""}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.depositNum,expression:"depositNum"}],attrs:{type:"number",minLength:"1",maxLength:"79"},domProps:{value:e.depositNum},on:{input:[function(t){t.target.composing||(e.depositNum=t.target.value)},e.inputEvent]}}),e._v(" "),s("button",{on:{click:e.clickAllBtn}},[e._v("MAX")])])]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:e.isConnected&&e.isOverMax,expression:"isConnected&&isOverMax"}],staticClass:"warn-tips"},[e._v("当前地址余额不足")]),e._v(" "),s("div",{staticClass:"receive"},[s("p",{staticClass:"tit"},[e._v("您将获得：")]),e._v(" "),s("p",{staticClass:"num"},[s("span",[e._v(e._s(e.depositNum*e.rewardRate||"--"))]),e._v(" "+e._s(e.subname))])]),e._v(" "),"de"===e.type?s("div",{staticClass:"warn"},[e._v("\n            提示：存入后获得计息币，前往质押挖矿页面，质押您的计息币获取质押收益\n        ")]):e._e(),e._v(" "),s("div",{staticClass:"submitBtns"},[s("button",{class:["enter",{disabled:e.btnDisabled}],attrs:{disabled:e.btnDisabled},on:{click:e.submitOrder}},[e._v(e._s(e.submitBtnText))]),e._v(" "),s("button",{staticClass:"cancal",on:{click:e.returnPage}},[e._v("返回")])])])])},staticRenderFns:[]};var m=n("VU/8")(l,v,!1,function(e){n("nf2l")},"data-v-13c890f0",null);t.default=m.exports},nf2l:function(e,t){}});