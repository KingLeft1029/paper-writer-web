import request from '@/utils/request'
// 增
export function addApi(data) {
    return request({
      url: '/business/recharge_record',
      method: 'post',
      data,
    })
  }
  // 查
export function getApi(query) {
    return request({
      url: "/business/wallet/myWallet",
      method: "get",
      params: query,
    });
  }