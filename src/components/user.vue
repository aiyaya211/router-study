<template>
    <div>this is user {{$route.params.id}}</div>
    <input type="text" placeholder="路由位置" v-model="mypath" />
    <button @click="changeChildren">改变子路由</button>
    <router-view></router-view>
    <router-link to="/user/test">路由跳转</router-link>
</template>
<script>
export default {
    name: "user",
    watch: {
        // 复用组件的情况下 通过watch route变化来监听路由的变化
        $route: {
            handler(val) {
                console.log(val.params.id);
                console.log('routes')
            }
        }
    },
    beforeRouteUpdate (to, from, next) {
        console.log(`to: ${JSON.stringify(to)}`)
        console.log(`from: ${JSON.stringify(from)}`)
        console.log(`next: ${JSON.stringify(next)}`)
    },
    data() {
        return {
            mypath: ""
        }
    },
    methods: {
        changeChildren() {
            console.log(this.$router)
            this.$router.push({name: 'welcome', hash: '#aiyaya'});
        }
    }
}
</script>
<style scoped>

</style>