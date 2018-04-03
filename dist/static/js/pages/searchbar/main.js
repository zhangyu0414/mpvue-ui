global.webpackJsonp([12],{

/***/ 126:
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
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      inputShowed: false,
      inputVal: ''
    };
  },

  methods: {
    showInput: function showInput() {
      this.inputShowed = true;
    },
    hideInput: function hideInput() {
      this.inputVal = '';
      this.inputShowed = false;
    },
    clearInput: function clearInput() {
      this.inputVal = '';
    },
    inputTyping: function inputTyping(e) {
      console.log(e);
      this.inputVal = e.mp.detail.value;
      console.log('输入信息为：' + e.mp.detail.value);
    }
  }
});

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "page__bd"
  }, [_c('div', {
    staticClass: "weui-search-bar"
  }, [_c('div', {
    staticClass: "weui-search-bar__form"
  }, [_c('div', {
    staticClass: "weui-search-bar__box"
  }, [_c('icon', {
    staticClass: "weui-icon-search_in-box",
    attrs: {
      "type": "search",
      "size": "14"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputVal),
      expression: "inputVal"
    }],
    staticClass: "weui-search-bar__input",
    attrs: {
      "type": "text",
      "placeholder": "搜索",
      "focus": _vm.inputShowed,
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.inputVal)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.inputVal = $event.target.value
      }, _vm.inputTyping]
    }
  }), _vm._v(" "), (_vm.inputVal.length > 0) ? _c('div', {
    staticClass: "weui-icon-clear",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.clearInput
    }
  }, [_c('icon', {
    attrs: {
      "type": "clear",
      "size": "14"
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c('label', {
    staticClass: "weui-search-bar__label",
    attrs: {
      "hidden": _vm.inputShowed,
      "eventid": '2'
    },
    on: {
      "click": _vm.showInput
    }
  }, [_c('icon', {
    staticClass: "weui-icon-search",
    attrs: {
      "type": "search",
      "size": "14"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-search-bar__text"
  }, [_vm._v("搜索")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-search-bar__cancel-btn",
    attrs: {
      "hidden": !_vm.inputShowed,
      "eventid": '3'
    },
    on: {
      "click": _vm.hideInput
    }
  }, [_vm._v("取消")])]), _vm._v(" "), (_vm.inputVal.length > 0) ? _c('div', {
    staticClass: "weui-cells searchbar-result"
  }, [_c('navigator', {
    staticClass: "weui-cell",
    attrs: {
      "url": "",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', [_vm._v("实时搜索文本")])])]), _vm._v(" "), _c('navigator', {
    staticClass: "weui-cell",
    attrs: {
      "url": "",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', [_vm._v("实时搜索文本")])])]), _vm._v(" "), _c('navigator', {
    staticClass: "weui-cell",
    attrs: {
      "url": "",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', [_vm._v("实时搜索文本")])])]), _vm._v(" "), _c('navigator', {
    staticClass: "weui-cell",
    attrs: {
      "url": "",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', [_vm._v("实时搜索文本")])])])], 1) : _vm._e()])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("SearchBar")]), _vm._v(" "), _c('div', {
    staticClass: "page__desc"
  }, [_vm._v("搜索栏")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-aa47c756", esExports)
  }
}

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_aa47c756_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(201);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(164)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-aa47c756"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_aa47c756_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/searchbar/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aa47c756", Component.options)
  } else {
    hotAPI.reload("data-v-aa47c756", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(49);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ })

},[85]);
//# sourceMappingURL=main.js.map