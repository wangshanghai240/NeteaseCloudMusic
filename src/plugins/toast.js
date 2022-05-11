export default {
    install(Vue,option){
        let show = option.show
        Vue.prototype.$toast = $toast
    }
}