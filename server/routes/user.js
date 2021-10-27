// Importar Router
import { Router } from 'express';

// Importar controlador 
import userController from '@server/controllers/userController';

// Crear instancia router
const router = new Router();

/* GET users listing. */
router.get('/', userController.index);

export default router;
