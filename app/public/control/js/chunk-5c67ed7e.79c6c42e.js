(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c67ed7e","chunk-2c9e7ee5"],{1681:function(e,t,a){},"25bb":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"v-container",attrs:{fiuld:""}},[a("v-subheader",[e._v("角色管理")]),a("v-card",{staticClass:"px-6"},[a("v-toolbar",{attrs:{flat:""}},[a("v-btn",{attrs:{text:""},on:{click:function(t){e.dialog=!0}}},[e._v("+添加新角色")]),a("v-btn",{attrs:{text:""}},[a("v-icon",{attrs:{small:""}},[e._v("iconfont-shanchu")]),e._v("删除选中 ")],1),a("v-spacer"),a("v-btn",{attrs:{text:""}},[a("v-icon",{staticClass:"mr-2"},[e._v("iconfont-sousuo")]),e._v("搜索 ")],1)],1),a("v-data-table",{attrs:{"disable-sort":"",items:e.items,headers:e.headers,"show-select":""},scopedSlots:e._u([{key:"item.start",fn:function(t){var a=t.item;return[e._v(e._s(e.$u.format.call(new Date(Number(a.update?a.update:a.start)),"yyyy-MM-dd")))]}},{key:"item.oper",fn:function(t){var r=t.item;return[a("v-btn",{staticClass:"mx-1",attrs:{fab:"","x-small":"",depressed:"",title:"删除"},on:{click:function(t){return e.deleteCase(r.id)}}},[a("v-icon",[e._v("iconfont iconfont-customerarchivesrecycleBin")])],1),a("v-btn",{staticClass:"mx-1",attrs:{fab:"","x-small":"",depressed:"",title:"修改"},on:{click:function(t){return e.roleEdit(r.id)}}},[a("v-icon",[e._v("iconfont iconfont-basepermissionapproveApply")])],1)]}}])})],1),a("v-dialog",{attrs:{fullscreen:"",persistent:"","hide-overlay":""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.dialog?a("v-card",{staticClass:"d-flex align-center flex-column"},[a("v-card-title",{staticClass:"justify-center text-h5"},[e._v(e._s("add"===e.dialogType?"添加":"编辑")+"角色信息")]),a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-card-text",[a("v-row",[a("upload",{attrs:{type:"card",cols:"6",src:e.roleModel.avatar},model:{value:e.imgFile,callback:function(t){e.imgFile=t},expression:"imgFile"}}),a("v-col",{staticClass:"px-10",attrs:{cols:"6",height:"100"}},[a("v-text-field",{attrs:{label:"角色名称"},model:{value:e.roleModel.name,callback:function(t){e.$set(e.roleModel,"name",t)},expression:"roleModel.name"}}),a("v-select",{attrs:{label:"角色性别",items:["男","女"]},model:{value:e.roleModel.sex,callback:function(t){e.$set(e.roleModel,"sex",t)},expression:"roleModel.sex"}})],1),a("v-col",{staticClass:"px-10",attrs:{cols:"6",height:"100"}},[a("v-text-field",{attrs:{label:"角色境界"},model:{value:e.roleModel.realm,callback:function(t){e.$set(e.roleModel,"realm",t)},expression:"roleModel.realm"}}),a("v-select",{attrs:{label:"势力划分",items:["北凉","江南"]},model:{value:e.roleModel.faction,callback:function(t){e.$set(e.roleModel,"faction",t)},expression:"roleModel.faction"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{label:"人物描述",solo:"","auto-grow":""},model:{value:e.roleModel.introduce,callback:function(t){e.$set(e.roleModel,"introduce",t)},expression:"roleModel.introduce"}})],1)],1)],1)],1),a("v-card-actions",[a("v-btn",{staticClass:"mx-3",attrs:{width:"100"},on:{click:function(t){return e.submit(e.dialogType)}}},[e._v(e._s("add"===e.dialog?"提交":"确认修改"))]),a("v-btn",{staticClass:"mx-3",attrs:{width:"100"},on:{click:function(t){return e.roleModelReset(1)}}},[e._v("关闭")])],1)],1):e._e()],1)],1)},n=[],o=(a("a9e3"),a("d3b7"),a("96cf"),a("1da1")),s=a("1a72"),l={name:"role",data:function(){return{dialog:!1,dialogType:"add",headers:[{text:"ID",value:"id",align:"center"},{text:"名称",value:"name",align:"center"},{text:"性别",value:"sex",align:"center"},{text:"境界",value:"realm",align:"center"},{text:"所属势力",value:"faction",align:"center"},{text:"发布日期",value:"date",align:"center"},{text:"操作",value:"oper",align:"center"}],items:[],roleModel:{avatar:"",name:"",introduce:"",sex:"",faction:"",realm:""},imgFile:{},cid:-1}},mounted:function(){var e=this;-1!==Number(e.$route.query.id)&&(e.cid=e.$route.query.id),e.roleQueryAll()},methods:{roleModelReset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this;t.roleModel={avatar:"",name:"",introduce:"",sex:"",place:"",realm:""},t.dialogType="add",t.dialog=!1,e||t.roleQueryAll()},roleQueryAll:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,t.prev=1,t.next=4,s["B"]({cid:a.cid,num:0},a);case 4:r=t.sent,a.items=200===r.code?r.data:[],console.log(r),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},submit:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t,"edit"!==e){a.next=3;break}return a.abrupt("return",r.roleUpdate());case 3:if(!r.$u.checkObjectIsEmpty(r.imgFile)){a.next=5;break}return a.abrupt("return",r.$hint({msg:"请选择上传的图片",type:"error"}));case 5:return r.roleModel.start=(new Date).valueOf(),r.roleModel.avatar="ceshi",a.prev=7,a.next=10,s["I"](r.imgFile);case 10:if(n=a.sent,r.roleModel.avatar=n||"",r.roleModel.cid=r.cid,n){a.next=15;break}return a.abrupt("return",r.$hint({msg:"上传图片失败",type:"error"}));case 15:return a.next=17,s["z"](r.roleModel,r);case 17:a.sent,r.$hint({msg:"添加成功"}),r.roleModelReset(),a.next=25;break;case 22:a.prev=22,a.t0=a["catch"](7),console.log(a.t0);case 25:case"end":return a.stop()}}),a,null,[[7,22]])})))()},roleUpdate:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,a.$u.checkObjectIsEmpty(a.imgFile)){t.next=8;break}return t.next=4,s["I"](a.imgFile,a,a.roleModel.avatar);case 4:if(r=t.sent,a.roleModel.avatar=r||"",r){t.next=8;break}return t.abrupt("return",a.$hint({msg:"上传图片失败",type:"error"}));case 8:return t.prev=8,a.roleModel.update=(new Date).valueOf(),t.next=12,s["D"](a.roleModel,a);case 12:t.sent,a.$hint({msg:"修改成功"}),a.roleModelReset(),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](8),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[8,17]])})))()},roleRead:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,a.prev=1,a.next=4,s["C"]({id:e},r);case 4:return n=a.sent,a.abrupt("return",n.data);case 8:a.prev=8,a.t0=a["catch"](1),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})))()},roleEdit:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,a.next=3,r.roleRead(e);case 3:r.roleModel=a.sent,r.dialogType="edit",r.dialog=!0;case 6:case"end":return a.stop()}}),a)})))()},roleDelete:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=t,r.$toast({msg:"确认要删除这位角色吗？"}),r.bus.$on("toastConfirm",Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.roleRead(e);case 2:if(a=t.sent,!a.avatar){t.next=7;break}return t.next=6,s["l"]({path:a.avatar});case 6:t.sent;case 7:return t.prev=7,t.next=10,s["A"]({id:e},r);case 10:t.sent,r.$hint({msg:"成功删除一条数据"}),r.roleQueryAll(),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](7),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[7,15]])}))));case 3:case"end":return a.stop()}}),a)})))()}},components:{upload:function(){return a.e("chunk-5a425e44").then(a.bind(null,"9dac"))}}},i=l,c=a("2877"),u=a("6544"),d=a.n(u),p=a("8336"),v=a("b0af"),f=a("99d9"),h=a("62ad"),m=a("a523"),g=a("8fea"),x=a("169a"),b=a("132d"),w=a("0fd9"),k=a("b974"),y=a("2fa4"),M=a("e0c7"),I=a("8654"),R=a("a844"),N=a("71d9"),_=Object(c["a"])(i,r,n,!1,null,"2868650e",null);t["default"]=_.exports;d()(_,{VBtn:p["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:h["a"],VContainer:m["a"],VDataTable:g["a"],VDialog:x["a"],VIcon:b["a"],VRow:w["a"],VSelect:k["a"],VSpacer:y["a"],VSubheader:M["a"],VTextField:I["a"],VTextarea:R["a"],VToolbar:N["a"]})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var r=a("1d80"),n=a("5899"),o="["+n+"]",s=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),i=function(e){return function(t){var a=String(r(t));return 1&e&&(a=a.replace(s,"")),2&e&&(a=a.replace(l,"")),a}};e.exports={start:i(1),end:i(2),trim:i(3)}},a844:function(e,t,a){"use strict";a("1681");var r=a("8654"),n=a("58df");const o=Object(n["a"])(r["a"]);t["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...r["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"},genInput(){const e=r["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){r["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},a9e3:function(e,t,a){"use strict";var r=a("83ab"),n=a("da84"),o=a("94ca"),s=a("6eeb"),l=a("5135"),i=a("c6b6"),c=a("7156"),u=a("c04e"),d=a("d039"),p=a("7c73"),v=a("241c").f,f=a("06cf").f,h=a("9bf2").f,m=a("58a8").trim,g="Number",x=n[g],b=x.prototype,w=i(p(b))==g,k=function(e){var t,a,r,n,o,s,l,i,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=m(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+c}for(o=c.slice(2),s=o.length,l=0;l<s;l++)if(i=o.charCodeAt(l),i<48||i>n)return NaN;return parseInt(o,r)}return+c};if(o(g,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var y,M=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof M&&(w?d((function(){b.valueOf.call(a)})):i(a)!=g)?c(new x(k(t)),a,M):k(t)},I=r?v(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),R=0;I.length>R;R++)l(x,y=I[R])&&!l(M,y)&&h(M,y,f(x,y));M.prototype=b,b.constructor=M,s(n,g,M)}}}]);