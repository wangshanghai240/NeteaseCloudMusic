<template>
  <div class="home">
      <search></search>
  </div>
</template>

<script>
import Search from './HeaderCom/Search.vue'
export default {
name:'HomeHeader',
components:{
    Search
}
}
</script>

<style scoped>
.home{
    width:100%;
    height:2.7em;
    background:rgba(237, 237, 237, 0.474);
    position:relative;
}
</style>