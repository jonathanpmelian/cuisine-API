<template>
      <v-row no-gutters v-if="$vuetify.breakpoint.smAndDown">
        <v-col cols="12">
          <v-row>
          <h1>SUSCRÍBETE A LA NEWSLETTER</h1>
          </v-row>
          <v-row
          class="mt-4">
              <v-text-field    
            label="Tu email"
            solo
            class="pt-3"
              ></v-text-field>
               <v-btn 
               height="48px" 
               class="mt-3" 
               color="white"
               >Enviar
               </v-btn>
          </v-row>
          <v-row
          class="mt-0"
          >
           <v-checkbox
             v-model="checkbox"
             :label="`He leído y acepto la Política de privacidad`"
           ></v-checkbox>
          </v-row>
          <v-container>
          <v-row>
            <h6 style="margin-botton: 0 font-size: 12px; font-weight: 400">Protección de datos</h6>
            <h6 style="font-size: 12px; font-weight: 300;">
              El responsable del tratamiento es SOLIS ROBAINA SL. La finalidad de la recogida de datos es la de poder atender sus cuestiones, sin ceder sus datos a terceros. Tiene derecho a saber qué información tenemos sobre usted, corregirla o eliminarla tal y como se explica en nuestra Política de Privacidad. 
            </h6>
          </v-row>
          </v-container>
          <v-container>
          <v-row>
            <ul class="lista">
              <li><a href="">POLITICA DE PRIVACIDAD</a></li>
              <li><a href="">AVISO LEGAL</a></li>
              <li><a href="">POLÍTICA DE PRIVACIDAD</a></li>
              <li><a href="">INFORMACIÓN  DEL SERVICIO</a></li>
              <li><a href="">TÉRMINOS DEL SERVICIO</a></li>
              <li><a href="">POLÍTICA DE REEMBOLSO</a></li>
            </ul>
          </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" style="display: flex; align-items: center; justify-content: center">
                <nuxt-link class="link" to="/">
            <img 
            :src="require('~/assets/RESTAURANTE3.png')" 
            height="300px"
            >
        </nuxt-link>
      
        </v-col>
        <v-col cols="12">
          <v-row>
            <h1>AYUDA</h1>
            <p class="texto"> 
              Seguro que la respuesta a tu pregunta se encuentra en nuestras
              <a href="" title="Preguntas frecuentes">preguntas frecuentes</a>.
            <br>
            <br>
            Si tienes alguna duda sobre los pedidos de la tienda online puedes escribirnos o llamarnos:
            </p>
            </v-row>
            <v-row>
            <p>
              <strong>
                restaurantecuevapirata@gmail.com
                </strong>
            </p>
            </v-row>
            <v-row>
            <p>
              <strong>
                669 966 499
              </strong>
            </p>
            </v-row>
            <v-row>
            <p>
              <strong>
            * Horario: de lunes a viernes (9:00 - 21:00)
              </strong>
            </p>
            </v-row>
        </v-col>
      </v-row>
     <!--<v-row no-gutters v-else >
        <v-col cols="4">
          <h1>SUSCRÍBETE A LA NEWSLETTER</h1>
          <v-text-field    
            label="Tu email"
            solo
            class="pt-3 px-0"
                ></v-text-field>
               <v-btn height="48px" class="mt-3" color="white">Enviar</v-btn>
        </v-col>
        <v-col cols="4" style="display: flex; align-items: center; justify-content: center">
         <nuxt-link 
           class="link" 
           :src="require('~/assets/RESTAURANTE3.png')" 
            height="300px"
            to="/">
          </nuxt-link>
        </v-col>
        <v-col cols="4">
          <v-card
            class="pa-2"
            outlined
          >
            Third, but first
          </v-card>
        </v-col>
      </v-row> -->
</template>

<script>
    export default {
        name: "Footer",
       data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-instagram',
      ]
    }) 
    }
</script>

<style lang="scss" scoped>
.lista a {
  text-decoration: none;
  color: black;
}
ul {
  list-style: none;
}
.texto a {
    text-decoration: none;
    color: black;
} 
</style>