<template>
    <Header/>
    <v-container>
        <router-view></router-view>
    </v-container>
</template>

<script>
import Header from "@/layouts/components/Header";

export default {
  name: "FullPage",
  components: {Header},
}
</script>

<style scoped>

</style>