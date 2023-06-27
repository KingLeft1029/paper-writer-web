import request from "@/utils/request";

// 查
export function listApi(query) {
  return request({
    url: "/business/concernsList/list",
    method: "get",
    params: query,
  });
}