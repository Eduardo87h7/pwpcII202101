// Importando el router de home
import homeRouter from './home';
// Importando el router de users
import userRouter from './users';

/* GET home page. */
const addRoutes = (app) => {
  app.use('/', homeRouter);
  app.use('/users', userRouter);
  return app;
};

export default {
  addRoutes,
};
