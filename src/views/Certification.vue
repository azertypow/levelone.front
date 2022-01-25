<template>
  <div class="v-certification">

<!--    header -->
    <div  class="v-certification__intro">
      <div class="v-certification__intro__txt lo-remove-child-margin">
        <h1>Bienvenue</h1>
        <p>Retrouvez dans cet espace sur-mesure les informations personnalisées, relatives à votre montre Nicolas Commergnat.</p>
      </div>

    </div>

<!--    specification-->
    <div class="v-certification__specification lo-font-is-small lo-g-gutter--half" >

      <div class="lo-g-box">
        <div class="lo-g-gutter--half">
          <div>
            <h2>Level One
            <br>Nicolas Commergnat - Genève
            <br>N* de ref. 001
            </h2>
          </div>
        </div>

        <div class="lo-g-gutter--half">
          <h2>Spécifications</h2>
        </div>
      </div>


      <div class="lo-g-box">
        <div class="lo-g-gutter--half">
          <div class="v-certification__specifications__img"></div>
        </div>

        <div class="v-certification__specifications__details lo-g-gutter--half lo-remove-child-margin">
          <h3>Fonctions</h3>
          <ul>
            <li>Simplicité extrême, fonctionnalité essentielle</li>
            <li>Trois aiguilles, heures, minutes et seconde centrale</li>
            <li>Première mondiale en horlogerie: indication des quarts</li>
          </ul>

          <h3>Mises en couleurs</h3>
          <ul>
            <li>Brillance et effet porcelaine sur base laiton</li>
            <li>Effet de profondeur: application de plusieurs couches de vernis</li>
          </ul>

          <h3>Cadran</h3>
          <ul>
            <li>Inédit, marqueurs de quarts sur la minuterie des heures Calligraphie épurée, indications des heures et du nom par estampillage</li>
          </ul>

          <h3>Calibre mécanique</h3>
          <ul>
            <li>Fleury Manufacture XXXX - première utilisation en horlogerie Entièrement fabriqué et usiné à l’interne en mode ETA-2824 compatible (solution durable d’assortiment de transmission et d’échappement, universalité de l’assemblage, réparabilité sans limite de temps)</li>
            <li>28'800 alternances / heure (4 Hertz)</li>
            <li>Décorations Côtes de Genève, soit selon les 7 côtes hommages au 7 plumes de l’aigle du drapeau genevois</li>
          </ul>

          <h3>Boîte</h3>
          <ul>
            <li>Acier 316L usiné</li>
            <li>Forme simplissime, ronde, diamètre XXXX</li>
            <li>Lunette polie, cornes symétriques</li>
            <li>Harmonie des dimensions, chiffre d’or</li>
            <li>Verre plexiglas, souple et polissable</li>
            <li>Fond verre saphir</li>
            <li>Logo en creusure sur la couronne, pensé et conçu comme une gravure symétrique mécanique: motifs du «N» lovés dans le «C»</li>
          </ul>
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
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
        </div>
      </div>

      <div class="v-certification__components__elements lo-g-box lo-g-gutter--half">
        <div class="v-certification__components__elements__title lo-remove-child-margin lo-g-gutter--half">
          <h3>Boitier</h3>
        </div>
        <div class="v-certification__components__elements__list lo-g-box">
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
        </div>
      </div>


      <div class="v-certification__components__elements lo-g-box lo-g-gutter--half">
        <div class="v-certification__components__elements__title lo-remove-child-margin lo-g-gutter--half">
          <h3>Cadrant et Aiguilles</h3>
        </div>
        <div class="v-certification__components__elements__list lo-g-box">
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
        </div>
      </div>


      <div class="v-certification__components__elements lo-g-box lo-g-gutter--half">
        <div class="v-certification__components__elements__title lo-remove-child-margin lo-g-gutter--half">
          <h3>Mouvement</h3>
        </div>
        <div class="v-certification__components__elements__list lo-g-box">
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
          <watch-component></watch-component>
        </div>
      </div>


    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WatchComponent from "@/components/WatchComponent.vue";

export default defineComponent({
  name: 'Certification',
  components: {
    WatchComponent
  },

  beforeMount() {
    this.$nextTick(() => {
      console.log("certification page")
    })
  }
});
</script>

<style lang="scss" scoped>
h1 {
  color: var(--color--main);
}


.v-certification {

}

///// intro

.v-certification__intro {
  padding-top:    var(--section-padding-top_bottom);
  padding-bottom: var(--section-padding-top_bottom);
  background-color: var(--color--grey);
  border-bottom: solid 1px var(--color--main);
}

.v-certification__intro__txt {
  text-align: center;
  max-width: var(--max-width--lg);
  margin: auto;
}


// specifications
.v-certification__specification {
  padding-top:    var(--section-padding-top_bottom);
  padding-bottom: var(--section-padding-top_bottom);

  > *:first-child {
    align-items: end;
  }

  > * {
    > * {
      width: 50%;
    }
  }
}

.v-certification__specifications__img {
  background-color: var(--color--grey);
  width: 100%;
  padding-top: 100%;
}


// components
.v-certification__components {
  padding-top: 0;
  padding-bottom: var(--section-padding-top_bottom);
}

.v-certification__components__header {
  width: 50%;

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
