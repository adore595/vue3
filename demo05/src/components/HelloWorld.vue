<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h3>在子组件helloworld中应用home的data</h3>
        <h3>{{count}}</h3>
        <h3>使用vuex</h3>
        <h3>{{$store.state.num}}</h3>
        devnum
        <h3>{{$store.state.devnum}}</h3>

        <h3></h3>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
        count:Number
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
