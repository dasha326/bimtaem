<template>
    <v-navigation-drawer
        app
        permanent
        width="260"
        class="app-navigation-menu"
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group  active-class="deep-purple--text text--accent-4">
          <v-list-item prepend-icon="mdi-home-city" title="Главная" value="home"></v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
      name: "the-sidebar",
      props: {
        drawer: null
      },
    }
</script>

<style scoped>

</style>