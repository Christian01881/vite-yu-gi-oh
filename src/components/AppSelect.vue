<template>
    <div id="Select">
        <div class="container d-flex align-items-center">
            <select name="Type" id="Type" v-model="store.search.archetype">
                <option selected value="">All</option>
                <option :value="archetype.archetype_name" v-for="archetype in store.Archetypes">{{ archetype.archetype_name }}</option>
            </select>
            <input class="ms-3" type="text" placeholder="Search Card" v-model="store.search.fname">
            <button class="ms-3" type="button" @click="$emit('searchCards')">Search</button>
            <button class="ms-3" type="button" @click="resetAll()">Reset</button>    
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store'

    export default {
        name: 'AppSelect',
        data(){
            return{
                store,
            }
        },
        methods:{
            getArcheotypes(){
                axios.get(store.URL + store.archetypesEndPoint).then((res) => {
                store.Archetypes = res.data;
                console.log(store.Archetypes);
                });
            },
            resetAll() {
            store.search.archetype = '';
            store.search.fname = '';
            this.$emit('resetAll');
        },
        },
        mounted() {
            this.getArcheotypes() 
            }
    }
    
</script>

<style lang="scss" scoped>
    #Select{
        width: 100%;
        height: 60px;
        background-color: #d48f38;
        margin-top: 70px;

        .container{
            height: 60px;
        }

        select{
            border: none;
            width: 120px;
            height: 30px;
            border-radius: 5px;
            padding-left: 10px;
        }
    }
</style>