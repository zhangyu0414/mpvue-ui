global.webpackJsonp([21],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(68);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 146:
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

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "weui-msg"
  }, [_c('div', {
    staticClass: "weui-msg__icon-area"
  }, [_c('icon', {
    attrs: {
      "type": "warn",
      "size": "93"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-msg__text-area"
  }, [_c('div', {
    staticClass: "weui-msg__title"
  }, [_vm._v("操作失败")]), _vm._v(" "), _c('div', {
    staticClass: "weui-msg__desc"
  }, [_vm._v("内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"), _c('navigator', {
    staticClass: "weui-msg__link",
    attrs: {
      "url": ""
    }
  }, [_vm._v("文字链接")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weui-msg__opr-area"
  }, [_c('div', {
    staticClass: "weui-btn-area"
  }, [_c('button', {
    staticClass: "weui-btn",
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("推荐操作")]), _vm._v(" "), _c('button', {
    staticClass: "weui-btn",
    attrs: {
      "type": "default"
    }
  }, [_vm._v("辅助操作")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weui-msg__extra-area"
  }, [_c('div', {
    staticClass: "weui-footer"
  }, [_c('div', {
    staticClass: "weui-footer__links"
  }, [_c('navigator', {
    staticClass: "weui-footer__link",
    attrs: {
      "url": ""
    }
  }, [_vm._v("底部链接文本")])], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-footer__text"
  }, [_vm._v("Copyright © 2008-2018 weui.io")])])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-18628d16", esExports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_18628d16_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(206);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(168)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_18628d16_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/msg-fail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18628d16", Component.options)
  } else {
    hotAPI.reload("data-v-18628d16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[105]);
//# sourceMappingURL=main.js.map