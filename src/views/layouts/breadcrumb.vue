<!--
 * @Author: Lxx
 * @Date: 2022-02-14 11:51:14
 * @LastEditTime: 2022-02-22 15:49:55
 * @LastEditors: Lxx
 * @Description: 面包屑
 * @FilePath: \vite\src\views\layouts\breadcrumb.vue
 * 
-->
<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }" @click="routeBreadcrumb">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(name, index) in routeBreadcrumb">{{name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script setup lang="ts">
    import {
        ArrowRight
    } from '@element-plus/icons-vue'
    import {
        useRoute
    } from 'vue-router'
    import {
        watch,
        isReactive,
        ref
    } from 'vue'
    const route = useRoute()
    let routeBreadcrumb: string[] = ref([])
    
    watch(route, (newVal) => {
        routeBreadcrumb.value = newVal?.meta?.name
        // console.log('routeBreadcrumb',routeBreadcrumb);
    }, {
        deep: true,
        immediate: true
    })
</script>
<style lang="scss" scoped>
.el-breadcrumb__item {
    display: flex;
    align-items: center;
}
</style>