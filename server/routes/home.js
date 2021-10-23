// Router
import { Router } from 'express';
// importando al controlador del home

import homeController from '@server/controllers/homeController';

// Creando la instancia de un enrutador
const router = new Router();

router.get('/', homeController.index);

router.get('/greeting', homeController.greeting);

// Exportando el router que maneja las subrutas para el controlador
export default router;
