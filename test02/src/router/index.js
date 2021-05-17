import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index')
    },
    {
        path: '/main',
        name: 'Main',
        component:()=>import('../views/Main')
    },
    {
        path: '/update',
        name: 'Update',
        component: () => import('../views/Update')
    },
    {
        path:'/add',
        name:'Add',
        component:() =>import('../views/Add')
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
