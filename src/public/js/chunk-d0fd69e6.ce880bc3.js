(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0fd69e6"],{"40bb":function(n,t,s){"use strict";s("98de")},"498a":function(n,t,s){"use strict";var e=s("23e7"),a=s("58a8").trim,i=s("c8d2");e({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},5899:function(n,t){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(n,t,s){var e=s("1d80"),a=s("577e"),i=s("5899"),r="["+i+"]",o=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),l=function(n){return function(t){var s=a(e(t));return 1&n&&(s=s.replace(o,"")),2&n&&(s=s.replace(c,"")),s}};n.exports={start:l(1),end:l(2),trim:l(3)}},"7fba":function(n,t,s){"use strict";s.r(t);var e=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"register"},[s("el-form",[s("el-form-item",[s("custom-input",{attrs:{warning_msg:"请输入用户名"},model:{value:n.info.name,callback:function(t){n.$set(n.info,"name",t)},expression:"info.name"}},[n._v("用户名")])],1),s("el-form-item",[s("custom-input",{ref:"email",attrs:{warning_msg:n.warningEmailMsg?n.warningEmailMsg:"请输入邮箱号"},on:{blur:n.handleEmailBlur},model:{value:n.info.email,callback:function(t){n.$set(n.info,"email",t)},expression:"info.email"}},[n._v("邮箱")])],1),s("el-form-item",[s("custom-input",{ref:"password",attrs:{type:"password",warning_msg:n.warningPasswordMsg?n.warningPasswordMsg:"请输入输入密码"},on:{blur:n.handleBlur},model:{value:n.info.password,callback:function(t){n.$set(n.info,"password",t)},expression:"info.password"}},[n._v("密码")])],1),s("el-form-item",[s("custom-input",{ref:"checkPassword",attrs:{type:"password",warning_msg:n.warningPasswordMsg?n.warningPasswordMsg:"请输入再次输入密码"},on:{blur:n.handleBlur},model:{value:n.info.checkPassword,callback:function(t){n.$set(n.info,"checkPassword",t)},expression:"info.checkPassword"}},[n._v("重复密码")])],1),s("el-form-item",[s("div",{staticClass:"btn"},[s("button",{attrs:{type:"button",disabled:!n.is_disabled},on:{click:n.handleClick}},[n._v("注册")])])])],1)],1)},a=[],i=s("1da1"),r=(s("96cf"),s("498a"),s("b0c0"),s("b64b"),s("c10c")),o={data:function(){return{info:{name:"",email:"",password:"",checkPassword:""},warningPasswordMsg:"",warningEmailMsg:""}},methods:{handleBlur:function(n){var t=this.info.password,s=this.info.checkPassword;t&&s&&t!==s&&(this.warningPasswordMsg="两次输入密码不一致",this.$refs.checkPassword.openWarning(),this.$refs.password.openWarning()),t&&s&&t===s&&(this.warningPasswordMsg="",this.$refs.checkPassword.closeWarning(),this.$refs.password.closeWarning())},handleEmailBlur:function(n){var t=/^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;n.trim()&&!t.test(n)&&(this.warningEmailMsg="邮箱格式有误",this.$refs.email.openWarning()),""===n.trim()&&this.warningEmailMsg&&(this.warningEmailMsg="")},handleClick:function(){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,e,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s={name:n.info.name,email:n.info.email,password:n.info.password},t.next=3,n.$http.post("/users/register",s);case 3:if(e=t.sent,a=e.data,i=e.status,201===i){t.next=8;break}return t.abrupt("return",n.$message.error(a));case 8:n.$message.success("注册成功，请登录~"),n.$router.push("/user/login");case 10:case"end":return t.stop()}}),t)})))()}},computed:{is_disabled:function(){var n=this,t=Object.keys(this.info),s=t.every((function(t){return""!==n.info[t].trim()}));return s&&!this.warningEmailMsg&&!this.warningPasswordMsg}},components:{CustomInput:r["a"]}},c=o,l=(s("ed7c"),s("2877")),u=Object(l["a"])(c,e,a,!1,null,"0edaa900",null);t["default"]=u.exports},"88f3":function(n,t,s){},"98de":function(n,t,s){},b0c0:function(n,t,s){var e=s("83ab"),a=s("9bf2").f,i=Function.prototype,r=i.toString,o=/^\s*function ([^ (]*)/,c="name";e&&!(c in i)&&a(i,c,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(n){return""}}})},b64b:function(n,t,s){var e=s("23e7"),a=s("7b0b"),i=s("df75"),r=s("d039"),o=r((function(){i(1)}));e({target:"Object",stat:!0,forced:o},{keys:function(n){return i(a(n))}})},c10c:function(n,t,s){"use strict";var e=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",[s("div",{class:{wrapper_warning:n.is_warning,wrapper:!0}},[s("label",{attrs:{id:"input"}},[s("div",{ref:"desc",staticClass:"desc"},[n._t("default")],2),s("input",{attrs:{type:n.is_show?"text":n.type,label:"input"},domProps:{value:n.value},on:{focus:n.handleFocus,blur:n.handleBlur,input:n.handleInput}})]),"password"===n.type?s("div",{staticClass:"show_pass",on:{click:n.handleClick}},[n.is_show?s("div",[s("svg",{staticClass:"mi-password-field__icon",attrs:{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor"}},[s("path",{attrs:{d:"M10 3c4.003 0 7.53 2.102 9.593 5.291a2.53 2.53 0 010 2.75c-2.063 3.19-5.59 5.292-9.593 5.292s-7.53-2.101-9.593-5.29a2.53 2.53 0 010-2.752C2.47 5.101 5.997 3 10 3zm-.012 2.333a4.337 4.337 0 00-4.34 4.334A4.337 4.337 0 009.988 14c2.397 0 4.34-1.94 4.34-4.333a4.337 4.337 0 00-4.34-4.334zm0 1.334a3.002 3.002 0 013.004 3c0 1.657-1.345 3-3.004 3a3.002 3.002 0 01-3.005-3c0-1.657 1.345-3 3.005-3z","fill-rule":"evenodd"}})])]):s("div",[s("svg",{staticClass:"mi-password-field__icon",attrs:{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor"}},[s("path",{attrs:{d:"M19.78 7.738a.964.964 0 00-1.488-1.227 10.567 10.567 0 01-2.159 1.98 10.487 10.487 0 01-5.958 1.848 10.514 10.514 0 01-2.826-.381 10.394 10.394 0 01-1.977-.776 10.612 10.612 0 01-3.646-3.095.964.964 0 00-1.547 1.15c.487.655 1.037 1.26 1.642 1.808a.955.955 0 00-.084.17l-1.01 2.692a.964.964 0 101.806.677l.868-2.32a12.316 12.316 0 002.632 1.298l-.528 2.696a.964.964 0 101.893.371l.504-2.569c1.358.25 2.747.275 4.113.072l.44 2.417a.964.964 0 101.898-.346l-.455-2.502a12.37 12.37 0 002.381-1.029l.993 2.333a.964.964 0 001.775-.756l-1.139-2.673a12.537 12.537 0 001.871-1.838z"}})])])]):n._e()]),n.is_warning?s("div",{staticClass:"warning"},[n._v(n._s(n.warning_msg))]):n._e()])},a=[],i={props:{type:{type:String,default:"text"},warning_msg:{type:String,default:""}},data:function(){return{value:"",is_show:!1,is_warning:!1}},methods:{handleFocus:function(){this.is_warning=!1;var n=this.$refs.desc;n.style.top="25px",n.style.fontSize="12px",n.style.transform="translateY(0px)"},handleBlur:function(n){if(""===this.value){var t=this.$refs.desc;t.style.fontSize="17px",t.style.transform="translateY(10px)",this.is_warning=!0}this.$emit("blur",n.target.value)},handleInput:function(n){var t=n.target.value;this.value=t,this.$emit("input",t)},handleClick:function(){this.is_show=!this.is_show},openWarning:function(){this.is_warning=!0},closeWarning:function(){this.is_warning=!1}}},r=i,o=(s("40bb"),s("2877")),c=Object(o["a"])(r,e,a,!1,null,"7bfbbc31",null);t["a"]=c.exports},c8d2:function(n,t,s){var e=s("d039"),a=s("5899"),i="​᠎";n.exports=function(n){return e((function(){return!!a[n]()||i[n]()!=i||a[n].name!==n}))}},ed7c:function(n,t,s){"use strict";s("88f3")}}]);
//# sourceMappingURL=chunk-d0fd69e6.ce880bc3.js.map