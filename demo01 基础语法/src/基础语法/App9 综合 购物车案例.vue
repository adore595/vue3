<template>
    <div>
        <div v-if="cartList.length<=0">你没有选择的商品，购物车为空，去购物</div>
        <table v-else>
            <caption><h1>购物车</h1></caption>
            <tr>
                <th> </th>
                <th>编号</th>
                <th>商品名称</th>
                <th>商品价格</th>
                <th>购买数量</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item,index) in cartList" :key="item.id">
                <td><input type="checkbox" v-model="item.checkbox"></td>
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td><small>￥</small>{{item.price.toFixed(2)}}</td>
                <td>
                    <button @click="item.count--" :disabled="item.count<=0">-</button>
                    {{item.count}}
                    <button @click="item.count++" :disabled="item.count>=10">+</button>
                </td>
                <td><a href="#" @click.prevent="del(index)">删除</a></td>
            </tr>
            <tr>
                <td colspan="3" align="right">总价</td>
                <td colspan="3"><small>￥</small>{{totalPrice.toFixed(2)}}</td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            cartList:[
                {id:1,checkbox:true,name:'螺蛳粉',price:15,count:1},
                {id:2,checkbox:true,name:'煮粉',price:14,count:1},
                {id:3,checkbox:true,name:'龟苓膏',price:12,count:1},
                {id:4,checkbox:true,name:'酸辣粉',price:6,count:1},
                {id:5,checkbox:true,name:'炒粉',price:8,count:1},
            ]
        }
    },
    methods:{
        del(index){
            this.cartList.splice(index,1)
        }
    },
    computed:{
        totalPrice:{
            get(){
                // return this.cartList.reduce((s,n)=>s+n.price*n.count,0)
                let sum = 0
                for (let book of this.cartList){
                    if (book.checkbox==true){
                        sum+=book.count*book.price
                    }
                }
                return sum
            }
        }
    }

}
</script>

<style scoped>
table{
    width: 600px;
    border: 1px solid #888888;
    border-collapse: collapse;
}
td,th{
    border: 1px solid #888888;
    padding: 10px;
}
th{
    background: #cccccc;
}
</style>