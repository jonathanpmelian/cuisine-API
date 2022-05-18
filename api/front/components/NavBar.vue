<template>
  <v-app-bar fixed elevate-on-scroll :color="navBarColor">
    <v-row>
      <v-col>Title</v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navBarColor: 'transparent',
    }
  },
  mounted() {
    window.onscroll = () =>
      (this.navBarColor = window.scrollY > 0 ? 'blue' : 'transparent')
  },
}
</script>

<style lang="scss" scoped></style>
