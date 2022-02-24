<!--
 * @Author: Lxx
 * @Date: 2022-02-24 14:27:26
 * @LastEditTime: 2022-02-24 14:39:41
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\components\a-icon\index.vue
 * 
-->

<template>
<span class="a-icon">
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#icon-'+icon"></use>
    </svg>
</span>
</template>
<script lang="ts" setup>
defineProps({
    icon: {
        type: String
    }
})
</script>
<style lang="scss" scoped>
    .a-icon {
        font-size: 16px;
    }
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
