import request from "@/utils/request";
// 增
export function add(data) {
  return request({
    url: "/business/article",
    method: "post",
    data,
  });
}
// 查
export function listApi(query) {
  return request({
    url: "/business/article/list",
    method: "get",
    params: query,
  });
}
// 详细信息
export function detailApi(id) {
  return request({
    url: `/business/article/${id}`,
    method: "get",

  });
}
//打赏墨水
export function inkApi(query) {
  return request({
    url: "/business/article/rewardInk",
    method: "get",
    params: query,
  });
}

