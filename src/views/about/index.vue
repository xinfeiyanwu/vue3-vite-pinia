<!--
 * @Author: Lxx
 * @Date: 2022-01-21 16:26:40
 * @LastEditTime: 2022-02-24 14:38:19
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\views\about\index.vue
 * 
-->
<script setup lang="ts">
    import {
    Location,
    Document,
    Moon,
    Bicycle,
    AlarmClock,
    Menu as IconMenu,
    Setting,
    } from '@element-plus/icons-vue'
    import AIcon from '@/components/a-icon/index.vue'
    import {shallowRef} from 'vue'

const dictIcon = shallowRef({
  'Location': Location,
  'Document': Document,
  'Moon': Moon,
  'Bicycle': Bicycle,
  'AlarmClock': AlarmClock,
  'Setting': Setting,
})

</script>
<template>
<component :is="dictIcon.AlarmClock"></component>
<component :is="dictIcon.Document"></component>
<component :is="dictIcon.Location"></component>
<AIcon icon="huowuchuku-xin" />
<AIcon icon="zhongxin" />
</template> 
<style>
</style>