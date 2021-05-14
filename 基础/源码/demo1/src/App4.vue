<template>
    <div>
      <!--  <h2>{{name}} - {{slogen}}</h2>
        <h2>{{name+' - '+slogen}}</h2>
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
        <h2>{{title}}</h2>
-->

        总价：<small>￥</small>{{books[0].price+books[1].price+books[2].price+books[3].price}}
        <br>

        总价：<small>￥</small>{{totalPrice}}

    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
               name:'学习猿地',
                slogen:'成就自己只需一套精品！',
                books:[
                    {id:1, name:'《细说PHP》第一版',price:79},
                    {id:1, name:'《细说PHP》第二版',price:108},
                    {id:1, name:'《细说PHP》第三版',price:138},
                    {id:1, name:'《细说PHP》第三版',price:138},
                    {id:1, name:'《细说PHP》第三版',price:138},
                    {id:1, name:'《细说PHP》第三版',price:138},
                    {id:1, name:'《细说PHP》第四版',price:158}
                ]
            }
        },
        computed: {
            totalPrice: {
              get() {
                  return this.books.reduce((s,n)=>s+n.price, 0)
              }
            },
            title:{
                set(values){
                    let arr=values.split(' - ');
                    this.name = arr[0];
                    this.slogen=arr[1];
                },
                get(){
                    console.log('11111111');
                    return this.name+' # '+this.slogen;
                }
            }
        },

        methods:{
            getTitle() {
                console.log('222222222');
                this.title="学习猿地 - slogen"
                return this.name+' - '+this.slogen;
            }
        }
    }
</script>

<style scoped>

</style>