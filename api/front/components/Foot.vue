<template>
  <v-footer>
    <v-col cols="12" md="4" align-self="start">
      <v-row>
        <v-col>
          <h1>SUSCRÍBETE A LA NEWSLETTER</h1>
        </v-col>
      </v-row>
      <v-row class="pb-0" align="center">
        <v-col cols="8" class="pr-0"
          ><v-text-field
            placeholder="Tu email"
            v-model="email"
            :rules="[rules.email]"
            outlined
            tile
            class="noBorderRadius"
          ></v-text-field
        ></v-col>
        <v-col cols="4" class="pl-0" align-self="start"
          ><v-btn
            outlined
            tile
            class="btnSize"
            :disabled="!sendBtnActive"
            @click="suscribeNewsletter"
            >ENVIAR</v-btn
          ></v-col
        >
        <v-col align-self="start" cols="12" class="pt-0 mt-0"
          ><v-checkbox v-model="privacyPolicyCheckBox">
            <template v-slot:label>
              <label>
                He leído y acepto la
                <a href="" @click.stop class="cleanLink">
                  Política de Privacidad</a
                >
              </label>
            </template>
          </v-checkbox></v-col
        >
      </v-row>
      <v-row> </v-row>
    </v-col>
    <v-col cols="12" md="4"></v-col>
    <v-col cols="12" md="4" align-self="start">
      <v-row>
        <v-col>
          <h1>AYUDA</h1>
        </v-col>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Foot',
  data() {
    return {
      email: '',
      privacyPolicyCheckBox: false,
      rules: {
        email: () => {
          return /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)
            ? true
            : 'Invalid email format'
        },
      },
    }
  },
  computed: {
    sendBtnActive() {
      return this.email !== '' && this.privacyPolicyCheckBox && this.rules.email
    },
  },
  methods: {
    suscribeNewsletter() {
      this.email = ''
      this.privacyPolicyCheckBox = false
    },
  },
}
</script>

<style lang="scss" scoped>
.noBorderRadius {
  border-radius: 0;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 56px;
}
.cleanLink {
  color: inherit;
}
</style>
