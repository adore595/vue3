<template>
    <div>

 <!--       <h2 title="this is a test">{{msg}}</h2>
        <h2 v-bind:title="msg">{{msg}}</h2>
        <h2 :title="msg">{{msg}}</h2>
        <img :src="imgsrc" :width="size"  :height="size" alt="">
        <a :href="url">学习猿地</a>

        <br>
        <div style="width:100px;height:100px;background:blue;color:red">box</div>
        <div :style="['font-size:10px', 'background:red']">box</div>
        <div style="width:100px" :style="[fontSize, bgcolor]">box</div>


-->
        <div :style="{fontSize:'100px', 'background-color':'yellow'}">hello</div>

        <div  class="" :class="[one,two]">box2</div>
        <div  class="" :class="actice">box2</div>
        <div  class="three " :class="{one:isone, two:istwo}">box2</div>
        <div  class="three " :class="{demo}">box2</div>

        <div  class="three " :class="getStyleArr()">box2</div>
        <div  class="" :class="getStyleObj()">box2</div>


    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                msg:"this is test",
                imgsrc:'https://v3.vuejs.org/logo.png',
                url:'https://www.lmonkey.com',
                size:200,
                fontSize:'font-size:100px',
                bgcolor:'background-color:green',
                one:'one',
                two:'two',
                actice:['one', 'two'],
                isone:false,
                istwo:true,
                demo:true


            }
        },
        methods:{
            getStyleArr() {
                return [this.one,this.two];
            },
            getStyleObj() {
                return {one:this.isone, two:this.istwo}
            }
        }
    }
</script>

<style scoped>
    .one {
        background: red;
    }

    .two {
        font-size:30px;
    }

    .demo {
        width:100px;
        height:100px;
        background:green;
    }

</style>