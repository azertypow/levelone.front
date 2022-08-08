<template>
  <section class="v-section-main">
    <div
        class="v-section-main__gallery v-section-main__gallery--intro"
    >
      <hour-animation/>
    </div>

    <div
        class="v-section-main__txt"
    >
      <div
          class="v-section-main__txt__background"
      >
        <img alt="" ref="top"   :style="style.top" class="v-section-main__txt__background__top lo-section-bg--top"          src="../assets/section_main/home-section_main-top.png">
        <img alt="" ref="right" :style="style.right" class="v-section-main__txt__background__bottom-right lo-section-bg--right" src="../assets/section_main/home-section_main-bottom-right.png">
        <img alt="" ref="left"  :style="style.left" class="v-section-main__txt__background__bottom-left lo-section-bg--left"  src="../assets/section_main/home-section_main-bottom-left.png">
      </div>
      <subsection
          style="text-align: center"
          styleOption="regular"
          title="Level One"
          :arrowNav="false"
      >
        <slot></slot>
      </subsection>
    </div>

    <div
        class="v-section-main__gallery"
    >
      <image-gallery v-if="imageGallery" :arrayOfImgData="imageGallery"/>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageGallery from "@/components/ImageGallery.vue"
import HourAnimation from "@/components/HourAnimation.vue"
import Subsection from "@/components/Subsection.vue"
import {useStore} from "vuex"
import {key} from "@/store"
import {IApiImageData, IApiResonse_home} from "@/global/api"

export default defineComponent({
  name: 'SectionMain',

  components: {
    Subsection,
    HourAnimation,
    ImageGallery
  },

  data() {
    return {
      store: useStore(key),
      style: {
        top: {},
        right: {},
        left: {},
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        this.style.top    = this.computedStyle(this.$refs.top)
        this.style.right  = this.computedStyle(this.$refs.right)
        this.style.left   = this.computedStyle(this.$refs.left)
      })
    })
  },

  methods: {
    computedStyle(el: unknown): {
      opacity: number
    } {
      if(! (el instanceof HTMLElement) ) return {opacity: 1}
      return {
        opacity: 1 - el.getBoundingClientRect().top / (window.innerHeight / 2)
      }
    },
  },

  computed: {
    imageGallery(): null | IApiImageData[] {
      if (this.store.state.homeData === null || !('slider' in this.store.state.homeData)) null
      return (this.store.state.homeData as IApiResonse_home).slider
    }
  }

});
</script>

<style lang="scss" scoped>
.v-section-main {
  width: 100%;
  position: relative;
}

.v-section-main__gallery {
  width: 100%;
}

.v-section-main__gallery.v-section-main__gallery--intro {
  height: 100vw;

  @media (min-aspect-ratio: 4/5) {
    height: calc( 100vw - 4rem);
  }
  @media (min-aspect-ratio: 5/5) {
    height: calc( 100vh - 5rem);
  }

  @media (min-aspect-ratio: 4/5) and (min-width: 950px) {
    height: calc( 100vw - 8rem);
  }
  @media (min-aspect-ratio: 5/5) and (min-width: 950px) {
    height: calc( 100vh - 8rem);
  }
}

.v-section-main__txt {
  position: relative;
}

.v-section-main__txt__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none !important;
  user-select: none !important;
}

</style>
