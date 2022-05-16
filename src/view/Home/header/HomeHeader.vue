<template>
    <div class="home">
        <search></search>
        <search-login class="pos">
            <template v-slot:image v-if='userb'>
                <img :src="userb" alt="">
            </template>
            <template v-slot:login v-if='username'>
                <span>{{username}}</span>
            </template>
        </search-login>
    </div>
</template>

<script>
import Search from './HeaderCom/Search.vue'
import SearchLogin from './HeaderCom/SearchLogin.vue'
import { mapState } from 'vuex'
export default {
    name: 'HomeHeader',
    components: {
        Search, 
        SearchLogin
    },
    computed:mapState({
        // 胖函数形式
        userb:state=>state.userbackground,
        username:(state)=>state.username
    })
}
</script>

<style scoped>
.home {
    width: 100%;
    height: 2.7em;
    background: rgba(213, 14, 14, 0.678);
    position: relative;
}
.home .pos{
    position:absolute;
    top:50%;
    left:80%;
    transform:translate(-50%, -50%);
}
</style>