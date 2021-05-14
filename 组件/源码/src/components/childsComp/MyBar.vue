<template>
    <div class="mybar">
        <h6>{{title}}</h6>
        <slot name="one"><button>提交</button></slot>
        <slot name="two" :user2="user">1111</slot>
        <slot :user="user"></slot>
    </div>
</template>

<script>
    export default {
        name: "MyBar",
        data() {
            return {
                title:'title1111',
                user: {name:'eduwork'}
            }
        },
        methods: {
            add(x=1, y=2) {
                return x+y;
            }
        }
    }
</script>

<style scoped>
    .mybar {

        width:80%px;
        height:70px;
        margin:10px;
        background: yellow;
    }
</style>