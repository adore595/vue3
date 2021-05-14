<template>
    <div>
        <!--        <button @click="isShow=isShow==false?true:false">显示/隐藏</button>-->
        <!--v-if是真正的条件渲染，确保再切换过程中适当的被销毁和重建-->
        <!--v-show元素总是会被渲染，基于css样式属性进行切换-->
        <!--        <div v-if="isShow">-->
        <!--            {{msg}}-->
        <!--        </div>-->
        <!--        <div v-show="isShow">-->
        <!--            {{msg}}-->
        <!--        </div>-->
        <button @click="card=1">按钮一</button>
        <button @click="card=2">按钮二</button>
        <button @click="card=3">按钮三</button>
        <button @click="card=4">按钮四</button>
        <div v-if="card==1">
            1111111111<br>
        </div>
        <div v-else-if="card==2">
            2222222222<br>
        </div>
        <div v-else-if="card==3">
            3333333333<br>
        </div>
        <div v-else>
            4444444444<br>
        </div>

    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            msg:'this is a test',
            isShow:true,
            card:1
        }
    },

}
</script>

<style scoped>

</style>