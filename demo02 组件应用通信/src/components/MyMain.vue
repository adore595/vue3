<template>
    <div style="width: 100px;height: 20px;background: yellow">
        {{count}}
        <button @click="two">+1</button>
    </div>
    <my-conn ref="aaa" @click="show" @mycountevent="mydemo"></my-conn>
    <my-conn @mycountevent="mydemo"></my-conn>
    {{msg}} {{title}}
    <span v-for="item in article">{{ item }}</span>
</template>

<script>
import MyConn from "@/components/childsComp/MyConn";
export default {
    name: "MyMain",
    // props:['msg','title','article'],
    //default 默认值  required 必传
    props:{
        msg:{
            type:String,
            default:'lalala',
            required:true
        },
        title:{
            type: String
        },
        article:{
            type:Array
        }
    },
    data(){
        return{
            count:0
        }
    },
    components:{
        MyConn
    },
    methods:{
        show(){
            console.log(this.msg);
        },
        mydemo(data){
            this.count=this.count+data
        },
        change(){
            this.count++
        },
        two(){
            alert('父组件调用子组件的方法')
            this.$refs.aaa.changeone()
        }
    },
    beforeCreate() {
        console.log('实例刚刚被创建');
    },
    created() {
        console.log('实例已经创建完成');
    },
    beforeMount() {
        console.log('模板编译之前');
    },
    mounted() {
        console.log('模板编译完成');
    },
    beforeUpdate() {
        console.log('数据更新之前');
    },
    updated() {
        console.log('数据更新完成');
    },
    activated() {
        console.log('keep-alive 缓存的组件激活时调用');
    },
    deactivated() {
        console.log('keep-alive 缓存的组件停用时调用');
    },
    beforeUnmount() {
        console.log('实例销毁之间');
    },
    unmounted() {
        console.log('实例销毁完成');
    },

}
</script>

<style scoped>

</style>