<script setup>
    import Navbar from './components/navbar.vue'
    import Footer from './components/footer.vue'

</script>

<template>
    <Navbar></Navbar>
    
    <router-view v-slot="{ Component }">
        <KeepAlive>
            <component :is="Component" />
        </KeepAlive>
    </router-view>

    <Footer></Footer>
</template>

<style scoped>

</style>
