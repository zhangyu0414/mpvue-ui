global.webpackJsonp([9],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(81);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  /* config: {
     backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#000000',
    navigationBarTitleText: '自定义标题',
    navigationBarTextStyle: 'black'
   } */
});

/***/ }),

/***/ 159:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      select: 'home'
    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nav",
    attrs: {
      "eventid": '0'
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, [_c('navigator', {
    staticClass: "tab-item",
    attrs: {
      "tag": "div",
      "url": "/pages/slider/main"
    }
  }, [_c('div', {
    staticClass: "tab-icon home"
  }), _vm._v(" "), _c('span', {
    staticClass: "tab-link"
  }, [_vm._v("首页")])]), _vm._v(" "), _c('navigator', {
    staticClass: "tab-item",
    attrs: {
      "tag": "div",
      "url": "/pages/slider/main"
    }
  }, [_c('div', {
    staticClass: "tab-icon doctor"
  }), _vm._v(" "), _c('span', {
    staticClass: "tab-link"
  }, [_vm._v("医生")])]), _vm._v(" "), _c('navigator', {
    staticClass: "tab-item",
    attrs: {
      "tag": "div",
      "url": "/pages/slider/main"
    }
  }, [_c('div', {
    staticClass: "tab-icon family"
  }), _vm._v(" "), _c('span', {
    staticClass: "tab-link"
  }, [_vm._v("家庭成员")])]), _vm._v(" "), _c('navigator', {
    staticClass: "tab-item",
    attrs: {
      "tag": "div",
      "url": "/pages/slider/main"
    }
  }, [_c('div', {
    staticClass: "tab-icon my"
  }), _vm._v(" "), _c('span', {
    staticClass: "tab-link"
  }, [_vm._v("我的")])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-61fcb63e", esExports)
  }
}

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_61fcb63e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(217);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(180)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61fcb63e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_61fcb63e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/test/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61fcb63e", Component.options)
  } else {
    hotAPI.reload("data-v-61fcb63e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[118]);
//# sourceMappingURL=main.js.map