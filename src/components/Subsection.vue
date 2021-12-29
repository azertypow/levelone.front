<template>
  <section class="v-subsection"
           :class="{
              'is-l': styleOption === 'large'
           }"
  >
    <div v-if="styleType === 'centred'"
         class="v-subsection__content v-subsection__content--centred"
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

    <div v-if="styleType === 'half'"
         class="v-subsection__content v-subsection__content--half"
    >
      <div class="v-subsection__content--half__left">
        <div class="v-subsection__content--half__left__cover"></div>
      </div>
      <div class="v-subsection__content--half__right">
        <h1
            class="v-subsection__content__title"
        >{{title}}</h1>
        <div
            class="v-subsection__content__slot"
        >
          <slot></slot>
        </div>
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
    styleType: {
      type: String as PropType<"centred" | "half">,
      require: true,
    },

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

<style lang="scss" scoped>
.v-subsection {
  margin: auto;
  max-width: var(--max-width);
  padding-top: var(--gutter);
  padding-bottom: calc( var(--gutter) *4 );
}

.v-subsection__content {
  &.v-subsection__content--half {
    display: flex;
    align-items: center;

    > * {
      width: 50%;
    }

    .v-subsection__content--half__left__cover {
      width: 300px;
      height: 300px;
      background: black;
    }
  }
}

.v-subsection__content__title {
  font-size:    calc( var(--font-size)    * 4 );
  line-height:  calc( var(--line-height)  * 4 );
  text-align: center;
}

.v-subsection.is-l {
  max-width: var(--max-width--lg);

  .v-subsection__content__slot {
    font-size:    calc( var(--font-size)    * 1.5 );
    line-height:  calc( var(--line-height)  * 1.5 );
    text-align: center;
  }

  li {
    text-decoration: none;
    display: block !important;
  }
}

</style>
