// import Router from 'vue-router';
import home from '../components/home.vue';
import helloWorld from '../components/HelloWorld.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [{
    path: '/', component: home
}, {
    path: '/hello', component: helloWorld
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;


