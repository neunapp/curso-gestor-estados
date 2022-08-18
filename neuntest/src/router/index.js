import { createRouter, createWebHistory } from 'vue-router'

import userRoutes from './users.js'
import examenRoutes from './examen.js'

const routes =  userRoutes.concat(examenRoutes)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
