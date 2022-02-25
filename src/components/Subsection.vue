<template>
  <section class="v-subsection"
           :class="{
              'is-l': styleOption === 'large',
           }"
  >
    <div
         class="v-subsection__content v-subsection__content--centred lo-remove-child-margin"
    >
      <h1
          class="v-subsection__content__title"
      >{{title}}</h1>
      <div
          class="v-subsection__content__slot"
          ref="scrollContent"
      >
        <slot></slot>
      </div>
    </div>

    <div
        class="v-subsection__ui-box"
    >
      <img @click="slideInGallery('toLeft')" src="../assets/ui/gallery-arrow-left.svg" alt="">
      <img @click="slideInGallery('toRight')" src="../assets/ui/gallery-arrow-right.svg" alt="">
    </div>

  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';

export default defineComponent({
  name: 'Subsection',
  components: {
  },

  data() {
    return {
      currentIndex: 0,
    }
  },

  props:{
    styleOption: {
      type: String as PropType<"regular" | "large">,
      require: true,
      default: 'regular'
    },

    title: {
      type: String,
      require: true,
    }
  },

  methods: {
    slideInGallery(direction: 'toLeft' | 'toRight') {
      if( !(this.$refs.scrollContent instanceof HTMLElement) ) return

      let index = this.currentIndex

      switch (direction) {
        case "toLeft":
          index--
          if (index < 0) break
          this.currentIndex = index
          this.$refs.scrollContent.scrollTo({
            left: index * this.$refs.scrollContent.getBoundingClientRect().width,
            behavior: 'smooth',
          })
          break
        case "toRight":
          index++
          if (index >= this.$refs.scrollContent.childElementCount) break
          this.currentIndex = index
          this.$refs.scrollContent.scrollTo({
            left: index * this.$refs.scrollContent.getBoundingClientRect().width,
            behavior: 'smooth',
          })
          console.log('right')

      }
    },

  }

});
</script>

<style lang="scss" >
.v-subsection {
  margin: auto;
  max-width:      var(--max-width);
  padding-top:    var(--section-padding-top_bottom);
  padding-bottom: var(--section-padding-top_bottom);
}

.v-subsection__content__title {
  text-align: center;
}

.v-subsection.is-l {
  max-width: var(--max-width--lg);

  ul {
    padding: 0;
  }

  li {
    text-decoration: none;
    display: block !important;
  }
}

.v-subsection__content__slot {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  scroll-snap-type: x mandatory;
  align-items: start;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    scroll-snap-align: start;
  }
}

.v-subsection__ui-box {
  display: flex;
  justify-content: center;
  cursor: pointer;

  > * {
    padding-left: var(--gutter--half);
    padding-right: var(--gutter--half);
  }
}

</style>
