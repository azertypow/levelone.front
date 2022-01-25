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
        <p>
          Un maître horloger, une signature, un état d'esprit. Un homme au carrefour unique de l'Histoire des modèles les plus mythiques du monde et de la connaissance des développements les plus aboutis. Un créateur de bon sens habité par le respect des fondamentaux. Un visionnaire capable d'humilité, d'innovation, de développements, de transmission des savoirs. Un gardien de l’authenticité. Une figure familière des collectionneurs.
        </p>

        <p>
        Des garde-temps conçus pour ne jamais s'arrêter, pour être facilement compris dans 50 ou 100 ans. Des montres dépouillées, d'une simplicité pure, utiles, subtiles, authentiques. Des œuvres jusqu'au-boutistes qui transcendent leurs fonctionnalités par l'évidence de leur esthétique intemporelle. Des milliers de travaux d'horloger et d'expert qui soudain se matérialisent pour s'ériger en gardiens temporels, en repères universels. De l'horlogerie originelle personnifiée, durable, éthique.
        </p>
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
