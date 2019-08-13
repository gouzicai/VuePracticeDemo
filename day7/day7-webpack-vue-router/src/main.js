import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import account from './main/account.vue'
import goodslist from './main/goodslist.vue'


Vue.use(VueRouter)


var router = new VueRouter({
    routes:[
        {path:'/account',component:account},
        {path:'/goodslist',component:goodslist},
    ]
})
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})