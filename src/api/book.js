import request from '@/utils/request'
// 增
export function addApi(data) {
    return request({
      url: '/business/book',
      method: 'post',
      data,
    })
  }
  // 查
export function listApi(query) {
  return request({
    url: "/business/book/list",
    method: "get",
    params: query,
  });
}
