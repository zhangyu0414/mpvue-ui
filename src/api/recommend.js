// import {commonParams} from './config'
import Fly from 'flyio'

const request = new Fly()

// request.interceptors.request.use((config, promise) => {
//   // 给所有请求添加自定义header
//   config.headers['referer'] = 'http://c.y.qq.com'
//   config.headers['host'] = 'c.y.qq.com'
//   return config
// })

export function getDiscList () {
  // const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  const url = 'https://xingzuo.dayuxinmeiti.cn/wxapp/xingzuo/getLuck'

  const data = Object.assign({}, {}, {
    consName: '白羊座',
    type: 'today'
  })
  return request.get(url, data, {
    headers: {
      referer: 'http://c.y.qq.com',
      host: 'c.y.qq.com'
    }
  }).then((d) => {
    // 输出请求数据
    console.log(d.data)
    // 输出响应头
    console.log(d.header)
    return Promise.resolve(d.data)
  })
}

