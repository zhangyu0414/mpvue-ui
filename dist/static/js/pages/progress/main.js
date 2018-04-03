global.webpackJsonp([13],{

/***/ 125:
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
      progress: 0,
      disabled: false
    };
  },

  methods: {
    upload: function upload() {
      if (this.disabled) return;
      this.progress = 0;
      this.disabled = true;
      this._next.apply(this);
    },
    _next: function _next() {
      var _this = this;
      if (_this.progress >= 100) {
        _this.disabled = false;
        return true;
      }
      _this.progress++;
      setTimeout(function () {
        _this._next.apply(_this);
      }, 20);
    }
  }
});

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "page__bd page__bd_spacing"
  }, [_c('div', {
    staticClass: "weui-progress"
  }, [_c('div', {
    staticClass: "weui-progress__bar"
  }, [_c('progress', {
    attrs: {
      "percent": "0",
      "stroke-width": "3"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-progress__opr"
  }, [_c('icon', {
    attrs: {
      "type": "cancel",
      "size": "22"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weui-progress"
  }, [_c('div', {
    staticClass: "weui-progress__bar"
  }, [_c('progress', {
    attrs: {
      "percent": "50",
      "stroke-width": "3"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-progress__opr"
  }, [_c('icon', {
    attrs: {
      "type": "cancel",
      "size": "22"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weui-progress"
  }, [_c('div', {
    staticClass: "weui-progress__bar"
  }, [_c('progress', {
    attrs: {
      "percent": "80",
      "stroke-width": "3"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-progress__opr"
  }, [_c('icon', {
    attrs: {
      "type": "cancel",
      "size": "22"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weui-progress"
  }, [_c('div', {
    staticClass: "weui-progress__bar"
  }, [_c('progress', {
    attrs: {
      "percent": _vm.progress,
      "stroke-width": "3"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-progress__opr"
  }, [_c('icon', {
    attrs: {
      "type": "cancel",
      "size": "22"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.disabled,
      "eventid": '0'
    },
    on: {
      "click": _vm.upload
    }
  }, [_vm._v("上传")])], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("Progress")]), _vm._v(" "), _c('div', {
    staticClass: "page__desc"
  }, [_vm._v("进度条，这里采用小程序原生的progress")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2d563d99", esExports)
  }
}

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_2d563d99_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(178);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(140)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d563d99"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_2d563d99_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/progress/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d563d99", Component.options)
  } else {
    hotAPI.reload("data-v-2d563d99", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(48);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ })

},[84]);
//# sourceMappingURL=main.js.map