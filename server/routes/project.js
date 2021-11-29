// Importar Router
import { Router } from 'express';

//  Importar el controlador de proyectos
import projectController from '@server/controllers/projectController';

// Creando Instancia de Router
const router = new Router();

// GET "/projects" "/projects/index"
router.get(['/', '/index'], projectController.index);

// GET "/projects/add"
// sirve el formulario para agregar proyectos
router.get('/add', projectController.add);

// POST "/projects/add"
// Procesa el formulario
router.post('/add', projectController.addPost);

export default router;
