import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello/Hello'
import Home from '@/pages/Home/Home'
import Main from '@/pages/Main/Main'
import Register from '@/pages/Register/Register'
import Lvzu from '@/pages/Lvzu/Lvzu'
import Test from '@/pages/Test/Test'
import DetailInfo from '@/pages/DetailInfo/DetailInfo'

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
