<template>
  <div>
    <scroller>
    <div class="tab-top">
      <div @click="changeSelect" class="left" :class="{'bl':isSelect}">视频菜谱</div>
      <div @click="changeSelect" class="right" :class="{'bl':!isSelect}">图文菜谱</div>
    </div>


    <!-- 视频菜谱开始 -->
    <div v-show="isSelect" class="videos">

      <!-- 收藏数据为空开始 -->
      <div clss="notnull" v-show="isNull">还没有收藏视频数据哦！</div>
      <!-- 收藏数据为空结束 -->

      <div class="item" v-for="(item,index) in this.videoList" :key="index" @click="goVideoplay(item)">
        <img :src="item.imgUrl">
        <div class="title mui-ellipsis">{{item.title}}</div>
      </div>
    </div>
    <!-- 视频菜谱结束 -->
    <!-- 视频播放开始 -->
    <Player1 v-show="isShow" :player="playList" @close="change"></Player1>
    <!-- 视频菜谱结束 -->

    <!-- 图文菜谱开始 -->
    <div v-show="!isSelect" class="steps">

      <div class="notnull" v-show="isNull">还没有收藏图文数据哦！</div>

      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="(item,index) in this.stepsList" :key="index" @click="gotoSteps(item.id)"
          @back="change">
          <img class="mui-media-object mui-pull-left" :src="item.albums[0]" />
          <div class="mui-media-body">
            <h4>{{item.title}}</h4>
            <p class='mui-ellipsis-2'>{{item.imtro}}</p>
          </div>

        </li>
      </ul>
    </div>
    <!-- 视频菜谱结束 -->

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
        videoList: [],
        isNull: true,
        isShow: false,
        isSelect: true,
        playList: [],
        stepsList: []
      };
    },
    methods: {
      goVideoplay(item) {
        this.playList = item;
        this.isShow = true;
      },
      change() {
        this.isShow = false; //关闭视频播放组件
        this.isSelect = false;
        
      },
      changeSelect() {
        this.isSelect = !this.isSelect;
      },
      gotoSteps(id) {
        let path = "/steps/" + id;
        let ppath = this.$route.path;
        this.$router.replace({
          path,
          query: {
            ppath
          }
        });
      }
    },
    components: {
      Header,
      Footer,
      Player1
    },
    created() {
      //读取收藏视频id
      if (window.localStorage.getItem("videos")) {
        this.isNull = false
        let lists = window.localStorage.getItem("videos").split(",");
        let url = "/videos/?id=" + lists[0];
        for (let i = 1; i < lists.length; i++) {
          url += "&id=" + lists[i];
        }
        //根据id请求视频菜谱数据
        this.$axios.get(url).then(response => {
          this.videoList = response.data;
          this.videoList.reverse();
        });
      }

      //请求图文菜谱数据
      //读取收藏图文id
      if (window.localStorage.getItem("steps")) {
        this.isNull = false
        let lists = window.localStorage.getItem("steps").split(",");
        let url = "/detail/?id=" + lists[0];
        for (let i = 1; i < lists.length; i++) {
          url += "&id=" + lists[i];
        }
        //根据id请求图文菜谱数据
        this.$axios.get(url).then(response => {
          this.stepsList = response.data;
          //去重
          let l = this.stepsList
          let v = []
          for(let i=0; i<lists.length; i++){
            let id = lists[i]
            v.push(l.find(item => item.id === id))
          }
          this.stepsList = v
          this.stepsList.reverse();
        });
      }

    }
  };

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

  .header h3 {
    font-size: 20px;
    line-height: 40px;
  }

  .tab-top {
    width: 100%;
    position: fixed;
    background-color: #eee;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    z-index: 99;
  }

  .left,
  .right {
    color: #999;
  }

  .videos {
    clear: both;
    padding: 80px 15px 60px 15px;
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
    color: blue;
  }

  .steps {
    padding: 60px 15px 60px 15px;
    background-color: #fff;
  }
  .notnull {
    padding: 60px;
  }
</style>
