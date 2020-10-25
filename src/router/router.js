import home from '../components/home.vue';
import helloWorld from '../components/HelloWorld.vue';
import user from '../components/user.vue';
import profile from '../components/pages/userProfile.vue';
import NotFound from '../components/base/NotFound.vue';
import UserGeneric from '../components/pages/UserGeneric.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// import VueRouter from 'vue-router'

// console.log(VueRouter) // undefined
// 定义routes 一个路由对应一个组件
const routes = [{
    path: '/', component: home
}, {
    path: '/hello', component: helloWorld
}, {
    name: user,
    path: '/user/:id', 
    component: user,
    children: [{
        name: 'profile',
        path: 'profile',
        component: profile
    }]
}, { 
    // 匹配所有
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound 
}, {
    // 匹配所有 user-*****
    path: '/user-:afterUser(.*)', 
    component: UserGeneric
}];

// 创建router实例
// 此时不能使用VueRouter
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;


