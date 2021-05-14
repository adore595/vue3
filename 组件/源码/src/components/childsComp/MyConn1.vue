<template>
    <div class="myconn">
    <button @click="changenum(2)">+</button>
    {{mess}}
    <button @click="one">++</button>
    <br>
    <input ref="username" type="text">
    {{num}}
    <br>
    <span v-for="item in article">{{item}}</span>
</div>
</template>

<script>
    export default {
        name: "MyConn",
        data() {
            return {
                mess:'this is main test',
                num:0
            }
        },
        props:{
            article:{
                type:Array
            }
        },

        beforeUnmount() {
            console.log('7 ##### ---- 实例在销毁之前调用')
        },
        unmounted() {
            console.log('8 ####--- 实例销毁完成')
        },
        activated() {
            console.log('@@@@@通过keep-alive缓存之前调用');
            this.$nextTick(()=>{
                this.$refs.username.focus();
            })

        },
        deactivated() {
            console.log('@@@@@缓存数据恢复调用');
        },


        methods: {
            changenum(num) {
                this.$emit('mycountevent', num);
            },
            one() {
                console.log('这是子组件MyConn中的one()')
                this.$parent.changen();
                console.log(this.$parent.count);
                console.log(this.$parent.$parent.msg);
                this.$root.appmet();
            },
            changeone() {
                this.num++;
            }
        }
    }
</script>

<style scoped>
    .myconn {
        width:90%;
        height:100px;
        background: #34FFFF;
        margin:10px;
    }
</style>