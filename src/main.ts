/*
 * @Author: Lxx
 * @Date: 2022-01-21 15:11:21
 * @LastEditTime: 2022-02-22 15:51:41
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\main.ts
 * 
 */
import { createApp } from 'vue'
import '@/mock/index' //mockjs模拟数据
import Pinia from '@/store/index' // 初始化pinia商店
import router from '@/router/index'
import apis from '@/api/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/index.css' // 所有初始样式
import '@/router/permission' //路由权限
import App from './App.vue'
// console.log('env', import.meta.env);

createApp(App)
    .use(apis) 
    .use(router)
    .use(Pinia)
    .use(ElementPlus)
    .mount('#app')

