<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="item">{{item}}-{{index}}</li>
        </ul>
        <br>
        <ul>
            <li v-for="(item,key,index) in obj" :key="item">{{index+1}}-{{item}}-{{key}}</li>
        </ul>
        <br>
        <ul>
            <li @mouseenter="addActive($event)" @mouseleave="removeActive($event)"  v-for="(item) in books" :key="item">{{item.id}}-{{item.name}}-{{item.price}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            list:['java','python','c#','php','vue','react'],
            obj:{
                name:'学习',
                url:'https://www.baidu.com',
                slogen:'啦啦啦啦'
            },
            books:[
                {id:1,name:'vue从入门到入土',price:79},
                {id:2,name:'java从入门到入土',price:89},
                {id:3,name:'sql从入门到入土',price:99},
                {id:4,name:'c#从入门到入土',price:109}
            ]
        }
    },
    methods:{
        addActive($event){
            $event.currentTarget.className="active"
        },
        removeActive($event){
            $event.currentTarget.className=""
        }

    }

}
</script>

<style scoped>
ul{
    margin: 0px;
    padding: 0px;
    list-style: none ;
}

.active{
    background: red;
    color: white;
}
</style>