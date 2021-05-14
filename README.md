# VUE3

vue-cli脚手架安装与项目创建

> 命令安装：npm install -g @vue/cli
>
> 检查版本 vue --version
>
> 创建项目vue create 项目名称

## Vue模板中基本语法

### 插值、指令

```vue
插值：{{}}
指令：v-
（在{{}}和v-指令进行数据绑定时，支持js单个表达式）
    <p v-once>{{msg}}</p> 数据只第一次时显示，不响应式
	<p v-pre>{{msg}}</p>，内容原封不动的展示
	<p v-text='msg'></p>，就相当于插值表达式的功能
	<p v-html='title'></p>，可以解析标签
	
	data:{
		msg:'test message',
		title:`<h1 style='color:red'>Title</h1>`
	}

```

### v-bind绑定属性

> 插值{{}}只能用在模板内容中，用于动态内容绑定
> 如果希望元素的属性也可以动态绑定，需要通过v-bind指令
> “v-bind”缩写“：”（语法糖）
> 绑定有意义元素中的属性
> 绑定class属性，四种用法（字符串，数组，对象，方法）
> 绑定style属性

```vue
<h2 title="this is a test">{{msg}}</h2>
<h2 v-bind:title="msg">{{msg}}</h2>
<h2 :title="msg">{{msg}}</h2>
<img :src="imgsrc" :width="size"  :height="size" alt="">
<a :href="url">学习猿地</a>
```

### 计算属性

> 计算属性关键词: computed。
> 计算属性在处理一些复杂逻辑时是很有用的。

```vue
computed: {
    site: {
      // getter
      get: function () {
        return this.name + ' ' + this.url
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.name = names[0]
        this.url = names[names.length - 1]
      }
    }
  }
```

### 事件监听

> 在前端开发中，需要经常和用户交互
> 绑定事件监听器指令：v-on
> 缩写： @ （语法糖）
> 参数： $event
> v-on事件修饰符号
> .stop  阻止事件冒泡
> .self  当事件在该元素本身触发时才触发事件
> .capture 添加事件侦听器是，使用事件捕获模式
> .prevent  阻止默认事件
> .once 事件只触发一次

```vue
<button @click="num--">-</button>
	<input type="text" size="2" v-model="num">
<button @click="num++">+</button>
<br>
<button @click="sub(3,$event)">-</button>
	<input type="text" size="2" v-model="num">
<button @click="add()">+</button>
<br>
<div id="box1" @click.self="one()">
	<div id="box2" @click="two()">
		<button @click="three()">按钮</button>
	</div>
</div>
<br>
<a href="https:www.baidu.com" @click.prevent="demo">baidu</a>


data() {
	return {
		num:0
	}
},
methods:{
	sub(p,q){
		console.log(p);
		console.log(q);
		this.num=this.num-p
	},
	add(p){
		console.log(p);
		this.num++
	},
	one(){
		console.log("111111111");
	},
	two(){
		console.log("22222222222");
	},
	three(){
		console.log("33333333");
	},
	demo(){
		console.log("1111111");
	}
}
```

### 条件分支指令

> v-if  和 v-show
> v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
> v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换
> v-if  v-else
> v-if  v-else-if  v-else

### 循环遍历指令

> 遍历指令：v-for
> 遍历数组 v-for=”(item, [index]) in 数组”
> 遍历对象 v-for=”(value, [key], [index]) in 对象”
> vue中列表循环需加:key="唯一标识" 唯一标识可以是item里面id index等，因为vue组件高度复用增加Key可以标识组件的唯一性，为了更好地区别各个组件 key的作用主要是为了高效的更新虚拟DOM，使用diff算法的处理方法，对操作前后的dom树同一层的节点进行对比，一层一层对比

![image-20210513084118347](C:\Users\lin10\AppData\Roaming\Typora\typora-user-images\image-20210513084118347.png)

### v-model

> v-model指令的本质是： 它负责监听用户的输入事件，从而更新数据，并对一些极端场景进行一些特殊处理。同时，v-model会忽略所有表单元素的value、checked、selected特性的初始值，它总是将vue实例中的数据作为数据来源。 然后当输入事件发生时，实时更新vue实例中的数据。
>
> 实现原理： <input v-bind:value="message" v-on:input="message = $event.target.value" /> 
> v-model的修饰符号：
>  .lazy 懒加载修饰符
> .number 修饰符让其转换为 number 类型
> ·.trim修饰符可以自动过滤掉输入框的首尾空格

## Vue的组件化开发

### 父子组件之间的通信

#### 父传子

父组件直接在标签内传值 如果是变量则使用v-bind绑定

```vue
<my-main  :msg="msg"  title="title" :article="article"></my-main>
```

子组件使用props接受，可指定类型，默认值和是否缺省。

```js
props:{
	msg:{
        type:String,
        default:'lalala',
        required:true
    },
    title:{
        type: String
    },
    article:{
        type:Array
    }
}
```

#### 子传父

子组件使用$emit 传递 第一个参数为父组件调用子组件时@事件给定的名称 第二个参数为传的值

```vue
<div class="myconn">
    <button @click="change(2)">+</button>
</div>
```

```js
methods:{
    change(num){
        this.$emit('mycountevent',num);
    },
}
```

父组件 使用@事件接受并指定本地调用本地组件接受传递的值

```vue
<my-conn @mycountevent="mydemo"></my-conn>
```

```js
data(){
    return{
        count:0
    }
},
components:{
    MyConn
},
methods:{
    mydemo(data){
        this.count=this.count+data
    }
},
```

#### 父子组件之间的访问方式

> 子组件调用父组件的方法：$parent或$root
> 父组件调用子组件的方法:$children或 $refs 

子组件调用父组件方法

使用$parent直接调用、访问父组件的属性或者方法 $parent可以串连编程

使用$root直接调用、访问顶层组件的属性或者方法

```
methods:{
    one(){
        this.$parent.change();
        this.$root.appmet();
    }
}
```

父组件调用子组件的方法

使用$refs 通过子组件上的ref绑定要调用的子组件是哪一个 然后直接调用子组件的方法或者属性

```
<my-conn ref="aaa"></my-conn>
```

```js
methods:{
    two(){
        alert('父组件调用子组件的方法')
        this.$refs.aaa.changeone()
    }
},
```

### 插槽slot

> Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 Web Components 规范草案，将 <slot> 元素作为承载分发内容的出口。
> 插槽可以实现组件的扩展性 ， 抽取共性， 保留不同

父组件

```vue
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
```

子组件

```vue
<div class="mybar">
    <slot name="one"><button>提交</button></slot>
    <slot name="two">222</slot>
    <slot :user="user">def</slot>
</div>
```

### 组件的生命周期函数

```js
beforeCreate() {
    console.log('实例刚刚被创建');
},
created() {
    console.log('实例已经创建完成');
},
beforeMount() {
    console.log('模板编译之前');
},
mounted() {
    console.log('模板编译完成');
},
beforeUpdate() {
    console.log('数据更新之前');
},
updated() {
    console.log('数据更新完成');
},
activated() {
    console.log('keep-alive 缓存的组件激活时调用');
},
deactivated() {
    console.log('keep-alive 缓存的组件停用时调用');
},
beforeUnmount() {
    console.log('实例销毁之间');
},
unmounted() {
    console.log('实例销毁完成');
}
```

![image-20210513091937118](C:\Users\lin10\AppData\Roaming\Typora\typora-user-images\image-20210513091937118.png)

## Vue路由

### 延迟加载动态导入和路由模式解析

> 路由是由多个URL组成的，使用不同的URL可以相应的导航到不同的位置
> Vue-Router在切换页面时是没有重新进行请求的，使用起来就好像页面是有状态的一样
> 借助了浏览器的History API来实现的，这样可以使得页面跳转而不刷新，页面的状态就被维持在浏览器中
> vue-router中默认使用的是hash模式，也就是会出现如URL：   ，                    URL中带有#号
>
> 有三种模式
>
> 1. Hash: 使用URL的hash值来作为路由，用来指导浏览器动作的，对服务器端完全无用，支持所有浏览器。
> 2. History: 以来HTML5 History API 和服务器配置。
> 3. Abstract： 支持所有javascript运行模式。如果发现没有浏览器的API，路由会自动强制进入这个模式。

### 命名视图和自定义导航

```vue
<div id="nav">
    <router-link to="/home">首页</router-link>|
    <router-link to="/about">关于我们</router-link>|
    <button @click="$router.push('/user')">个人中心</button>
</div>
<hr>
<router-view></router-view>
```

### 子路由

```vue
<ul>
    <li><router-link to="/user/order">我的订单</router-link></li>
    <li><router-link to="/user/setting">我的设置</router-link></li>
    <li><router-link to="/user/page/1">单页1</router-link></li>
</ul>
```

### 传递参数的方式

> 传递参数主要有两种类型：params和query
> params的类型：
> 配置路由格式： /user/:id (动态路由)
> 传递的方式： 在path后面对应的值 :to=”'/user/'+uid”
> 传递后形成的路径：/user/9, /user/zs
> 接收参数:$route.params.id
> query的类型：
> 配置路由格式： /user, 正常配置
> 传递的方式： 对象中使用query的key作为传递方式:to=｛path:'/', query:{id:1,name:'abc'}｝
> 传递后形成的路径：/user?id=9, /user?id=zs
> 接收参数：$route.query.name

```vue
<ul>
    <li v-for="item in articles">
        <router-link :to="'/user/page/'+item.id">{{item.title}}</router-link>
    </li>
</ul>
<ul>
    <li v-for="item in articles">
        <router-link :to="{path:'/user/article',query:{id:item.id,title:item.title}}">{{item.title}}</router-link>
    </li>
</ul>
```

以上所有路由配置

```js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        name:'Home',
        component:()=>import('../views/Home'),
    },
    {
        path:'/about',
        name:'About',
        component: ()=>import('@/views/About')
    },
    {
        path: '/user',
        name:'User',
        component:()=>import('@/views/User'),
        children:[
            {
                path: '',
                component:()=>import('@/views/MyOrder')
            },
            {
                path: 'order',
                component: () => import('@/views/MyOrder')
            },
            {
                path: 'setting',
                component:()=>import('@/views/MySetting')
            },
            {
                path: 'page/:pid',
                component:()=>import('@/views/MyPage')

            },
            {
                path: 'article',
                component:()=>import('@/views/Myarticle')
            }
        ]

    }
]


const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router
```

### 重定向和别名

> 重定向：
> 重定向也在routes配置中完成，要从重定向/a到/b
> const routes = [{ path: '/home', redirect: '/' }]
> const routes = [{ path: '/home', redirect: { name: 'homepage' } }]
> path: '/search/:searchText',
>     redirect: to => {
>          return { path: '/search', query: { q: to.params.searchText } }
>     },
> 别名：
> 别名/as/home表示用户访问时/home，URL保持不变/home，但将被匹配，就像用户正在访问时一样/。
> const routes = [{ path: '/', component: Homepage, alias: '/home' }]
> alias: ['people', 'list']
> alias: ['/:id', '']

### 守卫导航

> 导航守卫主要用来通过跳转或取消的方式守卫导航。
>
> 前置守卫
>         //to: Route: 即将要进入的目标 路由对象, from: Route: 当前导航正要离开的路由
> router.beforeEach((to, from) => {
>   // ...  return false
> })
> 后置钩子
> 	router.afterEach((to, from) => {
>   	})
> 有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。
> 全局导航守卫
> 路由独享的守卫
> 组件内的守卫

### keep-alive

> keep-alive是Vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。
> include: 正则表达式
> exclude：正则表达式
>
> router-view是vue-router内置组件， 如果直接包含在keep-alive里面，所有路径匹配到的组件都会被缓存。

```vue
<router-view v-slot="{ Component }">
    <transition>
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </transition>
</router-view>
```





## elementui的使用

安装

> npm install element-plus --save

完整引入

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```