import {createVuePlugin} from 'vite-plugin-vue2'
const path = require('path')
import { defineConfig } from 'vite'
export default defineConfig({
    // base:"./",
    plugins:[createVuePlugin()],
    // 设置别名路径：
    resolve:{
        alias:[
            {"@":path.join(__dirname,'src')},
            // {find:'view',replacement:'/src/view'},
            {"view":path.join(__dirname,'src/view')},
            // {find:'router',replacement:'/src/router'},
            {"router":path.join(__dirname,"src/router")},
            // {find:'store',replacement:'/src/store'},
            {"store":path.join(__dirname,"src/store")},
            // {find:'api',replacement:'/src/api'}

            {"api":path.join(__dirname,"src/api")}
        ]
    }
})