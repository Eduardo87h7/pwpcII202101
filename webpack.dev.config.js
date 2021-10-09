const path = require('path');
const { devServer } = require('./webpack.config');
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
    }
}