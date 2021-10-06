module.exports = {
    // especificando el archivo de entrada
    entry: './client/index.js',
    //especificar el archivo de salida
    output: {
        path: '/public',// ruta absoluta de la salida
        filename: 'bundle.js'
    },
    devServer : {
        static: './public'
    }
}