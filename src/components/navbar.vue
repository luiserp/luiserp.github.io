<template>
        <nav class="py-2 px-3 sm:px-6 w-full bg-slate-100 ">
            <div class="flex items-center justify-between flex-wrap flex-shrink">
                <div class="text-xl">
                    <router-link :to="{name: 'home'}" class="font-bold text-xl">Luis E.</router-link>
                </div>
                <div class="block lg:hidden" @click="expand=!expand">
                    <button class="p-2 hover:scale-105 transition">
                        <div class="space-y-2">
                            <span class="block w-6 h-0.5 mt-1 bg-gray-600 transition ease-out duration-300 origin-center" :class="{ 'rotate-45 translate-y-2.5' : expand}"></span>
                            <span class="block w-6 h-0.5 mt-1 bg-gray-600 origin-center" :class="{ 'opacity-0' : expand }"></span>
                            <span class="block w-6 h-0.5 mt-1 bg-gray-600 transition ease-out duration-300 origin-center" :class="{ '-rotate-45 -translate-y-2.5 ': expand }"></span>
                        </div>
                    </button>
                </div>
                <div class="block w-full overflow-hidden h-0 transition duration-300 opacity-0 lg:opacity-100 lg:h-auto lg:flex lg:items-center lg:w-auto" :class="{ 'h-auto opacity-100': expand }">
                    <div  class="text-sm lg:flex-grow">
                        <router-link :to="{ name: 'home' }" class="text-center text-base font-bold hover:scale-105 transition  block lg:inline-block mt-2 mx-4 py-2 transition">Home</router-link> 
                        <router-link :to="{ name: 'portfolio' }" class="text-center text-base font-bold hover:scale-105 transition  block lg:inline-block mt-2 mx-4 py-2 transition">Portfolio</router-link> 
                        <router-link :to="{ name: 'cv' }" class="text-center text-base font-bold hover:scale-105 transition  block lg:inline-block mt-2 mx-4 py-2 transition">CV</router-link>
                    </div>
                </div>
            </div>
        </nav>
</template>

<script setup>
    import { ref } from 'vue'
    const expand = ref(false)

</script>

<style lang="scss" scoped>

</style>