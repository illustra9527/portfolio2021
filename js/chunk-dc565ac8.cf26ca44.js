(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc565ac8"],{"24b8":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"todo-wrap"},[e("h1",[t._v("TO DO LIST")]),e("div",{staticClass:"todo-list"},[e("div",{staticClass:"top"},[e("el-input",{staticClass:"input",attrs:{placeholder:"請輸入內容"},on:{change:t.onInput},model:{value:t.input,callback:function(i){t.input=i},expression:"input"}})],1),e("div",{staticClass:"filter-btns"},[e("el-button",{attrs:{type:"primary",size:t.isMobile?"mini":""},on:{click:function(i){return t.changeType("")}}},[t._v(" 全部 ")]),e("el-button",{attrs:{type:"success",size:t.isMobile?"mini":""},on:{click:function(i){return t.changeType("done")}}},[t._v(" 已完成 ")]),e("el-button",{attrs:{type:"danger",size:t.isMobile?"mini":""},on:{click:function(i){return t.changeType("todo")}}},[t._v(" 未完成 ")])],1),e("div",{staticClass:"content"},[t._l(t.todoData,(function(i){return e("div",{key:"item-id-"+i.id,staticClass:"list-item"},[e("div",{staticClass:"content-text"},[t.isEditing===i.id?e("el-input",{attrs:{placeholder:i.content},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editTodo(i.id)}},model:{value:t.editText,callback:function(i){t.editText=i},expression:"editText"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-check"},nativeOn:{click:function(e){return t.editTodo(i.id)}},slot:"append"})],1):e("div",[t._v(t._s(i.content))])],1),t.isMobile?e("el-dropdown",{attrs:{trigger:"click",placement:"bottom-start"}},[e("span",{staticClass:"el-dropdown-link"},[e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{icon:"el-icon-edit",disabled:i.done},nativeOn:{click:function(e){return t.edit(i.id,i.content)}}},[t._v(" 編輯 ")]),e("el-dropdown-item",{attrs:{icon:i.done?"el-icon-success":"el-icon-circle-check"},nativeOn:{click:function(e){return t.checkTodo(i.id)}}},[t._v(" 完成 ")]),e("el-dropdown-item",{attrs:{icon:"el-icon-delete",disabled:i.done},nativeOn:{click:function(e){return t.deleteTodo(i.id)}}},[t._v(" 刪除 ")])],1)],1):e("div",{staticClass:"content-btns"},[e("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",disabled:i.done,circle:""},nativeOn:{click:function(e){return t.edit(i.id,i.content)}}}),e("el-button",{attrs:{size:"mini",type:i.done?"success":"",icon:"el-icon-check",circle:""},nativeOn:{click:function(e){return t.checkTodo(i.id)}}}),e("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",disabled:i.done,circle:""},nativeOn:{click:function(e){return t.deleteTodo(i.id)}}})],1)],1)})),t.todoData.length?t._e():e("div",{staticClass:"tips"},[t._v("查無資料喔")]),e("div",{staticClass:"total"},[t._v(t._s(t.totalText))])],2)])])},o=[],s=e("5530"),c=(e("4de4"),e("99af"),e("2f62")),d=function(){var t=window.navigator.userAgent;return!!/Mobi/i.test(t)},r={data:function(){return{input:"",isMobile:d(),isEditing:null,editText:"",currentType:""}},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])({todoList:"getTodoList"})),{},{todoData:function(){return this.currentType?"done"===this.currentType?this.todoList.filter((function(t){return t.done})):this.todoList.filter((function(t){return!t.done})):this.todoList},totalText:function(){var t=this.todoList.filter((function(t){return t.done})).length,i=this.todoList.length-t;return"代辦事項共有 ".concat(this.todoList.length," 筆 | 已完成 ").concat(t," 筆 | 未完成 ").concat(i," 筆")}}),methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["actionSetTodo","actionSetTodoDone","actionEditTodo","actionDeleteTodo"])),{},{onInput:function(){if(this.isEditing)this.errMsg();else{var t={content:this.input,id:this.todoList.length?this.todoList[this.todoList.length-1].id+1:1,done:!1};this.actionSetTodo([t]),this.input="",this.currentType=""}},checkTodo:function(t){this.actionSetTodoDone(t)},edit:function(t,i){if(this.isEditing===t)return this.isEditing=null,void this.$message.warning("您的變更未被儲存。若要儲存請編輯後 enter 或是點選打勾。");this.isEditing=t,this.editText=i},editTodo:function(t){this.actionEditTodo({id:t,content:this.editText}),this.editText="",this.isEditing=null},deleteTodo:function(t){this.isEditing?this.errMsg():(this.actionDeleteTodo(t),this.$message.success("刪除成功"))},changeType:function(t){this.isEditing?this.errMsg():this.currentType=t},errMsg:function(){this.$message.error("若有代辦事項處於編輯狀態的話，無法處理其他事項。")}})},a=r,l=(e("de08"),e("2877")),u=Object(l["a"])(a,n,o,!1,null,"7140f8f2",null);i["default"]=u.exports},"8ae0":function(t,i,e){},de08:function(t,i,e){"use strict";e("8ae0")}}]);
//# sourceMappingURL=chunk-dc565ac8.cf26ca44.js.map