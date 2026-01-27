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
      path: '/o-nas',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/nasze-psy',
      name: 'dogs',
      component: () => import('../views/DogsView.vue')
    },
    {
      path: '/szczenieta',
      name: 'puppies',
      component: () => import('../views/PuppiesView.vue')
    },
    {
      path: '/warto-wiedziec',
      name: 'knowledge',
      component: () => import('../views/KnowledgeView.vue')
    },
    {
      path: '/kontakt',
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
