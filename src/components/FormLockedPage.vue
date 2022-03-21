<template>
  <form
      class="v-form-locked-page lo-form lo-g-box lo-g-box--centred lo-g-gutter--half lo-g-row"
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

      <div
          class="v-form-locked-page__toggle-passwords lo-ui-button"
          @click="togglePasswordView"
      >
        <svg v-if="showPassword"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"/></svg>
        <svg v-else               xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>
      </div>
    </div>

    <button
        class="v-form-locked-page__validate lo-form__validate"
        @click="validateForm"
    ><span>{{ buttonText.length > 0 ? buttonText : `accéder aux composant de la montre ${form_id}` }}&nbsp;</span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg></button>
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
    },

    buttonText: {
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
  },

  methods: {
    togglePasswordView(e: Event) {
      e.preventDefault()
      this.showPassword = !this.showPassword
    },

    validateForm(e: Event) {
      e.preventDefault()
      this.$emit("validate", {id: this.withFormId ? this.form_id : this.logID, password: this.form_passsword} as IValidateData)
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
  margin-left: var(--gutter--half);
  background: var(--ui-border-color);
  border-radius: 100%;
  border: none;

  > svg {
    fill: white;
  }
}
</style>
