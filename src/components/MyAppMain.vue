<script>
import { store } from '../storecard';
import singolCard from './singolCard.vue';
export default {
    data() {
        return {
            store,
        };
    },
    components: {
        singolCard
    },
    methods: {
    },
}
</script>

<template>
    <main class="bg-warning">
        <div class="container">
            <form class="py-4">
                <select v-model="store.searchArchetype" @change="$emit('searched')">

                    <option :value="type.archetype_name" 
                    v-for="(type, a) 
                    in store.archetype"
                    :key="a">
                    
                        {{ type.archetype_name }}
                
                    </option>

                </select>
            </form>
            <div class="bg-light-subtle p-4">
                <section class="bg-dark text-light p-2 fw-bold container">
                    Founded n°{{ store.yugiohCards.length }} card
                </section>
                <section class="container">
                    <div class="row justify-content-center ">
                        <singolCard 
                        v-for="(elem, i) in store.yugiohCards" 
                        :key="i"
                        :card="elem"/>
                    </div>
                </section>
            </div>
        </div>
        
    </main>
</template>

<style lang="scss">

</style>
