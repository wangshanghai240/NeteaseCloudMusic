<template>
  <div class="navtab">
    <div class="tab" v-for="(item, index) of tab" :key="index" @click="moremusic(index)">
      <div :class="{'active': isactive === item }">{{ item }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NavTab",
  components: {},
  computed: {
    isactive() {
      return this.$route.name
    }
  },
  props: {
    tab: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    moremusic(index) {
      this.$emit('tabmusic',index)
      this.$on('tabmusci',()=>{
        console.log('我被触发了tabmusic');
      })
    }
  }
}
</script>

<style scoped>
 .navtab{
   border:.1em solid black;
   margin:.23em .34em;
 }
 .tab{
   padding:.45em 0 .45em .33em;
   margin:1em 0;
   cursor:pointer;
 }
 .tab:hover{
   background:#e0e0e0;
   border-radius:.3em;
 }
 .tan .active{
   border-left:.18em solid rgb(41, 41, 142);
 }
</style>