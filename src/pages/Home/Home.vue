<template>
  <div id='home'>
    <Swiper></Swiper>
    <mfooter></mfooter>
  </div>
</template>

<script>
  import Swiper from '@/components/Swiper.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    components: {
      mfooter: Footer,
      Swiper
    },
    
    created () {
        this.$axios.get('/sliders').then(
            response => console.log(response.data)
        );
        this.$axios.get('/categorys').then(
            response => console.log(response.data)
        );
        this.$axios.get('/detail?_page=1&_limit=30').then(
            response => console.log(response.data)
        );
        this.$axios.get('/videos?_page=1&_limit=20').then(
            response => console.log(response.data)
        )
    }
  }

</script>

<style scoped>

</style>
