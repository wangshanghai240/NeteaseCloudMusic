<template>
  <div class="email">
    <div class="youxiang">
      <input type="email" name="" placeholder="输入邮箱" class="c" v-model="email" />
    </div>
    <div class="pwd">
      <input type="password" name="" placeholder="输入密码" class="c" v-model="pwd" />
    </div>
    <div class="btn" >
      <button @click="emaillogin" class="btn-c">登录</button>
    </div>
  </div>
</template>

<script>
import { emalog } from '@/api/login/login.js'
export default {
  name:'EmailLogin',
  data(){
    return {
      email:"",
      pwd:''
    }
  },
  methods:{
    // 邮箱登录
    emaillogin(){
      emalog(this.email,this.pwd).then(res=>{
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>
.email{
  /* border:.1em solid black; */
  margin-top:2em;
}
.youxiang .c, .pwd .c{
  border:.16em solid rgb(197, 197, 197);
  margin:.6em 0;
  outline:none;
  border-radius:.34em;
  padding:.34em 0.2em;
}
.youxiang .c::placeholder, .pwd .c::placeholder{
  font-size:.9em;
  color:rgb(189, 189, 189);
}
.youxiang .c:focus, .pwd .c:focus{
  border-bottom:.19em solid rgb(55, 157, 144);
}
.btn{
  display:flex;
  justify-content: center;
  margin:.6em 0 .34em 0;
}
.btn .btn-c{
  width:55%;
  background:linear-gradient(to right, rgb(137, 215, 202), rgb(55, 157, 144));
  border:none;
  border-radius:.34em;
  margin:auto;
  padding:.27em .2em;
  color:#fff;
  cursor:pointer;
}
</style>