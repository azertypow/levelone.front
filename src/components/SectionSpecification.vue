<template>
  <section class="v-section-specification"
       id="v-section-specification"
  >

    <subsection
        title="Spécifications"
        style-type="centred"
    >
      <h2>Fonctions</h2>
      <ul>
        <li>Simplicité extrême, fonctionnalité essentielle</li>
        <li>Trois aiguilles, heures, minutes et seconde centrale</li>
        <li>Première mondiale en horlogerie: indication des quarts</li>
      </ul>

      <h2>Mises en couleurs</h2>
      <ul>
        <li>Brillance et effet porcelaine sur base laiton</li>
        <li>Effet de profondeur: application de plusieurs couches de vernis</li>
      </ul>

      <h2>Cadran</h2>
      <ul>
        <li>Inédit, marqueurs de quarts sur la minuterie des heures Calligraphie épurée, indications des heures et du nom par estampillage</li>
      </ul>
    </subsection>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subsection from "@/components/Subsection.vue"

export default defineComponent({
  name: 'SectionSpecification',
  components: {
    Subsection
  },
});
</script>

<style lang="scss" scoped>
.v-section-specification {

}
</style>
