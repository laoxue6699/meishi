<template>
  <div>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="(items,index) in swipe" :key="index">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li v-for="(item,index) in items" :key="item.cid" 
          class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" 
          @click="gotoCate(item)"><div class="a"
              >
              <img :src="item.imgUrl" />
              <div class="mui-media-body">{{item.name}}</div>
            </div></li>
        </ul>
      </swiper-slide>
      
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      
    </swiper>
  </div>
</template>

<script>
  export default {
    props: {
      swipe: Array
    },
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: ".swiper-pagination",
          paginationClickable: true,
          speed: 1000,
          loop: true,
          observer: true,
          observeParents: true,
          autoplayDisableOnInteraction: false,
          autoplay: true,
          
        }
      };
    },
    methods: {
      callback() {},
      gotoCate(item) {
        let cname = item.name
        let cid = item.cid
        let path = '/cate/' + item.id
        this.$router.replace({path, query: {cname,cid}})
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      //console.log("this is current swiper instance object", this.swiper);
      this.swiper.slideTo(1, 1000, false)
    }
  };

</script>

<style scoped>
  .mui-grid-9 img {
    width: 100%;
  }

</style>
