/*
 * @Author: Lxx
 * @Date: 2022-02-09 15:01:42
 * @LastEditTime: 2022-02-22 09:53:11
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\api\index.ts
 * 
 */
const modules = import.meta.glob('./modules/*.ts')
// console.log('modules', modules);

//目前先挂载在vue的全局变量上，但不是很符合vue3的api理念
export default {
    install: async (app: any, option?: any) => {
        app.config.globalProperties.$apis = {}
        for (const path in modules) {
            const fileName = path.split('./modules/')[1].split('.ts')[0]
            app.config.globalProperties.$apis[fileName] = await modules[path]()
        }
        // console.log('apis', app.config.globalProperties.$apis);
    }
}