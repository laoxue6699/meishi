<template>
  <div id="likes">
    <header class="header" title="猜您喜欢"><strong>猜您喜欢</strong></header>
    <div class="likes">
 
      <div class="item" v-for="(item,index) in like" :key="index" @click="gotoSteps(item.id)">
        <img :src="item.albums[0]">
        <div class="title">{{item.title}}</div>
      </div>

    </div>
    <!-- <div class="cnxh_title">
      <div class="t">
        <img src="https://s1.c.meishij.net/wap7/images/home_title_love@3x.png">
        <strong>猜你喜欢</strong><br>
      </div>
      <div class="cnxh_cplist">
        <a v-for="(item,index) in like" :key="index" name="recipe" recipe_id="1904633" 
         @click="gotoSteps(item.id)">
          <img :src="item.albums[0]"><strong>{{item.title}}</strong></a>
      </div>
    </div>
    <div class="b"></div> -->
  </div>
</template>

<script>
  export default {
    props: {
      like: Array
    },
    methods: {
      gotoSteps(id) {
        let path = '/steps/' + id
        let ppath = this.$route.path 
        this.$router.replace({path,query: {ppath}})
      }
    }
  }

</script>

<style scoped>
 .header {
   display: flex;
   padding: 15px;
 }
.header strong {
  color: #333;
  margin: 0 auto;

}
.likes {
  padding: 15px 15px 55px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
}
.item img {
  position: relative;
  width: 170px;
}
.item .title{
  display: block;
  text-align: center;
  padding-bottom: 10px;
}
</style>
