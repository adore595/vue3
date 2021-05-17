<template>
    <div class="one">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="书籍名称" prop="bookname">
                <el-input v-model="ruleForm.bookname"></el-input>
            </el-form-item>
            <el-form-item label="书籍数量" prop="bookcounts">
                <el-input v-model="ruleForm.bookcounts"></el-input>
            </el-form-item>
            <el-form-item label="书籍详情" prop="detail">
                <el-input v-model="ruleForm.detail"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">修改</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {post} from "@/util/request";

export default {
    data() {
        return {
            ruleForm: {
                bookid:0,
                bookname: '',
                bookcounts: 0,
                detail: ''
            },
            rules: {
                bookname: [
                    { required: true, message: '请输入书的名称', trigger: 'blur' },
                    { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
                ],
                bookcounts: [
                    { required: true, message: '请输入书本数量', trigger: 'change' }
                ],
                detail: [
                    { required: true, message: '请输入书本详情', trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        submitForm() {
            const url = '/update/'+this.ruleForm.bookid
            post(url,this.ruleForm).then(res=>{
                console.log(res);
                this.$router.push('/main')
            }).catch(err=>{
                console.log(err);
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        init(){
            this.ruleForm.bookid = this.$route.query.id
            this.ruleForm.bookname = this.$route.query.name
            this.ruleForm.bookcounts = this.$route.query.counts
            this.ruleForm.detail = this.$route.query.detail
        }
    },
    mounted() {
        this.init()
        console.log(this.ruleForm);
    },
    computed:{
        bookId(){
            return this.$route.params.pid
        },
    }

}
</script>

<style scoped>
.one{
    width: 1000px;
}
</style>
