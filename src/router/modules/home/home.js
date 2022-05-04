export default [
    {
        path:'/home',
        name:'主页',
        component:()=>import('@/view/Home/Home.vue')
    },
    {
        path:'/',
        name:'主页',
        redirect:'/home',
        component:()=>import('@/view/Home/Home.vue')
    }
]