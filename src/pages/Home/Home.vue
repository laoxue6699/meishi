<template>
  <div id='home'>
    <Player :player="playList" isflex="true"></Player>
    <Swiper :swipe="swipeList"></Swiper>
    <Likes :like="likeList"></Likes>
    <Footer></Footer>
  </div>
</template>

<script>
  import Player from '@/components/Player.vue'
  import Swiper from '@/components/Swiper.vue'
  import Likes from '@/components/Likes.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    data () {
      return {
        playList: {},
        swipeList: [],
        likeList: []
      }
    },
    components: {
      Footer,
      Swiper,
      Player,
      Likes
    },
    
    created () {
        /* this.$axios.get('/sliders').then(
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
        ) */
        let id = Math.floor(Math.random()*200)
        let url = '/videos/'+id
        this.$axios.get(url).then(
          response =>  this.playList = response.data
        )

        this.$axios.get('/sliders').then(
          response =>  this.swipeList = response.data
        )

        let page= Math.floor(Math.random()*14)
        this.$axios.get(`/detail?_page=${page}&_limit=20`).then(
            response => this.likeList = response.data
        )
    }
  }

</script>

<style scoped>

</style>
