<template>
  <nav class="v-navigation-app">

    <div class="v-navigation-app__top lo-g-row">

      <div
          class="v-navigation-app__top__date lo-g-gutter"
      >
        {{date}}
      </div>

      <router-link
          class="v-navigation-app__top__logo-link"
          :to="{path: '/', hash: '#v-home__main'}"
      >
        <img
            class="v-navigation-app__top__logo"
            src="/img/NC_logo.svg" alt="logo">
      </router-link>
    </div>

    <div
        class="v-navigation-app__bottom lo-g-box lo-g-box--centred lo-g-row"
        :class="{'hide': hide}"
    >
      <router-link class="lo-g-gutter--half" :to="{path: '/', hash: '#v-home__main'}">Level One</router-link>
      <router-link class="lo-g-gutter--half" :to="{path: '/', hash: '#v-home__bio'}">Biographie</router-link>
      <router-link class="lo-g-gutter--half" :to="{path: '/', hash: '#v-home__specification'}">Spécifications</router-link>
      <router-link class="lo-g-gutter--half" :to="{path: '/', hash: '#v-home__talents'}">Talents</router-link>
      <router-link class="lo-g-gutter--half" to="/pre-order">Pré-commande</router-link>
      <router-link class="lo-g-gutter--half" to="/certification">Certificats</router-link>
    </div>

  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {LocationAsPath} from "vue-router"

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
      })(),

      hide: false,
    }
  },

  mounted() {
    let holdScrollValue = 0

    window.addEventListener("scroll", (e) => {
      if      (holdScrollValue < window.scrollY) this.hide = true
      else if (holdScrollValue > window.scrollY) this.hide = false
      holdScrollValue = window.scrollY
    })
  },

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
  background: var(--color--light);
  z-index: 10;
}

.v-navigation-app__top__date {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.v-navigation-app__top__logo-link {
  display: block;
}

.v-navigation-app__top__logo {
  display: block;
  height: calc( var(--unit) * 3 );
  width: auto;
  margin: auto;
}

.v-navigation-app__bottom {
  position: relative;
  border-bottom: solid 1px var(--color--main);
  transform: translateY(0);
  transition: transform 250ms, opacity 350ms;
  background: var(--color--light);
  z-index: 0;
  opacity: 1;

  a {
    text-decoration: none;
  }

  &.hide {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>