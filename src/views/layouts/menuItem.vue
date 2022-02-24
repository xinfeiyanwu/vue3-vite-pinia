<!--
 * @Author: Lxx
 * @Date: 2022-01-27 14:29:50
 * @LastEditTime: 2022-02-24 10:48:38
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\views\layouts\menuItem.vue
 * 
-->
<script setup lang="ts">
    import eleIcon from '@/components/eleIcon/index.vue'
    defineProps(['Routes'])
</script>
<template>
    <template v-for="(item, index) in Routes" :key="index">
        <!-- 有childrenMenuList就是el-sub-menu，没有就是el-sub-item -->
        <el-sub-menu :index="item.menuId" v-if="item.childrenMenuList">
            <template #title>
                <eleIcon color="green" :size="20" :icon="item.menuIcon" />
                <span>{{item.menuName}}</span>
            </template>
            <!-- 从这里开始，模板结构都是一样的，所以使用类似递归调用的方法调用本身的组件 -->
            <MenuItem :Routes="item.childrenMenuList" />
            <!-- <template v-for="(_item, _index) in item.childrenMenuList" :key="_index">
                <el-sub-menu :index="_item.menuId" v-if="_item.childrenMenuList">
                    <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    {{_item.menuName}}
                </template>
                    <template v-for="(__item, __index) in _item.childrenMenuList" :key="__index">
                        <router-link :to="__item.path">
                            <el-menu-item :index="__item.menuId" :route="__item.path"> 
                                <template #title>
                                    <el-icon>
                                        <location />
                                    </el-icon>
                                    {{__item.menuName}}
                                </template>
                            </el-menu-item>
                        </router-link>
                    </template>
                </el-sub-menu>
                <el-menu-item :index="_item.menuId" v-else> 
                    <el-icon><icon-menu /></el-icon>
                    <template #title>{{_item.menuName}}</template>
                </el-menu-item>
            </template> -->
        </el-sub-menu>
        <el-menu-item :index="item.path" v-else> 
            <eleIcon color="green" :size="20" :icon="item.menuIcon" />
            <template #title>{{item.menuName}}</template>
        </el-menu-item>
    </template>
    
    <!-- <template v-for="(item, index) in Routes" :key="index">
        <el-sub-menu :index="item.menuId" v-if="item.childrenMenuList">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>{{item.menuName}}</span>
            </template>
            <template v-for="(_item, _index) in item.childrenMenuList" :key="_index">
                <el-sub-menu :index="_item.menuId">
                    <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    {{_item.menuName}}
                </template>
                    <template v-for="(__item, __index) in _item.childrenMenuList" :key="__index">
                        <router-link :to="__item.path">
                            <el-menu-item :index="__item.menuId" :route="__item.path"> 
                                <template #title>
                                    <el-icon>
                                        <location />
                                    </el-icon>
                                    {{__item.menuName}}
                                </template>
                            </el-menu-item>
                        </router-link>
                    </template>
                </el-sub-menu>
            </template>
        </el-sub-menu>

        
        <el-menu-item :index="__item.menuId" v-else> 
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                {{__item.menuName}}
            </template>
        </el-menu-item>
    </template> -->
</template>
<style lang="scss" scoped>
    .el-sub-menu {
        a {
            text-decoration: none;
        }
    }
</style>