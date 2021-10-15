const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//importando el ESLINT
const  EslintWebpackPlugin = require('eslint-webpack-plugin');
module.exports={

    mode:'development',

    entry:'./client/index.js',

    output:{
  
        path:path.join(__dirname,'public'),
    
        filename:'js/bundle.js',
    
        publicPath:'/'
    },
    devServer:{
        static:path.join(__dirname,'public'),
        port:process.env.PORT || '3000',
        host:'localhost'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/(node_modules|bower_components)/,
                use: [
                    {
                        loader:'babel-loader',
                        options:{
                            presets:[
                                [
                                    '@babel/preset-env',
                                    {
                                        'modules': false,
                                        'useBuiltIns':'usage',
                                        'targets':"> 0.25%, not dead",
                                        //'targets':{"chrome":"80"},
                                        'corejs':3
                                    }
                                ]
                            ],
                            "plugins":[
                                [
                                    "module-resolver",
                                    {
                                        "root":["./"],
                                        "alias":{
                                            "@client":"./client"
                                        }
                                    }
                                ]
                            ]
                        }
                    }
                ]
            },
            {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/app.css'
        }),
        new  EslintWebpackPlugin()
    ]
}
