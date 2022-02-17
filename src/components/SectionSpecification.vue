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
import {IApiResonse_home__section} from "@/global/api"
import {useStore} from "vuex"
import {key} from "@/store"
// import {} from 'marked'

export default defineComponent({
  name: 'SectionSpecification',
  components: {
    Subsection
  },

  data() {
    return {
      store: useStore(key),
    }
  },

  computed: {
    specification(): IApiResonse_home__section | null {
      if(this.store.state.homeData === null) return null
      if ('specification' in this.store.state.homeData) return this.store.state.homeData.specification
      return null
    }
  }

});
</script>

<style lang="scss" scoped>
.v-section-specification {

}
</style>
