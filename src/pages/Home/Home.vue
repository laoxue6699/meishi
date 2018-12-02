<template>
  <div id='home' >
    <scroller>
      <Player :player="playList" isflex="true"></Player>
   <!--  <div class="header">
      <img :src="this.likeList[10].albums[0]" />
      <div class="home-title"><span>保健菜谱</span></div>
    </div> -->
    <Swiper :swipe="swipeList"></Swiper>
    <Likes :like="likeList"></Likes>
    </scroller>
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
.header {
  overflow: hidden;
  height: 200px;
  width: 100%;
}
.header img {
  width: 100%;
}

.home-title {
  font-size: 48px;
  color: #fff;
  display: block;
  margin-top: -300px;
  padding-left:100px;
  z-index: 99
}

</style>
