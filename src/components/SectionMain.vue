<template>
  <section class="v-section-main"
       id="v-section-main"
  >
    <div
        class="v-section-main__gallery"
    >
      <hour-animation/>
    </div>

    <div
        class="v-section-main__txt"
    >
      <subsection
          styleOption="regular"
          styleType="centred"
          title="Level One"
      >
        <slot></slot>
      </subsection>
    </div>

    <div
        class="v-section-main__gallery"
    >
      <image-gallery :imgs-urls="['']"/>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageGallery from "@/components/ImageGallery.vue"
import HourAnimation from "@/components/HourAnimation.vue"
import Subsection from "@/components/Subsection.vue"

export default defineComponent({
  name: 'SectionMain',
  components: {
    Subsection,
    HourAnimation,
    ImageGallery
  },
});
</script>

<style lang="scss" scoped>
.v-section-main {
  width: 100%;
  position: relative;
}

.v-section-main__gallery {
  width: 100%;
  height: calc( 100vh - 8rem);
}
</style>
