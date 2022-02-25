<!--
 * @Author: Lxx
 * @Date: 2022-02-25 11:46:49
 * @LastEditTime: 2022-02-25 14:25:24
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\views\echarts\index.vue
 * 
-->
<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="graph" name="graph">
            <graph />
        </el-tab-pane>
        <el-tab-pane label="tree" name="tree">
            <tree />
        </el-tab-pane>
    </el-tabs>
</template>
<script setup lang="ts">
    import graph from './components/graph/index.vue'
    import tree from './components/tree/index.vue'
    import {
        ref
    } from 'vue'

    const activeName = ref('graph')

    const handleClick = (tab: string, event: Event) => {
        console.log(tab, event)
    }
</script>
<style lang="scss" scoped>
    .demo-tabs>.el-tabs__content {
        padding: 32px;
        background-color: #f4f5f7;
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
    }
</style>