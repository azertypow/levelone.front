<template>
  <form
      class="v-form-locked-page lo-g-box lo-g-box--centred lo-g-gutter--half lo-g-row"
      ref="FormElement"
      autocomplete="off"
  >
    <input
        v-if="withFormId"
        autocomplete="off"
        class="v-form-locked-page__id"
        v-model="form_id"
        type="text"
        placeholder="identifiant"
    >

    <div
        class="v-form-locked-page__passwords--box"
    >
      <input
          autocomplete="off"
          class="v-form-locked-page__passwords"
          v-model="form_passsword"
          :type="showPassword ? 'text' : 'password'"
          placeholder="mot de passe"
      >

      <button
          class="v-form-locked-page__toggle-passwords"
          @click="togglePasswordView"
      >{{buttonPasswordText}}</button>
    </div>

    <button
        class="v-form-locked-page__validate-form"
        @click="validateForm"
    >accéder aux composant de la montre {{form_id}} -></button>
  </form>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import {useStore} from "vuex"
import {key} from "@/store"

export default defineComponent({
  name: 'FormLockedPage',

  props: {
    logID: {
      required: false,
      type: String,
      default: "",
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.setTimeout(() => {
        if (this.$refs.FormElement instanceof HTMLFormElement) {
          this.form_id = ""
          this.form_passsword = ""
          this.$refs.FormElement.reset()
          this.$refs.FormElement.style.opacity = "1"
        }
      }, 1000)
    })
  },

  components: {
  },

  data() {
    return {
      store: useStore(key),
      showPassword: false,
      form_id: "",
      form_passsword: "",
    }
  },

  computed: {

    withFormId(): boolean {
      return this.logID.length === 0
    },

    buttonPasswordText(): string {
      return this.showPassword ? "cacher le mot de passe" : "afficher le  mot de passe"
    }
  },

  methods: {
    togglePasswordView(e: Event) {
      e.preventDefault()
      this.showPassword = !this.showPassword
    },

    validateForm(e: Event) {
      e.preventDefault()
      this.$emit("validate", {id: this.form_id, password: this.form_passsword} as IValidateData)
    }
  }

});

export interface IValidateData {
  id:       string,
  password: string,
}

</script>

<style lang="scss" scoped>
.v-form-locked-page {
  opacity: 0;
  transition: opacity ease-in-out 500ms;
  margin: auto;
  width: 100%;
  max-width: 30em;

  > * {
    width: 100%;
    display: block;
    margin: var(--gutter--half);
  }
}

.v-form-locked-page__passwords--box {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}

.v-form-locked-page__passwords {
  width: 100%;
  flex-shrink: 1;
}

.v-form-locked-page__toggle-passwords {
  width: auto;
  flex-shrink: 0;
  margin-left: var(--gutter);
}
</style>
