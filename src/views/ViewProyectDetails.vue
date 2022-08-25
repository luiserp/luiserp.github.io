<template>
    <div class="flex justify-between flex-col gap-8 lg:flex-row  mt-8">
        <div class="lg:w-4/5 overflow-hidden pt-6">
            <div class="p-3 inline-block relative -top-5 bg-black dark:bg-ping_dark_color dark:text-black text-white">
                <h3 class="ml-8 font-bold">Project</h3>
            </div>
            <div class="lg:container ml-2 lg:ml-6 bg-slate-50 dark:bg-primary_dark_color_theme px-4 py-2 lg:px-10 lg:py-6">
                <h3 class="text-md sm:text-lg lg:text-2xl">{{ project.title }}</h3>
                <h3 class="text-lg sm:text-xl lg:text-3xl font-bold mt-3">{{ project.short_desc }}</h3>
                <p class="mt-2 text-base sm:text-base text-justify">{{project.description}}</p>
                <p class="font-bold mt-2 block">Tech and tools:</p><p class="inline ml-2">{{project.tech}}</p>

                <div class="flex flex-wrap">
                    <a :href="project.github" target="_blank" class="btn">See it on Github</a>
                </div>
            </div>
        </div>
        <div class="mx-2 relative -top-5">
            <img :src="imageUrl" :alt="project.title" class="mx-auto max-w-sxs md:max-w-xl lg:ml-auto lg:mr-8">
        </div>
    </div>   
</template>

<!-- Extra script option for seting the name of the component -->
<script>
  export default {
    name: 'view_proyect',
    inheritAttrs: false,
    customOptions: {}
  }
</script>


<script setup>
    import { useStore } from 'vuex'
    import { useRoute } from 'vue-router'
    import { onMounted } from '@vue/runtime-core';

    const store = useStore()
    const route = useRoute()

    let project = store.getters.getprojectbyId(route.params.id)
    const imageUrl = new URL(project.img, import.meta.url).href

    // Here I use onMounted insted of onActivate because this componen won't be cached by keep-alive
    onMounted(()=>{
        document.title = `Project | ${project.title}`
    })
</script>


<style lang="scss" scoped>

</style>