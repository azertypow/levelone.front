<template>
  <div class="v-home">

    <section-main/>
    <section-specification/>
    <section-bio/>
    <section-talents/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SectionMain from "@/components/SectionMain.vue"
import SectionBio from "@/components/SectionBio.vue"
import SectionSpecification from "@/components/SectionSpecification.vue"
import SectionTalents from "@/components/SectionTalents.vue"
import {apiGet} from "@/global/api"

export default defineComponent({
  name: 'Home',
  components: {
    SectionTalents,
    SectionSpecification,
    SectionBio,
    SectionMain
  },

  async beforeMount() {
    console.log( await apiGet('home') )
  }

});
</script>

<style lang="scss" scoped>
.v-home {

}
</style>
