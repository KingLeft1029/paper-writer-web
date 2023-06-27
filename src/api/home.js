import request from "@/utils/request";

// 查课程列表
export function getCoursePage(query) {
  return request({
    url: "/homePage/getCoursePage",
    method: "get",
    params: query,
  });
}

// 查文章列表
export function getArticlePage(query) {
    return request({
      url: "/homePage/getArticlePage",
      method: "get",
      params: query,
    });
  }
  // 查轮播图列表
export function getCarouseChartList(query) {
    return request({
      url: "/homePage/getCarouseChartList",
      method: "get",
      params: query,
    });
  }
  
 // 查热门推荐
 export function getTopRecommendationsPage(query) {
    return request({
      url: "/homePage/getTopRecommendationsPage",
      method: "get",
      params: query,
    });
  }
   // 获取课程详情
 export function articleDetail(id) {
    return request({
        url: `/homePage/article/${id}`,
      method: "get",
    });
  }
    // 获取文章详情
 export function courseDetail(id) {
    return request({
      url: `/homePage/course/${id}`,
      method: "get",
    });
  }
  

  


