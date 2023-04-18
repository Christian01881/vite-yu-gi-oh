<template>
    <div class="CPM-card flex-column mt-5 px-3">
        <div>
            <img :src="image" alt="">
        </div>
        <div class="orange">
            <p class="text-center pt-3 fw-bold text-white">{{ name }}</p>
            <p class="text-center">{{ archetype }}</p> 
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'AppSingleCard',
        props: {
            image:{
                type: String,
            },
            name: {
                type: String,
            },
            archetype:{
                type: String,
                default: 'N/A Archetype'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .CPM-card{
        max-width: calc(100% / 5);
        min-height: calc(100vw / 5);
        background-color: white;
    }

    img{
        width: 100%;
        &:hover{
            scale: 1.1;
            cursor: pointer;
        }
    }

    .orange{
        background-color: #d48f38;
        min-height: 130px;
    }

    @media screen and (max-width: 992px) {
        .CPM-card{
            max-width: calc(100% / 3);
            min-height: calc(100vw / 3);
        }
    }

    @media screen and (max-width: 768px) {
        .CPM-card{
            max-width: calc(100% / 2);
            min-height: calc(100vw / 2);
        }
    }
</style>