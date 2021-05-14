<template>
    这是文章的模板
    <h2>文章id:{{pageid}}</h2>
</template>

<script>
export default {
    name: "MyPage",
    computed:{
        pageid(){
            return this.$route.params.pid
        },
    }

}
</script>

<style scoped>

</style>