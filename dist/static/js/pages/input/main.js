global.webpackJsonp([24],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(64);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 142:
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
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      showTopTips: false,
      time: '09:01',
      date: '2015-09-01',
      countryCodes: ['+86', '+80', '+84', '+87'],
      countryCodesIndex: 0,
      countries: ['中国', '美国', '英国'],
      countryIndex: 0,
      accounts: ['微信号', 'QQ', 'Email'],
      accountsIndex: 0,

      radioItems: [{ name: 'cell standard', value: '0' }, { name: 'cell standard', value: '1', checked: true }],
      checkboxItems: [{ name: 'standard is dealt for u.', value: '0', checked: true }, { name: 'standard is dealicient for u.', value: '1', checked: false }],

      isAgree: false
    };
  },

  methods: {
    checkboxChange: function checkboxChange(e) {
      console.log('checkbox发生change事件，携带value值为：' + e.mp.detail.value);
      var checkboxItems = this.checkboxItems;
      var values = e.mp.detail.value;
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value === values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }
      this.checkboxItems = checkboxItems;
    },
    radioChange: function radioChange(e) {
      console.log('radio发生change事件，携带value值为：' + e.mp.detail.value);
      var radioItems = this.radioItems;
      for (var i = 0; i < radioItems.length; ++i) {
        radioItems[i].checked = radioItems[i].value === e.mp.detail.value;
      }
      this.radioItems = radioItems;
    },
    switchChange: function switchChange(e) {
      console.log('switch发生change事件，携带value值为：' + e.mp.detail.value);
    },
    bindDateChange: function bindDateChange(e) {
      this.date = e.mp.detail.value;
      console.log(e.mp.detail.value);
    },
    bindTimeChange: function bindTimeChange(e) {
      this.time = e.mp.detail.value;
      console.log(e.mp.detail.value);
    },
    showTopTipsFun: function showTopTipsFun() {
      var _this = this;

      this.showTopTips = true;
      setTimeout(function () {
        _this.showTopTips = false;
      }, 2000);
    },
    bindCountryChange: function bindCountryChange(e) {
      this.countryIndex = e.mp.detail.value;
    },
    bindAccountChange: function bindAccountChange(e) {
      this.accountsIndex = e.mp.detail.value;
    },
    bindCountryCodeChange: function bindCountryCodeChange(e) {
      this.countryCodesIndex = e.mp.detail.value;
    },
    bindAgreeChange: function bindAgreeChange(e) {
      this.isAgree = !this.isAgree;
    }
  }
});

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "page__bd"
  }, [(_vm.showTopTips) ? _c('div', {
    staticClass: "weui-toptips weui-toptips_warn"
  }, [_vm._v("错误提示")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("单选列表项")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('radio-group', {
    attrs: {
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.radioChange
    }
  }, _vm._l((_vm.radioItems), function(item, index) {
    return _c('label', {
      key: index,
      staticClass: "weui-cell weui-check__label"
    }, [_c('radio', {
      staticClass: "weui-check",
      attrs: {
        "value": item.value,
        "checked": item.checked
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "weui-cell__bd"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), (item.checked) ? _c('div', {
      staticClass: "weui-cell__ft weui-cell__ft_in-radio"
    }, [_c('icon', {
      staticClass: "weui-icon-radio",
      attrs: {
        "type": "success_no_circle",
        "size": "16"
      }
    })], 1) : _vm._e()], 1)
  })), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("复选列表项")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('checkbox-group', {
    attrs: {
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.checkboxChange
    }
  }, _vm._l((_vm.checkboxItems), function(item, index) {
    return _c('label', {
      key: index,
      staticClass: "weui-cell weui-check__label"
    }, [_c('checkbox', {
      staticClass: "weui-check",
      attrs: {
        "value": item.value,
        "checked": item.checked
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "weui-cell__hd weui-check__hd_in-checkbox"
    }, [(!item.checked) ? _c('icon', {
      staticClass: "weui-icon-checkbox_circle",
      attrs: {
        "type": "circle",
        "size": "23"
      }
    }) : _vm._e(), _vm._v(" "), (item.checked) ? _c('icon', {
      staticClass: "weui-icon-checkbox_success",
      attrs: {
        "type": "success",
        "size": "23"
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "weui-cell__bd"
    }, [_vm._v(_vm._s(item.name))])], 1)
  })), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("表单")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('picker', {
    attrs: {
      "mode": "date",
      "value": "date",
      "start": "2015-09-01",
      "end": "2017-09-01",
      "eventid": '2'
    },
    on: {
      "change": _vm.bindDateChange
    }
  }, [_c('div', {
    staticClass: "weui-input"
  }, [_vm._v(_vm._s(_vm.date))])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('picker', {
    attrs: {
      "mode": "time",
      "value": "time",
      "start": "09:01",
      "end": "21:01",
      "eventid": '3'
    },
    on: {
      "change": _vm.bindTimeChange
    }
  }, [_c('div', {
    staticClass: "weui-input"
  }, [_vm._v(_vm._s(_vm.time))])])], 1)]), _vm._v(" "), _vm._m(7)]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__tips"
  }, [_vm._v("底部说明文字底部说明文字")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("表单报错")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('div', {
    staticClass: "weui-cell weui-cell_input weui-cell_warn"
  }, [_vm._m(8), _vm._v(" "), _vm._m(9), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_c('icon', {
    attrs: {
      "type": "warn",
      "size": "23",
      "color": "#E64340"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("开关")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('div', {
    staticClass: "weui-cell weui-cell_switch"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_vm._v("标题文字")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_c('switch', {
    attrs: {
      "checked": "",
      "eventid": '4'
    },
    on: {
      "change": _vm.switchChange
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("文本框")]), _vm._v(" "), _vm._m(10), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("文本域")]), _vm._v(" "), _vm._m(11), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("选择")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('div', {
    staticClass: "weui-cell weui-cell_select"
  }, [_c('div', {
    staticClass: "weui-cell__hd",
    staticStyle: {
      "width": "105px",
      "padding-left": "0"
    }
  }, [_c('picker', {
    attrs: {
      "range": _vm.countryCodes,
      "eventid": '5'
    },
    on: {
      "change": _vm.bindCountryCodeChange
    }
  }, [_c('div', {
    staticClass: "weui-select"
  }, [_vm._v(_vm._s(_vm.countryCodes[_vm.countryCodesIndex]))])])], 1), _vm._v(" "), _vm._m(12)])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("选择")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('div', {
    staticClass: "weui-cell weui-cell_select"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('picker', {
    attrs: {
      "range": _vm.accounts,
      "eventid": '6'
    },
    on: {
      "change": _vm.bindAccountChange
    }
  }, [_c('div', {
    staticClass: "weui-select"
  }, [_vm._v(_vm._s(_vm.accounts[_vm.accountsIndex]))])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_select"
  }, [_vm._m(13), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('picker', {
    attrs: {
      "range": _vm.countries,
      "eventid": '7'
    },
    on: {
      "change": _vm.bindCountryChange
    }
  }, [_c('div', {
    staticClass: "weui-select weui-select_in-select-after"
  }, [_vm._v(_vm._s(_vm.countries[_vm.countryIndex]))])])], 1)])]), _vm._v(" "), _c('checkbox-group', {
    attrs: {
      "eventid": '8',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.bindAgreeChange
    }
  }, [_c('label', {
    staticClass: "weui-agree",
    attrs: {
      "for": "weuiAgree"
    }
  }, [_c('div', {
    staticClass: "weui-agree__text"
  }, [_c('checkbox', {
    staticClass: "weui-agree__checkbox",
    attrs: {
      "id": "weuiAgree",
      "value": "agree",
      "checked": "isAgree"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-agree__checkbox-icon"
  }, [(_vm.isAgree) ? _c('icon', {
    staticClass: "weui-agree__checkbox-icon-check",
    attrs: {
      "type": "success_no_circle",
      "size": "9"
    }
  }) : _vm._e()], 1), _vm._v("\n          阅读并同意\n          "), _c('navigator', {
    staticClass: "weui-agree__link",
    attrs: {
      "url": ""
    }
  }, [_vm._v("《相关条款》")])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('button', {
    staticClass: "weui-btn",
    attrs: {
      "type": "primary",
      "eventid": '9'
    },
    on: {
      "click": _vm.showTopTipsFun
    }
  }, [_vm._v("确定")])], 1)], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("Input")]), _vm._v(" "), _c('div', {
    staticClass: "page__desc"
  }, [_vm._v("表单输入")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_link"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_vm._v("添加更多")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_link"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_vm._v("添加更多")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("qq")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入qq"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_input weui-cell_vcode"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("手机号")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入手机号"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_c('div', {
    staticClass: "weui-vcode-btn"
  }, [_vm._v("获取验证码")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("日期")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("时间")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_input weui-cell_vcode"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("验证码")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入验证码"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_c('image', {
    staticClass: "weui-vcode-img",
    staticStyle: {
      "width": "108px"
    },
    attrs: {
      "src": "../../../static/images/vcode.jpg"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("卡号")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入卡号"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入文本"
    }
  })])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('textarea', {
    staticStyle: {
      "height": "3.3em"
    },
    attrs: {
      "placeholder": "请输入文本"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-textarea-counter"
  }, [_vm._v("0/200")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__bd weui-cell__bd_in-select-before"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入号码"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd weui-cell__hd_in-select-after"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("国家/地区")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6191d918", esExports)
  }
}

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_6191d918_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(216);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(179)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_6191d918_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/input/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6191d918", Component.options)
  } else {
    hotAPI.reload("data-v-6191d918", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[101]);
//# sourceMappingURL=main.js.map