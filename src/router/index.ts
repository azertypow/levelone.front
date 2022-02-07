import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Log',
  //   component: () => import('../views/Log.vue'),
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  // {
  //   path: '/pre-order',
  //   name: 'PreOrder',
  //   component: () => import('../views/PreOrder.vue'),
  // },
  {
    path: '/certification',
    name: 'Certification',
    component: () => import('../views/Certification.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: +100,
      }
    }
  },
})

export default router
