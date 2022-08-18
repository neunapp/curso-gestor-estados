const examenRoutes = [
  {
    path: '/test',
    component: () => import('../views/examen/PanelBase.vue'),
    children: [
      {
        path: '',
        name: 'examen',
        component: () => import('../views/examen/QuestionsPage.vue')
      },
      
    ]
  }
]

export default examenRoutes