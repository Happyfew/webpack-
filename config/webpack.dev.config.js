const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, '../dist'),
        }, // 监听文件
        compress: true, // 压缩
        open: false, // 默认打开浏览器
        hot: true, // 热模块加载
    },
    module: {
        rules: [
            {
                test: /\.(less)$/,
                use: [
                    'style-loader', // 将CSS注入DOM
                    'css-loader',   // 解析CSS导入
                    'postcss-loader', // autoprefix等
                    'less-loader',  // 使用 Less
                ],
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader', // 将 JS 字符串生成为 style 节点 
                    'css-loader',   // 将 CSS 转化成 CommonJS 模块
                    'postcss-loader', // autoprefix等
                ],
            },
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'), // 生成html模板文件
        inject: 'body', // 将生成的文件注入到body底部
        hash: false,
      }),
      new friendlyErrorsWebpackPlugin(),
    ],
    
  });