import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/0402_nextTick',
    name: '0402_nextTick',
    component: () => import('@/views/0402_nextTick.vue')
  },
  {
    path: '/0402_nextTick_use',
    name: '0402_nextTick_use',
    component: () => import('@/views/0402_nextTick_use.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
