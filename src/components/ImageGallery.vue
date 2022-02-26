<template>
  <div
      class="v-image-gallery"
  >
    <img class="v-image-gallery__ui v-image-gallery__ui--left"
         src="/img/NC-ui-arrow_2-left.svg"
         alt="ui arrow left navigation"
         @click="slideInGallery('toLeft')"
    />
    <img class="v-image-gallery__ui v-image-gallery__ui--right"
         src="/img/NC-ui-arrow_2-right.svg"
         alt="ui arrow right navigation"
         @click="slideInGallery('toRight')"
    />

    <div
        class="v-image-gallery__imgs"
        ref="imageGallery"
        @scroll="onScrollInGallery"
    >
      <img v-for="imageData of arrayOfImgData" :src="imageData.url" alt="">
    </div>

    <div
        class="v-image-gallery__counter"
    >
      <template v-for="imageDataIndex in Object.keys(arrayOfImgData).length" >
        <img  :alt="imageDataIndex" v-if="imageDataIndex-1 === currentIndex" src="../assets/ui/counter--active.svg">
        <img  :alt="imageDataIndex" v-else                                 src="../assets/ui/counter--unactive.svg">
      </template>
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
      type: Object as PropType<IApiImageData[]>,
    },
  },

  methods: {

    onScrollInGallery(e: MouseEvent) {
      if( !(this.$refs.imageGallery instanceof HTMLElement) ) return

      const scrollLeft        = this.$refs.imageGallery.scrollLeft
      const imageGalleryWidth = this.$refs.imageGallery.getBoundingClientRect().width

      this.currentIndex = Math.floor( (scrollLeft + imageGalleryWidth / 2 ) / imageGalleryWidth )
    },

    slideInGallery(direction: 'toLeft' | 'toRight') {
      if( !(this.$refs.imageGallery instanceof HTMLElement) ) return

      let index = this.currentIndex

      switch (direction) {
        case "toLeft":
          index--
          if (index < 0) break
          this.$refs.imageGallery.scrollTo({
            left: index * this.$refs.imageGallery.getBoundingClientRect().width,
            behavior: 'smooth',
          })
          break
        case "toRight":
          index++
          if (index >= Object.keys( this.arrayOfImgData ).length) break
          this.$refs.imageGallery.scrollTo({
            left: index * this.$refs.imageGallery.getBoundingClientRect().width,
            behavior: 'smooth',
          })
          console.log('right')

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

.v-image-gallery__imgs {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  width: 100%;
  height: 100%;
  position: relative;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex-shrink: 0;
    scroll-snap-align: start;
  }
}

.v-image-gallery__counter {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: var(--gutter--half);
  box-sizing: border-box;

  > img {
    display: block;
    user-select: none;
    cursor: pointer;
    padding: calc( var(--gutter--half) / 2 );
  }
}

.v-image-gallery__ui {
  position: absolute;
  top: 50%;
  height: 50px;
  cursor: pointer;
  z-index: 10;

  &.v-image-gallery__ui--left {
    left: 0;
  }

  &.v-image-gallery__ui--right {
    right: 0;
  }
}


</style>
