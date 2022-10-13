import { createRouter, createWebHistory } from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed.vue'
const Register = () => import('@/views/Register.vue')
const Login = () => import('@/views/Login.vue')
const YourFeed = () => import('@/views/YourFeed.vue')
const TagFeed = () => import('@/views/TagFeed.vue')
const Article = () => import('@/views/Article.vue')

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
      component: YourFeed
    },
    {
      path: '/tags/:slug',
      name: 'tag',
      component: TagFeed
    },
    {
      path: '/articles/new',
      name: 'createArticle',
      component: GlobalFeed
    },
    {
      path: '/articles/:slug',
      name: 'article',
      component: Article
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
