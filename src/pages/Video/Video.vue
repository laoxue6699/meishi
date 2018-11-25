<template>
  <div>
   <Header class="header" title="菜谱视频"></Header>
    <div class="content">
   
      <div class="lists">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media" v-for="(item,index) in this.videoList" :key="index" 
          @click="goVideoplay(item)">
            <img class="mui-media-object mui-pull-left" :src="item.imgUrl" />
            <div class="mui-media-body">
              <h4>{{item.title}}</h4>
              <p class='mui-ellipsis-2'>{{item.titel}}</p>
            </div>
          </li>
        </ul>
      </div>
     
    </div>
    <Player1 v-show="isShow" :player="playList" @close="change"></Player1>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Player1 from '@/components/Player1.vue'
  export default {
    data() {
      return {
        isShow: false,
        playList: [],
        videoList: []
      }
    },
    methods: {
      goVideoplay (item) {
        this.playList = item
        this.isShow = true
      },
      change() {
        this.isShow = false
      }
    },
    /* computed : {
      playList () {
        return this.videoList[0]
      }
    }, */
    components: {
      Header,
      Footer,
      Player1
    },
    created() {
      let page= Math.floor(Math.random()*40)
      this.$axios.get(`/videos?_page=${page}&_limit=50`).then(
      response => this.videoList = response.data)
    }
  }

</script>

<style scoped>
  .mui-table-view .mui-media-object {
    line-height: 120px;
    max-width: 120px;
    height: 80px;
  }

  .lists {
    padding-bottom: 45px;
  }
  .content {
    padding-top: 45px;
  }
  .content h2 {
    font-size: 18px;
    font-weight: 700;
    color: #333;
    padding: 15px 15px 5px;
    margin-bottom: 10px;
    line-height: 24px;
  }

  .header a {
    margin-top: 5px;
    font-size: 16px;
  }

</style>