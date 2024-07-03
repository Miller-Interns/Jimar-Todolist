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
      path: '/todo',
      name: 'todolist',
      component: () => import('../components/main/to-do-list.vue')
    },
    // {
    //   path: '/addTask',
    //   name: 'addTask',
    //   component: () => import('../components/tasks/add-task.vue')
    // },
    {
      path: '/taskList',
      name: 'task-list',
      component: () => import('../components/main/to-do-list-components/task-list.vue')
    },
    {
      path: '/toolBar',
      name: 'toolBar',
      component: () => import('../components/main/to-do-list-components/tool-bar.vue')
    },
    // {
    //   path: '/newForm',
    //   name: 'new-task-form',
    //   component: () => import('../components/tasks/new-task-form.vue')
    // },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('../components/messages/welcome-view.vue')
    }
  ]
})

export default router
