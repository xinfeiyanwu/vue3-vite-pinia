/*
 * @Author: Lxx
 * @Date: 2022-02-09 15:22:36
 * @LastEditTime: 2022-02-23 17:20:10
 * @LastEditors: Lxx
 * @Description: logout
 * @FilePath: \vite\src\api\modules\userApi.ts
 * 
 */
import request from '@/utils/request'

export function login (data: any) {
    return request.post('/login', data)
}

export function logout (data: any) {
    return request.post('/logout', data)
}

export function resetPsw (data: any) {
    return request.post('/resetPsw', data)
}

