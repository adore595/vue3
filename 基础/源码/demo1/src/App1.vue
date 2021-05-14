<template>
    <div>
        {{msg}} {{num}}

        <input type="text" v-model="msg">
        <br>
        <button @click="sub">-</button>
        <input type="text" size="3" v-model="num">
        <button @click="add">+</button>

    </div>
</template>

<script>

    const data = {
        msg:'this is a test',
        num:0,
        max:10,
        min:1,
    }

    export default {
        name: "App",
        data() {
            return data
        },
        methods:{
            add() {
                if(this.num >= this.max)
                {
                    this.num = this.max;
                }else{
                    this.num++
                }

            },

            sub() {
                if(this.num <= this.min){
                    this.num = this.min;
                }else{
                    this.num--
                }

            }
        }
    }
</script>

<style scoped>

</style>