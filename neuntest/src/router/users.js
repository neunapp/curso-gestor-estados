const userRoutes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/users/LoginPage.vue')
  }
]

export default userRoutes