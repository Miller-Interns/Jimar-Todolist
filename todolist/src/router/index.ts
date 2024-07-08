import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todoview',
      name: 'todolistview',
      component: () => import('../views/todo-view.vue')
    },
    {
      path: '/todo',
      name: 'todolist',
      component: () => import('../components/main/to-do-list.vue')
    }
  ]
})

export default router
