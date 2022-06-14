export default {
    getcoo(context,info){
        console.log(context,info);
        context.commit('getsession',info)
    }
}