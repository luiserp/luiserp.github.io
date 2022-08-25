
<template>
   <div class="flex justify-between gap-16 sm:flex-col my-8 ">
        <div class="lg:w-11/12">
            <div class="p-3 inline-block relative -top-5 bg-black dark:bg-ping_dark_color text-white">
                <h3 class="ml-8 font-bold">Projects</h3>
            </div>
            <div class="lg:container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ml-2 lg:ml-6 px-2 py-2 lg:px-12 lg:py-6">
                
                <Card v-for="p in projects" :key="p.id" :project="p"></Card>

            </div>
        </div>
    </div>
</template>

<script setup>
    import Card from '../components/card.vue'
    import { useStore } from 'vuex'
    import { onActivated } from '@vue/runtime-core';

    const store = useStore()
    let projects = store.state.projects


    onActivated(()=>{
        document.title = "Portfolio"
    })
</script>

<style scoped> 

</style>