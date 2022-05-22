<template>
  <v-app-bar
    fixed
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    max-height="70px"
    :color="windowTop"
  >
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-top-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon color="black" dark v-bind="attrs" v-on="on">
        </v-app-bar-nav-icon>
      </template>
      <v-card>
        <v-btn icon dark color="black" @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-list three-line>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle
                >Set the content filtering level to restrict apps that can be
                downloaded</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle
                >Require password for purchase or use password to restrict
                purchase</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>

    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      windowTop: false,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
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
