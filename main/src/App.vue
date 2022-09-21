<template>
  <component :is="layoutTemplate">
    <router-view/>
  </component>
</template>
<script>
import FullLayout from "./layouts/FullLayout";
import SidebarLayout from "./layouts/SidebarLayout";
import router from './router'
  export default {
    name: 'App',
    components: {FullLayout, SidebarLayout},

    data: () => ({
      isAuthorized: true,
      layoutTemplate: 'FullLayout'
    }),
    created() {
      router.beforeEach((to, from, next) => {
        if(to.meta.layout) this.layoutTemplate = to.meta.layout;
        next()
      })
    }
  }
</script>
<style>

</style>
