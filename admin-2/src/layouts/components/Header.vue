<template>
    <v-app>
        <v-app-bar>
            <v-row
                    align="center"
                    justify="center"
            >
                <v-btn
                        color="pink"
                        dark
                        @click.stop="drawer = !drawer"
                >
                    Toggle
                </v-btn>
            </v-row>
        </v-app-bar>
    </v-app>
</template>

<script>
    export default {
        name: "the-header"
    }
</script>

<style scoped>

</style>