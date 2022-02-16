import {createStore, Store} from 'vuex'
import {InjectionKey} from "vue"
import {IValidateData} from "@/components/FormLockedPage.vue"
import {apiGet, IApiResonse_home, IApiResponse_locked} from "@/global/api"
import router from "@/router"

// define your typings for the store state
export interface AppState {
  appUnlocked:       IValidateData | null
  componentUnlocked: IValidateData | null
  homeData:          IApiResonse_home | IApiResponse_locked | null
}

export const key: InjectionKey<Store<AppState>> = Symbol()


export const store = createStore<AppState>({
  state: {
    appUnlocked: null,
    componentUnlocked: null,
    homeData: null,
  },
  mutations: {

    changeCertificationConnection (state, data: IValidateData) {
      state.componentUnlocked = data
    },

    async changeAppConnection (state, data: IValidateData) {
      state.appUnlocked = data

      state.homeData = await apiGet('home', {
        id:       state.appUnlocked?.id || '',
        password: state.appUnlocked?.password || '',
      }) as IApiResponse_locked | IApiResonse_home

      if(state.homeData === null ? 'waiting' : 'pageLocked' in state.homeData ? 'lock' : "unlock") await router.push({name: 'Home'})
    },

  },
  actions: {
  },
  modules: {
  },
  getters: {
    appLockStatus(state): 'unlock' | 'lock' | 'waiting' {
      return state.homeData === null ? 'waiting' : 'pageLocked' in state.homeData ? 'lock' : "unlock"
    }
  }
})
