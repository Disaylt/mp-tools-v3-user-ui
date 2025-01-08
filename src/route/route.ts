import { createWebHistory, createRouter } from 'vue-router'
import Layout from '../components/layout/Layout.vue'
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Auth from '../views/Auth.vue';

const routes = [
    {
        path: '/panel', 
        component: Layout,
        children: [
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
    if(to.meta.requiresAuth){
        next()
    }
    else{
        next();
    }

})

export default router;