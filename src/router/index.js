import Vue from 'vue'
import Router from 'vue-router'
import reviews from '@/components/reviews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'reviews',
      component: reviews
    }
  ]
})
