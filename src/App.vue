<script >
    import MyAppHeader from './components/MyAppHeader.vue';
    import MyAppMain from './components/MyAppMain.vue';
    import MyAppFooter from './components/MyAppFooter.vue';
    import axios from 'axios';
    import { store } from '../src/storecard';

        export default{
            data() {
                return {
                    store,
                };
            },
            components: {
                MyAppHeader,
                MyAppMain,
                MyAppFooter
            },
            methods: {
                searchCardsByArchetype(){
                    axios.get(this.store.yugiohUrl, {
                        params: {
                            archetype: this.store.searchArchetype
                        }
                    })
                    .then((response)=>{
                        console.log(response.data.data);
                        this.store.yugiohCards = response.data.data
                    })
                },
                
                getAllCards(){
                    axios.get(this.store.yugiohUrl)
                    .then((response)=>{
                        console.log(response.data.data);
                        this.store.yugiohCards = response.data.data
                    })
                },
                
                getAllArchetypes(){
                    axios.get(this.store.archetypeUrl)
                    .then((response)=>{
                    console.log(response.data);
                    this.store.archetype = response.data;
                })
                },
            },
            created(){
                this.getAllCards();
                this.getAllArchetypes();
            },
            
        }
</script>

<template>
    <MyAppHeader />
    <MyAppMain  @searched="searchCardsByArchetype()"/>
    <MyAppFooter />
</template>

<style lang="scss" scoped>
@use "assets/scss/main.scss" as *;
@import "assets/scss/partials/reset.scss"
</style>
