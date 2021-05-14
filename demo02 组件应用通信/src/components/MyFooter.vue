<template>
    footer<br>
    <MyFootAxios></MyFootAxios>
    <table>
        <caption><h1>用户列表</h1></caption>
        <tr>
            <th>userid</th>
            <th>cardtype</th>
            <th>cardno</th>
            <th>username</th>
            <th>usersex</th>
            <th>userage</th>
            <th>userole</th>
        </tr>
        <tr v-for="item in users">
            <td>{{item.userId}}</td>
            <td>{{item.cardType}}</td>
            <td>{{item.cardNo}}</td>
            <td>{{item.userName}}</td>
            <td>{{item.userSex}}</td>
            <td>{{item.userAge}}</td>
            <td>{{item.userRole}}</td>
        </tr>
    </table>

</template>

<script>
import MyFootAxios from "./childsComp/MyFootAxios";
import axios from "axios";
import {get} from "@/util/request";

export default {
    name: "MyFooter",
    components:{
        MyFootAxios
    },
    data(){
        return{
            users:[]
        }
    },
    mounted() {
        get("/findAll").then(res=>{
            console.log(res);
            this.users=res.data;
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>

</style>