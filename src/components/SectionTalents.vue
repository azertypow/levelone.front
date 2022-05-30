<template>
  <section class="v-section-talents"
       id="v-section-talents"
  >
    <div
        class="v-section-talents__background"
    >
      <img alt="" class="v-section-talents__background__top lo-section-bg--top"           src="../assets/section_specification/background-specification__top.svg">
      <img alt="" class="v-section-talents__background__bottom-left lo-section-bg--left"   src="../assets/section_specification/background-specification__left.svg">
      <img alt="" class="v-section-talents__background__bottom-right lo-section-bg--right"  src="../assets/section_specification/background-specification__right.svg">
    </div>

    <subsection
        title="Talents réunis"
        styleOption="large"
        style="text-align: center"
        v-if="talents !== null"
        :arrowNav="false"
        :titleVariant="true"
    >
      <div
          class="lo-g-gutter--half"
          v-html="talents.content" ></div>
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
  position: relative;

  p {
    font-size: calc( var(--font-size) * 3);
    color: var(--color--main);
    margin-top: calc( var(--line-height) * 4 );
  }

  li {
    display: block;
    padding-top: calc(var(--line-height) / 2);
    padding-bottom: calc(var(--line-height) / 2);
    font-size: calc( var(--font-size) * 1.5 );
    line-height: calc( var(--line-height) * 1.5 );
    &:before {
      content: none;
    }
  }
}

.v-section-talents__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
</style>
