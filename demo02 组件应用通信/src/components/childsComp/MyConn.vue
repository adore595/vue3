<template>
    <div class="myconn">
        <button @click="change(2)">+</button>
        {{msg}}
        <button @click="one">++</button>
        <br>
        {{num}}
        <br>
    </div>
</template>

<script>
export default {
    name: "MyConn",
    data(){
        return{
            msg:"this is conn test",
            num:0
        }
    },
    methods:{
        change(num){
            this.$emit('mycountevent',num);
        },
        one(){
            this.$parent.change();
            this.$root.appmet();
        },
        changeone(){
            this.num++
        }
    }
}
</script>

<style scoped>
.myconn{
    width: 90%;
    height: 110px;
    background: #34FFFF;
    margin: 10px;
}
</style>