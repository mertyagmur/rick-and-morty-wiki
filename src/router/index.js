import { createRouter, createWebHistory } from 'vue-router'
import CharactersView from '../views/CharactersView.vue'
import SingleCharacterView from '../views/SingleCharacterView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'characters',
      component: CharactersView
    },
    {
      path: "/characters/:characterId",
      name: "single-character",
      component: SingleCharacterView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
