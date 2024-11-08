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
            redirect: '/login',
            component: () => import('@/views/Login.vue')
        },
        {
            path: '/phoneforget',
            name: 'phoneforget',
            component: () => import('@/views/PhoneForget.vue')
        },
        {
            path: '/phonefind',
            name: 'phonefind',
            component: () => import('@/views/PhoneFind.vue')
        },
        {
            path: '/mailforget',
            name: 'mailforget',
            component: () => import('@/views/MailForget.vue')
        },
        {
            path: '/mailfind',
            name: 'mailfind',
            component: () => import('@/views/MailFind.vue')
        },
        {
            path: '/home',
            component: () => import('@/components/Header.vue'),
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