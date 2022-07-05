<template>
  <section
      class="v-section-bio"
      ref="componentElement"
  >
    <subsection
        :title="dataSlide.title"
    >
      <div
          v-for="slide of dataSlide.slides"
          class="v-section-bio__slides"
          :class="{half: Object.keys( slide.image ).length > 0}"
      >
        <h2 class="v-section-bio__slides__subtitle" >subtitle</h2>

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
import {defineComponent, PropType, VueElement} from 'vue';
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
  },

  mounted() {
    this.$nextTick (() => {

      if(! (this.$refs.componentElement instanceof HTMLElement) ) return
      const slides = this.$refs.componentElement.querySelectorAll('.v-section-bio__slides')

      for(const slide of slides) {
        const slideTitle          = slide.querySelector('.v-section-bio__slides__content')?.querySelector('h1')
        const slideTitleContainer = slide.querySelector('.v-section-bio__slides__subtitle') as HTMLElement

        if(slideTitle instanceof HTMLElement) {
          slideTitleContainer.innerText = slideTitle.innerText
          slideTitle.remove()
        } else {
          slideTitleContainer.remove()
        }

      }
    })

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
.v-section-bio__slides__subtitle {
  width: 100% !important;
  text-align: center;
  margin: 0;
  color: var(--color--main);
  font-family: MB_Picture_House_One_Light, sans-serif;
  font-size:    calc( var(--font-size)    * 3 );
  line-height:  calc( var(--line-height)  * 3 );
}
</style>
