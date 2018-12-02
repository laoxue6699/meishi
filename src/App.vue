<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}

</script>

<style>
#app{
    width:100%;
    height:100%;
    background:#f5f5f5;
}
*{touch-action: none;}
</style>
