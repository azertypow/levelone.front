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
        <img alt="" class="v-section-main__txt__background__top lo-section-bg--top"          src="../assets/section_main/home-section_main-top.png">
        <img alt="" class="v-section-main__txt__background__bottom-right lo-section-bg--right" src="../assets/section_main/home-section_main-bottom-right.png">
        <img alt="" class="v-section-main__txt__background__bottom-left lo-section-bg--left"  src="../assets/section_main/home-section_main-bottom-left.png">
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
    }
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
  height: calc( 100vh - 5rem);
}

.v-section-main__gallery.v-section-main__gallery--intro {
  height: calc( 100vh - 8rem)
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
