// 关于主页的全部请求
import { request } from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}