<template>
  <div>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="(items,index) in swipe" :key="index">
        <div class="lists">
          <div class="swiper-items" >
          <div class="swiper-item" @click="gotoCate(items[0])">
              <img :src="items[0].imgUrl" />
              <div class="name">{{items[0].name}}</div>
          </div>
          <div class="swiper-item" @click="gotoCate(items[1])">
              <img :src="items[1].imgUrl" />
              <div class="name">{{items[1].name}}</div>
          </div>
          <div class="swiper-item" @click="gotoCate(items[2])">
              <img :src="items[2].imgUrl" />
              <div class="name">{{items[2].name}}</div>
          </div>
          </div>
        </div>
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
      //this.swiper.slideTo(3, 3000, false)
    }
  };

</script>

<style scoped>
  .lists{
    padding: 15px 5px;
  }
  .lists {
    list-style: none;
    display: flex;
    justify-content:space-between;

  }
  .swiper-items{
    display: flex;
    justify-content: space-around;
  }
  .swiper-item img {
    width: 100%;
    padding: 5px;
  }

  .name {
    text-align: center;
    font-size: 12px;
  }

</style>
