import Vue from 'vue'
import Router from 'vue-router'
import Ghibli from '@/views/Ghibli'

import About from "@/views/About"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ghibli',
      component: Ghibli
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }

  ]
})
