import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {key, store} from "@/store"

import "./styles/_main.scss"
import {useStore} from "vuex"

router.beforeEach((to, from, next) => {
  if(store.getters.appLockStatus === 'unlock') next()
  else {
    if(to.name !== 'Log') router.push({name: 'Log'})
    else next()
  }

})

createApp(App).use(router).use(store, key).mount('#app')

store.commit("changeAppConnection")
