<template>
  <div class="v-certification">

<!--    header -->
    <div  class="v-certification__intro lo-view__header" :style="{backgroundImage: `url('${certificationLoginData.image?.url}')`,}">
      <div class="v-certification__intro__txt lo-view__header__txt lo-remove-child-margin lo-g-gutter--half">
        <h1>{{certificationLoginData.titleName}}</h1>
        <p>{{certificationLoginData.description}}</p>
      </div>
    </div>

<!--    unconnected-->

    <div
        v-if="certificationData === undefined || certificationData?.hasOwnProperty('error')"
        class="v-certification__form lo-view__form lo-g-gutter--half"
    >
      <h3>Veuillez vous identifier pour accéder à cette page</h3>
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
            <div class="v-certification__components__header__line" >
              <button
                  class="v-certification__clearData"
                  @click="clearCertificationID"
              >logout</button>
            </div>
            <h1>Composante</h1>
            <p>Vous trouverez un scann en haute définiton et un numéro de référence pour chaques pièces qui compose votre montre.</p>
          </div>
        </div>

        <div class="v-certification__components__elements lo-g-box lo-g-gutter--half">
          <div class="v-certification__components__elements__title lo-remove-child-margin lo-g-gutter--half">
            <h3>Montre</h3>
          </div>
          <div class="v-certification__components__elements__description lo-remove-child-margin lo-g-gutter--half">
            <p>{{certificationData.watchDescription}}</p>
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
          <div class="v-certification__components__elements__description lo-remove-child-margin lo-g-gutter--half">
            <p>{{certificationData.watchCaseDescription}}</p>
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
            <h3>Cadrant</h3>
          </div>
          <div class="v-certification__components__elements__description lo-remove-child-margin lo-g-gutter--half">
            <p>{{certificationData.watchDialDescription}}</p>
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
            <h3>Aiguilles</h3>
          </div>
          <div class="v-certification__components__elements__description lo-remove-child-margin lo-g-gutter--half">
            <p>{{certificationData.watchNeedleDescription}}</p>
          </div>
          <div class="v-certification__components__elements__list lo-g-box">
            <watch-component
                v-for="component of certificationData?.watchNeedle"
                :data="component"
            ></watch-component>
          </div>
        </div>


        <div class="v-certification__components__elements lo-g-box lo-g-gutter--half">
          <div class="v-certification__components__elements__title lo-remove-child-margin lo-g-gutter--half">
            <h3>Mouvement</h3>
          </div>
          <div class="v-certification__components__elements__description lo-remove-child-margin lo-g-gutter--half">
            <p>{{certificationData.movementDescription}}</p>
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
import {apiGet, IApiResponse_certification, IApiResponse_certificationLogin} from "@/global/api"
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

  computed: {
    certificationLoginData(): IApiResponse_certificationLogin {
      return {
        titleName:      this.store.state.certificationLoginData?.titleName      || '',
        description:    this.store.state.certificationLoginData?.description    || '',
        image:          this.store.state.certificationLoginData?.image          || null,
        certifications: this.store.state.certificationLoginData?.certifications || [],
      }
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

.v-certification {
  min-height: calc( 100vh - var(--navigation-height) - var(--footer-height) );
}

.v-certification__intro__txt {
  text-shadow: 0 0 20px black;

  h1 {
    margin: 0;
    color: white;
    font-weight: 900;
  }

  p {
    font-weight: 900;
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

///// intro and form to unlock page
.v-certification__clearData {
  position: absolute;
  top:    var(--gutter);
  right: 0;
}

// specifications
.v-certification__specification {
  padding-top:    var(--section-padding-bottom);
  padding-bottom: var(--section-padding-bottom);
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
  padding-top: 50%;
  background-position: center;

  background-size: cover;

  @media all and (min-width: 1000px) {
    padding-top: 100%;
  }
}


// components
.v-certification__components {
  padding-top: 0;
  padding-bottom: var(--section-padding-bottom);
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
  padding-bottom:    var(--section-padding-bottom);
  border-top: solid 1px var(--color--grey);
  width: 100%;
  position: relative;

  @media all and (min-width: 1000px) {
    width: calc(200% + var(--gutter) );
  }
}

.v-certification__components__elements {
  margin-top: calc( var(--line-height) * 4);
}

.v-certification__components__elements__title {
  width: 100%;
  border-left: solid 1px var(--color--grey);
  padding-bottom: calc( var(--line-height) * 1 );
}

.v-certification__components__elements__description {
  width: 100%;
  border-left: solid 1px var(--color--grey);
  padding-bottom: calc( var(--line-height) * 3 );

  > p {
    max-width: 30em;
  }
}

.v-certification__components__elements__list {
  width: 100%;
}


</style>

<style lang="scss">
.v-certification__specifications__details {
  padding-top: var(--gutter);

  @media all and (min-width: 1000px) {
    padding-top: 0;
  }

  p {
    font-weight: bold;
  }
}
</style>
