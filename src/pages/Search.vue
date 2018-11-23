<template>
    <div>
      <div class="input">
          <input v-model="keyword" placeholder="请输入搜索菜谱内容中包含的关键字" >
      </div>
      <div class="cn_c3">
        <h2>关键词:{{keyword}}</h2>
  
        <div class="cpranklist_s1">
          <div class="cprankitem_s1" v-for="(item,index) in this.searchList" :key="index" 
          @click="gotoSteps(item.id)">
            <a>
              <div class="imgw"><img :src="item.albums[0]" alt="item.title"></div>
              <div class="info">
                <strong class="cpn">{{item.title}}</strong>
                <div class="stars"><i class="i1"></i><i class="i1"></i><i class="i1"></i><i class="ih"></i><i class="i0"></i></div>
                <div class="others">4711收藏　126277浏览</div>
              </div>
            </a>
          </div>
        </div>
        <!-- 菜谱列表部分 end-->
      </div>
      <Footer/>
    </div>
    
  </template>
  
  <script>
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      keyword: "丝瓜",
      searchList: []
    };
  },
  methods: {
    resData() {
      let url = "/detail";
      this.$axios.get(url).then(response => (this.searchList = response.data));
    },
    goBack() {
      this.$router.push("/home");
    },
    gotoSteps(id) {
      let path = "/steps/" + id;
      this.$router.replace(path);
    }
  },
  components: {
    Footer
  },
  created() {
    let url = "/detail";
    this.$axios.get(url).then(response => (this.searchList = response.data));
  }
};
</script>
  
  <style scoped>
div {
  display: block;
}
.cn_c3 {
  padding-top: 45px;
}
.ci-title2 {
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  padding: 25px 15px 10px;
  position: relative;
  color: #000;
  box-sizing: border-box;
  position: relative;
}
.cn_c3 h2 {
  font-size: 18px;
  font-weight: 700;
  color: #333;
  padding: 15px 15px 5px;
  margin-bottom: 10px;
  line-height: 24px;
}
.cprankitem_s1 {
  padding: 0 15px;
}
a {
  text-decoration: none;
}
.cprankitem_s1 a {
  display: block;
  border-top: 1px solid #f5f5f5;
  position: relative;
  height: 100px;
  padding: 10px 0px 10px 130px;
}
.cprankitem_s1 a .imgw {
  position: absolute;
  left: 0px;
  top: 10px;
  height: 90px;
  width: 120px;
  overflow: hidden;
  border-radius: 3px;
}
.cprankitem_s1 a .imgw img {
  display: block;
  width: 100%;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
.cprankitem_s1 a .info {
  padding-top: 10px;
}
.cprankitem_s1 a .info .cpn {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  line-height: 24px;
  height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.cprankitem_s1 a .info .stars {
  display: block;
  height: 20px;
  font-size: 0px;
  padding: 4px 0px 6px;
}
.cprankitem_s1 a .info .stars .i1 {
  background: url(https://s1.st.meishij.net/p2/20180831/20180831142237_413.png)
    center no-repeat;
  background-size: 16px 16px;
}
.cprankitem_s1 a .info .stars i {
  display: inline-block;
  vertical-align: top;
  height: 16px;
  width: 16px;
  margin: 2px 2px 0px 0px;
}
.cprankitem_s1 a .info .stars .ih {
  background: url(https://s1.st.meishij.net/p2/20180831/20180831142237_310.png)
    center no-repeat;
  background-size: 16px 16px;
}
.cprankitem_s1 a .info .stars .i0 {
  background: url(https://s1.st.meishij.net/p2/20180831/20180831142237_552.png)
    center no-repeat;
  background-size: 16px 16px;
}
.cprankitem_s1 a .info .others {
  margin-top: 10px;
  font-size: 12px;
  color: #999;
  line-height: 20px;
  text-decoration: none;
}
.header a {
  margin-top: 5px;
  font-size: 16px;
}
</style>