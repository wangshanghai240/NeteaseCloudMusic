<template>
  <div class="login-search">
      <div class="imge">
          <slot name="image">
            <img src="@/assets/image/top.png" alt="">
          </slot>
      </div>
      <div class="txt" @click='login'>
        <slot name='login'>
          <span>点击登录</span>
        </slot>
      </div>
  </div>
</template>

<script>
export default {
  name:'SearchLogin',
  data(){
      return {
          
      }
  },
  methods:{
    login(){
      this.$router.push({
        name:'手机号登录'
      })
    }
  }
}
</script>

<style scoped>
  .login-search .txt{
    display:inline-block;
    font-size:.8em;
    color:rgb(75, 75, 75);
    cursor:pointer;
    margin-left:.23em;
  }
  .login-search .imge{
    display:inline-block;
    width:25px;
    height:25px;
    /* border:.1em solid black; */
    border-radius:50%;
    vertical-align: middle;
    z-index:9;
  }
  .imge img{
    width:100%;
    max-width:100%;
  }
</style>