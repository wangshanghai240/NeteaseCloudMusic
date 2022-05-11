<template>
  <div class="h">
    <!-- 头部 -->
    <homeheader></homeheader>
    <!-- 左侧导航栏 -->
    <navshow @tog="tog"></navshow>
    <!-- 主体音乐区 -->
    <musicdetail class="md" :index="index" :tab="tab"></musicdetail>
    <!-- 播放控件 -->
    
  </div>
</template>

<script>
import navshow from './nav/NavShow.vue'
import homeheader from './header/HomeHeader.vue'
import musicdetail from './music/MusicDetail.vue'

export default {
  name: "Home",
  components: {
    navshow, homeheader, musicdetail
  },
  data(){
    return {
      index:0,
      tab:[]
    }
  },
  methods:{
    tog(c,tablist){
      this.index = c
      this.tab = tablist
    }
  }
}
</script>

<style scoped>
.h{
  display:flex;
  flex-wrap:wrap;
}
.h .md{
  margin:0 1.2em;
  height:90vh;
  width:74vw;
  flex:1;
}
</style>