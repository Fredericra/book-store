import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import LivreView from '@/views/LivreView.vue'
import ContactView from '@/views/ContactView.vue'
import LivreFind from '@/views/LivreFind.vue'
import Connexion from '@/views/Connexion.vue'
import Inscrire from '@/views/Inscrire.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/livre',
      name: 'livre',
      component: LivreView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/livre/:id/',
      name: 'livre-find',
      component: LivreFind,
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion,
    },
    {
      path: '/inscrire',
      name: 'inscrire',
      component: Inscrire,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: PageNotFound,
    }
  ],
})

export default router
