<template>
  <div class="player">
    <video :poster="player.imgUrl"
          controls=""  :src="player.videoUrl" 
          playsinline="playsinline" webkit-playsinline="webkit-playsinline">
    </video>
  </div>
</template>

<script>
export default {
  props: ['player'],
  data() {
    return {};
  }
};
</script>

<style scoped>

video {
  width: 100%;
}
</style>
