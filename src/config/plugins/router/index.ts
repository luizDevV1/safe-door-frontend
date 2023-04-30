import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '~@/views/pages/home.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'HOME',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
