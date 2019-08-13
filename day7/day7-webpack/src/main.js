//在webpack中尝试使用Vue；
//注意：在webpack中，使用import Vue from 'vue'导入的Vue构造函数，功能不完整，只提供了runtime-only的方式，并没有提供像网页中那样的使用方式

import Vue from '../node_modules/vue/dist/vue.js'
import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
import login from './login.vue'


var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    // render:function(createElements){
    //     return createElements(login);
    // }
    // render:createElements=>{
    //     return createElements(login);
    // }
    render:createElements=> createElements(login)
    
})











//包的查找规则：
// 1.找项目根目录中有没有node_modules的文件夹
// 2.在node_modules中根据包名，找对应的vue文件夹
// 3.在vue文件夹中，找一个叫做package.json的包配置文件
// 4.在package.json文件中，查找一个叫main属性[main属性指定了这个包在被加载的时候，的入口文件]


// class Person{
//   static info = {name:'cjj',age:20}
// }


// var login = {
//     template:'<h1>这是登录组件</h1>'  
// }

// var vm = new Vue({
//     el:'#app',
//     data:{
//         msg:'123'
//     },
//     components:{
//         login
//     },
//     // render:function(createElements){
//     //     return createElements(login)
//     // }
// })
