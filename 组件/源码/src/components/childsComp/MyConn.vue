<template>
    <div>
        <form action="#">
            网站名称：<input type="text" v-model="link.name">{{link.name}}<br>
            网站位置：<input type="text" v-model="link.url">{{link.url}}<br>
            位置排序: <input type="text" v-model="link.ord">{{link.ord}}<br>
            <input type="hidden" v-model="link.do_submit">{{link.do_submit}}<br>

            <button @click.prevent="dosubmit">添加数据</button>
        </form>

    </div>
</template>

<script>
    /*import axios from 'axios';*/

    import {post} from '../../network/request';

    export default {
        name: "MyConn",
        data() {
            return {
                mess:'this is main test',
                num:0,
                link:{
                    name:'',
                    url:'',
                    ord:0,
                    do_submit:true,
                }
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
            },
            dosubmit() {
               /*axios.post('http://api.eduwork.cn/admin/link/add', this.link, {
                   transformRequest:[
                        function(data){
                            let str = '';

                            for(let key in data){
                                str += encodeURIComponent(key) +
                                    '='
                                    + encodeURIComponent(data[key]) + '&'
                            }

                            console.log(str);
                            return str;
                        }
                   ],
                   headers: {
                       "Content-Type": "application/x-www-form-urlencoded"
                   }
               }).then(res=>{
                   console.log(res);
               }).catch(err=>{
                   console.log(err);
               });*/

               post('/link/add', this.link).then(res=>{
                   console.log(res);
               }).catch(err=>{
                   console.log(err);
               })
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