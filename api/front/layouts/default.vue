<template>
  <v-app>
    <NavBar />
    <v-main>
       <Nuxt />
    </v-main>
    <v-footer>
   <Footer />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>
