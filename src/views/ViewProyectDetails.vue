<template>
        <div class="flex justify-between flex-col gap-16 sm:flex-row  mt-8 lg:mt-0">
        <div class="lg:w-4/5">
            <div class="p-3 inline-block relative -top-5 bg-black text-white">
                <h3 class="ml-8 font-bold">Project</h3>
            </div>
            <div class="container ml-2 lg:ml-6 bg-slate-50 px-4 py-2 lg:px-24 lg:py-6">
                <h3 class="text-md sm:text-lg lg:text-2xl">{{ project.title }}</h3>
                <h3 class="text-lg sm:text-xl lg:text-3xl font-bold mt-3">{{ project.short_desc }}</h3>
                <p class="mt-2 text-sm sm:text-base text-justify">{{project.description}}</p>
                <p class="font-bold mt-2 block">Tech and tools:</p><p class="inline ml-2">{{project.tech}}</p>

                <div class="flex flex-wrap">
                    <a :href="project.github" target="_blank" class="bg-gray-50 hover:bg-gray-800 text-center hover:text-white font-bold border-2 border-black block lg:inline-block mt-2 mr-4 px-3 py-1 transition">See it on Github</a>
                </div>
            </div>
        </div>
        <div class="mx-2 relative -top-5">
            <img :src="imageUrl" :alt="project.title" class="mx-auto lg:max-w-2xl lg:ml-auto lg:mr-8">
        </div>
    </div>   
</template>

<script setup>
    import { useStore } from 'vuex'
    import { useRoute } from 'vue-router'
    import { onMounted } from '@vue/runtime-core';

    const store = useStore()
    const route = useRoute()

    let project = store.getters.getprojectbyId(route.params.id)
    const imageUrl = new URL(project.img, import.meta.url).href


    onMounted(()=>{
        document.title = `Project | ${project.title}`
    })
</script>


<style lang="scss" scoped>

</style>