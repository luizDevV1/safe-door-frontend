import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '~@/views/pages/home.vue'
import Login from '~@/views/components/login.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'HOME',
    component: Home
  },
  {
    path: '/login',
    name: 'LOGIN',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
