<template>
  <div>
    <scroller>
    <div class="header">
      <div class="back" @click="goBack">❮返回</div>
      <div class="header-title">分类菜谱</div>
      
    </div>
    <div class="content">
      <div class="category">{{this.$route.query.cname}}类</div>

      <!-- 搜索结果列表开始 -->
      <div class="lists">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media" v-for="(item,index) in this.cateList" :key="index" @click="gotoSteps(item.id)">
            <img class="mui-media-object mui-pull-left" :src="item.albums[0]" />
            <div class="mui-media-body">
              <h4>{{item.title}}</h4>
              <p class='mui-ellipsis-2'>{{item.imtro}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 搜索结果列表结束 -->
    </div>
    </scroller>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  export default {
    data() {
      return {
        cateList: []
      }
    },
    methods: {
      goBack() {
        this.$router.push("/home")
      },
      gotoSteps(id) {
        let path = '/steps/' + id
        let ppath = this.$route.path //本组件路径
        let cname = this.$route.query.cname //调用本组件需要传入的参数
        let cid = this.$route.query.cid //调用本组件需要传入的参数
        //this.$router.replace(path)
        //调用本组件需要传入的参数： 分类名 cname 和分类标识 cid，调用下层路由返回时，也要带这两个参数。
        this.$router.replace({
          path,
          query: {
            cname,
            cid,
            ppath
          }
        })
      }
    },
    computed: {
      title: function () {
        return "菜谱分类: " + this.$route.query.cname
      }
    },
    components: {
      Header
    },
    created() {
      let cid = this.$route.query.cid
      let url = '/detail/?cid=' + cid
      this.$axios.get(url).then(
        response => this.cateList = response.data
      )
    }
  }

</script>

<style scoped>
   .back {
     display: block;
     float: left;
    padding: 10px;
    font-size: 16px;
  }
  .mui-table-view .mui-media-object {
    line-height: 120px;
    max-width: 120px;
    height: 100px;
  }

  .lists {
    padding-bottom: 45px;
  }

  .content h2 {
    font-size: 18px;
    font-weight: 700;
    color: #333;
    padding: 15px 15px 5px;
    margin-bottom: 10px;
    line-height: 24px;
  }

  

  .header {
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    height: 50px;
    z-index: 99;
    background-color: cornflowerblue;
    color: #fff;
  }

  .content {
    padding-top: 60px;
  }

.header-title {
   display: block;
   margin: 0 auto;
   line-height: 50px;
    width: 200px;
    font-size: 20px;
    text-align: center;
  }

  .category {
    padding: 15px;
  }

</style>
