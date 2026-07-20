import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilesView from '@/views/FilesView.vue'
import IndexView from '@/views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: IndexView,
    },
    {
      path: '/files',
      component: FilesView,
    },
    {
      path: '/config',
      component: HomeView,
    },
  ],
})

export default router
