<template>
    <h1>{{msg}}</h1>
    <router-link to="/home">进入</router-link>
</template>

<script>

export default {
    name: "Hello",
    data(){
        return{
            msg:'hello'
        }
    }
}
</script>

<style scoped>

</style>