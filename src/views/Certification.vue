<template>
  <div class="v-certification">

<!--    header -->
    <div  class="v-certification__intro">
      <div class="v-certification__intro__txt lo-remove-child-margin">
        <h1>Bienvenue</h1>
        <p>Retrouvez dans cet espace sur-mesure les informations personnalisées, relatives à votre montre Nicolas&nbsp;Commergnat.</p>
        <img class="v-certification__intro__ui--left" src="img/ornement-left.svg" alt="">
        <img class="v-certification__intro__ui--right" src="img/ornement-right.svg" alt="">
      </div>

    </div>

<!--    unconnected-->

    <div
        v-if="certificationData === undefined || certificationData?.hasOwnProperty('error')"
        class="v-certification__form lo-g-gutter--half"
    >
      <h2>Veuillez vous identifier pour accéder à cette page</h2>
      <form-locked-page
          @validate="formValidate"
      ></form-locked-page>
    </div>

<!--    connected-->

    <template
        v-else
    >

      <!--    specification-->
      <div class="v-certification__specification lo-font-is-small lo-g-gutter--half" >

        <button
            class="v-certification__clearData"
            @click="clearCertificationID"
        >se deconnecter du certificat {{certificationData.ref.value}}</button>

        <div class="lo-g-box">
          <div class="lo-g-gutter--half">
            <div>
              <h2>Level One
                <br>Nicolas Commergnat - Genève
                <br>N* de ref. {{certificationData?.ref.value }}
              </h2>
            </div>
          </div>

          <div class="lo-g-gutter--half">
            <h2>Spécifications</h2>
          </div>
        </div>


        <div class="lo-g-box">
          <div class="lo-g-gutter--half">
            <div
                :style="{
                backgroundImage: `url('${certificationData?.image.url}')`,
              }"
                class="v-certification__specifications__img"
            ></div>
          </div>

          <div
              v-if="certificationData"
              v-html="certificationData.specification.value"
              class="v-certification__specifications__details lo-g-gutter--half lo-remove-child-margin"
          >

          </div>
        </div>
      </div>

      <!--    components-->
      <div class="v-certification__components lo-g-gutter--half" >
        <div class="lo-g-box">
          <div class="v-certification__components__header lo-remove-child-margin lo-g-gutter--half">
            <div class="v-certification__components__header__line" ></div>
            <h1>Composante</h1>
            <p>Vous trouverez un scann en haute définiton et un numéro de référence pour chaques pièces qui compose votre montre.</p>
          </div>
        </div>

        <div class="v-certification__components__elements lo-g-box lo-g-gutter--half">
          <div class="v-certification__components__elements__title lo-remove-child-margin lo-g-gutter--half">
            <h3>Montre</h3>
          </div>
          <div class="v-certification__components__elements__list lo-g-box">
            <watch-component
                v-for="component of certificationData?.watch"
                :data="component"
            ></watch-component>
          </div>
        </div>

        <div class="v-certification__components__elements lo-g-box lo-g-gutter--half">
          <div class="v-certification__components__elements__title lo-remove-child-margin lo-g-gutter--half">
            <h3>Boitier</h3>
          </div>
          <div class="v-certification__components__elements__list lo-g-box">
            <watch-component
                v-for="component of certificationData?.watchCase"
                :data="component"
            ></watch-component>
          </div>
        </div>


        <div class="v-certification__components__elements lo-g-box lo-g-gutter--half">
          <div class="v-certification__components__elements__title lo-remove-child-margin lo-g-gutter--half">
            <h3>Cadrant et Aiguilles</h3>
          </div>
          <div class="v-certification__components__elements__list lo-g-box">
            <watch-component
                v-for="component of certificationData?.watchDial"
                :data="component"
            ></watch-component>
          </div>
        </div>


        <div class="v-certification__components__elements lo-g-box lo-g-gutter--half">
          <div class="v-certification__components__elements__title lo-remove-child-margin lo-g-gutter--half">
            <h3>Mouvement</h3>
          </div>
          <div class="v-certification__components__elements__list lo-g-box">
            <watch-component
                v-for="component of certificationData?.movement"
                :data="component"
            ></watch-component>
          </div>
        </div>


      </div>
    </template>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WatchComponent from "@/components/WatchComponent.vue";
import {apiGet, IApiResponse_certification} from "@/global/api"
import {API_URL} from "@/global/variables"
import FormLockedPage, {IValidateData} from "@/components/FormLockedPage.vue"
import {key} from "@/store"
import {useStore} from "vuex"

export default defineComponent({
  name: 'Certification',
  components: {
    FormLockedPage,
    WatchComponent
  },

  mounted() {
    this.updateCertificationData()
  },

  data() {
    return {
      certificationData: undefined as undefined | IApiResponse_certification | {error: string},
      store: useStore(key),
    }
  },

  methods: {
    formValidate(e: IValidateData) {
      this.store.commit("changeCertificationConnection", {id: e.id, password: e.password} as IValidateData)
      this.updateCertificationData()
    },

    async updateCertificationData() {

      if (this.store.state?.componentUnlocked !== null) this.certificationData = await apiGet("certification",
          {
            id: this.store.state.componentUnlocked.id,
            password: this.store.state.componentUnlocked.password
          }) as IApiResponse_certification | { error: string }

      else this.certificationData = undefined
    },

    clearCertificationID() {
      this.store.commit("changeCertificationConnection", null)
      this.updateCertificationData()
    }
  }

});
</script>

<style lang="scss" scoped>
h1 {
  color: var(--color--main);
}


.v-certification {
  min-height: calc( 100vh - var(--navigation-height) - var(--footer-height) );
}

///// intro and form to unlock page

.v-certification__intro {
  position: relative;
  padding-top:    var(--section-padding-top_bottom);
  padding-bottom: var(--section-padding-top_bottom);
  background-color: var(--color--grey);
  border-bottom: solid 1px var(--color--main);
}

.v-certification__intro__txt,
.v-certification__form {
  text-align: center;
  max-width: var(--max-width--lg);
  margin: auto;
}

.v-certification__intro__ui--left,
.v-certification__intro__ui--right {
  top: 0;
  height: 100%;
  width: auto;
  display: block;
  user-select: none;
  pointer-events: none;
  position: absolute;
}
.v-certification__intro__ui--left   {left: 0}
.v-certification__intro__ui--right  {right: 0}

.v-certification__clearData {
  position: absolute;
  top:    var(--gutter);
  right:  var(--gutter);
}

// specifications
.v-certification__specification {
  padding-top:    var(--section-padding-top_bottom);
  padding-bottom: var(--section-padding-top_bottom);
  position: relative;

  > *:first-child {
    align-items: end;
  }

  > * {
    > * {
      width: 100%;

      @media all and (min-width: 1000px) {
        width: 50%;
      }
    }
  }
}

.v-certification__specifications__img {
  background-color: var(--color--grey);
  width: 100%;
  padding-top: 33.33333%;
  background-position: center;

  background-size: cover;

  @media all and (min-width: 1000px) {
    padding-top: 100%;
  }
}


// components
.v-certification__components {
  padding-top: 0;
  padding-bottom: var(--section-padding-top_bottom);
}

.v-certification__components__header {
  width: 100%;

  @media all and (min-width: 1000px) {
    width: 50%;
  }

  > h1 {
    margin-top: 0;
  }
}

.v-certification__components__header__line {
  padding-bottom:    var(--section-padding-top_bottom);
  border-top: solid 1px var(--color--grey);
  width: 100%;
}

.v-certification__components__elements {
  margin-top: calc( var(--line-height) * 4);
}

.v-certification__components__elements__title {
  width: 100%;
  border-left: solid 1px var(--color--grey);
  padding-bottom: calc( var(--line-height) * 4 );
}

.v-certification__components__elements__list {
  width: 100%;
}


</style>

<style lang="scss">
.v-certification__specifications__details {
  p {
    font-weight: bold;
  }
}
</style>
