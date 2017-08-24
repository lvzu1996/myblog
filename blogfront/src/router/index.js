import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello/Hello'
import Home from '@/pages/Home/Home'
import Main from '@/pages/Main/Main'
import Register from '@/pages/Register/Register'

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
  ]
})
