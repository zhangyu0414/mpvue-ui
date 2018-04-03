global.webpackJsonp([4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(71);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_mulLinkAgeArray__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_mulLinkAgeArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_js_mulLinkAgeArray__);
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
      pickerShow: false,
      isShowMask: false,
      pickerValue: [0, 1],
      mulLinkAgeArray: __WEBPACK_IMPORTED_MODULE_0__static_js_mulLinkAgeArray___default.a.value,
      columuOne: [],
      columnTwo: []
    };
  },
  created: function created() {
    this._initPicker();
  },

  methods: {
    pickerChange: function pickerChange(e) {
      var _this = this;
      var value = e.mp.detail.value;
      // 如果是第一列滚动
      if (value[0] !== _this.pickerValue[0]) {
        var columnTwoNew = _this.mulLinkAgeArray[value[0]].children;
        _this.columnTwo = [];
        for (var i = 0; i < columnTwoNew.length; i++) {
          _this.columnTwo.push(columnTwoNew[i].label);
        }
        _this.pickerValue = value;
        _this.pickerValue[1] = 0;
      }
      // 如果第二列滚动
      if (value[1] !== this.pickerValue[1]) {
        _this.pickerValue[1] = e.mp.detail.value[1];
      }
      console.log('选中的值为：' + _this.mulLinkAgeArray[value[0]].label + '-' + _this.mulLinkAgeArray[value[0]].children[value[1]].label);
      console.log('pickerValue：' + this.pickerValue);
    },
    pickerConfirm: function pickerConfirm() {
      console.log('选中的值为：' + this.mulLinkAgeArray[this.pickerValue[0]].label + '-' + this.mulLinkAgeArray[this.pickerValue[0]].children[this.pickerValue[1]].label);
      console.log('pickerValue：' + this.pickerValue);
      this.isShowMask = false;
      this.pickerShow = false;
    },
    pickerCancel: function pickerCancel() {
      this.isShowMask = false;
      this.pickerShow = false;
    },
    showPickerView: function showPickerView() {
      this.isShowMask = true;
      this.pickerShow = true;
    },
    maskClick: function maskClick() {
      this.pickerCancel();
    },
    _initPicker: function _initPicker() {
      var _this = this;
      // _this.columuOne = []
      // _this.columnTwo = []
      var mulLinkAgeArray = this.mulLinkAgeArray;
      for (var i = 0; i < mulLinkAgeArray.length; i++) {
        _this.columuOne.push(mulLinkAgeArray[i].label);
      }
      // 渲染第二列
      var columnTwoArray = mulLinkAgeArray[_this.pickerValue[0]].children;
      for (var _i = 0; _i < columnTwoArray.length; _i++) {
        _this.columnTwo.push(columnTwoArray[_i].label);
      }
    }
  }
});

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    class: {
      'pickerMask': _vm.isShowMask
    },
    attrs: {
      "catchtouchmove": "true",
      "eventid": '0'
    },
    on: {
      "click": _vm.maskClick
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "type": "default",
      "eventid": '1'
    },
    on: {
      "click": _vm.showPickerView
    }
  }, [_vm._v("多级联动选择")]), _vm._v(" "), _c('div', {
    staticClass: "weui-picker",
    class: {
      'weui_picker_view_show': _vm.pickerShow
    }
  }, [_c('div', {
    staticClass: "weui-picker__hd"
  }, [_c('div', {
    staticClass: "weui-picker__action",
    attrs: {
      "href": "javascript:;",
      "eventid": '2'
    },
    on: {
      "click": _vm.pickerCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('div', {
    staticClass: "weui-picker__action",
    attrs: {
      "href": "javascript:;",
      "eventid": '3'
    },
    on: {
      "click": _vm.pickerConfirm
    }
  }, [_vm._v("确定")])]), _vm._v(" "), _c('picker-view', {
    staticClass: "weui_picker_view",
    attrs: {
      "indicator-style": "height: 40px;",
      "value": _vm.pickerValue,
      "eventid": '4'
    },
    on: {
      "change": _vm.pickerChange
    }
  }, [_c('picker-view-column', {
    attrs: {
      "mpcomid": '0'
    }
  }, _vm._l((_vm.columuOne), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "picker-item"
    }, [_vm._v(_vm._s(item))])
  })), _vm._v(" "), _c('picker-view-column', {
    attrs: {
      "mpcomid": '1'
    }
  }, _vm._l((_vm.columnTwo), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "picker-item"
    }, [_vm._v(_vm._s(item))])
  }))], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2d787a3b", esExports)
  }
}

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = {
  value: [{
    label: '飞机票',
    value: 0,
    children: [{
      label: '经济舱',
      value: 1
    },
    {
      label: '商务舱',
      value: 2
    }
    ]
  },
  {
    label: '火车票',
    value: 1,
    children: [{
      label: '卧铺',
      value: 1,
      disabled: true // 不可用
    },
    {
      label: '坐票',
      value: 2
    },
    {
      label: '站票',
      value: 3
    }
    ]
  },
  {
    label: '汽车票',
    value: 3,
    children: [{
      label: '快班',
      value: 1
    },
    {
      label: '普通',
      value: 2
    }
    ]
  }
  ]
}


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_2d787a3b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(208);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(170)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_2d787a3b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mulLinkagePicker/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d787a3b", Component.options)
  } else {
    hotAPI.reload("data-v-2d787a3b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[108]);
//# sourceMappingURL=main.js.map