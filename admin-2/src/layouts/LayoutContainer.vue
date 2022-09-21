<template>
    <v-app>
        <v-sheet
                height="100%"
                class="overflow-hidden"
                style="position: relative;"
        >
            <Header/>

            <v-container class="fill-height">
                <router-view></router-view>
            </v-container>
        </v-sheet>
    </v-app>
</template>

<script>
    import Header from "./components/Header";
    export default {
        name: "SideBarPage",
        components: {Header},
        data () {
            return {
                drawer: null,
                items: [
                    { title: 'Home', icon: 'mdi-view-dashboard' },
                    { title: 'About', icon: 'mdi-forum' },
                ],
            }
        },
    }
</script>

<style scoped>

</style>