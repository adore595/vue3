<template>
    <div>
        <button @click="num--">-</button>
        <input type="text" size="2" v-model="num">
        <button @click="num++">+</button>
        <br>
        <button @click="sub(3,$event)">-</button>
        <input type="text" size="2" v-model="num">
        <button @click="add()">+</button>
        <br>
        <div id="box1" @click.self="one()">
            <div id="box2" @click="two()">
                <button @click="three()">按钮</button>
            </div>
        </div>
        <br>
        <a href="https:www.baidu.com" @click.prevent="demo">baidu</a>

    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            num:0
        }
    },
    methods:{
        sub(p,q){
            console.log(p);
            console.log(q);
            this.num=this.num-p
        },
        add(p){
            console.log(p);
            this.num++
        },
        one(){
            console.log("111111111");
        },
        two(){
            console.log("22222222222");
        },
        three(){
            console.log("33333333");
        },
        demo(){
            console.log("1111111");
        }
    }

}
</script>

<style scoped>

#box1{
    width: 300px;
    height: 300px;
    background: red;
}
#box2{
    width: 150px;
    height: 150px;
    background: green;
}
</style>