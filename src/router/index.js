import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path : '/',
      name : "HomeView",
      component : () => import('@/views/HomeView.vue')
    },

    {
      path : '/explain',
      name : "Explanation",
      component : () => import('@/views/Explanation.vue')
    },


    {
      path : '/login',
      name : 'Login',
      component : () => import('@/views/Login.vue')
    },

    {
      path : '/roulette',
      name : "Roulette",
      component : () => import('@/views/Roulette.vue')
    },

    {
      path : '/game',
      name : "Game",
      component : () => import('@/views/Game.vue')
    },
  ]
})

export default router
