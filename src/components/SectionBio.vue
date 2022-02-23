<template>
  <section class="v-section-bio"
       id="v-section-bio"
  >
    <subsection
        title="Biographie"
        v-if="biographie !== null"
    >
      <div
          v-for="slide of biographie.slides"
      >

        <img
            class="v-section-specification__slides__img"
            v-for="img of slide.image"
            :src="img.url"
            alt=""
        >

        <div
            class="v-section-specification__slides__content"
            v-html="slide.content"
        ></div>

      </div>
    </subsection>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subsection from "@/components/Subsection.vue"
import {useStore} from "vuex"
import {key} from "@/store"
import {IApiResonse_home__section} from "@/global/api"

export default defineComponent({
  name: 'SectionBio',
  components: {
    Subsection
  },

  data() {
    return {
      store: useStore(key),
    }
  },

  computed: {
    biographie(): IApiResonse_home__section | null {
      if(this.store.state.homeData === null) return null
      if ('biographie' in this.store.state.homeData) return this.store.state.homeData.biographie
      return null
    }
  }

});
</script>

<style lang="scss" scoped>
.v-section-bio {

}
</style>
