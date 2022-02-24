import { defineStore } from "pinia";

const state = () => ({
  name: 'lixinxin',
  isAdmin: true,
})

export const useHomeStore = defineStore({
    id: 'home',
    state,
})