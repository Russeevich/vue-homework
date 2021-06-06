import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter)

import about from './pages/about.vue'
import login from './pages/login.vue'
import topmenu from './components/topmenu'
import { store } from './store'

const routes = [{
        name: 'main',
        path: '/',
        components: {
            default: about,
            header: topmenu
        },
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'login',
        path: '/login',
        component: login
    }
]

const router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router