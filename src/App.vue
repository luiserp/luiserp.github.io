<script setup>
    import Navbar from './components/navbar.vue'
    import Footer from './components/footer.vue'

</script>

<template>
    <Navbar></Navbar>
    <!-- Exclude maths agains the component name -->
    <router-view v-slot="{ Component }">
        <KeepAlive exclude="view_proyect"> 
            <component :is="Component" />
        </KeepAlive>
    </router-view>

    <Footer></Footer>
</template>

<style scoped>

</style>
