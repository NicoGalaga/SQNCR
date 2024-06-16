import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createWebHistory, createRouter } from "vue-router";

// Import Quasar css
import 'quasar/src/css/index.sass'
import MainLayout from "@/layouts/MainLayout.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/SQNCR/', component: MainLayout }
    ]
});
const app = createApp(App)
app.use(router)
app.use(Quasar, quasarUserOptions)
app.mount('#app')

// createApp(App).use(Quasar, quasarUserOptions).mount('#app')
