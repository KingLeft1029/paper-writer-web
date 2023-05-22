import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/register')
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: () => import('@/views/login/redirect')
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import('@/views/login/forgotPassword')
  },
   {
    path: '/emailLogin',
    name: 'emailLogin',
    component: () => import('@/views/login/emailLogin')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('@/views/person')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/message')
  },
  {
    path: '/forums',
    name: 'forums',
    component: () => import('@/views/forums'),
  },

  {
    path: '/courses',
    name: 'courses',
    component: () => import('@/views/courses')
  },
  {
    path: '/forumsdetail',
    name: 'forumsdetail',
    component: () => import('@/views/forums/detail')
  },
  {
    path: '/coursesdetail',
    name: 'coursesdetail',
    component: () => import('@/views/courses/detail')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
