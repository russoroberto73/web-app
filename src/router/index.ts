import { createRouter, createWebHistory } from 'vue-router'

const hostname = window.location.hostname
/*const LinkBase = {
  path: '/',
  name: 'home',
  component:
    hostname === 'admin.russoroberto73.it'
      ? () => import('../views/HomeAdmin.vue')
      : hostname === 'parlino.russoroberto73.it'
        ? () => import('../views/HomeParlino.vue')
        : hostname === 'test.russoroberto73.it'
          ? () => import('../views/HomeTest.vue')
          : () => import('../views/Home.vue'),
}
*/
import { LinkVetrina } from './vetrina.routers'
import { LinkTest } from './test.routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...(hostname === 'new.russoroberto73.it' ? LinkVetrina : []),
    ...(hostname === 'test.russoroberto73.it' ? LinkTest : []),
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404.vue'),
    },
  ],
})

export default router
