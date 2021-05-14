<template>
    <div style="width: 750px">
        <el-table
            :data="bookList"
            stripe
            style="width: 100%;margin:auto auto">
            <el-table-column
                prop="bookid"
                label="书籍编号"
                width="100">
            </el-table-column>
            <el-table-column
                prop="bookname"
                label="书籍名称"
                width="150">
            </el-table-column>
            <el-table-column
                prop="bookcounts"
                label="书籍数量"
                width="150">
            </el-table-column>
            <el-table-column
                prop="detail"
                label="书籍详情"
                width="200">
            </el-table-column>
            <el-table-column
                label="操作"
                width="150">
                <template #default="scope">
                    <el-button @click="deleteBook(scope.$index,scope.row.bookid)" type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
import {get} from "@/util/request";

export default {
    name: "ShowList",
    data() {
        return {
            bookList: []
        }
    },
    methods: {
        getBookList() {
            get("/findall").then(res => {
                this.bookList = res.data
                console.log(res.data)
                console.log(this.bookList);
            }).catch(err => {
                console.log(err);
            })
        },
        deleteBook(index,id){
            const url = "/del/" + id;
            // console.log(index,id,url);
            get(url).then(res=>{
                console.log(res);
                this.bookList.splice(index,1)
            }).catch(err=>{
                console.log(err);
            })
        },
    },
    mounted() {
        this.getBookList()
    }
}
</script>

<style scoped>

</style>