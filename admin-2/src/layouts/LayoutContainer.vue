<template>
    <v-app>
        <v-sheet
                height="100%"
                class="overflow-hidden"
                style="position: relative;"
        >
            <v-container class="fill-height">
                <Header/>
                <router-view></router-view>
            </v-container>

            <v-navigation-drawer
                    v-model="drawer"
                    absolute
                    temporary
            >
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>John Leider</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense>
                    <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
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