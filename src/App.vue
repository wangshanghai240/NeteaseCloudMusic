<template>
  <div id="app">
    <!-- 之前这里router-view不生效的原因在于router有全局守卫 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
    // components:{
    //     home
    // }
};
</script>

<style>
body,html{
  margin:0;
  padding:0;
}
</style>