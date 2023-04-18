<template>
  <div>
    <AppHeader />
    <AppContent />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
  export default {
    components: {
       AppHeader,
       AppContent,
    }
}
</script>

<style lang="scss" scoped>

</style>