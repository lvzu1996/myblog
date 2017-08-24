import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Home from '@/pages/Home'
import Main from '@/pages/Main'
import Register from '@/pages/Register'

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
