<template>
  <div class="v-app">

    <div
        style="display: none"
        v-if="!isLogView"
        class="v-app__nav"
    >
      <navigation-app/>
    </div>

    <router-view/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationApp from "@/components/NavigationApp.vue"

export default defineComponent({
  name: 'App',

  components: {
    NavigationApp
  },

  computed: {
    isLogView(): boolean {
      return this.$route.name === 'Log'
    }
  }

});
</script>

<style lang="scss" scoped>
.v-app {
  padding-top: var(--navigation-height);
}

.v-app__nav {
  position: fixed;
  width: 100%;
  top: 0;
  background: var(--color--light);
  z-index: 1000000;
}
</style>
