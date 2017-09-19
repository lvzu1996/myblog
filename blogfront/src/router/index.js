/*
 @Author:lvzu
 @Update:2017/9/19

本文件是vue-router的配置文件

在导入各页面时使用的是Vue的懒加载
如下：
const Home = () => import('@/pages/Home/Home')

懒加载官方文档：
https://router.vuejs.org/en/advanced/lazy-loading.html#

 */
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/Home/Home')
const Main = () => import('@/pages/Main/Main')
const Hello = () => import('@/pages/Hello/Hello')
const Register = () => import('@/pages/Register/Register')
const Lvzu = () => import('@/pages/Lvzu/Lvzu')
const Test = () => import('@/pages/Test/Test')
const DetailInfo = () => import('@/pages/DetailInfo/DetailInfo')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/',
      name:'Home',
      component : Home
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/main',
      name:'Main',
      component:Main
    },
    {
      path:'/test',
      name:'Test',
      component:Test
    },
    {
      path:'/about-me',
      name:'Lvzu',
      component:Lvzu
    },
    {
      path:'/register/detailInfo',
      name:'detailInfo',
      component:DetailInfo
    },
  ]
})
