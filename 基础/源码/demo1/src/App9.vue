<template>
    <div>
       <!-- <input type="text" v-model="msg">
        <br>
        {{msg}}-->

        <!--<input type="text" :value="msg" @input="inchange">-->
       <!-- <input type="text" :value="msg" @input="msg=$event.target.value">-->
       <!-- <br>
        <input type="text" v-model.lazy="msg">-->
       <!-- <input type="number" v-model.number="msg">
        <br>
        {{typeof(msg)}}-->

       <!-- <input type="number" v-model.number.lazy="msg">
        <br>
        {{typeof(msg)}}{{msg}}-->


     <!--   <input type="text" v-model.trim="msg">
        <br>
        {{typeof(msg)}}{{msg}}-->

        <label for="one">
            <input id="one" type="radio"   value="男" v-model="sex">男
        </label>
        <label for="two">
            <input id="two" type="radio" value="女" v-model="sex">女
        </label>

        <br>
        {{sex}}
        <br>
        <label for="a">
            <input id="a" type="checkbox" v-model="isAgree"> 同意协议 {{isAgree}}
        </label>


        <br>
        <label for="b">
            <input id="b" type="checkbox" value="java" v-model="tags"> Java
        </label>

        <label for="c">
            <input id="c" type="checkbox" value="python" v-model="tags"> Python
        </label>

        <label for="d">
            <input id="d" type="checkbox" value="vue" v-model="tags"> Vue
        </label>

        <label for="e">
            <input id="e" type="checkbox" value="php" v-model="tags"> PHP
        </label>
        <br>
        {{tags}}

        <br>

        <select v-model="language">
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option  value="PHP">PHP</option>
            <option value="vue">Vue</option>
            <option value="react">React</option>
        </select>
        <br>
        {{language}}
        <br>
        <select v-model="languages" multiple size="6">
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option  value="PHP">PHP</option>
            <option value="vue">Vue</option>
            <option value="react">React</option>
        </select>
        <br>
        {{languages}}


    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                msg:0,
                sex:'女',
                isAgree:true,
                tags:[],
                language:'vue',
                languages:''
            }
        },
        methods:{
            inchange(event) {
                this.msg=event.target.value;

            }
        }
    }
</script>

<style scoped>

</style>