<template>
    <v-app-bar    
      fixed
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      max-height="70px"
      :color="windowTop"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

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
        data(){ 
          return { 
            windowTop: false 
            };
             }, 
        mounted() { 
          window.addEventListener("scroll", () => { this.windowTop = window.scrollY > 0 ? 'blue' : 'transparent'; 
          }
          ); 
          } 
    }
</script>

<style lang="scss" scoped>
</style>