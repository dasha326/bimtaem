<template>
    <v-app-bar
        color="deep-purple accent-4"
        dark
        prominent
    >

<!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->

      <v-toolbar-title>Мой сайт</v-toolbar-title>

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
  name: "TheHeader",
  data: () => ({
    drawer: true,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style scoped>

</style>