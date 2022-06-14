import { createRouter, createWebHistory } from 'vue-router'
import Tarefas from '../views/Tarefas.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tarefas',
      component: Tarefas
    },
    {
      path: '/formularios',
      name: 'formularios',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Formularios.vue')
    }
  ]
})

export default router
