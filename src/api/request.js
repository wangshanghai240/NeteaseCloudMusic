import axios from 'axios'
// 设置允许携带cookie
axios.defaults.withCredentials = true

export function request(config){
    let instance = axios.create({
        baseURL:'http://127.0.0.1:3000',
        timeout:3000
    })
    // 请求拦截
    axios.interceptors.request.use((config)=>{
        // 设置token
        // 先从sessionStorage中获取token
        let token = sessionStorage.getItem("token")
        if(token){
            // 将token添加到header的authorization字段中
            config.headers["authorization"] = token
        }else{
            console.log('sorry your token is not exit!');
        }
        // 返回
        return config
    },(err)=>{
        if(err.data.code === 400){
            Promise.reject(err.data.message)
        }
    })
    // 响应拦截
    axios.interceptors.response.use((response)=>{
        
        return response
    })
    return instance(config)
}