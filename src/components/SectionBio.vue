<template>
  <section class="v-section-bio">
    <subsection
        :title="dataSlide.title"
    >
      <div
          v-for="slide of dataSlide.slides"
          class="v-section-bio__slides"
          :class="{half: Object.keys( slide.image ).length > 0}"
      >

        <img
            class="v-section-bio__slides__img"
            v-for="img of slide.image"
            :src="img.url"
            alt=""
        >

        <div
            class="v-section-bio__slides__content lo-remove-child-margin"
            v-html="slide.content"
        ></div>

      </div>
    </subsection>

  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Subsection from "@/components/Subsection.vue"
import {useStore} from "vuex"
import {key} from "@/store"
import {IApiResonse_home__section} from "@/global/api"

export default defineComponent({
  name: 'SectionBio',
  components: {
    Subsection
  },

  props: {
    dataSlide: {
      require: true,
      type: Object as PropType<IApiResonse_home__section>,
    }
  },

  computed: {
  }

});
</script>

<style lang="scss" scoped>
.v-section-bio {

}

.v-section-bio__slides {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;

  > * {
    box-sizing: border-box;
    width: 100%;
    flex-shrink: 1;
    padding-left: var(--gutter--half);
    padding-right: var(--gutter--half);
  }

  &.half {

    > *:first-child {
      width: 50%;
    }
    > * {
      width: 100%;
    }

    @media all and (min-width: 950px) {
      > *:first-child,
      > * {
        width: 50%;
      }
    }
  }
}
</style>
