import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import login from "@/views/login";
import person from "@/views/person";
import register from "@/views/login/register";
import redirect from "@/views/login/redirect";
import forgotPassword from "@/views/login/forgotPassword";
import emailLogin from "@/views/login/emailLogin";
import message from "@/views/message";
import forums from "@/views/forums";
import videos from "@/views/courses";
import forumsdetail from "@/views/forums/detail";
import coursesdetail from "@/views/courses/detail";
import video from "@/views/courses/video";
import books from "@/views/books";
import records from "@/views/books/records";
import coupons from "@/views/coupons";
import withdraw from "@/views/wallet/withdraw";
import addbook from "@/views/books/addbook";
import addforum from "@/views/forums/addforum";
import addcourse from "@/views/courses/addcourse";
import coursestable from "@/views/courses/coursestable";
import managementcourse from "@/views/courses/managementcourse";
import videoform from "@/views/courses/videoform";
import assingmentsform from "@/views/courses/assingmentsform";
import otherinfo from "@/views/other";
import routeView from "@/views/routeview";
import groupchat from "@/views/im/groupchat"
import reportchat from "@/views/im/reportchat"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/redirect",
    name: "redirect",
    component: redirect,
  },
  {
    path: "/forgotPassword",
    name: "forgotPassword",
    component: forgotPassword,
  },
  {
    path: "/emailLogin",
    name: "emailLogin",
    component: emailLogin,
  },
  {
    path: "/person",
    name: "person",
    component: person,
  },
  {
    path: "/message",
    name: "message",
    component: message,
  },
  {
    path: "/forums",

    component: routeView,
    children: [
      {
        path: "index",
        name: "forums",
        component: forums,
      },
      {
        path: "detail",
        name: "forumsdetail",
        component: forumsdetail,
      },
      {
        path: "addforum",
        name: "addforum",
        component: addforum,
      },
    ],
  },

  {
    path: "/videos",
    component: routeView,
    children: [
      {
        path: "index",
        name: "videos",
        component: videos,
       
      },
      {
        path: "detail",
        name: "videosdetail",
        component: coursesdetail,
      },
      {
        path: "video",
        name: "video",
        component: video,
      },
      {
        path: "addcourse",
        name: "addcourse",
        component: addcourse,
      },
      {
        path: "coursestable",
        name: "coursestable",
        component: coursestable,
      },
      {
        path: "videoform",
        name: "videoform",
        component: videoform,
      },
      {
        path: "managementcourse",
        name: "managementcourse",
        component: managementcourse,
      },
    ],
  },

 
  {
    path: "/books",
    name: "books",
    component: books,
  },
  {
    path: "/records",
    name: "records",
    component: records,
  },
  {
    path: "/coupons",
    name: "coupons",
    component: coupons,
  },
  {
    path: "/withdraw",
    name: "withdraw",
    component: withdraw,
  },
  {
    path: "/addbook",
    name: "addbook",
    component: addbook,
  },


 

 
  {
    path: "/assingmentsform",
    name: "assingmentsform",
    component: assingmentsform,
  },
  {
    path: "/otherinfo",
    name: "otherinfo",
    component: otherinfo,
  },
  {
    path: '/groupchat',
    name: 'groupchat',
    component:  groupchat
  },
  {
    path: '/reportchat',
    name: 'reportchat',
    component:  reportchat
  },
  // {
  //   path: '/chat',
  //   name: 'chat',
  //   component:  import('@/views/im/chat-conversation')
  // },
  // {
  //   path: '/main',
  //   name: 'main',
  //   component:  import('@/views/im/chat-conversation')
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component:  import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
