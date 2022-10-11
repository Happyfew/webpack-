const { merge } = require('webpack-merge');
const  common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename:'js/[name]-bundle-[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  'postcss-loader',
                ]
              },
              {
                test: /\.less$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader',
                  'less-loader'
                ]
              }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            inject: 'body',
            minify: {
                removeComments: true,
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style/[name].[chunkhash].css'
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    }
                }
            })
        ],
    },
});
    