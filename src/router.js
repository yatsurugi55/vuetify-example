import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MenuSample from '@/components/atoms/MenuSample.vue'
import DashboardSample from '@/components/organisms/DashboardSample.vue'
import ProductsSample from '@/components/organisms/ProductsSample.vue'
import AboutSample from '@/components/organisms/AboutSample.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //  path: '/about',
    //  name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //  component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/sample',
      name: 'sample',
      component: MenuSample
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardSample
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsSample
    },
    {
      path: '/about',
      name: 'about',
      component: AboutSample
    }
  ]
})
