// this determines what page goes where
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'


const router = createRouter({
  // how do we determine what to display
  history: createWebHistory(import.meta.env.BASE_URL),
  // the routes which is an array of objects, each has a path and optionally a name, and the component it shows
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // preload the ones that people will most likely go to earlier than others
      // also consider how big a page is to preload it
      component: () => import('../pages/AboutView.vue')
    }
  ]
})

// this is the export to make it available
export default router
