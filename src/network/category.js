// 关于主页的全部请求
import { request } from './request'

export function getCategoryMultidata() {
  return request({
    url: '/category'
  })
}

