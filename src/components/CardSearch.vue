<script setup>
import { ref } from 'vue';

 defineProps(['value','find','bool']);


</script>
<template>
    <div class="w-full"  v-if="find.length>0">
        <div class="card rounded-t-lg outline outline-neutral-600 w-auto">
            <div class="flex justify-end items-center hover:text-white">
                <i class="fas fa-times"></i>
            </div>
           <div class="" v-for="(value,index) in find" :key="index">
               <router-link @click='show' :to="{name:'livre-find',params:{id:value.id}}"  class="text-white">
                     <div class="flex items-start">
                         <div class="">
                            <i class="fas fa-book-open"></i>
                         </div>
                         <div class="text-left ml-4">
                            <p>{{ value.nom }}</p>
                         </div>
                     </div>
               </router-link>
               <hr class="m-1">
           </div>
        </div>
    </div>
</template>