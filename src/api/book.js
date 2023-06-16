import request from '@/utils/request'
// 增
export function addApi(data) {
    return request({
      url: '/business/book',
      method: 'post',
      data,
    })
  }
  