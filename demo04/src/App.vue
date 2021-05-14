<template>
    <Hello></Hello>
</template>

<script>
import Hello from "@/views/Hello";


export default {
    name: "App",
    components: {Hello},
    data() {
        return {}
    }
}
</script>

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

.home {
    width: 1000px;
    margin: 0 auto;
}
</style>
