'use strict'
/* 引入操作路径模块和webpack */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require('./build/utils')

// //设置环境
// new webpack.DefinePlugin({
//     'process.env': {
//         NODE_ENV: '"production"'
//     }
// })

// 解析目录地址
var OUTPUT = path.resolve(__dirname, './dist'); // output目录

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    mode: process.env.NODE_ENV,
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src')
        }
    },
    /* 输入文件 */
    entry: utils.entries(),
    output: {
        /* 输出目录，没有则新建 */
        path: OUTPUT,
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '/',
        /* 文件名 */
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            /* 用来解析vue后缀的文件 */
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究')
    ].concat(utils.htmlPlugin())
}