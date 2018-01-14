const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const UgligyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = merge(baseConfig, {
    devtool: 'source-map',
    /**
     * uglifyjs 清理没有作用到的代码
     */
    plugins: [
        new UgligyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin("style.css")
    ]
})