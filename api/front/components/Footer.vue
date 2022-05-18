<template>
  <v-footer>
    <v-row no-gutters v-if="$vuetify.breakpoint.smAndDown">
      <v-col cols="12">
        <h1>SUSCRÍBETE A LA NEWSLETTER</h1>
        <v-row>
          <v-text-field label="Tu email" solo class="pt-3 px-0"></v-text-field>
          <v-btn height="48px" class="mt-3" color="white">Enviar</v-btn>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-card class="pa-2" outlined> Second, but last </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="pa-2" outlined> Third, but first </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters v-else>
      <v-col cols="4">
        <h1>SUSCRÍBETE A LA NEWSLETTER</h1>
        <v-form v-model="valid">
          <v-row>
            <v-col>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-btn>Enviar</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col cols="4">
        <v-card class="pa-2" outlined> Second, but last </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="pa-2" outlined> Third, but first </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: ['mdi-facebook', 'mdi-instagram'],
  }),
}
</script>

<style lang="scss" scoped></style>
