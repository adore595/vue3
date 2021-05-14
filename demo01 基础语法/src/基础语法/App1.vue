<template>
    <div>
        {{ msg }}<br>
        {{ num }}<br>
        <button @click="add">+</button>
        <input type="text" size="3" v-model="num">
        <button @click="sum">-</button>
    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            msg: 'this is a test',
            num: 0,
            max:10,
            min:1
        }
    },
    methods:{
        add(){
            if (this.num<this.max){
                this.num++
            }
        },
        sum(){
            if (this.num>this.min){
                this.num--
            }
        }
    }
}
</script>

<style scoped>

</style>