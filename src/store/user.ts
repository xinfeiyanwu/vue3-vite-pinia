/*
 * @Author: Lxx
 * @Date: 2022-02-09 10:19:09
 * @LastEditTime: 2022-02-23 17:42:14
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\store\user.ts
 * 
 */
import { defineStore } from "pinia";
import router from '@/router/index'
import {addRoutes} from '@/utils/addRoutes'

const state = () => ({
    userInfo: {
        userName: '',
        account: '',
        sex: 1,
        role: '',
        roleMenus: []
    },
    token: '',
    menus: []
})

const actions = {
    /**
     * @description: 设置用户数据缓存和动态添加路由
     * @param {any} payload
     * @return {*}
     */
    SET_USER_INFO(payload: any) {
        this.userInfo = payload.userInfo
        this.token = payload.token
        this.menus = payload.menus
        addRoutes(router, payload.menus)
        // console.log('payload', payload);
        // router.addRoute('layout', { 
        //     name: 'about1',
        //     path: 'about1', 
        //     component: () => import('@/views/about1/index.vue'),
        // })
        // router.addRoute('layout', { 
        //     name: 'sysSetting',
        //     path: 'sysSetting', 
        //     component: () => import('@/views/sysSetting/index.vue')
        // })
        // console.log(router.getRoutes());
        
        router.push({name: "sysSetting"})
    },
    CLEAR_USER_INFO(){
        this.$reset()
        router.push({name: 'login'})
    },
    SET_ROLE(payload){
        this.userInfo.role = payload
    }
}

const getters = {
    GET_ROLEMENUS: (state: any) => state.userInfo.roleMenus,
}

export const useUserStore = defineStore({
    id: 'user',
    state,
    actions,
    getters,
    // 开启数据缓存
    persist: {
        enabled: true,
        // 设置缓存的方式
        strategies: [
            {
              key: 'user',
              storage: localStorage,
            }
        ]
    }
})