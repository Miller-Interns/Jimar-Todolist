// Not using RouterLink and RouterView


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
    // {
    //   path: '/taskList',
    //   name: 'task-list',
    //   component: () => import('../components/main/to-do-list-components/task-list.vue')
    // },
    // {
    //   path: '/toolBar',
    //   name: 'toolBar',
    //   component: () => import('../components/main/to-do-list-components/tool-bar.vue')
    // },
    // {
    //   path: '/welcome',
    //   name: 'welcome',
    //   component: () => import('../components/messages/welcome-view.vue')
    // }
  ]
})

export default router
