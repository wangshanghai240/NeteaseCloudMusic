<template>
  <div class="nav">
    <navtab :tab="tabname" @tabmusic="indextab"></navtab>
  </div>
</template>

<script>
import navtab from '@/components/NavTab/NavTab.vue'
export default {
  name:"NavShow",
  components:{
    navtab
  },
  computed:{
    
  },
  data(){
    return {
      tabname:['推荐','排行榜','歌单','主播电台','歌手','新碟上架'],
      currentindex:0,
      path:[]
    }
  },
  methods:{
    indextab(c){
      console.log(this.$route);
      this.path = this.$router.options.routes
      console.log(this.path);
      for(let i of this.path){
        this.tabname.forEach((item, index)=>{
          if(c === index){
            if(i.name === item){
              this.$router.push({
                path:i.path
              })
            }
          }
        })
      }
      this.$emit('tog',c,this.tabname)
    }
  }
}
</script>

<style scoped>
.nav{
  display:inline-block;
  border:.1em solid #d0d0d0;
  width:20vw;
}
</style>