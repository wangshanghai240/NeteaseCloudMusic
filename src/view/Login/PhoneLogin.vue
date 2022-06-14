<template>
  <div class="login">
    <div class="form">
      <div class="title c"><span class="quic">极速登录</span></div>
      <!-- 手机号 -->
      <div class="pho c">
        <input
          type="text"
          class="phone a"
          v-model="phone"
          placeholder="请输入手机号"
        />
      </div>
      <!-- 验证码 -->
      <div class="auth">
        <input
          type="text"
          class="captcha a"
          v-model="captcha"
          placeholder="输入验证码"
        />
        <div class="getauthid" @click.prevent="getauth">
          <span class="cap" :class="{ active: isclickcode }"
            ><a href="#">{{ this.vertifytext }}</a></span
          >
        </div>
      </div>
      <!-- 按钮 -->
      <div class="btn c">
        <button class="btn-b" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { loginCellPhone, getAuthID, verifyCode } from "@/api/login/login.js";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      captcha: "",
      vertifytext: "获取验证码",
      isclickcode: false,
      showcount: false,
      cookie: "",
      token: "",
      avatarurl: "",
      nickname: "",
    };
  },
  methods: {
    getauth() {
      // 调用验证码定时器
      this.getLastTime();
      // 发送请求
      getAuthID(this.phone).then((res) => {
        console.log(res);
      });
    },
    // 发送验证码定时器
    getLastTime() {
      let count = 60;
      // 刚开始isclickcode为false,若为true，return之后的代码无法执行
      if (this.isclickcode) return;
      let timer = setInterval(() => {
        if (count === 0) {
          this.isclickcode = false;
          this.vertifytext = "重新获取";
          clearInterval(timer);
        } else {
          this.isclickcode = true;
          this.vertifytext = `${count--}秒后重发`;
        }
      }, 1000);
    },
    // 登录
    login() {
      // 调用验证方法
      this.verify();
      this.$router.push("/");
    },
    // 校验验证码
    verify() {
      verifyCode(this.phone, this.captcha).then((rescode) => {
        if (rescode.data.code === 200) {
          console.log(rescode.data.message);
          // 验证通过请求才发送登录请求
          loginCellPhone(this.phone, this.captcha).then((res) => {
            console.log(res);
            this.cookie = res.data.cookie;
            this.token = res.data.token;
            this.avatarurl = res.data.profile.avatarUrl,
            this.nickname = res.data.profile.nickname;
            console.log(this.cookie, this.token);
            localStorage.setItem("cookie", this.cookie);
            sessionStorage.setItem("token", this.token);
            this.$store.dispatch(
              "getcoo",
              {
              cookie:this.cookie,
              token:this.token,
              back:this.avatarurl,
              name:this.nickname
             } 
            );
          });
        } else {
          console.log(rescode.data.message);
        }
      });
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/loginup.css";
</style>