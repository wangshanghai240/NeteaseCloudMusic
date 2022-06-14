import VueRouter from 'vue-router'
import Vue from 'vue'
// 在vue中安装路由模块
Vue.use(VueRouter)

// 导入路由列表
let myroutes = []
const fileroute = import.meta.globEager('./modules/**/*.js')
Object.keys(fileroute).forEach(item => {
    fileroute[item].default.forEach(i => {
        myroutes.push(i)
    })
})
console.log(import.meta);
console.log(myroutes);
// 创建路由对象
const router = new VueRouter({
    mode: 'history',
    routes:myroutes
})
// 重复点击触发promise错误解决方法
// const originalPush = vuerouter.prototype.push
// vuerouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

// router.beforeEach((to,from,next)=>{
//     if(to.path === '/login/phone' && to.meta.fangke){
//       next({name:'手机号登录'})
//     return  
//     }
    
// })
// 导出路由
export default router 