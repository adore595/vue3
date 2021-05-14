<template>
    <div id="nav">
        <router-link active-class="active" to="/home">首页</router-link>|
        <router-link to="/about">关于我们</router-link>|
        <button @click="$router.push('/user')">个人中心</button>

    </div>
    <hr>
    <router-view></router-view>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.active {
    color: red !important;
}
</style>
