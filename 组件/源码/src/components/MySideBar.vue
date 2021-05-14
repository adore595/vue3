<template>
    <my-bar>
        <template v-slot:two="hello">
            <a href="">{{hello.user2.name}}</a>
        </template>
        <template v-slot:default="subdata">
            <a href="">{{subdata.user.name}}</a>
        </template>
    </my-bar>
    <my-bar>
        <template #one>
            <a href="">提交</a>
        </template>

        <template v-slot:default="subdata">
            <a href="">{{subdata.user.name}}</a>
        </template>

    </my-bar>
    <my-bar>

    </my-bar>
</template>

<script>
    import MyBar from "./childsComp/MyBar";
    export default {
        name: "MySideBar",
        data() {
            return {
                name:'hello'
            }
        },
        components: {
            MyBar
        }
    }
</script>

<style scoped>

</style>