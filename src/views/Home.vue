<template>
        <!-- Header -->
        <Header></Header>
    
    
        <!-- About Me -->
        <About></About>
    
         <!-- Work Experience -->
        <Experience></Experience>
    
        <!-- Tools and Skills -->
        <Tools></Tools>
    
        <!-- Latest Projects -->
        <Projects></Projects>
</template>

<script setup>
    import Header from '../components/header.vue' 
    import About from '../components/about_me.vue' 
    import Experience from '../components/work_experience.vue' 
    import Tools from '../components/tools_skills.vue' 
    import Projects from '../components/lates_projects.vue' 
    import { onMounted } from '@vue/runtime-core';

    onMounted(()=>{
        document.title = "Luis E. Reyes"
    })

</script>


<style scoped>
    
</style>