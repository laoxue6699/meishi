<template>
  <div id="likes">
    
    <header class="header" title="猜您喜欢"><strong>猜您喜欢</strong></header>
    <div class="mui-table-view mui-grid-view">
      <div class="item mui-table-view-cell mui-media mui-col-xs-6" v-for="(item,index) in like" :key="index" @click="gotoSteps(item.id)">
        <img :src="item.albums[0]">
        <div class="title mui-ellipsis">{{item.title}}</div>
      </div>
    </div>

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
