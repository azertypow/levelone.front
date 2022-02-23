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
      >
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';

export default defineComponent({
  name: 'Subsection',
  components: {
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

  li {
    text-decoration: none;
    display: block !important;
  }
}

.v-subsection__content__slot {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    scroll-snap-align: start;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
}

</style>
