//main.js是我们项目js入口文件

//import **** from **** 是ES6中导入模块的方式，
import $ from 'jquery'
//使用import语法，导入css样式表
import './css/index.css'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
//webpack,默认只能打包处理js类型的文件，无法处理其他的非js类型的文件;
//如果要处理 非js类型的文件，需要手动安装一下合适的第三方loader加载器
//1.npm install style-loader css-loader -D
//2.打开webpack.config.js这个配置文件，在里面，新增一个配置节点，叫做module，它是一个对象，在这个module对象身上，有个rules
//  属性，这个rules属性是个数组，这个数组中存放了所有第三方文件的匹配和处理规则；k



$(function(){
    $('li.odd').css('backgroundColor','lightblue')
    $('li.even').css('backgroundColor',function(){
        return '#' + 'D97634'
    })
})


//经过刚才的演示，webpack
// 1.webpack能够处理js文件的相互依赖关系；
// 2.webpack能够处理js的兼容性，把高级的、浏览器不支持的语法，转化为低级的、浏览器能够正常运行的语法


//用webpack-dev-server 这个工具，来实现自动编译的功能
// 1.运行 npm i webpack-dev-server - D把这个工具安装到项目的本地开发依赖
// 2.安装完毕后，这个工具的用法，和webpack命令用法一模一样
// 3.由于我们是在项目中，本地安装的webpack-dev-server，所以，无法把它当做脚本命令，在powershell终端中直接进行；（只有那些安装到全局 -g中的工具，才能在终端运行）
// 4.注意：webpack-dev-server这个工具，如果想要正常运行，要求在本地项目中，必须安装webpack
// 5.webpack-dev-server 帮我们打包生成的bundle.js文件，并没有存放到实际的物理磁盘上 ， 而是直接托管到了电脑的内存中，所以我们在项目根目录中，看不见打包好的bundl.js
// 6.我们可认为，webpack-dev-server可把打包好的文件，以一种虚拟的形式，托管到了项目的根目录中，虽然我们看不到他，但是可以认为，和dist src node_moudules 平级，有一个看不见的文件叫做bundle.js（更快）



//class关键字，是es6中提供的新语法，是用来实现es6中面向对象编程的方式
class Person{
    static info = {name:'cjj',age:20}
}
//webpack中默认只能处理一部分es6语法，一些更高级的es6语法或者es7语法，webpack处理不了，要第三方的loader
//通过babel，可以帮我们将高级的语法转换为低级的语法
//1.在webpack中，可以运行如下两套命令，安装两套包，去安装babel相关的loader功能：
//第一套包 npm i babel-core babel-loader babel-plugin-transform-runtime -D
//第二套包 npm i babel-preset-env babel-preset-stage-0 -D
//2.打开webpack的配置文件，在module节点下的rules数组中，添加一个新的匹配规则：
//  {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
//  只处理自己写的js文件，不处理node_modules里面的js文件
//3.在项目的根目录中，新建一个叫做.babelrc的配置文件，这个配置文件属于json格式
// .babelrc中写如下配置：
// {
//     "presets":["env","stage-0"],
//     "plugins":["transform-runtime"]
// }