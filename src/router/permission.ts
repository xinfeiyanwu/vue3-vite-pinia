/*
 * @Author: Lxx
 * @Date: 2022-02-09 11:48:28
 * @LastEditTime: 2022-02-25 17:42:10
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\router\permission.ts
 * 
 */
import router from './index'
import {useUserStore} from '@/store/user'
import {useSysStore} from '@/store/sys'
import { addRoutes } from '../utils/addRoutes'


router.beforeEach((to, from, next) => {
    // console.log(useUserStore().userInfo);
    const userStore = useUserStore()
    const sysStore = useSysStore()
    console.log(from, to, sysStore.isFirst);
    if(to.name === 'login') {
        next()
    }
    else {
        // console.log(userStore);
        if(!userStore.token) {
            next({
                name: 'login'
            })
        }
        else {
            if(sysStore.isFirst) {
                // 这里不能用name去跳转，刷新页面后to的name是任意值
                const path = to.path
                
                sysStore.SET_IS_FIRST(false)
                addRoutes(router, userStore.menus)
                console.log(router.getRoutes());
                next({
                    path
                })
            }
            else {
                next()
            }
        }
    }
})

router.afterEach((to, from) => {
    // console.log(to, from);
})