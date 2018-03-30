global.webpackJsonp([1],{

/***/ 167:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_persistedstate__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutations__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__action__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__action___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__action__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getters__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__getters__);








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* default */]);

var state = {
  test: 0,
  userInfo: {}
  // vuex中的数据已经实时的同步到本地
};/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* default */].Store({
  state: state,
  getters: __WEBPACK_IMPORTED_MODULE_5__getters___default.a,
  actions: __WEBPACK_IMPORTED_MODULE_4__action___default.a,
  mutations: __WEBPACK_IMPORTED_MODULE_3__mutations__["a" /* default */],
  plugins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex_persistedstate__["a" /* default */])({
    storage: {
      getItem: function getItem(key) {
        return wx.getStorageSync(key);
      },
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      setItem: function setItem(key, value) {
        return wx.setStorageSync(key, value, { expires: 3, secure: true });
      },
      removeItem: function removeItem(key) {
        return wx.clearStorage(key);
      }
    }
  })]
}));

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(96);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(167)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd304cae", Component.options)
  } else {
    hotAPI.reload("data-v-dd304cae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_app_css__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__css_app_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_weui_weui_css__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_weui_weui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_weui_weui_css__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/indexx/main', 'pages/index/main', 'pages/button/main', 'pages/list/main', 'pages/input/main', 'pages/slider/main', 'pages/uploader/main', 'pages/article/main', 'pages/badge/main', 'pages/flex/main', 'pages/footer/main', 'pages/gallery/main', 'pages/grid/main', 'pages/icons/main', 'pages/loadmore/main', 'pages/panel/main', 'pages/preview/main', 'pages/progress/main', 'pages/swiper/main', 'pages/actionsheet/main', 'pages/dialog/main', 'pages/msg/main', 'pages/msg-fail/main', 'pages/msg-success/main', 'pages/picker/main', 'pages/mulLinkagePicker/main', 'pages/toast/main', 'pages/navbar/main', 'pages/tabbar/main', 'pages/searchbar/main', 'pages/test/main', 'pages/componentsTest/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
});

/***/ }),

/***/ 92:
/***/ (function(module, exports) {



/***/ }),

/***/ 93:
/***/ (function(module, exports) {



/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(8);


var _TEST$USER_INFO;



/* harmony default export */ __webpack_exports__["a"] = (_TEST$USER_INFO = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_TEST$USER_INFO, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["a" /* TEST */], function (state, v) {
  state.test = v;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_TEST$USER_INFO, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["b" /* USER_INFO */], function (state, v) {
  state.userInfo = v;
}), _TEST$USER_INFO);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    console.log('app created and cache logs by setStorageSync');
  }
});

/***/ })

},[56]);
//# sourceMappingURL=app.js.map