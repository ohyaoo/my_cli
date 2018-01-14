const path = require('path')
const root = path.resolve(__dirname, '..')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    /**
     * entry 启动入口文件
     * output 导出的文件名及位置
     * resolve webpack模块解析
     */
    entry: path.join(root, 'src/main.js'),
    output: {
        path: path.join(root, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        /**
         * alias 目录别名
         */
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            components: path.join(root, 'src/components'),
            router: path.join(root, 'src/router'),
            store: path.join(root, 'src/store'),
            views: path.join(root, 'src/views'),
            assets: path.join(root, 'src/assets')
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    /**
     * CleanWebpackPlugin 清理dist文件夹
     * HtmlWebpackPlugin 将打包文件导入模版
     */
    plugins: [
        /**
         * CleanWebpackPlugin默认config文件为root目录
         */
        new CleanWebpackPlugin('dist', {
            root: root
        }),
        new HtmlWebpackPlugin({
            template: path.join(root, 'index.html'), // 模板文件
            inject: 'body' // js的script注入到body底部
        })
    ]
}