<template>
    <div class="home">
        <search></search>
        <showlogin class="pos"></showlogin>
    </div>
</template>

<script>
import Search from './HeaderCom/Search.vue'
import showlogin from './HeaderCom/ShowLogin.vue'

export default {
    name: 'HomeHeader',
    components: {
        Search, showlogin
    }
}
</script>

<style scoped>
.home {
    width: 100%;
    height: 2.7em;
    background: rgba(237, 237, 237, 0.474);
    position: relative;
}
.pos{
    position:absolute;
    top:50%;
    left:80%;
    transform:translate(-50%, -50%);
}
</style>