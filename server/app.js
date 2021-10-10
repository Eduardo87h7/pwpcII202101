//var createError = require('http-errors');
import createError from 'http-errors'
//var express = require('express');
import express from 'express'
//var path = require('path');
import path from 'path';
//var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
//var logger = require('morgan');
import logger from 'morgan'

//var indexRouter = require('./routes/index');
import indexRouter from '@s-routes/index'
//var usersRouter = require('./routes/users');
import usersRouter from '@s-routes/users'
//modulos webpack
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.dev.config'
import webpackDevConfig from '../webpack.dev.config';
//consultar el modo en que se esta ejecutando la aplicacion 
const env = process.env.NODE_ENV || "developement";
//se crea la aplicacion expres
var app = express();
//verificando el modo de ejecucion de la aplicacion
if(env === 'development'){
  console.log('>Excecuting in Development Node: Webpack Hot Reloading')
  //agregando la ruta del HMR
  //reload=true: habilita la recarga del frontend cuando hay cambios en el codigo
  //fuente del frontend
  //timeout=100 tiempo de espera entre recarga y recarga
  webpackConfig.entry = ['webpack-hot-middleware/client?reload=true&timeout=1000',webpackConfig.entry];
  //paso 2. agregamos el pligin
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  //paso 3 crear el compilador de webpack
  const compiler = webpack(webpackConfig);
  //agregando middleware a la cadena de middleware de nuetra aplicacion
  app.use(WebpackDevMiddleware(compiler,{
    publicPath: webpackDevConfig.output.publicPath
  })); 
  //paso 5 agregar el webpackhotmiddleware
  app.use(WebpackHotMiddleware(compiler));

}else{
  console.log('>Executing in production Mode...');
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..','public')));
//app.use(express.static('C:\Users\Eduardo Garcia\OneDrive\Escritorio\EDUARDO-GARCIA\PILA COMPLETA 2\ProjNotes\public'));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
