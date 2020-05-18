const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    entry: path.join(__dirname,'./src/main.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    mode:'development',
    devServer:{
        open: true, //自动打开浏览器
        port:3001,//设置启动时候的端口
        contentBase: 'src',
        hot: true

    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test: /\.css$/, use:['style-loader','css-loader']},
            // {test: /\.less$/, use:['style-loader','css-loader','less-loader']}, 
            {test: /\.scss$/, use:['style-loader','css-loader','sass-loader']}, 
            {test: /\.(jpg|png|gif|jpeg|bmp)$/, use:'url-loader'}, 
            {test: /\.(|ttf|woff|woff2|svg|otf)$/, use:'file-loader'},                 
            {test: /\.js$/, use:'babel-loader',exclude: /node_modules/}, 
            {test: /\.vue$/, use:'vue-loader'}                                                                                                                                                                                          
        ]
    },
    resolve: {
        alias: {
            // 'vue': 'vue/dist/vue.js'
        }
    }
}