import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";

const routes = [
    {
        path:"/",
        redirect: "/musicplayer"
    },
    {
        path:"/home",
        component:()=>import("@/views/index.vue")
    },
    {
        path:"/login",
        component:()=>import("@/views/loginregister.vue")
    },
    {
        path:"/user/:id/name/:name?",
        name:"member",
        component:()=>import("@/views/user.vue")
    },
    {
        path:"/musicplayer",
        component:()=>import("@/views/musicplayer/App.vue")
    },
    {
        path:"/vip",
        component:()=>import("@/views/vip.vue"),
        children:[
            {
                path:"order",
                component:()=>import("@/views/vip/order.vue")
            },
            {
                path:"info",
                component:()=>import("@/views/vip/info.vue")
            },
            {
                path:"",
                component:()=>import("@/views/vip/default.vue")
            },


        ]
    },

]
// 创建路由器、
const router =createRouter({
    history: process.env.NODE_ENV === 'production' ? createWebHashHistory() : createWebHistory(),
    routes
})

// 导出路由器
export default router