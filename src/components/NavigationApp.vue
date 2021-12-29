<template>
  <nav class="v-navigation-app">

    <div class="v-navigation-app__top lo-g-row">

      <div
          class="v-navigation-app__top__date lo-g-gutter"
      >
        {{date}}
      </div>

      <img
          class="v-navigation-app__top__logo"
          src="/img/NC_logo.svg" alt="logo">
    </div>

    <div class="v-navigation-app__bottom lo-g-box lo-g-box--centred lo-g-row">
      <a class="lo-g-gutter--half" ref="">Level One</a>
      <a class="lo-g-gutter--half" ref="">Biographie</a>
      <a class="lo-g-gutter--half" ref="">Spécifications</a>
      <a class="lo-g-gutter--half" ref="">Talents</a>
      <router-link class="lo-g-gutter--half" to="/pre-order">Pré-commande</router-link>
      <router-link class="lo-g-gutter--half" to="/certification">Certificats</router-link>
    </div>

  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationApp',
  components: {
  },

  data() {
    return {
      date: (() => {
        const date = new Date()
        return date.toLocaleDateString("fr-FR", {
          weekday:  "long",
          day: "numeric",
          month:    "long",
          year:   "numeric",
        })
      })()
    }
  }
});
</script>

<style lang="scss" scoped>
.v-navigation-app {
  position: relative;
  width: 100%;
}

.v-navigation-app__top {
  position: relative;
  border-bottom: solid 1px var(--color--main);
}

.v-navigation-app__top__date {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.v-navigation-app__top__logo {
  display: block;
  height: calc( var(--unit) * 3 );
  width: auto;
  margin: auto;
}

.v-navigation-app__bottom {
  border-bottom: solid 1px var(--color--main);
}
</style>
