import { createRouter, createWebHistory } from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed.vue'
const Register = () => import('@/views/Register.vue')
const Login = () => import('@/views/Login.vue')

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'globalFeed',
      component: GlobalFeed
    },
    {
      path: '/feed',
      name: 'yourFeed',
      component: GlobalFeed
    },
    {
      path: '/tags/:slug',
      name: 'tag',
      component: GlobalFeed
    },
    {
      path: '/articles/new',
      name: 'createArticle',
      component: GlobalFeed
    },
    {
      path: '/articles/:slug',
      name: 'article',
      component: GlobalFeed
    },
    {
      path: '/articles/:slug/edit',
      name: 'editArticle',
      component: GlobalFeed
    },
    {
      path: '/settings',
      name: 'settings',
      component: GlobalFeed
    },
    {
      path: '/profiles/:slug',
      name: 'userProfile',
      component: GlobalFeed
    },
    {
      path: '/profiles/:slug/favourites',
      name: 'userProfileFavourites',
      component: GlobalFeed
    },
  ]
})

export default router
