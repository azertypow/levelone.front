<template>
  <section class="v-section-talents"
       id="v-section-talents"
  >
    <subsection
        title="Talents réunis, Level One"
        styleOption="large"
        style="text-align: center"
        v-if="talents !== null"
        :arrowNav="false"
        :titleVariant="true"
    >
      <div v-html="talents.content" ></div>
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
  name: 'SectionTalents',
  components: {
    Subsection
  },

  data() {
    return {
      store: useStore(key),
    }
  },

  computed: {
    talents(): IApiResonse_home__section | null {
      if(this.store.state.homeData === null) return null
      if ('talents' in this.store.state.homeData) return this.store.state.homeData.talents
      return null
    }
  }


});
</script>

<style lang="scss" >
.v-section-talents {
  font-family: MB_Picture_House_One_Light, sans-serif;

  p {
    color: var(--color--main);
    margin-top: calc( var(--line-height) * 4 );
  }

  li {
    display: block;
    padding-top: calc(var(--line-height) / 2);
    padding-bottom: calc(var(--line-height) / 2);
  }
}
</style>
