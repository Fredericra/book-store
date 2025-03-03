<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router';
import NotFound from './views/PageNotFound.vue';
import LayoutVue from './components/Layout.vue';

const route = useRoute();

</script>

<template>
 <div>
    <div v-if="route.name!=='not-found'">
      <LayoutVue />
    </div>
    <div class="" v-else>
      <NotFound />
    </div>
 </div>
</template>

<style scoped>
</style>
