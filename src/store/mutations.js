export default {
    getsession(state,payload){
        state.cookie = payload.cookie,
        state.token = payload.token,
        state.userbackground = payload.back,
        state.username = payload.name
    }
}