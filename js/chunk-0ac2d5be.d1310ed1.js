(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ac2d5be"],{"0b48":function(t,e,s){t.exports=s.p+"img/firework.cfe08425.gif"},"4f3f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"game-wrap"},[i("div",{staticClass:"game-content"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.win,expression:"win"}],staticClass:"winner"},[i("div",{staticClass:"winner-text"},[t._v(" 你贏拉，恭喜 "),i("div",{staticClass:"restart-tip"},[t._v(t._s(t.count)+" 秒後自動重新遊戲")])]),i("img",{attrs:{src:s("0b48"),alt:""}})]),i("h1",{class:{pink:t.shiny}},[t._v("猜數字")]),i("div",{staticClass:"content"},[i("div",{staticClass:"mode"},[t._m(0),t._m(1),i("el-radio-group",{attrs:{size:"small"},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},[i("el-radio-button",{attrs:{label:"easy"}},[t._v("簡單模式")]),i("el-radio-button",{attrs:{label:"hard"}},[t._v("困難模式")])],1)],1),i("div",{staticClass:"tip"},[t._v(t._s(t.rangeText))]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.tip,expression:"tip"}],staticClass:"tip"},[t._v(t._s(t.tip))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"input",attrs:{type:"number"},domProps:{value:t.number},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.numInput(e)},input:function(e){e.target.composing||(t.number=e.target.value)}}}),i("el-button",{staticClass:"button",attrs:{type:"primary",plain:"",size:"small"},on:{click:t.numInput}},[t._v(" 確認 ")]),i("el-button",{staticClass:"button",attrs:{type:"warning",size:"small",plain:""},on:{click:t.initAnswer}},[t._v(" 重來 ")])],1)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mode-text"},[t._v("簡單：不限次數"),s("br"),t._v(" 困難：只猜五次")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mode-text"},[s("span",[t._v("*")]),t._v(" 模式轉換遊戲會重新開始。")])}],a=(s("99af"),{data:function(){return{answer:null,number:null,minNum:0,maxNum:100,win:!1,guessTime:0,mode:"easy",hardGuess:5,count:3,timer:null,shiny:!0,shinyTimer:null}},computed:{tip:function(){return this.guessTime&&5!==this.hardGuess?"easy"===this.mode?"猜錯 ".concat(this.guessTime," 次囉，再來"):this.hardGuess?"猜錯了，你剩下 ".concat(this.hardGuess," 次機會"):"沒機會囉，掰！":""},rangeText:function(){return"請輸入 ".concat(this.minNum," ~ ").concat(this.maxNum," 數字")}},watch:{mode:{handler:function(t){t&&this.initAnswer()}}},created:function(){var t=this;this.initAnswer(),this.shinyTimer=setInterval((function(){t.shiny=!t.shiny}),500)},beforeDestroy:function(){clearInterval(this.timer),clearInterval(this.shinyTimer)},methods:{numInput:function(){var t=this;if("hard"!==this.mode||0!==this.hardGuess)if(+this.number<=this.minNum||+this.number>=this.maxNum)this.$message.warning(this.rangeText);else{if(+this.number===this.answer)return this.win=!0,this.timer=setInterval((function(){0!==t.count&&(t.count-=1)}),1e3),void setTimeout((function(){t.win=!1,t.initAnswer()}),3e3);+this.number<this.answer&&(this.minNum=+this.number),+this.number>this.answer&&(this.maxNum=+this.number),this.guessTime+=1,this.hardGuess-=1,this.number=null}else this.$confirm("你已經輸了，乖乖認命重新開始好嗎？","提示",{confirmButtonText:"確定",cancelButtonText:"取消",type:"alert"}).then((function(){t.initAnswer()})).catch((function(){t.numInput()}))},initAnswer:function(){this.answer=Math.ceil(100*Math.random()),console.log(this.answer,"<<<<< 正確答案是 "),this.win=!1,this.minNum=0,this.maxNum=100,this.number=null,this.guessTime=0,this.hardGuess=5,this.$message.success({message:"GAME START!",center:!0}),this.count=3,clearInterval(this.timer)}}}),r=a,u=(s("d318"),s("2877")),c=Object(u["a"])(r,i,n,!1,null,"b4aa9716",null);e["default"]=c.exports},d318:function(t,e,s){"use strict";s("e04f")},e04f:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0ac2d5be.d1310ed1.js.map