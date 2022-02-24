import { defineStore } from "pinia";

const state = () => ({
    title: 'about'
})

export const useAboutStore = defineStore({
    id: 'about',
    state,
})