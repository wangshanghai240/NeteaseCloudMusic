let baseUrl
export default {
    install(Vue,options){
        console.log('installed');
        baseUrl = options.baseUrl
        Vue.prototype.$fetch = $fetch
    }
}