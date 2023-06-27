import request from "@/utils/request";
// 增
export function add(data) {
  return request({
    url: "/business/course",
    method: "post",
    data,
  });
}
// 查
export function listApi(query) {
  return request({
    url: "/business/course/list",
    method: "get",
    params: query,
  });
}
// 详细信息
export function detailApi(id) {
  return request({
    url: '/business/course/'+id,
    method: 'get'
  })
}
// 添加章节
export function addChapter(data) {
  return request({
    url: "/business/chapter",
    method: "post",
    data,
  });
}

