<template>
  <div>
    <!-- <img :alt="title" :src="imgUrl">
    </img> -->
    <video :poster="imgUrl"
           :src="videoUrl" 
          playsinline="playsinline" 
          webkit-playsinline="webkit-playsinline"
          controls>
    </video>
  </div>
</template>

<script>
  export default {
    props: 
      {'player' : Object},
    data () {
      return {
       
      }
    },
    computed: {
      title : function(){
        return this.player.title
      },
      imgUrl: function() {
        return this.player.imgUrl
      },
      videoUrl: function() {
        return this.player.videoUrl
      }
    }
    
  }
</script>

<style scoped>
img {
  overflow: hidden;
  width: 100%;
}
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 211px;
}

</style>
