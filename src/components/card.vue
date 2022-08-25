
<template>
     <div class="flex flex-col justify-between bg-white dark:bg-secondary_dark_color_theme max-w-sm mx-2">
        <img :src="project.img" alt="" class="w-fit ">
        <div class="flex flex-col py-2">
            <h3 class="text-xl sm:text-lg font-bold">{{ project.title }}</h3>
            <p class="card-text text-base text-gray-500 dark:text-gray-400 text-justify">{{ project.description }}</p>
            <router-link :to="{ name: 'view_proyect', params: { id: project.id }}" class="w-full btn">View</router-link>
        </div>
    </div>
</template>

<script setup>
    defineProps(['project'])
    
</script>

<style scoped>
    .card-body{
        /* max-width: 16rem; */
        min-height: 16rem;
    }
    p.card-text {
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }        
</style>