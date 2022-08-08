<template>
  <nav
      class="v-navigation-app"
      :class="{'hide': hide}"
  >

    <div
        class="v-navigation-app__top lo-g-row"
    >

      <div>
        <div
            class="v-navigation-app__top__date"
        >
          {{date}}
        </div>
        <div
            class="v-navigation-app__top__date-mobile"
        >
          {{dateMobile}}
        </div>
      </div>

      <div>
        <router-link
            class="v-navigation-app__top__logo-link"
            :to="{path: '/', hash: '#v-home__main'}"
        >
          <img
              class="v-navigation-app__top__logo"
              src="/img/NC_logo.svg" alt="logo">
        </router-link>
      </div>

      <div>
        <div
            @click="toggleMenu"
            class="v-navigation-app__top__toggle-menu"
        >
          <div>
            <svg
                v-if="store.state.menuOpen"
                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 213.8 213.8"
                style="enable-background:new 0 0 213.8 213.8;"
                xml:space="preserve"
            >
              <polygon
                  points="213.8,23.8 190.1,0 106.9,83.2 23.8,0 0,23.8 83.2,106.9 0,190.1 23.8,213.8 106.9,130.7 190.1,213.8 213.8,190.1 130.7,106.9 "/>
            </svg>
            <svg
                v-else
                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 268.8 212.8"
                style="enable-background:new 0 0 268.8 212.8;"
                xml:space="preserve"
            >
              <g>
                <path d="M0,0v33.6h268.8V0H0z M0,89.6v33.6h268.8V89.6H0z M0,179.2v33.6h268.8v-33.6H0z"/>
              </g>
            </svg>
          </div>
        </div>
      </div>

    </div>

    <div
        class="v-navigation-app__bottom lo-g-box lo-g-box--centred lo-g-row"
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
import {useStore} from "vuex"
import {key} from "@/store"

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

      dateMobile: (() => {
        const date = new Date()
        const day   = date.toLocaleDateString("fr-FR", {day:    "2-digit",})
        const month = date.toLocaleDateString("fr-FR", {month:  "2-digit",})
        const year  = date.toLocaleDateString("fr-FR", {year:   "2-digit",})

        return `${day}.${month}.${year}`
      })(),

      hide: false,

      store: useStore(key)
    }
  },

  mounted() {
    const scrollValueToHideNav = 100;
    let holdScrollValue = 0

    window.addEventListener("scroll", (e) => {
      if      (window.scrollY > scrollValueToHideNav && holdScrollValue < window.scrollY) this.hide = true
      else if (holdScrollValue > window.scrollY && window.scrollY > scrollValueToHideNav) this.hide = false
      holdScrollValue = window.scrollY
    })
  },

  methods: {
    toggleMenu() {
      this.store.commit("toggleMenu")
    }
  },

});
</script>

<style lang="scss" scoped>
.v-navigation-app {
  position: relative;
  width: 100%;
  background-color: var(--color--light);
}

.v-navigation-app__top {
  position: relative;
  border-bottom: solid 1px var(--color--main);
  background: var(--color--light);
  z-index: 10;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;

  @media all and (min-width: 950px) {
    flex-direction: row;
  }

  > div {
    width: 33.33333%;
    padding-left: var(--gutter--half);
    padding-right: var(--gutter--half);
  }
}

.v-navigation-app__top__toggle-menu {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  user-select: none;

  @media all and (min-width: 950px) {
    display: none;
  }

  svg {
    display: block;
    height: 1rem;
  }
}

.v-navigation-app__top__date {
  position: relative;
  display: none;
  @media all and (min-width: 950px) {
    display: block;
  }
}

.v-navigation-app__top__date-mobile {
  position: relative;
  display: block;
  @media all and (min-width: 950px) {
    display: none;
  }
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
  background: var(--color--light);
  z-index: 0;
  opacity: 1;
  display: none;

  .menu-open & {
    display: flex;
    height: calc(100vh - var(--navigation-height));
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: calc( var(--font-size) * 2);
  }

  a {
    text-decoration: none;

    &:hover {
      color: var(--color--main)
    }
  }

  @media all and (min-width: 950px) {
    display: flex;
  }
}

.v-navigation-app {
  transition: transform 500ms ease-in-out;
  transform: translateY(0);

  .v-navigation-app__top {
    transition: opacity 250ms 250ms ease-in-out;
    opacity: 1;
  }

  .v-navigation-app__bottom {
    transition: transform 500ms ease-in-out;
    transform: translateY(0);
  }

  &.hide {
    transform: translateY(-100%);

    .v-navigation-app__top {
      transition: opacity 250ms ease-in-out;
      opacity: 0;
    }

    .v-navigation-app__bottom {
      transition: transform 500ms ease-in-out;
      transform: translateY(100%);
    }
  }
}

</style>
