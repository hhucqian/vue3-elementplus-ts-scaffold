import Home from "@/views/Home.vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [{ name: "index", path: "/", component: Home }]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
