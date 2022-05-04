<template>
  <div class="sea">
    <input
      type="search"
      name=""
      id="search"
      v-model="keyword"
      placeholder="歌曲名、歌手或者专辑"
      @keyup.enter="searchMusic"
      @focus='focuskeyword'
      @blur='blurkeyword'
      @input='suggest'
    />
    <div class="hotlist" v-if='list' >
      <div class="hot" v-for='(item,index) of this.hotkeyword' :key='index' >
        <div class="dat" @mousedown.prevent='hotMusic(item.first)'>{{item.first}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import  debounce  from '@/utils/debounce.js'
import { SearchMusic, DefaultMusic, hotKeyword, suggestMusic } from "@/api/header/search.js";
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
      clearkey:'',
      hotkeyword:[],
      list:false
    };
  },
  created() {
    // 调用函数获取默认歌曲关键字
    this.defaultKeyword();
  },
  methods: {
    // 默认歌曲关键字
    defaultKeyword() {
        DefaultMusic().then((res) => {
          this.keyword = res.data.data.showKeyword;
          if(this.keyword){
            clearInterval(this.clearkey)
          }
        });
      },
    // 搜索歌曲
    searchMusic() {
      SearchMusic(this.keyword).then((res) => {
        console.log(res);
      });
    },
    // 聚焦输入框
    focuskeyword(){
      this.keyword = ""
      // 控制推荐歌曲显示与否
      this.list = true
      // 清空定时器
      clearInterval(this.clearkey)
      // hotKeyword().then(res=>{
      //   console.log(res);
      // })
      hotKeyword().then(res=>{
        console.log(res);
        this.hotkeyword = res.data.result.hots
      })
    },
    // 失去聚焦
    blurkeyword(){
      this.clearkey = setInterval(this.defaultKeyword,6000)
      // 因为blur事件比click事件优先执行，我们采用了mousedown来代替click，并使用preventDefault来阻止blur的默认事件
      this.list = false
    },
    // 歌曲搜索建议
    suggest(){
      console.log(this.keyword);
      // 发送请求
      suggestMusic(this.keyword).then(res=>{
        console.log(res);
      })
    },
    // 防抖
    suggest(){
      console.log(this.keyword);
    },
    // 点击获取keyword
    hotMusic(keywords){
      console.log('cc');
      // 点击事件完毕之后隐藏推荐列表
      this.list = false
      console.log(keywords);
      // 将选择的关键字输入到input
      this.keyword = keywords
      // 发送请求获取对应keyowrd歌曲
      SearchMusic(keywords).then(res=>{
        console.log(res);
      })
    }
  },
};
</script>

<style scoped>
.sea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#search {
  width:30vw;
  border: 0.13em solid #d0d0d0;
  border-radius: 0.27em;
  outline: none;
  background: transparent;
  padding: 0.34em 0;
  color:#6e6e6e;
}
#search:focus {
  border-bottom: 0.17em solid #a11919;
  /* 聚焦时字体样式 */
  color:#373737;
  font-weight: 600;
}
.hotlist{
  position:absolute;
  top:2em;
  border:.1em solid #d0d0d0;
  border-radius:.34em;
  box-shadow:0 0 .19em .19em #d0d0d0;
  background:#fff;
}
.hotlist .dat{
  margin:.23em .34em;
  box-sizing: border-box;
  padding:.17em .33em;
}
.hotlist .dat:hover{
  background:#e8e8e8;
  border-radius:.34em;
  cursor:pointer;
}
</style>