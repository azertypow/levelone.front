import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {key, store} from "@/store"

import "./styles/_main.scss"

createApp(App).use(router).use(store, key).mount('#app')
