<template>
  <div class="v-certification">
    <h1>Certification</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Certification',
  components: {
  },

  beforeMount() {
    this.$nextTick(() => {
      console.log("certification page")
    })
  }
});
</script>

<style lang="scss" scoped>
.v-certification {

}
</style>
