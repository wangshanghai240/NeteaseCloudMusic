<template>
  <div class="login">
    <div class="form">
      <input type="text" placeholder="请输入手机号" size='11' :value='this.cellphone.phonenumber'/>
      <input type="password" placeholder="请输入密码" :value='cellphone.password'/>
      <button @click='login'>登录</button>
    </div>
  </div>
</template>

<script>
import { loginCellPhone } from 'api/login/login.js'
export default {
  name: "Login",
  data() {
    return {
        cellphone:{
            phonenumber:'',
            password:''
        }
    };
  },
  methods: {
      login(){
          loginCellPhone(this.cellphone).then(res=>{
              console.log(res);
          })
          console.log(this.$route);
      }
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 0.1em solid #d0d0d0;
  border-radius: 0.28em;
  box-sizing: border-box;
}
.login .form input {
  border: none;
  outline: none;
}
.login .form input[type="text"] {
  padding: 0.18em 0;
}
</style>