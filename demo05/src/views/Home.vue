<template>
    <div class="home">
        <h2>这是在单页模板中应用</h2>
        <h2>{{count}}</h2>
        <button @click="count--">-</button>
        <button @click="count++">+</button>
        <hr>
        <h2>使用全局的状态</h2>
        <h2>{{$store.state.num}}</h2>
        <button @click="$store.state.num--">-</button>
        <button @click="$store.state.num++">+</button>
        <hr>
        <h2>使用Mutations来修改状态并传参</h2>
        <h2>devnum:{{$store.state.devnum}}</h2>
        <button @click="$store.commit('sub')">-</button>
        <button @click="$store.commit('add',2)">++</button>
        <HelloWorld :count="count"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data(){
        return{
            count:0
        }
    }
}
</script>
