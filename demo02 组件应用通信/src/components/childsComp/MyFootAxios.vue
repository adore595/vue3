<template>
    <div>
        <form action="">
            类型<input type="text" v-model="user.cardType">{{user.cardType}}<br>
            号码<input type="text" v-model="user.cardNo">{{user.cardNo}}<br>
            姓名<input type="text" v-model="user.userName">{{user.userName}}<br>
            年龄<input type="text" v-model="user.userAge">{{user.userAge}}<br>
            性别<input type="text" v-model="user.userSex">{{user.userSex}}<br>
            人员类型<input type="text" v-model="user.userRole">{{user.userRole}}<br>
            <button @click.prevent="dosub">提交</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import {post} from "@/util/request";

export default {
    name: "MyFootAxios",
    data(){
        return{
            msg:'test',
            user:{
                cardType:'身份证',
                cardNo:'8888888888888',
                userName:'ttl',
                userAge:'22',
                userSex:'女',
                userRole:'学生',
            }
        }
    },
    methods:{
        dosub(){
            console.log(this.user);
            post("/createUser",this.user).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>

</style>