import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Details from '../pages/Details.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/details',
        component: Details
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
