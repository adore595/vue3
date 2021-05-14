import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/add',
    name:'Add',
    component: ()=>import('../views/Add')
  },
  {
    path:'/list',
    name:'List',
    component: ()=>import('../views/ShowList')
  },
  {
    path:'/main',
    name: 'Main',
    component: ()=>import('../views/ShowList')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
