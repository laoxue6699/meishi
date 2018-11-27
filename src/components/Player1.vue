<template>
  <div class="flexed">
    <div>
    <div class="title">{{player.title}}</div>
    <video :poster="player.imgUrl"
          controls=""  :src="player.videoUrl" 
          playsinline="playsinline" webkit-playsinline="webkit-playsinline"
          ref="video">
    </video>
    
    </div>
    <div class="exit" @click="emit">关闭</div>
    <!-- <div class="collection" @click="collection">
      收藏
    </div> -->
  </div>
  
</template>

<script>
export default {
  props: ['player'],
  data() {
    return {};
  },
  methods: {
    emit () {
      let myVideo = this.$refs.video
      myVideo.pause()
      this.$emit('close','false')
    }
  }
};
</script>

<style scoped>
.flexed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position:fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 50px;
  background-color:rgba(190, 230, 170, 1);
  height: 100%;
  z-index: 99;
}
video {
  width: 100%;
}
.exit {
  display: block;
  width: 36px;
  height: 24px;
  position:fixed;
  top:40px;
  left:20px;
  color: #666;
  z-index: 999;
}
.collection {
  display: block;
  width: 36px;
  height: 24px;
  background: red;
  position:fixed;
  top:40px;
  right:20px;
  color: #666;
  z-index: 999;
}

span.iconfont.icon-collection {
  width: 100px;
  height: 100px;
}
.title {
  padding: 10px;
}
</style>
