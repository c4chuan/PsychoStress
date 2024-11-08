import { createRouter, createWebHistory } from "vue-router";

// 在这里设置了路由配置，即在地址栏输入的地址，会跳转到对应的页面
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue')
        },
        {
            path: '/',
            component: () => import('@/components/Header.vue'),
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/views/Home.vue')
                },
                {
                    path: '/status',
                    name: 'status',
                    component: () => import('@/views/Status.vue')
                },
                {
                    path: '/details',
                    name: 'details',
                    component: () => import('@/views/Details.vue')
                },
                {
                    path: '/suggestions',
                    name: 'suggestions',
                    component: () => import('@/views/Suggestions.vue')
                }
            ]
        },
    ]
})

export default router