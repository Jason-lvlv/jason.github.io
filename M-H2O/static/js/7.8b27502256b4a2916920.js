webpackJsonp([7],{I4SL:function(t,s){},ShnU:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA0pJREFUSEu9lk1oHVUUx3/nvj6t2JK8iaaWdO7kRVptCVYR3NbGYCuiteCidVGhgoiIKzf1o34tFN2JXQiCiotKQWlViko1RUFQiNgW48aQzJ1a06bvvRQTCc/OHJnnjKbp+xKKs7vzP/f8z/mfc8+9QptvdmBgw4pCYbeKbFXVjQL9qbnAWYUJERkzcXyw5/TpX1q5kWbAhXXr1sfGvA7syPB54EeBmXStcANwG3BtYylyxCTJU71RNLnc32UEFWsfFXgDuBo4onDAc25M4OLSzQorqr4/IiJPAPcBi6L6eCmK3llqdwlBxdoXBJ4HIjFmT2l6+ng7CXNsztq7EngPGACe9px7Jcf+Icgifwv4oVivb189MzPbjfPc5my5vKYYx8eAYVHdm2fSIJgtl28qxPEJ4LdivX7Hf3W+jGQc6DOqw2lNGgRVaz9OdRTVLaUo+rpV5FXffwaRZKkEy20zuY4hctgLw51yfnDwZpMkP6cF9Zx7oJ0sVWunUL3gRdGtHew+Ae4tJMkGqfj+SyLynIiMlMJwrMPGaVTnOhFUfH+biHwmIvulau03wC0l5zyB+EoQpC1cs3YO+D4lqCFywgvDOzt1TdXarjLI6vqtwFBKkJ7ED7ww3H0lCSq+/5GI7PhfCGrASc+5LV1kMInq752KnEsElNMM0r7f3FWRg+AhVb3Y59yhdsHopk1X1ebnqwrfScXaFwX2Gxjtde7LTll0g1eD4B5Ujzbav9uDpmBq1qYHKPacu79tO/v+UUS2G9X1+ag4nM5+MWZrqwk6NTi4sidJzgNJadWq62Riot6MpOL7d4vI5wIflpx7sEGQXTAn07lXrNdvbzXsqkNDVhcXte/MmaiZ89kgWFtQTYddjxEZ7g3DqX/HdRA8IqpvA6eKxeLo6snJc93ondtkzr9ojGvYU3Lu/RS75MKpBcGzqvoy8KuBh7steibLu8BaYJ/n3KuXXTj5j0oQ7BXVA8BK4FNVfdPr7/9Kxsf/XJpRoxUXFkZRfRLYBvwh8FgeeUuCFJjz/RtjeE1EdmZZLqB6CmNmUBVU1yCyGbjm7zcAh4zIvlTz5bI2fVXkRilRArtUZERgI3B9hp0T+ElVjxtjDjZznPv4C2zYhFWGHFwaAAAAAElFTkSuQmCC"},fsnc:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mintDetail-page"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"seleArea"},[a("div",{staticClass:"title"},[t._v("提供资产")]),t._v(" "),a("div",{staticClass:"coinList"},[a("div",{staticClass:"item"},[t._m(2),t._v(" "),a("div",{staticClass:"sele-area"},[a("img",{attrs:{src:i("Gvdv"),alt:""}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.token1Num,expression:"token1Num"}],attrs:{type:"number",minLength:"1",maxLength:"79"},domProps:{value:t.token1Num},on:{input:[function(s){s.target.composing||(t.token1Num=s.target.value)},function(s){return t.inputEvent(s,"token1Num")}]}}),t._v(" "),a("div",{staticClass:"kind"},[t._v("BUSD")])]),t._v(" "),t._m(3)]),t._v(" "),a("div",{staticClass:"item"},[t._m(4),t._v(" "),a("div",{staticClass:"sele-area"},[a("img",{attrs:{src:i("Gvdv"),alt:""}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.token2Num,expression:"token2Num"}],attrs:{type:"number",minLength:"1",maxLength:"79"},domProps:{value:t.token2Num},on:{input:[function(s){s.target.composing||(t.token2Num=s.target.value)},function(s){return t.inputEvent(s,"token2Num")}]}}),t._v(" "),a("div",{staticClass:"kind"},[t._v("BUSD")])]),t._v(" "),t._m(5)])])]),t._v(" "),a("div",{staticClass:"mutiSele"},[a("div",{staticClass:"title"},[t._v(" 杠杆倍数 ")]),t._v(" "),a("div",{staticClass:"area"},[a("div",{staticClass:"seleBar"},[a("mt-range",{attrs:{step:1,max:9,min:1,barHeight:5},model:{value:t.multiple,callback:function(s){t.multiple=s},expression:"multiple"}}),t._v(" "),t._m(6)],1),t._v(" "),a("div",{staticClass:"display"},[a("span",{staticClass:"num"},[t._v(t._s(t.multiple))]),t._v(" "),a("span",{staticClass:"x"},[t._v("x")])])])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("div",{staticClass:"submitOrder"},[a("div",{staticClass:"enter"},[t._v("\n                授权 USDC\n            ")]),t._v(" "),a("div",{staticClass:"btn",on:{click:function(s){return t.$router.go(-1)}}},[t._v("\n                返回\n            ")])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"common-top-nav"},[s("img",{attrs:{src:i("Gvdv")}}),this._v(" "),s("img",{staticClass:"img2",attrs:{src:i("QinY")}}),this._v(" "),s("span",{staticClass:"tit"},[this._v("USDT-USDC")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"infoBar"},[i("div",{staticClass:"content"},[i("div",{staticClass:"item"},[i("div",{staticClass:"num"},[t._v("1")]),t._v(" "),i("p",[t._v("授权")])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"num"},[t._v("2")]),t._v(" "),i("p",[t._v("配置杠杆参数")])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"num"},[t._v("3")]),t._v(" "),i("p",[t._v("确认开仓")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"balance"},[s("span",{staticClass:"tit"},[this._v("余额：")]),this._v(" "),s("span",{staticClass:"num"},[this._v("100 USDT")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"btn-area"},[s("div",{staticClass:"btn active"},[this._v("25%")]),this._v(" "),s("div",{staticClass:"btn"},[this._v("50%")]),this._v(" "),s("div",{staticClass:"btn"},[this._v("75%")]),this._v(" "),s("div",{staticClass:"btn"},[this._v("100%")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"balance"},[s("span",{staticClass:"tit"},[this._v("余额：")]),this._v(" "),s("span",{staticClass:"num"},[this._v("100 USDT")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"btn-area"},[s("div",{staticClass:"btn active"},[this._v("25%")]),this._v(" "),s("div",{staticClass:"btn"},[this._v("50%")]),this._v(" "),s("div",{staticClass:"btn"},[this._v("75%")]),this._v(" "),s("div",{staticClass:"btn"},[this._v("100%")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"barinfo"},[s("span",[this._v("1x")]),this._v(" "),s("span",[this._v("9x")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"browposition"},[a("div",{staticClass:"title"},[a("div",{staticClass:"info"},[t._v("\n                    借入资产\n                    "),a("span",[t._v("(最小值：100，最大值：50000000)")])])]),t._v(" "),a("div",{staticClass:"btns"},[a("div",{staticClass:"item active"},[t._v("\n                    USDT\n                ")]),t._v(" "),a("div",{staticClass:"item"},[t._v("\n                    USDC\n                ")])]),t._v(" "),a("div",{staticClass:"warnTips"},[a("img",{attrs:{src:i("ShnU"),alt:""}}),t._v(" "),a("span",[t._v("建议分别提供两种等值的资产，可最大程度减少手续费及滑点损失。")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"handlingFee"},[i("div",{staticClass:"title"},[i("div",{staticClass:"info"},[t._v("\n                    价格影响及交易手续费\n                ")]),t._v(" "),i("div",{staticClass:"balance"},[t._v("\n                    - 20%\n                ")])]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"line"},[i("div",{staticClass:"tit"},[t._v("提供资产")]),t._v(" "),i("div",{staticClass:"cnt"},[t._v("100.00 USDT + 200.00 USDC")])]),t._v(" "),i("div",{staticClass:"line"},[i("div",{staticClass:"tit"},[t._v("借入资产")]),t._v(" "),i("div",{staticClass:"cnt"},[t._v("500.00 USDT")])]),t._v(" "),i("div",{staticClass:"line"},[i("div",{staticClass:"tit"},[t._v("资产总价值")]),t._v(" "),i("div",{staticClass:"cnt"},[t._v("600.00 USDT + 200.00 USDC")])]),t._v(" "),i("div",{staticClass:"line"},[i("div",{staticClass:"tit"},[t._v("当前风险系数")]),t._v(" "),i("div",{staticClass:"cnt"},[t._v("88.88%")])]),t._v(" "),i("div",{staticClass:"line"},[i("div",{staticClass:"tit"},[t._v("综合年化收益率（复利）")]),t._v(" "),i("div",{staticClass:"cnt"},[i("span",{staticClass:"green"},[t._v("502.02%")])])])])])}]};var v=i("VU/8")({name:"MintDetail",data:function(){return{multiple:1,token1Num:"",token2Num:""}},methods:{inputEvent:function(t,s){this[s]=this.$inputLimit(t,6,!0)}}},a,!1,function(t){i("I4SL")},"data-v-13272517",null);s.default=v.exports}});