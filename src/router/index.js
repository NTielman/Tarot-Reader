import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Random from '@/views/Random.vue'
import Category from '@/views/Category.vue'
import CategoryDetail from '@/views/CategoryDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/category/:id',
    name: 'CategoryDetail',
    component: CategoryDetail,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
