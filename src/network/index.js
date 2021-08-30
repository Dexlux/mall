import { request } from './request'

export function getIndexMultidata() {
  return request({
    url: '/home/multidata'
  })
}