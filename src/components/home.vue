<template>
    <div>This is home page</div>
    <router-link to="/user">个人主页</router-link>
</template>
<script>
export default {
    name: 'home',
    mounted() {
        console.log('this.$router');
        console.log(this.$router);
        console.log(this.$route)
    }
}
</script>