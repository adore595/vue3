<template>
    <section class="conn">
        <header class="header">
            <my-header></my-header>
        </header>

        <div class="nav">
            <ul>
                <li v-for="item in navs"><a href="" @click.prevent="page=item.id">{{item.name}}{{item.id}}</a></li>
            </ul>
        </div>

        <div class="main">
            <div v-if="page == 1">
                <home></home>
            </div>

            <div v-if="page == 2">
                <list-page></list-page>
            </div>

            <div v-if="page == 3">
                <conn-page></conn-page>
            </div>

            <div v-if="page == 4">
                <About></About>
            </div>

          <!--  <div class="content">
                <my-main
                        msg="hello"
                        :MyTitle="msg"
                        :article="article"
                >

                </my-main>
            </div>

            <div class="sidebar">
                <my-side-bar></my-side-bar>
            </div>
-->
        </div>
        <footer class="footer">
            <my-footer></my-footer>
        </footer>
    </section>

</template>

<script>
    import MyHeader from "./components/MyHeader";
    import MyMain from "./components/MyMain";
    import MySideBar from "./components/MySideBar";
    import MyFooter from "./components/MyFooter";
    import home from "./views/home";
    import ConnPage from "./views/ConnPage";
    import ListPage from "./views/ListPage";
    import About from "./views/About";
export default {
    name: 'App',

    data() {
        return {
            msg:"this is app data msg!",
            article:[
                '1111111',
                '2222222',
                '3333333',
            ],
            navs:[
                {name:'首页', id:1},
                {name:'列表页', id:2},
                {name:'内容页', id:3},
                {name:'关于我们', id:4}
            ],
            page:1
        }
    },
    components:{
        MyHeader,
        MyMain,
        MySideBar,
        MyFooter,
        home,
        ListPage,
        ConnPage,
        About
    },
    methods: {
        appmet() {
            console.log('我是APP Root组件中的appmet方法')
        }
    }

}
</script>

<style lang="scss">
    $width:600px;
    $color1:#ccc;
    $color2:#888;

    html,body,ul,li,img {
        margin:0px;
        padding:0px;
    }

  .conn {
      width:$width;
      background:$color1;
      height:500px;
      margin:0 auto;
  }
    .header {
        float:left;
        width:$width;
        height:80px;
        background:$color2;
    }

    .main {
        width:100%;
        height:300px;
        background: yellow;
    }
    .footer {
        width:100%;
        height:100px;
        background: green;
    }

    .content {
        width:60%;
        float:left;
        background: $color1;
        height:300px;
    }

    .sidebar {
        width:40%;
        float:right;
        background: #F0FFF0;
        height:300px;
    }

    .nav {
        float:left;
        width:100%;
        height:30px;
        line-height: 30px;
        margin:20px 0;
        background:#F0FFF0;
        ul {

            list-style: none;
            margin:0px;
            padding:0px;
            li {
                display: inline-block;
                margin:0px 20px;
            }
        }
    }


</style>
