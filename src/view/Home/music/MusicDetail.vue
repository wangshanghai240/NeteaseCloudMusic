<template>
    <div class="music">
        <keep-alive>
            <component :is="vuecom"></component>
        </keep-alive>
    </div>
</template>

<script>
import leaderboard from './MusicDetail/LeaderBoard.vue'
import recommend from './MusicDetail/Recommend.vue'

export default {
    name: 'LeaderBoard',
    components: {
        leaderboard, recommend
    },
    props:{
        index:{
            type:Number,
            require:true
        },
        tab:{
            type:Array,
            default(){
                return []
            }
        }
    },
    computed:{},
    created(){
        this.togglecom
    },
    data(){
        return {
            vuecom:leaderboard
        }
    },
    methods:{
        togglecom(){
            switch(index){
                case 1 : this.vuecom = leaderboard; break;
                case 0 : this.vuecom = recommend ; break;
            }
        }
    }
}
</script>

<style scoped>
.music {
    display: inline-block;
    border: .1em solid #d0d0d0;
}
</style>