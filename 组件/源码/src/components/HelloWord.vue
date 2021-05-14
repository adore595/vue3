<template>
    <div>
        <h1 class="box1 box3"><strong>{{message}}</strong></h1>
        <OneComp ></OneComp>
        <one-comp></one-comp>
    </div>
</template>

<script>
    import OneComp from "./OneComp";

    export default {
        name: "HelloWord",
        components: {
          OneComp
        },
        data() {
            return {
                message:"Hello world!!!!!!"
            }
        }
    }
</script>

<style scoped lang="scss">
    $w:200px;
    $color:green;

    .box1 {
        width:$w;
        color:$color;
        background: yellow;
        font-size:50px;
    }
</style>