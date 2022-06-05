<template>
  <v-app>
    <NavBar />
    <v-main>
      <Nuxt />
    </v-main>
    <Foot />
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
