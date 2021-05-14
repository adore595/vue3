<template>
    <div class="footer">
        <ul>
            <li v-for="item in links"><a href="item.url">{{item.name}}</a></li>
        </ul>
    </div>
</template>

<script>
   /* import axios from 'axios';*/

      import {get} from '../network/request';

    export default {
        name: "MyFooter",
        data() {
            return {
                links:[]
            }
        },
        mounted() {
          /*  axios.get('http://api.eduwork.cn/admin/link')
                .then(res=>{
                    console.log(res.data);
                    this.links = res.data;
                }).catch(err=>{
                console.log(err);
            });*/

          get('/link', {name:'学习猿地'}).then(res=>{
              this.links = res.data;
          }).catch(err => {
              console.log(err);
          })
        }
    }
</script>

<style scoped lang="scss">
    .footer {
        float:left;
        margin-top:20px;
        width:100%;
        height:100px;
        background: #F0FFF0;
    }

    ul {
        list-style: none;
        margin:10px;
        padding:0px;
        li {
            display:inline-block;
            margin:10px;
        }
    }
</style>