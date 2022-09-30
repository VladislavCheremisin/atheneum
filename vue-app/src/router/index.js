import { createRouter, createWebHistory } from 'vue-router'
import BodyGlobal from './../components/BodyGlobal.vue'
import Login from './../components/Login.vue'


const routes = [
    {
    path: '/',
    name: 'Home',
    component: BodyGlobal,
    },
    {
        path: '/login',
        name: "Login",
        component: Login,
    }
]
const router = createRouter({history: createWebHistory(), routes})
export default router