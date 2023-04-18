<template>
    <div>
        <AppSelect @search-cards="getDefaultCards()" @reset-all="getDefaultCards()"/>
    </div>
    <div id="main">
        <div id="content" class="container d-flex flex-wrap">
            <AppSingleCard v-for="card in store.cardsList" :name="card.name" :image='card.card_images[0].image_url' :archetype="card.archetype"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';
import AppSingleCard from './AppSingleCard.vue';
import AppSelect from './AppSelect.vue';
    export default {
        name: 'AppContent',
        components: {
            AppSingleCard,
            AppSelect,
        },
        data(){
            return{
                store,
            }
        },
        methods: {
            getCards(){
                store.search.fname.toString().toLowerCase();
                let params = {}
                for (let key in store.search) {
                if (store.search[key]) {
                    params[key] = store.search[key]
                    }
                }
                axios.get(store.URL + store.cardsEndPoint + store.limit, { params }).then((res) => {
                    store.cardsList = res.data.data;
                    console.log(store.cardsList);
                })
            },
            getDefaultCards(){
                this.getCards();
            }
        },
        created(){
            this.getCards();
        }
    }
</script>

<style lang="scss" scoped>
    #main{
        width: 100%;
        height: calc(100vh - 130px);
        background-color: #d48f38;

        #content{
            background-color: white;
            width: 100%;
            height: 100%;
            overflow: auto;
        }
    }
</style>