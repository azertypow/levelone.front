<template>
  <div class="v-page-transition">
    <img
        src="../assets/loader.gif"
        alt="page transition animation"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    book: {
      //   // provide more specific type to `Object`
      //   type: Object as PropType<Book>,
      //   required: true
      // },
      // // can also annotate functions
      // callback: Function as PropType<(id: number) => void>
    },

    mounted() {
      console.log('page transtion mounted')
    },
  },
})
</script>

<style scoped lang="scss">
.v-page-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: var(--color--light);

  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: var(--gutter);
    box-sizing: border-box;
    position: absolute;
    top: calc(50% + ( var(--navigation-height) / 2 ) );
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
  }
}
</style>
