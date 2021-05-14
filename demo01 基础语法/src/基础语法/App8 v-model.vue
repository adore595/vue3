<template>
    <!--    <div>-->
    <!--修饰符 .lazy懒加载 .number数字类型 .-->
    <!--        <input type="number" v-model.number="msg"><br>-->
    <!--        {{typeof(msg)}}<br>-->
    <!--    </div>-->
    <!--    <br>-->
    <!--    <div>-->
    <!--        &lt;!&ndash;修饰符 .lazy懒加载 .number数字类型 .tram 自动过滤首尾空格&ndash;&gt;-->
    <!--        <input type="text" v-model="msg"><br>-->
    <!--        {{msg}}-->
    <!--    </div>-->

    <div>
        <label htmlFor="one">
            <input id="one" type="radio" value="男" v-model="sex"> 男
        </label>
        <br>
        <label htmlFor="two">
            <input id="two" type="radio" value="女" v-model="sex"> 女
        </label>
        <br>
        {{ sex }}
        <br>
        <label htmlFor="a">
            <input id="a" type="checkbox" v-model="isagree">同意协议
            {{ isagree }}
        </label>
        <br>
        <label htmlFor="b">
            <input id="b" type="checkbox" value="java" v-model="tags">java
        </label>
        <label htmlFor="c">
            <input id="c" type="checkbox" value="python" v-model="tags">python
        </label>
        <label htmlFor="d">
            <input id="d" type="checkbox" value="c#" v-model="tags">c#
        </label>
        <label htmlFor="e">
            <input id="e" type="checkbox" value="php" v-model="tags">php
        </label>
        <br>
        {{ tags }}
        <br>

        <select v-model="language">
            <option value="java">java</option>
            <option value="python">python</option>
            <option value="c#">c#</option>
            <option value="vue">vue</option>
            <option value="php">php</option>
        </select>
        <br>
        {{ language }}
        <br>
        <select v-model="languages" multiple>
            <option value="java">java</option>
            <option value="python">python</option>
            <option value="c#">c#</option>
            <option value="vue">vue</option>
            <option value="php">php</option>
        </select>
        <br>
        {{ languages }}
    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            msg: 'this is testadd',
            sex: '男',
            isagree: false,
            tags: ['java', 'php'],
            language: 'vue',
            languages: []
        }
    },

}
</script>

<style scoped>

</style>