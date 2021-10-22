// eslint-disable-next-line prettier/prettier
import ExpHbs from 'express-handlebars';
import path from 'path';

export default (app) => {
  // registrar el motor de plantillas
  app.engine(
    'hbs',
    ExpHbs({
      extname: '.hbs',
      defaultLayout: 'main',
    })
  );
  //seleccionar el motoor de plantillass
app.set('view engine','hbs');

app.set('views',path.join(__dirname, '..', 'views'));

return app;
};
