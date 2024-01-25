import { reactive } from 'vue';

export const store = reactive({
    yugiohCards: [],
    archetype: [],
    searchArchetype: '',
    yugiohUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0',
    archetypeUrl:'https://db.ygoprodeck.com/api/v7/archetypes.php',
});
