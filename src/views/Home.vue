<template>
  <div class="v-home">

    <section-main
        v-if="intro"
        id="v-home__main"
    ><div v-html="intro.content"></div></section-main>

    <section-specification
        id="v-home__specification"
    />

    <section-bio
        id="v-home__bio"
    />
    <section-talents
        id="v-home__talents"
    />

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SectionMain from "@/components/SectionMain.vue"
import SectionBio from "@/components/SectionBio.vue"
import SectionSpecification from "@/components/SectionSpecification.vue"
import SectionTalents from "@/components/SectionTalents.vue"
import {apiGet, IApiResonse_home__section} from "@/global/api"
import {useStore} from "vuex"
import {key} from "@/store"

export default defineComponent({
  name: 'Home',
  components: {
    SectionTalents,
    SectionSpecification,
    SectionBio,
    SectionMain
  },

  data() {
    return {
      store: useStore(key),
    }
  },

  computed: {
    intro(): IApiResonse_home__section | null {
      if(this.store.state.homeData === null) return null
      if ('intro' in this.store.state.homeData) return this.store.state.homeData.intro
      return null
    },
  },

  // async beforeMount() {
  //   console.log( await apiGet('home') )
  // }

});
</script>

<style lang="scss" scoped>
.v-home {

}
</style>
