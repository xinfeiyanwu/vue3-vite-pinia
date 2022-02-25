/*
 * @Author: Lxx
 * @Date: 2022-02-25 17:04:48
 * @LastEditTime: 2022-02-25 17:39:07
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\store\sys.ts
 * 
 */
import {defineStore} from 'pinia'

const state = () => ({
    isFirst: true
})

const actions = {
    SET_IS_FIRST (payload: any) {
        this.isFirst = payload
    }
}

export const useSysStore = defineStore({
    id: 'sys',
    state,
    actions
}) 
