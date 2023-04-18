import { reactive } from 'vue';

export const store = reactive({
    URL: 'https://db.ygoprodeck.com/api/v7/',
    cardsList:[],
    Archetypes:[],
    cardsEndPoint: 'cardinfo.php?',
    limit: 'num=50&offset=0',
    archetypesEndPoint: 'archetypes.php',
    search:{
        archetype:'',
        fname:'',
    }
})