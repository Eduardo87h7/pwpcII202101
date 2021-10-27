/* eslint-disable prettier/prettier */
import ExpHbs from 'express-handlebars';
import path from 'path';

export default (app) => {
  // Registrar el motor de plantillas
  app.engine(
    'hbs',
    ExpHbs({
      extname: '.hbs',
      defaultLayout: 'main',
    }),
  );

  // Seleccionar Motor de plantillas 
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '..', 'views'));
  return app;
};
