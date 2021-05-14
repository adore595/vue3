<template>
    <MyBar>
        <template #two>
            <a href="#">{{name}}</a>
        </template>
    </MyBar>
    <MyBar>
        <template #one>
            <a href="#">提交</a>
        </template>
    </MyBar>
    <MyBar>
        <template #default="subdata">
            <a href="#">{{subdata.user.name}}</a>
        </template>

    </MyBar>
</template>

<script>
import MyBar from "@/components/childsComp/MyBar";

export default {
    name: "MySideBar",
    data(){
        return{
            name:'hello'
        }
    },
    components:{
        MyBar
    }
}
</script>

<style scoped>

</style>