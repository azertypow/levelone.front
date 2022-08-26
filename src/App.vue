<template>

  <transition name="transition">
    <page-transition
        v-if="store.state.showPageTransition"
    ></page-transition>
  </transition>

  <vue-easy-lightbox
      :visible="easyLightBoxImage !== null"
      :imgs="easyLightBoxImage"
      @hide="store.commit('removeEasyLightBoxImage')"
      @contextmenu="preventContextMenu($event)"
  ></vue-easy-lightbox>

  <div
      v-if="store.getters.appLockStatus === 'waiting'"
      class="v-app v-app__loader"
  >

  </div>
  <div
      v-else
      class="v-app"
  >

    <div
        v-if="!isLogView"
        class="v-app__nav"
    >
      <navigation-app/>
    </div>

    <router-view/>

    <app-footer
        v-if="!isLogView"
    ></app-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationApp from "@/components/NavigationApp.vue"
import AppFooter from "@/components/AppFooter.vue";
import {useStore} from "vuex"
import {key} from "@/store"
import PageTransition from "@/components/PageTransition.vue"
import VueEasyLightbox from 'vue-easy-lightbox'

export default defineComponent({
  name: 'App',

  data() {
    return {
      store: useStore(key),
    }
  },

  components: {
    PageTransition,
    AppFooter,
    NavigationApp,
    VueEasyLightbox,
  },

  methods: {
    preventContextMenu(e: MouseEvent) {
      e.preventDefault()
    }
  },

  computed: {
    isLogView(): boolean {
      return this.$route.name === 'Log'
    },

    easyLightBoxImage(): string | null {
      return this.store.state.easyLightBoxImage
    }
  }

});
</script>

<style lang="scss" scoped>
.v-app {
  padding-top: var(--navigation-height);
}

.v-app__nav {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000000;

  .menu-open & {
    height: 100%;
  }
}
</style>
