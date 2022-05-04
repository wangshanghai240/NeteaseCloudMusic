<template>
  <div class="h">
      <!-- 头部 -->
      <homeheader></homeheader>
      <!-- 左侧导航栏 -->
      <navshow></navshow>
  </div>
</template>

<script>
import navshow from './nav/NavShow.vue'
import homeheader from './header/HomeHeader.vue'
export default {
name:"Home",
components:{
    navshow, homeheader
}
}
</script>

<style>

</style>