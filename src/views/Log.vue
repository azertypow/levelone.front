<template>
  <div class="v-log">
    <img
        class="v-log__logo"
        src="/img/NC_logo--white.svg"
        alt="logo"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'log',
  components: {
  },
});
</script>

<style lang="scss" scoped>
.v-log {
  position: fixed;
  top: 0;
  left: 0;
  background-image: url("/img/watchBg-copie.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center bottom;
}

.v-log__logo {
  width: 150px;
  height: 75px;
  background-size: contain;
  background-position: center;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);
}

</style>
