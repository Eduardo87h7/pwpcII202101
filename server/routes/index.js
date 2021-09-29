const { Router } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author:'EDUARDO1', appName: 'webApp', company:'Awsom Software' });
});
/*AGREGANDO NUEVA RUTA */ 
/*
router.get('/greeting', function(req, res, next){
  res.send('Hola campion de la web')
});
*/
router.get('/greeting', function(req, res, next){
  res.status(200).json({message:'Hola campion de la web'})
});


module.exports = router;
