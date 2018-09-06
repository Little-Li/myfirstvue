import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'

import  Home from '@/views/Home'
import Welcome from '@/views/welcome/Welcome'
import User from '@/views/User/User'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/',
      name:'Home',
      component:Home,
      redirect:{path:'welcome'},
      children:[
        {
          name:'Welcome',
          path:'welcome',
          component:Welcome
        },
        {
          path: '/user',
          name: 'User',
          component: User
        },
      ]

    },
    
  ]
})
