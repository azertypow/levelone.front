<template>
  <section class="v-section-specification"
       id="v-section-specification"
  >
    <subsection
        title="Spécifications"
        v-if="specification !== null"
    >

      <div
          v-for="slide of specification.slides"
          class="v-section-specification__slides"
          :class="{half: Object.keys( slide.image ).length > 0}"
      >

        <img
            class="v-section-specification__slides__img"
            v-for="img of slide.image"
            :src="img.url"
            alt=""
        >

        <div
            class="v-section-specification__slides__content lo-remove-child-margin"
            v-html="slide.content"
        ></div>

      </div>

    </subsection>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subsection from "@/components/Subsection.vue"
import {IApiResonse_home__section} from "@/global/api"
import {useStore} from "vuex"
import {key} from "@/store"
// import {} from 'marked'

export default defineComponent({
  name: 'SectionSpecification',
  components: {
    Subsection
  },

  data() {
    return {
      store: useStore(key),
    }
  },

  computed: {
    specification(): IApiResonse_home__section | null {
      if(this.store.state.homeData === null) return null
      if ('specification' in this.store.state.homeData) return this.store.state.homeData.specification
      return null
    }
  }

});
</script>

<style lang="scss" scoped>
.v-section-specification {

}

.v-section-specification__slides {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  > * {
    box-sizing: border-box;
    width: 100%;
    flex-shrink: 1;
    padding-left: var(--gutter--half);
    padding-right: var(--gutter--half);
  }

  &.half {
    width: 50%;
  }
}
</style>
