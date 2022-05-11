<template>
  <div class="toggle">
    <div class="bb">
      <div class="tab" v-for="(item, index) of loginmethod" :key="index" @click="toggle(index)">
        <router-link :to="{ name: item }" class="csgo"><span :class="{ active: index === currentindex }">{{ item
        }}</span>
        </router-link>
      </div>
    </div>
    <!-- 对应组件 -->
    <keep-alive>
      <div class="com">
        <router-view></router-view>
      </div>
    </keep-alive>

    <!-- <keep-alive>
      <components :is=""></components>
    </keep-alive> -->
  </div>
</template>

<script>
import logup from "./Logup.vue";
import phonelogin from "./PhoneLogin.vue";
import qrcode from './QRCode.vue'
import emaillogin from './EmailLogin.vue'

export default {
  name: "ToggleVue",
  components: {
    logup,
    phonelogin,
    qrcode,
    emaillogin
  },
  data() {
    return {
      isshow: true,
      currentindex: 0,
      loginmethod: ['手机号登录', '邮箱登录', '二维码登录']
    };
  },
  methods: {
    toggle(c) {
      this.currentindex = c;
    }
  },
};
</script>

<style scoped>
.toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: .23em;
  box-shadow: 0 0 .19em .19em #e7e7e7;
  width: 24%;
  height: 28vh;
  min-width: 15%;
}

.toggle .bb {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  /* 只能设置宽度100vw占满一行 */
  width: 100vw;
  margin: .34em 0;
}

.tab .active{
  padding: 0 0 .23em 0;
  border-bottom: .14em solid #f40;
  color: #f50;
  box-sizing: border-box;
  transition:border-bottom .4s linear .2s, color 1s;
}

.tab {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tab .csgo {
  display: inline-block;
  text-decoration: none;
  color: rgb(31, 31, 31);
  /* flex: 1; */
}

.toggle .com {
  height: 24vh;
}
</style>