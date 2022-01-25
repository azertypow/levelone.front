<template>
  <div class="watch-component lo-g-gutter--half">
    <div class="watch-component__header lo-remove-child-margin">
      <div>N.C. -2230-311-</div>
      <div>Ressort de barillet</div>
      <div>force normale 1</div>
    </div>
    <div class="watch-component__img">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'WatchComponent',
  components: {},

});
</script>

<style lang="scss" scoped>
.watch-component {
  border-left: solid 1px var(--color--grey);
  position: relative;
  width: 100%;
  max-width: 300px;
  margin-bottom: calc( var(--line-height) * 4);
}

.watch-component__header {
  padding-bottom: calc( var(--line-height) * 4 );
}

.watch-component__img {
  background-color: var(--color--grey);
  width: 100%;
  padding-top: 100%;
}

</style>