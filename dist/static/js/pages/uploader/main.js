global.webpackJsonp([7],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(83);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 161:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      files: []
    };
  },

  methods: {
    chooseImage: function chooseImage(e) {
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          console.log('成功上传：' + res.tempFilePaths);
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          _this.files = _this.files.concat(res.tempFilePaths);
        },
        fail: function fail() {
          console.log('fail');
        },
        complete: function complete() {
          console.log('commplete');
        }
      });
    },
    predivImage: function predivImage(e) {
      console.log(e);
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.files // 需要预览的图片http链接列表
      });
    }
  }
});

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "page__bd"
  }, [_c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', {
    staticClass: "weui-uploader"
  }, [_c('div', {
    staticClass: "weui-uploader__hd"
  }, [_c('div', {
    staticClass: "weui-uploader__title"
  }, [_vm._v("图片上传")]), _vm._v(" "), _c('div', {
    staticClass: "weui-uploader__info"
  }, [_vm._v(_vm._s(_vm.files.length) + "/2")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-uploader__bd"
  }, [_c('div', {
    staticClass: "weui-uploader__files",
    attrs: {
      "id": "uploaderFiles"
    }
  }, [_vm._l((_vm.files), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('div', {
      staticClass: "weui-uploader__file",
      attrs: {
        "id": item,
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.predivImage
      }
    }, [_c('image', {
      staticClass: "weui-uploader__img",
      attrs: {
        "src": item,
        "mode": "aspectFill"
      }
    })])])
  }), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "weui-uploader__file weui-uploader__file_status"
  }, [_c('image', {
    staticClass: "weui-uploader__img",
    attrs: {
      "src": "../../../static/images/pic_160.png",
      "mode": "aspectFill"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-uploader__file-content"
  }, [_c('icon', {
    attrs: {
      "type": "warn",
      "size": "23",
      "color": "#F43530"
    }
  })], 1)]), _vm._v(" "), _vm._m(4)], 2), _vm._v(" "), _c('div', {
    staticClass: "weui-uploader__input-box"
  }, [_c('div', {
    staticClass: "weui-uploader__input",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.chooseImage
    }
  })])])])])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("Uploader")]), _vm._v(" "), _c('div', {
    staticClass: "page__desc"
  }, [_vm._v("上传组件")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-uploader__file"
  }, [_c('image', {
    staticClass: "weui-uploader__img",
    attrs: {
      "src": "../../../static/images/pic_160.png",
      "mode": "aspectFill"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-uploader__file"
  }, [_c('image', {
    staticClass: "weui-uploader__img",
    attrs: {
      "src": "../../../static/images/pic_160.png",
      "mode": "aspectFill"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-uploader__file"
  }, [_c('image', {
    staticClass: "weui-uploader__img",
    attrs: {
      "src": "../../../static/images/pic_160.png",
      "mode": "aspectFill"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-uploader__file weui-uploader__file_status"
  }, [_c('image', {
    staticClass: "weui-uploader__img",
    attrs: {
      "src": "../../../static/images/pic_160.png",
      "mode": "aspectFill"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-uploader__file-content"
  }, [_vm._v("50%")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c3af06cc", esExports)
  }
}

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_c3af06cc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(232);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(195)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_template_compiler_index_id_data_v_c3af06cc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_9_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/uploader/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c3af06cc", Component.options)
  } else {
    hotAPI.reload("data-v-c3af06cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[120]);
//# sourceMappingURL=main.js.map