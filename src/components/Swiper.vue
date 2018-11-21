<template>
  <div>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>  
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/16/15946_675623.jpg" />
              <div class="mui-media-body">Email</div>
            </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/17/16752_134173.jpg" />
              <div class="mui-media-body">Chat</div>
            </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/16/15946_675623.jpg" />
              <div class="mui-media-body">location</div>
            </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/17/16752_134173.jpg" />
              <div class="mui-media-body">Search</div>
            </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/16/15946_675623.jpg" />
              <div class="mui-media-body">Phone</div>
            </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/17/16752_134173.jpg" />
              <div class="mui-media-body">Setting</div>
            </a></li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon mui-icon-home"></span>
              <div class="mui-media-body">Home</div>
            </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
              <div class="mui-media-body">Email</div>
            </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon mui-icon-chatbubble"></span>
              <div class="mui-media-body">Chat</div>
            </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon mui-icon-location"></span>
              <div class="mui-media-body">location</div>
            </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon mui-icon-search"></span>
              <div class="mui-media-body">Search</div>
            </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon mui-icon-phone"></span>
              <div class="mui-media-body">Phone</div>
            </a></li>
        </ul>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          swiperOption: {
            // some swiper options/callbacks
            // 所有的参数同 swiper 官方 api 参数
            // ...
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 2000,
            loop: true,
            observer: true,
            observeParents: true,
            autoplayDisableOnInteraction: false,
            autoplay: 1500
          }
        }
      },
      methods: {
        callback () {}
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
      mounted() {
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, false)
      }
  }

</script>

<style scoped>
.mui-grid-9 img{
    width: 100%;
}
</style>
