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
          styleOption="large"
          styleType="centred"
          title="Level One"
      >
        <p>est une entrée de jeu, pleine de surprises. La partie est programmée pour durer, pour transmettre… Level One est une promesse d’initiation, de passage vers d’autres niveaux… Elle est une signature qui engage, qui s’attache. Une montre à vivre, qu’on n’enlève jamais.</p>
        <p>est une entrée de jeu, pleine de surprises. La partie est programmée pour durer, pour transmettre… Level One est une promesse d’initiation, de passage vers d’autres niveaux… Elle est une signature qui engage, qui s’attache. Une montre à vivre, qu’on n’enlève jamais.</p>
      </subsection>
    </div>

    <div
        class="v-section-main__gallery"
    >
      <image-gallery/>
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
