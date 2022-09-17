<template>
  <v-app>
    <component :is="layoutTemplate">
      <router-view/>
    </component>
  </v-app>
</template>

<script>
import LayoutContainer from "./layouts/LayoutContainer";
import LayoutFull from "./layouts/LayoutFull";
import router from './router'

export default {

  name: 'App',
  components: {LayoutFull, LayoutContainer},

  data: () => ({
    isAuthorized: true,
    layoutTemplate: 'LayoutFull'
  }),
  created() {
    router.beforeEach((to, from, next) => {
      if(to.meta.layout) this.layoutTemplate = to.meta.layout;
      next()
    })
  }
}
</script>
