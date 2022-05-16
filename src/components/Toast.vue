<template>
  <div class="toast">
      <div class="me">{{mess}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  props:{
      mess:{
          type:String
      }
  },
  data(){
      return {}
  },
  methods:{
      delay(){
          setTimeout()
      }
  }
}
</script>

<style scoped>
  .toast{
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%, -50%);
      border-radius:.34em;
      box-shadow:0 0 .19em .19em #d0d0d0;
  }
</style>