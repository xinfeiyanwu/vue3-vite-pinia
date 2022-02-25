/*
 * @Author: Lxx
 * @Date: 2022-01-21 15:54:54
 * @LastEditTime: 2022-02-25 16:55:45
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\router\index.ts
 * 
 */
import {createRouter, createWebHashHistory} from 'vue-router'
import Layouts from '@/views/layouts/index.vue'

const routes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/user/login.vue')
    },
    { 
        name: 'layout',
        path: '/', 
        component: Layouts,
        redirect: '/home',
        children: [
            { 
                name: 'home',
                path: 'home', 
                component: () => import('@/views/home/index.vue')
             },
        ]
     },
    //  { 
    //     name: 'about',
    //     path: '/about', 
    //     component: Layouts,
    //     redirect: 'index',
    //     children: [{
    //         path: 'index',
    //         component: () => import('@/views/about/index.vue')
    //     }]
    //  },
    // vue3支持的404写法
     { 
        path: '/:pathMatch(.*)*', 
        // component: () => import('@/views/_404/index.vue')
        component: Layouts,
        children: [
            { 
                name: '/:pathMatch(.*)*',
                path: '/:pathMatch(.*)*', 
                component: () => import('@/views/_404/index.vue')
             },
        ]
     },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior: (to, from, savedPosition) => {
    }
})

export default router