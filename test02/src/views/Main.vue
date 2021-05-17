<template>
    <div class="one">

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
                <template #default="scope">
                    <el-button
                        size="mini"
                        @click="$router.push(
                            {path:'/update',
                            query:{
                                id:scope.row.bookid,
                                name:scope.row.bookname,
                                counts:scope.row.bookcounts,
                                detail:scope.row.detail
                            }
                            })">编辑</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
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
                console.log(res);
                this.bookList = res.data
            }).catch(err=>{
                console.log(err);
            })
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            const url = '/del/'+row.bookid; ````
            get(url)
        }
    },
    mounted() {
        this.getBookList()
    }


}
</script>

<style scoped>
.one{
    width: 1000px;
}
</style>