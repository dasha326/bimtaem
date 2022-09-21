<template>
  <img :alt="$store.state.siteName" src="../assets/logo.png">
  <img alt="" src="../assets/logo.png">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>
  img{
    width: 100%;
  }
</style>