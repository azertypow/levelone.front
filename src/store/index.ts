import {createStore, Store} from 'vuex'
import {InjectionKey} from "vue"
import {IValidateData} from "@/components/FormLockedPage.vue"

// define your typings for the store state
export interface AppState {
  componentUnlocked: IValidateData | null
}

export const key: InjectionKey<Store<AppState>> = Symbol()


export const store = createStore<AppState>({
  state: {
    componentUnlocked: null
  },
  mutations: {
    changeCertificationConnection (state, data: IValidateData) {
      state.componentUnlocked = data
    },
  },
  actions: {
  },
  modules: {
  }
})
