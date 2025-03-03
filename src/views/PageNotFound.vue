<script setup>
</script>
<template>
    <div class="h-screen bg-gradient-to-b from-purple-500 to-indigo-900">
        <div class="">
            <div class="h-screen flex justify-center items-center">
                <div>
                    <h1 class="text-gray-400 text-2xl -mt-10">Page not found</h1>
                    <router-link :to="{name:'home'}" class="text-center">
                        <p class="link text-gray-700">Home</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>