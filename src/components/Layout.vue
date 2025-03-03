<script setup>
import { ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import CardSearch from './CardSearch.vue';
import ListJson from '../Json/Liste.json';

let search = ref('');
let check = ref(false);
let resultBol = ref(false);
let List = ref([]);
function Searching() {
    const regex = new RegExp(search.value, 'gi');
    List.value = search.value.length > 0 ? ListJson.filter((item) => regex.test(item.nom)) : [];
    if(List.value.length > 0) {
        resultBol.value = !resultBol.value;
    } else {
        resultBol.value = false;
    }
}
function show() {
    check.value =!check.value;
}
</script>
<template>
    <div class="">
        <div class="media card">
            <div class="col-span-3">Slogant</div>
            <div class="col-span-5">
                <div class="flex justify-around items-center">
                    <div class="">
                        <router-link :to="{ name: 'home' }" class="link-white">Acceuil</router-link>
                    </div>
                    <div class="">
                        <router-link :to="{ name: 'livre' }" class="link-white">Livre</router-link>
                    </div>
                    <div class="">
                        <router-link :to="{ name: 'contact' }" class="link-white">Contact</router-link>
                    </div>
                    <div class="">
                        <router-link :to="{ name: 'about' }" class="link-white">A propos</router-link>
                    </div>
                </div>
            </div>
            <div class="col-span-4">
                <div class="flex justify-around items-center">
                    <div class="relative">
                        <form action="" @submit.prevent>
                            <input type="text" class="input" v-model="search" @input="Searching"
                                :placeholder="search || 'Rechercher...'">
                        </form>
                        <div class="absolute">
                            <card-search :value="search" :find="List" :bool="resultBol"></card-search>
                        </div>
                    </div>
                    <div class="relative">
                        <i class="fas fa-user-circle link-white fa-lg cursor-pointer" @click="show"></i>
                        <div class="absolute -left-[60px] top-8 duration-1000" :class="check ? 'block' : 'hidden'">
                            <div class="card outline outline-white space-y-3 rounded-t-2xl">
                                <div class="flex justify-end items-center">
                                    <i class="fas fa-times -m-2 cursor-pointer hover:text-white" @click="check=false"></i>
                                </div>
                                <div>
                                    <router-link :to="{name:'connexion'}">CONNEXION</router-link>
                                </div>
                                <div>
                                    <router-link :to="{name:'inscrire'}">INSCRIRE</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="screen">
        <router-view></router-view>
    </div>
</template>