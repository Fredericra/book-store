<script setup>
import { useRoute } from 'vue-router';
import List from "@/Json/Liste.json";
import { ref,computed } from 'vue';

const route = useRoute();
const Livre = computed(()=>{
    return List.filter(livre=> livre.id === parseInt(route.params.id));
})


</script>
<template>
    <div>
        {{ Livre }}
    </div>
</template>