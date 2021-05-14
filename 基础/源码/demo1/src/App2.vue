<template>
    <div>
        <h1>{{msg+' '+str}}</h1>
        <h1>{{num+num*2}}</h1>
        <h2>{{num}}</h2>
        <h2 v-pre>{{num}} aaa bbb
                <i>dddd</i>ccc
        </h2>
        <pre>
            aaass
            bbb   ccc
        </pre>
        <button @click="num++">button</button>
        <h2 v-once>{{num}}</h2>
        <h2 v-text="num"></h2>
        <h2 v-text="num*2+' '+msg"></h2>
        <h2 v-text="num"></h2>
        <h2 v-html="num*2"></h2>
        <h2 v-html="url"></h2>
        <h2>{{url}}</h2>
        <h2>bbb&nbsp;aaa</h2>
    </div>
</template>

<script>




    export default {
        name: "App",
        data() {
            return {
                msg:'this is test111',
                str: 'hello vue',
                num:101,
                url:`<a href="http://www.lmonkey.com">学习猿地</a>`
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>