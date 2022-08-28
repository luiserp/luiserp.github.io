<template>
    <div class="flex justify-between gap-16 sm:flex-col ">
            <div class="lg:w-11/12">
                <div class="p-3 inline-block relative bg-black dark:bg-ping_dark_color text-white">
                    <h3 class="ml-8 font-bold">Latest projects</h3>
                </div>
                <div class="lg:container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  px-4 py-2 lg:px-12 lg:py-6">
    
                    <Card v-motion
                    :initial="{ opacity: 0, y: 100 }"
                    :visibleOnce="{ opacity: 1, y: 0, scale: 1 }"
                    :variants="{ custom: { scale: 2 } }"
                    :delay="index * 100"
                    v-for="(p, index) in projects" :key="p.id" :project="p"></Card>

                </div>
            </div>
        </div>
</template>

<script setup>
    import Card from '../components/card.vue'
    import { useStore } from 'vuex';

    const store = useStore()
    const projects = store.getters.getlatestprojects()

</script>

<style scoped>

</style>