<template>
    <div class="mybar">
        <h6>{{title}}</h6>
        <slot name="one"><button>提交</button></slot>
        <slot name="two">222</slot>
        <slot :user="user">def</slot>
    </div>
</template>

<script>
export default {
    name: "MyBar",
    data(){
        return{
            msg:"mybar test",
            title:"title111",
            user:{name:'eduwork'}
        }
    }
}
</script>

<style scoped>
.mybar{
    width: 80%;
    height: 70px;
    background: yellow;
    margin: 10px;

}
</style>