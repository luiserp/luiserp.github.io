<template>
<div>
    
        <!-- Header -->
        <div class="lg:pl-16 flex items-center align-middle flex-col gap-4 sm:flex-row mt-36 w-11/12 mx-auto lg:w-full">
    
            <img src="../assets/profile2.jpg" alt="profile picture" class="rounded-full h-44 w-44">
    
            <div class="ml-2  py-0 px-4 lg:pl-12">
                <h3 class="text-2xl lg:text-3xl text-gray-600 dark:text-slate-400">Hi! I'm Luis Enrique</h3>
                <h3 class="text-3xl lg:text-4xl sm:text-left font-bold mt-3">Welcome to my portfolio</h3>
            </div>
        </div>
    
    
        <!-- About Me -->
        <div class="mt-44 bg-slate-100 dark:bg-primary_dark_color_theme">
            <div class="p-3 inline-block relative bg-black dark:bg-ping_dark_color dark:text-black text-white">
                <h3 class="ml-8 font-bold">About me</h3>
            </div>
            <div class="container  px-4 py-2 lg:px-12 lg:py-6">
                <div class="mt-5">
                    <h3 class="text-lg sm:text-xl font-bold mt-3">Overview </h3>
                    <p class="mt-2 text-base sm:text-lg text-justify">I'm Luis Enrique Reyes Pérez, a Computer Sciences Enginier graduated at The University of Informatics Sciences in Havana Cuba (Honour Student). I'm always looking something new to learn and the perfect situations for apliying it. I like to see how a project grow organically, according with the needs and requirements. I have used a lot of technologies and tools in my conding adventures and I realized that Artificial Intelligence and Web development are my favorite fields of computer science so I focused on them.
                    </p>
                </div>
    
                <div class="mt-5">
                    <h3 class="text-lg sm:text-xl font-bold mt-3">Web developer</h3>
                    <p class="mt-2 text-base sm:text-lg text-justify">The web is the most used platform today, it puts millions of people and companies in contact. Every year new technologies and frameworks emerge that facilitate development and add new features that improve the user experience. As a web developer I have developed applications for the institutions I have worked for using different programming languages and frameworks. I have experience with frameworks such as Angular and Vue on the frontend and Django (Python), Flask (Python), Express (NodeJs) and Slim (PHP) on the backend.
                    </p>
                </div>
    
                <div class="mt-5">
                    <h3 class="text-lg sm:text-xl font-bold mt-3">Artificial intelligence researcher </h3>
                    <p class="mt-2 text-base sm:text-lg text-justify">I love mathematics and probability and as a computer engineer I decided that artificial intelligence would be one of the branches of computer science in which to specialize. The availability of data and the various options of tools to process them have made this field develop exponentially. Using tools like sklearn, tensorflow and keras I have developed models to solve various problems, from image classification with transfer of learning to natural language processing and computer vision. I still have a lot to learn but everything I lack I make up for with great curiosity.
                    </p>
                </div>
            </div>
        </div>
    
         <!-- Work Experience -->
        <div class="flex justify-between gap-16 sm:flex-col mt-12">
            <div class="lg:w-11/12">
                <div class="p-3 inline-block relative -top-5 bg-black dark:bg-ping_dark_color dark:text-black text-white">
                    <h3 class="ml-8 font-bold">Work Experience</h3>
                </div>
            <div class="container grid grid-cols-1 sm:grid-cols-2 gap-8   px-4 py-2 lg:px-12 lg:py-6">
    
                <div class="ml-2 md:ml-12 mt-4">
                    <h3 class="text-xl font-bold">Technological Science Park | 2022 - present</h3>
                    <p class="text-lg font-bold text-gray-600 dark:text-slate-400 mt-2"> Software Developer</p>
                    <ul class="list-disc ml-6">
                        <li>I am in charge of developing the REST API necessary for the integration of the project's data in third-party applications.</li>
                        <li>I documented the API usuing OpenAPI Specufication and used JWT to authenticate users</li>
                        <li>Made with Slim Framework, php, Mysql</li>
                    </ul>
                </div>
                <div class="ml-2 md:ml-12 mt-4">
                    <h3 class="text-xl font-bold">Cuban website monitor | 2021 - 2022</h3>
                    <p class="text-lg font-bold text-gray-600 dark:text-slate-400 mt-2"> Software Developer</p>
                    <ul class="list-disc ml-6">
                        <li>I developed, deployed and maintain an automation system for the issuance of newsletters</li>
                        <li>Made with NodeJS, Express</li>
                    </ul>
                </div>
    
                </div>
            </div>
        </div>
    
        <!-- Tools and Skills -->
        <div class="flex justify-between gap-16 sm:flex-col mt-12 bg-slate-100 dark:bg-primary_dark_color_theme">
            <div class="lg:w-11/12">
                <div class="p-3 inline-block relative bg-black dark:bg-ping_dark_color dark:text-black text-white">
                    <h3 class="ml-8 font-bold">Tools and Skills</h3>
                </div>
                <div class="container grid grid-cols-1 md:grid-cols-2 gap-2   px-4 pr-2 lg:pr-12 lg:py-6">
    
                    <div>
                        <img src="../assets/tools.jpg" alt="Tools and Skills" class="mx-auto inline-block h-auto sm:max-h-80">
                    </div>
    
                    <div class="flex justify-center items-center gap-2">
    
                        <ul class="list-disc ml-6">
                            <li class="text-lg">Artificial Intelligence</li>
                            <li class="text-lg">Machine learning</li>
                            <li class="text-lg">Natural Language Processing</li>
                            <li class="text-lg">Computer vision</li>
                            <li class="text-lg">Web development</li>
                        </ul>
    
                        <ul class="list-disc ml-6">
                            <li class="text-lg">Tensorflow</li>
                            <li class="text-lg">Keras</li>
                            <li class="text-lg">Angular and Vue</li>
                            <li class="text-lg">Django, Flask and Express</li>
                            <li class="text-lg">MySQl, Postgress and SQlite</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
            <!-- Latest Projects -->
        <div class="flex justify-between gap-16 sm:flex-col mt-12">
            <div class="lg:w-11/12">
                <div class="p-3 inline-block relative -top-5 bg-black dark:bg-ping_dark_color dark:text-black text-white">
                    <h3 class="ml-8 font-bold">Latest projects</h3>
                </div>
                <div class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  px-4 py-2 lg:px-12 lg:py-6">
    
                    <Card v-motion
                    :initial="{ opacity: 0, y: 100 }"
                    :visibleOnce="{ opacity: 1, y: 0, scale: 1 }"
                    :variants="{ custom: { scale: 2 } }"
                    :delay="index * 100"
                    v-for="(p, index) in projects" :key="p.id" :project="p"></Card>

                </div>
            </div>
        </div>
</div>

    
</template>

<script setup>
    import Card from '../components/card.vue'
    import { useStore } from 'vuex';
    import { onMounted } from '@vue/runtime-core';

    onMounted(()=>{
        document.title = "Luis E. Reyes"
    })

    const store = useStore()
    const projects = store.getters.getlatestprojects()

</script>


<style scoped>
    
</style>