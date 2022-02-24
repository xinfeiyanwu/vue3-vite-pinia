<!--
 * @Author: Lxx
 * @Date: 2022-01-21 17:24:35
 * @LastEditTime: 2022-02-22 12:04:43
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\views\layouts\index.vue
 * 
-->
<script setup lang="ts">
    import Aside from './aside.vue'
    import Footer from './footer.vue'
    import Header from './header.vue'
    import Breadcrumb from './breadcrumb.vue'
</script>
<template>
    <el-container>
        <el-aside>
            <Aside />
        </el-aside>
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <Breadcrumb />
                <router-view></router-view>
            </el-main>
            <el-footer>
                <Footer/>
            </el-footer>
        </el-container>
    </el-container>
</template>
<style lang="scss" scoped>
:deep(.el-aside) {
    width: auto;
}
</style>