const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')


module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        publicPath: '/',
        port: 3000,
        inline: true,
        hot: true,
        open: true
    },
    /**
     * HotModuleReplacementPlugin 热加载开启
     */
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})