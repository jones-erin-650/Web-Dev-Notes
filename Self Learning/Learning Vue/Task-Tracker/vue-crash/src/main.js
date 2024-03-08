// this file imports the create app from vue and mounts it onto the app div in index. html in the public folder
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
