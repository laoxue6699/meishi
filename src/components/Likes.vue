<template>
  <div id="likes">
    <div class="cnxh_title">
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
    <div class="b"></div>
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
        this.$router.replace(path)
      }
    }
  }

</script>

<style scoped>
  .cnxh_title {
    height: 1750px;
    text-align: center;
    padding: 24px 0px 14px;
    margin-bottom: 100px;
  }

  .t {
    margin-bottom: 20px;
  }

  .cnxh_title img {
    display: inline-block;
    vertical-align: top;
    height: 30px;
    width: 30px;
  }

  .cnxh_title div {
    display: inline-block;
    vertical-align: top;
    height: 30px;
    padding-left: 4px;
    text-align: left;
  }

  .cnxh_cplist {
    width: 93.75%;
    margin: 0px auto;
    font-size: 0px;
    padding-bottom: 2%;
  }

  .cnxh_cplist a {
    width: 49%;
    margin: 0px 1% 2% 0px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    border-radius: 2px;
    overflow: hidden;
    padding-top: 49%;
    position: relative;
  }

  .cnxh_cplist a img {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }

  .cnxh_cplist a strong {
    height: 32px;

    line-height: 32px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.7);
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: block;
    width: 100%;
    background: url(http://site.meishij.net/p2/20160308/20160308103254_342.png) center no-repeat;
    background-size: 100% auto;
  }

  .b {
    height: 50px;
  }

</style>
