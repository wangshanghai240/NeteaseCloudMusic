export default {
    getsession(state,a,b,c,d){
        state.cookie = a,
        state.token = b,
        state.userbackground = c,
        state.username = d
    }
}