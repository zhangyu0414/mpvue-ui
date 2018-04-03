// import jsonp from '@/common/js/jsonp'
import {commonParams} from './config'
import Fly from 'flyio'

const request = new Fly()

// import axios from 'axios'

// export function getRecommend () {
//   const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

//   const data = Object.assign({}, commonParams, {
//     platform: 'h5',
//     uin: 0,
//     needNewCode: 1
//   })
//   return jsonp(url, data, options)
// }

export function getDiscList () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return request.get(url, data).then((d) => {
    // 输出请求数据
    console.log(d.data)
    // 输出响应头
    console.log(d.header)
    return Promise.resolve(d.data)
  })
  // axios.get(url, {
  //   params: data
  // }).then((res) => {

  // })
}

// export function getSongList (disstid) {
//   const url = '/api/getSongList'

//   const data = Object.assign({}, commonParams, {
//     disstid,
//     uin: 0,
//     type: 1,
//     json: 1,
//     platform: 'h5',
//     utf8: 1,
//     onlysong: 0,
//     nosign: 1,
//     needNewCode: 1,
//     _: 1499739323697,
//     pic: 500,
//     new_format: 1,
//     format: 'json'
//   })

//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }
