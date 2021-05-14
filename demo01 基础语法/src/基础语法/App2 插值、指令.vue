<template>
    <div>
        <h1>{{msg+' '+str}}</h1>
        <h1>{{num}}</h1>
        <h1 v-pre>{{num}}</h1>
        <button @click="num++">button</button>
        <h1 v-once>{{num}}</h1>

        <h1 v-text="11111"></h1>
        <h1 v-html="url"></h1>
        <h1>{{url}}</h1>
    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            msg:'this is a test',
            str:'hello vue',
            num:100,
            url:`<a href="http://www.baidu.com">百度</a>`
        }
    },

}
</script>

<style scoped>

</style>