// Importar Router
import { Router } from 'express';

// Importando al controlador Home
import homeController from '@server/controllers/homeController';

// Creando Instancia de Router
const router = new Router();

// Get '/'
router.get('/', homeController.index);

// Get '/greeting'
router.get('/greeting', homeController.greeting)

// Exportando router de subritas
// para controlador home
export default router;


