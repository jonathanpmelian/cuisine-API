<template>
  <v-app>
    <NavBar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
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

<style lang="scss" scoped></style>
