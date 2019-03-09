import Vue from 'vue'
import Router from 'vue-router'
import Ghibli from '@/views/Ghibli'
// TODO: Import new component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ghibli',
      component: Ghibli
    }
    // TODO: Add new route definition here.
  ]
})
