<template>
  <div class="v-pre-order">

  <!--    header -->
    <div  class="v-pre-order__intro lo-view__header">
      <div class="v-pre-order__intro__txt lo-view__header__txt lo-remove-child-margin">
        <h1>Pré-commande</h1>
        <p>Si vous désirez aquérir une montre Nicolas Commergnat</p>
        <img class="lo-view__header__ui--left" src="img/ornement-left.svg" alt="">
        <img class="lo-view__header__ui--right" src="img/ornement-right.svg" alt="">
      </div>
    </div>

    <div
        class="v-certification__form lo-view__form lo-g-gutter--half"
    >
      <h3>Veuillez vous identifier pour accéder à cette page</h3>
      <form class="lo-form lo-g-row">
        <div>
          <label for="firstname" class="lo-form__label--is-required">Votre prénom <span>| your firstname</span></label>
          <input type="text"   id="firstname"  name="firstname"  required/>
        </div>

        <div>
          <label for="name" class="lo-form__label--is-required">Votre nom <span>| Your name</span></label>
          <input type="text"   id="name"  name="name"       required/>
        </div>

        <div>
          <label for="email" class="lo-form__label--is-required">Votre adresse mail <span>| Your mail adress</span></label>
          <input type="email"  id="email"  name="email"      required/>
        </div>

        <div>
          <label for="phone">Votre numéro de téléphone <span>| Your phone number</span></label>
          <input type="tel" id="phone"  name="phone" />
        </div>

        <div>
          <label for="message">Un message <span>| A message</span></label>
          <textarea  id="message"  name="message" rows="10"></textarea >
        </div>

        <button
            class="v-form-locked-page__validate lo-form__validate"
        ><span>envoyer votre demande</span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg></button>

      </form>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PreOrder',
  components: {
  },
});
</script>

<style lang="scss" scoped>
.v-pre-order {

}
</style>
