const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const miniCssExtactPlugin = require('mini-css-extract-plugin');
module.exports = {
    // entry:'./src/index.js',
    entry:{
        main:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name]_[chunkhash:8].js'
    },
    module:{
        rules:[
            {
                test:/\.(png|jpe?g|svg)/,
                use:{
                    loader:'url-loader',
                    options:{
                        name:'[contenthash].[ext]',
                        outputPath:'images/',
                        limit:2048
                    }
                }
            },
            {
                test:/\.(css|less)/,
                use:[miniCssExtactPlugin.loader,'css-loader','postcss-loader'
                    // {
                    //     loader:'postcss-loader',
                    //     options:{
                    //         plugins:[
                    //             require('autoprefixer')({
                    //                 overrideBrowserslist:['last 2 versions', '>1%']
                    //             })
                    //         ]
                    //     }
                    // }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'首页',
            template:'./src/index.html',
            filename:'index.html',
            chunks:['main']
        }),
        new CleanWebpackPlugin(),
        new miniCssExtactPlugin({
            filename:'[name]_[contenthash:8].css'
        })
    ],
    mode:'development'
}