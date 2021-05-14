<template>
    <div>
        <button v-on:click="num--">-</button>
        <input type="text" size="2" v-model="num">
        <button @click="num++">+</button>

        <br>

        <button v-on:click="sub()">-</button>
        <input type="text" size="2" v-model="num">
        <button @click="add">+</button>

        <br>
        <button v-on:click="sub('hello')">-</button>
        <input type="text" size="2" v-model="num">
        <button @click="add(100, $event)">+</button>

        <br>
    <!--    <div @click="one()" id="box1">
            <div @click.stop="two()" id="box2">
                    <button @click.stop="three()">按钮</button>
            </div>

        </div>
-->
     <!--   <div @click="one()" id="box1">
            <div @click.self.stop="two()" id="box2">
                <button @click="three()">按钮</button>
            </div>

        </div>-->

     <!--   <div @click.capture="one()" id="box1">
            <div @click.capture="two()" id="box2">
                <button @click="three()">按钮</button>
            </div>

        </div>-->

        <div @click.capture="one()" id="box1">
            <div @click.capture="two()" id="box2">
                <button @click="three()">按钮</button>
            </div>

        </div>

        <br>
        <a href="https://www.lmonkey.com" @click.prevent.once="demo()">学习猿地</a>

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

            sub(p) {
                console.log(p);
                this.num--;
            },

            add(n, e){
                console.log(n);
                console.log(e);
                this.num++
            },
            one(){
                console.log('1111111111111111111');
            },
            two() {
                console.log('2222222222222222');
            },
            three() {
                console.log('3333333333333333333');
            },
            demo() {
                console.log('####################3');
            }
        }
    }
</script>

<style scoped>
#box1 {
    width:300px;
    height:300px;
    background:red;

}

#box2 {
    width:150px;
    height:150px;
    background:green;

}



</style>