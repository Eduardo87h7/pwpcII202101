// Importando el router home
import homeRouter from './home';
// Importando router user
import userRouter from './user';
// Importante route de projects
import projectRouter from './project';

// Agregando Rutas a app
const addRoutes = (app) => {
  // home routes
  app.use('/', homeRouter);
  // project routes
  app.use('/projects', projectRouter);
  // user routes
  app.use('/user', userRouter);
  return app;
};

export default {
  addRoutes,
};
