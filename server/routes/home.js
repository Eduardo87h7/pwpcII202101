// Importar Router
import { Router } from 'express';

// Importando al controlador Home
import homeController from '@server/controllers/homeController';

// Creando Instancia de Router
const router = new Router();

// Get '/'
router.get(['/', '/index'], homeController.index);

// Get '/greeting'
router.get('/greeting', homeController.greeting);

// GET '/about'
router.get('/about', homeController.about);

// Exportando router de subritas
// para controlador home
export default router;
