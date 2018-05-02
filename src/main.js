import Vue from 'vue'
import App from './App'
import store from './store'
import './css/app.css'
Vue.config.productionTip = false
App.mpType = 'app'
// import MpvueRouterPatch from 'mpvue-router-patch'
// var Fly = require('flyio/dist/npm/wx')
// var fly = new Fly()

// Vue.prototype.$http = fly // 将fly实例挂在vue原型上
// Vue.use(MpvueRouterPatch)

Vue.prototype.$store = store
import '../static/weui/weui.css'
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      'pages/indexx/main',
      '^pages/index/main',
      'pages/button/main',
      'pages/list/main',
      'pages/input/main',
      'pages/slider/main',
      'pages/uploader/main',

      'pages/article/main',
      'pages/badge/main',
      'pages/flex/main',
      'pages/footer/main',
      'pages/gallery/main',
      'pages/grid/main',
      'pages/icons/main',
      'pages/loadmore/main',
      'pages/panel/main',
      'pages/preview/main',
      'pages/progress/main',
      'pages/swiper/main',

      'pages/actionsheet/main',
      'pages/dialog/main',
      'pages/msg/main',
      'pages/msg-fail/main',
      'pages/msg-success/main',
      'pages/picker/main',
      'pages/mulLinkagePicker/main',
      'pages/toast/main',
      'pages/navbar/main',
      'pages/tabbar/main',

      'pages/searchbar/main',

      'pages/test/main',
      'pages/componentsTest/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#1AAD16',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/main',
          text: '微信',
          iconPath: 'static/images/icon_nav_button.png',
          selectedIconPath: 'static/images/icon_nav_button.png'
        },
        {
          pagePath: 'pages/searchbar/main',
          text: '通讯录',
          iconPath: 'static/images/icon_nav_cell.png',
          selectedIconPath: 'static/images/icon_nav_cell.png'
        },
        {
          pagePath: 'pages/dialog/main',
          text: '发现',
          iconPath: 'static/images/icon_nav_cell.png',
          selectedIconPath: 'static/images/icon_nav_cell.png'
        },
        {
          pagePath: 'pages/picker/main',
          text: '我',
          iconPath: 'static/images/icon_nav_toast.png',
          selectedIconPath: 'static/images/icon_nav_toast.png'
        }
      ]
    }
  }
}
