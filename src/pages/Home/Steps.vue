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
        this.$router.replace({name: 'Home'});
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
      color: #999;
      font-size: 16px;
      padding: 15px;
      line-height: 24px;
  }
.steps-title{
    color: #666;
    padding-left:15px;
    padding-bottom: 15px;
}
  .mui-table-view .mui-media-object {
    line-height: 42px;
    max-width: 100px;
    height: 80px;
}
</style>
