global.webpackJsonp([7],{"/i5i":function(t,a,e){"use strict";a.a={data:function(){return{}},methods:{openToast:function(){wx.showToast({title:"已完成",icon:"success",duration:3e3})},openLoading:function(){wx.showToast({title:"数据加载中",icon:"loading",duration:3e3})}}}},NmAz:function(t,a,e){"use strict";function n(t){e("XAKd")}var s=e("/i5i"),i=e("c8a0"),c=e("huui"),o=n,u=c(s.a,i.a,o,null,null);a.a=u.exports},XAKd:function(t,a){},bbA4:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("5nAL"),s=e.n(n),i=e("NmAz");new s.a(i.a).$mount()},c8a0:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("div",{staticClass:"page__bd"},[e("div",{staticClass:"weui-btn-area"},[e("button",{staticClass:"weui-btn",attrs:{type:"default",eventid:"0"},on:{click:t.openToast}},[t._v("成功提示")]),t._v(" "),e("button",{staticClass:"weui-btn",attrs:{type:"default",eventid:"1"},on:{click:t.openLoading}},[t._v("加载中提示")])],1)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page__hd"},[e("div",{staticClass:"page__title"},[t._v("Toast")]),t._v(" "),e("div",{staticClass:"page__desc"},[t._v("弹出式提示，采用小程序原生的toast")])])}],i={render:n,staticRenderFns:s};a.a=i}},["bbA4"]);