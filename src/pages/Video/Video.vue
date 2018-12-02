<template>
  <div>
    <scroller>
   <header class="header">
     <div class="left" @click="collect">{{select}}</div>
     <div v-show="!isCheck"><h3>做菜视频</h3></div>
     <div v-show="!isCheck" class="right" @click="loadData">换一批</div>
     
    </header>
      <div class="likes mui-table-view mui-grid-view">
      <div class="item mui-table-view-cell mui-media mui-col-xs-6" v-for="(item,index) in this.videoList" :key="index" @click="goVideoplay(item)">
        <img :src="item.imgUrl">
        <div class="title mui-ellipsis">{{item.title}}</div> 
        <div v-show="isCheck" @click.stop="check">
        <input type="checkbox" :value="item" v-model="checkedId">
        </div>
      </div>
    </div>
    <Player1 v-show="isShow" :player="playList" @close="change"></Player1>
    </scroller>
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
      isShow: false,
      isCheck: false,
      select: "收藏",
      playList: [],
      videoList: [],
      checkedId: [],
      collection: []
    };
  },
  methods: {
    collect() {
      if (this.isCheck) {
        this.select = "收藏";
        for (let i = 0; i < this.checkedId.length; i++) {
          this.collection.push(this.checkedId[i].id);
        }
        this.collection = Array.from(new Set(this.collection));
        this.checkedId = [];
        let len = this.collection.length - 50; //限制收藏的个数不超过50
        if (len > 0) {
          this.collection.splice(0, len);
        }
        window.localStorage.setItem("videos", this.collection);
      } else {
        this.select = "确定";
      }
      this.isCheck = !this.isCheck;
    },
    check() {
      /* setTimeout(() => console.log(this.checkedId)); */
    },
    loadData() {
      let page = Math.floor(Math.random() * 100);
      this.$axios
        .get(`/videos?_page=${page}&_limit=20`)
        .then(response => (this.videoList = response.data));
    },
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
  created() {
    if (window.localStorage.getItem("videos")) {
      this.collection = window.localStorage.getItem("videos").split(",");
    }
    this.loadData();
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  color:cornflowerblue;
  background-color: #eee;
  height: 50px;
  padding: 0 15px;
  line-height: 50px;
  z-index: 99;
  display: flex;
  justify-content:space-between;
}
header h3 {
  font-size: 20px;
  line-height: 40px;
}
.left,
.right {
  color:cornflowerblue;
  padding: 0 10px;
  font-size: 14px;
}
.likes {
  clear: both;
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item img {
  position: relative;
  width: 160px;
}
.item .title {
  display: block;
  text-align: center;
  padding-bottom: 10px;
  width: 160px;
}
input {
  margin-left: 10px;
  width: 16px;
  height: 16px;
}
</style>