<template>
  <div
      ref="imageGallery"
      class="v-image-gallery"
  >
    <img class="v-image-gallery__ui v-image-gallery__ui--left"
         src="/img/NC-ui-arrow_2-left.svg"
         alt="ui arrow left navigation"
         @click="slideInGallery()"
    />
    <img class="v-image-gallery__ui v-image-gallery__ui--right"
         src="/img/NC-ui-arrow_2-right.svg"
         alt="ui arrow right navigation"
    />

    <div
        class="v-image-gallery__imgs"
    >
      <img v-for="imageData of arrayOfImgData" :src="imageData.url" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IApiImageData} from "@/global/api"

export default defineComponent({
  name: 'ImageGallery',

  components: {
  },

  data() {
    return {
      currentIndex: 0,
    }
  },

  props: {
    arrayOfImgData: {
      required: true,
      type: Array as PropType<IApiImageData[]>,
    },
  },

  methods: {
    slideInGallery(direction: 'toLeft' | 'toRight') {
      if( !(this.$refs.imageGallery instanceof HTMLElement) ) return

      switch (direction) {
        case "toLeft":
          const newIndex = this.currentIndex - 1
          if (newIndex < 0) break
          this.currentIndex = newIndex
          this.$refs.imageGallery.scrollTo({
            left: newIndex * this.$refs.imageGallery.getBoundingClientRect().width,
            behavior: 'smooth',
          })

      }
    },

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
  background: var(--color--grey);
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
