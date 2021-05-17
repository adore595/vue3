<template>
    <h3><router-link to="/main">点击进入列表页</router-link></h3>
</template>

<script>
export default {
name: "Index"
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
    font-size: 18px;
}
h3 {
    width: 180px;
    height: 38px;
    margin: 100px auto;
    text-align: center;
    line-height: 38px;
    background: deepskyblue;
    border-radius: 4px;
}
</style>