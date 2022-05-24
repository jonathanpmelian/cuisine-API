<template>
  <v-footer>
    <v-row class="mx-3">
      <v-col cols="12" sm="12" md="4">
        <v-row>
          <v-col>
            <h1>SUSCRÍBETE A LA NEWSLETTER</h1>
          </v-col>
        </v-row>
        <v-row no-gutters class="mt-6 test2">
          <v-col cols="9">
            <v-text-field label="Tu email" outlined></v-text-field>
          </v-col>
          <v-col>
            <v-btn height="48px" width="70px" color="white">Enviar</v-btn>
          </v-col>
        </v-row>
        <v-row class="test1 mt-0 pa-0 ma-0">
          <v-col class="test2">
            <v-checkbox
              v-model="checkbox"
              :label="`He leído y acepto la Política de privacidad`"
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <h6 style="margin-botton: 0 font-size: 12px; font-weight: 400">
            Protección de datos
          </h6>
          <h6 style="font-size: 12px; font-weight: 300">
            El responsable del tratamiento es SOLIS ROBAINA SL. La finalidad de
            la recogida de datos es la de poder atender sus cuestiones, sin
            ceder sus datos a terceros. Tiene derecho a saber qué información
            tenemos sobre usted, corregirla o eliminarla tal y como se explica
            en nuestra Política de Privacidad.
          </h6>
        </v-row>
        <v-row>
          <v-col>
            <ul>
              <v-row>
                <v-col class="nowrap">
                  <li>
                    <a href="/politica-de-cookies">POLITICA DE COOKIES</a>
                  </li>
                </v-col>
                <v-col class="nowrap">
                  <li><a href="">AVISO LEGAL</a></li>
                </v-col>
                <v-col class="nowrap">
                  <li><a href="">POLÍTICA DE PRIVACIDAD</a></li>
                </v-col>
                <v-col class="nowrap">
                  <li><a href="">INFORMACIÓN DEL SERVICIO</a></li>
                </v-col>
                <v-col class="nowrap">
                  <li><a href="">TÉRMINOS DEL SERVICIO</a></li>
                </v-col>
                <v-col class="nowrap">
                  <li><a href="">POLÍTICA DE REEMBOLSO</a></li>
                </v-col>
              </v-row>
            </ul>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
        style="display: flex; align-items: center; justify-content: center"
      >
        <a href="/">
          <img :src="require('~/assets/RESTAURANTE3.png')" height="300px"
        /></a>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-row>
          <h1>AYUDA</h1>
        </v-row>
        <v-row class="mt-6">
          <p class="texto">
            Seguro que la respuesta a tu pregunta se encuentra en nuestras
            <a href="" title="Preguntas frecuentes">preguntas frecuentes</a>.
            <br />
            <br />
            Si tienes alguna duda sobre los pedidos de la tienda online puedes
            escribirnos o llamarnos:
          </p>
        </v-row>
        <v-row>
          <p>
            <strong> restaurantecuevapirata@gmail.com </strong>
          </p>
        </v-row>
        <v-row>
          <p>
            <strong> 669 966 499 </strong>
          </p>
        </v-row>
        <v-row>
          <p>
            <strong> * Horario: de lunes a viernes (9:00 - 21:00) </strong>
          </p>
        </v-row>
        <v-row justify="center" class="mt-10">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 black--text"
            icon
            tile
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-row>
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

<style lang="scss" scoped>
.test1 {
  background-color: blue;
}
.test2 {
  background-color: red;
}
a {
  text-decoration: none;
  color: black;
  font-size: 12px;
  font-weight: bold;
}
li {
  list-style: none;
}
.nowrap {
  white-space: nowrap;
}
</style>
