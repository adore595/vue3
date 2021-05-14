<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1" @click="$router.push('/list')">列表</el-menu-item>
        <el-menu-item index="2" @click="$router.push('/add')">添加</el-menu-item>
    </el-menu>
    <router-view></router-view>
</template>

<script>
export default {
    data() {
        return {
            activeIndex:'1'
        };
    },
    methods: {

    }
}
</script>

<style>

</style>
