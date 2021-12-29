<template>
  <section class="v-section-bio"
       id="v-section-bio"
  >
    <subsection
        style-type="half"
        title="Biographie"
    >
      <p>Quête existentielle: l’horloger Nicolas Commergnat, maîtrise la plus inaccessible des complications, la simplicité…</p>
    </subsection>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subsection from "@/components/Subsection.vue"

export default defineComponent({
  name: 'SectionBio',
  components: {
    Subsection
  },
});
</script>

<style lang="scss" scoped>
.v-section-bio {

}
</style>
