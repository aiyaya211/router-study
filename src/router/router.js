import home from '../components/home.vue';
import helloWorld from '../components/HelloWorld.vue';
import user from '../components/user.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
// import VueRouter from 'vue-router'

// console.log(VueRouter) // undefined
// 定义routes 一个路由对应一个组件
const routes = [{
    path: '/', component: home
}, {
    path: '/hello', component: helloWorld
}, {
    path: '/user/:id', component: user
}];

// 创建router实例
// 此时不能使用VueRouter
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;


