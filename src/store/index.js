// vuex 2版本不支持以下方式
// import { createStore} from 'vuex'
// import { createApp} from 'vue'
import vue from 'vue'
import Vuex from 'vuex'

// 导入对应的状态
import { state } from './state'
import getters from './getters'
import mutations from './mutations'

// 在vue上安装store
vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
    state,
    getters,
    mutations,
})

// const app = createApp()
// app.use(store)

// 导出store对象
export default store