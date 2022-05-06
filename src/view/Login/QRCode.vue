<template>
  <div class="code">
    <div class="tip">请使用<a href="https://music.163.com/#/download" class="app">网易云app</a>扫码登录</div>
    <div class="base64">
      <img :src="base64" alt="二维码">
    </div>
    <div class="refresh" v-if="">
      <span>二维码已失效</span>
      <button>点击刷新</button>
    </div>
  </div>
</template>

<script>
import { getUnikey, qrCode } from '@/api/login/login.js'
export default {
  name: "QRCode",
  data() {
    return {
      unikey: '',
      base64:""
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
          })
        }
      })
    },
    
  }
}
</script>

<style scoped>
.code .tip{
  margin:.6em 0;
  
}
.tip .app{
  text-decoration:none;
  color:#f40;
}
</style>