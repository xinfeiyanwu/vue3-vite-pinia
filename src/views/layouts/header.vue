<!--
 * @Author: Lxx
 * @Date: 2022-01-27 16:56:40
 * @LastEditTime: 2022-02-23 17:42:50
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\views\layouts\header.vue
 * 
-->
<script setup lang="ts">
    import {getCurrentInstance, reactive, ref} from 'vue'
    import {useUserStore} from '@/store/user'
    import { ElMessage } from 'element-plus'
    const userStore = useUserStore()
    const circleUrl: string = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
    const {proxy} = getCurrentInstance()
    const dropdownList: any[] = reactive(userStore.GET_ROLEMENUS)
    const exit = () => {
        const data = {
            userId: userStore.userInfo.account
        }
        proxy.$apis.userApi.logout(data)
            .then(({code}) => {
                if(code === 200) {
                    ElMessage({
                        message: '退出成功！',
                        type: 'success',
                    })
                    userStore.CLEAR_USER_INFO()
                }
                else {
                    ElMessage({
                        message: '未知错误！',
                        type: 'error',
                    })
                }
            })
    }
    const changeRoleHandler = (item: any) => {
        userStore.SET_ROLE(item)
    }
</script>
<template>
    <div class="header">
        <slot>
            <div>
                除了右边用户下拉操作部分以外得内容
            </div>
        </slot>
        <div class="user-oper">
            <el-avatar :size="30" :src="circleUrl"></el-avatar>
            <div class="user-info">
                <div class="user-name">
                    关羽
                </div>
                <el-dropdown>
                    <span class="now-role">{{userStore.userInfo.role}}</span>
                    <template #dropdown>
                        <el-dropdown-menu>
                        <el-dropdown-item @click="changeRoleHandler(item)" v-for="(item, key) in dropdownList" :key="key">{{item}}</el-dropdown-item>
                        <el-dropdown-item @click.native="exit">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    $userOperWidth: 120px;
    .header {
        height: 100%;
        display: flex;
        align-items: center;
        background-color: rosybrown;
        color: #fff;
        >div {
            &:first-child {
                width: calc(100% - #{$userOperWidth});
            }
        }
        .user-oper {
            width: $userOperWidth;
            display: flex;
            align-items: center;
            .user-info {
                margin-left: 10px;
                .user-name {
                    margin: 4px 0;
                }
                .el-dropdown {
                    color: #fff;
                    .now-role {
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>