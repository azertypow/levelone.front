<template>
  <section class="v-subsection"
           :class="{
              'is-l': styleOption === 'large',
              'is-centred': styleType === 'centred',
           }"
  >
    <div v-if="styleType === 'centred'"
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

    <div v-if="styleType === 'half'"
         class="v-subsection__content v-subsection__content--half lo-remove-child-margin"
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
  max-width:      var(--max-width);
  padding-top:    var(--section-padding-top_bottom);
  padding-bottom: var(--section-padding-top_bottom);
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

.v-subsection__content__slot {
  text-align: center;
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

.v-subsection.is-centred {
  .v-subsection__content__slot {
    text-align: center;
  }
}

</style>
