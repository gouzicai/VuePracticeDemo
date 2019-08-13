const path = require('path');
const resolve = require('path').resolve;
//启动热更新的第二部
const webpack = require('webpack');
//导入内存中生成HTML界面的插件
//只要是插件，都一定要放到plugins节点中去
// 1.自动在内存中根据指定页面去生成一个内存的页面
// 2.自动把打包好的bundle.js追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')


//这个配置文件，能够处理一个js文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = {
    entry: __dirname +'/src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    mode: 'development', // 设置mode
    // 第二种热更新的方式
    // devServer:{//配置dev-server命令参数的第二种形式，相对来说，这种方式麻烦一些
    //     open:true,
    //     port:3000,
    //     contentBase:'src',
    //     hot:true //启动热更新的第一步
    // },
    // plugins:[//配置插件的节点
    //     new webpack.HotModuleReplacementPlugin() //new一个热更新的模块对象
    // ],
    plugins:[
        new htmlWebpackPlugin({//创建一个在内存中生成html页面的插件
            template:path.join(__dirname,'./src/index.html'),//指定模版页面，将来会根据指定的页面路径，去生成内存中的画面
            filename:'index.html'//指定生成的页面的名称
        })
    ],
    module:{//用于配置所有的第三方模块 加载器
        rules:[//所有第三方
            {test: /\.css$/,use:['style-loader','css-loader']},//配置处理css文件的第三方loader规则 先交给右边的处理，依次向左
            {test: /\.less$/,use:['style-loader','css-loader','less-loader']},
            {test: /\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test: /\.(jpg|jpeg|png|bmp|gif)$/,use:'url-loader?limit=7000&name=[hash:8]-[name].[ext]'},//处理图片路径的loader  
            //limit给定的值是图片的大小，单位是byte，如果我们引用的图片的大小大于等于这个值，就不会转换为base64
            //一般默认把图片名称改为hash，如果想要保留原有的名字，要用name=[name].[ext]
            //如果使用原来的名字，为了防止重名，可以在前面加hash值
            {test: /\.(ttf|eot|woff|woff2|svg)$/,use:'url-loader'}, //处理字体文件的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//这是配置Babel来转换高级的语法
        ]
    }
}