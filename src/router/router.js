import home from '../components/home.vue';
import helloWorld from '../components/HelloWorld.vue';
import user from '../components/user.vue';
import profile from '../components/pages/userProfile.vue';
import NotFound from '../components/base/NotFound.vue';
import UserGeneric from '../components/pages/UserGeneric.vue';
import userAny from  '../components/pages/userProfile.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// import VueRouter from 'vue-router'

// console.log(VueRouter) // undefined
// 定义routes 一个路由对应一个组件
const routes = [{
    path: '/', component: home
}, {
    name: 'welcome',
    path: '/hello', component: helloWorld
}, {
    name: user,
    // 通过正则限定路由
    // path: '/user/:id(\\d+)',
    path: '/user', 
    component: user,
    children: [{
        path: 'profile',
        component: profile
    }, {
        path: 'test',
        component: userAny
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


