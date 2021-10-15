const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    //establecer el modo de desarrollo
    mode: 'development',
    //especificando el archivo de emtrada
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename:'js/bundle.js',
        publicPath: './'
    },
    devServer:{
        static: path.join(__dirname, 'public'),
        port: 8085,
        host: 'localhost'
    },
    module: {
        rules: [
            {
              test: /\.js$/,  
              exclude: /(node_modules|bower_components)/,
              use: [
                  {
                      loader:'babel-loader',
                      options: {
                          presets:[
                              [
                                  '@babel/preset-env',
                                  {
                                    'modules': false,
                                    'useBuiltIns':'usage',
                                    'targets':"> 0.25%, not dead",
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
                                         "@client": "./client",
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
                use: [MiniCssExtractPlugin.loader,'css-loader']
                }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/app.css'
        })
    ]
}