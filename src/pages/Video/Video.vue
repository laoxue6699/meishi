<template>
  <div>
    <Header class="header" title="菜谱视频列表"></Header>
    <div class="content">
      <!-- 搜索结果列表开始 -->
      <div class="lists">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media" v-for="(item,index) in this.videoList" :key="index" @click="gotoSteps(item.id)">
            <img class="mui-media-object mui-pull-left" :src="item.imgUrl" />
            <div class="mui-media-body">
              <h4>{{item.title}}</h4>
              <p class='mui-ellipsis-2'>{{item.titel}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 搜索结果列表结束 -->
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    data() {
      return {
        videoList: []
      }
    },
    methods: {
      goVideoplay () {

      }
    },
    components: {
      Header,
      Footer
    },
    created() {
      let url = '/videos?_page=1&_limit=50'
      this.$axios.get(url).then(
        response => this.videoList = response.data
      )
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