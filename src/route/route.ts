import { createWebHistory, createRouter } from 'vue-router'
import Layout from '../components/layout/Layout.vue'
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Auth from '../views/Auth.vue';
import { useUserStore } from '../store/user.store';
import Profile from '../views/panel/Profile.vue';

const routes = [
    {
        path: '/panel', 
        component: Layout,
        children: [
            { path: 'profile', component: Profile },
        ],
        meta: {
            requiresAuth: true
        }
    },
    {path: '/auth', component: Auth, children: 
        [
            { path: 'login', component: Login },
            { path: 'register', component: Register },
            { path: '', redirect: '/auth/login' },
        ]
    },
    { path: '/:pathMatch(.*)*', redirect: '/panel' },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _from, next) => {
    if(import.meta.env["VITE_AUTH_TYPE"] == "NOT_AUTH"){
        return next();
    }

    if(to.meta.requiresAuth){
        if(useUserStore().user === null){
            return next("/auth/login")
        }
    }

    next();
})

export default router;