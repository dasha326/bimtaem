<template>
  <header class="header">
    <img :alt="$store.state.siteName" src="../assets/logo.png">
    <nav class="main-menu">
      <div class="main-menu__item">
        <router-link class="main-menu__link" v-for="(item, index) in links" :key="index"  :to="{name: item.name}">{{item.meta.title}}</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      links: this.$router.options.routes.filter(item => item.meta.inMenu)
    }
  }
}
</script>

<style lang="scss" scoped>
  .header{
    img{
      width: 100%;
    }
  }
</style>