import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo',
      name: 'todolist',
      component: () => import('../components/to-do-list.vue')
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: () => import('../components/inbox.vue')
    },
    {
      path: '/addTask',
      name: 'addTask',
      component: () => import('../components/add-task.vue')
    },
    {
      path: '/category',
      name: 'categories',
      component: () => import('../components/category.vue')
    },
    {
      path: '/taskList',
      name: 'task-list',
      component: () => import('../components/task-list.vue')
    },
    {
      path: '/toolBar',
      name: 'toolBar',
      component: () => import('../components/tool-bar.vue')
    },
    {
      path: '/newForm',
      name: 'new-task-form',
      component: () => import('../components/new-task-form.vue')
    },
  ]
})

export default router
