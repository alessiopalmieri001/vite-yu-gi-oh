<script >
    import MyAppHeader from './components/MyAppHeader.vue';
    import MyAppMain from './components/MyAppMain.vue';
    import MyAppFooter from './components/MyAppFooter.vue';

        export default{
            data() {
                return {

                };
            },
            components: {
                MyAppHeader,
                MyAppMain,
                MyAppFooter
            },
            methods: {

            }
        }
</script>

<template>
    <h1>
        Mia app
    </h1>
    <MyAppHeader />
    <MyAppMain />
    <MyAppFooter />
</template>

<style lang="scss" scoped>
@use "assets/scss/main.scss" as *;
@import "assets/scss/partials/reset.scss"
</style>
