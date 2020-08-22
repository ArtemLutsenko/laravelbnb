import second from './components/second.vue'
import Bookables from './bookables/Bookables.vue'
import VueRouter from 'vue-router'

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    },
    {
        path:"/second",
        component: second,
        name: "second"
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
