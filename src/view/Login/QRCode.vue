<template>
  <div class="code">
    <div class="tip">请使用<a href="https://music.163.com/#/download" class="app">网易云app</a>扫码登录</div>
    <div class="base64" :class="{ active: show }">
      <img :src="base64" class="image" alt="二维码">
    </div>
    <div class="refresh" v-show="show">
      <span class="miss">二维码已失效</span>
      <button @click="refresh">点击刷新</button>
    </div>
  </div>
</template>

<script>
import { getUnikey, qrCode, initqrcode } from '@/api/login/login.js'
export default {
  name: "QRCode",
  data() {
    return {
      unikey: '',
      base64: "",
      show: false,
      cookie: '',
      timer:""
    }
  },
  created() {
    // 调用方法生成key
    this.qrcode()
  },
  methods: {
    // 获取key以便生成二维码
    qrcode() {
      getUnikey().then(res => {
        this.unikey = res.data.data.unikey
        console.log(this.unikey);
        console.log(res);
        // unikey存在才发送获取二维码请求
        if (this.unikey) {
          qrCode(this.unikey, this.unikey).then(res => {
            console.log(res);
            this.base64 = res.data.data.qrimg
            // 轮询接口
            // this.timer = setInterval(this.initweb,2000)
          })
        }
      })
    },
    // 定义轮询方法
    initweb() {
      let that = this
      initqrcode(this.unikey).then(res=>{
        if(res.data.code === '800'){
          this.show = true
          clearInterval(that.timer)
        }
        if(res.data.code === '802'){}
        if(res.data.code === '803'){
          this.$router.push('/')
        }
      })
    },
    // 刷新二维码
    refresh() {
      this.qrcode()
      console.log('刷新成功');
      this.show = false
    }
  }
}
</script>

<style scoped>
.code {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.code .tip {
  margin: .6em 0;
  width: 100%;
  text-align: center;
}

.base64 {
  text-align: center;
}

.base64 .image {
  width: 70%;
  vertical-align: middle;
  /* background:#c0c0c0; */
}

.code .active {}

.tip .app {
  text-decoration: none;
  color: #f40;
}

.refresh {
  text-align: center;
  position: absolute;
  /* margin-top: em; */
}

.refresh .miss {
  display: block;
  font-size: .8em;
  margin-top: 2.5em;
}

.refresh button {
  font-size: .6em;
  cursor: pointer;
  border: .1em solid #d0d0d0;
  border-radius: .34em;
}
</style>