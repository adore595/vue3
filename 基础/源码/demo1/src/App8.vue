<template>
    <div>
       <!-- <ul>
            <li v-for="item in list" :key="item">{{item}}</li>
        </ul>-->

     <!--   <ul>
        <li v-for="(item, index) in list" :key="item">{{index+1}}-{{item}}</li>
    </ul>
-->
      <!--  <ul>
            <li v-for="(item, key) in obj" :key="item">{{key}} : {{item}}</li>
        </ul>-->

       <!-- <ul>
            <li v-for="(item, key, index) in obj" :key="item">{{index+1}}-{{key}} : {{item}}</li>
        </ul>-->
        <div>
            <input type="text" v-model="name">
            <button @click="add()">添加</button>
        </div>
        <ul>
            <li :class="{active:item.active}"
                @mouseenter="over(index)"
               v-for="(item, index) in books"
            :key="item.id">
                <input type="checkbox">
                {{index+1}}-{{item.name}}--￥{{item.price}}
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                list:['Java','Python', 'PHP', 'Vue', 'React'],
                obj:{
                    name:'学习猿地',
                    url:'https://www.lmonkey.com',
                    slogen:'成就自己的只需一套精品！'
                },
                name:'',
                newid:6,
                books:[
                    {id:1, name:'细说PHP', price:158, active:false},
                    {id:2, name:'细说网页制作', price:158,  active:false},
                    {id:3, name:'细说JavaScript', price:158,  active:false},
                    {id:4, name:'细说HTML5高级API', price:158, active:false},
                    {id:5, name:'细说DOM和BOM', price:158, active:false},
                ]
            }
        },
        methods:{
            over(index){
               for(let i=0; i<this.books.length; i++){
                   if(index == i)
                    this.books[index].active = true;
                   else
                       this.books[i].active = false;
               }
            },
            add(){
                this.books.unshift({id:++this.newid, name:this.name, price:128, active:false});
                this.name='';

                console.log(this.books);
            }
        }
    }
</script>

<style scoped>
ul {
    margin:0px;
    padding:0px;
    list-style: none;
}
    .active {
        background:#888;
        color:white;
    }


</style>