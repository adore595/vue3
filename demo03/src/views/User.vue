<template>
    <div>
        <h1>这是用户个人中心界面</h1>
    </div>
    <br>
    <div class="menu">
        <ul>
            <li><router-link to="/user/order">我的订单</router-link></li>
            <li><router-link to="/user/setting">我的设置</router-link></li>
            <li><router-link to="/user/page/1">单页1</router-link></li>
        </ul>
        <ul>
            <li v-for="item in articles">
                <router-link :to="'/user/page/'+item.id">{{item.title}}</router-link>
            </li>
        </ul>
        <ul>
            <li v-for="item in articles">
                <router-link :to="{path:'/user/article',query:{id:item.id,title:item.title}}">{{item.title}}</router-link>
            </li>
        </ul>




    </div>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "User",
    data(){
        return{
            articles:[
                {id:1,title:'文章1'},
                {id:2,title:'文章2'},
                {id:3,title:'文章3'},
                {id:4,title:'文章4'}
            ]
        }
    }
}
</script>

<style scoped>

.menu{
    width: 30%;
    height: 300px;
    background: #F0FFF0;
    float: left;
}
.content{
    width: 70%;
    height: 300px;
    background: #888888;
    float: right;
}

</style>