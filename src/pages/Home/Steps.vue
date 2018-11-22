<template>
    <div>
        制作步骤{{this.$route.params.id}}
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '@/components/Footer.vue'
    export default {
        components: {
            Footer
        }
    }
</script>

<style scoped>

</style>