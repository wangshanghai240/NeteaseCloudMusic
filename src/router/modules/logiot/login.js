export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/Login/ToggleVue.vue'),
        children:[
            {
                path:'phone',
                name:"手机号登录",
                component:()=>import('@/view/Login/PhoneLogin.vue'),
                meta:{
                    fangke:true
                }
            },
            {
                path:"email",
                name:"邮箱登录",
                component:()=>import('@/view/Login/EmailLogin.vue')
            },
            {
                path:"QRCode",
                name:"二维码登录",
                component:()=>import('@/view/Login/QRCode.vue')
            }
        ]
    }
]