import { createRouter, createWebHistory } from '@ionic/vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export {
  routes,
  router,
}
