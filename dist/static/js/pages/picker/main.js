global.webpackJsonp([16],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(74);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 152:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      array: ['美国', '中国', '巴西', '日本'],
      index: 0,
      date: '2016-09-01',
      time: '12:01',
      indexMulPicker: [0, 1, 1],
      multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
      region: ['广东省', '广州市', '海珠区']
    };
  },

  methods: {
    bindPickerChange: function bindPickerChange(e) {
      console.log('选中的值为：' + this.array[e.mp.detail.value]);
    },
    MultiPickerChange: function MultiPickerChange(e) {
      console.log('选中的值为：' + this.multiArray[0][e.mp.detail.value[0]] + '-' + this.multiArray[1][e.mp.detail.value[1]] + '-' + this.multiArray[2][e.mp.detail.value[2]]);
    },
    MultiPickerColumChange: function MultiPickerColumChange(e) {
      console.log('列发生变化：' + '第' + parseInt(e.mp.detail.column + 1) + '列发生了变化，这列变化的值为:' + this.multiArray[e.mp.detail.column][e.mp.detail.value]);
    },
    bindTimeChange: function bindTimeChange(e) {
      console.log('选中的时间为：' + e.mp.detail.value);
    },
    bindDateChange: function bindDateChange(e) {
      console.log('选中的日期为：' + e.mp.detail.value);
    },
    CityChange: function CityChange(e) {
      console.log('选中的城市为：' + e.mp.detail.value);
    },
    multiLinkagePicker: function multiLinkagePicker() {
      wx.navigateTo({
        url: '../mulLinkagePicker/main'
      });
    }
  }
});

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "page__bd"
  }, [_c('div', {
    staticClass: "weui-btn-area"
  }, [_c('picker', {
    attrs: {
      "value": _vm.index,
      "range": _vm.array,
      "eventid": '0'
    },
    on: {
      "change": _vm.bindPickerChange
    }
  }, [_c('button', {
    attrs: {
      "type": "default"
    }
  }, [_vm._v("单列选择器")])], 1), _vm._v(" "), _c('picker', {
    staticClass: "weui-btn",
    attrs: {
      "mode": "multiSelector",
      "value": _vm.indexMulPicker,
      "range": _vm.multiArray,
      "eventid": '1'
    },
    on: {
      "change": _vm.MultiPickerChange,
      "columnchange": _vm.MultiPickerColumChange
    }
  }, [_c('button', {
    attrs: {
      "type": "default"
    }
  }, [_vm._v("多列选择器")])], 1), _vm._v(" "), _c('picker', {
    staticClass: "weui-btn",
    attrs: {
      "mode": "time",
      "value": _vm.time,
      "start": "09:01",
      "end": "21:01",
      "eventid": '2'
    },
    on: {
      "change": _vm.bindTimeChange
    }
  }, [_c('button', {
    attrs: {
      "type": "default"
    }
  }, [_vm._v("时间选择器")])], 1), _vm._v(" "), _c('picker', {
    staticClass: "weui-btn",
    attrs: {
      "mode": "date",
      "value": _vm.date,
      "start": "2015-09-01",
      "end": "2017-09-01",
      "eventid": '3'
    },
    on: {
      "change": _vm.bindDateChange
    }
  }, [_c('button', {
    attrs: {
      "type": "default"
    }
  }, [_vm._v("日期选择器")])], 1), _vm._v(" "), _c('picker', {
    staticClass: "weui-btn",
    attrs: {
      "mode": "region",
      "value": _vm.region,
      "eventid": '4'
    },
    on: {
      "change": _vm.CityChange
    }
  }, [_c('button', {
    attrs: {
      "type": "default"
    }
  }, [_vm._v("城市选择器")])], 1), _vm._v(" "), _c('button', {
    staticClass: "weui-btn",
    attrs: {
      "type": "default",
      "eventid": '5'
    },
    on: {
      "click": _vm.multiLinkagePicker
    }
  }, [_vm._v("多级联动")])], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("Picker")]), _vm._v(" "), _c('div', {
    staticClass: "page__desc"
  }, [_vm._v("选择器，这里使用小程序原生的picker。")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-883ca20c", esExports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_883ca20c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(226);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(189)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_883ca20c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/picker/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-883ca20c", Component.options)
  } else {
    hotAPI.reload("data-v-883ca20c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[111]);
//# sourceMappingURL=main.js.map