import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path: '/Welcome',
      name: 'Welcome',
      component: () => import('../views/Welcome.vue')
   },
   {
      path: '/List',
      name: 'List',
      component: () => import('../views/List.vue')
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router