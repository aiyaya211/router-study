<template>
    <div>This is home page</div>
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