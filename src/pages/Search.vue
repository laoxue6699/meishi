<template>
  <div>
    <!-- 搜索框开始 -->
    <div class="search">
      <form>
        <div class="search_input">
          <input type="text" placeholder="请输入您要搜索的内容..." v-model="keyword">
          <div class="mui-icon mui-icon-search" @click="resData()"></div>
        </div>
        <div class="right" @click="cancel">取消</div>
      </form>
    </div>
    <!-- 搜索框结束 -->

    <!-- 常用搜索开始 -->
    <div class="title">常用搜索</div>
    <div class="common">
      <div class="key" v-for="item in keywords">
        <div @click="reqData(item)">{{ item }}</div>
      </div>
    </div>
    <!-- 常用搜索结束 -->
    <!-- 搜索结果列表开始 -->
    <div class="lists">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" 
        v-for="(item,index) in this.searchList" :key="index" 
        @click="gotoSteps(item.id)">
          <img class="mui-media-object mui-pull-left" :src="item.albums[0]" />
          <div class="mui-media-body">
            <h4>{{item.title}}</h4>
            <p class='mui-ellipsis-2'>{{item.imtro}}</p>
          </div>

        </li>
      </ul>
    </div>
    <!-- 搜索结果列表结束 -->
    <Footer />
  </div>

</template>

<script>
  import Footer from "@/components/Footer.vue";
  export default {
    data() {
      return {
        keyword: "",
        keywords: [
           "早餐", "午餐", "晚餐","原味", "清淡", "春季", "夏季", "秋季", "冬季",
          "痛风", "感冒",  "降血压", "解暑", "减肥",'明目','补血','养肝',
          "清肺", "祛痘", "脂肪肝", "美容", '咖喱',
          "家常菜","宴请", "锅子","烧", "炒", "炖", "煮", "汤"

        ],
        searchList: []
      };
    },
    methods: {
      cancel() {
        this.keyword = ''
      },
      resData() {
        let url = "/detail?q=" + this.keyword
        this.keyword = ""
        this.$axios.get(url).then(response => (this.searchList = response.data))
      },
      reqData(k) {
        let url = "/detail?q=" + k
        this.keyword = ""
        this.$axios.get(url).then(response => (this.searchList = response.data))
      },
      goBack() {
        this.$router.replace("/home")
      },
      gotoSteps(id) {
        let path = '/steps/' + id
        let ppath = this.$route.path 
        this.$router.replace({path,query: {ppath}})
      }
    },
    components: {
      Footer
    }
 
  }

</script>

<style scoped>
  .search {
    font-size: 16px;
  }

  form {
    padding: 10px;
    display: flex;
    height: 52px;
    width: 100%;
    margin-left: 2px;
  }

  .search_input {
    display: flex;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #fff;
    color: #9E9C9C;
  }

  input {
    width: 270px;
    height: 30px;


  }

  input[type='text'] {
    border: none;
  }

  .mui-icon {
    padding: 2px;
  }

  .right {
    display: inline;
    margin-left: 15px;
    padding-top: 5px;
    color: #333;
  }

  .title {
    padding: 15px;
  }

  .common {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 15px;
    border-top: 1px solid #ccc;
  }

  .key {
    width: 54px;
    line-height: 32px;
    color: #666;
  }

  .mui-table-view .mui-media-object {
    line-height: 120px;
    max-width: 120px;
    height: 100px;
  }

  .lists {
    padding-bottom: 45px;
  }

</style>
