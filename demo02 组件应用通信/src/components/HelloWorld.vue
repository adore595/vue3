<template>
    <div>
        <h1 class="box1">{{msg}}</h1>
        <OneComp></OneComp>
    </div>
</template>

<script>
import OneComp from "@/components/OneComp";

export default {
    name: "HelloWorld",
    components:{
        OneComp
    },
    data(){
        return{
            msg:'hello world'
        }
    }
}
</script>

<style scoped>
.box1{
    width: 300px;
    height: 100px;
    line-height: 100px;
    padding: 100px;
    color: red;
}
</style>