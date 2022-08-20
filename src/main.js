import { createApp } from 'vue'
import './index.css'

import App from './App.vue'
import router from './router/router'
import { store } from './store/store'
import { MotionPlugin } from '@vueuse/motion'

createApp(App)
    .use(router)
    .use(store)
    .use(MotionPlugin)
    .mount('#app')
