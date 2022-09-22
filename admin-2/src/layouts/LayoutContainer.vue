<template>
    <Header/>
    <v-layout>
      <Sidebar/>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
</template>

<script>
import Header from "@/layouts/components/Header";
import Sidebar from "@/layouts/components/Sidebar";

export default {
  name: "LayoutContainer",
  components: {Header, Sidebar},
  data() {
    return {
      drawer: null,
      items: [
        {title: 'Home', icon: 'mdi-view-dashboard'},
        {title: 'About', icon: 'mdi-forum'},
      ],
    }
  },
}
</script>

<style scoped>

</style>