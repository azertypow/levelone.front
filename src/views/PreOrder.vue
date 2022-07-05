<template>
  <div class="v-pre-order">

  <!--    header -->
    <div  class="v-pre-order__intro lo-view__header">
      <div class="v-pre-order__intro__txt lo-view__header__txt lo-remove-child-margin">
        <h1>Pré-commande</h1>
        <p>Si vous désirez aquérir une montre Nicolas Commergnat</p>
      </div>
    </div>

    <div
        class="v-certification__form lo-view__form lo-g-gutter--half"
        v-if="status === 'show form' || status === 'sending data' "
        :class="{
          'is-sending-data': status === 'sending data'
        }"
    >
      <form
          class="lo-form lo-g-row"
          @submit="formSubmit"
      >
        <div>
          <label for="firstname" class="lo-form__label--is-required">Votre prénom <span>| your firstname</span></label>
          <input type="text"   id="firstname"  name="firstname"   v-model="firstname" required/>
        </div>

        <div>
          <label for="name" class="lo-form__label--is-required">Votre nom <span>| Your name</span></label>
          <input type="text"   id="name"        name="name"        v-model="name"     required/>
        </div>

        <div>
          <label for="email" class="lo-form__label--is-required">Votre adresse mail <span>| Your mail adress</span></label>
          <input type="email"  id="email"       name="email"      v-model="email"     required/>
        </div>

        <div>
          <label for="phone">Votre numéro de téléphone <span>| Your phone number</span></label>
          <input type="tel" id="phone"          name="phone"      v-model="phoneNumber"/>
        </div>

        <div>
          <label for="message">Un message <span>| A message</span></label>
          <textarea  id="message"  name="message" rows="10"       v-model="message"></textarea >
        </div>

        <button
            class="v-form-locked-page__validate lo-form__validate"
        ><span>envoyer votre demande</span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg></button>

      </form>

      <div
          v-if="status === 'sending data' "
          class="v-certification__form__waiting-message"
      >Envois des informations en cours…</div>
    </div>

    <div
        v-else-if="status === 'show response'"
        class="v-certification__response lo-g-gutter--half"
    >
      <h2>{{responseMassage}}</h2>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PreOrder',

  components: {
  },

  data() {
    return {
      firstname: "",
      name: "",
      email: "",
      phoneNumber: "",
      message: "",

      status:  'show form' as 'show form' | 'sending data' | 'show response',

      responseMassage: null as string | null,
    }
  },

  methods: {

    async formSubmit(e: Event) {
      e.preventDefault()

      this.status = "sending data"

      const contactUrl = new URL('https://api.commergnat.com/contact?')

      contactUrl.searchParams.append('firstname', this.firstname)
      contactUrl.searchParams.append('name',      this.name)
      contactUrl.searchParams.append('email',     this.email)
      contactUrl.searchParams.append('phone',     this.phoneNumber)
      contactUrl.searchParams.append('message',   this.message)

      try {
        const response = await fetch(
            contactUrl.href,
            {
              method: 'POST',
            })

        const dataRespon = await response.json()

        window.setTimeout(() => {
          this.responseMassage = dataRespon.succes
          this.status           = 'show response'
        }, 5000)


      } catch {
        window.setTimeout(() => {
          this.responseMassage  = 'Erreur de connection, réesséyez…'
          this.status           = 'show response'
        }, 5000)
      }

    }

  },

});
</script>

<style lang="scss" scoped>
.v-pre-order {

}

.v-pre-order__intro__txt {
  h1 {
    margin: 0;
    color: white;
    font-weight: 900;
  }
}

.v-certification__form {
  position: relative;

  &.is-sending-data {
    form {
      transition: opacity 500ms;
      opacity: .25;
      user-select: none;
      pointer-events: none;
    }
  }
}

.v-certification__form__waiting-message {
  padding-bottom: calc( var(--gutter) * 2);
}

.v-certification__response {
  text-align: center;
  min-height: calc(100vh - (var(--navigation-height) + calc( var(--gutter) * 12 )) );
}

</style>
