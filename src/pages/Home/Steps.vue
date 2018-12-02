<template>
  <div>
    <scroller>
    <div class="header">
      <div class="back" @click="goBack">❮返回</div>
      <div v-show="isCollect" class="back" @click="collect">收藏</div>
    </div>

    <div class="content-header">{{this.stepsList.title}}</div>

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
    </scroller>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stepsList: [],
        collection: [],
        isCollect: true
      };
    },
    methods: {
      goBack() {
        this.$emit('back')
        let ppath = this.$route.query.ppath
        if (ppath === '/home') {
          this.$router.push('/home')
        } else if (ppath.substring(0, 7) === '/search') {
          this.$router.replace(ppath)
        } else {
          let cname = this.$route.query.cname //调用本组件需要传入的参数
          let cid = this.$route.query.cid //调用本组件需要传入的参数
          //this.$router.replace(path)
          //调用本组件需要传入的参数： 分类名 cname 和分类标识 cid，调用下层路由返回时，也要带这两个参数。
          this.$router.replace({
            path: ppath,
            query: {
              cname,
              cid
            }
          })
        }

      },
      collect() {
        if(window.localStorage.getItem("steps")){
          let steps = window.localStorage.getItem("steps").split(',')
          if(!steps.includes(this.stepsList.id)){
            steps.push(this.stepsList.id)
            window.localStorage.setItem('steps',steps)
            this.isCollect = false
          }
        }else{
          window.localStorage.setItem('steps',this.stepsList.id)
        }
      },
    },
    mounted() {
      //是否显示收藏按钮
      if(window.localStorage.getItem("steps")){
          let steps = window.localStorage.getItem("steps").split(',')
          console.log(steps)
          console.log(this.stepsList.id)
          console.log(steps.includes(this.stepsList.id))
          if(steps.includes(this.stepsList.id)){
            this.isCollect = false
          }
      }
    },
    created() {
      let id = this.$route.params.id;
      let url = "/detail/" + id;
      this.$axios.get(url).then(response => (this.stepsList = response.data));
    }
  };

</script>

<style scoped>
  .header {
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: cornflowerblue;
    font-size: 16px;
    color: #fff;
    position: fixed;
    top:0 ;
    left: 0;
    z-index: 99;
  }


  .content-header {
    font-size: 24px;
    text-align: center;
    padding: 15px;
  }

  .steps-imtro {
    color: #666;
    font-size: 16px;
    padding: 15px;
    line-height: 24px;
  }

  .steps-title {
    padding-left: 15px;
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
    color: chocolate;
  }

</style>
