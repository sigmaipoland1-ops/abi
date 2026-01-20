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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/our-dogs',
      name: 'dogs',
      component: () => import('../views/DogsView.vue')
    },
    {
      path: '/puppies',
      name: 'puppies',
      component: () => import('../views/PuppiesView.vue')
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: () => import('../views/KnowledgeView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/Contact.vue') 
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
