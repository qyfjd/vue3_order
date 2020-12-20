import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Center.vue'
import Detail from '../views/Detail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/film',
    component: Film
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/',
    component: Film
  }
]
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.fullPath === '/cinema') {
    console.log('拦截')
  } else {
    next()
  }
})

export default router
