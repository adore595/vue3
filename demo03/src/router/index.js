import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        name:'Home',
        component:()=>import('../views/Home'),
    },
    {
        path:'/home',
        name:'Home1',
        redirect:{
            name:'Home'
        },
        component:()=>import('../views/Home'),
    },
    {
        path:'/about',
        name:'About',
        component: ()=>import('@/views/About')
    },
    {
        path: '/user',
        name:'User',
        component:()=>import('@/views/User'),
        children:[
            {
                path: '',
                component:()=>import('@/views/MyOrder')
            },
            {
                path: 'order',
                component: () => import('@/views/MyOrder')
            },
            {
                path: 'setting',
                component:()=>import('@/views/MySetting')
            },
            {
                path: 'page/:pid',
                component:()=>import('@/views/MyPage')

            },
            {
                path: 'article',
                component:()=>import('@/views/Myarticle')

            }
        ]

    }
]


const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router