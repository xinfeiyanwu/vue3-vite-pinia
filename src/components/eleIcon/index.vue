<!--
 * @Author: Lxx
 * @Date: 2022-02-24 10:09:00
 * @LastEditTime: 2022-02-24 10:41:01
 * @LastEditors: Lxx
 * @Description:  只需要导入该图标，在使用图标是传入相应的参数就可以使用了
 * @FilePath: \vite\src\components\eleIcon\index.vue
 * 
-->
<template>
    <el-icon :size="size" :color="color">
      <component :is="IconsMap.get(icon)"></component>
    </el-icon>
</template>
<script setup lang="ts">
    // 引入全部图标
    import * as Icons from '@element-plus/icons-vue'
    defineProps({
        size: {
            type: Number,
            default: 16
        },
        color: {
            type: String,
            default: '#409EFC'
        },
        icon: {
            type: String,
            default: 'Apple'
        }
    })
    let IconsMap = new Map()
    // console.log(typeof Icons);
    for (const key in Icons) {
        IconsMap.set(key, Icons[key])
    }
</script>
<style lang="scss" scoped>
    
</style>