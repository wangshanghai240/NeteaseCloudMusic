import vuerouter from 'vue-router'
import Vue from 'vue'
// 在vue中安装路由模块
Vue.use(vuerouter)

// 导入路由列表
let routes = []
const fileroute = import.meta.globEager('./modules/**/*.js')
Object.keys(fileroute).forEach(item => {
    fileroute[item].default.forEach(i => {
        routes.push(i)
    })
})
console.log(import.meta);
console.log(routes);
// 创建路由对象
const router = new vuerouter({
    mode: 'history',
    routes
})
// 重复点击触发promise错误解决方法
// const originalPush = vuerouter.prototype.push
// vuerouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

router.beforeEach((to,from,next)=>{
    
    console.log(to);
    console.log(from);
    console.log(next);
})
// 导出路由
export default router