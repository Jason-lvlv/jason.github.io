(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13bc307a"],{"34e5":function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return h}));var s=n("1da1"),a=(n("96cf"),n("d3b7"),n("25f0"),n("b893")),o=n("b292"),i=n("56f5"),r=n("511e"),c=function(e){console.log("receiveAirdrop",e);var t=__ownInstance__.$store.state.base.address,n=__ownInstance__.$store.state.base.airdropAddress,a=new web3.eth.Contract(o,n),i=a.methods.draw(e).encodeABI(),r=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:r}),new Promise((function(e,a){var o;web3.eth.getTransactionCount(t).then(function(){var c=Object(s["a"])(regeneratorRuntime.mark((function s(c){var d,u,h;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,web3.eth.getGasPrice();case 2:return d=s.sent,s.next=5,web3.eth.estimateGas({from:t,to:n,data:i});case 5:u=s.sent,console.log("estimateGas",u),h=[{from:t,to:n,data:i,gasPrice:web3.utils.toHex(d),gas:web3.utils.toHex(u)}],web3.eth.sendTransaction(h[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(o=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("getAirdropValue"),__ownInstance__.$store.dispatch("getAirDropDrawed"),__ownInstance__.$store.dispatch("changeTradeStatus",{id:r,val:1,hash:o}),e(o)})).on("confirmation",(function(e,t){})).on("error",(function(e){var t=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:r,val:2,isUserDeny:t,hash:o}),console.log("err",e),a(e)}));case 9:case"end":return s.stop()}}),s)})));return function(e){return c.apply(this,arguments)}}()).catch((function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:r,val:2,hash:o}),a(e)}))}))},d=function(e,t,n,o){var r=__ownInstance__.$store.state.base.address,c=n&&o?web3.utils.toHex(Object(a["d"])(n,o)):web3.utils.toHex(Object(a["e"])(1.157920892373163*Math.pow(10,59))),d=new web3.eth.Contract(i,e),u=t||__ownInstance__.$store.state.base.bankAddress,h=d.methods.approve(u,c).encodeABI();return new Promise((function(t,n){web3.eth.getTransactionCount(r).then(function(){var a=Object(s["a"])(regeneratorRuntime.mark((function s(a){var o,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,web3.eth.getGasPrice();case 2:o=s.sent,i=[{chainId:__ownInstance__.$store.state.base.chainId,nonce:web3.utils.toHex(a),gasLimit:web3.utils.toHex(6e6),gasPrice:web3.utils.toHex(o),to:e,from:r,data:h}],ethereum.request({method:"eth_sendTransaction",params:i}).then((function(e){t(e)})).catch((function(e){n(e)}));case 5:case"end":return s.stop()}}),s)})));return function(e){return a.apply(this,arguments)}}())}))},u=function(e){console.log("depositPutIn",e);var t=__ownInstance__.$store.state.base.tokenAddress,n=__ownInstance__.$store.state.base.address,o=__ownInstance__.$store.state.base.bankAddress,i=new web3.eth.Contract(r,o),c=Object(a["d"])(e,__ownInstance__.$store.state.base.depositToken.decimals),d=i.methods.deposit(t,web3.utils.toHex(c)).encodeABI(),u=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:u}),new Promise((function(e,t){var a;web3.eth.getTransactionCount(n).then(function(){var i=Object(s["a"])(regeneratorRuntime.mark((function s(i){var r,c,h;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,web3.eth.getGasPrice();case 2:return r=s.sent,s.next=5,web3.eth.estimateGas({from:n,to:o,data:d});case 5:c=s.sent,console.log("estimateGas",c),h=[{from:n,to:o,data:d,gasPrice:web3.utils.toHex(r),gas:web3.utils.toHex(c)}],web3.eth.sendTransaction(h[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(a=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("getTokenBalance"),__ownInstance__.$store.dispatch("get_HTokenBalance","0x14fc237354fa2027a23b8e104d76c3b0ec4051e6"),__ownInstance__.$store.dispatch("changeTradeStatus",{id:u,val:1,hash:a}),e(a)})).on("confirmation",(function(e,t){})).on("error",(function(e){var n=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:u,val:2,isUserDeny:n,hash:a}),console.log("err",e),t(e)}));case 9:case"end":return s.stop()}}),s)})));return function(e){return i.apply(this,arguments)}}()).catch((function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:u,val:2,hash:a}),t(e)}))}))},h=function(e){console.log("depositPutOut",e);var t=__ownInstance__.$store.state.base.tokenAddress,n=__ownInstance__.$store.state.base.address,o=__ownInstance__.$store.state.base.bankAddress,i=new web3.eth.Contract(r,o),c=Object(a["d"])(e,__ownInstance__.$store.state.base.depositToken.decimals),d=i.methods.withdraw(t,web3.utils.toHex(c)).encodeABI(),u=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:u}),new Promise((function(e,t){var a;web3.eth.getTransactionCount(n).then(function(){var i=Object(s["a"])(regeneratorRuntime.mark((function s(i){var r,c,h;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,web3.eth.getGasPrice();case 2:return r=s.sent,s.next=5,web3.eth.estimateGas({from:n,to:o,data:d});case 5:c=s.sent,console.log("estimateGas",c),h=[{from:n,to:o,data:d,gasPrice:web3.utils.toHex(r),gas:web3.utils.toHex(c)}],web3.eth.sendTransaction(h[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(a=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("getTokenBalance"),__ownInstance__.$store.dispatch("get_HTokenBalance","0x14fc237354fa2027a23b8e104d76c3b0ec4051e6"),__ownInstance__.$store.dispatch("changeTradeStatus",{id:u,val:1,hash:a}),e(a)})).on("confirmation",(function(e,t){})).on("error",(function(e){var n=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:u,val:2,isUserDeny:n,hash:a}),console.log("err",e),t(e)}));case 9:case"end":return s.stop()}}),s)})));return function(e){return i.apply(this,arguments)}}()).catch((function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:u,val:2,hash:a}),t(e)}))}))}},"838d":function(e,t,n){},a427:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"deposit-detail-page"},[s("div",{staticClass:"app-container"},[s("div",{staticClass:"kind"},[s("img",{attrs:{src:n("aa08")}}),s("span",[e._v(e._s(e.tokenKind))])]),s("div",{staticClass:"property"},e._l(e.propertyList,(function(t){return s("div",{key:t.id,staticClass:"item"},[s("span",{staticClass:"num"},[e._v(e._s(t.id))]),s("span",{staticClass:"name"},[e._v(e._s("et"===e.type?"取款":"存款"))])])})),0),s("p",{staticClass:"title"},[s("span",[e._v("我要"+e._s(e.themeText))])]),s("div",{staticClass:"input-area"},[s("div",{staticClass:"balance"},[s("span",{staticClass:"info"},[e._v("余额：")]),s("span",{staticClass:"num"},[e._v(e._s("et"===e.type?e.H_tokenBalance:e.tokenBalance)+" "+e._s(e.tokenKind))])]),s("div",{class:["inputBox",{overMax:e.isConnected&&e.isOverMax}]},[s("img",{attrs:{src:n("aa08"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.depositNum,expression:"depositNum"}],attrs:{type:"text",minLength:"1",maxLength:"79"},domProps:{value:e.depositNum},on:{input:[function(t){t.target.composing||(e.depositNum=t.target.value)},e.inputEvent]}}),s("button",{on:{click:e.clickAllBtn}},[e._v("MAX")])])]),s("p",{directives:[{name:"show",rawName:"v-show",value:e.isConnected&&e.isOverMax,expression:"isConnected&&isOverMax"}],staticClass:"warn-tips"},[e._v("当前地址余额不足")]),s("div",{staticClass:"receive"},[s("p",{staticClass:"tit"},[e._v("您将获得：")]),s("p",{staticClass:"num"},[e._v(e._s(e.depositNum||"--")+" "+e._s("et"===this.type?this.kind:"h"+this.kind))])]),"de"===e.type?s("div",{staticClass:"warn"},[e._v(" 提示：存入后获得计息币，前往质押挖矿页面，质押您的计息币获取质押收益 ")]):e._e(),s("div",{staticClass:"submitBtns"},[s("button",{directives:[{name:"loading",rawName:"v-loading",value:e.GettingApprove,expression:"GettingApprove"}],class:["enter",{disabled:e.btnDisabled}],attrs:{disabled:e.btnDisabled},on:{click:e.submitOrder}},[e._v(" "+e._s(e.submitBtnText)+" ")]),s("button",{staticClass:"cancal",on:{click:e.returnPage}},[e._v("返回")])])])])},a=[],o=n("5530"),i=(n("a9e3"),n("d3b7"),n("2f62")),r=n("34e5"),c={name:"depositDetail",data:function(){return{propertyList:[{id:1,name:"币种"}],days:[{id:1,name:"30天"},{id:2,name:"60天"},{id:3,name:"90天"},{id:4,name:"180天"}],activeDayIndex:4,depositNum:""}},mounted:function(){var e=this;setTimeout((function(){"--"===e.tokenBalance&&(e.$store.dispatch("getTokenBalance"),e.$store.dispatch("get_HTokenBalance","0x14fc237354fa2027a23b8e104d76c3b0ec4051e6"))}),300)},watch:{isConnected:{immediate:!0,handler:function(e){e&&"et"!==this.type&&this.$store.dispatch("getTokenApproved")}}},computed:Object(o["a"])({btnDisabled:function(){return this.isConnected&&!(2===this.approved&&"et"!==this.type)&&!Boolean(Number(this.depositNum))||this.isOverMax},themeText:function(){return"et"===this.type?"提取":"存入"},type:function(){return this.$route.query.type},kind:function(){return this.$route.query.kind},tokenKind:function(){return"et"===this.type?"h"+this.kind:this.kind},GettingApprove:function(){return this.isConnected&&0===this.approved&&"et"!==this.type},submitBtnText:function(){return this.isConnected?2===this.approved&&"et"!==this.type?"授权":this.themeText:"链接钱包"},isOverMax:function(){return"--"!==this.tokenBalance&&Number(this.depositNum)>Number("et"===this.type?this.H_tokenBalance:this.tokenBalance)}},Object(i["c"])({isConnected:function(e){return e.base.isConnected},tokenBalance:function(e){return e.base.depositToken.balance},approved:function(e){return e.base.depositToken.approved},tokenAddress:function(e){return e.base.tokenAddress},H_tokenBalance:function(e){return e.base.depositToken.Hbalnace}})),methods:{inputEvent:function(e){this.depositNum=this.$inputLimit(e,6,!0)},toggleDays:function(e){this.activeDayIndex=e.id},returnPage:function(){this.depositNum="",this.$router.go(-1)},submitOrder:function(){var e=this;if(!this.isConnected)return this.$connect();if(2!==this.approved||"et"===this.type){var t="et"===this.type?r["c"]:r["b"];t(this.depositNum).finally((function(){e.depositNum=""}))}else Object(r["a"])(this.tokenAddress).then((function(){e.$store.commit("setTokenApprove",!0)}))},clickAllBtn:function(){this.isConnected&&this.tokenBalance&&("et"===this.type?this.depositNum=this.H_tokenBalance:this.depositNum=this.tokenBalance)}}},d=c,u=(n("d7a7"),n("2877")),h=Object(u["a"])(d,s,a,!1,null,"6c51f420",null);t["default"]=h.exports},aa08:function(e,t){e.exports="data:image/png;base64,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"},d7a7:function(e,t,n){"use strict";n("838d")}}]);