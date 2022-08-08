<template>
  <div class="watch-component lo-g-gutter--half" @click="openImage">
    <div class="watch-component__header lo-remove-child-margin">
      <div>NC-Level-One</div>
      <div class="watch-component__name">{{name}}</div>
    </div>
    <div
        :style="{
          backgroundImage: `url(${data.url})`
        }"
        class="watch-component__img"
    >
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IApiImageData} from "@/global/api"
import {useStore} from "vuex"
import {key} from "@/store"

export default defineComponent({
  name: 'WatchComponent',

  components: {},

  data() {
    return {
      store: useStore(key)
    }
  },

  props: {
    data: {
      type: Object as PropType<IApiImageData>,
      required: true,
    }
  },

  computed: {
    name(): string {
      return this.data.safeName.replace( 'nc-level-one-' , '')
    }
  },

  methods: {
    openImage() {
      this.store.commit('setImageToEasyLightBoxImage', this.data.url)
    }
  }
});
</script>

<style lang="scss" scoped>
.watch-component {
  border-left: solid 1px var(--color--grey);
  position: relative;
  width: 100%;
  max-width: 300px;
  margin-bottom: calc( var(--line-height) * 4);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
}

.watch-component__header {
  padding-bottom: calc( var(--line-height) * 4 );
}

.watch-component__name {
  font-weight: bold;
}

.watch-component__img {
  background-color: var(--color--grey);
  width: 100%;
  padding-top: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>
