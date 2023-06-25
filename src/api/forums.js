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
