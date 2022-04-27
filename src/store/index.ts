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
  menuOpen:          boolean
  showPageTransition: boolean
}

export const key: InjectionKey<Store<AppState>> = Symbol()


export const store = createStore<AppState>({
  state: {
    appUnlocked: null,
    componentUnlocked: null,
    homeData: null,
    menuOpen: false,
    showPageTransition: false,
  },
  mutations: {

    changeCertificationConnection (state, data: IValidateData) {
      state.componentUnlocked = data
    },

    runPageTransition(state) {
      state.showPageTransition = true

      window.setTimeout(() => {
        state.showPageTransition = false
      }, 3000)
    },

    async changeAppConnection (state, data: IValidateData) {
      state.appUnlocked = data

      state.homeData = await apiGet('home', {
        id:       state.appUnlocked?.id || '',
        password: state.appUnlocked?.password || '',
      }) as IApiResponse_locked | IApiResonse_home

      if(state.homeData === null ? 'waiting' : 'pageLocked' in state.homeData ? 'lock' : "unlock") await router.push({name: 'Home'})
    },

    toggleMenu(state) {
      state.menuOpen = !state.menuOpen
    },

    closeMenu(state) {
      state.menuOpen = false
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
