<template>
  <v-container>
    <v-row>
      <v-col class="ma-0 pa-0">
        <Carousel />
      </v-col>
    </v-row>
    <v-row>
      <v-col> Hola </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss">
@media (min-width: 960px) {
  .container {
    max-width: 100%;
  }
}
</style>
