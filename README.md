# router-study

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration

### vue中路由的相关学习
#### **引入方式**
```javascript
// vue2.* router.js
import vueRouter from 'vue-router';
import Vue from 'vue';
import test from '../components/test.vue';
import hello from '../components/HelloWorld.vue';
import VueRouter from 'vue-router';

console.log(vueRouter); // 返回一个构造函数
// 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

// 定义路由组件 每个路由映射一个组件
const routes = [{
    path: '/', component: test
}, {
    path: '/hello', component: hello
}];

// 创建 router 实例
const router = new vueRouter({
    routes, // (缩写) 相当于 routes: routes
    mode: 'history' // 路由模式： history || hash
  })

export default router;
```
```javascript
// vue3.0
import home from '../components/home.vue';
import helloWorld from '../components/HelloWorld.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import VueRouter from 'vue-router'

console.log(VueRouter) // undefined
// 定义routes 一个路由对应一个组件
const routes = [{
    path: '/', component: home
}, {
    path: '/hello', component: helloWorld
}];

// 创建router实例
// 此时不能使用VueRouter
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
```
#### **挂载方式**
```javascript
// vue2.* main.js
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router/router'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```
```javascript
// vue3.0 main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';

createApp(App).use(router).mount('#app')
```
可以看到，`vue2.*`和`vue3.0`关于路由定义的变化：
1. 因为整个的`vue-router`库都变了，原来返回的是一个`class`现在返回的是一个集合，所以我们不能再通过`new vueRouter()`新建路由实例了，需要用`createRouter()`；
> Vue Router is no longer a class but a set of functions. Instead of writing new Router(), you now have to call createRouter
2. `vue3.0`无需使用`Vue.use(VueRouter)`,但是在主函数中使用的时候，需要在`use`实例;   

####  **关于`this.$router`**
路由实例子，由`createRouter`创建，可以全局通过`this.$router`读取

#### **路由所有路径匹配**
```javascript
// vue3.0
const routes = [{ 
    // 匹配所有
    // 通过 `$route.params.pathMatch`获取参数
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound 
}, {
    // 匹配所有 user-*****
    // 通过 $route.params.afterUser 获取参数 所以前面的 afterUser 可以随便定义
    path: '/user-:afterUser(.*)', 
    component: UserGeneric
}];

// vue2.*
// 都是通过 * 通配符匹配
const routes = [{ 
    // 匹配所有
    path: '/*',
    name: 'NotFound',
    component: NotFound 
}, {
    // 匹配所有 user-*****
    path: '/user-*', 
    component: UserGeneric
}];
```
#### **路由匹配语法**
