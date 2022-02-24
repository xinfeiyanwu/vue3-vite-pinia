/*
 * @Author: Lxx
 * @Date: 2022-02-09 11:48:28
 * @LastEditTime: 2022-02-22 16:24:33
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\router\permission.ts
 * 
 */
import router from './index'
import {useUserStore} from '@/store/user'

router.beforeEach((to, from, next) => {
    // console.log(useUserStore().userInfo);
    const userStore = useUserStore()
    if(to.name === 'login') {
        next()
    }
    else {
        console.log(userStore);
        if(!userStore.token) {
            
            next({
                name: 'login'
            })
        }
        else {
            next()
        }
    }
})

router.afterEach((to, from) => {
    // console.log(to, from);
})