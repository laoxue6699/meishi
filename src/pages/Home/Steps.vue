<template>
  <div>
    <Header class="header" :title="this.stepsList.title">
      <a class="mui-icon mui-icon-left-nav mui-pull-left" @click="goBack">返回</a>
    </Header>
    <div class="content">
      <div class="steps-imtro">
        {{this.stepsList.imtro}}
      </div>
      <div class="steps-title">
        主料: {{this.stepsList.ingredients}}
      </div>
      <div class="steps-title">
        佐料: {{this.stepsList.burden}}
      </div>

      <div class="steps-step">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media" v-for="(item,index) in this.stepsList.steps" :key="index">
            <img class="mui-media-object mui-pull-left" :src="item.img" />
            <div class="mui-media-body">
              <p class=''>{{item.step}}</p>
            </div>

          </li>
        </ul>
      </div>
    </div>
    </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  export default {
    data() {
      return {
        stepsList: []
      };
    },
    components: {
      Header
    },
    methods: {
      goBack() {
        let ppath = this.$route.query.ppath
        if(ppath === '/home'){
          this.$router.push('/home')
        }else if(ppath.substring(0,7) === '/search') {
          this.$router.replace(ppath)
        }else{
          let cname = this.$route.query.cname //调用本组件需要传入的参数
          let cid = this.$route.query.cid //调用本组件需要传入的参数
          //this.$router.replace(path)
          //调用本组件需要传入的参数： 分类名 cname 和分类标识 cid，调用下层路由返回时，也要带这两个参数。
          this.$router.replace({path:ppath, query: {cname,cid}})
        }
             
      }
    },
    created() {
      let id = this.$route.params.id;
      let url = "/detail/" + id;
      //console.log(id)
      //console.log(url)
      this.$axios.get(url).then(response => (this.stepsList = response.data));
      //console.log(this.stepsList)
    }
  };

</script>

<style scoped>
  .header a {
    margin-top: 5px;
    font-size: 16px;
  }

  .content {
    padding-top: 45px;
  }

  .steps-imtro{
      color: #666;
      font-size: 16px;
      padding: 15px;
      line-height: 24px;
  }
.steps-title{
    padding-left:15px;
    padding-bottom: 15px;
}
  .mui-table-view .mui-media-object {
    line-height: 42px;
    max-width: 100px;
    height: 80px;
}

.mui-media-body p {
  font-size: 16px;
  color: #333;
  color:chocolate;
}
</style>
