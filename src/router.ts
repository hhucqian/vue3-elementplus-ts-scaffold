import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"

import Home from "@/views/Home.vue"

const routes: RouteRecordRaw[] = [
    {name: "index", path: "/", component: Home}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

