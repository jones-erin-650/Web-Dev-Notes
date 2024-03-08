import {createRouter, createWebHistory} from 'vue-router'

Import Home from '../views/Home'
import About from '../views/About'

// array of routes, each is an object with a path
const routes = [
    {
        path: '/',
        name: 'Home',
        // component we want to render
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // component we want to render
        component: About
    }
]

const router = createrRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router