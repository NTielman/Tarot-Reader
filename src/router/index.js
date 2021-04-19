import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import Random from '@/pages/RandomPage.vue'
import Categories from '@/pages/CategoriesPage.vue'
import Category from '@/pages/CategoryPage.vue'

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
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/categories/:id',
    name: 'Category',
    component: Category,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router