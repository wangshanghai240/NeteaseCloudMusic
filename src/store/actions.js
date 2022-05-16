export default {
    getcookie(context,a,b,c,d){
        console.log(context,a,b,c,d);
        context.commit('getsession',a,b,c,d)
    }
}