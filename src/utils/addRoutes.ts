/*
 * @Author: Lxx
 * @Date: 2022-02-22 10:41:59
 * @LastEditTime: 2022-02-22 15:39:30
 * @LastEditors: Lxx
 * @Description: 由路由菜单获取routes
 * @FilePath: \vite\src\utils\addRoutes.ts
 * 
 */
interface menu {
    childrenMenuList: menu[]
    mate:  any[]
    menuIcon: string
    menuId: string
    menuName: string
    parentId: string | number
    path: string
    name: string
}

import {Router} from 'vue-router'

export function addRoutes(router: Router, menus: menu[]) {
    // console.log(router.getRoutes(), menus);
    menus.forEach((menu: menu) => {
        if(menu.childrenMenuList) {
            addRoutes(router, menu.childrenMenuList)
        }
        else {
            // console.log('menu', menu);
            
            router.addRoute('layout', {
                name: menu.name,
                path: menu.path, 
                component: () => import('@/views/about/index.vue'),
                meta: {
                    name: menu.mate
                }
            })
        }
    });
    // console.log(router.getRoutes());
}

