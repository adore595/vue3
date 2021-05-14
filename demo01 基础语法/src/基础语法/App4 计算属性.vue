<template>
    <div>
        <h2>{{ name }}-{{ slogen }}</h2>
        <h2>{{ name + '-' + slogen }}</h2>
        <h2>{{getTitle()}}</h2>
        <h2>{{getTitle()}}</h2>
        <h2>{{getTitle()}}</h2>
        <h2>{{getTitle()}}</h2>
        <h2>{{getTitle()}}</h2>
        <h2>{{getTitle()}}</h2>
        <h2>{{title}}</h2>
        <h2>{{title}}</h2>
        <h2>{{title}}</h2>
        <h2>{{title}}</h2>
        <h2>{{title}}</h2>
        总价:<small>￥</small>{{books[0].price+books[1].price+books[2].price}}<br>

        总价:<small>￥</small>{{totalPrice}}

    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            name: 'ttl',
            slogen: 'lalalal',
            books:[
                {id:1,name:'vue从入门到入土',price:79},
                {id:2,name:'java从入门到入土',price:89},
                {id:3,name:'sql从入门到入土',price:99},
                {id:4,name:'c#从入门到入土',price:109}
            ]
        }
    },
    methods:{
        getTitle(){
            console.log('22222');
            return this.name+'-'+this.slogen
        }
    },
    computed:{
        totalPrice:{
            get() {
                return this.books.reduce((s,n)=>s+n.price,0)
            }
        },
        title:{
            get(){
                console.log('1111111');
                return this.name+'-'+this.slogen
            }
        }
    }

}
</script>

<style scoped>

</style>