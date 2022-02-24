<script setup lang="ts">
import {useHomeStore} from '@/store/home.ts'
import {useUserStore} from '@/store/user.ts'
const homeStore = useHomeStore()
const useUser = useUserStore()
const tap = function(){
    useUser.$reset()
}
</script>
<template>
    <div>我是首页111222</div>
    <button @click="tap">撒</button>
</template>
<style>
    
</style>