<!--
 * @Author: Lxx
 * @Date: 2022-01-21 17:39:25
 * @LastEditTime: 2022-02-24 09:07:30
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\views\layouts\aside.vue
 * 
-->

<template>
    <div class="Aside" :style="{width: isCollapse?'auto':'200px'}">
        <el-menu default-active="2" :router="true" class="el-menu-vertical-demo" :collapse="isCollapse"
            :collapse-transition="false" @open="handleOpen" @close="handleClose">
            <div @click="isCollapse=!isCollapse" class="menu-icon">
                我是图片
            </div>
            <MenuItem :Routes="menuRoutes" />
        </el-menu>
    </div>
</template>
<script setup lang="ts">
    import {
        ref,
        reactive,
        isReactive,
        onMounted
    } from 'vue'
    import {useRouter} from 'vue-router'
    import {addRoutes} from '@/utils/addRoutes'
    import MenuItem from './menuItem.vue'
    import {useUserStore} from '@/store/user.ts'

    const userStore = useUserStore();
    const router = useRouter()
    // pinia的state本身就是reactive类型
    console.log('userStore', isReactive(userStore));
    const menuRoutes = userStore.menus
    const isCollapse = ref(false)
    const handleOpen = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
    onMounted(()=>{
        addRoutes(router, menuRoutes)
        //刷新页面或者第一次登录默认跳转到home页面
        router.push({name: 'home'})
    })
</script>
<style lang="scss" scoped>
    .Aside {
        height: 100%;

        .el-menu-vertical-demo {
            height: 100vh;

            .menu-icon {
                height: 60px;
                background-color: rgb(111, 250, 220);
                cursor: pointer;
            }
        }
    }
</style>