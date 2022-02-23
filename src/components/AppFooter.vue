<template>
  <div class="app-footer">

    <div class="app-footer__content">
      <div>
        Alliance Genève Sàrl
      </div>

      <div>
        Rue des Alpes 15 – 1201 Genève
      </div>

      <div>
        <a href="mailto:nicolas@commergnat.com?subject=Contact%20depuis%20le%20site%20commergnat.com" >nicolas@commergnat.com</a>
      </div>

      <div>
        © 2021 tous droits réservés.
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppFooter',

  components: {},

});
</script>

<style lang="scss" scoped>
.app-footer {
  width: 100%;
  height: calc(var(--line-height) * 2);
  border-top: solid 1px var(--color--main);
}

.app-footer__content {
  width: 100%;
  max-width: var(--max-width--lg);
  margin: auto;
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
}
</style>
