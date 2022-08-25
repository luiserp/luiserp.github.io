<template>

    <div>
        <div class="p-3 inline-block relative -top-5 bg-black dark:bg-ping_dark_color text-white mt-8">
            <h3 class="ml-8 font-bold">Curriculum Vitae</h3>
        </div>
        <div class="lg:w-4/5 overflow-hidden">
            <div class="lg:container ml-2 lg:ml-6 bg-slate-50 dark:bg-primary_dark_color_theme px-4 py-2 lg:px-24 lg:py-6">
                <h3 class="font-bold text-lg">Skills Summary</h3>
                <ul class="list-disc ml-2 md:ml-12 mt-2">
                    <li>Software engineer. Specialized in artificial intelligence and web development.</li>
                    <li>Work as a software developer providing solutions to the Cuban website monitor project.</li>
                    <li>Experience in different programming languages and development technologies.</li>
                    <li>Ability to take machine learning and deep learning projects from data collection, processing and analysis to model creation and deployment.</li>
                    <li>Excellent technical skills, learning ability and curiosity</li>
                </ul>
            </div>
        </div>
        <div class="lg:w-4/5 overflow-hidden mt-8 ">
            <div class="lg:container ml-2 lg:ml-6 bg-slate-50 dark:bg-primary_dark_color_theme px-4 py-2 lg:px-24 lg:py-6">
                <h3 class="font-bold text-lg">Education</h3>
                <p class="ml-2 md:ml-12 inline-block"><strong>2017 - 2022</strong> B.S in Computer Sciences (Honour Student “Título de Oro”, Grade: 5.27 / 5). Universidad de las Ciencias Informáticas, Havana, Cuba.</p>
            </div>
        </div>
        <div class="lg:w-4/5 overflow-hidden mt-8 ">
            <div class="lg:container ml-2 lg:ml-6 bg-slate-50 dark:bg-primary_dark_color_theme px-4 py-2 lg:px-24 lg:py-6">
                <h3 class="font-bold text-lg">Professional Experience</h3>
                <div class="ml-2 md:ml-12 mt-4">
                    <p><strong>2022 - Present</strong> -  Software Developer - Technological Science Park, Universidad de las Ciencias Informáticas, Cuba.</p>
                    <p class="description">As part of the development team of the Cuban website monitor, I am in charge of developing the REST API necessary for the integration of the project's data in third-party applications. Tech and tools: Slim Framework, php, Mysql, Visual Studio Code, Git and GitHub.</p>
                </div>
                <div class="ml-2 md:ml-12 mt-4">
                    <p><strong>2021 - 2022</strong> Software Developer - Cuban website monitor, Universidad de las Ciencias Informáticas, Cuba.</p>
                    <p class="description">The Cuban website monitor is a Monitoring system of variables that contribute to web positioning and obtaining traffic data to websites. I developed, deployed and maintain an automation system for the issuance of newsletters with summaries of data captured by the system for project clients. Tech and tools: NodeJS, Express, Javascript, wkhtmltopdf, Visual Studio Code, Git and GitHub.</p>
                </div>
            </div>
        </div>
        <div class="lg:w-4/5 overflow-hidden mt-8 ">
            <div class="lg:container ml-2 lg:ml-6 bg-slate-50 dark:bg-primary_dark_color_theme px-4 py-2 lg:px-24 lg:py-6">
                <h3 class="font-bold text-lg">Skills</h3>
                <div class="ml-2 md:ml-12">
                     <p>
                        <strong>Areas of Expertise:</strong> Artificial Intelligence, Machine learning, Natural Language Processing, Computer vision and Web development.
                    </p>
                    <p>
                        <strong>Soft Skills:</strong> Collaboration, Problem Solving, Social responsibility, Hard work, Fast learner and Communication.
                    </p>
                    <p><strong>Technical Skills:</strong></p>
                    <ul class="mx-5">
                        <li>
                            <u>Programming Languages:</u> Python, JavaScript, TypeScript, PHP.
                        </li>
                        <li>
                            <u>Tools:</u> HTML, JSON, CSS, SASS, Bootstrap, Vue, Angular, Slim Framework, NodeJS, Express, Django and Django Rest Framework, Flask, Numpy, Matplotlib, Scikit-learn, Keras and Tensorflow.
                        </li>
                        <li>
                            <u>Databases:</u> PostgreSQL, MySQL, SQLite, MongoDB.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
    import { onActivated } from '@vue/runtime-core';

    onActivated(()=>{
        document.title = "Curriculum Vitae"
    })
</script>
<style scoped> 
    strong {
      color: rgb(113, 178, 128);
      @apply dark:text-ping_dark_color
    }

</style>