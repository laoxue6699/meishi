<template>
  <div>
   <!-- <header class="header"><h3>我的收藏</h3></header> -->
   <div class="tab-top">
     <div class="left bl">视频菜谱</div>
     <div class="right">图文菜谱</div>
   </div>
      <div class="likes">
      <div class="item" v-for="(item,index) in this.videoList" :key="index" @click="goVideoplay(item)">
        <img :src="item.imgUrl">
        <div class="title mui-ellipsis">{{item.title}}</div> 
      </div>
    </div>
    <Player1 v-show="isShow" :player="playList" @close="change"></Player1>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Player1 from "@/components/Player1.vue";
export default {
  data() {
    return {
      videoList: [],
      isShow: false,
      playList: []
    };
  },
  methods: {
    goVideoplay(item) {
      this.playList = item;
      this.isShow = true;
    },
    change() {
      this.isShow = false;
    }
  },
  components: {
    Header,
    Footer,
    Player1
  },
  created () {
    let lists = window.localStorage.getItem("collection").split(',')
    let url = '/videos/?id=' + lists[0]
    for(let i=1; i<lists.length; i++){
      url += '&id=' + lists[i]
    }
    this.$axios.get(url).then(response => {
      this.videoList = response.data
      this.videoList.reverse()
    })
  }
}
</script>

<style scoped>
.header {
  color: #fff;
  background-color: cornflowerblue;
  height: 50px;
  padding: 0 15px;
  line-height: 50px;
  text-align: center;
}
header h3 {
  font-size: 20px;
  line-height: 40px;
}
.tab-top{
  display: flex;
  justify-content:space-around;
  font-size: 20px;
  padding: 20px;
  border-bottom: 1px solid #ccc;
}
.likes {
  clear: both;
  padding: 20px 15px 45px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item {
  margin-bottom: 10px;
  border: #999 solid 1px;
  padding-bottom: 10px;
}
.item img {
  position: relative;
  width: 160px;
}
.item .title {
  display: block;
  text-align: center;
  padding: 10px;
  width: 160px;
}
.bl {
   color:blue;
}
</style>