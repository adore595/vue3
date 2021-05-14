<template>
    <div>
        <div v-if="cartlist.length <=0 ">你没有选择的商品，购物车为空， 去购物</div>
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

            <tr v-for="(item,index) in cartlist" :key="item.id">
                <td><input type="checkbox" v-model="item.checkbox"></td>
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td><small>￥</small>{{item.price.toFixed(2)}}</td>
                <td>
                    <button @click="item.count--" :disabled="item.count<=1">-</button>
                    {{item.count}}
                    <button @click="item.count++">+</button>
                </td>
                <td><a href="#" @click.prevent="del(index)">删除</a></td>
            </tr>
            <tr>
                <td colspan="3" align="right">总价</td>
                <td colspan="3">{{totalPrice}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                cartlist: [
                    {id:1, checkbox:true, name:'《细说PHP》', price:10, count:1},
                    {id:2, checkbox:true, name:'《细说网页制作》', price:10, count:1},
                    {id:3, checkbox:true, name:'《细说JavaScript语言》', price:10, count:1},
                    {id:4, checkbox:true, name:'《细说DOM和BOM》', price:10, count:1},
                    {id:5, checkbox:true, name:'《细说Ajax与jQuery》', price:10, count:1},
                    {id:6, checkbox:true, name:'《细说HTML5高级API》', price:10, count:1},
                ]
            }
        },
        computed: {
            totalPrice: {
                get() {
                    let sum = 0;
                    for(let book of this.cartlist) {
                        if(book.checkbox) {
                            sum += book.price * book.count;
                        }

                    }

                    return '￥'+sum.toFixed(2);
                }
            }
        },
        methods:{
            del(index) {
                   this.cartlist.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    table {
        width:600px;
        border:1px solid #888888;
        border-collapse: collapse;
    }

    th {
        background: #ccc;
    }

    td, th {
        border:1px solid #888888;
        padding:10px;
    }
</style>