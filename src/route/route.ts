import { createWebHistory, createRouter } from 'vue-router'
import Layout from '../components/layout/Layout.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const routes = [
    { path: '/panel', component: Layout},
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    { path: '/:pathMatch(.*)*', redirect: '/panel' },
]

export default createRouter({
    history: createWebHistory(),
    routes
})