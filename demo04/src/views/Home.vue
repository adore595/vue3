<template>
    <div>
        <h1>
            <small>书籍列表————显示所有书籍</small>
        </h1>
        <hr>

        <el-table
            :data="bookList"
            stripe
            style="width: 100%;margin:auto auto">
            <el-table-column
                prop="bookid"
                label="书籍编号"
                width="200">
            </el-table-column>
            <el-table-column
                prop="bookname"
                label="书籍名称"
                width="200">
            </el-table-column>
            <el-table-column
                prop="bookcounts"
                label="书籍数量"
                width="200">
            </el-table-column>
            <el-table-column
                prop="detail"
                label="书籍详情"
                width="200">
            </el-table-column>
            <el-table-column
                label="操作"
                width="200">
                <el-button type="text">修改</el-button>
                <el-button type="text">删除</el-button>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {get} from "@/util/request";

export default {
    data() {
        return {
            bookList:[]
        }
    },
    methods:{
        getBookList(){
            get("/findall").then(res=>{
                this.bookList=res.data
                console.log(res.data)
                console.log(this.bookList);
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    mounted() {
        this.getBookList()
    }


}
</script>

<style scoped>

</style>