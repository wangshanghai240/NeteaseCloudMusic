import {createVuePlugin} from 'vite-plugin-vue2'
import { defineConfig } from 'vite'
const {resolve} = require('path')
// const path = require('path')
// function resolve(dir){
//     path.join(__dirname,dir)
// }
// import { defineConfig } from 'vite'
export default defineConfig({
    // base:"./",
    plugins:[createVuePlugin()],
    // 设置别名路径：
    // resolve:{
    //     alias:[
    //         // {"@":path.join(__dirname,'src')},
    //         {find:'view',replacement:'./src/view'},
    //         // {"view":path.join(__dirname,'src/view')},
    //         {find:'router',replacement:'/src/router'},
    //         // {"router":path.join(__dirname,"src/router")},
    //         {find:'store',replacement:'./src/store'},
    //         // {"store":path.join(__dirname,"src/store")},
    //         {find:'api',replacement:'./src/api'}
    //         // {"api":path.join(__dirname,"src/api")}
    //     ]
    // }
//     alias:{
//         '@:':resolve(__dirname,"src"),
//         "view":resolve(__dirname,"src/view"),
//         "router":resolve(__dirname,"src/router"),
//         "api":resolve(__dirname,"src/api")
// }
    resolve:{
        alias:{
            "@":resolve(__dirname,"src")
        }
    }
})