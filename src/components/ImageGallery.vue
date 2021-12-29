<template>
  <div class="v-image-gallery">
    <img class="v-image-gallery__ui v-image-gallery__ui--left"
         src="/img/NC-ui-arrow_2-left.svg"
         alt="ui arrow left navigation"
    />
    <img class="v-image-gallery__ui v-image-gallery__ui--right"
         src="/img/NC-ui-arrow_2-right.svg"
         alt="ui arrow right navigation"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageGallery',
  components: {
  },
});
</script>

<style lang="scss" scoped>
.v-image-gallery {
  position: relative;
  width: 100%;
  height: 100%;
  border-top: solid 1px var(--color--main);
  border-bottom: solid 1px var(--color--main);
  box-shadow: black 0 0 0 0;
}

.v-image-gallery__ui {
  position: absolute;
  top: 50%;
  height: 50px;

  &.v-image-gallery__ui--left {
    left: 0;
  }

  &.v-image-gallery__ui--right {
    right: 0;
  }
}


</style>
