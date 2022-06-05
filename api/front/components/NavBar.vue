<template>
  <v-app-bar fixed elevate-on-scroll :color="windowTop">
    <v-toolbar-title>Title</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      windowTop: 'transparent',
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.windowTop = window.scrollY > 0 ? 'blue' : 'transparent'
    })
  },
}
</script>

<style lang="scss" scoped></style>
