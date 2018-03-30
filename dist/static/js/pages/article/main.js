global.webpackJsonp([34],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("Article")]), _vm._v(" "), _c('div', {
    staticClass: "page__desc"
  }, [_vm._v("文章")])]), _vm._v(" "), _c('div', {
    staticClass: "page__bd"
  }, [_c('div', {
    staticClass: "weui-article"
  }, [_c('div', {
    staticClass: "weui-article__h1"
  }, [_vm._v("大标题")]), _vm._v(" "), _c('div', {
    staticClass: "weui-article__section"
  }, [_c('div', {
    staticClass: "weui-article__title"
  }, [_vm._v("章标题")]), _vm._v(" "), _c('div', {
    staticClass: "weui-article__section"
  }, [_c('div', {
    staticClass: "weui-article__h3"
  }, [_vm._v("1.1 节标题")]), _vm._v(" "), _c('div', {
    staticClass: "weui-article__p"
  }, [_vm._v("\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                        consequat.\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "weui-article__p"
  }, [_c('image', {
    staticClass: "weui-article__img",
    staticStyle: {
      "height": "180px"
    },
    attrs: {
      "src": "../../../static/images/pic_article.png",
      "mode": "aspectFit"
    }
  }), _vm._v(" "), _c('image', {
    staticClass: "weui-article__img",
    staticStyle: {
      "height": "180px"
    },
    attrs: {
      "src": "../../../static/images/pic_article.png",
      "mode": "aspectFit"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-article__section"
  }, [_c('div', {
    staticClass: "weui-article__h3"
  }, [_vm._v("1.2 节标题")]), _vm._v(" "), _c('div', {
    staticClass: "weui-article__p"
  }, [_vm._v("\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                    ")])])])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7651f096", esExports)
  }
}

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_7651f096_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(199);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(161)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_7651f096_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/article/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7651f096", Component.options)
  } else {
    hotAPI.reload("data-v-7651f096", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(23);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ })

},[58]);
//# sourceMappingURL=main.js.map