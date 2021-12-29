<template>
  <section class="v-section-talents"
       id="v-section-talents"
  >
    <subsection
        style-type="centred"
        title="Talents réunis, Level One"
        styleOption="large"
    >
      <ul>
        <li>Nicolas Commergnat - Auteur, Réalisateur, Concepteur, Producteur </li>
        <li>Javier Muino - Concepteur DAO, CAO, Chargé De Production</li>
        <li>Jérôme Gautier - 3D, Communication Visuel</li>
        <li>Jean-Marc Fleury - Mouvement FM01 (Fleury Manufacture)</li>
        <li>Théo Massaoutis - Couronne (Diatheke)</li>
        <li>Emilie Froideveaux - Verre Saphire D.S.M Froidevaux</li>
        <li>Massimo Calestrini - Maroquinier (Shiro)</li>
        <li>Nicolas Pennamen - Boîte (CN Précis Sarl)</li>
        <li>Romeo Granito - Cadrant (Cadranor)</li>
        <li>Anthony Sannier - Ajs Pradnetier</li>
        <li>Atelier du Bracelet - Bracelet</li>
        <li>Verlux - Verre Hésalite</li>
        <li>Nicolas Baldran - Développeur web</li>
        <li>Anthony Sannier - Aiguilles (Ajs Pradnetier)</li>
        <li>Michel Oesch - Boucle hardillom (Oesch) </li>
        <li>Jess Hoffman - Photographe</li>
        <li>Jino Tachet - Polissage  (JT Polissage)</li>
        <li>Joël Grandjean - Texte</li>
        <li>Vincent Grolimund - Près-assemblage mouvement FM01</li>
        <li>Emilien Reverchon - Décoration poli-bloqué</li>
      </ul>
    </subsection>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subsection from "@/components/Subsection.vue"

export default defineComponent({
  name: 'SectionTalents',
  components: {
    Subsection
  },
});
</script>

<style lang="scss" scoped>
.v-section-talents {

}
</style>
