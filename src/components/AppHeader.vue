<template>
    <div id="header">
        <h1>Yu-Gi-Oh API</h1>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>

<style lang="scss" scoped>
    #header{
        width: 100%;
        height: 70px;
        background-color: white;
        position: fixed;
        top: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>