import Vue from 'vue'
import Router from 'vue-router'
import Ghibli from '@/views/Ghibli'

import About from "@/views/About"
import Music from "@/views/Music"
import Recipes from "@/views/Recipes"

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
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/recipes',
      name: 'Recipes',
      component: Recipes
    }

  ]
})
