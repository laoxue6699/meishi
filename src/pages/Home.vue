<template>
    <div>
        <Header title='保健食谱' arrow = 'false'>
        <!--    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> -->
        </Header>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    export default {
        components: {
            Footer,
            Header
        },
        /* created () {
            this.$axios.get('/categorys').then(
                response => console.log(response.data)
            );
            this.$axios.get('/detail?_page=1&_limit=30').then(
                response => console.log(response.data)
            );
            this.$axios.get('/videos?_page=1&_limit=20').then(
                response => console.log(response.data)
            )
        } */
    }
   
</script>

<style scoped>

</style>