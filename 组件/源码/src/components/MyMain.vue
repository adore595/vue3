<template>

    <my-conn></my-conn>

    <!--<div style="width:100px;height:50px;background:yellow">
        {{count}}
        <button @click="two">子组件加1</button>
        <br>
        <button @click="isShow = !isShow">销毁conn</button>
    </div>

    <keep-alive>
        <my-conn v-if="isShow" ref="aaa" @mycountevent="mydemo"></my-conn>
    </keep-alive>


    <my-conn ref="bbb" @mycountevent="mydemo" :article="article"></my-conn>
    {{msg}}
    {{show()}}
    <br>
    <h1>{{MyTitle}}{{MyTitle}}
    </h1>
    <span v-for="item in article">{{item}}</span>-->
</template>

<script>
    import MyConn from "./childsComp/MyConn";
    export default {
        name: "MyMain",
        // props:['name1', 'name2' ....]
        props: {
            msg:{
                type:String,
                default:'############'
            },
            MyTitle: {
                type:String,
                required:true
            },
            article: {
                type:Array,
                default:['aaaa', 'bbbb', 'cccc'],
            }
        },


        data() {
            return {
                msg1:'world',
                count:0,
                isShow:true
            }
        },

        beforeCreate() {
            console.log('1 --- 创建实例之前自动调用 beforeCreate()')
        },
        created() {
            console.log('2--- 实例创建完成 created()')
        },

        beforeMount() {
            console.log('3 ---- 模板编译之前 beforeMount')
        },
        mounted() {
            console.log('4---模版编译完成 mounted')
        },
        beforeUpdate() {
            console.log('5--- 模板更新之前')
        },
        updated() {
            console.log('6--- 模板内容更新完成')
        },
        beforeUnmount() {
            console.log('7 ---- 实例在销毁之前调用')
        },
        unmounted() {
            console.log('8--- 实例销毁完成')
        },




        components: {
            MyConn
        },
        methods: {
            show() {
                return this.msg+this.msg1;
            },
            mydemo(data) {
                this.count += data;
            },
            changen() {
                this.count++;
            },
            two() {
                console.log('这是父组件中的two方法')
                this.$refs.aaa.changeone();
                this.$refs.bbb.changeone();

                console.log(this.$refs.aaa.num)
                console.log(this.$refs.bbb.num)
            }
        }
    }
</script>

<style scoped>

</style>