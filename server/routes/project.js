// Importar Router
import { Router } from 'express';

import projectController from '@server/controllers/projectController';
// Creando la Instancia de Router
const router = new Router();
// "/projects" "/projects/index"
router.get(['/', '/index'], projectController.index);
// "/projects/add"
// sirve el formulario para agregar proyectos
router.get('/add', projectController.add);

export default router;