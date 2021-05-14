<template>
    <section class="conn">
        <header class="header">
            <my-header></my-header>
        </header>
        <div class="main">
            <div class="content">
                <my-main  :msg="msg"  title="title" :article="article"></my-main>
            </div>
            <div class="sidebar">
                <my-side-bar></my-side-bar>
            </div>
        </div>
        <footer class="footer">
            <my-footer></my-footer>
        </footer>
    </section>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyMain from "@/components/MyMain";
import MySideBar from "@/components/MySideBar";
import MyFooter from "@/components/MyFooter";

export default {
    name: "App",
    data(){
        return{
            msg:'test',
            article:[
                {id:1},
                {id:2},
                {id:3}
            ]
        }
    },
    components:{
        MyHeader,MyMain,MySideBar,MyFooter
    },
    methods:{
        appmet(){
            alert("👴是app组件中的方法")
        }
    }
}
</script>

<style scoped lang="scss">
$width:600px;
$color1:#ccc;
$color2:#8888;

html,body,ul,li,img{
    margin:0px;
    padding: 0px;
}

.conn{
    width: $width;
    background: $color1;
    height: 500px;
    margin: 0 auto;
}
.header{
    width: $width;
    height: 80px;
    background: $color2;

}
.main{
    width: 100%;
    height: 300px;
    background: yellow;
}
.footer{
    width: 100%;
    height: 550px;
    background: green;
}
.content{
    width: 60%;
    height: 300px;
    float: left;
    background: $color1;
}
.sidebar{
    width: 40%;
    height: 300px;
    float: right;
    background: #F0FFF0;
}
</style>