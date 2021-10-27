// Importando el router home
import homeRouter from './home';
// Importando router user
import userRouter from './user';

// Agregando Rutas a app
const addRoutes = (app) => {
  app.use('/', homeRouter);
  app.use('/user', userRouter);
  return app;
};

export default {
  addRoutes,
};
