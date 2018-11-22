<template>
    <div>
        分类查询结果{{this.$route.params.id}}
        {{this.cateList}}
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '@/components/Footer.vue'
    export default {
        data () {
            return {
                cateList : []
            }
        },
        components: {
            Footer
        },
        created () {
            let id = this.$route.params.id
            let url = '/detail/?cid=' + id
            console.log(id)
            console.log(url)
            this.$axios.get(url).then(
            response => this.cateList = response.data
            )
        }
    }
</script>

<style scoped>

</style>